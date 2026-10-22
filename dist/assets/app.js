const lessons = [
  {
    id: 1,
    stage: "基础",
    title: "先认识国际站流量逻辑",
    summary: "新人第一课：先知道买家从哪里看到产品，以及流量为什么会来到一条产品链接。",
    duration: "20 分钟",
    updated: "2026-09",
    prerequisites: "无",
    outcomes: ["找到后台的流量来源页面", "说清常见流量入口分别代表什么", "理解曝光、点击、访问和询盘的先后关系"],
    quick: "把国际站想成一个大型线上展会：关键词、推荐、活动和广告负责把买家带到你的展位；主图让买家愿意停下来；产品页让买家看懂；最后买家才可能发询盘。新人先建立这张简单地图，不需要急着计算复杂指标。",
    steps: [
      ["先认识“流量”", "流量就是买家通过平台入口看到或访问你的产品。没有被看见，后面的点击和询盘都不会发生。"],
      ["先按后台认识入口", "先认识搜索、系统推荐、导购会场、频道、互动、自营销、直接访问、店内和站外等来源。第一课只要知道买家从哪里来，不急着分析每一项涨跌。"],
      ["理解产品匹配", "平台需要判断你的产品是什么、适合谁。类目、标题、关键词、属性和图片越一致，越容易匹配到合适买家。"],
      ["理解点击", "有曝光不等于有访问。买家通常会根据主图、标题、价格和产品相关性决定是否点击。"],
      ["理解询盘", "有访问也不等于有询盘。产品页还要回答规格、MOQ、交期、认证、定制和信任问题。"],
      ["先记住学习顺序", "认识流量 → 选对产品和国家 → 找词 → 做好链接和主图 → 获取流量 → 看数据优化。后面的课程会逐步展开。"]
    ],
    decisionTitle: "新人先记住",
    decisions: [
      ["曝光", "平台把产品展示给了买家", "买家看到的是否是正确产品"],
      ["点击", "买家愿意进入产品页", "主图、标题和价格是否有吸引力"],
      ["访问", "买家开始了解产品", "规格、卖点和信任信息是否容易看懂"],
      ["询盘", "买家愿意进一步沟通", "产品与客户需求是否真正匹配"]
    ],
    checklist: ["能在后台找到“数据参谋 → 流量参谋 → 流量来源”", "能说出搜索、系统推荐、频道、互动和站外等入口的基本含义", "知道曝光不等于点击", "知道点击不等于询盘", "能复述后续学习顺序"],
    assignment: "不用看数据，先画一张简单路径图：买家从哪里看到你的产品、为什么会点击、进入产品页后最想确认什么。",
    sources: [{label:"知识星球原文（会员）", url:"https://t.zsxq.com/2TxTS"}]
  },
  {
    id: 2,
    stage: "基础",
    title: "主推产品与国家定位",
    summary: "先定产品再定国家：用访客、询盘、成交和成本四组数据，选出真正值得集中资源的市场。",
    duration: "45 分钟",
    updated: "2026-10",
    prerequisites: "第 01 课",
    outcomes: ["用一张评分表选出 3 个主推产品，写清入选和淘汰理由", "分清流量国家和成交国家，说清两者的差距", "输出一张 3×3 的产品 × 国家优先级矩阵", "为每个重点国家写出关键词、主图和报价的差异点"],
    quick: "主推市场不是访客最多的市场，而是需求匹配、竞争可控、询盘质量、成交能力和获客成本综合最优的市场。顺序不能反：先确认自己能稳定交付什么产品，再去找最认这类产品的国家。产品和国家对不上，后面的关键词、主图和投放都在替同行交学费。",
    steps: [
      ["盘清自己能交付什么", "把供应链、认证、MOQ、交期、定制能力、包装方式和可接受的价格带逐项写下来。这一步决定你能接什么单，不由愿望决定。"],
      ["选出候选主推产品", "按四个维度打分：市场有需求、自己有优势、竞争可切入、利润能覆盖获客成本。每个维度只取 5、3、1 三档（三档标准和案例都在下面的展开区），先留 5 个候选，再按总分收敛到 3 个。",
        `<details class="step-more"><summary>展开看三档打分标准与完整案例</summary><div class="step-more-body">
          <p class="step-more-label">一、先定三档标准</p>
          <p class="step-more-note">只写四个维度，真到打分时还是会卡住：什么算「有需求」？什么算「有优势」？直接把每个维度拆成三档，只取 5、3、1 三个值，满分 20 分。</p>
          <div class="source-table-wrap"><table class="decision-table score-table"><thead><tr><th>维度</th><th>5 分</th><th>3 分</th><th>1 分</th></tr></thead><tbody>
            <tr><td>市场有需求</td><td>近 90 天有稳定搜索量，且已有 3 个以上不同买家的真实询盘</td><td>有搜索量，询盘零星</td><td>只有零星搜索，几乎没人问</td></tr>
            <tr><td>自己有优势</td><td>自有工厂或独家供应，有认证，MOQ 和交期能压过同行</td><td>有稳定供应商，价格和交期处于中位</td><td>贸易拼货，价格和交期都没把握</td></tr>
            <tr><td>竞争可切入</td><td>头部链接没有垄断，主图和详情普遍粗糙</td><td>有强对手，但存在认证、定制或小单的差异空间</td><td>头部集中打价格战，找不到差异点</td></tr>
            <tr><td>利润能覆盖获客成本</td><td>毛利能覆盖多倍点击成本，一次成交就回本</td><td>毛利偏薄，必须压住点击成本才不亏</td><td>毛利太低，靠广告基本不可能回本</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>分档口径：</strong>16—20 分进核心；11—15 分进验证；10 分及以下暂缓。分数只用来排序，不能替代对单个客户的判断；每季度按最新数据重打一次。<br><strong>别和第 7 步混用：</strong>这张卡打的是「做哪个产品」；第 7 步是把产品和国家组合起来再打一次（五维、1—5 分），回答的是「这个产品先打哪个国家」。两张卡的口径不同，不要合并成一张。</div>
          <p class="step-more-label">二、再看一个完整案例</p>
          <p class="step-more-note">以一家按摩类产品供应商为例，按上面的三档标准给 5 个候选打分。表内为教学示例，不对应任何真实店铺数据。</p>
          <div class="source-table-wrap"><table class="decision-table score-table case-table"><thead><tr><th>候选产品</th><th>市场有需求</th><th>自己有优势</th><th>竞争可切入</th><th>利润覆盖</th><th>总分</th><th>结论</th></tr></thead><tbody>
            <tr><td>颈部按摩仪（充电款）</td><td>5</td><td>5</td><td>3</td><td>5</td><td>18</td><td>核心</td></tr>
            <tr><td>头皮按摩器</td><td>3</td><td>5</td><td>5</td><td>5</td><td>18</td><td>核心</td></tr>
            <tr><td>眼部按摩仪</td><td>5</td><td>3</td><td>1</td><td>3</td><td>12</td><td>验证</td></tr>
            <tr><td>按摩坐垫</td><td>3</td><td>3</td><td>3</td><td>3</td><td>12</td><td>验证</td></tr>
            <tr><td>足浴按摩盆</td><td>1</td><td>3</td><td>1</td><td>1</td><td>6</td><td>暂缓</td></tr>
          </tbody></table></div>
          <div class="case-reason">
            <div><strong>为什么砍掉足浴按摩盆</strong><p>需求本来就不高，自有供应没优势，头部在打价格战，毛利也撑不住点击成本——三项落在最低档。放进主推只会拖住预算。</p></div>
            <div><strong>为什么头皮按摩器反而进了核心</strong><p>需求只算中等（3 分），但自有供应强、竞品页面粗糙、毛利足够。这种「需求中等 + 自己能赢」的组合，常常比高需求红海更容易出结果。</p></div>
            <div><strong>为什么眼部按摩仪只做验证</strong><p>需求明确，但头部集中、差异化空间小。先用小预算跑两周询盘质量，达标再提为核心，不达标就退回暂缓。</p></div>
          </div>
          <div class="method-note"><strong>三个主推的搭配：</strong>2 个核心产品保证产出，1 个验证产品留增长机会。不要 5 个全上（预算摊薄，每个都做不深），也不要只留 1 个核心（没有后备，一波动就断档）。</div>
        </div></details>`],
      ["查国家分布：本店买家 × 行业买家", "两个页签都要看：本店买家告诉你「我已经在哪里有证据」，行业买家告诉你「需求在哪里」。先本店、再行业，最后用四象限定取舍——只看一个都会偏。",
        `<details class="step-more"><summary>展开看两个口径怎么取舍</summary><div class="step-more-body">
          <p class="step-more-label">为什么要看两个页签</p>
          <div class="mindmap"><div class="mm-root">主推国家 ＝ 本店证据 × 行业需求</div><ul class="mm-list">
            <li><strong>本店买家：我已有的证据</strong><span>数据参谋 → 买家参谋 → 本店买家。买家类型选「访问买家」，看「买家来源 → Top 国家及地区分布」。回答的是「谁已经在看我、问我、买我」</span></li>
            <li><strong>行业买家：市场的容量</strong><span>同一页顶部切到「行业买家」。不依赖你的历史，回答的是「这个行业的需求集中在哪些国家」</span></li>
            <li><strong>只看本店会怎样</strong><span>你只会加码已经做过的地方。没投过的国家在数据里根本不出现，但它不代表没需求——本店数据反映的是你的投放史，不是市场排序</span></li>
            <li><strong>只看行业会怎样</strong><span>行业有需求，不等于份额能给你。行业口径里含着大量你打不过的对手，容易一头撞进红海</span></li>
            <li><strong>正确顺序</strong><span>先本店找证据 → 再行业找缺口 → 最后交叉定取舍。反过来做，就是拿行业热度给自己找理由</span></li>
          </ul></div>
          <p class="step-more-label">先定「强」和「高」怎么判，否则四象限没法用</p>
          <p class="step-more-note">「强」不是感觉强，是两个数说了算。</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>判断项</th><th>判为「强 / 高」</th><th>判为「弱 / 低」</th><th>为什么这么定</th></tr></thead><tbody>
            <tr><td>本店证据</td><td>近 90 天该国三条同时成立：① 访客进入 Top 10 ② 询盘不少于 3 条 ③ 至少 1 笔成交，或已进入报价谈判</td><td>三条里缺任意一条</td><td>只有访客没有询盘＝路过；有询盘没成交＝还在验证。都不算证据</td></tr>
            <tr><td>行业需求</td><td>该国在你主营类目的行业买家里排进 Top 10</td><td>排在 Top 10 之外</td><td>用同一个排序口径，避免「我觉得这个国家有潜力」</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>阈值可以自己定，但定了就固定用。</strong>这个课用「询盘 ≥3 条、行业 Top 10」，你也可以改成 ≥5 条、Top 5。但一旦定下来，整个矩阵、整个季度都用同一套，否则两张表没法比，也没法和上季度比。</div>
          <p class="step-more-label">四象限：两个都看，怎么取舍</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>本店证据</th><th>行业需求</th><th>定位</th><th>动作</th></tr></thead><tbody>
            <tr><td>强<br><span class="cell-sub">访客＋询盘＋成交都有</span></td><td>高<br><span class="cell-sub">行业 Top 10 内</span></td><td>主攻</td><td>加预算、扩精准词、按该国重做主图和报价</td></tr>
            <tr><td>强<br><span class="cell-sub">访客＋询盘＋成交都有</span></td><td>低<br><span class="cell-sub">行业 Top 10 外</span></td><td>利基</td><td>保留，靠精准词吃利润，不扩投放</td></tr>
            <tr><td>弱<br><span class="cell-sub">三项缺任意一项</span></td><td>高<br><span class="cell-sub">行业 Top 10 内</span></td><td>待验证</td><td>先查有没有曝光：零曝光＝没做过，可小预算试；有曝光没询盘＝承接问题，先修页面再加钱</td></tr>
            <tr><td>弱<br><span class="cell-sub">三项缺任意一项</span></td><td>低<br><span class="cell-sub">行业 Top 10 外</span></td><td>放弃</td><td>不投入，写进「这季度不做」清单</td></tr>
          </tbody></table></div>
          <p class="step-more-label">案例：四个国家分别落在哪个象限</p>
          <p class="step-more-note">「行业排名」取自行业买家页签。表内为教学示例，区域名称与数字均为示例，不对应任何真实店铺数据。</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>市场</th><th>访客占比</th><th>询盘</th><th>成交</th><th>行业排名</th><th>证据</th><th>定位</th></tr></thead><tbody>
            <tr><td>东南亚</td><td>42%</td><td>11</td><td>3</td><td>第 3 位</td><td>强</td><td>主攻</td></tr>
            <tr><td>中东</td><td>9%</td><td>4</td><td>1</td><td>第 14 位</td><td>强</td><td>利基</td></tr>
            <tr><td>南亚</td><td>4%</td><td>1</td><td>0</td><td>第 6 位</td><td>弱</td><td>待验证</td></tr>
            <tr><td>南美</td><td>2%</td><td>0</td><td>0</td><td>第 18 位</td><td>弱</td><td>放弃</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>对着表逐行验一遍：</strong>东南亚三项齐、行业第 3，所以是主攻；中东三项也齐，但行业排到第 14，只能算利基——有利可图但盘子小，扩投放是浪费；南亚行业第 6 说明有需求，但只有 1 条询盘、没成交，所以先进「待验证」，不是直接投钱；南美两边都排不上，直接放弃。</div>
          <div class="method-note"><strong>两个口径的权重按店铺阶段调，不是固定五五开。</strong><br><strong>新店</strong>（成交不足 3 单，或日均访客很低）：行业 70%、本店 30%。本店样本太小，一次活动就能把排序打乱。<br><strong>老店</strong>（流量和成交都稳定）：本店 70%、行业 30%。已有证据最可靠，行业用来发现盲区。</div>
          <div class="method-note"><strong>两个必须记住的陷阱。</strong><br><strong>① 本店买家的国家分布＝你的投放史。</strong>没投过的国家不会出现，出现过的国家会被放大。<br><strong>② 行业买家证明「市场存在」，不证明「你能赢」。</strong>它能帮你发现盲区，不能替你判断竞争力。</div>
          <div class="method-note"><strong>三个口径先说清，否则比例会算错。</strong><br><strong>① 分国家人数加总会大于总访客数：</strong>同一个人换 IP 进来，人数按去重算 1，国家却各计 1。算占比要用「分国家 ÷ 分国家合计」，不要除以总访客数。<br><strong>② 显示 other 的：</strong>注册国家和 IP 都识别不出的访客，不是数据错。<br><strong>③ 总量含中国大陆：</strong>看国家结构时要单独说明，别把大陆流量混进海外市场判断。</div>
        </div></details>`],
      ["查询盘和 TM 的国家分布", "还是这一页，买家类型依次切「询盘买家」和「TM 买家」，看各自的 Top 国家及地区分布。重点标出「访客多、询盘少」的国家，那通常是承接问题，不是流量问题。",
        `<details class="step-more"><summary>展开看判断逻辑与案例</summary><div class="step-more-body">
          <p class="step-more-label">数据来源与判断逻辑</p>
          <div class="mindmap"><div class="mm-root">访客多 → 询盘少，问题出在哪</div><ul class="mm-list">
            <li><strong>数据来源</strong><span>买家参谋 → 本店买家，买家类型切「询盘买家」「TM 买家」。第 03 步的「访问买家」那组就是分母，两组放一起才比得出询盘率</span></li>
            <li><strong>第一层：词对不对</strong><span>来的到底是不是采购商</span><ul class="mm-sub">
              <li>查该国的搜索词里有没有零售词、配件词、维修词</li>
              <li><b>验证动作：</b>把该国排名前 20 的词逐条看一遍采购意图</li>
            </ul></li>
            <li><strong>第二层：页对不对</strong><span>产品页有没有接住这个国家的需求</span><ul class="mm-sub">
              <li>主图产品形态、价格带、MOQ 是否对得上当地采购习惯</li>
              <li><b>验证动作：</b>找三个同行在同一国家的同款页面做对照</li>
            </ul></li>
            <li><strong>第三层：人接没接住</strong><span>询盘是不是发生了但没被记下来</span><ul class="mm-sub">
              <li>TM 咨询是否被当成即时聊天处理、没进商机口径</li>
              <li><b>验证动作：</b>拿一周的 TM 会话记录和后台商机数对一次</li>
            </ul></li>
          </ul></div>
          <div class="method-note"><strong>顺序不能反。</strong>先查词，再查页，最后查人。从「人」开始查，最后往往只是在追责业务员，问题还在原地。</div>
          <p class="step-more-label">案例：同一个访客量级，询盘率差 8 倍</p>
          <p class="step-more-note">沿用上一步的访客数据，加上询盘数。表内为教学示例。</p>
          <div class="source-table-wrap"><table class="decision-table score-table"><thead><tr><th>国家/地区</th><th>访客数</th><th>询盘数</th><th>询盘率</th><th>读法</th></tr></thead><tbody>
            <tr><td>北美</td><td>1,240</td><td>2</td><td>0.16%</td><td>典型「访客多、询盘少」，先查第 1、2 层</td></tr>
            <tr><td>西欧</td><td>880</td><td>11</td><td>1.25%</td><td>结构正常，可以往后走成交</td></tr>
            <tr><td>南美</td><td>360</td><td>6</td><td>1.67%</td><td>量小但转化最好，值得小预算验证</td></tr>
            <tr><td>其他</td><td>1,520</td><td>5</td><td>0.33%</td><td>太分散，先不投入</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>看的是率，不是数量。</strong>北美询盘率 0.16%、南美 1.67%，差 8 倍。如果只按访客大小排优先级，会把预算压在转化最差的市场。</div>
        </div></details>`],
      ["查成交国家与客单", "买家类型切「订单买家」，看成交买家的 Top 国家及地区分布；订单数和成交金额再到交易口径里核对。新店还没成交，就用样品单、报价记录和深度沟通记录替代，并在表格里标注为代理指标。",
        `<details class="step-more"><summary>展开看案例与替代指标</summary><div class="step-more-body">
          <p class="step-more-label">案例：把访客、询盘、成交放在一起才看得懂</p>
          <p class="step-more-note">沿用前面两步的数据，补上成交与客单。表内为教学示例，不对应任何真实店铺数据。</p>
          <div class="source-table-wrap"><table class="decision-table score-table"><thead><tr><th>国家/地区</th><th>访客</th><th>询盘</th><th>成交单数</th><th>客单价 USD</th><th>读法</th></tr></thead><tbody>
            <tr><td>西欧</td><td>880</td><td>11</td><td>3</td><td>1,850</td><td>利润国家，预算优先给它</td></tr>
            <tr><td>南美</td><td>360</td><td>6</td><td>2</td><td>620</td><td>走量国家，控制单笔获客成本</td></tr>
            <tr><td>北美</td><td>1,240</td><td>2</td><td>0</td><td>—</td><td>只来不买，回到第 04 步查承接</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>三个数一起看才有结论。</strong>北美访客最多、成交为零；西欧访客只有北美的 7 成，却贡献了全部利润。到这一步，「主推哪个国家」的答案已经和数据方向相反了。</div>
          <p class="step-more-label">新店没有成交时，用什么替代</p>
          <div class="mindmap"><div class="mm-root">没有成交数据，先用代理指标</div><ul class="mm-list">
            <li><strong>样品单</strong><span>能反映真实采购意愿，但金额小，不能直接当客单看</span></li>
            <li><strong>报价记录</strong><span>能看出对方在什么价位还愿意继续谈，比询盘数量有用</span></li>
            <li><strong>深度沟通记录</strong><span>问清用途、数量、认证、交期的对话，才算一条有效商机</span></li>
            <li><strong>使用纪律</strong><span>任何替代指标都要在表里标注「代理」，不能和真实成交混在一列算占比</span></li>
          </ul></div>
          <div class="method-note"><strong>代理指标只能用于排序，不能用于对账。</strong>用样品单排出优先级可以，但不要拿它当成交额汇报——这一步最容易出现「看起来有单，其实没成交」的误判。</div>
        </div></details>`],
      ["用同行交叉验证", "挑 3 家同类目 Top 店铺，看他们在目标国家主推什么款、什么价格带、什么认证。同行长期在哪国投入，本身就是一种验证。",
        `<details class="step-more"><summary>展开看对比案例与读法</summary><div class="step-more-body">
          <p class="step-more-label">案例：三家同行在西欧的动作</p>
          <p class="step-more-note">只看「他们卖什么」没用，要看每一栏分别在回答你的哪个问题。表内为教学示例，同行名称已匿名处理。</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>对比项</th><th>同行甲</th><th>同行乙</th><th>同行丙</th><th>这一栏在回答什么</th></tr></thead><tbody>
            <tr><td>主推形态</td><td>可折叠台式款</td><td>便携充电款</td><td>台式大功率款</td><td>当地更认哪种形态</td></tr>
            <tr><td>价格带（FOB）</td><td>45—70 美元</td><td>28—40 美元</td><td>80—120 美元</td><td>你能落在哪一档还不亏</td></tr>
            <tr><td>认证展示</td><td>CE、RoHS 单独一屏</td><td>CE 放在详情末尾</td><td>CE 与 FDA 双认证</td><td>认证是入场券还是加分项</td></tr>
            <tr><td>MOQ</td><td>200</td><td>50</td><td>500</td><td>你的起订量是优势还是门槛</td></tr>
            <tr><td>是否持续投放</td><td>有国家点位</td><td>未见投放</td><td>有国家点位</td><td>有没有人在用钱验证这个市场</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>读法：同行长期在哪国持续投放，说明那个市场被真金白银验证过。</strong>但「市场存在」不等于「你能赢」——别人能做，可能是因为他的价格带或认证你拿不到。所以这一栏只用来判断市场真假，不用来判断你要不要做。</div>
          <div class="method-note"><strong>要抄的是判断依据，不是结论。</strong>看到同行乙用低 MOQ 打开市场，值得学的是「用小单降低首单门槛」这个思路，而不是照抄他的 50 台——你的成本结构可能根本撑不住。</div>
        </div></details>`],
      ["打分排序，形成矩阵", "把产品和国家组合起来再打一次分：五个维度各 1—5 分——需求匹配、竞争强度（反向计分）、询盘质量、成交与复购、获客成本（反向计分）。这一步和第 2 步不是同一张卡：第 2 步选「做哪个产品」，这一步选「这个产品先打哪个国家」。按总分分成核心、验证、暂缓三类，每类写清下一步动作。",
        `<details class="step-more"><summary>展开看分类逻辑与矩阵示例</summary><div class="step-more-body">
          <p class="step-more-label">分类逻辑：五维打分 → 三类 → 三种资源配法</p>
          <div class="mindmap"><div class="mm-root">产品 × 国家组合，满分 25 分</div><ul class="mm-list">
            <li><strong>五个维度，各 1—5 分</strong><span>需求匹配 · 竞争强度（反向）· 询盘质量 · 成交与复购 · 获客成本（反向）</span></li>
            <li><strong>按总分分三档</strong><span>20 分及以上为核心，14—19 分为验证，13 分及以下为暂缓</span></li>
            <li><strong>核心：给资源</strong><ul class="mm-sub">
              <li>预算优先、关键词铺满、主图按该国重做、报价单独定</li>
            </ul></li>
            <li><strong>验证：给小预算和时间盒</strong><ul class="mm-sub">
              <li>只跑精准长尾，两周为期，达标升级、不达标降级</li>
            </ul></li>
            <li><strong>暂缓：只留自然流量</strong><ul class="mm-sub">
              <li>不加预算、不专门做图，按月复盘一次即可</li>
            </ul></li>
          </ul></div>
          <p class="step-more-label">案例：一张填好的矩阵长什么样</p>
          <p class="step-more-note">表内为教学示例。注意最后一列——每个组合都必须有可验证的指标，否则分类只是贴标签。</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>产品 × 国家</th><th>总分</th><th>分类</th><th>下一步动作</th><th>两周验证指标</th></tr></thead><tbody>
            <tr><td>颈部按摩仪 × 西欧</td><td>21</td><td>核心</td><td>精准词扩到 30 个，主图换当地使用场景</td><td>询盘率不低于 1.5%，累计不少于 8 条询盘</td></tr>
            <tr><td>头皮按摩器 × 南美</td><td>17</td><td>验证</td><td>小预算跑长尾词，先不铺全站推</td><td>不少于 5 条询盘，客单不低于 600 美元</td></tr>
            <tr><td>足浴按摩盆 × 北美</td><td>9</td><td>暂缓</td><td>不加预算，只保留自然流量</td><td>每月复盘一次，不设目标</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>「暂缓」也是结论。</strong>矩阵的价值不在于把所有组合都做起来，而在于明确写清「这三个月不做哪几个」。没有暂缓项的矩阵，等于没有做取舍。</div>
        </div></details>`]
    ],
    decisionTitle: "数据表现与判断方法",
    decisions: [
      ["访客高、询盘低", "需求不匹配，或产品页承接不住", "先核对搜索词和主图是否对得上这个国家，再决定是否加预算"],
      ["访客少、询盘稳、客单高", "高价值细分市场", "扩大精准词和站外触达，不要按流量大小把它砍掉"],
      ["点击成本高、成交利润也高", "不能只看点击成本就否定", "按成交利润和回收周期判断，可以承受更高的单次点击价"],
      ["询盘多，但集中在样品和小单", "客户结构偏零售采购", "调整 MOQ 和起订政策，或换成采购意图更强的词"],
      ["某国长期比价、要样不下单", "市场结构问题，不是话术问题", "降权该国关键词和地域标签，把预算移到已验证的组合"]
    ],
    checklist: ["3 个主推产品已写出入选理由和淘汰理由", "Top 10 访客国家已和询盘国家做过对比", "至少找出 1 个「流量国家 ≠ 成交国家」的例子", "每个重点国家都写了关键词、主图、报价的差异点", "矩阵里每个组合都有两周可验证的指标", "已和业务员核对过客户的真实反馈"],
    assignment: "用模板库的《产品国家矩阵》完成一张 3×3 矩阵：每个组合填近 30 天访客、询盘、成交、五维得分、下一步动作和两周验证指标。另外写 200 字：你放弃了哪个高流量国家，理由是什么。",
    sources: [{label:"主推国家课程（会员）",url:"https://t.zsxq.com/Ikgys"}]
  },
  {
    id: 3,
    stage: "基础",
    title: "对标店铺与竞品拆解",
    summary: "建立可持续更新的同行库，把模仿变成有证据的产品决策。",
    duration: "50 分钟",
    updated: "内容整理中",
    prerequisites: "第 02 课",
    outcomes: ["找到真正可比的对标店铺", "用工具快速建立候选池并人工复核", "拆解产品、价格和视觉结构", "形成竞品机会清单"],
    quick: "对标的目标不是复制页面，而是识别同行已经验证的需求、表达方式和价格带，再结合自己的供应优势做差异化。",
    steps: [["设定可比条件", "按类目、产品形态、目标国家、公司规模和价格带限定范围。"],["建立候选池", "先从平台搜索和榜单找店铺，再用瞬悉、来搜、SuperAli 等工具辅助收集店铺与产品信息。工具负责提效，不能替代人工判断。"],["拆解关键字段", "记录标题词、主图表达、MOQ、价格带、认证、交期和交易信号。"],["形成机会判断", "标出可跟进、需验证和不适合的方向。"]],
    decisions: [["订单多、价格低", "供应链或规模优势明显", "不要盲目价格跟随"],["曝光强、询盘弱", "需求或承接可能有问题", "只借鉴流量词，不直接跟品"],["细分词稳定成交", "采购意图可能更清晰", "进入关键词和样品验证"]],
    checklist: ["至少收集 10 家候选店铺", "工具采集结果已人工复核", "确定 3 家核心对标", "完成 20 个产品拆解", "写出 3 个差异化方向"],
    assignment: "选择 3 家真正可比的店铺，完成竞品拆解表并写出一条产品机会假设。",
    sources: [{label:"对标店铺（会员）",url:"https://t.zsxq.com/KXBDI"},{label:"优秀同行产品（会员）",url:"https://t.zsxq.com/hpBmo"}]
  }
];

lessons.push(
  {
    id: 4,
    stage: "增长",
    title: "高转化关键词体系",
    summary: "从平台、同行和站外收词，经过清洗、分组和验证，形成可持续维护的词库。",
    duration: "55 分钟",
    updated: "2026-09",
    prerequisites: "第 02—03 课",
    outcomes: ["建立关键词来源清单", "把词按采购意图和产品属性分组", "用词库完成标题、详情和推广词配置"],
    quick: "高转化词不是搜索量最大的词，而是产品匹配、买家意图清晰并且在实际点击或询盘中得到验证的词。收词、清洗、分组、覆盖、投放和复盘必须形成闭环。",
    steps: [
      ["定义种子词", "用产品名称、用途、材质、规格、适用行业和采购场景建立第一批种子词。"],
      ["多渠道扩词", "从平台搜索建议、关键词指数、同行标题、广告搜索词和 Google/站外工具补充词。"],
      ["清洗与去重", "删除不相关、语义重复、品牌侵权和明显低意向词；保留小语种、连写词、常见变体时要单独标记。"],
      ["按意图分组", "至少分为核心品类词、属性词、用途词、场景词、采购意图词和国家/语言词。"],
      ["分配使用位置", "标题优先放核心词与强属性词；详情页覆盖场景与长尾词；推广计划按意图分组。"],
      ["用数据复核", "每周查看曝光、点击、询盘和搜索词报告，新增有效词、降权或屏蔽无效词。"]
    ],
    decisions: [
      ["曝光高、点击低", "词太宽或展示表达不匹配", "拆分词组并调整主图/标题"],
      ["点击高、无询盘", "采购意图弱或详情承接不足", "核对搜索词并检查产品页"],
      ["流量小、询盘稳定", "高价值长尾词", "扩大同义词和相近产品覆盖"]
    ],
    checklist: ["关键词已去重并标记来源", "每个词都有意图和产品归属", "标题没有机械堆词", "广告词能追溯到搜索词结果", "建立每周新增与淘汰机制"],
    assignment: "为一个主推产品整理不少于 80 个候选词，分成 5 类，并挑选 10 个词说明放在标题、详情还是广告中。",
    sources: [{label:"高转化词课程与文档（会员）",url:"https://t.zsxq.com/KMJRl"},{label:"站外收词方法（会员）",url:"https://t.zsxq.com/dj3gF"},{label:"词频组合标题（会员）",url:"https://t.zsxq.com/lTRhH"},{label:"SEO 外贸关键词工具",url:"https://seowaimao.com"}]
  },
  {
    id: 5,
    stage: "转化",
    title: "高质量产品链接",
    summary: "把类目、属性、标题、图片和详情组织成能获得流量、也能承接采购需求的产品页。",
    duration: "60 分钟",
    updated: "2026-09",
    prerequisites: "第 04 课",
    outcomes: ["独立发布完整产品链接", "使用检查表排查链接质量", "让关键词、卖点和询盘入口保持一致"],
    quick: "高质量链接不是字段填满，而是买家在正确类目中看到匹配的标题和主图，进入页面后快速确认规格、能力、信任与下一步沟通方式。",
    steps: [
      ["选对类目与产品形态", "优先保证类目、产品名称和实际交付一致，避免用高流量类目换来不精准曝光。"],
      ["填写结构化属性", "完整填写材质、规格、用途、认证、产地和定制能力，让系统和买家都能理解产品。"],
      ["组合标题", "按核心产品词 + 关键属性 + 使用场景组织，避免重复堆砌同义词。"],
      ["组织图片与视频", "首图解决点击，后续图片依次回答细节、参数、场景、工厂和信任问题。"],
      ["编排详情页", "先价值与差异，再规格、应用、生产、质检、包装、交付、FAQ 和联系入口。"],
      ["发布后检查", "从移动端和买家视角检查截断、错误参数、图片清晰度、MOQ、价格与询盘按钮。"]
    ],
    decisions: [["无曝光", "类目、关键词或新品覆盖不足", "检查类目与标题，再补充有效词"],["有点击无停留", "首屏信息与广告承诺不一致", "重做首屏卖点和规格表达"],["询盘问题重复", "详情页没有回答关键采购信息", "把高频问题前置到详情与 FAQ"]],
    checklist: ["类目与产品完全一致", "属性无空缺或矛盾", "标题自然且覆盖核心词", "图片顺序符合采购决策", "MOQ、交期、定制和认证清楚", "移动端预览通过"],
    assignment: "选择一个准备推广的产品，用本课检查表完成一次发布前审核，并记录至少 5 处修改。",
    sources: [{label:"高质量产品发布与检查（会员）",url:"https://t.zsxq.com/i4vSR"},{label:"词频工具组合标题（会员）",url:"https://t.zsxq.com/lTRhH"}]
  },
  {
    id: 6,
    stage: "转化",
    title: "高转化主图与视觉",
    summary: "用六类主图方法表达产品差异、采购价值和目标市场偏好。",
    duration: "50 分钟",
    updated: "2026-09",
    prerequisites: "第 03—05 课",
    outcomes: ["为不同产品选择合适主图类型", "制作一套可验证的主图测试方案", "避免信息拥挤和无效美化"],
    quick: "B2B 主图既要让买家一眼认出产品，也要给出点击理由。清晰主体是基础，角标、文案、场景、人物和国别元素都只能服务于一个明确卖点。",
    steps: [
      ["正常展示型", "用干净背景、准确色彩和居中主体表达产品本身，适合规格明确或外观有优势的产品。"],
      ["角标型", "用小面积角标突出认证、交期、MOQ、核心参数或定制能力；避免遮挡主体。"],
      ["文案型", "只呈现一个核心利益点，字号保证移动端可读，文字与详情页证据一致。"],
      ["丰富信息型", "适合需要同时表达套装、配件、结构或多规格的产品，但要有清楚视觉层级。"],
      ["人物/场景型", "用使用场景和比例关系帮助买家理解用途，人物形象需符合目标市场。"],
      ["国别化测试", "根据目标国家调整场景、人物、语言、认证与卖点，不用国旗装饰代替真实本地化。"]
    ],
    decisions: [["点击率低", "主体不清、卖点弱或与搜索词不符", "先做主体图与单卖点图 A/B 测试"],["点击高、询盘低", "图片承诺与详情/价格不一致", "统一主图、标题和首屏信息"],["多国表现差异大", "市场审美和采购重点不同", "按国家建立不同素材组"]],
    checklist: ["主体在缩略图中清楚", "只突出一个主要点击理由", "文案移动端可读", "卖点有参数或证据支持", "准备至少两个测试版本"],
    assignment: "为一个主推产品分别制作正常展示型、角标型和场景型三张主图，写明每张图验证的假设。",
    sources: [{label:"高转化主图完整课程（会员）",url:"https://t.zsxq.com/Yv2G7"},{label:"角标素材（会员）",url:"https://t.zsxq.com/XB1xi"},{label:"文案类主图工具（会员）",url:"https://t.zsxq.com/bkGli"},{label:"AI 服装模特效果图（会员）",url:"https://t.zsxq.com/L7H5y"}]
  },
  {
    id: 7,
    stage: "增长",
    title: "产品链接冷启动",
    summary: "让新链接先具备承接能力，再通过搜索、推荐、活动和资源叠加积累有效数据。",
    duration: "40 分钟",
    updated: "2026-09",
    prerequisites: "第 04—06 课",
    outcomes: ["制定新链接 14 天冷启动计划", "分辨自然、推荐和付费流量", "确定什么时候适合叠加资源"],
    quick: "链接冷启动不是给所有新品平均加流量。先完成内容质量检查，再用小规模精准流量验证点击和询盘，最后把橱窗、活动和预算集中到表现更好的链接。",
    steps: [["发布前验收", "确认类目、词、主图、详情和询盘入口已经具备承接能力。"],["获得基础曝光", "用关键词覆盖、新品渠道、店铺资源和小预算精准投放建立第一批数据。"],["观察点击与停留", "先判断展示是否匹配，不急于因短期无订单大幅改动。"],["筛选潜力链接", "优先给点击和询盘信号更好的产品增加橱窗、活动或广告资源。"],["形成滚动机制", "保留表现好的链接，修正可改善的链接，停止长期没有有效信号的投入。"]],
    decisions: [["无曝光", "收录、类目或覆盖不足", "检查基础质量并增加精准词"],["有曝光无点击", "主图、价格或词不匹配", "先换素材和表达"],["有询盘信号", "链接开始被验证", "叠加资源并保持变量稳定"]],
    checklist: ["冷启动目标和周期明确", "只选择少量重点新品", "自然与付费数据分开", "资源增加有数据依据", "每次只测试少量变量"],
    assignment: "为 3 个新品制定 14 天冷启动表，写出每日观察指标、调整条件和停止条件。",
    sources: [{label:"提升链接流量方法汇总（会员）",url:"https://t.zsxq.com/Cbgts"},{label:"运营流量逻辑（会员）",url:"https://t.zsxq.com/2TxTS"}]
  },
  {
    id: 8,
    stage: "增长",
    title: "直通车基础与计划搭建",
    summary: "先把目标、产品、词和预算结构搭正确，再谈降成本和扩大投放。",
    duration: "65 分钟",
    updated: "规则需定期核对",
    prerequisites: "第 02、04—07 课",
    outcomes: ["独立创建标准推广计划", "为计划设置产品、词和预算边界", "读懂营销能力与基础投放指标"],
    quick: "广告计划首先是一个验证工具：用明确产品、明确市场和明确目标换取可解释的数据。计划混品、混词、混目标后，即使产生询盘也很难知道为什么有效。",
    steps: [["确定唯一目标", "区分测品、测词、获取询盘、放大成熟品和国家验证。"],["控制计划粒度", "把产品和意图相近的词放在一起，避免不相关产品共享预算。"],["设定预算边界", "根据客单、毛利、历史转化和测试周期设置，不用单日情绪频繁调整。"],["配置关键词与人群", "关键词来自已清洗词库；国家与人群服从主推市场。"],["检查落地链接", "广告承诺、主图、价格和详情必须一致。"],["建立观察节奏", "先看搜索词和点击质量，再判断询盘成本；保留修改记录。"]],
    decisions: [["预算很快花完", "词过宽、出价或流量范围过大", "查搜索词和国家，再调出价"],["有点击无商机", "词不准或落地页弱", "先排除明显无效流量"],["成本高但询盘优质", "不能只看表面成本", "按有效询盘和成交价值判断"]],
    checklist: ["每个计划只有一个目标", "产品和词语义一致", "主推国家已设置", "预算覆盖有效测试周期", "搜索词报告有固定检查时间"],
    assignment: "搭建一个标准推广计划草案，写清目标、产品、词组、国家、预算和三种数据异常下的处理方法。",
    sources: [{label:"直通车认识与建计划（会员）",url:"https://t.zsxq.com/phtMs"},{label:"直通车注意事项（会员）",url:"https://t.zsxq.com/XWl1S"},{label:"标准推广实操（会员）",url:"https://t.zsxq.com/PfSND"},{label:"营销能力分官方说明",url:"https://www.yuque.com/chaike/yingxiao/pxb7k642147fp0m3"}]
  },
  {
    id: 9,
    stage: "增长",
    title: "全站推优化与排查",
    summary: "围绕计划目标、搜索词、国家、产品和商机结果，建立可复用的投后排查流程。",
    duration: "70 分钟",
    updated: "2026-09",
    prerequisites: "第 08 课",
    outcomes: ["创建全站推计划", "按固定顺序完成投后排查", "识别应该降权、保留或加投的流量"],
    quick: "全站推上线后不能只看花费。优先检查搜索词是否精准、国家是否符合定位、产品是否具备承接能力，再结合商机质量判断增减预算。",
    steps: [["创建新手版计划", "选择少量已经验收的重点产品，明确国家和预算，避免把大量未验证链接一次加入。"],["运行初始观察期", "保持核心设置稳定，积累曝光、点击和搜索词数据。"],["排查第一页数据", "可按点击或曝光排序，优先处理最消耗预算的搜索词、国家和产品。"],["处理无效词", "完全不相关的词及时屏蔽或降权；相关但暂时无商机的词结合样本量继续观察。"],["判断产品去留", "对有优质商机信号的产品加投；对点击持续消耗且承接差的产品暂停并修正。"],["复盘成本", "用有效商机成本和后续成交价值判断，避免追求极低点击成本。"]],
    decisions: [["有 L3 词但不精准", "系统扩量偏离", "及时降权并收紧语义"],["低成本但无优质商机", "流量便宜但价值低", "按客户质量而不是点击成本优化"],["少量产品贡献多数商机", "产品已被验证", "集中预算并扩展相近词/国家"]],
    checklist: ["重点产品已通过链接检查", "运行两天后检查搜索词", "按点击和曝光各排查一次", "记录国家与客户质量", "每次优化有修改日志"],
    assignment: "完成一次全站推排查：列出消耗前 20 的词、国家和产品，分别标记保留、观察、降权或停止。",
    sources: [{label:"低成本高转化计划（会员）",url:"https://t.zsxq.com/vKr0F"},{label:"开计划后的排查（会员）",url:"https://t.zsxq.com/rIOaz"},{label:"设置与数据排查视频（会员）",url:"https://t.zsxq.com/tTLAZ"},{label:"新手版指南（会员）",url:"https://t.zsxq.com/Y7bd0"},{label:"全站推案例（会员）",url:"https://t.zsxq.com/KBfc3"},{label:"低成本设置细节",url:"https://articles.zsxq.com/id_c4bndqjwmlw6.html"},{label:"每天花费无效果排查（会员）",url:"https://t.zsxq.com/fVugu"}]
  },
  {
    id: 10,
    stage: "管理",
    title: "数据诊断与链接优化",
    summary: "从店铺总览下钻到国家、渠道、产品和搜索词，把报表转化成下一步动作。",
    duration: "75 分钟",
    updated: "2026-09",
    prerequisites: "第 01、05、07—09 课",
    outcomes: ["完成从曝光到成交的完整漏斗分析", "完成店铺数据概览", "定位低转化产品的主要问题", "输出有优先级的优化清单"],
    quick: "数据分析不等于罗列数字。先确认目标和口径，再按店铺 → 国家 → 渠道 → 产品 → 搜索词逐层下钻，每个结论都必须对应一个可执行动作和复查日期。",
    steps: [["建立完整漏斗", "按曝光、点击、访客、询盘/TM、样品/信保、成交/复购记录同一周期数据。"],["做数据概览", "记录日均访客、曝光、点击、自然/付费占比、询盘/TM、GMV 和目标完成度。"],["检查国家分布", "对比访客国家、询盘国家和成交国家是否符合主推定位。"],["分析漏斗", "分别计算点击率、访客询盘率和询盘成交率，找最大损失环节。"],["下钻到产品", "区分高曝光低点击、高点击低询盘和有询盘低成交三类。"],["核对流量来源", "自然、推荐、活动和付费流量要分开判断，避免用汇总数据掩盖问题。"],["形成行动清单", "给问题标注影响、证据、负责人、动作、截止日和复查指标。"]],
    decisions: [["自然流量占比过低", "过度依赖广告或自然覆盖弱", "补关键词与内容质量，逐步验证自然流量"],["国家偏离主推市场", "词、人群或系统扩量偏差", "调整词、国家和素材本地化"],["低转化产品长期消耗", "承接或产品竞争力不足", "修正后设观察期，仍无改善则停止投入"]],
    checklist: ["统计口径与时间范围一致", "自然和付费分开", "国家、产品和词完成下钻", "结论有数据证据", "每个问题都有负责人和复查日期"],
    assignment: "用最近一个完整月完成店铺诊断，输出 3 个最高优先级问题，每个问题只安排一个首要动作。",
    sources: [{label:"数据分析课程（会员）",url:"https://t.zsxq.com/X6Q73"},{label:"低转化产品排查（会员）",url:"https://t.zsxq.com/QxtRl"},{label:"贸易记录下的链接分析（会员）",url:"https://t.zsxq.com/kqWZj"},{label:"汽车方向盘案例（会员）",url:"https://t.zsxq.com/QbIFO"}]
  },
  {
    id: 11,
    stage: "转化",
    title: "询盘、RFQ 与订单转化",
    summary: "让业务从收到线索、判断客户、报价和跟进，到信保下单形成标准动作。",
    duration: "65 分钟",
    updated: "2026-09",
    prerequisites: "第 01—02 课",
    outcomes: ["快速判断询盘质量", "完成有结构的 RFQ 报价", "建立从首次回复到订单的跟进记录"],
    quick: "业务转化不是回复越快越好，而是在速度基础上快速确认客户、需求、数量、应用、预算和时间，再提供能推进下一步的报价与证据。运营必须获得丢单和成交反馈。",
    steps: [["快速首响", "先确认收到需求，并提出数量、规格、应用、认证、交期和目的国等关键问题。"],["完成客户背调", "核对公司、官网、采购角色、主营业务、地区和潜在订单价值。"],["结构化报价", "写清产品、规格、阶梯价、MOQ、样品、交期、包装、贸易条款和有效期。"],["管理 RFQ", "优先选择产品匹配、需求具体、国家合适且竞争可控的 RFQ。"],["推进下一步", "用样品、图纸确认、视频会议、地址获取或 PI 把沟通从询问推进到行动。"],["规范信保订单", "商品、数量、金额、运费、交期和条款必须与沟通一致；特殊运费处理要保留说明。"],["回传运营", "标记有效/无效询盘、丢单原因、价格反馈、国家质量和成交产品。"]],
    decisions: [["需求模糊", "可能是早期询价或群发", "用 3—5 个关键问题筛选"],["客户反复比价", "差异和风险价值未表达", "用认证、交期、质检与总成本支撑报价"],["报价后沉默", "下一步不清晰或信息过载", "用单一问题和明确行动重新跟进"]],
    checklist: ["首响包含关键确认问题", "完成基础背调", "报价字段完整", "每次跟进有下一步", "订单信息与沟通一致", "成交/丢单原因已回传"],
    assignment: "选择一个历史 RFQ 或询盘，重写首次回复和报价，并设计 7 天内三次不同目的的跟进。",
    sources: [{label:"业务新人培训大纲 XLSX（会员）",url:"https://t.zsxq.com/C39Um"},{label:"RFQ 报价（会员）",url:"https://t.zsxq.com/UHKu2"},{label:"业务学习技能（会员）",url:"https://t.zsxq.com/wIl4v"},{label:"代客户采购的判断（会员）",url:"https://t.zsxq.com/Ol8eH"},{label:"信保订单与运费技巧（会员）",url:"https://t.zsxq.com/H0pAf"},{label:"系统索要地址技巧（会员）",url:"https://t.zsxq.com/6No1o"}]
  },
  {
    id: 12,
    stage: "管理",
    title: "运营 SOP、报告与 AI 提效",
    summary: "把日常操作、复盘和 AI 使用沉淀成可交接、可追踪、可持续改进的团队系统。",
    duration: "70 分钟",
    updated: "2026-09",
    prerequisites: "第 01—11 课",
    outcomes: ["建立日、周、月工作节奏", "输出老板和团队都能读懂的诊断报告", "把 AI 用在有输入标准和验收标准的任务中"],
    quick: "SOP 不是任务清单，而是触发条件、输入、步骤、输出、负责人和验收标准。AI 不是独立模块，它应嵌入收词、卖点、图片、分析和报告流程，并由人完成事实与业务判断。",
    steps: [["划分工作节奏", "日常关注异常和客户反馈；每周做词、产品和广告优化；每月做漏斗与资源复盘。"],["建立统一报告", "月报包含目标、结果、渠道、国家、产品、问题、动作和资源需求，避免只有截图和环比。"],["形成平台诊断", "从流量、点击、询盘、成交逐层定位问题，按影响和难度排序。"],["沉淀年终复盘", "总结目标完成、关键动作、成功/失败案例、能力缺口和下一年计划。"],["选择 AI 场景", "优先用于资料整理、词分类、卖点草稿、图片方案、数据解释和报告初稿。"],["写清提示词", "提供角色、产品资料、目标市场、输出格式、限制条件和优秀示例。"],["人工验收", "检查事实、参数、语气、平台规则、知识产权和可执行性，再用于正式业务。"]],
    decisions: [["报告很长但无动作", "缺少目标和优先级", "每个问题只保留证据、动作、负责人和复查指标"],["团队执行不一致", "SOP 缺少输入或验收标准", "用真实案例补齐边界条件"],["AI 输出空泛", "输入资料与约束不足", "补产品证据、目标客户和输出示例"]],
    checklist: ["日周月工作边界明确", "报告结论可追溯到数据", "动作有负责人和日期", "AI 输入不含未经授权敏感信息", "AI 输出经过事实与业务复核"],
    assignment: "建立一个月度运营复盘模板，并选择一个真实任务写出可复用 AI 提示词、输入材料和验收清单。",
    sources: [{label:"运营每天的工作（会员）",url:"https://t.zsxq.com/PlMGd"},{label:"运营工作清单（待校对）",url:"https://t.zsxq.com/h1Yuw"},{label:"月数据报告（会员）",url:"https://t.zsxq.com/mns1l"},{label:"平台诊断报告（会员）",url:"https://t.zsxq.com/elo8T"},{label:"运营年终报告（会员）",url:"https://t.zsxq.com/l8r09"},{label:"AI 商品卖点案例",url:"https://www.yuque.com/liangdan-5gae1/kenyau/oce1ba29ygbulc29"}]
  }
);

const libraries = {
  cases: {
    title: "案例库",
    intro: "用统一框架拆解不同行业，不照搬结论，重点学习判断过程。",
    items: [
      ["汽车方向盘", "类目、市场、关键词、链接与推广方向的完整拆解。", "https://t.zsxq.com/QbIFO", "会员视频"],
      ["消费电子 · 互动板", "消费电子产品的真实运营经验。", "https://t.zsxq.com/RgLyX", "嘉宾分享"],
      ["监控摄像头", "安防类目运营经验与注意点。", "https://t.zsxq.com/HN9BN", "嘉宾分享"],
      ["礼品纸盒", "包装类产品运营经验。", "https://t.zsxq.com/M3tyz", "嘉宾分享"]
    ]
  },
  templates: {
    title: "模板库",
    intro: "把课程结论变成团队可直接使用的检查表和报告。下面的模板无需登录，可直接下载后填写。",
    items: [
      ["竞品拆解表", "记录店铺、产品、价格、交易信号、视觉和机会判断。", "downloads/01-竞品拆解表.csv", "CSV 模板"],
      ["关键词词库", "统一管理词源、意图、使用位置和投放结果。", "downloads/02-关键词词库.csv", "CSV 模板"],
      ["产品发布检查表", "发布前检查类目、属性、标题、主图、详情和转化入口。", "downloads/03-产品发布检查表.csv", "CSV 模板"],
      ["直通车排查表", "把计划、搜索词、国家、商机质量和处理动作放在同一表格。", "downloads/04-直通车排查表.csv", "CSV 模板"],
      ["月度运营复盘", "目标、结果、漏斗、国家、产品、行动和复查指标。", "downloads/05-月度运营复盘.csv", "CSV 模板"],
      ["业务新人培训计划", "按四周组织产品、询盘、背调、报价、跟进和信保训练。", "downloads/06-业务新人培训计划.csv", "CSV 模板"],
      ["产品国家矩阵", "按产品和国家的组合打分，排出核心、验证、暂缓三类市场。", "downloads/07-产品国家矩阵.csv", "CSV 模板"]
    ]
  },
  tools: {
    title: "工具库",
    intro: "工具按使用场景归类。插件只辅助采集和加工，最终判断仍以业务与数据为准。",
    items: [
      ["国际站常用插件汇总", "同行分析、信息采集和运营辅助工具集合，包含瞬悉、来搜、SuperAli 等使用方向。", "https://t.zsxq.com/zypwP", "会员资料"],
      ["一键抹除工具", "清理图片元素，辅助制作产品图。", "https://t.zsxq.com/BDh5D", "作图"],
      ["AliPrice", "跨境平台价格与历史信息辅助查看。", "https://t.zsxq.com/2EiHI", "浏览器插件"],
      ["店鲸灵", "店铺与产品信息辅助分析。", "https://t.zsxq.com/jlj2P", "浏览器插件"],
      ["图片翻译", "把中文图片信息转换为英文素材。", "https://t.zsxq.com/Epago", "图片工具"],
      ["SEO 外贸关键词工具", "站外关键词收集入口。", "https://seowaimao.com", "公开网站"],
      ["豆包", "卖点、文案、表格与信息整理。", "https://www.doubao.com/", "AI"],
      ["DeepSeek", "内容分析、结构化整理与报告草稿。", "https://www.deepseek.com/", "AI"],
      ["即梦 AI", "服装模特、场景图和产品视觉生成。", "https://jimeng.jianying.com/", "AI 作图"],
      ["通义千问", "文本与多模态任务。", "https://tongyi.aliyun.com/", "AI"],
      ["通义万相", "产品视觉与创意图生成。", "https://tongyi.aliyun.com/wanxiang/creation", "AI 作图"],
      ["Kimi", "长文档阅读与整理。", "https://kimi.moonshot.cn/", "AI"],
      ["遨虾", "选品与报告分析辅助。", "https://www.alphashop.cn/", "选品"],
      ["AI 工具集合", "查找不同类型 AI 工具的导航站。", "https://ai-bot.cn/", "公开网站"]
    ]
  },
  further: {
    title: "拓展学习",
    intro: "补充运营、定位、增长、销售与外贸创业的底层能力。",
    items: [
      ["我在阿里做运营", "理解平台运营工作方法。", "", "书籍"],
      ["运营之光", "建立运营思维与工作框架。", "", "书籍"],
      ["从零开始做运营", "适合新人系统学习。", "", "书籍"],
      ["超级转化率", "补充转化设计方法。", "", "书籍"],
      ["定位", "理解品类、心智和差异化。", "", "书籍"],
      ["增长黑客", "理解实验与增长体系。", "", "书籍"],
      ["营销心理战", "补充营销心理与表达。", "", "书籍"],
      ["大客户销售：谋攻之道", "适合 B2B 业务与管理者。", "", "书籍"],
      ["一个人的外贸江湖", "适合外贸业务和 SOHO 创业者。", "", "书籍"]
    ]
  }
};

const tracks = {
  all: {label:"全部课程", ids: lessons.map(x=>x.id)},
  beginner: {label:"新运营", ids:[1,2,3,4,5,6,7,8,10,12]},
  ads: {label:"广告优化", ids:[2,5,8,9,10]},
  sales: {label:"业务员", ids:[1,2,11,3,4,10]},
  manager: {label:"主管 / 老板", ids:[1,2,10,12]}
};

const completed = new Set(JSON.parse(localStorage.getItem("is-course-progress") || "[]"));
let selectedTrack = "all";
const app = document.querySelector("#app");
const nav = document.querySelector("#lessonNav");
const crumbs = document.querySelector("#breadcrumbs");

function pad(n){ return String(n).padStart(2,"0"); }
function saveProgress(){ localStorage.setItem("is-course-progress", JSON.stringify([...completed])); updateProgress(); renderNav(); }
function updateProgress(){
  document.querySelector("#sideProgress").textContent = `${completed.size} / 12`;
  document.querySelector("#sideProgressBar").style.width = `${completed.size/12*100}%`;
}
function renderNav(){
  nav.innerHTML = `<button class="nav-link ${location.hash==="#home"||!location.hash?"active":""}" data-home><span class="nav-num">⌂</span><span>课程地图</span></button><div class="nav-group-title">CORE LESSONS</div>` + lessons.map(l=>`<button class="nav-link ${location.hash===`#lesson-${l.id}`?"active":""}" data-id="${l.id}"><span class="nav-num">${pad(l.id)}</span><span>${l.title}</span><span class="nav-check">${completed.has(l.id)?"✓":""}</span></button>`).join("") + `<div class="nav-group-title">RESOURCE LIBRARY</div>${Object.entries(libraries).map(([key,lib])=>`<button class="nav-link ${location.hash===`#library-${key}`?"active":""}" data-library="${key}"><span class="nav-num">＋</span><span>${lib.title}</span></button>`).join("")}<button class="nav-link ${location.hash==="#source-map"?"active":""}" data-source-map><span class="nav-num">≡</span><span>资料来源</span></button>`;
  nav.querySelector("[data-home]").onclick=()=>{location.hash="home";};
  nav.querySelectorAll("[data-id]").forEach(b=>b.onclick=()=>{location.hash=`lesson-${b.dataset.id}`;});
  nav.querySelectorAll("[data-library]").forEach(b=>b.onclick=()=>{location.hash=`library-${b.dataset.library}`;});
  nav.querySelector("[data-source-map]").onclick=()=>{location.hash="source-map";};
}

function dashboard(){
  crumbs.textContent="课程地图";
  const query=document.querySelector("#searchInput").value.trim().toLowerCase();
  const visible=lessons.filter(l=>tracks[selectedTrack].ids.includes(l.id)&&(`${l.title}${l.summary}${l.stage}${l.outcomes.join("")}${l.steps.flat().join("")}`).toLowerCase().includes(query));
  app.innerHTML=`
    <section class="dashboard-head"><p class="eyebrow">Alibaba.com Operations</p><h1>把流量变成订单，<br>从一张清晰的课程地图开始。</h1><p class="lede">12 个实战章节，覆盖产品定位、链接建设、推广、诊断与业务转化。核心内容可直接阅读，原始会员资料仅作为延伸。</p></section>
    <section class="summary-grid" aria-label="学习概览">
      <div class="summary-card accent"><span>当前进度</span><strong>${completed.size}<small> / 12</small></strong><p>${completed.size?"继续完成下一课，把方法落实到店铺。":"从第 01 课开始建立统一运营框架。"}</p></div>
      <div class="summary-card"><span>核心课程</span><strong>12</strong><p>按完整运营闭环重新编排</p></div>
      <div class="summary-card"><span>学习方式</span><strong>4</strong><p>按岗位选择路径</p></div>
    </section>
    <section class="path-strip"><p class="eyebrow">选择学习路径</p><div class="path-buttons">${Object.entries(tracks).map(([k,v])=>`<button class="path-button ${selectedTrack===k?"active":""}" data-track="${k}">${v.label}</button>`).join("")}</div></section>
    <section><h2>${query?`搜索结果 · ${visible.length}`:"课程章节"}</h2>${visible.length?`<div class="course-grid">${visible.map(l=>`<article class="course-card" data-stage="${l.stage}"><div class="meta"><span>LESSON ${pad(l.id)}</span><span>${l.stage}</span></div><h3>${l.title}</h3><p>${l.summary}</p><button class="card-action" data-open="${l.id}">${completed.has(l.id)?"重新学习":"开始学习"} →</button></article>`).join("")}</div>`:`<div class="empty"><h3>没有找到相关课程</h3><p>换一个关键词试试。</p></div>`}</section>
    <section class="library-strip"><div><p class="eyebrow">RESOURCE LIBRARY</p><h2>案例、模板与工具</h2><p>主课程负责教方法，资料库负责随用随查。</p></div><div class="library-buttons">${Object.entries(libraries).map(([key,lib])=>`<button data-library-open="${key}"><strong>${lib.title}</strong><span>${lib.items.length} 项资源</span></button>`).join("")}</div></section>`;
  app.querySelectorAll("[data-track]").forEach(b=>b.onclick=()=>{selectedTrack=b.dataset.track;dashboard();});
  app.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>{location.hash=`lesson-${b.dataset.open}`;});
  app.querySelectorAll("[data-library-open]").forEach(b=>b.onclick=()=>{location.hash=`library-${b.dataset.libraryOpen}`;});
}

function trafficSourcePrimer(){
  const groups=[
    ["搜索与平台分发",[
      ["搜索","买家输入关键词后，从搜索结果进入你的产品或店铺。"],
      ["系统推荐","平台根据买家兴趣、产品匹配度等，把产品推荐到相关位置。"],
      ["导购会场","买家从平台组织的主题会场、行业会场或采购场景进入。"]
    ]],
    ["频道入口",[
      ["New Arrival","新品频道带来的访问。"],
      ["Top-ranking suppliers","买家从优质供应商榜单进入。"],
      ["Top-ranking products","买家从热门或排名产品入口进入。"],
      ["Weekly Deals","买家从每周优惠频道进入。"],
      ["Saving spotlight 惠采购","买家从优惠、集采类频道进入。"]
    ]],
    ["互动与采购行为",[
      ["直播","买家通过直播间或直播中的商品入口进入。"],
      ["站内互动","买家从平台内的互动内容或互动活动进入。"],
      ["RFQ","买家发布采购需求后，从 RFQ 报价或相关页面进入。"],
      ["信保订单","买家从信用保障订单相关页面再次访问。"],
      ["询盘 & TM","买家从询盘记录或 TradeManager 对话回到产品和店铺。"]
    ]],
    ["自营销",[
      ["买家人气挑战赛","由平台营销活动带来的互动访问。"],
      ["Tips 视频","买家看了短视频内容后进入。"],
      ["客户通 IM 营销","通过站内即时消息触达客户后带来的访问。"],
      ["客户通 EDM 营销","通过邮件营销触达客户后带来的访问。"]
    ]],
    ["其他路径",[
      ["直接访问","买家通过网址、收藏夹或直接打开店铺进入。"],
      ["店内","买家已经在你的店铺里，又从一个页面进入另一个页面。"],
      ["站外","买家从 Google、社媒、外部网站或分享链接进入。"],
      ["其他","系统暂时无法准确归入以上类别的访问。"]
    ]]
  ];
  return `<section class="lesson-section traffic-primer">
    <div class="section-heading"><p class="eyebrow">把基础概念对应到后台</p><h2>跟着后台认识流量来源</h2><p>理解曝光、点击、访问和询盘之后，再到后台找对应数据：第一张解决“在哪里看”，第二张解决“这里都有哪些流量入口”。</p></div>
    <figure class="course-figure">
      <div class="figure-head"><span>01</span><div><strong>入口在哪里</strong><p>后台路径：数据参谋 → 流量参谋 → 流量来源</p></div></div>
      <img src="assets/lesson-1-traffic-path.png" alt="国际站后台从数据参谋进入流量参谋和流量来源的路径" loading="lazy">
      <figcaption>先让新人照着路径找到页面，不要求他们马上分析表格。</figcaption>
    </figure>
    <figure class="course-figure">
      <div class="figure-head"><span>02</span><div><strong>后台有哪些流量来源</strong><p>这张表就是店铺实际可见的流量入口清单，数字已隐去，先看每一行的名称。</p></div></div>
      <div class="screenshot-scroll" tabindex="0" aria-label="可上下滚动查看完整流量来源截图"><img src="assets/lesson-1-traffic-sources.png" alt="国际站后台常见流量来源清单" loading="lazy"></div>
      <figcaption>上下滚动可查看完整清单；下面用新人能懂的话逐项解释。</figcaption>
    </figure>
    <div class="source-guide" aria-label="流量入口解释">
      ${groups.map(([title,items])=>`<section class="source-group"><h3>${title}</h3>${items.map(([name,meaning])=>`<div class="source-item"><strong>${name}</strong><p>${meaning}</p></div>`).join("")}</section>`).join("")}
    </div>
    <div class="metric-note"><strong>第一课只看懂 4 个结果：</strong><span>店铺访问人数＝来了多少人</span><span>店内询盘人数＝多少人发了询盘</span><span>店内 TM 咨询人数＝多少人发起即时沟通</span><span>商机转化率＝访问后产生商机的比例</span><p>先会认入口和结果就够了。怎么根据涨跌判断问题，留到后面的“数据诊断与增长漏斗”课程。</p></div>
    <p class="paid-traffic-note">补充：直通车属于付费推广流量，通常在营销模块单独管理，第 08 课再展开。</p>
  </section>`;
}

function lessonSupplement(lessonId){
  if(lessonId===2){
    return `<section class="lesson-section"><h2>后台去哪里查这几组数据</h2><div class="source-guide">
      <section class="source-group"><h3>国家分布只有一个入口，两个页签</h3><div class="source-item"><strong>数据参谋 → 买家参谋</strong><p>顶部并排两个页签：本店买家（你的历史数据）和行业买家（类目大盘）。两个都在同一个模块里，不用换系统。</p></div><div class="source-item"><strong>本店买家 → 买家来源 → Top 国家及地区分布</strong><p>用顶部「买家类型」切换访问／询盘／TM／订单买家，四种国家分布都在这一块，分别对应第 03、04、05 步。</p></div><div class="source-item"><strong>不要走流量参谋</strong><p>「流量参谋 → 流量来源」是按渠道拆的（搜索、系统推荐、导购会场、频道、互动、自营销、店内、站外），那一页没有国家维度。第一课用它认渠道，这一课不能用它取国家。</p></div></section>
      <section class="source-group"><h3>同一页切四种买家类型</h3><div class="source-item"><strong>访问 / 询盘 / TM / 订单</strong><p>「访问买家」＝第 03 步的访客国家；「询盘买家」「TM 买家」＝第 04 步；「订单买家」＝第 05 步。四组放一起才比得出各环节的转化。</p></div><div class="source-item"><strong>要看明细：访客详情</strong><p>数据参谋 → 访客详情。可按国家、大洲、是否询盘访客筛选，页面上没有导出按钮，但明细可以用工具导出成 Excel 留档。注意只保留最近 31 天、T-2 更新。</p></div></section>
      <section class="source-group"><h3>广告怎么按国家投</h3><div class="source-item"><strong>直通车 → 标签维度 → 地域标签</strong><p>地域标签用来给已验证的国家加价、给长期比价的国家降价。扣费方式和出价规则留到第 08、09 课展开。</p></div><div class="source-item"><strong>口径提醒</strong><p>直通车的地域数据按 IP 解析，买家参谋里的 TM 买家国家取注册地，两边对不上是正常的，不是数据错误。</p></div></section>
    </div><p class="verify-note">后台菜单会随平台调整。以上路径于 2026-10 核对，实际入口与下拉项名称以自己账号可见菜单为准。</p></section>
    <section class="lesson-section"><h2>三个匿名示例：看判断过程，不抄结论</h2><div class="tool-note-grid">
      <article><strong>家具类供应商</strong><p>访客最多的国家是 A 国，但询盘集中在 B 国，成交落在 B、C 两国。判断：A 国是流量国家，B 国是成交国家。动作：A 国只保留低成本覆盖，主推资源和预算移到 B 国，并为 C 国补小语种主图。</p></article>
      <article><strong>智能硬件供应商</strong><p>某国访客数只排到第 6，但客单价高、复购稳定、几乎不砍价。判断：这是高价值细分市场。动作：不按流量排名砍掉，反而扩精准长尾词和行业场景词。</p></article>
      <article><strong>礼品包装供应商</strong><p>直接按「访客最多」定主推国家，结果两个月询盘不少，但全是比价和小单。判断：把流量当成了需求。动作：回到五维打分，用 MOQ 和交期筛掉零售型询盘，重定主推组合。</p></article>
    </div><div class="method-note">以上均为教学示例，数字与国别已做抽象处理，只用于说明判断逻辑，不代表任何真实店铺的经营结果。</div></section>
    <section class="lesson-section"><h2>判断练习：先自己判，再展开对答案</h2><div class="drill">
      <details><summary>练习 1 · 曝光和访客都不低，询盘却几乎没有</summary><div class="answer"><p><b>先问三个问题：</b>这个词带来的访客是不是目标采购商？主图上产品形态对不对得上？产品页有没有写清 MOQ、交期和认证？</p><p><b>判断：</b>大概率不是流量不够，而是词和承接不匹配。此时加预算只会放大浪费，先改词和首屏。</p></div></details>
      <details><summary>练习 2 · 某个国家点击很贵，但成交客单明显更高</summary><div class="answer"><p><b>判断：</b>不能用单次点击价否定这个市场，要看成交利润和回收周期。</p><p><b>动作：</b>算一笔账——单次点击价 × 平均点击次数 ÷ 成交率，再和该国的平均毛利比。能覆盖就保预算，覆盖不了就先缩到最精准的词。</p></div></details>
      <details><summary>练习 3 · 询盘数量不错，但几乎都是要样品、不下单</summary><div class="answer"><p><b>判断：</b>这是客户结构问题，不是业务话术问题。询盘数量好看，不代表商机质量好。</p><p><b>动作：</b>先看这些询盘来自哪些词和国家，把明显偏零售的词降权；再调整 MOQ 和样品政策，把「要不要样品」前置到产品页，减少无效沟通。</p></div></details>
    </div></section>`;
  }
  if(lessonId===3){
    return `<section class="lesson-section"><h2>工具怎么用才不会跑偏</h2><div class="tool-note-grid">
      <article><strong>瞬悉</strong><p>辅助观察同行店铺和产品数据，适合建立第一批候选名单。</p></article>
      <article><strong>来搜</strong><p>辅助搜索和对比国际站产品，用于补充平台搜索结果。</p></article>
      <article><strong>SuperAli</strong><p>辅助收集店铺与产品信息，减少手工抄录时间。</p></article>
    </div><div class="method-note"><strong>统一原则：</strong>工具只负责“收集”，最终是否值得对标，必须回到产品匹配度、目标国家、价格带、供应能力和真实交易信号。</div></section>`;
  }
  if(lessonId===12){
    return `<section class="lesson-section"><h2>可直接复用的 AI 商品卖点任务卡</h2><div class="prompt-card">
      <div class="prompt-card-head"><div><strong>先补齐产品证据，再让 AI 输出</strong><p>把方括号内容替换成自己的真实资料。</p></div><button type="button" data-copy-prompt>复制提示词</button></div>
      <pre data-prompt-text>你是一名熟悉 B2B 采购决策的英文商品内容编辑。

产品名称：[填写产品]
核心规格与参数：[填写]
目标国家和客户类型：[填写]
客户最关心的问题：[填写]
可证明的优势、认证或交付能力：[填写]

请生成 20 条英文商品卖点，每条不超过 128 个字符，并用表格输出：
1. 英文卖点
2. 中文翻译
3. 对应的客户需求
4. 使用位置建议（标题 / 主图 / 详情页 / 广告）

限制：不得编造参数、认证、交期或效果；不要使用 best、No.1 等无法证明的绝对化表达；重复卖点需要合并。</pre>
      <div class="prompt-checks"><span>输入有真实参数</span><span>卖点对应买家需求</span><span>人工复核事实</span><span>再用于正式页面</span></div>
    </div></section>`;
  }
  return "";
}

function lessonPage(lesson){
  crumbs.textContent=`第 ${pad(lesson.id)} 课 / ${lesson.title}`;
  const rows=lesson.decisions.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("");
  app.innerHTML=`
    <a class="back-link" href="#home">← 返回课程地图</a>
    <header class="lesson-header"><div class="lesson-kicker"><span>LESSON ${pad(lesson.id)}</span>${lesson.stage}</div><h1>${lesson.title}</h1><p class="lede">${lesson.summary}</p><div class="lesson-meta"><span>学习时长：${lesson.duration}</span><span>先修：${lesson.prerequisites}</span><span>更新：${lesson.updated}</span></div></header>
    <div class="lesson-layout"><article>
      <section class="lesson-section"><h2>学完你能做到</h2><ul class="outcomes">${lesson.outcomes.map(x=>`<li>${x}</li>`).join("")}</ul></section>
      <section class="lesson-section"><h2>3 分钟先看懂</h2><div class="quick-read"><strong>核心判断</strong><p>${lesson.quick}</p>${lesson.id===1?`<div class="funnel beginner-flow"><span>被看见</span><span>愿意点</span><span>看懂产品</span><span>愿意咨询</span></div>`:""}</div></section>
      ${lesson.steps.length?`<section class="lesson-section"><h2>实操 SOP</h2><div class="steps">${lesson.steps.map(s=>`<div class="step"><h3>${s[0]}</h3><p>${s[1]}</p>${s[2]||""}</div>`).join("")}</div></section>`:""}
      ${lessonSupplement(lesson.id)}
      ${lesson.decisions.length?`<section class="lesson-section"><h2>${lesson.decisionTitle||"数据判断与动作"}</h2><table class="decision-table"><thead><tr><th>${lesson.id===1?"阶段":"表现"}</th><th>${lesson.id===1?"是什么意思":"可能原因"}</th><th>${lesson.id===1?"新人先问什么":"优先动作"}</th></tr></thead><tbody>${rows}</tbody></table></section>`:""}
      ${lesson.id===1?trafficSourcePrimer():""}
      ${lesson.checklist.length?`<section class="lesson-section"><h2>本课检查表</h2><ul class="checklist">${lesson.checklist.map(x=>`<li>${x}</li>`).join("")}</ul></section>`:""}
      <section class="lesson-section"><h2>课后任务</h2><div class="assignment">${lesson.assignment}</div></section>
    </article><aside class="lesson-aside">
      <div class="aside-card"><h3>原始资料</h3>${lesson.sources.length?lesson.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${s.label} ↗</a>`).join(""):"<p>源资料正在校对。</p>"}</div>
      <div class="aside-card"><h3>学习状态</h3><button class="complete-button ${completed.has(lesson.id)?"done":""}" data-complete>${completed.has(lesson.id)?"✓ 已完成":"标记为已完成"}</button></div>
    </aside></div>`;
  app.querySelector("[data-complete]").onclick=()=>{completed.has(lesson.id)?completed.delete(lesson.id):completed.add(lesson.id);saveProgress();lessonPage(lesson);};
  const copyPrompt=app.querySelector("[data-copy-prompt]");
  if(copyPrompt){
    copyPrompt.onclick=async()=>{
      const text=app.querySelector("[data-prompt-text]").textContent;
      try{await navigator.clipboard.writeText(text);copyPrompt.textContent="已复制";}
      catch{copyPrompt.textContent="请手动复制";}
      window.setTimeout(()=>copyPrompt.textContent="复制提示词",1800);
    };
  }
}

function libraryPage(key){
  const lib=libraries[key];
  if(!lib){ dashboard(); return; }
  crumbs.textContent=lib.title;
  app.innerHTML=`
    <a class="back-link" href="#home">← 返回课程地图</a>
    <header class="lesson-header"><div class="lesson-kicker"><span>RESOURCE</span>随用随查</div><h1>${lib.title}</h1><p class="lede">${lib.intro}</p></header>
    <section class="resource-grid">${lib.items.map((item,i)=>`<article class="resource-card"><div class="resource-top"><span>${String(i+1).padStart(2,"0")}</span><em>${item[3]}</em></div><h2>${item[0]}</h2><p>${item[1]}</p>${item[2]?`<a href="${item[2]}" ${item[2].startsWith("http")?'target="_blank" rel="noopener"':'download'}>${item[2].startsWith("http")?"查看原始资料 ↗":"直接下载模板 ↓"}</a>`:`<span class="resource-note">建议通过微信读书或正规渠道阅读</span>`}</article>`).join("")}</section>`;
}

function sourceMapPage(){
  crumbs.textContent="资料来源";
  const records=[];
  lessons.forEach(l=>l.sources.forEach(s=>records.push([`第 ${pad(l.id)} 课`,s.label,s.url])));
  Object.values(libraries).forEach(lib=>lib.items.filter(i=>i[2]&&i[2].startsWith("http")).forEach(i=>records.push([lib.title,i[0],i[2]])));
  const unique=[...new Map(records.map(r=>[r[2],r])).values()];
  app.innerHTML=`<a class="back-link" href="#home">← 返回课程地图</a><header class="lesson-header"><div class="lesson-kicker"><span>SOURCE MAP</span>维护台账</div><h1>资料来源</h1><p class="lede">核心课程正文可直接阅读。这里集中保留原始资料和公开工具入口，用于查证、观看完整视频或跟进内容更新。</p></header><div class="source-summary"><strong>${unique.length}</strong><span>个已纳入课程的唯一外部来源</span><em>“会员”标记表示原始页面可能要求知识星球登录，不影响主课程学习。</em></div><div class="source-table-wrap"><table class="decision-table source-table"><thead><tr><th>归属</th><th>资料</th><th>访问状态</th></tr></thead><tbody>${unique.map(r=>`<tr><td>${r[0]}</td><td><a href="${r[2]}" target="_blank" rel="noopener">${r[1]}</a></td><td>${/会员|待校对/.test(r[1])?"需会员登录":"公开 / 第三方"}</td></tr>`).join("")}</tbody></table></div>`;
}

function route(){
  const match=location.hash.match(/^#lesson-(\d+)$/);
  const libraryMatch=location.hash.match(/^#library-(\w+)$/);
  if(match){const lesson=lessons.find(x=>x.id===Number(match[1]));lesson?lessonPage(lesson):dashboard();}
  else if(libraryMatch) libraryPage(libraryMatch[1]);
  else if(location.hash==="#source-map") sourceMapPage();
  else dashboard();
  renderNav(); updateProgress(); app.focus(); document.body.classList.remove("nav-open"); window.scrollTo(0,0);
}
document.querySelector("#searchInput").addEventListener("input",()=>{if(!location.hash||location.hash==="#home") dashboard();});
document.querySelector(".menu-button").onclick=()=>document.body.classList.add("nav-open");
document.querySelector(".mobile-close").onclick=()=>document.body.classList.remove("nav-open");
window.addEventListener("hashchange",route);
if(!location.hash) location.hash="home"; else route();
