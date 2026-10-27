// Vercel Serverless Function: 钉钉免登身份识别与 AI 表格静默打卡
const https = require('https');

const APP_KEY = process.env.DINGTALK_APP_KEY || 'dingpafeulhpk1qyz962';
const APP_SECRET = process.env.DINGTALK_APP_SECRET || 'q3JqmTIKaTP7Jw1NiCtbaK1haI9w5EkQIAK8GS2v8s-SYbjV37E-qx6jkxRA23-_';
const BASE_ID = process.env.DINGTALK_BASE_ID || 'bva6QBXJwaMRK5jvu7O5lR65Wn4qY5Pr';

function postJson(url, data, headers = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const body = JSON.stringify(data || {});
    const req = https.request({
      hostname: u.hostname,
      port: 443,
      path: u.pathname + u.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
        ...headers
      }
    }, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); }
        catch (e) { resolve({ raw }); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function getJson(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.request({
      hostname: u.hostname,
      port: 443,
      path: u.pathname + u.search,
      method: 'GET',
      headers
    }, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); }
        catch (e) { resolve({ raw }); }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

let cachedToken = null;
let tokenExpiresAt = 0;

async function getAccessToken() {
  const now = Date.now();
  if (cachedToken && now < tokenExpiresAt - 60000) {
    return cachedToken;
  }
  const res = await postJson('https://api.dingtalk.com/v1.0/oauth2/accessToken', {
    appKey: APP_KEY,
    appSecret: APP_SECRET
  });
  if (res.accessToken) {
    cachedToken = res.accessToken;
    tokenExpiresAt = now + (res.expireIn || 7200) * 1000;
    return cachedToken;
  }
  throw new Error('Failed to get accessToken: ' + JSON.stringify(res));
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const path = req.query.action || (req.url.split('?')[0].replace('/api/', ''));

  try {
    const token = await getAccessToken();

    // 1. 免登换取用户信息: /api/user?code=xxx
    if (path === 'user' || path === 'dingtalk-user') {
      const code = req.query.code || (req.body && req.body.code);
      if (!code) {
        return res.status(400).json({ error: 'Missing auth code' });
      }
      const userRes = await postJson(`https://oapi.dingtalk.com/topapi/v2/user/getuserinfo?access_token=${token}`, { code });
      if (userRes.errcode === 0 && userRes.result) {
        return res.status(200).json({
          success: true,
          name: userRes.result.name,
          userid: userRes.result.userid,
          unionid: userRes.result.unionid,
          avatar: userRes.result.avatar
        });
      }
      return res.status(400).json({ error: userRes.errmsg || 'Failed to get userinfo', detail: userRes });
    }

    // 2. 静默打卡写入 AI 表格: /api/checkin (POST)
    if (path === 'checkin' || path === 'dingtalk-checkin') {
      const { operatorId, name, lessonTitle, progress, status, time } = req.body || {};
      const targetSheetId = '9fg2cDW'; // 学员进度监控 表格ID
      const opId = operatorId || 'Bzhd3tcSE5xIBuwNba6CIQiEiE'; // 默认保底操作人：苏菲菲的 unionid

      const appendRes = await postJson(
        `https://api.dingtalk.com/v1.0/notable/bases/${BASE_ID}/sheets/${targetSheetId}/records?operatorId=${encodeURIComponent(opId)}`,
        {
          records: [
            {
              fields: {
                "运营姓名": name,
                "打卡时间": time || new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }),
                "完成课时": lessonTitle,
                "当前进度": progress,
                "国际站子账号": name,
                "学习状态": status || "学习中"
              }
            }
          ]
        },
        { 'x-acs-dingtalk-access-token': token }
      );
      return res.status(200).json({ success: true, result: appendRes });
    }

    // 默认测试连通性
    return res.status(200).json({ status: 'ok', tokenValid: !!token, baseId: BASE_ID });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
