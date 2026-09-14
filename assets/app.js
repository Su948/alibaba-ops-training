const lessons = [
  {
    id: 1,
    stage: "基础",
    title: "运营全局与增长漏斗",
    summary: "先看懂流量与转化的关系，建立运营和业务共同复盘的工作语言。",
    duration: "35 分钟",
    updated: "2026-09",
    prerequisites: "无",
    outcomes: ["画出店铺从曝光到成交的完整漏斗", "识别搜索、推荐与活动流量的不同作用", "建立运营与业务每周复盘的字段清单"],
    quick: "国际站运营的核心可以压缩为两个结果：获得有效流量，并把有效流量转成询盘和订单。所有动作都应该能对应到漏斗中的一个环节。",
    steps: [
      ["建立统一漏斗", "按曝光、点击、访客、询盘/TM、样品/信保、成交/复购记录数据，避免只看曝光或询盘总数。"],
      ["拆分流量来源", "分别记录搜索、系统推荐、导购会场、新品频道、榜单与付费推广，判断哪个渠道带来的是有效访客。"],
      ["定位最大断点", "比较点击率、访客询盘率和询盘成交率，先解决损失最大的一环。"],
      ["建立协同复盘", "运营提供产品、国家与渠道数据；业务反馈客户质量、真实需求、价格阻力和成交结果。"]
    ],
    decisions: [
      ["曝光高、点击低", "关键词或展示人群不准；主图、价格带缺乏吸引力", "先检查流量相关性，再测试主图与价格表达"],
      ["点击高、询盘低", "产品页承接不足", "检查卖点、信任证明、MOQ、交期与询盘入口"],
      ["询盘多、成交低", "客户质量、报价或跟进存在问题", "让业务按国家、需求和丢单原因回传数据"]
    ],
    checklist: ["列出当前店铺前三大流量来源", "计算最近 30 天三个关键转化率", "与业务确认主推产品和主推国家", "记录一个最需要优先解决的漏斗断点"],
    assignment: "使用最近 30 天数据画出店铺漏斗，并为最大断点提出一个只执行 7 天的改进动作。",
    sources: [{label:"知识星球原文（会员）", url:"https://t.zsxq.com/2TxTS"}]
  },
  {
    id: 2,
    stage: "基础",
    title: "主推产品与国家定位",
    summary: "用产品优势、询盘质量和转化成本确定资源应该集中在哪里。",
    duration: "45 分钟",
    updated: "内容整理中",
    prerequisites: "第 01 课",
    outcomes: ["建立主推产品评分表", "区分流量国家和成交国家", "输出产品 × 国家优先级矩阵"],
    quick: "主推市场不是访客最多的市场，而是需求匹配、竞争强度、询盘质量、成交能力和成本综合后最值得投入的市场。",
    steps: [["盘点公司优势", "记录供应链、认证、MOQ、交期、定制、价格和交付范围。"],["筛选产品", "按市场需求、竞争、利润和交付能力评分。"],["筛选国家", "对比访客、询盘、客户质量、点击成本和成交结果。"],["形成矩阵", "确定核心产品、重点国家、验证型组合和暂缓组合。"]],
    decisions: [["流量高、成交弱", "可能是低意向市场或承接不匹配", "限制预算并检查询盘质量"],["流量不高、成交强", "高价值细分市场", "扩大精准词与同类产品覆盖"],["点击贵、客单高", "不能只按点击成本否定", "按成交利润和回收周期判断"]],
    checklist: ["选出 3 个主推产品", "列出 3 个重点国家", "记录每个组合的选择依据", "确定两周验证指标"],
    assignment: "完成一张 3×3 的产品—国家矩阵，并说明预算、关键词和主图如何随国家变化。",
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
    outcomes: ["找到真正可比的对标店铺", "拆解产品、价格和视觉结构", "形成竞品机会清单"],
    quick: "对标的目标不是复制页面，而是识别同行已经验证的需求、表达方式和价格带，再结合自己的供应优势做差异化。",
    steps: [["设定可比条件", "按类目、产品形态、目标国家、公司规模和价格带限定范围。"],["建立候选池", "从平台搜索、榜单和工具收集店铺与产品。"],["拆解关键字段", "记录标题词、主图表达、MOQ、价格带、认证、交期和交易信号。"],["形成机会判断", "标出可跟进、需验证和不适合的方向。"]],
    decisions: [["订单多、价格低", "供应链或规模优势明显", "不要盲目价格跟随"],["曝光强、询盘弱", "需求或承接可能有问题", "只借鉴流量词，不直接跟品"],["细分词稳定成交", "采购意图可能更清晰", "进入关键词和样品验证"]],
    checklist: ["至少收集 10 家候选店铺", "确定 3 家核心对标", "完成 20 个产品拆解", "写出 3 个差异化方向"],
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
    outcomes: ["完成店铺数据概览", "定位低转化产品的主要问题", "输出有优先级的优化清单"],
    quick: "数据分析不等于罗列数字。先确认目标和口径，再按店铺 → 国家 → 渠道 → 产品 → 搜索词逐层下钻，每个结论都必须对应一个可执行动作和复查日期。",
    steps: [["做数据概览", "记录日均访客、曝光、点击、自然/付费占比、询盘/TM、GMV 和目标完成度。"],["检查国家分布", "对比访客国家、询盘国家和成交国家是否符合主推定位。"],["分析漏斗", "分别计算点击率、访客询盘率和询盘成交率，找最大损失环节。"],["下钻到产品", "区分高曝光低点击、高点击低询盘和有询盘低成交三类。"],["核对流量来源", "自然、推荐、活动和付费流量要分开判断，避免用汇总数据掩盖问题。"],["形成行动清单", "给问题标注影响、证据、负责人、动作、截止日和复查指标。"]],
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
      ["业务新人培训计划", "按四周组织产品、询盘、背调、报价、跟进和信保训练。", "downloads/06-业务新人培训计划.csv", "CSV 模板"]
    ]
  },
  tools: {
    title: "工具库",
    intro: "工具按使用场景归类。插件只辅助采集和加工，最终判断仍以业务与数据为准。",
    items: [
      ["国际站常用插件汇总", "同行分析、信息采集和运营辅助工具集合。", "https://t.zsxq.com/zypwP", "会员资料"],
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

function lessonPage(lesson){
  crumbs.textContent=`第 ${pad(lesson.id)} 课 / ${lesson.title}`;
  const rows=lesson.decisions.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("");
  app.innerHTML=`
    <a class="back-link" href="#home">← 返回课程地图</a>
    <header class="lesson-header"><div class="lesson-kicker"><span>LESSON ${pad(lesson.id)}</span>${lesson.stage}</div><h1>${lesson.title}</h1><p class="lede">${lesson.summary}</p><div class="lesson-meta"><span>学习时长：${lesson.duration}</span><span>先修：${lesson.prerequisites}</span><span>更新：${lesson.updated}</span></div></header>
    <div class="lesson-layout"><article>
      <section class="lesson-section"><h2>学完你能做到</h2><ul class="outcomes">${lesson.outcomes.map(x=>`<li>${x}</li>`).join("")}</ul></section>
      <section class="lesson-section"><h2>3 分钟先看懂</h2><div class="quick-read"><strong>核心判断</strong><p>${lesson.quick}</p>${lesson.id===1?`<div class="funnel"><span>曝光</span><span>点击</span><span>访客</span><span>询盘 / TM</span><span>样品 / 信保</span><span>成交 / 复购</span></div>`:""}</div></section>
      ${lesson.steps.length?`<section class="lesson-section"><h2>实操 SOP</h2><div class="steps">${lesson.steps.map(s=>`<div class="step"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div></section>`:""}
      ${lesson.decisions.length?`<section class="lesson-section"><h2>数据判断与动作</h2><table class="decision-table"><thead><tr><th>表现</th><th>可能原因</th><th>优先动作</th></tr></thead><tbody>${rows}</tbody></table></section>`:""}
      ${lesson.checklist.length?`<section class="lesson-section"><h2>本课检查表</h2><ul class="checklist">${lesson.checklist.map(x=>`<li>${x}</li>`).join("")}</ul></section>`:""}
      <section class="lesson-section"><h2>课后任务</h2><div class="assignment">${lesson.assignment}</div></section>
    </article><aside class="lesson-aside">
      <div class="aside-card"><h3>原始资料</h3>${lesson.sources.length?lesson.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${s.label} ↗</a>`).join(""):"<p>源资料正在校对。</p>"}</div>
      <div class="aside-card"><h3>学习状态</h3><button class="complete-button ${completed.has(lesson.id)?"done":""}" data-complete>${completed.has(lesson.id)?"✓ 已完成":"标记为已完成"}</button></div>
    </aside></div>`;
  app.querySelector("[data-complete]").onclick=()=>{completed.has(lesson.id)?completed.delete(lesson.id):completed.add(lesson.id);saveProgress();lessonPage(lesson);};
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
