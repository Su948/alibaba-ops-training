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
      ["理解询盘", "有访问也不等于有询盘。产品页还要回答规格、MOQ（最小起订量）、交期、认证、定制和信任问题。"],
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
      ["盘清自己能交付什么", "工厂店写产线能做什么、现有哪些模具、良率、最小经济批量；贸易店写供应链、认证、MOQ、交期和可接受的价格带。这一步决定你能接什么单，不由愿望决定。",
        `<details class="step-more"><summary>展开看两种店各写什么</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>要盘清什么</th><th>工厂店</th><th>贸易店</th></tr></thead><tbody>
            <tr><td>能做到什么形态</td><td>产线与工艺能覆盖的形态，越具体越好</td><td>供应商能提供的形态，以及换供应商的难度</td></tr>
            <tr><td>固定投入</td><td>现有哪些模具、开新模要多久、摊到多少量才回本</td><td>一般没有固定投入，但要算打样和备货占用的现金</td></tr>
            <tr><td>起订量</td><td>产线的最小经济批量，低于这个数就是不划算</td><td>供应商的 MOQ，加上自己愿意承担的最小起订</td></tr>
            <tr><td>交付能力</td><td>常规交期、旺季交期、良率水平</td><td>供应商交期 + 缓冲天数，别把供应商的承诺当自己的承诺</td></tr>
            <tr><td>成本结构</td><td>材料、人工、模具摊销后的真实单件成本</td><td>采购价 + 运费 + 损耗，以及涨价时的应对空间</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>这一步写完，你就知道自己「不能接什么单」。</strong>工厂店最常犯的错是产线能做就以为能接，忽略了起订量和良率；贸易店最常犯的错是把供应商的交期直接报给客户，中间没留缓冲。</div>
        </div></details>`],
      ["选出候选主推产品", "按四个维度打分：市场有需求、自己有优势、竞争可切入、利润能覆盖获客成本与固定投入（工厂店的固定投入就是模具）。每个维度只取 5、3、1 三档（三档标准和案例都在下面的展开区），先留 5 个候选，再按总分收敛到 3 个。",
        `<details class="step-more"><summary>展开看三档打分标准与完整案例</summary><div class="step-more-body">
          <p class="step-more-label">一、先定三档标准</p>
          <p class="step-more-note">只写四个维度，真到打分时还是会卡住：什么算「有需求」？什么算「有优势」？直接把每个维度拆成三档，只取 5、3、1 三个值，满分 20 分。</p>
          <div class="source-table-wrap"><table class="decision-table score-table"><thead><tr><th>维度</th><th>5 分</th><th>3 分</th><th>1 分</th></tr></thead><tbody>
            <tr><td>市场有需求</td><td>近 90 天有稳定搜索量，且已有 3 个以上不同买家的真实询盘</td><td>有搜索量，询盘零星</td><td>只有零星搜索，几乎没人问</td></tr>
            <tr><td>自己有优势</td><td>自有工厂、独家供应或独家代理，有认证，MOQ 和交期能压过同行</td><td>有稳定供应商，价格和交期处于中位</td><td>靠拼货，价格和交期都受制于上游</td></tr>
            <tr><td>竞争可切入</td><td>头部链接没有垄断，主图和详情普遍粗糙</td><td>有强对手，但存在认证、定制或小单的差异空间</td><td>头部集中打价格战，找不到差异点</td></tr>
            <tr><td>利润能覆盖获客成本与固定投入</td><td>毛利能覆盖多倍点击成本，且一次性投入（开模、改模、备货）能在当季摊掉</td><td>毛利偏薄，或固定投入要半年以上才摊得掉</td><td>毛利太低，或开模后量上不去，钱会沉在模具和库存里</td></tr>
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
          <p class="step-more-label">三、工厂店和贸易店，这一步差在哪</p>
          <p class="step-more-note">不是两套方法，是同一张打分卡、两个不同的一票否决项。工厂店多一道开模判断，贸易店多一道供应商判断。</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>维度</th><th>工厂店</th><th>贸易店</th><th>影响哪一步</th></tr></thead><tbody>
            <tr><td>选品起点</td><td>产线能做 × 市场要做的交集</td><td>市场要做的，再去找货源</td><td>02</td></tr>
            <tr><td>多出的一票否决</td><td>开模投入摊不摊得掉</td><td>供应商稳不稳（价格、交期、断货风险）</td><td>02</td></tr>
            <tr><td>库存</td><td>会多做库存品：展示用 + 寄样用</td><td>一般不做库存，寄样靠供应商</td><td>02 / 05</td></tr>
            <tr><td>交期承诺</td><td>自己可控，可以写进报价</td><td>取决于供应商，报价要留缓冲</td><td>05</td></tr>
            <tr><td>主推宽度</td><td>可以多推几款：有实物、能快速寄样</td><td>集中主推，避免样机成本</td><td>07</td></tr>
            <tr><td>主要风险</td><td>开了模卖不动，钱沉在模具里</td><td>卖起来了供应商涨价或断货</td><td>07</td></tr>
          </tbody></table></div>
          <p class="step-more-label">工厂店：开模前先过三问</p>
          <div class="mindmap"><div class="mm-root">这个品值不值得开模</div><ul class="mm-list">
            <li><strong>一、有没有订单托底</strong><span>已有大客、明确的试单，或同类款在老店里跑出过稳定成交。一个都没有，先做样品和小批量，别直接开模</span></li>
            <li><strong>二、能不能摊得掉</strong><span>先算清楚模具摊到多少量才回本，再拿它和你实际能拿到的订单量比。算不出来的，就是还没想清楚</span></li>
            <li><strong>三、撑不撑得起展示</strong><span>这个品放在展厅和样品间里，客户看一眼会不会问价。撑不起展示的品，开了模也只能靠低价走量</span></li>
          </ul></div>
          <p class="step-more-label">同一个候选，有没有现成模具，结论可能反过来</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>情形</th><th>分数怎么动</th><th>原因</th></tr></thead><tbody>
            <tr><td>已有现成模具</td><td>同一候选可以提高一档</td><td>固定投入为零，你的毛利直接变成价格优势</td></tr>
            <tr><td>要开新模，且没有订单托底</td><td>往下压一档</td><td>模具钱先花出去，量还没影，风险全在前期</td></tr>
            <tr><td>要开新模，但已有大客或试单</td><td>维持或提高</td><td>有订单托底，摊销周期可控，等于用客户的单养模具</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>所以工厂店和贸易店看同一批候选，排序可能完全不同。</strong>贸易店看到的是「这个品好卖」，工厂店还要多问一句「我有没有模、要不要开模」。这一问能让某个产品的分数上下浮动一档，足以改变它落在核心还是暂缓。</div>
          <div class="method-note"><strong>库存品不是库存压力，是销售资产。</strong>工厂多做的那批货，价值在于「随时能寄样、随时能展示」——客户看得到实物，成交周期会明显短于只能发图片的贸易店。所以工厂店的主推可以比贸易店更宽。但要在表里单独记「样品／展示库存」，不要和滞销库存混在一起算，否则会误判成压货。</div>
          <div class="method-note"><strong>贸易店要多问一句：</strong>这个品卖起来之后，供应商稳不稳？价格会不会跳、交期会不会拖、会不会转头卖给你的同行。工厂店的开模风险在前期，贸易店的断货风险在后期——两种风险都要写进打分表的备注栏。</div>
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
           <figure class="course-figure">
             <div class="figure-head"><span>01</span><div><strong>这个页面长什么样</strong><p>数据参谋 → 买家参谋 → 本店买家 → 买家来源（图内数字已隐去）</p></div></div>
             <img src="assets/lesson-02-buyer-country.png" alt="国际站买家参谋本店买家的买家来源页，右侧为 Top 国家及地区分布" loading="lazy">
             <figcaption>只看右半边：<strong>国家及地区名称</strong>一列告诉你是哪一国，条形长度与<strong>买家数</strong>一列告诉你相对大小，已经按买家数从高到低排好。左半边「渠道分布」是渠道口径（第 01 课已认过），这一课不用它取国家。最上面那一排按钮，就是下一步要讲的「买家类型」。</figcaption>
           </figure>
           <figure class="course-figure">
             <div class="figure-head"><span>02</span><div><strong>同一页怎么切出四种口径</strong><p>买家参谋顶部：两个页签 ＋ 买家类型五个选项</p></div></div>
             <img src="assets/lesson-02-buyer-type-switch.png" alt="买家参谋顶部的本店买家与行业买家页签，以及买家类型、时间范围、买家分层、去重开关" loading="lazy">
             <figcaption>最上面两个并排的大块，就是「本店买家」和「行业买家」——<strong>换页签换的是数据来源，不是筛选条件</strong>。往下那一排才是筛选：「买家类型」五个选项（访问／询盘／TM／订单／自定义客群）决定你看漏斗的哪一段，「时间范围」三档，「买家分层」全部或 L1+，「去重」开着时一个买家只算一次。四个一起动，国家分布就会整块重排，所以每次截图记录都要把这几个状态写下来，否则两张图没法比。</figcaption>
           </figure>
           <p class="step-more-label">先定「强」和「高」怎么判，否则四象限没法用</p>
          <p class="step-more-note">「强」不是感觉强，是两个数说了算。</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>判断项</th><th>判为「强 / 高」</th><th>判为「弱 / 低」</th><th>为什么这么定</th></tr></thead><tbody>
            <tr><td>本店证据</td><td>近 90 天该国三条同时成立：① 访客进入 Top 10 ② 询盘不少于 3 条 ③ 至少 1 笔成交，或已进入报价谈判</td><td>三条里缺任意一条</td><td>只有访客没有询盘＝路过；有询盘没成交＝还在验证。都不算证据</td></tr>
            <tr><td>行业需求</td><td>该国在你主营类目的行业买家里排进 Top 10</td><td>排在 Top 10 之外</td><td>用同一个排序口径，避免「我觉得这个国家有潜力」</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>阈值可以自己定，但定了就固定用。</strong>这个课用「询盘 ≥3 条、行业 Top 10」，你也可以改成 ≥5 条、Top 5。但一旦定下来，整个矩阵、整个季度都用同一套，否则两张表没法比，也没法和上季度比。</div>
          <p class="step-more-label">四象限：两个都看，怎么取舍</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>本店证据</th><th>行业需求</th><th>定位</th><th>动作</th></tr></thead><tbody>
            <tr><td>强<br><span class="cell-sub">访客＋询盘＋成交</span></td><td>高<br><span class="cell-sub">行业前 10</span></td><td>主攻</td><td>加预算、扩精准词、按该国重做主图和报价</td></tr>
            <tr><td>强<br><span class="cell-sub">访客＋询盘＋成交</span></td><td>低<br><span class="cell-sub">前 10 之外</span></td><td>利基</td><td>保留，靠精准词吃利润，不扩投放</td></tr>
            <tr><td>弱<br><span class="cell-sub">缺任意一项</span></td><td>高<br><span class="cell-sub">行业前 10</span></td><td>待验证</td><td>先查有没有曝光：零曝光＝没做过，可小预算试；有曝光没询盘＝承接问题，先修页面再加钱</td></tr>
            <tr><td>弱<br><span class="cell-sub">缺任意一项</span></td><td>低<br><span class="cell-sub">前 10 之外</span></td><td>放弃</td><td>不投入，写进「这季度不做」清单</td></tr>
          </tbody></table></div>
          <p class="step-more-label">案例：四个国家分别落在哪个象限</p>
          <p class="step-more-note">「行业排名」取自行业买家页签。表内为教学示例，区域名称与数字均为示例，不对应任何真实店铺数据。</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>市场</th><th>访客占比</th><th>询盘</th><th>成交</th><th>行业排名</th><th>证据</th><th>定位</th></tr></thead><tbody>
            <tr><td>东南亚</td><td>42%</td><td>11</td><td>3</td><td>第 3 位</td><td>强</td><td>主攻</td></tr>
            <tr><td>中东</td><td>9%</td><td>4</td><td>1</td><td>第 14 位</td><td>强</td><td>利基<br><span class="cell-sub">细分小众</span></td></tr>
            <tr><td>南亚</td><td>4%</td><td>1</td><td>0</td><td>第 6 位</td><td>弱</td><td>待验证</td></tr>
            <tr><td>南美</td><td>2%</td><td>0</td><td>0</td><td>第 18 位</td><td>弱</td><td>放弃</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>对着表逐行验一遍：</strong>东南亚三项齐、行业第 3，所以是主攻；中东三项也齐，但行业排到第 14，只能算利基（细分小众市场）——有利可图但盘子小，扩投放是浪费；南亚行业第 6 说明有需求，但只有 1 条询盘、没成交，所以先进「待验证」，不是直接投钱；南美两边都排不上，直接放弃。</div>
          <p class="step-more-label">第三只眼睛：行业买家看体量，榜单看形态</p>
          <p class="step-more-note">行业买家告诉你这个国家有多少买家在找这类产品；榜单告诉你这个国家现在认什么形态、什么价位。一个定盘子大小，一个定盘子里装什么。</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>看什么</th><th>回答什么</th><th>用在哪</th></tr></thead><tbody>
            <tr><td>行业买家</td><td>这个国家的需求体量，排第几</td><td>定国家优先级，就是上面四象限的「行业需求」</td></tr>
            <tr><td>国际站平台榜单</td><td>B2B 同类目现在什么形态在起量</td><td>定主推形态，不用来定国家</td></tr>
            <tr><td>亚马逊对应国家榜单</td><td>终端消费者认什么形态、什么价位</td><td>交叉验证形态，尤其用在待验证的市场</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>「待验证」那一格，最该用榜单再确认一次。</strong>弱证据 × 高需求＝待验证，这时候最怕的不是没流量，而是「需求是真的，但需求方要的不是你这个形态」。<br>去看对应国家的榜单：<strong>同形态已有 3 个以上在卖</strong>，说明需求真实，问题在你的承接，回去改页面；<strong>一个都没有</strong>，要么是品类还没被开发，要么是根本没这个需求，先去查搜索量再决定要不要投。</div>
          <div class="method-note"><strong>榜单的局限要记住：</strong>它只显示「已经卖出来的」，看不到还没被开发的需求；平台榜单反映的也只是 B2B 已有供给，替代不了行业买家的体量数据。所以它是补充判断，不是替代。</div>
          <div class="method-note"><strong>两个口径的权重按店铺阶段调，不是固定五五开。</strong><br><strong>新店</strong>（成交不足 3 单，或日均访客很低）：行业 70%、本店 30%。本店样本太小，一次活动就能把排序打乱。<br><strong>老店</strong>（流量和成交都稳定）：本店 70%、行业 30%。已有证据最可靠，行业用来发现盲区。</div>
          <div class="method-note"><strong>两个必须记住的陷阱。</strong><br><strong>① 本店买家的国家分布＝你的投放史。</strong>没投过的国家不会出现，出现过的国家会被放大。<br><strong>② 行业买家证明「市场存在」，不证明「你能赢」。</strong>它能帮你发现盲区，不能替你判断竞争力。</div>
          <div class="method-note"><strong>三个口径先说清，否则比例会算错。</strong><br><strong>① 分国家人数加总会大于总访客数：</strong>同一个人换 IP 进来，人数按去重算 1，国家却各计 1。算占比要用「分国家 ÷ 分国家合计」，不要除以总访客数。<br><strong>② 显示 other 的：</strong>注册国家和 IP 都识别不出的访客，不是数据错。<br><strong>③ 总量含中国大陆：</strong>看国家结构时要单独说明，别把大陆流量混进海外市场判断。</div>
          <p class="step-more-label">新店没有本店数据怎么办</p>
          <p class="step-more-note">开店铺两三个星期内，本店买家基本是空的。这时候四象限会让所有国家都落在「弱」那一行，看上去没法用——但不需要跳过整课，换一根轴就行。</p>
          <div class="mindmap"><div class="mm-root">新店：把「本店证据」换成「竞品证据」</div><ul class="mm-list">
            <li><strong>照做的部分</strong><span>第 01 步盘清能交付什么、第 02 步选候选产品，都不依赖后台数据，新店照做，一步不用跳</span></li>
            <li><strong>只取一半</strong><span>第 03 步只取「行业买家」那一半——类目大盘不依赖你的历史，新店照样有数</span></li>
            <li><strong>换掉的那根轴</strong><span>「本店证据」换成「竞品证据」：同行在这个国家有没有本地语言页、认证展示、专属款、广告位。这根轴正好是第 03 课的产物</span></li>
            <li><strong>调整后的顺序</strong><span>01 盘清交付 → 02 选产品 → 03 只取行业买家 → 去第 03 课做竞品拆解 → 回第 02 课重画四象限 → 再进第 04 课</span></li>
          </ul></div>
          <div class="method-note"><strong>这是一条合法的回头路，课程不假装线性。</strong>第 02 课的矩阵对新店要分两次填：先用竞品证据填初版，跑满 30 天有本店数据后，再用真实数据回来重填一次。新店的「没有数据」只是暂时的，不是方法失效。</div>
          <div class="method-note"><strong>新店起步别一次铺三个国家。</strong>先 1 个主攻 + 1 个验证，把预算和精力压在能验证的组合上。三个同时做，等于三个都做不深；等主攻那个跑通再复制。</div>
          <div class="method-note"><strong>还有一个补充来源。</strong>如果账号里有选词参谋的地区分布，可以拿 3—5 个核心词看它们在哪些国家被搜，和行业买家的排序做交叉。这一项入口名称请按自己账号核对，各账号版本不一定一致。</div>
        </div></details>`],
      ["查询盘和 TM 的国家分布", "还是这一页，买家类型依次切「询盘买家」和「TM 买家」，看各自的 Top 国家及地区分布。重点标出「访客多、询盘少」的国家，那通常是承接问题，不是流量问题。",
        `<details class="step-more"><summary>展开看判断逻辑与案例</summary><div class="step-more-body">
          <p class="step-more-label">数据来源与判断逻辑</p>
          <div class="mindmap"><div class="mm-root">访客多 → 询盘少，问题出在哪</div><ul class="mm-list">
            <li><strong>数据来源</strong><span>买家参谋 → 本店买家，买家类型切「询盘买家」「TM 买家」。第 03 步的「访问买家」那组就是分母，两组放一起才比得出询盘率</span></li>
            <li><strong>第一层：词对不对</strong><span>来的到底是不是采购商</span><ul class="mm-sub">
              <li>查该国的搜索词里有没有零售词、配件词、维修词</li>
              <li><b>验证动作：</b>把该国排名前 20 的词逐条看一遍采购意图（再去 Google 和国际站首页各搜一遍这个词，看搜出来的是批发询价页，还是零售、维修、配件页）</li>
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
      ["打分排序，形成矩阵", "把产品和国家组合起来再打一次分：五个维度各 1—5 分，满分 25——需求匹配、竞争强度（反向计分：竞争越弱得分越高）、询盘质量、成交与复购、获客成本（反向计分：成本越低得分越高）。这一步和第 2 步不是同一张卡：第 2 步选「做哪个产品」，这一步选「这个产品先打哪个国家」。按总分分成核心、验证、暂缓三类，每类写清下一步动作。",
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
          <div class="method-note"><strong>同一个「暂缓」，工厂店和贸易店的成因不同。</strong>工厂店多数是模具摊不掉——市场可能是好的，只是量不够；贸易店多数是上游不稳或价格打不进去。写暂缓理由时把成因写清，下个季度才知道该复查什么。</div>
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
    updated: "2026-10",
    prerequisites: "第 02 课",
    outcomes: ["按五条可比条件筛出真正能对标的店铺，并说明为什么排除其他", "用工具建立候选池，并完成人工复核", "拆出主推款的形态、价格带、MOQ 和表达结构", "输出一份三档竞品机会清单（可跟进／需验证／不做）"],
    quick: "对标的目标不是复制页面，而是找到同行已经验证过的东西——哪个形态在卖、卖到什么价位、用什么话术讲清楚——再结合自己的供应优势做差异化。拆得越多不等于越准，先保证比的是同一类生意。",
    steps: [
      ["设定可比条件", "按类目、产品形态、目标国家、公司规模、价格带五条限定范围。五条里至少占四条才算「可比」，否则拆出来的结论不能用。",
        `<details class="step-more"><summary>展开看五条条件怎么填</summary><div class="step-more-body">
          <p class="step-more-label">五条条件与不合格的后果</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>条件</th><th>怎么填</th><th>不满足会怎样</th></tr></thead><tbody>
            <tr><td>类目</td><td>与你相同的三级类目</td><td>跨类目对比，主图和关键词都不通用</td></tr>
            <tr><td>产品形态</td><td>同形态（台式／便携／穿戴）</td><td>形态不同，主图卖点和结构完全对不上</td></tr>
            <tr><td>目标国家</td><td>至少 1 个重点国家重合</td><td>国家不同，认证要求和价格带没有可比性</td></tr>
            <tr><td>公司规模</td><td>团队、产能、店铺年限接近</td><td>拿头部团队的标准要求自己，结论会失真</td></tr>
            <tr><td>价格带</td><td>与你的成本结构能重叠</td><td>差三倍以上，只能学表达，学不到定价</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>怎么用这五条：</strong>五条全中＝直接对手，重点拆；中四条＝可比对象，可以拆；中一到三条＝只能当参考，不进拆解表。宁可少拆几家，也别把不同生意混在一张表里。</div>
        </div></details>`],
      ["建立候选池", "先从平台搜索和榜单找店铺，再用瞬悉、来搜、SuperAli 等工具辅助收集店铺与产品信息。工具负责提效，不能替代人工判断。",
        `<details class="step-more"><summary>展开看工具分工与复核清单</summary><div class="step-more-body">
          <p class="step-more-label">三个工具各管一段</p>
          <div class="tool-note-grid">
            <article><strong>瞬悉</strong><p>辅助观察同行店铺和产品数据，适合建立第一批候选名单。</p></article>
             <article><strong>来搜</strong><p>两个用途：一是补充平台搜索结果、对比国际站产品；二是<strong>导出买家进店来源词</strong>——后台只给全站口径的词，单个买家是被哪个词带进来的，要靠它拿。第 04 课会用到第二个用途。</p></article>
            <article><strong>SuperAli</strong><p>辅助收集店铺与产品信息，减少手工抄录时间。</p></article>
          </div>
          <p class="step-more-label">采集完必须过这四道复核</p>
          <div class="mindmap"><div class="mm-root">工具给的是名单，不是结论</div><ul class="mm-list">
            <li><strong>一、形态对不对</strong><span>店铺是不是真在做你这个产品形态，还是顺带挂了几款</span></li>
            <li><strong>二、还在不在推</strong><span>主推款是近 90 天还在上新和调整，还是两年前的僵尸链接</span></li>
            <li><strong>三、成交真不真</strong><span>交易信号要看评价内容和复购痕迹，只看订单数容易被活动期数据骗</span></li>
            <li><strong>四、价格是不是活动价</strong><span>抓到的低价可能是限时折扣，拿它当常态价会误判整个价格带</span></li>
          </ul></div>
          <div class="source-table-wrap"><table class="decision-table score-table"><thead><tr><th>环节</th><th>数量</th><th>说明</th></tr></thead><tbody>
            <tr><td>工具初筛</td><td>40 家</td><td>按类目和形态关键词批量抓取</td></tr>
            <tr><td>形态复核</td><td>18 家</td><td>去掉顺带挂款的、跨形态的</td></tr>
            <tr><td>活跃度复核</td><td>12 家</td><td>去掉近 90 天没更新的</td></tr>
            <tr><td>进入拆解</td><td>3 家</td><td>再按可比条件和主推结构筛</td></tr>
          </tbody></table></div>
          <div class="method-note">上表为教学示例，数字只说明漏斗比例，不代表任何真实店铺。真实的漏斗通常是 40 进 3 出——工具跑得越快，人工复核越不能省。</div>
        </div></details>`],
      ["筛出 3 家真正可比的", "从候选池里去掉「大而全」和「小而乱」，留下主推结构清晰的。这一步的标准不是谁做得好，而是谁的结构看得懂。",
        `<details class="step-more"><summary>展开看筛选逻辑</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">为什么只留 3 家</div><ul class="mm-list">
            <li><strong>大而全：删</strong><span>什么都卖，看不出主推是什么，只能看行业趋势，拆不出可执行的动作</span></li>
            <li><strong>小而乱：删</strong><span>上新频繁但没有稳定成交，说明还没跑通，跟他学等于跟一个还在试错的人学</span></li>
            <li><strong>主推清晰：留</strong><span>有 1—3 个稳定主推款、有持续成交、详情结构完整——这种才拆得出东西</span></li>
            <li><strong>为什么是 3 家</strong><span>1 家容易被个案带偏，5 家以上拆不完也记不住。3 家刚好能看出「共性」和「差异」</span></li>
          </ul></div>
          <div class="method-note"><strong>选对标不是选最强的。</strong>头部大卖家的供应链和团队规模你复制不了，拆完只会得到「我做不到」的结论。选那种「比我强一档、但路径看得懂」的，才是能落地的对标。</div>
        </div></details>`],
      ["拆产品结构", "记录主推款的形态、SKU 宽度、价格带分布和最低起订量（MOQ）。先拆结构，再看表达——结构决定你能不能接这个单。",
        `<details class="step-more"><summary>展开看拆解表怎么填与真实搜索卡片</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>字段</th><th>怎么记</th><th>用来判断什么</th></tr></thead><tbody>
            <tr><td>主推形态</td><td>店铺首屏和橱窗里反复出现的那一款</td><td>当地市场认哪种形态</td></tr>
            <tr><td>SKU 宽度</td><td>同款有几个颜色／规格／套装</td><td>对方靠单款打透还是靠宽度铺量</td></tr>
            <tr><td>价格带</td><td>最低价、主推价、最高价三个点</td><td>你的成本能落在哪一档</td></tr>
            <tr><td>起订量</td><td>起订量及是否支持混批（搜索端显示为「最低起订量」）</td><td>你的起订量是优势还是门槛</td></tr>
            <tr><td>交期与定制</td><td>是否写明打样时间、能否改 logo／包装</td><td>对方接的是标准单还是定制单</td></tr>
          </tbody></table></div>
          <figure class="course-figure">
            <div class="figure-head"><span>01</span><div><strong>买家端搜索结果卡片与价格带分布</strong><p>国际站买家端搜索页（以 neck massager 为例，供应商已匿名）</p></div></div>
            <img src="assets/lesson-03-price-band.png" alt="国际站买家搜索端真实产品卡片，展示价格区间、最低起订量、已售件数以及顶部属性筛选栏" loading="lazy">
            <figcaption>买家端搜索结果卡片结构：① <strong>价格带区间</strong>（注意：卡片价格符号由买家端或当前账号的站点币种决定，图中 <code>₩</code> 为韩元显示，交货地设为 CA 加拿大，日常对标时请核对自己顶栏的货币设置并统一折算为 USD 美元或 RMB 记账）；② <strong>起订量字段</strong>（国际站卡片上显示的正式字段名是<strong>「最低起订量：N piece」</strong>，不要在页面上硬找英文缩写 MOQ）；③ <strong>已售笔数与评价数量</strong>（验证真实市场热度与采购动销）；④ <strong>顶部属性与认证标签</strong>（如 CE 认证、快速定制、Verified 供应商等，反映买家高频筛选意图与准入门槛）。</figcaption>
          </figure>
          <div class="method-note"><strong>20 个产品怎么记才不白记：</strong>按「形态 × 价格带」交叉着记，每个格子至少 2 个样本。如果 20 个里 15 个都落在同一档，说明你其实只拆了 1 个结论，回去补样本。</div>
        </div></details>`],
      ["拆表达方式", "看标题词、主图类型、详情结构和认证展示。表达决定同样的产品为什么别人点得多。",
        `<details class="step-more"><summary>展开看四个维度与对标旺铺结构</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>维度</th><th>看什么</th><th>记成什么</th></tr></thead><tbody>
            <tr><td>标题</td><td>前三个词放的是品类词还是卖点词</td><td>词序结构，不是整句照抄</td></tr>
            <tr><td>主图</td><td>首图是白底、场景还是带角标</td><td>主图类型 + 出现的卖点信息层级</td></tr>
            <tr><td>详情</td><td>前三屏讲什么：参数、场景还是认证</td><td>信息顺序，这是最容易抄错的部分</td></tr>
            <tr><td>认证</td><td>放在首屏、详情中段还是末尾</td><td>认证在当地是入场券还是加分项</td></tr>
          </tbody></table></div>
          <figure class="course-figure">
            <div class="figure-head"><span>02</span><div><strong>同行对标旺铺结构与分类陈列</strong><p>同行旺铺「全部商品」页（店招与账号信息已脱敏处理）</p></div></div>
            <img src="assets/lesson-03-competitor-shop.png" alt="同行旺铺全部商品页，展示顶部导航、精选橱窗、产品分类树以及商品网格陈列" loading="lazy">
            <figcaption>同行对标旺铺结构：<strong>同行旺铺首页通常包含纵深长达数千像素的全屏品牌大 Banner，若要在单屏内看清其主推款、价格分布与产品分类，应直接点击顶部导航的「产品 / 全部商品」页签。</strong>左侧为细分品类树，中间为主推产品与网格陈列。</figcaption>
          </figure>
          <p class="step-more-label">同行优秀旺铺的标准动线拆解（从上到下）</p>
          <div class="mindmap"><div class="mm-root">成熟 B2B 旺铺自上而下 9 屏动线</div><ul class="mm-list">
            <li><strong>1. 店招与企业标识</strong><span>品牌定位、核心卖点、Verified 验真资质</span></li>
            <li><strong>2. 顶部导航条</strong><span>首页／产品／公司档案＋店内搜索（买家找货第一入口）</span></li>
            <li><strong>3. 全屏 Banner 视觉区</strong><span>季度主推款场景大图、痛点解决方案</span></li>
            <li><strong>4. 实力背书与认证</strong><span>国际权威检验机构验真标签（如 TÜV / SGS 等）</span></li>
            <li><strong>5. 企业核心竞争力视频</strong><span>无尘车间、研发团队、自动化产线实拍</span></li>
            <li><strong>6. 主推产品与精选橱窗</strong><span>爆款产品网格、主推形态陈列</span></li>
            <li><strong>7. 细分场景分类磁贴</strong><span>按功能/人群/使用场景分流</span></li>
            <li><strong>8. 公司简介与产能实力</strong><span>厂房面积、日产能、交期保障承诺</span></li>
            <li><strong>9. 认证矩阵与定制能力</strong><span>CE/FDA/RoHS、R&D 专利、ODM/OEM 流程、主要出口市场与多语言站点</span></li>
          </ul></div>
          <div class="method-note"><strong>抄结构，别抄文案。</strong>同行的英文表达可能本身就不地道，但他们的信息顺序（先讲什么、把认证放哪、分类怎么切）往往是踩过坑才定下来的，这部分才值得学。</div>
        </div></details>`],
      ["拆交易与流量信号", "看成交、评价、橱窗和广告位。信号决定这个方向是「真被验证」还是「看着热闹」。",
        `<details class="step-more"><summary>展开看信号怎么读</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>信号</th><th>说明什么</th><th>容易误判的地方</th></tr></thead><tbody>
            <tr><td>成交笔数与金额</td><td>需求真实存在</td><td>活动期冲量，不代表常态</td></tr>
            <tr><td>评价内容</td><td>买家到底在意什么</td><td>只看好评数量，不看具体抱怨</td></tr>
            <tr><td>橱窗／主推位</td><td>对方把资源压在哪款</td><td>把橱窗款当成最好卖的款</td></tr>
            <tr><td>广告位</td><td>对方愿意为哪些词持续花钱</td><td>偶尔出现的广告位不算，要看是否长期在</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>一个可靠的判断：</strong>如果一款产品既有持续成交，又能看到对方长期在投广告，说明这个方向被真金白银验证过。只有成交没有投放，可能是老客户复购；只有投放没有成交，可能还在烧钱试。</div>
        </div></details>`],
      ["形成机会清单", "把拆解结果分成三档：可跟进、需验证、不做，每档写清理由和下一步动作。清单要能直接变成产品决定。",
        `<details class="step-more"><summary>展开看三档怎么分</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">竞品机会清单：三档 + 一条差异化</div><ul class="mm-list">
            <li><strong>可跟进</strong><span>需求被验证、你的供应能接、价格带能覆盖成本——直接排进产品计划</span></li>
            <li><strong>需验证</strong><span>方向看着对，但缺一个关键条件（认证、起订量、交期）——先小批量或打样试</span></li>
            <li><strong>不做</strong><span>供应链没优势、或价格带打不进去——写清理由，避免下次又想起来</span></li>
            <li><strong>差异化方向</strong><span>至少写一条：同行普遍没做、而你能做到的（认证、包装、小单、交期）</span></li>
          </ul></div>
          <div class="method-note"><strong>清单的验收标准：</strong>每条都要能回答「下一步谁在什么时候做什么」。写不出动作的条目，说明拆解还没到位，不是清单的问题。</div>
        </div></details>`]
    ],
    decisions: [["订单多、价格低", "供应链或规模优势明显，不是你能硬碰的", "不要盲目价格跟随，改拼交期、小单或认证"],["曝光强、询盘弱", "需求方向对，但页面承接有问题", "只借鉴流量词和主图方向，不直接跟品"],["细分词稳定成交", "采购意图更清晰、竞争更小", "进入关键词清单，先做样品和小批量验证"],["同行长期投广告且持续成交", "这个方向被真金白银验证过", "优先排进产品计划，别再犹豫"],["同行有成交但没投放", "可能是老客户复购，不是新客需求", "降低优先级，先看它的流量来源"]],
    checklist: ["五条可比条件逐条确认，并写明满足几条", "至少收集 10 家候选店铺，工具采集结果已人工复核", "确定 3 家核心对标，并写明排除其他家的理由", "完成 20 个产品拆解，按形态 × 价格带交叉取样", "写出 3 个差异化方向，每条都对应一个可执行动作"],
    assignment: "选 3 家真正可比的店铺，填完竞品拆解表（模板库《01-竞品拆解表》），输出一份三档机会清单：可跟进／需验证／不做各至少 1 条，每条写清理由和下一步动作。",
    sources: [{label:"对标店铺（会员）",url:"https://t.zsxq.com/KXBDI"},{label:"优秀同行产品（会员）",url:"https://t.zsxq.com/hpBmo"}]
  }
];

lessons.push(
  {
    id: 4,
    stage: "增长",
    title: "高转化关键词体系",
    summary: "从平台、同行和站外收词，经过清洗、分组和验证，形成可持续维护的词库；工厂店和贸易店的收词取向不一样。",
    duration: "55 分钟",
    updated: "2026-10",
    prerequisites: "第 02—03 课",
    outcomes: ["建立一份带来源标记的种子词与扩词清单", "把词按六类意图分组，并说清每类用在哪里", "区分工厂店和贸易店该抢的词、不该抢的词", "建立每周新增与淘汰的复核机制"],
    quick: "高转化词不是搜索量最大的词，而是产品匹配、买家意图清晰、并在实际点击或询盘里被验证过的词。收词、清洗、分组、覆盖、投放、复盘要形成闭环——但闭环的入口不一样：工厂店从「我能做什么」出发，贸易店从「客户要什么、我能组什么」出发。",
    steps: [
      ["定起点：新店起种子词，老店起有商机词", "新店没有历史，用产品名称、用途、规格和场景起种子词；老店已经有跑出来的词，直接从那批「有商机词」开始，不用从零猜。起点选错，后面扩出来的词都是空的。",
        `<details class="step-more"><summary>展开看种子词怎么起</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">种子词的四个来源</div><ul class="mm-list">
            <li><strong>产品名称</strong><span>客户嘴里的叫法，不是你内部的型号。同一款产品可能有 2—3 个通用叫法，都要收</span></li>
            <li><strong>用途</strong><span>用来解决什么问题：放松、助眠、康复、办公久坐</span></li>
            <li><strong>使用场景</strong><span>在哪用、给谁用：家用、车载、办公室、礼品</span></li>
            <li><strong>材质与规格</strong><span>只在买家会主动搜的时候才收，不是所有参数都值得当词</span></li>
          </ul></div>
          <div class="method-note"><strong>判断一个种子词合不合格：</strong>把它丢到 Google 和国际站首页各搜一次，出来的如果是同类产品的采购页，合格；出来的是科普、评测、维修，不合格。这一步和第 02 课判断采购意图是同一个动作。</div>
          <p class="step-more-label">新店和老店的起点不一样</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>起点</th><th>新店</th><th>老店</th></tr></thead><tbody>
             <tr><td>输入从哪来</td><td>产品名称、用途、场景、同行标题</td><td>买家进店来源词（来搜／脚本导出）、产品360「关键词分析」页签</td></tr>
            <tr><td>第一件事做什么</td><td>起种子词，再往外扩</td><td>把已有的词分成有商机和无商机，再看缺口</td></tr>
            <tr><td>最容易犯的错</td><td>凭感觉起词，收了一堆没人搜的表达</td><td>天天扩新词，却不看已经有商机的词有没有被用足</td></tr>
            <tr><td>优势</td><td>没有历史包袱，可以直接按意图分类</td><td>有真实转化数据，能验证词到底值不值</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>老店先别扩词。</strong>把「已经带来过商机的词」列出来，看看它们分别放在了标题、详情还是广告里。很多时候不是词不够，是好词没被用足——扩十个新词，不如把一个已验证的词铺到三个位置。</div>
        </div></details>`],
      ["老店：把有商机词和无商机词分开用", "把买家维度的进店来源词导出来（来搜或自研脚本），按「这个词带来的买家有没有发询盘／有没有来 TM」分成有商机词和无商机词——这一步必须用买家维度的数据，后台访客详情里那一列「全站偏好关键词」是全店口径，分不出来。要按单个产品看词，则去产品360 的「关键词分析」页签。这两份数据不是用来看报表的，是用来决定加词、砍词和改页面的。",
        `<details class="step-more"><summary>展开看三类词各自怎么用</summary><div class="step-more-body">
          <p class="step-more-label">按有没有产生商机，词只分三类</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>词的类型</th><th>怎么认定</th><th>动作</th></tr></thead><tbody>
            <tr><td>有商机词</td><td>带来过询盘或 TM 咨询</td><td>提为核心词；扩同义词和他国变体；铺到标题、详情、推广三个位置</td></tr>
            <tr><td>无商机词（有访客）</td><td>有人点进来，但没产生商机</td><td>先诊断原因，再决定是屏蔽还是改页面——不要直接砍</td></tr>
            <tr><td>零曝光词</td><td>词库里有，但从没跑出曝光</td><td>查是不是没投放、类目挂错、或词本身太小没人搜</td></tr>
          </tbody></table></div>
          <p class="step-more-label">无商机词往下查三层，别一刀切</p>
          <div class="mindmap"><div class="mm-root">有访客、没商机，原因只有三种</div><ul class="mm-list">
            <li><strong>一、词不对</strong><span>搜的人不是采购商：零售词、维修词、配件词。这类直接屏蔽</span></li>
            <li><strong>二、页不对</strong><span>词是对的，但主图形态、价格带、MOQ 接不住。这类要改页面，屏蔽了反而少一批精准流量</span></li>
            <li><strong>三、竞争不对</strong><span>词和页都对，但点击成本压过毛利。这类降权或缩到长尾，不是删词</span></li>
          </ul></div>
           <p class="step-more-label">产品360 用来做「词—产品」绑定</p>
           <div class="method-note"><strong>先说清入口，不然会找不到。</strong>产品360 不是一个独立页面：先到<strong>产品参谋 → 产品分析</strong>找到那个产品，点行末的「分析」，右侧会滑出一个抽屉，抽屉顶部才是「关键词分析／趋势分析／访客地域／关联商品／流量来源／价格分析／竞品对标」这排页签。<strong>带词的是「关键词分析」这一个页签</strong>；「流量来源」页签只有渠道维度（搜索、推荐、会场这些），里面没有词——这是最容易走错的一步。</div>
           <figure class="course-figure">
             <div class="figure-head"><span>01</span><div><strong>产品360 的关键词分析页签</strong><p>产品参谋 → 产品分析 → 行末「分析」→ 右侧抽屉（图内标题与数字已隐去）</p></div></div>
             <img src="assets/lesson-04-product360-keywords.png" alt="产品360 右侧抽屉的关键词分析页签，含关键词列与搜索曝光、点击、店内询盘、商机转化率等指标列" loading="lazy">
             <figcaption>抽屉顶部那排页签，只有<strong>「关键词分析」</strong>这一页带词；点错到「流量来源」就只剩渠道、看不到词。表格是<strong>关键词 + 九个指标 + 操作</strong>：左边两个曝光两个点击分「搜索」和「标准推广」两套，正好对照自然流量和付费流量；右边一路到「商机转化率」，是这个产品在每个词上的结果。一列一列横着读，能看出词是好在曝光、好在点击、还是好在承接。</figcaption>
           </figure>
           <div class="method-note"><strong>关键词分析的价值在于对得上号。</strong>同一个词在 A 产品上一直带来商机，说明词和产品匹配，可以固化进标题；如果某个词有曝光，但商机全跑到别的产品上，说明类目或标题指错了地方——这时候改标题比加预算有效。<br>按产品看还有一个用处：能发现「词是好词，但挂错了链接」，这是老店最常见的浪费。</div>
           <p class="step-more-label">来源词怎么取出来，取出来怎么用</p>
           <figure class="course-figure">
             <div class="figure-head"><span>02</span><div><strong>访客详情这一页长什么样</strong><p>数据参谋 → 访客详情（图内关键词与数字已隐去）</p></div></div>
             <img src="assets/lesson-04-visitor-keywords.png" alt="国际站数据参谋访客详情页，含搜索词筛选、统计周期与国家筛选，以及七个数据列" loading="lazy">
              <figcaption>看三处就够：<strong>左上「搜索词」框</strong>（筛某一类词）、<strong>「统计周期」</strong>（最近7天／最近31天／自定义）、<strong>第五列「全站偏好关键词」</strong>（前面依次是访客、国家及地区、浏览次数、停留时长）。一行是一个访客，不是一次浏览；同一个访客来三次，这里仍然只占一行。<br><strong>但这一列的名字要看仔细：它叫「全站」偏好关键词，是店铺口径的偏好词，不是这个买家进店时搜的那个词。</strong>课程里说的「来源词」，指的是<strong>单个买家的进店来源词</strong>——那个在后台这一页拿不到，要用来搜这类工具或自研脚本导出才有。两者的区别决定了后面怎么打标，别混着用。</figcaption>
           </figure>
           <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>取法</th><th>适合什么情况</th><th>拿到什么</th></tr></thead><tbody>
             <tr><td>后台访客详情逐条看</td><td>词量少、只想核对某条访客的浏览行为</td><td>全站偏好关键词、国家、浏览次数、停留时长。<strong>注意这是全站口径，不是他的进店来源词</strong>——只能当辅助参考</td></tr>
             <tr><td>来搜等第三方工具</td><td>要按单个买家看进店来源词，词量不大、想边看边判断</td><td><strong>买家维度的进店来源词</strong>，能看到这个人是搜哪个词进来的，适合核对高价值买家</td></tr>
             <tr><td>自研脚本导出</td><td>要按词统计、要跑几十上百条、要按月攒</td><td>整月访客明细 Excel，<strong>每个买家带进店来源词</strong>，可排序可汇总，能按「是否询盘／是否 TM」打标</td></tr>
           </tbody></table></div>
           <div class="method-note"><strong>三者的关系，一句话分清：</strong>后台给你的是<strong>全店偏好的词</strong>，能看出「这店最近被哪些词带流量」；工具和脚本导出给你的是<strong>某个买家进店搜的词</strong>，能看出「这单生意是被哪个词带进来的」。判断词好不好，要看后者；看整体趋势，前者就够。</div>
                     <div class="method-note"><strong>这一页的四个筛选器，新人常按错。</strong><br><strong>搜索词：</strong>表格上方那个输入框，用来筛某一类词（不是列名）。<br><strong>统计周期：</strong>只有「最近7天／最近31天／自定义时间段」三档，<strong>没有「近30天」这一项</strong>——要凑整月就自己选自定义时间段，别拿 31 天当 30 天去和月报比。<br><strong>国家及地区、产品负责人：</strong>用来把范围收窄到某个市场或某个业务员，做季度复盘时才需要动它。<br>表头里那一列叫「全站偏好关键词」，<strong>是店铺口径的偏好词，不是这个买家进店搜的那个词</strong>——想拿单个买家的进店来源词，得来搜或脚本导出，这一页给不了。</div>
           <div class="method-note"><strong>页面上没有导出按钮，别指望点一下就能下载。</strong>访客详情能查、能筛，但要批量拿到明细，得用脚本导出。这件事本身就该固化成每月动作——不是为了看报表，是为了攒自己的历史：平台只保留近 31 天，不导出就永远只有最近一个月。</div>
          <div class="method-note"><strong>导出只是原料，汇总成台账才是资产。</strong>把明细按「来源词 × 国家」汇总成一张月度台账，字段固定下来：访客数、询盘访客数、TM 访客数、商机数、是否产生商机、词类、处理动作。用模板库的《08-访客来源词台账》记录，每月 1 号导上月数据，连续攒三个月就能看出哪些词在退、哪些词在起。<br>汇总脚本团队会统一做，但在脚本出来之前，先用表格手工汇总也比不攒强——平台只留 31 天，数据过期不会等人。</div>
          <div class="method-note"><strong>词取出来之后，只做三件事。</strong><br><strong>① 打标：</strong>按有没有产生询盘或 TM，分成有商机词和无商机词。<br><strong>② 拿去搜：</strong>把每个词丢到 Google 和国际站首页各搜一次，看搜出来的是批发询价页还是零售维修页——这一步决定它该进核心词还是进屏蔽词。<br><strong>③ 归类：</strong>按六类意图分好，喂回自己的词库，再决定放进标题、详情还是推广。</div>
          <div class="method-note"><strong>三个必须注意的地方。</strong><br><strong>① 有商机词是结果，不是原因。</strong>要配曝光量一起看转化率。只看商机绝对数，很容易把「投放多」误当成「词好」。<br><strong>② 样本要够。</strong>7 天数据可能是偶然，建议看近 30—90 天再定去留。<br><strong>③ 访客详情只保留近 31 天、T-2 更新。</strong>要做季度对比，得自己定期导出 Excel 留档，否则数据会滚掉。</div>
        </div></details>`],
      ["多渠道扩词", "从平台搜索建议、关键词指数、同行标题、广告搜索词和 Google／站外工具补充词。每个词都要记下它从哪来——来源决定可信度。",
        `<details class="step-more"><summary>展开看渠道与可信度</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>渠道</th><th>拿到什么词</th><th>可信度</th></tr></thead><tbody>
            <tr><td>平台搜索下拉与相关搜索</td><td>真实买家正在搜的表达</td><td>高，优先级第一</td></tr>
            <tr><td>关键词指数</td><td>搜索量与趋势</td><td>高，用来排序和判断季节性</td></tr>
            <tr><td>同行标题</td><td>已被验证的表达组合</td><td>中，要防抄到过时或违规的词</td></tr>
            <tr><td>广告搜索词报告</td><td>花钱买来的真实点击词</td><td>最高，但样本量小</td></tr>
            <tr><td>Google／站外工具</td><td>行业通用词、长尾表达</td><td>中，需回到平台验证有没有人搜</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>扩词阶段不做判断，只做收集。</strong>一边收一边删，最后会只剩你本来就认识的那几个词——那等于没扩。</div>
        </div></details>`],
      ["清洗与去重", "删除不相关、语义重复、品牌侵权和明显低意向词；小语种、连写词和常见变体要单独标记，不要直接删。",
        `<details class="step-more"><summary>展开看删、留、标记三种处理</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>情况</th><th>处理</th><th>理由</th></tr></thead><tbody>
            <tr><td>零售词、维修词、配件词</td><td>删</td><td>搜的人不是采购商，来了也不会问价</td></tr>
            <tr><td>品牌词、他人商标</td><td>删</td><td>侵权风险，与投放合规直接相关</td></tr>
            <tr><td>语义重复（单复数、连写）</td><td>合并，保留搜索量高的那个</td><td>重复词会稀释预算，不会放大曝光</td></tr>
            <tr><td>小语种、地区变体</td><td>标记保留，不删</td><td>可能是某个市场的唯一入口，但要用单独的词组去测</td></tr>
            <tr><td>看着相关但不确定的词</td><td>标记「待验证」</td><td>先放观察区，用一周数据说话，别凭感觉删</td></tr>
          </tbody></table></div>
        </div></details>`],
      ["按意图分组", "至少分为核心品类词、属性词、用途词、场景词、采购意图词、国家／语言词六类。分组不是为了好看，是为了决定每个词放哪里。",
        `<details class="step-more"><summary>展开看六类词分别放哪里</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>词类</th><th>例子方向</th><th>主要用在哪</th></tr></thead><tbody>
            <tr><td>核心品类词</td><td>产品大词</td><td>标题首位、主推链接</td></tr>
            <tr><td>属性词</td><td>材质、功率、形态、认证</td><td>标题中段、属性栏、筛选词</td></tr>
            <tr><td>用途词</td><td>缓解什么、解决什么</td><td>详情页、卖点</td></tr>
            <tr><td>场景词</td><td>家用、车载、办公、礼品</td><td>详情页、副图、长尾覆盖</td></tr>
            <tr><td>采购意图词</td><td>wholesale、OEM、custom、bulk</td><td>推广计划、独立落地页</td></tr>
            <tr><td>国家／语言词</td><td>小语种表达、地区叫法</td><td>单独词组测试，不混进主计划</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>采购意图词要单独建组。</strong>它和品类词混在一个计划里，出价逻辑会被拉平——想买货的人和想看产品的人，点击成本本来就不一样。</div>
        </div></details>`],
      ["分店铺类型取向", "同一个产品，工厂店和贸易店该抢的词不一样。抢错词不是浪费预算，是接不住的单。",
        `<details class="step-more"><summary>展开看工厂店和贸易店的词表</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>词的方向</th><th>工厂店</th><th>贸易店</th></tr></thead><tbody>
            <tr><td>定制与代工</td><td>优先：OEM、ODM、custom logo、private label、custom packaging</td><td>慎用：接了要转厂，交期和品质自己控不住</td></tr>
            <tr><td>能力与资质</td><td>优先：manufacturer、factory、ISO、CE、FDA、RoHS</td><td>可用：有独家代理或稳定认证来源时才用</td></tr>
            <tr><td>批量与宽度</td><td>慎用：wholesale、assorted 这类要的是多品类</td><td>优先：wholesale、bulk、set、kit、collection</td></tr>
            <tr><td>起订与现货</td><td>按产线实际能力定，别承诺做不到的 MOQ</td><td>优先：small order、mixed order、ready to ship</td></tr>
            <tr><td>共同要抢</td><td colspan="2">核心品类词、用途词、场景词——这三类不分店铺类型，都要覆盖</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>同一个产品，两个店的标题词序就该不一样。</strong><br><strong>工厂店：</strong>Custom Logo Neck Massager OEM Manufacturer CE<br><strong>贸易店：</strong>Wholesale Neck Massager Set Bulk Ready to Ship<br>差别不在英文写得好不好，在于你想让哪一类买家点进来。</div>
          <div class="method-note"><strong>最容易犯的错：</strong>贸易店去抢 OEM 词，接了单转给工厂，交期和品质两头受气；工厂店去抢 wholesale 宽词，来的都是要几十个 SKU 的分销商，产线根本配不齐。</div>
        </div></details>`],
      ["分配使用位置", "标题优先放核心词与强属性词；详情页覆盖场景与长尾词；推广计划按意图分组。一个词只在一个地方主推，不要三处重复堆。",
        `<details class="step-more"><summary>展开看分配原则</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">一个词，一个主战场</div><ul class="mm-list">
            <li><strong>标题</strong><span>只放 1 个核心品类词 + 2—3 个强属性词。标题是给搜索匹配用的，不是词库的展示窗口</span></li>
            <li><strong>详情页</strong><span>承接场景词和长尾词，用自然句子写，不要罗列</span></li>
            <li><strong>推广计划</strong><span>按意图分组建计划，采购意图词单独一组，出价单独定</span></li>
            <li><strong>不要做的</strong><span>同一个词在标题、详情、广告里反复堆，既不加分，还会让标题读不通</span></li>
          </ul></div>
        </div></details>`],
      ["用数据复核", "每周查看曝光、点击、询盘和搜索词报告，新增有效词、降权或屏蔽无效词。词库不是建完就结束，是一个每周都要动的清单。",
        `<details class="step-more"><summary>展开看每周复核动作</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>看到什么</th><th>怎么处理</th><th>频率</th></tr></thead><tbody>
            <tr><td>有曝光、没点击的词</td><td>先查主图和标题是否匹配，连续两周仍无点击则降权</td><td>每周</td></tr>
            <tr><td>有点击、没询盘的词</td><td>回看搜索词报告，确认是不是意图偏差，是则屏蔽</td><td>每周</td></tr>
            <tr><td>词小但询盘稳定</td><td>扩同义词和相近款，单独建小组养着</td><td>每周</td></tr>
            <tr><td>突然起量的新词</td><td>加进种子池，看是不是季节性或新需求</td><td>每周</td></tr>
            <tr><td>整份词库</td><td>季度清理一次，删掉连续两个月零曝光的词</td><td>每季度</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>复核看的是词的去留，不是账户的涨跌。</strong>把「这周删了哪 5 个词、加了哪 3 个词」记下来，比记「曝光涨了 12%」有用得多。</div>
        </div></details>`]
    ],
    decisions: [
      ["曝光高、点击低", "词太宽，或主图与搜索意图不匹配", "拆词组，先改主图再看点击"],
      ["点击高、无询盘", "采购意图弱，或详情承接不足", "回看搜索词报告，屏蔽零售词"],
      ["流量小、询盘稳定", "高价值长尾词", "扩同义词和相近款，单独建组养"],
      ["工厂店抢了 wholesale 宽词", "产线配不齐多品类，询盘全是分销商", "收回到 OEM／定制／认证类词"],
      ["贸易店抢了 OEM 词", "接了单要转厂，交期和品质控不住", "换成批发、组合、现货类词"]
    ],
    checklist: ["关键词已去重并标记来源", "每个词都有意图归属和使用位置", "标题只放了核心词与强属性词，没有机械堆词", "工厂店／贸易店的词取向已分开处理", "广告词能追溯到搜索词报告", "建立了每周新增与淘汰机制"],
    assignment: "为一个主推产品整理不少于 80 个候选词，按六类分组，标出来源；再挑 10 个词说明放在标题、详情还是广告。最后写一句：这些词里，哪些是你们这家店不该抢的，为什么。",
    sources: [{label:"高转化词课程与文档（会员）",url:"https://t.zsxq.com/KMJRl"},{label:"站外收词方法（会员）",url:"https://t.zsxq.com/dj3gF"},{label:"词频组合标题（会员）",url:"https://t.zsxq.com/lTRhH"},{label:"SEO 外贸关键词工具",url:"https://seowaimao.com"}]
  },
  {
    id: 5,
    stage: "转化",
    title: "高质量产品链接",
    summary: "把类目、属性、标题、图片和详情组织成能获得流量、也能承接采购需求的产品页；工厂店和贸易店的详情重点不同。",
    duration: "60 分钟",
    updated: "2026-10",
    prerequisites: "第 04 课",
    outcomes: ["独立发布一条完整产品链接并自查", "按采购决策顺序组织图片和详情", "区分工厂店和贸易店的详情说服重点", "用一张检查表在发布前拦掉常见错误"],
    quick: "高质量链接不是字段填满，而是买家在正确类目里看到匹配的标题和主图，进页面后快速确认三件事：规格对不对、你能不能做、下一步怎么谈。工厂店要证明「我能做」，贸易店要证明「我能配齐、能快发」——证明错了，流量再多也不转化。",
    steps: [
      ["选对类目与产品形态", "优先保证类目、产品名称和实际交付一致。用高流量类目换来的曝光，基本都是不精准曝光。",
        `<details class="step-more"><summary>展开看类目错的代价与后台类目选择</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>错法</th><th>会出现什么</th><th>代价</th></tr></thead><tbody>
            <tr><td>挂到更热的上级类目</td><td>曝光涨了，点击率暴跌</td><td>拖低整店点击率，影响系统推荐</td></tr>
            <tr><td>挂到相近但不相同的类目</td><td>来的买家问的都不是这个产品</td><td>询盘质量差，业务员白耗时间</td></tr>
            <tr><td>多类目重复铺同款</td><td>自己跟自己抢流量</td><td>分散权重，两款都做不起来</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>自查方法：</strong>把这个类目的 Top 20 产品打开看一遍，如果至少 15 个和你的产品形态一致，类目就是对的。少于一半，回去重选。</div>
          <figure class="course-figure">
            <div class="figure-head"><span>01</span><div><strong>发品后台的类目匹配与推荐</strong><p>商品管理 → 商品发布 →「类目发品」页面</p></div></div>
            <img src="assets/lesson-05-publish-category.png" alt="商品发布后台的类目发品页面，包含商品图片、商品名称、搜索类目输入框及匹配的三层类目列表" loading="lazy">
            <figcaption>入口叫<strong>「商品管理 → 商品发布」</strong>，落地页叫<strong>「类目发品」</strong>。看核心操作流：① 在<strong>「搜索类目」</strong>框输入你的核心产品英文词（如 <code>neck massager</code>）；② 系统会在下方列出匹配的三层类目树（如 <code>健康护理 >> 按摩用品 >> 按摩枕／肩颈部按摩仪</code>）；③ 点击选中最吻合的底层类目，页面最底部会显示「已选类目」，点击「我已阅读如上规则，现在发布产品」进入属性填写页。<strong>不要凭主观感觉随便挂大类</strong>，类目一旦放错，后面质量助手会直接报黄标判定为「较差」。</figcaption>
          </figure>
        </div></details>`],
      ["填写结构化属性与阶梯价格", "完整填写材质、规格、用途、认证、产地和定制能力；设置合理的梯度起订量与交期。属性不只是给买家看的，也是给筛选和推荐用的。",
        `<details class="step-more"><summary>展开看属性必填项、规格与阶梯价格设置</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>属性组</th><th>填到什么程度</th><th>漏填的后果</th></tr></thead><tbody>
            <tr><td>材质与规格</td><td>可量化的全部填，不留空</td><td>进不了筛选结果，等于不存在</td></tr>
            <tr><td>认证</td><td>只填真实持有的，写清型号范围</td><td>写错或夸大属于合规风险</td></tr>
            <tr><td>定制能力</td><td>能做什么、起订多少、是否收费</td><td>买家要问一遍，沟通成本翻倍</td></tr>
            <tr><td>产地与交期</td><td>填常规交期，不填最快纪录</td><td>承诺兑现不了，纠纷从这里开始</td></tr>
          </tbody></table></div>
          <figure class="course-figure">
            <div class="figure-head"><span>02</span><div><strong>属性与阶梯价格长什么样</strong><p>发品后台 → 商品属性与交易信息设置区</p></div></div>
            <img src="assets/lesson-05-product-attributes-price.png" alt="商品发布后台中的商品属性、商品规格、根据数量设置阶梯价、发货期设置区" loading="lazy">
            <figcaption>看两个关键区：<strong>① 上半部「商品属性」</strong>：分为 4 项必填属性（功能、售后、原产地、适用部位）和其他属性（品牌、型号、尺寸、类型等）。<strong>注意：品牌和型号是文本输入框，不是勾选框；型号不能当规格填</strong>。<strong>② 下半部「交易信息」</strong>：支持勾选商品规格（颜色/材质传图）；下方<strong>「根据数量设置阶梯价」</strong>支持多区间设置（最小起订量、单件价格）；最底部<strong>「发货期」</strong>根据不同订货量区间明确填写预计发货天数。阶梯价和交期必须和业务员口径完全对齐，严防前台写 7 天、实际生产要 30 天导致的违约纠纷。</figcaption>
          </figure>
        </div></details>`],
      ["组合标题", "按核心产品词 + 关键属性 + 使用场景组织。词从第 04 课的词库里取，标题只放 1 个核心词和 2—3 个强属性词。",
        `<details class="step-more"><summary>展开看词序怎么排</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">标题语序：越靠前权重越高</div><ul class="mm-list">
            <li><strong>第 1 段</strong><span>核心品类词，一个就够。放三个同义词不会加权，只会让标题读不通</span></li>
            <li><strong>第 2 段</strong><span>强属性词：形态、功率、材质、认证中买家最在意的那两个</span></li>
            <li><strong>第 3 段</strong><span>场景或采购意图词：家用、礼品、custom、wholesale——按店铺类型选，别混着放</span></li>
            <li><strong>不要做的</strong><span>把词库里的词全部塞进标题。买家读不懂，系统也不会因此多给你曝光</span></li>
          </ul></div>
        </div></details>`],
      ["组织图片与视频", "首图解决点击，后续图片依次回答细节、参数、场景、工厂和信任问题。图片顺序就是买家的提问顺序。",
        `<details class="step-more"><summary>展开看图片该按什么顺序排</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>位置</th><th>回答什么问题</th><th>常见错误</th></tr></thead><tbody>
            <tr><td>首图</td><td>这是什么，值不值得点</td><td>信息过多、看不清主体</td></tr>
            <tr><td>第 2—3 张</td><td>细节和关键参数</td><td>放氛围图，浪费最贵的两屏</td></tr>
            <tr><td>第 4—5 张</td><td>使用场景、尺寸对比</td><td>场景图看不出产品本身</td></tr>
            <tr><td>第 6—7 张</td><td>工厂、产线、认证、质检</td><td>工厂店不展示能力，等于白有</td></tr>
            <tr><td>视频</td><td>动态展示和操作方式</td><td>只拍外观，不拍使用过程</td></tr>
          </tbody></table></div>
        </div></details>`],
      ["编排详情页", "先价值与差异，再规格、应用、生产、质检、包装、交付、FAQ 和联系入口。前三屏决定买家会不会继续往下看。",
        `<details class="step-more"><summary>展开看详情页信息顺序</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">详情页的阅读顺序</div><ul class="mm-list">
            <li><strong>第一屏：说清是什么</strong><span>产品全貌 + 一句话价值。不要开场就贴公司简介</span></li>
            <li><strong>第二屏：解决什么问题</strong><span>用途与场景，让买家确认「这就是我要找的」</span></li>
            <li><strong>第三屏：凭什么信你</strong><span>认证、产线、质检——这一屏是工厂店的主场</span></li>
            <li><strong>中段：参数与规格</strong><span>表格化，买家要拿去和同行比价的就是这一段</span></li>
            <li><strong>后段：交付与 FAQ</strong><span>MOQ、交期、包装、定制流程、常见问题</span></li>
            <li><strong>结尾：询盘入口</strong><span>明确告诉买家下一步做什么</span></li>
          </ul></div>
        </div></details>`],
      ["分店铺类型调重点", "同一条链接结构，工厂店和贸易店的说服重点不一样。买家第一个问题不同，第一屏就该不同。",
        `<details class="step-more"><summary>展开看两种店该证明什么</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>证明什么</th><th>工厂店</th><th>贸易店</th></tr></thead><tbody>
            <tr><td>买家先问的</td><td>你能做我这款吗？多少量？多久？</td><td>你有多少款？能混批吗？多久发？</td></tr>
            <tr><td>第一屏该放</td><td>产品全貌 + 产线或认证</td><td>产品全貌 + 品类宽度</td></tr>
            <tr><td>核心证据</td><td>产线与设备实拍、产能、良率、自持认证、打样与开模周期</td><td>可配齐的品类与组合、现货、混批门槛、发货时效</td></tr>
            <tr><td>定制能力</td><td>重点讲：logo、包装、电压插头、说明书语言</td><td>讲「可协调」，不承诺自己做不到的</td></tr>
            <tr><td>最容易缺的</td><td>把认证和产线藏到最后，买家看不到就走了</td><td>只报单品，看不出你能一次配齐</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>一句话判断：</strong>把详情页第一屏给一个陌生买家看三秒，他能不能说出「这家是工厂还是贸易」。说不出来，说明你的证明还没做到位。</div>
          <div class="method-note"><strong>别硬装。</strong>贸易店在详情里写「自有工厂」，客户验厂时立刻穿帮；工厂店去拼「品类最全」，产线配不齐反而拖交期。写你真实能兑现的那部分，转化率比吹出来的高。</div>
        </div></details>`],
      ["发布后检查与质量助手自检", "从移动端和买家视角检查截断、错误参数、图片清晰度、MOQ、价格与询盘按钮，并对照商品质量助手排查错放类目。发布不是终点，是第一次验收。",
        `<details class="step-more"><summary>展开看发布前检查清单与质量助手面板</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>检查项</th><th>怎么看</th><th>不合格的信号</th></tr></thead><tbody>
            <tr><td>移动端截断</td><td>用手机打开自己的链接</td><td>标题尾部被截、参数表要横滑</td></tr>
            <tr><td>参数一致性</td><td>属性栏、详情、图片三处对一遍</td><td>功率、尺寸、颜色对不上</td></tr>
            <tr><td>图片清晰度</td><td>放大看细节</td><td>有水印、拉伸、压字太糊</td></tr>
            <tr><td>MOQ 与价格</td><td>和业务员确认口径</td><td>页面写 50，报价按 500 起</td></tr>
            <tr><td>询盘入口</td><td>自己发一条测试</td><td>按钮点了没反应、表单太长</td></tr>
          </tbody></table></div>
          <figure class="course-figure">
            <div class="figure-head"><span>03</span><div><strong>商品质量助手与错放类目报错</strong><p>发品后台左侧悬浮的「商品质量助手」与报错反馈面板</p></div></div>
            <img src="assets/lesson-05-quality-score.png" alt="商品发布后台中的商品质量助手面板，展示质量评级、类目错放优化建议与报错反馈" loading="lazy">
            <figcaption>看左侧悬浮的两个面板：<strong>① 上方橙色「报错反馈」</strong>：指出物流提供方式等未达标项，有红标直接无法提交。<strong>② 下方「商品质量助手」</strong>：展示当前的质量综合评级。截图直观展示了类目放错的后果——如果标题写了手部按摩器却错挂到「足部按摩器」，系统会立刻标红警告<strong>「类目错放：商品信息与当前类目不匹配」</strong>，并判定为<strong>「较差 · 商品曝光受限」</strong>，同时给出建议修正的底层类目。<strong>必须按照质量助手的优化建议逐条消除黄红标</strong>，做到各项合规、评级优良后再提交发布。</figcaption>
          </figure>
        </div></details>`],
      ["先定每张图的分工", "一套图先分岗位，再谈审美。首图负责点击，第 2—5 张负责打消疑虑，第 6 张以后负责证明你可靠，视频负责演示怎么用。",
        `<details class="step-more"><summary>展开看图片分工表</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>位置</th><th>只回答一个问题</th><th>排错的表现</th></tr></thead><tbody>
            <tr><td>首图</td><td>这是什么，值不值得点</td><td>信息太满，缩小后看不清主体</td></tr>
            <tr><td>第 2—3 张</td><td>细节、材质、结构到底怎么样</td><td>放氛围图，浪费最贵的两屏</td></tr>
            <tr><td>第 4—5 张</td><td>用在什么场景、多大、给谁用</td><td>场景图里看不到产品本身</td></tr>
            <tr><td>第 6—7 张</td><td>凭什么信你能稳定供货</td><td>工厂店不展示产线，等于白有</td></tr>
            <tr><td>视频</td><td>怎么用、什么手感</td><td>只拍外观转圈，不拍使用过程</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>先分工再设计。</strong>做图之前先在纸上写清「这张图要回答哪一句提问」，写完再决定放什么元素。反过来先找素材再想用途，最后一定每张图都想塞满。</div>
        </div></details>`],
      ["选主图类型", "六种类型是工具箱，不是必选项。选哪一个，取决于你想让买家先看到什么。",
        `<details class="step-more"><summary>展开看六类主图各适合什么</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>类型</th><th>适合什么</th><th>主要风险</th></tr></thead><tbody>
            <tr><td>正常展示型</td><td>规格明确、外观有优势的产品</td><td>同质化，缩略图里没有记忆点</td></tr>
            <tr><td>角标型</td><td>有认证、交期、MOQ 这类硬优势</td><td>角标太多，遮挡主体</td></tr>
            <tr><td>文案型</td><td>有一个说得清的核心利益</td><td>字太小，移动端读不出来</td></tr>
            <tr><td>丰富信息型</td><td>套装、配件、多规格</td><td>信息层级乱，看不出主产品是什么</td></tr>
            <tr><td>人物／场景型</td><td>用途需要演示、需要比例参照</td><td>人物形象不符合目标市场审美</td></tr>
            <tr><td>国别化</td><td>已确定主推国家</td><td>用国旗当装饰，实际内容没变</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>最多叠加两种。</strong>角标 + 场景是常见组合；角标 + 文案 + 人物 + 多规格堆在一张首图上，缩略图里只剩一堆色块。</div>
        </div></details>`],
      ["首图：解决点击", "首图只有一个任务——让买家在缩略图状态下认出产品，并且想点。判断标准不是设计好不好看，是缩到很小还能不能认出来。",
        `<details class="step-more"><summary>展开看首图怎么自检</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">首图三件事</div><ul class="mm-list">
            <li><strong>一、缩略图测试</strong><span>把图缩到 200 像素宽，再问一句「认得出这是什么吗」。认不出，重做</span></li>
            <li><strong>二、一个点击理由</strong><span>主体够大、背景干净、只放一个卖点。三个卖点等于没有卖点</span></li>
            <li><strong>三、和标题对得上</strong><span>标题写定制，首图就要有定制痕迹；标题写套装，首图就要看到整套。承诺不一致，点击来了也会跳走</span></li>
          </ul></div>
          <div class="method-note"><strong>最简单的自检：</strong>把首图和同行 6 张图并排缩成一行，能不能一眼挑出你的。挑不出来，说明这张图只是合格，不是有竞争力。</div>
        </div></details>`],
      ["后续图：按提问顺序排", "买家看图是有顺序的：先看细节，再看场景，最后才关心你是谁。按这个顺序排，转化率比按好看程度排高。",
        `<details class="step-more"><summary>展开看六张图的信息顺序</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>顺序</th><th>放什么</th><th>为什么放这</th></tr></thead><tbody>
            <tr><td>第 1 张</td><td>首图：产品全貌</td><td>决定点不点</td></tr>
            <tr><td>第 2—3 张</td><td>关键细节、材质、结构</td><td>买家在确认「和我想的是不是一样」</td></tr>
            <tr><td>第 4 张</td><td>尺寸与比例参照</td><td>没有参照物，买家对大小没概念</td></tr>
            <tr><td>第 5 张</td><td>使用场景</td><td>确认自己是不是这个用途</td></tr>
            <tr><td>第 6 张</td><td>认证、检测报告</td><td>开始考虑「能不能进我的市场」</td></tr>
            <tr><td>第 7 张</td><td>产线、质检、包装、发货</td><td>最后才考虑「这家靠不靠谱」</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>把信任类图片提到前面是常见错误。</strong>买家还没确认产品对不对，就先看厂房和设备，只会觉得你在讲自己。信任信息有用，但要等产品信息讲完。</div>
        </div></details>`],
      ["分店铺类型配视觉证据", "同一条链接，工厂店和贸易店该证明的东西不一样。这类差异不在美工，在做图之前就要定。",
        `<details class="step-more"><summary>展开看两种店的视觉重点</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>位置</th><th>工厂店</th><th>贸易店</th></tr></thead><tbody>
            <tr><td>首图</td><td>产品全貌 + 一个角标（认证或工厂）</td><td>产品全貌 + 组合感，让人看出不止一款</td></tr>
            <tr><td>第 2—3 张</td><td>结构、工艺、材质细节</td><td>多款组合、颜色／规格选择</td></tr>
            <tr><td>中段</td><td>产线、设备、质检流程、自持认证</td><td>品类宽度、现货状态、发货能力</td></tr>
            <tr><td>收尾</td><td>定制流程：打样周期、开模周期</td><td>混批门槛、组合方案、包装服务</td></tr>
            <tr><td>一句话目标</td><td>让买家看到产能和可控性</td><td>让买家看到能配齐、能快发</td></tr>
            <tr><td>最忌讳</td><td>七张图全是产品，看不出你有工厂</td><td>放一张工厂图，但是网上找的</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>工厂店最大的浪费：</strong>明明有产线、有设备、有质检，却一张都不拍，把最强的证据留在车间里。这些图不需要专业摄影，手机拍清流程就够用。</div>
          <div class="method-note"><strong>贸易店最大的风险：</strong>用网图或供应商的图冒充自有产能。客户验厂立刻穿帮，还可能有版权和侵权投诉。没有产线就大方讲组合能力和发货能力，这本身就是贸易商的价值。</div>
        </div></details>`],
      ["守住三条视觉红线", "形态、标识、文案。这三条一旦破，图做得再好看也是负分——前两条会导致验货纠纷，第三条会招来投诉。",
        `<details class="step-more"><summary>展开看三条红线和尺寸规范</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">三条红线</div><ul class="mm-list">
            <li><strong>一、不改产品形态</strong><span>实拍抠图 + 场景合成可以；用 AI 重绘改掉产品外形、比例、按键位置不行——买家按图验货，偏差就是纠纷</span></li>
            <li><strong>二、去掉非官方标识</strong><span>机身、包装、配件上的第三方品牌 Logo 必须抹掉。露出别家商标，轻则被投诉，重则侵权</span></li>
            <li><strong>三、文案不夸大</strong><span>认证只写真实持有的型号范围，参数只写实测值。「最好」「第一」这类绝对化表述不要用</span></li>
          </ul></div>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>规范项</th><th>团队标准</th><th>说明</th></tr></thead><tbody>
            <tr><td>尺寸</td><td>统一 800×800；部分项目按客户要求做 1600×1200</td><td>平台对尺寸有最低要求，以发布页提示为准</td></tr>
            <tr><td>背景</td><td>首图干净，后续图可用场景</td><td>场景是合成的也要符合真实使用环境</td></tr>
            <tr><td>文字</td><td>只放一个核心卖点，字号保证移动端可读</td><td>小字在手机上等于没有</td></tr>
            <tr><td>水印</td><td>不放店铺名水印</td><td>占位置，且显得不专业</td></tr>
          </tbody></table></div>
        </div></details>`],
      ["用数据复核图片", "图好不好不由设计判断，由点击率和停留时长判断。一次只测一个变量，否则不知道是哪个改动起了作用。",
        `<details class="step-more"><summary>展开看怎么测、看什么数</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>看什么</th><th>说明什么</th><th>怎么动</th></tr></thead><tbody>
            <tr><td>点击率</td><td>首图有没有吸引力</td><td>换首图类型或换卖点，一次只换一个</td></tr>
            <tr><td>停留时长</td><td>首图承诺和详情是否一致</td><td>不一致就统一表达，不是继续换图</td></tr>
            <tr><td>询盘率</td><td>图上的承诺有没有兑现</td><td>回看询盘问题，补对应图片</td></tr>
            <tr><td>不同国家表现</td><td>审美和采购重点不同</td><td>按国家建素材组，不要一套图打全球</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>A/B 测试的纪律：</strong>同一时间只改一个变量，至少跑满一周再判断。同时换首图和标题，跑出来的结果谁也归因不了。</div>
        </div></details>`]
    ],
    decisions: [["点击率低", "主体不清、卖点弱，或与搜索词不符", "先做主体图与单卖点图的 A/B 测试"],["点击高、询盘低", "图片承诺与详情／价格不一致", "统一主图、标题和首屏信息，不是继续换图"],["多国表现差异大", "市场审美和采购重点不同", "按国家建立素材组，一套图打不了全球"],["询盘总问同一个问题", "图上没回答，详情也没前置", "把这个问题做成一张图，放进第 2—3 位"],["工厂店点击低", "七张图全是产品，看不出制造能力", "补产线、质检、认证到中段"]],
    checklist: ["每张图都写明了它回答哪个问题", "首图通过 200 像素缩略图测试", "首图只放一个点击理由，最多叠加两种类型", "信任类图片排在第 6 位之后", "形态未改、非官方标识已去除", "文案无绝对化表述、认证只写真实持有", "准备了至少两个可对比的版本"],
    assignment: "为第 05 课那条主推链接配一套 7 张图 + 1 条视频，每张图下面写一句「它回答哪个提问」；再挑一张做 A/B 测试，写明你要验证的假设和判断标准。",
    sources: [{label:"高转化主图完整课程（会员）",url:"https://t.zsxq.com/Yv2G7"},{label:"角标素材（会员）",url:"https://t.zsxq.com/XB1xi"},{label:"文案类主图工具（会员）",url:"https://t.zsxq.com/bkGli"},{label:"AI 服装模特效果图（会员）",url:"https://t.zsxq.com/L7H5y"}]
  },
  {
    id: 7,
    stage: "增长",
    title: "产品链接冷启动",
    summary: "先让链接具备承接能力，再用小规模精准流量换取「可判断」的数据；新店和老店的起手方式不一样。",
    duration: "40 分钟",
    updated: "2026-10",
    prerequisites: "第 04—06 课",
    outcomes: ["说清冷启动要拿到哪三个信号", "区分新店和老店的起手方式", "给新链接配第一轮词与预算", "按三个节点做去留判断，而不是凭感觉加钱"],
    quick: "冷启动不是给新品平均加流量，也不是冲着成交去。它要的是两份判断依据：系统判断这条链接值不值得给更多曝光，你判断这条链接值不值得继续投。没有数据的链接不能加预算，有数据的链接不该平均分配。",
    steps: [
      ["先搞清冷启动要拿什么信号", "冷启动期不看成交，看三个信号：有没有曝光、有没有点击、有没有询盘。三个信号背后是三个完全不同的问题，混在一起就会瞎调。",
        `<details class="step-more"><summary>展开看三个信号分别说明什么</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>信号</th><th>说明什么问题</th><th>什么时候该出现</th></tr></thead><tbody>
            <tr><td>曝光</td><td>链接有没有被收录、有没有资格进流量池</td><td>3 天内应有；完全为零就是硬问题</td></tr>
            <tr><td>点击</td><td>主图、词、价格对不对得上</td><td>有曝光后 3—7 天</td></tr>
            <tr><td>询盘</td><td>详情承接和报价有没有竞争力</td><td>7—14 天</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>没有曝光的链接，谈点击率没有意义；没有点击的链接，谈询盘率也没有意义。</strong>冷启动最常见的错误是跳层判断——刚上架两天没询盘，就开始改详情，其实问题可能只是还没被收录。</div>
          <p class="step-more-label">冷启动分两段，顺序不能颠倒</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>阶段</th><th>花不花钱</th><th>验证什么</th><th>什么条件才进下一段</th></tr></thead><tbody>
            <tr><td>第一段：自然冷启动</td><td>不投广告</td><td>收录、类目、属性、首图能不能被点</td><td>自然曝光稳定出现，点击率与同类目相近</td></tr>
            <tr><td>第二段：付费助推</td><td>小预算</td><td>词对不对、图能不能打、询盘承接行不行</td><td>拿到询盘且质量正常，才谈加预算</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>为什么不能一上来就投钱：</strong>广告能制造出「有曝光、有点击」的假象。基础没验证就投，你分不清这些数据是产品本身行，还是钱买来的。等到预算一停，数据立刻归零，前面那半个月等于白跑。</div>
        </div></details>`],
      ["新店和老店起点不同", "新店没有历史，起手全靠外部参考；老店手里已经有跑通的词、客户和价格带，直接复用比重新试快得多。",
        `<details class="step-more"><summary>展开看两种店怎么起手</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>起手方式</th><th>新店</th><th>老店</th></tr></thead><tbody>
            <tr><td>第一批词</td><td>行业买家 + 榜单 + 精准长尾，从外部推</td><td>直接用已有「有商机词」，不用重新猜</td></tr>
            <tr><td>初始流量</td><td>新链接自然流量 + 小预算</td><td>可用老链接导流、店铺关联、老客户复访</td></tr>
            <tr><td>定价参考</td><td>榜单和同行</td><td>自己的成交价带，更可信</td></tr>
            <tr><td>最容易犯的错</td><td>词选错，流量全废</td><td>用老经验套新品，忽略形态差异</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>老店能复用的四样东西：</strong>有商机词、成交过的客户、老链接的流量入口、已经验证过的价格带。这四样用上，冷启动周期通常比新店短。</div>
          <div class="method-note"><strong>但老店别照搬。</strong>老链接的词是围绕老形态跑出来的，新品形态不同、卖点不同，词能复用，图和详情不能复用。</div>
        </div></details>`],
      ["上架前必须就绪的六件事", "六件事缺一件就别上架。半成品上架等于用真实流量做一次多变量测试，测出来的结论还是错的。",
        `<details class="step-more"><summary>展开看六件事的就绪标准</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>项目</th><th>就绪标准</th><th>没就绪的代价</th></tr></thead><tbody>
            <tr><td>类目</td><td>和实际产品一致，同级 Top 20 里至少 15 个同形态</td><td>曝光来了也不精准</td></tr>
            <tr><td>属性</td><td>可量化的全部填满，认证只写真实持有</td><td>进不了筛选，等于不存在</td></tr>
            <tr><td>首图</td><td>通过 200 像素缩略图测试</td><td>有点击机会也抓不住</td></tr>
            <tr><td>价格与 MOQ</td><td>和业务员口径一致，页面写的能兑现</td><td>询盘来了也谈不成</td></tr>
            <tr><td>交期</td><td>写常规交期，不写最快纪录</td><td>纠纷从这里开始</td></tr>
            <tr><td>询盘入口</td><td>自己发一条测试过</td><td>有意向也联系不上</td></tr>
          </tbody></table></div>
        </div></details>`],
      ["第一段：不投广告，先验证基础", "这一段一分钱不花，只验证四件事：有没有被收录、类目对不对、属性全不全、首图能不能被点。自然流量跑不通，投再多钱也是往漏水的桶里灌水。",
        `<details class="step-more"><summary>展开看自然段查什么</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>看什么</th><th>正常表现</th><th>异常怎么办</th></tr></thead><tbody>
            <tr><td>收录</td><td>上架后几天内能搜到自己的链接</td><td>搜不到：查类目、属性、是否处于待审状态</td></tr>
            <tr><td>自然曝光</td><td>持续有小量曝光，不是零</td><td>完全为零：回到类目和标题，先解决能不能进池</td></tr>
            <tr><td>自然点击率</td><td>和同类目大致相当</td><td>明显偏低：先换首图，不要改动其他变量</td></tr>
            <tr><td>流量来源构成</td><td>搜索来源占一定比例</td><td>全是店内或直接访问：说明还没进搜索，词和类目有问题</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>这一段通常看 3—7 天。</strong>老店有基础权重，可能更快看到曝光；新店会更慢。<strong>慢不等于错</strong>，只要收录正常、曝光在缓慢增长，就继续观察，不要因为第三天还没询盘就改详情。</div>
          <div class="method-note"><strong>自然段的价值不是省钱，是干净。</strong>没有广告干扰时跑出来的曝光和点击，才是这条链接真实的基础水平。这个基线后面用来判断「付费到底带来了增量，还是只是替代了自然流量」，没有基线就没法算。</div>
          <p class="step-more-label">七天怎么判：用相对基准，不用绝对数字</p>
          <p class="step-more-note">不同类目的点击率、曝光量差好几倍，用「点击率低于 1% 就是差」这种绝对标准一定会误判。统一拿「同类目同形态 Top 20 的中位数」当基准线，只比相对位置。</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>指标</th><th>好</th><th>一般</th><th>差</th></tr></thead><tbody>
            <tr><td>收录</td><td>3 天内能搜到</td><td>4—7 天能搜到</td><td>7 天仍搜不到</td></tr>
            <tr><td>自然曝光趋势</td><td>第 4—7 天高于第 1—3 天</td><td>基本持平</td><td>持续为零，或逐日下降</td></tr>
            <tr><td>自然点击率</td><td>不低于类目中位数</td><td>中位数的 50%—100%</td><td>低于中位数的一半</td></tr>
            <tr><td>流量来源</td><td>搜索来源稳定有量</td><td>偶有搜索流量</td><td>几乎没有搜索，全是店内或直接访问</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>周期纪律：7 天是最小观察窗，14 天是完整窗。</strong>7 天内只记录、不下结论——前三天数据波动极大，任何调整都会被噪音带偏。满 7 天做第一次判断，满 14 天做去留决定。</div>
          <div class="method-note"><strong>四项里有任何一项是「差」，先修那一项，别进入第二段。</strong>其中「收录」和「曝光趋势」是硬门槛：这两项不过，后面三项好坏都没意义。</div>
        </div></details>`],
      ["第二段：小预算付费，验证词和图", "自然段确认基础没问题，再上小预算。这一段买的是判断依据，不是订单——词选小而准，预算小到跑得动但不心疼。",
        `<details class="step-more"><summary>展开看第一轮怎么配</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>项目</th><th>第一轮建议</th><th>理由</th></tr></thead><tbody>
            <tr><td>词量</td><td>10—20 个精准长尾</td><td>大词点击贵、意图杂，冷启动期烧不起</td></tr>
            <tr><td>匹配方式</td><td>以精准为主</td><td>广泛匹配会把预算耗在无关搜索上</td></tr>
            <tr><td>预算</td><td>小到能跑动、但不心疼</td><td>目的是买数据，不是买订单</td></tr>
            <tr><td>出价</td><td>先控速，不抢首屏</td><td>首屏贵，且不一定更精准</td></tr>
            <tr><td>投放国家</td><td>只投已验证的 1—2 个</td><td>多国同开，每个国家都拿不到足够样本</td></tr>
            <tr><td>周期</td><td>7 天一轮</td><td>太短看不出规律，太长浪费预算</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>工厂店和贸易店的起手差异：</strong>有现货库存的工厂店，把「现货／快发」放进标题和角标，冷启动期决策链会明显变短；贸易店用「可混批、小单起订」降低首单门槛。这两句都是第 04、05 课已经准备好的素材，冷启动期正好用上。</div>
          <div class="method-note"><strong>具体出价和扣费规则不在这里展开</strong>，第 08、09 课会讲。这一课只需要记住：冷启动期的预算作用是买判断依据。</div>
          <p class="step-more-label">什么时候开广告：五道闸门全过才开</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>闸门</th><th>通过标准</th><th>不通过先做什么</th></tr></thead><tbody>
            <tr><td>一、收录</td><td>能搜到自己的链接</td><td>查类目和属性。链接没进池，投广告等于给不存在的入口加钱</td></tr>
            <tr><td>二、自然曝光</td><td>连续 7 天有量，且在增长</td><td>回去解决进池问题。硬门槛，不过就别开</td></tr>
            <tr><td>三、点击率</td><td>不低于类目中位数的一半</td><td>先换首图。否则买来的全是无效点击</td></tr>
            <tr><td>四、承接</td><td>价格、MOQ、交期、详情都对得上</td><td>先补页面。买来询盘也谈不成，白付点击费</td></tr>
            <tr><td>五、词</td><td>手上有 10—20 个精准词，且已分好意图</td><td>回第 04 课建词库。否则钱花在猜词上</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>缺哪一道，后果不一样。</strong>缺一、二，广告基本无效；缺三，是在买无效点击；缺四，买来询盘也成不了单；缺五，等于用预算替自己做词库测试。五道都过再开，钱才花得有判断依据。</div>
          <p class="step-more-label">三种不该开的情况</p>
          <div class="mindmap"><div class="mm-root">这几种情况下先别投</div><ul class="mm-list">
            <li><strong>一、只是想「试试看有没有效果」</strong><span>没有假设就没有判断标准。跑完两周，你也说不清该改哪里</span></li>
            <li><strong>二、因为竞品都在投</strong><span>别人的成本结构和你不一定一样。他投得起，不代表你投得划算</span></li>
            <li><strong>三、自然段还没满 7 天</strong><span>用广告盖住还没验证的基础，是最贵的一种试错——钱花了，问题还在</span></li>
          </ul></div>
          <div class="method-note"><strong>开广告的正确起点：</strong>先写一句假设，比如「换成场景首图后，点击率能追上类目中位数，所以值得用精准词加速验证」。写不出这句，说明还没到开的时机。</div>
          <figure class="course-figure">
            <div class="figure-head"><span>01</span><div><strong>开计划的第一屏长这样</strong><p>营销中心 → 首页「计划监测」区（计划名与数值已隐去）</p></div></div>
            <img src="assets/lesson-07-promotion-entry.png" alt="营销中心首页的计划监测区，含消耗最高、最新创建、商机最高三个排序页签和右上角的新建推广计划按钮" loading="lazy">
            <figcaption>冷启动那 7 天要盯的就是这一屏。<strong>三个排序页签</strong>是现成的三种视角：按「消耗最高」查钱花在哪、按「最新创建」看你新开的那个计划、按「商机最高」看谁在出结果。右上角「新建推广计划」是这一课的终点动作，但<strong>五道闸门没过之前，这个按钮先别按</strong>。</figcaption>
          </figure>
        </div></details>`],
      ["三天一循环看三个信号", "固定三个节点做判断，不要每天盯盘改来改去。每次只改一个变量，改完至少观察 3 天。",
        `<details class="step-more"><summary>展开看三个节点各做什么决定</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>节点</th><th>看什么</th><th>做什么决定</th></tr></thead><tbody>
            <tr><td>D3</td><td>有没有曝光</td><td>没有就查收录、类目、词是否太小；不加预算</td></tr>
            <tr><td>D7</td><td>点击率</td><td>低就先换首图，词不动；高就进入下一层观察</td></tr>
            <tr><td>D14</td><td>有没有询盘</td><td>有询盘才谈加预算；没有就查承接</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>为什么要按节点而不是天天看：</strong>冷启动期的数据波动很大，今天点击率掉了一半，可能只是展示位置变了。天天改，最后谁也说不清是哪次改动起了作用。</div>
        </div></details>`],
      ["卡住时按层排查", "冷启动跑不动，先定位卡在哪一层，不要一上来就改详情或加预算。",
        `<details class="step-more"><summary>展开看四层排查逻辑</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">冷启动卡住，先定位在哪一层</div><ul class="mm-list">
            <li><strong>一、没有曝光</strong><span>查收录状态、类目是否挂错、词是不是太小、预算有没有真的跑起来</span></li>
            <li><strong>二、有曝光没点击</strong><span>换首图、看价格是否有竞争力、确认词和产品是否匹配</span></li>
            <li><strong>三、有点击没询盘</strong><span>查详情承接、价格带、MOQ 和交期——这一步是页面问题，不是流量问题</span></li>
            <li><strong>四、有询盘没成交</strong><span>已经不是链接问题，是报价和跟进问题，交给第 11 课</span></li>
          </ul></div>
          <div class="method-note"><strong>越往后越不是运营能单独解决的。</strong>前三层是链接问题，第四层是销售问题。运营在不该改的地方反复改，是冷启动期最大的时间浪费。</div>
        </div></details>`],
      ["什么时候加预算，什么时候止损", "加预算要有依据，止损也要有依据。两个动作都不能凭感觉。",
        `<details class="step-more"><summary>展开看加投与止损的条件</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>情形</th><th>判断条件</th><th>动作</th></tr></thead><tbody>
            <tr><td>可以加预算</td><td>有点击、有询盘、询盘质量正常、报价能接住</td><td>逐步加，一次不超过原来的 30%—50%，加完再观察 3 天</td></tr>
            <tr><td>维持观察</td><td>有点击、暂无询盘，但详情和价格没有明显问题</td><td>再给一个 7 天周期，不加大投入</td></tr>
            <tr><td>暂停投放</td><td>连续两轮零询盘，且排查后确认是承接问题</td><td>先停投放、修页面，修好再开</td></tr>
            <tr><td>止损降权</td><td>形态本身在这个市场没需求，或价格带打不进去</td><td>降为自然流量观察，不删除，留数据</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>止损不等于删链接。</strong>链接留着还有自然流量和老客户复访的可能，删掉等于把已经积累的少量权重清零。降权保留、按月复盘，比一刀切更划算。</div>
        </div></details>`]
    ],
    decisions: [["无曝光", "收录、类目或词覆盖不足", "查收录与类目，换更精准的词，不加预算"],["有曝光无点击", "首图、价格或词不匹配", "先换素材和表达，词不动"],["有点击无询盘", "详情承接、价格带或 MOQ 有问题", "改页面，不要继续加投放"],["有询盘无成交", "报价与跟进问题，不是链接问题", "转给销售环节，按第 11 课处理"],["连续两轮零询盘", "承接有硬伤或市场不匹配", "暂停投放修页面，或降权保留"]],
    checklist: ["冷启动目标和观察周期已写明", "只选少量重点新品，不平均撒预算", "六项上架前置条件已逐项确认", "第一轮词控制在 10—20 个精准长尾", "自然流量与付费流量分开记录", "每次只改一个变量，改完观察 3 天", "加预算和止损都有明确条件"],
    assignment: "选 1 个新品（老店优先用已有的有商机词），做一张 14 天冷启动表：D3／D7／D14 各看什么指标、满足什么条件加预算、满足什么条件止损。表格用模板库《04-直通车排查表》的记录逻辑即可。",
    sources: [{label:"提升链接流量方法汇总（会员）",url:"https://t.zsxq.com/Cbgts"},{label:"运营流量逻辑（会员）",url:"https://t.zsxq.com/2TxTS"}]
  },
  {
    id: 8,
    stage: "增长",
    title: "直通车基础与计划搭建",
    summary: "认清国际站广告三大板块（品牌广告、全站推、标准推广），掌握标准计划搭建与「词、品、国、时」四维调控法；用可归因的结构换取真实商机。",
    duration: "75 分钟",
    updated: "2026-10",
    prerequisites: "第 02、04—07 课",
    outcomes: ["说清国际站三大广告板块（品牌/全站推/标准推广）的定位与分工", "掌握标准计划「词、品、国、时」四维调优机制与淘汰红线", "按产品形态、搜索意图与核心国家拆分计划，避免预算混烧", "用倒推法定预算，建立一套可执行的日常排查与规则核对 SOP"],
    quick: "国际站广告分为三大板块：品牌广告（问鼎、顶展、聚量）、全站推广（推工厂、日预算、智能推）与标准推广（新品加速、关键词推广、爆品助推）。广告计划首先是一个验证工具：用明确的产品、明确的市场和明确的目标，换取可解释的数据。计划混品、混词、混目标之后，即使出了询盘，你也说不清是哪一条起了作用。",
    steps: [
      ["先认清广告全景与确定唯一目标", "国际站广告分为三大板块，选对工具是第一步；而具体到一个计划，它只能回答一个问题。测品、测词、拿询盘、放大成熟品、验证国家，这五件事的判断标准完全不同，混在一起就无法归因。",
        `<details class="step-more"><summary>展开看广告板块分工与五种投放目标</summary><div class="step-more-body">
          <p class="step-more-label">国际站三大广告板块全景与定位</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>广告大类</th><th>包含工具／计划类型</th><th>计费与运作特点</th><th>适合什么场景</th></tr></thead><tbody>
            <tr><td><strong>品牌广告</strong></td><td>问鼎、顶展（顶级展位）、聚量</td><td>包月／包年／CPV 为主，PC 与 App 首位独占，强占行业心智</td><td>成熟大牌、头部大单品，锁定行业核心词第一名</td></tr>
            <tr><td><strong>全站推广</strong><br>（直通车）</td><td>推工厂、日预算、智能推</td><td>全域算法智能匹配，系统以品寻客，按全站商机或效果出价</td><td>拓新客、全店商品补量、放大成熟爆品（详见第 09 课）</td></tr>
            <tr><td><strong>标准推广</strong><br>（直通车·本课重点）</td><td>新品加速、关键词推广、爆品助推</td><td>P4P 点击付费，自主选品、选词、定出价、定国家与时段</td><td>新品冷启动测款、核心精准词打透、自主可控拿询盘</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>新手最容易犯的错误：把全站推和标准推广混着开、同一产品两边跑。</strong>两者的底层逻辑完全不同：标准推广买的是「明确的搜索意图」，全站推买的是「系统预测的潜在需求」。必须各司其职，不要把没测明白的品直接丢给系统去放大。</div>
          <p class="step-more-label">标准推广的五种投放目标</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>目标</th><th>要看的结果</th><th>不能混进来的东西</th></tr></thead><tbody>
            <tr><td>测品</td><td>这个形态有没有需求</td><td>其他形态的产品</td></tr>
            <tr><td>测词</td><td>哪些词能带来精准流量</td><td>不同意图的词混在一组</td></tr>
            <tr><td>拿询盘</td><td>稳定获取商机</td><td>未经验证的新品和新词</td></tr>
            <tr><td>放大成熟品</td><td>增量而不是替代自然流量</td><td>新变量、新素材</td></tr>
            <tr><td>验证国家</td><td>这个国家到底有没有需求</td><td>多国同开</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>判断标准不一样，就不能放一个计划里。</strong>测品看的是「有没有人问」，拿询盘看的是「成本多少」。同一个计划里两个标准并存，最后一定是拿成本去否定一个还没验证完的品。</div>
        </div></details>`],
      ["三大广告板块选品准入与调控机制（品维调控：标准推广 vs 全站推 vs 品牌广告）", "标准推广靠人工手动控词控盘，全站推靠算法全域寻客，品牌广告靠首位独占心智。三大板块的选品标准、禁忌红线与调控手段截然不同，必须建立分板块的调控体系。",
        `<details class="step-more"><summary>展开看三大广告板块的选品画像与调控抓手</summary><div class="step-more-body">
          <p class="step-more-label">板块一：标准推广品维调控（新品加速／关键词推广／爆品助推）</p>
          <div class="mindmap"><div class="mm-root">标准推广按三个维度拆计划</div><ul class="mm-list">
            <li><strong>一、按产品形态</strong><span>不同形态不共预算。台式款和便携款的点击成本和转化率本来就不一样</span></li>
            <li><strong>二、按搜索意图</strong><span>品类词、采购意图词（OEM／wholesale）、长尾场景词分组。意图不同，出价逻辑不同</span></li>
            <li><strong>三、按国家</strong><span>重点国家单独成计划。多国混跑，每个国家都拿不到足够样本</span></li>
          </ul></div>
          <div class="method-note"><strong>可执行的粒度参考：</strong>一个计划里产品控制在 3 个以内且同形态，词控制在几十个以内且同意图。这是经验阈值，不是平台规则——目标是让每个计划跑一周后能看出方向。</div>
          <figure class="course-figure">
            <div class="figure-head"><span>01</span><div><strong>计划列表长什么样</strong><p>营销中心 → 标准推广（金额与计划名已隐去）</p></div></div>
            <img src="assets/lesson-08-ads-plan-list.png" alt="标准推广的计划列表，含状态、计划、诊断状态、预算、出价、投放渠道、推广商品数、推广关键词数、花费等列" loading="lazy">
            <figcaption>这张表就是你判断「粒度对不对」的地方。<strong>「推广商品数」和「推广关键词数」两列并排看</strong>：商品数很多、词也很多，几乎一定混烧；商品数 1—3、词几十个，才是一个能归因的计划。右边「预算」「出价」「花费」挨在一起，是用来对照「预算给了多少、实际花了多少」的——三个数一起看才有意义，单看花费没有判断价值。左侧「状态」与「诊断状态」是平台给的提示，不等于你的结论。</figcaption>
          </figure>
          <div class="method-note"><strong>后台真相：直通车不是没有数据，而是「只给数据素材、不给商业判断」。</strong>添加商品弹层里，平台给出的信息非常丰富：从推荐投广品、商机品、机会品等平台标签，到近 90 天搜索曝光、点击、订单、询盘的自然数据应有尽有，右上角甚至给了一个极具诱惑的「一键添加」按钮。但平台<strong>绝不会告诉你这个品该不该投、投多少算合理、什么样的数据算异常</strong>。没有准入标准，一键添加点下去就是批量盲目烧钱。直通车是<strong>付费流量放大器</strong>，用来放大原本就有转化潜力的品，绝不是用来「抢救死链接」的。</div>
          <figure class="course-figure">
            <div class="figure-head"><span>02</span><div><strong>添加商品弹层与选品真相</strong><p>标准推广 → 进入计划 →「添加商品」弹层（商品标题与具体数据已隐去）</p></div></div>
            <img src="assets/lesson-08-ads-product-select.png" alt="直通车添加商品弹层，含全部商品/爆品/优品/潜力优品页签、一键添加按钮、商品标签与近90天数据列" loading="lazy">
            <figcaption>观察弹层的三大真实细节：<strong>① 平台标签与一键添加</strong>：顶部显眼提示「推荐投广品可享流量加速」，右侧紧跟「一键添加」——新手最容易在这里直接全选，把未经验证的品全塞进计划。<strong>② 横向很宽需要滚动</strong>：表格向右延伸包含近 90 天搜索曝光、点击、订单数、询盘数、TM 咨询数等自然数据，<strong>在标准视口下必须向右拖动滚动条才能看全</strong>。<strong>③ 必须前置筛选</strong>：左侧勾选框只有配合运营自己的准入标准（看近 90 天是否有自然微光转化），才能把真正值得投的品挑出来，绝不依赖平台的自动推荐。</figcaption>
          </figure>
          <p class="step-more-label">标准推广产品准入画像：什么产品应该加入直通车</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>准入类型</th><th>数据与基建特征</th><th>投放逻辑与目标</th></tr></thead><tbody>
            <tr><td><strong>① 自然转化「微光品」<br>（首选必推）</strong></td><td>数据参谋近 90 天内，自然流量下已有 <strong>1～10 个 TM 或询盘</strong>，点击率（CTR）处于同行业平均线以上</td><td>已被真实买家货币与需求验证过，主图、价格与参数完全正确，唯独缺少规模曝光。加推直通车起量最快</td></tr>
            <tr><td><strong>② 战略测重「达标新品」<br>（门槛极严）</strong></td><td><strong>基建必须达标</strong>：具备白底+场景主图、高清主图视频、属性填满无误、质量分达良好/优品、且明确展示资质认证（CE/RoHS 等）</td><td>新品冷启动需要 14～30 天数据窗口快速积累买家画像与搜索标签，验证市场接受度；基建不全坚决不推</td></tr>
            <tr><td><strong>③ 差异化「高毛利款」</strong></td><td>针对欧美等核心目标市场痛点做过差异化改进（如特定电压、便携新结构、专供包装），毛利空间足够覆盖单次点击成本</td><td>高毛利款能承受单次较高的竞价门槛，适合打核心大词与采购意图词，换取高客单商机</td></tr>
          </tbody></table></div>
          <p class="step-more-label">标准推广日常调控：删品与加品硬性红线</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>调整动作</th><th>触发条件（硬性红线）</th><th>处理方式与执行原则</th></tr></thead><tbody>
            <tr><td><strong>加品红线<br>（资产防撞车）</strong></td><td><strong>已在「全站推·推工厂」产生过商机的产品</strong></td><td><strong>绝对禁止加入标准推广计划！</strong>避免同一款产品在不同计划里互抢曝光、重复消耗费用，破坏推工厂原本已建立的算法模型</td></tr>
            <tr><td><strong>加品禁忌 ①<br>（三无死链接）</strong></td><td>上架超 3 个月，曝光大几千甚至过万，但 <strong>0 点击、0 询盘</strong></td><td><strong>坚决禁止入库</strong>。说明产品形态或主图有致命伤，进直通车纯属白白送钱</td></tr>
            <tr><td><strong>加品禁忌 ②<br>（超薄毛利品）</strong></td><td>单件利润极低、无连带溢价能力的跑量款</td><td><strong>禁止加入直通车</strong>。单件利润无法覆盖平均 1～3 美元的单次点击成本</td></tr>
            <tr><td><strong>加品禁忌 ③<br>（资质存疑品）</strong></td><td>无合规证书、涉嫌外观侵权或平台违规风险品</td><td><strong>禁止推广</strong>。极易触发广告审核驳回甚至店铺合规扣分处罚</td></tr>
            <tr><td><strong>删品红线 ①</strong></td><td>连续 30 天无商机，且有持续花费消耗</td><td><strong>坚决移出计划</strong>。说明该品在现有出价和人群下无法转化，继续放着纯属浪费预算</td></tr>
            <tr><td><strong>删品红线 ②</strong></td><td>仅有曝光，0 点击、0 商机</td><td><strong>坚决移出计划</strong>。买家毫无点击欲望，说明主图吸睛度或产品形态严重不过关，必须回第 06 课重修视觉</td></tr>
            <tr><td><strong>删品红线 ③</strong></td><td>各项核心数据显著低迷，持续无商机</td><td><strong>及时止损移出</strong>，停止无效试错</td></tr>
          </tbody></table></div>

          <p class="step-more-label">三大广告板块选品准入与调控协同总览</p>
          <div class="method-note"><strong>广告板块各司其职，不要单打独斗：</strong>标准推广用于「自主测款与精准控盘」（本课核心）；全站推用于「成熟爆品全域寻客放量」（详见<strong>第 09 课</strong>）；品牌广告用于「行业核心大词首位独占与门面背书」（详见<strong>第 10 课</strong>）。</div>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>广告板块</th><th>包含工具</th><th>选品准入核心标准</th><th>日常调控核心抓手</th><th>对应深度课程</th></tr></thead><tbody>
            <tr><td><strong>标准推广</strong><br>（自主控盘）</td><td>新品加速、关键词推广、爆品助推</td><td><strong>近 90 天自然微光品（1～10商机）</strong><br>基建达标的新品、高毛利款</td><td>「词、品、国、时」四维手动精准调优；设置精准匹配与地域溢价；配置自定义列看板</td><td><strong>第 08 课（本课）</strong></td></tr>
            <tr><td><strong>全站推广</strong><br>（算法放量）</td><td>推工厂、日预算、智能推</td><td><strong>已验证的成熟爆品</strong><br>大众通用款、工厂产能充足款</td><td>单次微调预算（&le;25%）；<strong>坚决关闭自动更新</strong>；多地域筛选；踢掉吸血不转化品</td><td><strong><a href="#lesson-9">第 09 课《全站推优化与排查》</a></strong></td></tr>
            <tr><td><strong>品牌广告</strong><br>（首位独占）</td><td>问鼎、顶展、聚量</td><td><strong>全店门面天花板款</strong><br>顶级画质、全套认证、工厂实力</td><td>定期换绑升级款；做 A/B 创意与主图视频保 CTR；对标榜单；配置场景化承接页</td><td><strong><a href="#lesson-10">第 10 课《品牌广告深度运营》</a></strong></td></tr>
          </tbody></table></div>
        </div></details>`],
      ["用倒推法定预算与周期", "预算不是「今天想花多少」，是从目标倒推出来的：想要几条询盘、能接受多少成本、需要多少点击、需要多少钱。",
        `<details class="step-more"><summary>展开看倒推四步</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>步骤</th><th>怎么算</th><th>没有历史数据时怎么办</th></tr></thead><tbody>
            <tr><td>一、定目标询盘数</td><td>这一轮想验证出几条询盘</td><td>先定 3—5 条，够判断趋势即可</td></tr>
            <tr><td>二、估可接受成本</td><td>客单价 × 毛利 × 可承受比例</td><td>用「一单利润能覆盖几次点击」粗算</td></tr>
            <tr><td>三、换算点击量</td><td>询盘数 ÷ 询盘转化率</td><td>没有转化率就用同行参考值，跑完再修正</td></tr>
            <tr><td>四、得出预算</td><td>点击量 × 平均点击成本</td><td>先用最小可跑量起步，跑一周再补</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>周期比金额重要。</strong>预算再小，也要覆盖 7 天；能覆盖 14 天更好。预算小到三天就烧完，你拿到的只是三天的噪音，不是趋势。</div>
        </div></details>`],
      ["配词、匹配方式与商机词淘汰（词维调控）", "词来自清洗过的词库与日常积累的买家商机词，第一轮以精准为主，采购意图词单独成组；建立半月至一月的淘汰红线，不让僵尸词和吸费词赖在计划里。",
        `<details class="step-more"><summary>展开看配词原则、商机词挖掘与淘汰三红线</summary><div class="step-more-body">
          <p class="step-more-label">第一轮建计划配词原则</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>项目</th><th>第一轮做法</th><th>原因</th></tr></thead><tbody>
            <tr><td>词源</td><td>只用已分好意图的词</td><td>现场想词，等于用预算做词库测试</td></tr>
            <tr><td>词量</td><td>十几到几十个精准词</td><td>词太多预算摊薄，每个词都跑不出数据</td></tr>
             <tr><td>匹配</td><td>以精准为主</td><td>宽匹配会把预算耗在无关搜索上</td></tr>
             <tr><td>采购意图词</td><td>单独一组，单独定预算</td><td>想买货的人和想看产品的人，点击成本不一样</td></tr>
             <tr><td>排除词</td><td>零售、维修、配件词提前屏蔽</td><td>这类流量点得再多也不会询价</td></tr>
           </tbody></table></div>
            <figure class="course-figure">
              <div class="figure-head"><span>03</span><div><strong>关键词页与匹配方式的位置</strong><p>标准推广 → 某个计划 → 「关键词」页签（计划名、出价、数字均已隐去）</p></div></div>
             <img src="assets/lesson-08-ads-keyword-match.png" alt="标准推广计划的关键词页签，含关键词、出价、近1小时最佳排名、24小时排名分布、抢位状态、推广评分、同行平均出价、搜索热度" loading="lazy">
             <figcaption>三个要点：<strong>① 右上角「匹配方式」是计划级设置</strong>，不是在每个词后面单独选——点开改一次，这个计划里所有词一起变。<strong>② 表头那一排</strong>才是逐词看的：出价、近1小时最佳排名、24小时排名分布、抢位状态、推广评分、同行平均出价、搜索热度。判断一个词「能不能抢」看排名与同行出价，判断「值不值得抢」看推广评分与搜索热度。<strong>③ 因为匹配方式是整计划统一</strong>，精准词和宽泛词必须拆到两个计划里，否则只能二选一。</figcaption>
           </figure>
           <div class="method-note"><strong>这处最容易被写错，记牢：</strong>匹配方式<strong>不是逐词设置</strong>，是计划级统一设置，入口在关键词页右上角（文案形如「匹配方式：短语匹配」）。所以「这个计划用精准、那个计划用宽泛」是拆计划的理由之一，而不是在同一个计划里混着设。</div>
           <div class="method-note"><strong>屏蔽词的入口也在这页。</strong>关键词列表左上角有一个下拉（显示「词组」），里面能打开词报告、也能进屏蔽词；零售词、维修词、配件词就在这里排掉，不用去别的页面找。</div>
           <p class="step-more-label">商机词深度挖掘与 AI 辅助分析 SOP</p>
           <div class="method-note"><strong>商机词从哪里来：</strong>一是「访客详情」中通过来搜或自研脚本导出的买家进店来源词；二是业务员日常在《询盘与客情登记表》中记录的真实买家询价词。<br><strong>借助 AI（Accio／GPT）进行结构化清洗：</strong>把导出的带访客、国家、产品 ID 和询盘标记的数据表提供给 AI，使用以下标准话术指令：<br>
           <code>“这是门店近期的访客与商机来源明细，请帮我分析输出表格与图表：<br>1. 整理所有产生过询盘或 TM 的商机来源词，按词频排序，核对与当下主推产品是否匹配；<br>2. 统计每个商机来源词对应绑定的产品 ID，找出带词核心款；<br>3. 汇总商机访客国家分布，测算各国家转化率（哪些是高转化国、哪些是无效国）；<br>4. 进行商机词意图分类（如按产品线划分为液体包装机词包、薯片包装机词包等），提取前 10 高频词填入对应计划。”</code></div>
           <p class="step-more-label">关键词日常复盘与淘汰三红线</p>
           <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>淘汰红线</th><th>触发条件</th><th>处理动作与诊断依据</th></tr></thead><tbody>
             <tr><td><strong>红线 ①：0 曝光</strong></td><td>添加满 15～30 天，曝光依然为 0</td><td><strong>直接删除</strong>。说明出价远低于门槛，或该词极其冷门根本无人搜索，留着占名额无意义</td></tr>
             <tr><td><strong>红线 ②：高曝光、0 点击、0 商机</strong></td><td>持续累积高曝光，点击率极低甚至为 0</td><td><strong>直接删除</strong>。典型的词与主图/形态不符，买家搜了这个词看到你的产品根本不想点</td></tr>
             <tr><td><strong>红线 ③：高曝光、高点击、持续无商机</strong></td><td>持续 1 个月高消耗、点击量大，但商机数为 0</td><td><strong>果断删除</strong>。最危险的「吸费词」——虽然热闹但意图不对（如零售、找资料或买家定位偏差），必须止血</td></tr>
           </tbody></table></div>
           <div class="method-note"><strong>关键词投放周期管理：</strong>新加词不要每天频繁改动，应以<strong>半个月至一个月</strong>为一个观察调整周期，结合添加时间做批量复盘与末位淘汰。</div>
         </div></details>`],
      ["设国家与投放时段（国家与时段调控）", "国家跟随第 02 课的主推结论；时段以消耗速度和买家时差为准；遇到业务员反馈「某国全已读不回」，必须用三步 SOP 穿透真实原因，绝不盲目屏蔽。",
        `<details class="step-more"><summary>展开看国家判断周期、业务员反馈排查 SOP 与时段调控</summary><div class="step-more-body">
          <p class="step-more-label">国家维度调整：45 天长短期对比</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>市场表现</th><th>数据特征（看 1.5 个月）</th><th>调控动作</th></tr></thead><tbody>
            <tr><td><strong>长期不适合</strong></td><td>连续 1.5 个月（45天）询盘极少、转化极差、买家客单或认证严重不匹配</td><td>果断缩减该国出价，或直接在该计划中<strong>屏蔽该国家</strong></td></tr>
            <tr><td><strong>短期月度偏差</strong></td><td>历史表现良好，仅单月或某两周数据下滑</td><td><strong>不直接判定市场不行</strong>。多为当地节假日（斋月、圣诞）、季节性淡季或物流波动，保持观察</td></tr>
          </tbody></table></div>
          <p class="step-more-label">业务员反馈「某国全已读不回」的排查三步法（破除信息失真）</p>
          <div class="mindmap"><div class="mm-root">业务员集体说某国质量差，怎么查</div><ul class="mm-list">
            <li><strong>第一步：后台核查真实性</strong><span>后台抽查该国真实聊天记录。若确认确实 100% 普遍已读不回、无任何有效互动，在该计划中针对性屏蔽该国家</span></li>
            <li><strong>第二步：排查「主账号转询盘时效卡点」</strong><span>若发现超过 50% 是客户给主账号发了消息，但转给业务员后买家不再回复——问题出在转派延迟或首响过慢！<strong>解法：</strong>设置该国询盘指定业务员直达接单（不走主账号中转）测试 30 天；若直派且无时差依然已读不回，再行屏蔽</span></li>
            <li><strong>第三步：排查「询盘多但不出单」的分配问题</strong><span>管理层重点指定的潜力国家若询盘多但一单未出，核查沟通记录与话术，排查是否集中分给了同一个业务员；若是沟通方式或专业度卡点，应建议更换分配业务员做对照测试，而不是直接停投广告</span></li>
          </ul></div>
          <div class="method-note"><strong>调整周期：</strong>国家维度常规<strong>一个月调整一次</strong>，遇到特殊紧急或严重异常场景即时调整。</div>
          <p class="step-more-label">投放时段调控：以消耗速度为核心</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>消耗速度表现</th><th>排查与诊断方向</th><th>调整动作</th></tr></thead><tbody>
            <tr><td><strong>消耗过快</strong><br>（如半天烧完日预算）</td><td>对照核心买家国时区，排查是否在<strong>目标国非工作时间或深夜</strong>发生无效集中点击</td><td>调低该时段出价比例（如降至 50%—70%），或直接暂停非目标活跃时段</td></tr>
            <tr><td><strong>消耗平稳匀速</strong></td><td>预算能平稳跑满全天，且商机产出均匀</td><td><strong>基本不调整</strong>，切忌在正常节奏下随意改动时段</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>AI 辅助时段排查：</strong>把店铺主要询盘和 TM 来源国家，连同直通车时间段排布截图发给 Accio：<code>“这是我店铺询盘与 TM 的主要来源国家，这是我的直通车投放时段设置，帮我核对是否存在目标国深夜烧钱的时区倒挂问题。”</code></div>
        </div></details>`],
      ["设国家与人群", "国家跟随第 02 课的主推结论，不跟随「哪个国家便宜投哪个」。人群定向是加分项，不是必需项。",
        `<details class="step-more"><summary>展开看国家与人群怎么设</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>设置项</th><th>原则</th><th>常见错误</th></tr></thead><tbody>
            <tr><td>投放国家</td><td>只投第 02 课认定的主攻国 + 1 个验证国</td><td>多国同开，每个国家都拿不到样本</td></tr>
            <tr><td>老店人群</td><td>可用店铺人群、复购客户做定向</td><td>人群圈太小，计划跑不出量</td></tr>
            <tr><td>新店人群</td><td>先不加，把变量减到最少</td><td>一上手就叠人群，出问题无法定位</td></tr>
            <tr><td>时间与终端</td><td>按目标市场的采购时段和终端习惯设</td><td>照抄别人的设置</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>变量越少，归因越清楚。</strong>第一轮只留「词 × 国家」两个变量，跑出结论之后再加人群、加时段、加终端。</div>
        </div></details>`],
      ["上线前检查落地一致性", "广告承诺和落地页必须一致。不一致的时候，钱花得越多，浪费越大。",
        `<details class="step-more"><summary>展开看六项一致性</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>检查项</th><th>不一致的后果</th></tr></thead><tbody>
            <tr><td>词与产品形态</td><td>点进来发现不是要找的东西，直接跳出</td></tr>
            <tr><td>首图与卖点</td><td>承诺的场景图和详情对不上，信任受损</td></tr>
            <tr><td>价格与 MOQ</td><td>页面写 50、报价按 500，询盘白来</td></tr>
            <tr><td>交期</td><td>写了做不到的周期，后面全是纠纷</td></tr>
            <tr><td>详情完整性</td><td>关键参数缺失，买家懒得问直接走</td></tr>
            <tr><td>询盘入口</td><td>自己发一条测试，别等客户告诉你按钮坏了</td></tr>
          </tbody></table></div>
        </div></details>`],
      ["建立观察顺序与调优节奏", "先看搜索词，再看点击质量，最后才谈询盘成本。顺序反了，就会用成本去否定一个还没跑明白的计划。",
        `<details class="step-more"><summary>展开看调优顺序</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">按这个顺序看，不要跳</div><ul class="mm-list">
            <li><strong>第一步：搜索词</strong><span>看买家实际搜的是什么。出现零售词、配件词就屏蔽，这一步决定流量的干净程度</span></li>
            <li><strong>第二步：点击质量</strong><span>有点击但停留极短，说明词和图不匹配；点击率低说明图不行</span></li>
            <li><strong>第三步：询盘成本</strong><span>前两步干净了，成本才有比较意义</span></li>
            <li><strong>第四步：成交与复购</strong><span>成本低但客户质量差，一样是亏</span></li>
          </ul></div>
            <figure class="course-figure">
              <div class="figure-head"><span>04</span><div><strong>搜索词报告长什么样</strong><p>营销中心 → 直通车报告 → 搜索词报告（数字已隐去）</p></div></div>
              <img src="assets/lesson-08-ads-search-terms.png" alt="直通车报告的搜索词报告页签，含买家搜索词、点击占比、曝光占比三列" loading="lazy">
              <figcaption><strong>先认清楚它只有三列</strong>：买家搜索词、点击占比、曝光占比。<strong>没有花费、没有点击次数、没有展现量的绝对值</strong>——所以想在这一页回答「哪个词烧了多少钱」是做不到的。这一页能做的是两件事：① 看买家到底在搜什么（发现跑偏的词）；② 看点击占比和曝光占比的落差（曝光高、点击占比低＝人家看到你没点，问题在词与图的匹配）。要算钱，回计划列表用花费对着关键词数拆，别指望这一页。<br>另外注意顶部要先选组：<strong>「全站推广」和「标准推广」是两组报告</strong>，页签不同数据不同。本店标准推广组当期无数据，这张取自全站推广组——所以三列结构以自己后台为准。</figcaption>
            </figure>
            <div class="method-note"><strong>标准推广组的搜索词报告是空的，先别怀疑报表坏了。</strong>按顺序查三件事：① 这个计划近 7 天到底有没有在投（有预算不等于有在跑）；② 统计周期是不是选得太短；③ 词是不是窄到根本没人搜。三件都正常还空，才去后台报问题。</div>
            <div class="method-note"><strong>一次只改一个变量，改完至少观察 3 天，并记录改动时间和内容。</strong>没有修改记录，两周后你无法解释成本为什么变了，也无法复制成功的做法。</div>
            <p class="step-more-label">数据怎么看、怎么盯：日常盯盘三级动线</p>
            <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>盯盘频次</th><th>核心关注点</th><th>操作动线与排查要点</th></tr></thead><tbody>
              <tr><td><strong>每日必看<br>（早 9:00）</strong></td><td><strong>预算消耗速度与时段</strong></td><td>上午看昨夜美西核心白天的消耗进度。<strong>警惕瞬间烧光</strong>：若日预算在 1～2 小时内被迅速打满，必有超大词或智能泛匹配在吸血，必须当场降价或收紧匹配方式；预算能平稳匀速消耗至晚间则正常</td></tr>
              <tr><td><strong>每周必看<br>（周一上午）</strong></td><td><strong>搜索词真实意图与产品转化</strong></td><td>进「直通车报告 → 搜索词报告」，核对买家实际搜索词，抓出零售/自用等跑偏词当场加否定词；进计划商品明细执行<strong>淘汰三红线</strong>（0曝删、高曝0点0商机删、持续30天高耗0商机必删）</td></tr>
              <tr><td><strong>每半月必看<br>（双周复盘）</strong></td><td><strong>买家地域流向与商机成本</strong></td><td>核对直通车与买家参谋的地域分布，确认 60% 以上的花费是否流向欧美等可履约、高利润的目标国家；若大量预算流向偏远国，立即配置地域溢价</td></tr>
            </tbody></table></div>
            <figure class="course-figure">
              <div class="figure-head"><span>05</span><div><strong>自定义列：搭建日常监控看板</strong><p>标准推广 → 计划列表右上角「自定义列」配置面板（纯字段设置，无敏感数据）</p></div></div>
              <img src="assets/lesson-08-ads-custom-columns.png" alt="直通车自定义列配置弹层，含状态、计划、诊断状态、预算、出价、投放渠道、推广商品数、推广关键词数、花费、商机量等字段勾选" loading="lazy">
              <figcaption><strong>直通车不是没有数据监控，关键看你会不会配「自定义列」：</strong>后台默认视图只有几个笼统的汇总数字，要想掌握精细盯盘主动权，必须点击表格右上角<strong>「自定义列」</strong>。<br><strong>牢记后台真实字段名</strong>：后台没有所谓「平均点击花费（CPC）」，官方字段名叫<strong>「点击成本」</strong>；也没有复杂的阶梯算法，直接关注<strong>「商机成本」</strong>。<br><strong>推荐必勾 8 大核心监控指标</strong>：① <code>诊断状态</code>（排查扣分/受限）；② <code>预算</code> 与 <code>出价</code>；③ <code>花费</code>；④ <code>点击成本</code>；⑤ <code>点击率（CTR）</code>；⑥ <code>商机量</code>；⑦ <code>商机成本</code>；⑧ <code>L1+商机量</code>。勾齐这 8 项并上下拖动排序，你的直通车列表才真正具备了商业监控看板的能力。</figcaption>
            </figure>
            <p class="step-more-label">怎么样算一般：行业常态基准指标表</p>
            <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>核心指标</th><th>一般水平（常态基准线）</th><th>优秀水平</th><th>运营判断逻辑</th></tr></thead><tbody>
              <tr><td><strong>点击率（CTR）</strong></td><td><strong>1.2% ～ 2.2%</strong></td><td>&gt; 2.5%</td><td>低于 1.0% 说明主图缺少吸睛卖点、价格偏离行情或词不匹配</td></tr>
              <tr><td><strong>点击转商机率</strong></td><td><strong>1.5% ～ 3.0%</strong></td><td>&gt; 4.0%</td><td>相当于 <strong>35 ～ 65 次真实点击应产出 1 个询盘或 TM</strong>；低于 1.0% 严重异常</td></tr>
              <tr><td><strong>点击成本<br>（后台正式字段）</strong></td><td>处于行业参考底价 1.1 ～ 1.4 倍</td><td>稳定低位波动</td><td>结合客单价测算，只要单次商机成本在产品毛利承受范围内即可</td></tr>
              <tr><td><strong>主推国点击占比</strong></td><td><strong>&gt; 55%</strong></td><td>&gt; 75%</td><td>流量必须高度集中在主力目标国，杜绝预算被边缘低价国家稀释</td></tr>
              <tr><td><strong>预算消耗节奏</strong></td><td>平稳覆盖目标市场 8～12 小时</td><td>全天均匀可控</td><td>坚决避免 1 小时内被泛词秒光或整天花不出去</td></tr>
            </tbody></table></div>
            <p class="step-more-label">怎么样算异常：五大异常诊断与即时处理动作总表</p>
            <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>异常现象</th><th>根本原因诊断</th><th>运营即时处理动作（当天执行）</th></tr></thead><tbody>
              <tr><td><strong>异常 ①：高曝光、极低点击<br>（CTR &lt; 0.8%）</strong></td><td>词太宽（如搜 massager 出了眼部仪）；主图缺乏实物品质感；价格显著偏高</td><td>在计划中将低于 0.8% 的大词<strong>降价 30% 或暂停</strong>；重新排查并替换首图；校准起步价格带</td></tr>
              <tr><td><strong>异常 ②：高点击、高消耗、0 商机<br>（50次点击0转化）</strong></td><td>引来 C 端零售或白嫖样品流量；详情页缺少参数与认证；运费模板标了天价</td><td><strong>查搜索词报告</strong>：凡带 free/retail/repair 词<strong>立即加否定词</strong>；补齐参数认证；消耗超 50 刀仍 0 转化<strong>果断删品</strong></td></tr>
              <tr><td><strong>异常 ③：日预算 1 小时内被秒光</strong></td><td>开启了广泛/全网智能匹配；行业顶级词被系统集中扣费；未设出价上限</td><td>立即将计划的匹配方式<strong>转为精准匹配</strong>；查分时报表锁定吸血词<strong>单价直接砍半</strong>；开启分时折扣</td></tr>
              <tr><td><strong>异常 ④：点击全是非目标国<br>（边缘偏远国占大头）</strong></td><td>未设置地域溢价；算法为消耗预算自动向低竞价的边缘国家灌水</td><td>在标准推广中配置<strong>地域溢价</strong>：欧美核心国拉高至 <code>+50%～100%</code>，非目标国拉低至 <code>-50%</code> 或直接不投</td></tr>
              <tr><td><strong>异常 ⑤：原本出单爆品流量腰斩</strong></td><td>同行上架同款并打价格战；直通车质量分下滑或合规受限；账户欠费重热期</td><td>前台排查同行竞品动态；检查后台商品合规助手与质量分；适度小幅提价抢回核心排位</td></tr>
            </tbody></table></div>
            <p class="step-more-label">标准推广计划日常调控周期与四维动作总表</p>
           <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>调控维度</th><th>核心依据与指标</th><th>标准操作周期</th><th>触发动作与红线</th></tr></thead><tbody>
             <tr><td><strong>词（关键词）</strong></td><td>曝光、点击率、商机产出、意图匹配</td><td>每半个月至 1 个月</td><td>0 曝光删、高曝 0 点 0 商机删、高曝高耗持续 1 月 0 商机必删；持续补充访客来源词与询盘登记词</td></tr>
             <tr><td><strong>品（推广产品）</strong></td><td>商机量、消耗额、点击率、推工厂状态</td><td>每 30 天复盘一次</td><td>30 天无商机有消耗删、仅曝光 0 点 0 商机删；<strong>推工厂出商机品坚决不入</strong>；加品限 90 天优品（1&lt;TM+询盘&lt;10），单次≤5个</td></tr>
             <tr><td><strong>国（投放国家）</strong></td><td>转化率、有效询盘数、业务员跟进记录</td><td>常规每月（看 45 天）</td><td>区分长期不适（屏蔽）与短期波动；业务员说全已读不回按 3 步排查（核数据→直派30天测试→换业务员复核）</td></tr>
             <tr><td><strong>时（投放时段）</strong></td><td><strong>预算消耗速度</strong>、核心国时差</td><td>周度巡检，异常即调</td><td>消耗过快立即核查是否目标国深夜无效耗费，下调非工作时段出价；消耗平稳则不调</td></tr>
           </tbody></table></div>
         </div></details>`],
      ["规则部分每季度核对一次", "出价方式、扣费逻辑、计划类型、定向能力这些都会随平台调整。本课不写死具体规则，只给一张核对清单——每季度按表核一次，把变化记下来。",
        `<details class="step-more"><summary>展开看必须核对的六项</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>核对什么</th><th>为什么要核</th><th>在哪看</th></tr></thead><tbody>
            <tr><td>出价方式与扣费逻辑</td><td>直接影响成本结构，一变全盘算法都要重算</td><td>推广后台的规则说明与官方公告</td></tr>
            <tr><td>计划类型与可用功能</td><td>计划类型增减会影响怎么搭结构</td><td>推广后台创建入口</td></tr>
             <tr><td>匹配方式选项</td><td>匹配方式决定流量宽窄，且是计划级统一设置，不能逐词设</td><td>关键词页右上角「匹配方式」</td></tr>
            <tr><td>店铺评分／营销能力口径</td><td>影响可用的推广能力和权益</td><td>后台能力分说明页</td></tr>
            <tr><td>国家与人群定向能力</td><td>决定能不能按国家精细投放</td><td>计划设置页</td></tr>
            <tr><td>广告位与展示规则</td><td>决定曝光在哪里出现</td><td>官方公告与后台说明</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>本课的原则性内容是稳定的，规则性内容是会变的。</strong>上面六项每季度核对一次，把变化写进自己的《规则变更日志》；发现和课程写的不一致，以账号后台为准，并把差异反馈给课程维护人更新。</div>
        </div></details>`]
    ],
    decisions: [["预算很快花完", "词过宽、出价偏高或流量范围过大", "先看搜索词和国家，再动出价"],["有点击无商机", "词不准，或落地页承接弱", "先屏蔽无效搜索词，再评估页面"],["成本高但询盘优质", "不能只看表面成本", "按有效询盘和后续成交价值判断"],["成本很低但询盘质量差", "买来的是低意向流量", "查搜索词，收紧匹配方式"],["多国同开、每国都没数据", "样本被摊薄", "按国家拆计划，先跑 1—2 个"]],
    checklist: ["清楚国际站广告三大板块（品牌/全站推/标准推广）的分工", "同计划内产品和词语义一致，且未混入推工厂已出商机的品", "预算由目标倒推得出，且能覆盖 7 天以上", "只投主推国家 + 1 个验证国，排查业务员反馈守住三步法", "上线前六项一致性已逐条检查", "执行词维淘汰三红线（0曝/高曝0点0商机/高曝高耗1月0商机必删）", "以消耗速度为核心监控投放时段，避免深夜时区倒挂", "改动有记录，一次只改一个变量，本季度已按规则清单核对一次"],
    assignment: "搭一个计划草案：写清目标、产品、词组与意图分组、国家、由目标倒推出的预算与周期，以及三种数据异常下的处理动作。再对照第 08 步的六项，标注哪些规则你已在本季度核对过。",
    sources: [{label:"直通车认识与建计划（会员）",url:"https://t.zsxq.com/phtMs"},{label:"直通车注意事项（会员）",url:"https://t.zsxq.com/XWl1S"},{label:"标准推广实操（会员）",url:"https://t.zsxq.com/PfSND"},{label:"营销能力分官方说明",url:"https://www.yuque.com/chaike/yingxiao/pxb7k642147fp0m3"}]
  },
  {
    id: 9,
    stage: "增长",
    title: "全站推优化与排查",
    summary: "先把全站推和直通车分工分清，再按固定顺序排查；系统扩量带来的是效率，也带来归因难度。",
    duration: "70 分钟",
    updated: "2026-10",
    prerequisites: "第 08 课",
    outcomes: ["说清全站推和直通车各自解决什么问题", "按四层指标拆解数据，不只看花费", "按固定顺序排查四类问题", "验证广告带来的是增量还是替代自然流量"],
    quick: "全站推的特点是系统帮你扩量：你给产品和预算，系统去找需求。代价是流量结构变模糊——所以它比直通车更依赖「先排除无效、再调结构、最后调价」这个顺序。顺序一乱，就越调越看不出原因。",
    steps: [
      ["先分清它和直通车的分工", "两个工具买的不是同一样东西：直通车买的是明确的搜索意图，全站推买的是系统判断的潜在需求。混着用又不分开看，等于两个都没法归因。",
        `<details class="step-more"><summary>展开看两者怎么分工与全站推三大形态</summary><div class="step-more-body">
          <p class="step-more-label">全站推的三大产品形态</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>计划形态</th><th>核心逻辑与机制</th><th>适用场景与商机保护</th></tr></thead><tbody>
            <tr><td><strong>推工厂</strong></td><td>依托企业验厂报告、定制资质与产能实力，定向撮合具备大单采购需求与验厂意向的高净值定制买家</td><td>工厂型店铺核心获客阵地。<strong>硬性红线：已在推工厂稳定出商机的品，绝对不移入其他标准推广计划，避免多计划互抢权重</strong></td></tr>
            <tr><td><strong>日预算</strong></td><td>设定每日消耗预算上限，系统算法在全天流量波动中自动平滑消耗，智能捕捉高意向进店时段</td><td>预算可控、全天持续在线吸量，避免因出价过猛在半天内被耗光</td></tr>
            <tr><td><strong>智能推</strong></td><td>全自动化「以品寻客」，系统多维度解析商品属性与类目特征，全域匹配潜在买家群体</td><td>全店商品长尾补量、测款扩量，适合覆盖自然流量拿不到的长尾商机</td></tr>
          </tbody></table></div>
          <p class="step-more-label">直通车（标准推广）与全站推广的核心差异</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>维度</th><th>直通车（标准推广）</th><th>全站推（智能投放）</th></tr></thead><tbody>
            <tr><td>买什么</td><td>明确的搜索意图</td><td>系统判断的潜在需求</td></tr>
            <tr><td>可控性</td><td>高：词、匹配、出价、国、时都能控</td><td>较低：更多交给系统算法</td></tr>
            <tr><td>适合</td><td>测词、精准拿单、控成本、打核心词</td><td>推工厂拿大客、补量、拓新客、放大成熟品</td></tr>
            <tr><td>主要风险</td><td>词选错就没量</td><td>流量结构变模糊，归因变难</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>顺序建议：</strong>新品和新词先用直通车标准推广验证清楚「词对不对、图行不行、承接够不够」，再用全站推放量。反过来做，等于把还没验证的东西交给系统去扩张。</div>
        </div></details>`],
      ["定这次要解决什么", "全站推能解决四件事，但一次只做一件：补量、拓新、放大成熟品、验证国家。目标不同，看的指标也不同。",
        `<details class="step-more"><summary>展开看四种目标</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>目标</th><th>看什么结果</th><th>不该做的</th></tr></thead><tbody>
            <tr><td>补量</td><td>自然和直通车已到瓶颈时的增量询盘</td><td>同时放大直通车，分不清增量来自哪</td></tr>
            <tr><td>拓新</td><td>出现了你词库里没有的搜索词</td><td>一看到陌生词就屏蔽，把拓新做成了收紧</td></tr>
            <tr><td>放大成熟品</td><td>已验证产品的询盘量级提升</td><td>顺手加了新品，变量变多</td></tr>
            <tr><td>验证国家</td><td>某国到底有没有需求</td><td>多国同开，样本被摊薄</td></tr>
          </tbody></table></div>
           <div class="method-note"><strong>「拓新」这一项最容易被做反。</strong>系统扩出来的陌生词，先判断它是「新的采购需求」还是「跑偏的流量」。前者要留、要记进词库；后者才屏蔽。全部一刀切，等于花钱买了个更窄的流量池。</div>
           <figure class="course-figure">
             <div class="figure-head"><span>01</span><div><strong>建计划这条流程长什么样</strong><p>营销中心 → 全站推广 → 新建（预算与计划名已隐去）</p></div></div>
             <img src="assets/lesson-09-p4p-plan-setup.png" alt="全站推建计划的六步流程，当前停在设置出价和预算，含投放目标、出价设置、日均预算、偏好设置、计划名称" loading="lazy">
             <figcaption>左边那六个节点就是全部流程：<strong>推广方式 → 选择商品 → 流量设置 → 设置出价和预算 → 偏好设置 → 计划名称</strong>。这一屏是第四步，三个字段定生死：<strong>「投放目标」</strong>选的是这一轮要什么（全站商机／其他），<strong>「出价设置」</strong>选的是成本口径（目标商机成本／商机价值最大化），<strong>「日均预算」</strong>决定一天最多烧多少。三个一起决定「花多少钱换多少商机」，改任意一个，另外两个的判断就失效——所以一次只动一个。</figcaption>
            </figure>
         </div></details>`],
       ["上线前确认三个基础", "产品范围、落地一致性、追踪口径，这三样在上线前定好，上线后就不要再动——否则数据没法归因。",
        `<details class="step-more"><summary>展开看三个基础怎么定</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>基础</th><th>怎么定</th><th>没定好的后果</th></tr></thead><tbody>
            <tr><td>产品范围</td><td>只放已通过链接检查的重点产品，3—5 个起步；<strong>已在推工厂出商机的品保持稳定，不与标准计划混跑</strong></td><td>把未验证的新品全丢进去，跑出来的结论没有指向</td></tr>
            <tr><td>落地一致性</td><td>按第 08 课六项逐条检查</td><td>买来流量但页面接不住</td></tr>
            <tr><td>追踪口径</td><td>自然、直通车、全站推三条线分开记</td><td>三笔钱混在一起，谁有效说不清</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>追踪口径要在上线前建好表。</strong>每天记一行：花费、曝光、点击、询盘数、新客数。等跑完一周再回头补，基本补不回来。</div>
        </div></details>`],
      ["按四层拆数据", "全站推比直通车多一层要看的东西：流量结构。前三层判断效果，第四层判断「这些流量是不是你本来就会拿到的」。",
        `<details class="step-more"><summary>展开看四层分别说明什么</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>层级</th><th>看什么</th><th>说明什么问题</th></tr></thead><tbody>
            <tr><td>一、曝光</td><td>量级与趋势</td><td>计划有没有真正跑起来、覆盖面够不够</td></tr>
            <tr><td>二、点击</td><td>点击率与点击成本</td><td>素材和流量是否匹配</td></tr>
            <tr><td>三、询盘</td><td>询盘数与有效询盘占比</td><td>承接和报价有没有竞争力</td></tr>
            <tr><td>四、流量结构</td><td>新客占比、搜索词里有多少是你没投过的</td><td>是全新增量，还是在替代自然流量</td></tr>
          </tbody></table></div>
           <div class="method-note"><strong>第四层是全站推独有的判断题。</strong>系统扩量的价值在于「拿到你原本拿不到的人」，如果新客占比很低、搜索词全是你自己已经在投的词，那这笔钱大概率只是把自然流量买了一遍。</div>
           <figure class="course-figure">
             <div class="figure-head"><span>02</span><div><strong>全站推报表的列结构</strong><p>全站推广 → 数据报告 → 详细数据（数字已隐去）</p></div></div>
             <img src="assets/lesson-09-p4p-report.png" alt="全站推广详细数据报表，按日期列出花费、全站商机量、商机成本、L1+商机量、商机转化率、点击量、点击成本等列" loading="lazy">
             <figcaption>这张表按日期一行，列从左到右正好对着上面四层：<strong>花费 → 商机量 → 商机成本 → 商机转化率 → 点击量 → 点击成本</strong>，再往右是 <strong>L1+</strong> 那三列（L1+ 商机量、L1+ 点击量、L1+ 买家点击占比）。<strong>「L1+」这一组是你判断买家质量的地方</strong>——同样的商机成本，L1+ 占比高说明来的是像样的采购商，占比低说明只是有人来问。横着读一行看不出好坏，要连读七天看趋势。</figcaption>
           </figure>
         </div></details>`],
      ["四类问题按树排查", "问题不同，动手的地方完全不同。先定位是哪一类，再决定改什么。",
        `<details class="step-more"><summary>展开看四类问题的排查方向</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">全站推出问题，先归到哪一类</div><ul class="mm-list">
            <li><strong>一、花不出钱</strong><span>查预算是否过低、产品是否太少、落地页是否有问题、账户或计划是否有资格限制</span></li>
            <li><strong>二、花得快但没询盘</strong><span>查搜索词是否跑偏、国家是否不对、落地页是否接不住</span></li>
            <li><strong>三、成本失控</strong><span>多半是结构问题：品类混跑、国家混跑。这时候该拆计划，不是继续调价</span></li>
            <li><strong>四、流量结构变差</strong><span>系统扩量偏离，或自然流量被替代。回第四层判断增量真假</span></li>
          </ul></div>
          <div class="method-note"><strong>最常见的误判：</strong>把「结构问题」当「出价问题」处理。成本失控时反复调出价，两周后成本没降、量也没了——因为根子在计划混了不同形态的产品。</div>
        </div></details>`],
      ["优化动作必须按顺序", "先排除无效，再调结构，最后才调价。顺序反了，就是在错误的结构上做出价优化。",
        `<details class="step-more"><summary>展开看三步顺序</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>顺序</th><th>做什么</th><th>为什么排在这</th></tr></thead><tbody>
            <tr><td>第一步：排除</td><td>屏蔽不相关词、排除不合适国家、暂停承接差的产品</td><td>先把脏流量去掉，后面算出来的成本才是真的</td></tr>
            <tr><td>第二步：调结构</td><td>拆开或合并计划，按形态、意图、国家重新分组</td><td>结构不对，出价再准也跑不出好结果</td></tr>
            <tr><td>第三步：调价与预算</td><td>在干净的结构上微调出价和预算</td><td>这一步才是真正的「优化」，放最后</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>每次只做一步，做完至少观察 3 天，并记录改动时间与内容。</strong>一周内连改五次出价，最后既不知道哪次有效，也复制不了成功经验。</div>
        </div></details>`],
      ["验证是增量还是替代", "这是全站推最容易被忽略的一步：总询盘没涨、只是结构变了，说明你花的钱买的是本来就会来的流量。",
        `<details class="step-more"><summary>展开看三种验证方法</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>方法</th><th>怎么做</th><th>注意</th></tr></thead><tbody>
            <tr><td>分国家对比</td><td>一部分国家开、一部分不开，比总询盘而不是比广告询盘</td><td>要控制其他变量，同期不要大改直通车</td></tr>
            <tr><td>看新客占比</td><td>询盘里有多少是以前没接触过的买家</td><td>新客占比低，增量就有限</td></tr>
            <tr><td>短期关停观察</td><td>停一段时间，看自然询盘是否回升</td><td>会损失曝光，只适合小范围试</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>判断标准：</strong>关掉或不做的那部分，总询盘是否明显下降。下降＝有增量；几乎不变＝在替代。这个判断决定全站推该继续加钱还是收掉。</div>
        </div></details>`],
      ["规则部分每季度核对", "全站推的产品形态和规则调整比较频繁。本课不写死具体规则，只给核对清单。",
        `<details class="step-more"><summary>展开看必须核对的六项</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>核对什么</th><th>为什么要核</th><th>在哪看</th></tr></thead><tbody>
            <tr><td>可选的目标类型</td><td>目标变了，优化方向就变了</td><td>计划创建页</td></tr>
            <tr><td>出价方式与扣费逻辑</td><td>直接影响成本结构</td><td>推广后台规则说明</td></tr>
            <tr><td>可用条件与资格</td><td>决定账户能不能开、能开多大</td><td>后台资格提示与公告</td></tr>
            <tr><td>国家与人群定向能力</td><td>决定能不能按国家做增量测试</td><td>计划设置页</td></tr>
            <tr><td>报表口径与归因方式</td><td>决定你能不能把增量算清楚</td><td>数据报表说明</td></tr>
            <tr><td>系统扩量逻辑</td><td>决定流量会往哪里扩</td><td>官方公告与后台说明</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>核对完把变化写进《规则变更日志》。</strong>发现和课程写的不一致，以账号后台为准，并把差异反馈给课程维护人更新——这一条对第 08、09 两课都适用。</div>
        </div></details>`]
    ],
    decisions: [["系统扩量带来越来越多不精准的词", "扩量方向偏离，语义没收紧", "先收紧否定与屏蔽，再观察扩量范围"],["成本很低但询盘质量差", "买来的是低意向流量", "按客户质量优化，不追最低点击成本"],["少量产品贡献多数询盘", "产品已被验证", "集中预算，扩相近词和国家"],["成本失控、反复调价无效", "结构问题，不是出价问题", "拆计划按形态／国家重新分组"],["总询盘没涨、广告询盘涨了", "在替代自然流量", "按增量验证方法判断，考虑收掉"]],
    checklist: ["计划和直通车的分工已写清，两条线分开记账", "只放 3—5 个通过链接检查的产品", "上线前已建好每日追踪表", "每天或每周固定时间看搜索词", "排查时按「排除→结构→出价」的顺序", "每次优化只有一个变量，并记录时间", "做过一次增量验证，而不只看广告询盘", "本季度已按规则清单核对一次"],
    assignment: "完成一次全站推排查：列出消耗前 20 的词、国家和产品，分别标记保留、观察、降权或停止；再写一句结论——这轮投放带来的是增量，还是在替代自然流量，依据是什么。",
    sources: [{label:"低成本高转化计划（会员）",url:"https://t.zsxq.com/vKr0F"},{label:"开计划后的排查（会员）",url:"https://t.zsxq.com/rIOaz"},{label:"设置与数据排查视频（会员）",url:"https://t.zsxq.com/tTLAZ"},{label:"新手版指南（会员）",url:"https://t.zsxq.com/Y7bd0"},{label:"全站推案例（会员）",url:"https://t.zsxq.com/KBfc3"},{label:"低成本设置细节",url:"https://articles.zsxq.com/id_c4bndqjwmlw6.html"},{label:"每天花费无效果排查（会员）",url:"https://t.zsxq.com/fVugu"}]
  },
  {
    id: 10,
    stage: "增长",
    title: "品牌广告深度运营（问鼎、顶展与聚量）",
    summary: "掌握阿里国际站头部独占资源，从词品绑定、创意操作与审核、智能与手动创意权衡，到地域定向、创意排行榜对标与矩阵承接页管理全流程。",
    duration: "50 分钟",
    updated: "2026-10",
    prerequisites: "第 02 课、第 08 课、第 09 课",
    outcomes: ["掌握顶级展位与问鼎的后台管理路径与已购词推广控制台", "学会操作与修改创意，掌握主体 60%~70%、场景实拍与 4K 视频前 3 秒功能动态展示原则", "理清智能创意与手动创意的优缺点与‘前 7 天测素材、第 2 周切手动’策略", "配置精准地域定向，排除无效边缘偏远国，提升预算有效性", "善用「创意排行榜」对标行业头部优质构图文案，搭建多品矩阵场景承接页"],
    quick: "品牌广告（顶展与问鼎）是获取行业核心大词头部流量的关键阵地。它不是静态投放，必须作为动态资产精细化运营：定期换绑当季旗舰款，监控点击率（CTR）异常并及时迭代素材，利用多品矩阵承接页提升流量转化留存。",
    steps: [
      ["后台管理总览与词品绑定（选品准入原则）", "问鼎和顶展买的是行业超级大词的 PC/App 首位独占。入口位于「营销中心 → 品牌推广 → 顶级展位／品牌关键词」，词品绑定直接决定流量承接效果。",
        `<details class="step-more"><summary>展开看控制台全貌与选词绑品原则</summary><div class="step-more-body">
          <figure class="course-figure">
            <div class="figure-head"><span>01</span><div><strong>品牌广告管理台：顶展与问鼎词品管理全貌</strong><p>营销中心 → 品牌推广 → 品牌关键词 →「已购词推广管理」（关键词、缩略图与真实数据已严格脱敏补遮）</p></div></div>
            <img src="assets/lesson-10-brand-ads-manage.png" alt="阿里国际站品牌推广管理界面，含问鼎/顶展/明星展位切换、数据汇总栏、关键词与创意列表、近30天平均点击率、管理创意与商品设置操作栏" loading="lazy">
            <figcaption>品牌广告控制台的真实页面层级与关键操作入口：<br>
            • <strong>页面标题与六大页签</strong>：页面官方标题为「<strong>品牌关键词</strong>」，一级六个页签依次为：<code>查问鼎/顶展词</code>、<code>问鼎/顶展词竞价</code>、<code>买明星展位词</code>、<code>已购词推广管理</code>（默认进入）、<code>问鼎/明星展位权益</code>、<code>订单记录</code>。<br>
            • <strong>二级渠道与终端切换</strong>：次级支持在「<strong>问鼎／顶展／明星展位</strong>」间自由切换，表格清晰展示每个词的投放终端（PC端／移动端独立排期与生效周期）。<br>
            • <strong>表格十个真实列名</strong>：依次为 <code>投放状态</code>、<code>关键词</code>、<code>投放终端</code>、<code>投放时间</code>、<code>智能创意</code>、<code>创意</code>、<code>创意个数</code>、<code>拓流状态</code>、<code>近30天平均点击率</code>、<code>操作</code>。<br>
            • <strong>四大关键操作动线</strong>：① <strong>「管理创意」</strong>位于每一行右侧「操作」列（按词逐行操作，非全局按钮）；② <strong>「地域定向」</strong>在工具栏（批量设置）与每行操作列（单词设置）均有入口；③ <strong>「智能创意」</strong>是第 5 列的蓝色开关（默认开启），按词控制；④ <strong>「创意排行榜↗」</strong>与<strong>「承接页管理↗」</strong>位于页签行最右侧，带外链图标，属于页面级全局工具。</figcaption>
          </figure>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>调控阶段</th><th>核心操作与考核指标</th><th>执行动作与处置要点</th></tr></thead><tbody>
            <tr><td><strong>投前：选词原则</strong></td><td>行业超级大词、核心大品类词（如 neck massager）</td><td>搜索量极大、全行业买家必搜；绝不拿长尾偏门词做顶展包年</td></tr>
            <tr><td><strong>投前：绑定门面旗舰款</strong></td><td><strong>只绑全店资质最硬、画质最高的门面旗舰款</strong>；绝不绑测款新品或薄利款</td><td>买家搜行业大词第一眼看到的是企业品牌门面。必须配备 4K 高清主图/视频、全套认证徽标、Verified 工厂验真</td></tr>
            <tr><td><strong>投中：动态换绑主推款</strong></td><td>随季度上新与产品迭代，<strong>每 1～2 个月评估一次绑定的主推品</strong></td><td>店铺出了全新升级代次款，在列表中点击「商品设置」及时换绑最新旗舰品，坚决不让淘汰旧款长期霸占黄金首位</td></tr>
          </tbody></table></div>
        </div></details>`],
      ["操作创意与修改创意：入口定位与制作规范", "顶展与问鼎作为高投入的头部独占资源，其点击率（CTR）直接决定流量产出效益。创意不是页面全局按钮，必须在目标词所在行的右侧「操作」列点击「管理创意」进入对应词的二级创意管理页。",
        `<details class="step-more"><summary>展开看创意操作动线与 4 项制作规范</summary><div class="step-more-body">
          <figure class="course-figure">
            <div class="figure-head"><span>02</span><div><strong>已购词列表：定位目标词与「管理创意」入口</strong><p>营销中心 → 品牌推广 → 品牌关键词 →「已购词推广管理」（大红箭头与绿框标注操作动线）</p></div></div>
            <img src="assets/lesson-10-creative-entry.png" alt="阿里国际站品牌推广已购词列表，大红箭头从顶部问鼎指向右下角绿框圈出的管理创意按钮" loading="lazy">
            <figcaption>从列表定位到目标词的创意管理入口（如红箭头与绿框所示）：<br>
            • <strong>第一步：锁定页面层级</strong>：左侧导航选择「品牌推广 → 品牌关键词」，进入「已购词推广管理」页签。<br>
            • <strong>第二步：选择渠道与词类型</strong>：在顶部次级页签选择「问鼎」或「顶展」，在下方选择「关键词」列表。<br>
            • <strong>第三步：定位目标词行并点击进入</strong>：顺着大红箭头，在目标词所在行的最右侧「操作」列第一项，点击绿框圈出的<strong>「管理创意」</strong>，进入该词专属的二级创意管理后台。</figcaption>
          </figure>
          <figure class="course-figure">
            <div class="figure-head"><span>03</span><div><strong>创意管理详情页：素材上传、智能创意与审核状态</strong><p>点击「管理创意」进入的二级详情页（含添加创意、智能创意开关、审核状态与操作栏）</p></div></div>
            <img src="assets/lesson-10-creative-detail.png" alt="品牌广告二级创意管理界面，含添加创意蓝色按钮、人工与系统绑定创意数、智能创意开关、审核通过状态及操作栏" loading="lazy">
            <figcaption>进入二级「创意管理」详情页的核心功能分布（如绿框所示）：<br>
            • <strong>① 添加创意按钮（左侧绿框）</strong>：点击蓝色<strong>「添加创意」</strong>按钮，即可上传 4K 场景图、主图视频，并填写对应副标题提交官方审核。<br>
            • <strong>② 创意配额与智能开关</strong>：顶部清晰展示「人工绑定创意数（如 6/10套）」与「系统绑定创意数（如 7/10套）」，并配备每词独立的「问鼎智能创意」蓝色滑块开关。<br>
            • <strong>③ 审核状态与素材管理（右侧绿框）</strong>：列表中展示已绑定的创意缩略图与「审核通过」状态；最右侧操作栏提供<strong>「复制」</strong>、<strong>「解绑」</strong>、<strong>「暂停」</strong>以及针对单素材的<strong>「地域定向」</strong>功能。</figcaption>
          </figure>
          <div class="mindmap"><div class="mm-root">创意操作与视觉规范 4 步</div><ul class="mm-list">
            <li><strong>一、添加与修改动线（按词操作）</strong><span>在目标已购词右侧「操作」列，点击第二组第一项<strong>「管理创意」</strong> → 点击「新增创意」或已有素材上的「编辑」 → 上传 4K 场景素材与副标题 → 点击「提交审核」（官方机审加人审，24小时内审核完成）</span></li>
            <li><strong>二、构图与主体占比标准</strong><span><strong>主体必须占画面 60%～70%</strong>，居中或偏右；必须是真实场景化实拍（欧美办公/家居/医疗场景），严禁纯白底小图或杂乱牛皮癣标签</span></li>
            <li><strong>三、权威资质与认证背书</strong><span>画面角落清晰压印 2～3 个核心背书徽标（如 CE / FDA / ISO9001 认证标，或 "Verified Supplier / 15-Year Factory"），建立大买家采购信任</span></li>
            <li><strong>四、4K 主图视频前 3 秒功能展示</strong><span>视频时长 15～30 秒，1080P/4K 高清；<strong>前 3 秒必须直奔主题展示产品核心动态功能</strong>（如揉捏机芯动作、气囊起伏），严禁放冗长无实质内容的公司空镜</span></li>
          </ul></div>
        </div></details>`],
      ["智能创意 vs 手动创意：机制对比与配置策略", "列表第 5 列的「智能创意」开关是很多运营的误区。它不是全局总开关，而是每行独立的蓝色滑块（默认开启 ON）。两者底层机制完全不同，必须按周期组合搭配。",
        `<details class="step-more"><summary>展开看智能与手动创意对比表与组合策略</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>对比维度</th><th>智能创意（行内开关设为 ON 开启）</th><th>手动创意（行内开关设为 OFF 关闭）</th></tr></thead><tbody>
            <tr><td><strong>运作机制</strong></td><td>系统算法根据搜索买家的历史偏好、语言与终端，自动抓取绑定商品的详情图与素材，动态拼接生成多套创意轮播展示</td><td>运营人工手动上传精心打磨的高清场景大图、4K 视频、精雕细琢的定制副标题与认证文案，锁定静态精准展示</td></tr>
            <tr><td><strong>核心优点</strong></td><td>省时省力；千人千面；能匹配买家语言和特定偏好</td><td><strong>品牌调性高、信息传达精准</strong>；完全可控，杜绝系统随机拼接次要图片；能清晰传达核心差异化卖点与权威资质</td></tr>
            <tr><td><strong>主要局限</strong></td><td>容易抓取到详情页里的次要零件图，画面缺乏整体设计感与工业质感</td><td>制作成本高，需要美工专门定制多套尺寸；无法自动做多语言自适应</td></tr>
            <tr><td><strong>推荐实操策略</strong></td><td><strong>新词刚上线前 7 天可开启测试</strong>：让系统先跑数据，观察哪些素材片段被点击最多</td><td><strong>第 2 周起切换为手动精细化创意</strong>：由美工根据测试反馈，定制 2～3 套高质量手动创意进行轮播。头部重点广告位不建议长期依赖系统随机拼图</td></tr>
          </tbody></table></div>
        </div></details>`],
      ["地域设置：精准定向主力采购国", "大词每天具有广泛的全球买家检索。必须通过地域定向，将预算与业务员精力集中在可履约、高净值的主力目标国，排除低质无效咨询。",
        `<details class="step-more"><summary>展开看地域设置三大原则</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>地域调控环节</th><th>操作路径与标准</th><th>为什么这么调（底层逻辑）</th></tr></thead><tbody>
            <tr><td><strong>后台操作入口</strong></td><td><strong>支持批量与单词双入口</strong>：① 勾选多个词后点击列表上方工具栏第二个按钮<strong>「地域定向」</strong>；② 在某个词右侧「操作」列点击第三项<strong>「地域定向」</strong></td><td>进入国家/地区选择面板，进行精准的买家国别准入设置</td></tr>
            <tr><td><strong>主力目标国重点曝光</strong></td><td>将欧美核心国（美、德、英、加、澳等）设为优先倾斜或重点投放</td><td>根据第 02 课定位的主力市场，让大词曝光集中在具备真实大单采购需求与支付能力的高净值买家面前</td></tr>
            <tr><td><strong>剔除无履约能力国家</strong></td><td>对于物流无法送达、关税极高、或历史上极少转化的边缘偏远国，<strong>取消勾选（不投放）</strong></td><td>若放任偏远国随意点击，后续会产生大量无法履约或极低客单的无效咨询，摊薄跟进精力</td></tr>
            <tr><td><strong>终端时区差异化</strong></td><td>关注 PC 端与移动端的国家偏好与排期</td><td>欧美大 B 采购习惯在工作时间用 PC 查验资质与证书，东南亚或中东买家多用 App 移动沟通，按终端结合时区投放</td></tr>
          </tbody></table></div>
        </div></details>`],
      ["善用「创意排行榜」：对标行业头部优质创意与文案", "右上角的「创意排行榜↗」展示全行业同类目下点击率（CTR）排名前 10% 的优质同行创意，可作为美工制图与文案提炼的客观参考。",
        `<details class="step-more"><summary>展开看排行榜对标三步法</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">创意排行榜对标 3 步法</div><ul class="mm-list">
            <li><strong>一、入口位置</strong><span>位于「关键词／创意」页签行最右侧，点击<strong>「创意排行榜↗」</strong>（与「承接页管理↗」并排），在新标签页查看全行业同类目下<strong>点击率（CTR）排名前 10% 的顶级同行创意</strong></span></li>
            <li><strong>二、拆解配色与调性</strong><span>观察榜单同行都在用深蓝+白科技风，还是原木+浅灰健康风？对标榜单主流审美，避免自制素材与国际大买家审美脱节</span></li>
            <li><strong>三、提取文案痛点钩子</strong><span>看高 CTR 同行副标题强调的是 "Ready to Ship"（现货）、"Customized Logo 50pcs"（小单定制），还是 "Medical CE Certified"（医疗认证），直接借鉴文案结构并截图作为美工改图需求单</span></li>
          </ul></div>
        </div></details>`],
      ["承接页管理与月度巡检：多品矩阵承接提升留存", "大词买家采购意图相对发散，若直接链接单一 SKU 详情页极易造成流失。建议搭建专属品牌场景承接页，并建立标准化月度巡检机制。",
        `<details class="step-more"><summary>展开看三屏承接法则与月度巡检表</summary><div class="step-more-body">
          <div class="method-note"><strong>大词避免仅关联单一 SKU：</strong>大词（如 <code>neck massager</code>）买家意图相对发散，有关注揉捏功能的，有关注气囊款的，也有关注便携款的。进入单一固定 SKU 发现不符合预期，跳出概率极高。建议点击右上角<strong>「承接页管理」</strong>，搭建专属品牌场景承接页：<br>
          • <strong>第一屏（实力背书）</strong>：Verified 验厂全貌、研发专利数、合作客户品牌墙；<br>
          • <strong>第二屏（产品矩阵一站式选型）</strong>：分列【便携轻巧系列】、【深度揉捏系列】、【商务礼品系列】，方便买家快速定位合适型号；<br>
          • <strong>第三屏（定制与交期承诺）</strong>：支持小单激光打标、样品 3 天发出、验厂报告下载入口。</div>
          <p class="step-more-label">品牌广告日常运营巡检周期表</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>检查周期</th><th>核心检查项目</th><th>行业参考标准</th><th>异常处理动作</th></tr></thead><tbody>
            <tr><td><strong>每周必看</strong></td><td><strong>首位点击率（CTR）监控</strong></td><td>维持在 <strong>3.0% ～ 6.0%</strong> 之间</td><td><strong>CTR &lt; 2.5%</strong>：视觉吸引力不足，立即打开「管理创意」更换新场景大图或新视频</td></tr>
            <tr><td><strong>每月必看</strong></td><td><strong>主推品与升级款换绑</strong></td><td>绑定的是店铺当季最新旗舰款</td><td>出厂了全新升级款，点击「商品设置」<strong>及时换绑最新款</strong>，避免老旧款式占用首位资源</td></tr>
            <tr><td><strong>每季度复盘</strong></td><td><strong>对标「创意排行榜」</strong></td><td>创意水准保持在行业前列</td><td>进排行榜复盘同行最新视觉趋势，重新设计 2 套手动创意做 A/B 测试</td></tr>
            <tr><td><strong>到期前 1 月</strong></td><td><strong>总商机与效益核算</strong></td><td>综合商机成本优于全店均值</td><td>评估是否续费原词，或转战搜索量更大、买家意图更精准的替代大词</td></tr>
          </tbody></table></div>
        </div></details>`]
    ],
    decisions: [["顶展点击率（CTR）持续低于 2.5%", "主图视觉疲劳，或构图缺乏品质感", "打开「创意排行榜」对标行业前 10% 构图，在「管理创意」中更换场景化实拍图与功能演示视频"],["顶展点击量很大但询盘转化极少", "单一 SKU 承接断层，无法满足大词买家的多样需求", "在「承接页管理」中搭建多品矩阵场景承接页，一屏展示多款主流型号与定制选项"],["预算被偏远国家无效点击消耗", "未配置地域定向，流量被低质边缘国稀释", "点击「地域定向」，取消勾选无履约能力或历史低质国家，将曝光聚焦在欧美主力国"],["开着智能创意但画面杂乱", "系统算法抓取了详情页的次要零件图，拉低品牌调性", "关闭对应行「智能创意」开关，由美工制作 2～3 套带权威认证的高清手动创意轮播"],["店铺出厂了全新升级代次款", "旧款继续霸占首位造成黄金广告位资产贬值", "在已购词列表点击「商品设置」，立即换绑最新旗舰款"]],
    checklist: ["清楚品牌推广后台入口（营销中心 → 品牌推广 → 顶级展位/品牌关键词）", "掌握「管理创意」添加与修改流程，视觉符合主体 60%~70% 与场景实拍规范", "主图视频直奔主题展示核心动态功能", "掌握智能创意与手动创意优劣，执行‘前 7 天测试、第 2 周切手动’策略", "完成「地域定向」配置，排除无效偏远国，聚焦欧美主力大区", "能通过「创意排行榜」拆解同行 Top 创意并输出美工需求单", "配置三屏多品矩阵「承接页」，每周监控 CTR（保持在 3%~6% 正常区间）"],
    assignment: "查看店铺当前是否有在投或已购的品牌大词（若无，使用课程图 01 控制台界面），对照本课规范完成一次全面审查：① 检查当前绑定的商品是否为全店最新代次旗舰款；② 检查主图与视频是否符合 4K 场景化与前 3 秒动态功能展示原则；③ 检查「智能创意」开关状态，制定手动创意轮播方案；④ 在「地域定向」中列出需重点倾斜的 5 个主力国与需排除的 3 个非目标国。",
    sources: [{label:"品牌推广与顶展运营指南",url:"https://articles.zsxq.com/id_c4bndqjwmlw6.html"}]
  },
  {
    id: 11,
    stage: "管理",
    title: "数据诊断与链接优化",
    summary: "从店铺总览下钻到国家、渠道、产品和搜索词，把报表转化成下一步动作；给一张症状速查表，遇到问题直接定位到该看哪一课。",
    duration: "75 分钟",
    updated: "2026-10",
    prerequisites: "第 01、05、07—10 课",
    outcomes: ["统一口径后再做判断，不出「拿 7 天比 30 天」的错", "从结果倒推，定位问题卡在哪一层", "分清是店铺级问题还是单链接问题", "用速查表把症状直接映射到动作和对应课程"],
    quick: "数据分析不等于罗列数字。先确认口径，再从成交往回倒推：成交 → 询盘 → 点击 → 曝光。因为下游的问题经常伪装成上游的问题——成交差，你会以为是流量少，其实可能是报价贵。每个结论都必须落到一个动作、一个负责人、一个复查日期。",
    steps: [
      ["先固定口径，再谈结论", "三件事没定就别开始看数：时间范围、数据来源、对比基准。这三样不一致，算出来的结论全是假的。",
        `<details class="step-more"><summary>展开看三个口径项怎么定</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>口径项</th><th>必须怎么定</th><th>定错会怎样</th></tr></thead><tbody>
            <tr><td>时间范围</td><td>同一周期、同一天数；环比就都是 30 天，比就都是 30 天</td><td>拿 7 天比 30 天，得出「流量暴跌」的假结论</td></tr>
            <tr><td>数据来源</td><td>同口径同报表，别把不同模块的数字混着算</td><td>访客数和询盘数来自不同口径，算出来的转化率没意义</td></tr>
            <tr><td>对比基准</td><td>环比、同比，或同类目中位数，三选一固定用</td><td>每次换基准，结论跟着基准变</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>还有一个常被忽略的：</strong>后台数据按美西时间统计。跨月做对比时，注意月初月末的时区差，别把「差半天」当成趋势。</div>
        </div></details>`],
      ["从结果往回倒推", "先看成交，再看询盘，再看点击，最后看曝光。顺序不能正着来——正着看，你会一直在优化最上游、但可能最没问题的那一层。",
        `<details class="step-more"><summary>展开看四层各指向什么</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>层</th><th>看什么指标</th><th>异常时先怀疑什么</th></tr></thead><tbody>
            <tr><td>成交</td><td>成交单数、成交买家数、客单价</td><td>报价、付款条款、跟进节奏——销售环节，不是链接问题</td></tr>
            <tr><td>询盘</td><td>询盘人数、TM 咨询人数、有效询盘占比</td><td>详情承接、价格带、MOQ、交期</td></tr>
            <tr><td>点击</td><td>点击率、点击成本</td><td>主图、标题词序、价格展示</td></tr>
            <tr><td>曝光</td><td>曝光量、覆盖词数</td><td>收录、类目、词太小、账户资格</td></tr>
          </tbody></table></div>
           <div class="method-note"><strong>为什么倒着看：</strong>成交差的时候，最直觉的反应是「流量不够」，于是加预算。但如果卡在报价，加预算只会让更多人来问、然后同样谈不成——问题没解决，钱花了。</div>
           <figure class="course-figure">
             <div class="figure-head"><span>01</span><div><strong>数据概览的趋势区与口径切换</strong><p>数据参谋 → 数据概览（纵轴与数值已隐去）</p></div></div>
             <img src="assets/lesson-10-data-overview.png" alt="数据参谋数据概览的趋势分析区，右上有全部、询盘人数、TM咨询人数三个口径切换，图例为我的效果、行业平均、同行优秀" loading="lazy">
             <figcaption>右上三个圆点是<strong>口径切换</strong>：全部／询盘人数／TM咨询人数——同一段时间换口径，曲线的形状就变了，所以对比之前先确认对方看的是哪个口径。图例里<strong>「我的效果／行业平均／同行优秀」</strong>三条线是这页最有用的东西：只看自己的曲线在涨没用，要跟行业平均比。</figcaption>
           </figure>
           <div class="method-note"><strong>这里有个坑，先讲清楚：数据概览默认看不到曝光、点击和访客。</strong>默认「运营常用」模式下，指标行给的是<strong>商机人数、全店商机量、TM咨询人数、询盘人数、信保交易订单个数、信保交易金额</strong>——全是结果层，没有曝光、没有点击、没有访客。想看完整的「曝光→点击→访客→询盘→商机」漏斗，要先把这一页的视图和模式换掉：筛选行右边有<strong>「图形／三列表」</strong>切换和<strong>「运营常用」</strong>模式下拉，切到三列表能一次看到这一页到底提供了哪些指标，缺哪一项再从模式里换。<strong>别去这一页找「自定义列」</strong>——那个按钮在营销中心的推广页（第 08 课图 01 右上角就有），这两处不是同一个东西。</div>
         </div></details>`],
      ["分清店铺级和单链接问题", "同一个症状，可能是整店的问题，也可能只是一条链接的问题。判断错了，就会用整店改版去解决一个链接的小毛病。",
        `<details class="step-more"><summary>展开看怎么区分</summary><div class="step-more-body">
          <div class="mindmap"><div class="mm-root">先判断是铺开的问题，还是局部的问题</div><ul class="mm-list">
            <li><strong>多数链接点击率都低</strong><span>店铺级问题：类目结构、价格带、整体视觉风格。改一两条链接没用</span></li>
            <li><strong>只有一两条低</strong><span>单链接问题：词、图、详情。别动全店</span></li>
            <li><strong>新链接都不起量，老链接还行</strong><span>冷启动流程问题，回第 07 课看两段式有没有做对</span></li>
            <li><strong>询盘集中在少数产品</strong><span>正常现象。要看的是这少数产品有没有被喂够资源，而不是强行拉平</span></li>
          </ul></div>
           <div class="method-note"><strong>一个快速算法：</strong>把询盘按产品排序，看前 20% 的产品贡献了多少询盘。如果超过 70%，属正常集中；如果不到 40%，说明没有主推，资源撒得太散。</div>
           <figure class="course-figure">
             <div class="figure-head"><span>02</span><div><strong>产品分析列表：判断「是哪一个链接」的地方</strong><p>数据参谋 → 产品参谋 → 产品分析（产品名与数值已隐去）</p></div></div>
             <img src="assets/lesson-10-product-analysis.png" alt="产品分析列表，含产品、访问人数、询盘人数、TM咨询人数、全店曝光次数、全店点击次数、产品360、操作八列，行末有分析与诊断按钮" loading="lazy">
             <figcaption><strong>一行一个产品，八列一次看完</strong>：产品、访问人数、询盘人数、TM 咨询人数、全店曝光次数、全店点击次数、产品360、操作。要不要拆到单链接，就看这张表——如果<a href="#lesson-10">第 3 步</a>说的「多数链接点击率都低」成立，这里逐行都低；如果只有一两行低，问题就锁在那两条。行末两个按钮别混：<strong>「分析」进的是产品360 抽屉</strong>（词、访客地域、竞品对标都在里面），<strong>「诊断」是平台给的体检结论</strong>，两者要看的是不同东西。</figcaption>
           </figure>
         </div></details>`],
      ["单链接诊断只看三件事", "词对不对、图行不行、页接不接得住。三个问题对应三个数据源，不要混着看。",
        `<details class="step-more"><summary>展开看三个问题怎么查</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>问题</th><th>看哪里</th><th>不合格的表现</th></tr></thead><tbody>
            <tr><td>词对不对</td><td>产品360「关键词分析」页签、买家进店来源词（来搜／脚本导出）</td><td>词有曝光但商机跑到别的产品上</td></tr>
            <tr><td>图行不行</td><td>点击率与同类目中位数对比</td><td>曝光正常、点击明显偏低</td></tr>
            <tr><td>页接不接得住</td><td>访客停留、询盘率、询盘里反复问的问题</td><td>停留短、询盘少的理由集中在价格和 MOQ</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>不要三个一起改。</strong>词、图、页同时动，跑出来的结果无法归因，下次遇到同样问题还是不知道该怎么修。</div>
        </div></details>`],
      ["症状速查表", "遇到问题别从第一课翻起。按症状查这张表，直接定位到该看哪里、对应哪一课、第一个动作是什么。",
        `<details class="step-more"><summary>展开看十种常见症状怎么查</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>症状</th><th>先看哪里</th><th>对应课程</th><th>第一个动作</th></tr></thead><tbody>
            <tr><td>完全没有曝光</td><td>收录状态、类目、词的大小</td><td>第 05、07 课</td><td>查类目与收录，别加预算</td></tr>
            <tr><td>有曝光没点击</td><td>首图、标题词序、价格展示</td><td>第 06 课</td><td>先换首图，词不动</td></tr>
            <tr><td>有点击没询盘</td><td>详情承接、MOQ、交期</td><td>第 05 课</td><td>补页面，不是加投放</td></tr>
            <tr><td>有询盘没成交</td><td>报价、付款条款、跟进节奏</td><td>第 11 课</td><td>转销售环节处理</td></tr>
            <tr><td>访客国家不对</td><td>国家分布、投放国家、词的语言</td><td>第 02、04 课</td><td>重查主推国家与实际分布</td></tr>
            <tr><td>询盘集中在非主推国</td><td>四象限结论是否过期</td><td>第 02 课</td><td>重跑一次矩阵，别硬扭</td></tr>
            <tr><td>点击成本高、毛利撑不住</td><td>词结构、计划粒度</td><td>第 08、09 课</td><td>拆计划，不是压价</td></tr>
            <tr><td>总询盘没涨但广告询盘涨</td><td>新客占比、自然流量变化</td><td>第 09 课</td><td>做增量验证</td></tr>
            <tr><td>老客多、新客少</td><td>词库覆盖、拓新计划</td><td>第 04、09 课</td><td>补新词，别只维护老客</td></tr>
            <tr><td>单链接好、整店差</td><td>产品集中度、资源分配</td><td>本课第 03 步</td><td>判断该集中还是该补链路</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>这张表的用法：</strong>先对症状，再看「先看哪里」，最后确认「第一个动作」。三列对不上，说明症状描述得还不够具体——回去把数据拆细一层再查。</div>
        </div></details>`],
      ["三个率决定全链路效率", "点击率、询盘率、成交率，三段效率叠起来决定从曝光到成交的整体结果。任何一环砍半，整体就砍半。注意这三率不是严格的乘法公式——点进来的人会去重成访客，所以它用来比趋势，不要拿去精算。",
        `<details class="step-more"><summary>展开看三率怎么算、怎么比</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>指标</th><th>怎么算</th><th>异常时先做什么</th></tr></thead><tbody>
            <tr><td>点击率</td><td>点击 ÷ 曝光</td><td>先换首图；词的问题放第二步查</td></tr>
            <tr><td>询盘率</td><td>询盘人数 ÷ 访客数</td><td>查详情承接、价格带、MOQ</td></tr>
            <tr><td>成交率</td><td>成交单数 ÷ 询盘数</td><td>查报价、条款、跟进时效</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>先修最短的那块板。</strong>三率里最差的那一项，往往就是当前投入产出比最高的一处改动。都差不多的时候，按「改动成本最低」的先做。</div>
          <div class="method-note"><strong>算比例要用同一批人的数：</strong>询盘率的分母是访客数，不是曝光数；成交率的分母是询盘数，不是访客数。分母用错，算出来的「转化率」会好看得离谱。</div>
          <div class="method-note"><strong>为什么说「三率相乘」只是近似：</strong>点击是次数，访客是去重后的人数——一个人点两次，点击算两次、访客只算一个。所以三率连乘算出来的数不等于「成交 ÷ 曝光」。它的正确用法是比趋势：这个月比上个月哪一段效率降了，而不是拿去做精确预测。</div>
        </div></details>`],
      ["按影响和可验证性排优先级", "问题清单出来之后，不是按严重程度排，是按「改完之后能不能在两周内看出结果」排。",
        `<details class="step-more"><summary>展开看怎么排</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>类型</th><th>特征</th><th>处理顺序</th></tr></thead><tbody>
            <tr><td>高影响 + 可验证</td><td>涉及主要流量或金额，两周能看出变化</td><td>先做</td></tr>
            <tr><td>高影响 + 难验证</td><td>涉及面大，但见效周期长（如类目重构）</td><td>拆分验证，先做一小块</td></tr>
            <tr><td>低影响 + 可验证</td><td>改起来快，但影响有限</td><td>顺手做，不占主线</td></tr>
            <tr><td>低影响 + 难验证</td><td>既费劲又看不出结果</td><td>写进「暂缓」，不做</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>每个问题只配一个首要动作。</strong>一个问题的行动清单列了五条，通常等于一条都不会被执行。先做那条最可能改变结果的，跑完再排下一条。</div>
        </div></details>`],
      ["复查机制与口径核对", "诊断的产出不是报告，是一张带负责人和复查日期的清单。没有复查，就等于没诊断。",
        `<details class="step-more"><summary>展开看清单必须有哪五列</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>列</th><th>要求</th></tr></thead><tbody>
            <tr><td>问题描述</td><td>用数据说话，不写「效果不好」</td></tr>
            <tr><td>证据</td><td>哪张报表、哪个时间段、什么数值</td></tr>
            <tr><td>首要动作</td><td>只写一条，写到能直接执行</td></tr>
            <tr><td>负责人与截止日</td><td>具体到人和日期</td></tr>
            <tr><td>复查指标与日期</td><td>两周后看哪个数、达到多少算有效</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>指标定义也要季度核对。</strong>后台对「访客」「询盘人数」「商机」的口径可能调整，口径一变，历史对比就失效。发现口径变化，在报表里标注断点，不要跨断点做同比。</div>
        </div></details>`]
    ],
    decisions: [["自然流量占比过低", "过度依赖广告，或自然覆盖弱", "补关键词与内容质量，逐步验证自然流量"],["国家偏离主推市场", "词、人群或系统扩量偏差", "调整词、国家和素材本地化"],["低转化产品长期消耗", "承接或产品竞争力不足", "修正后设观察期，仍无改善则停止投入"],["三率里询盘率最差", "承接和价格带的问题，不是流量问题", "优先改详情与报价策略"],["问题清单列了十条以上", "没有做优先级取舍", "只保留能两周内验证的三条"]],
    checklist: ["时间范围、数据来源、对比基准三项已固定", "按成交→询盘→点击→曝光的顺序倒推过", "判断过是店铺级问题还是单链接问题", "用速查表把症状映射到了具体动作", "三率分母没有用错", "每个问题只有一个首要动作", "清单包含负责人、截止日、复查指标", "本季度已核对一次后台指标口径"],
    assignment: "用最近一个完整月做一次店铺诊断：先固定口径，按四层倒推定位，再用速查表找出 3 个最高优先级问题，每个问题只安排一个首要动作，写清负责人、截止日和两周后的复查指标。",
    sources: [{label:"数据分析课程（会员）",url:"https://t.zsxq.com/X6Q73"},{label:"低转化产品排查（会员）",url:"https://t.zsxq.com/QxtRl"},{label:"贸易记录下的链接分析（会员）",url:"https://t.zsxq.com/kqWZj"},{label:"汽车方向盘案例（会员）",url:"https://t.zsxq.com/QbIFO"}]
  },
  {
    id: 12,
    stage: "转化",
    title: "运营看盘、客户质检与业务协同",
    summary: "从运营视角看清真实询盘与买家国别，四步过滤垃圾线索，建立 A/B/C 三档客户质量评估，并与业务建立低阻力的对账沟通机制。",
    duration: "45 分钟",
    updated: "2026-10",
    prerequisites: "第 01—02 课、第 11 课",
    outcomes: ["掌握后台商机列表与全屏详情的查盘路径，精准定位买家国家与真实诉求", "用四步过滤法剔除虚假账号、泛函群发与钓鱼探价等垃圾线索", "建立运营级 A/B/C 三档客户分级模型，反向追查高产词并给低质流量加否", "掌握「日常异步工单 + 每周 30 分钟对账会」协同机制，现场删词闭环"],
    quick: "运营的核心职责不是直接谈单，而是看懂线索质量、过滤垃圾干扰、诊断流量有效性，并与业务团队建立低摩擦的高效反馈闭环。不以主观感觉扯皮，拿真实后台数据说话。",
    steps: [
      ["查盘查国：精准定位询盘内容与买家国家", "运营查商机不只看数字，必须穿透到具体买家的原始需求和画像。通过商机列表与全屏详情，精准核查国家与诉求。",
        `<details class="step-more"><summary>展开看后台真实路径与核查四要素</summary><div class="step-more-body">
          <p class="step-more-label">后台准确查阅路径</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>步骤</th><th>路径</th><th>操作与注意点</th></tr></thead><tbody>
            <tr><td>① 列表入口</td><td>商机沟通 → 询价单管理 → 所有询价单</td><td>官方页面标题为「<strong>商机列表</strong>」，单位叫「<strong>询价单</strong>」。状态只有 6 个（全部、待回复、新询价、已下单、待支付、待确认），<strong>没有「待跟进」状态</strong>；右上角为「未读商机」复选框。</td></tr>
            <tr><td>② 详情入口</td><td>列表右侧操作栏点击「查看详情」</td><td>系统会在新浏览器标签页打开<strong>全屏独立商机工作台</strong>（脱离左侧菜单）。</td></tr>
          </tbody></table></div>
          <figure class="course-figure">
            <div class="figure-head"><span>01</span><div><strong>商机列表长什么样</strong><p>商机沟通 → 询价单管理 → 所有询价单（买家名与内容已隐去）</p></div></div>
            <img src="assets/lesson-11-inquiry-list.png" alt="商机沟通下的商机列表，左侧为询价单管理菜单，中间为状态页签与询价单列表，右侧为状态与操作" loading="lazy">
            <figcaption>上面那排就是全部六个状态页签，<strong>找「待跟进」会找不到</strong>。左侧竖排是这一块的菜单：询价单管理、接待设置、服务数据看板、消息管理、常用功能（起草意向合同、RFQ 推荐、所有订单都在这里）。列表右侧只有两个动作：<strong>「立即回复」</strong>和<strong>「查看详情」</strong>——运营要核实买家背景，必须点击「查看详情」进入全屏页。</figcaption>
          </figure>
          <figure class="course-figure">
            <div class="figure-head"><span>02</span><div><strong>商机详情与买家特征全屏页</strong><p>点击列表「查看详情」后新开的全屏工作台（买家隐私信息已遮蔽）</p></div></div>
            <img src="assets/lesson-11-inquiry-detail.png" alt="商机详情全屏页，含左侧咨询产品与对话框，右侧买家信息、买家特征与最近采购行业" loading="lazy">
            <figcaption>全屏独立工作台核实四要素：<strong>① 左侧主区</strong>看买家咨询的具体产品链接与第一段原始留言，确认是主推款还是偶发款，看诉求是具体还是泛泛而谈；<strong>② 右侧上半截</strong>核实买家所属<strong>国家与地区（国旗与英文名）</strong>，对照目标国家矩阵看是否偏离；同时查看公司名、企业邮箱后缀、注册年限（老号还是白号）及买家等级标签；<strong>③ 右侧下半截</strong>查看「客户行为数据」（最近搜索词、最近采购行业、历史交易笔数与金额），快速印证其是否属于本店目标行业客群。</figcaption>
          </figure>
          <div class="method-note"><strong>看盘原则：</strong>运营看商机不是为了去回复，而是为了<strong>核验流量匹配度</strong>。如果连续来的商机所属国家、采购行业都与店铺主攻方向不符，说明前端词库或推广人群设置已产生偏差，必须及时纠偏。</div>
        </div></details>`],
      ["真伪甄别：真假客户与垃圾线索四步过滤", "运营在向业务同步线索或分析数据前，先要做第一道脱水，避免把垃圾或欺诈流量当作有效商机。",
        `<details class="step-more"><summary>展开看真假客户四步过滤对照表</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>检查维度</th><th>真实采购客户特征</th><th>垃圾／虚假／钓鱼线索特征</th></tr></thead><tbody>
            <tr><td>1. 留言内容与诉求</td><td>提及具体产品参数、功能要求、采购数量（如 200/500 件）、交期、包装或认证要求（CE/UL/RoHS 等）。</td><td>纯系统模板通用打招呼（如 "Dear, send me catalog/price" 无具体型号）；或发送外部钓鱼链接、诱导下载未知压缩包。</td></tr>
            <tr><td>2. 账号注册痕迹</td><td>注册时间较长（半月以上至数年），有历史采购浏览、咨询或订单交易痕迹。</td><td>当天刚注册的纯白号、无历史采购痕迹、无公司名、无任何标签，且短时间内跨多品类到处群发。</td></tr>
            <tr><td>3. 邮箱与企业背景</td><td>使用企业独立域名邮箱（如 <code>@company.com</code> 可通过官网溯源真实实体）；个人 Gmail/Yahoo/Outlook 若诉求具体也属正常（多为电商小 B）。</td><td>带有欺诈嫌疑的临时随机匿名邮箱；或冒充 Alibaba 官方、银行风控人员发送催费、账户冻结警示。</td></tr>
            <tr><td>4. 商业动机判断</td><td>围绕买卖双方合作展开，询问付款方式、打样政策、起订量。</td><td>国内 IP 跳板、同行探价（只反复追问阶梯最低底价/模具费，但绝不透露自身公司信息与采购用途）。</td></tr>
          </tbody></table></div>
          <div class="method-note"><strong>脱水纪律：</strong>遇到钓鱼链接、虚假官方通知或纯同行套价，直接在后台标记垃圾并屏蔽，<strong>绝不能计入运营有效商机统计</strong>，否则会得出虚假的转化率判断。</div>
        </div></details>`],
      ["客户质量分级：A/B/C 三档模型与运营溯源", "不需要运营像资深业务员那样做深层资信背调，运营根据后台特征建立轻量分级，并执行对应的运营端动作。",
        `<details class="step-more"><summary>展开看三档分级标准与 RFQ 席位判断</summary><div class="step-more-body">
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>客户分级</th><th>核心特征</th><th>运营端首要动作</th></tr></thead><tbody>
            <tr><td>A 级：高潜核心买家</td><td>欧美/重点主推国；数量明确且符合批量 MOQ（如 500~2000 台）；企业域名邮箱或 L2+ 标签；要求定制或认证。</td><td><strong>反查来源词与计划：</strong>查明其是通过哪个关键词、哪条计划进店，把该词记入「高产金词库」，作为后续加预算的凭据。</td></tr>
            <tr><td>B 级：潜力中小买家</td><td>海外电商卖家（Amazon/Shopify 等）或区域小批发商；多从打样（1~5 台）或小单试水（20~100 台）开始，在意交期与现货。</td><td><strong>检查页面承接力：</strong>若此类买家占比高，运营应在详情页和主图中强化「现货直发、支持小批量定制包装」的承接表达。</td></tr>
            <tr><td>C 级：散客／无效流量</td><td>个人自用买 1 件；跨类目闲聊；预算极低；或处于无法履约的偏远边缘国家。</td><td><strong>直通车现场加否：</strong>连续多天涌入 C 类散客，说明词库混入了「零售词、维修词、免费词」，立即在直通车后台<strong>添加否定词</strong>。</td></tr>
          </tbody></table></div>
          <figure class="course-figure">
            <div class="figure-head"><span>03</span><div><strong>RFQ 推荐商机卡片结构与席位时效</strong><p>商机沟通 → 常用功能 →「RFQ 推荐」卡片流（买家隐私信息已脱敏）</p></div></div>
            <img src="assets/lesson-11-rfq-market.png" alt="阿里国际站后台 RFQ 推荐单卡，展示金牌商机徽标、求购标题、采购量 50 Pieces、发布地点丹麦、剩余 3 个报价席位与发布时效" loading="lazy">
            <figcaption>入口在后台<strong>「商机沟通 → 常用功能 → RFQ 推荐」</strong>。单张 RFQ 卡片包含核心判读维度：① <strong>商机标签</strong>（如金牌商机、优选商机徽标）；② <strong>求购标题</strong>（明确品类与规格，如无线遥控真空拔罐器带内置电池）；③ <strong>采购量与发布地点</strong>（如 <code>采购量：50 Piece/Pieces</code>，<code>发布地点：Denmark</code> 与国旗）；④ <strong>剩余席位与时效</strong>（如<code>剩余3个报价席位</code>、<code>发布日期：11 小时前</code>）。<strong>注意：RFQ 报价席位通常有限（常见为 5—10 个），高价值金牌商机席位消耗极快；只要席位大于 0 且与自身品类匹配，务必第一时间组织定制化精准报价，抢占买家前两条有效触达窗口。</strong></figcaption>
          </figure>
          <div class="method-note"><strong>分级的本质是资源分配。</strong>把 A 类客户交给资深业务深度跟进，B 类标准化快打，C 类模板应付或运营端加否，团队的时间才不会被稀释。</div>
        </div></details>`],
      ["运业协同机制：去找业务开会还是啥？", "运营找业务不是天天开会扯皮，而是建立「日常异步预警 + 每周 30 分钟对账会」的高效协同机制。",
        `<details class="step-more"><summary>展开看运业协同机制、信保表单与导出入口</summary><div class="step-more-body">
          <p class="step-more-label">1. 日常不用开会：用「高潜预警」建立信任</p>
          <div class="mindmap"><div class="mm-root">日常异步工单机制</div><ul class="mm-list">
            <li><strong>运营主动预警</strong><span>巡店发现 A 级客户（大国家、大数量、带定制），直接截图私信负责业务员，附上买家官网背景，提示重点攻坚</span></li>
            <li><strong>业务轻量标记</strong><span>业务处理完在共享台账轻量勾选状态：<code>[已回复/已报价] / [寄样推进中] / [已死掉+原因]</code>，杜绝长篇汇报负担</span></li>
          </ul></div>
          <p class="step-more-label">2. 每周固定 30 分钟「运业协同复盘会」（只看三件事，现场拿结论）</p>
          <div class="source-table-wrap"><table class="decision-table compare-table"><thead><tr><th>议题</th><th>核心内容</th><th>现场输出动作（谁闭环）</th></tr></thead><tbody>
            <tr><td>① 对高潜客户进展</td><td>盘点上周 A 类客户卡在什么环节（价格偏高？交期太长？还是同行有现货？）。</td><td><strong>运营端动作：</strong>根据真实丢单反馈，校准下一轮产品定价策略或详情页卖点。</td></tr>
            <tr><td>② 现场抓“鬼”归因垃圾词</td><td>请业务挑出上周他们觉得最差、最水、最离谱的 3~5 条询盘。运营现场反查来源词。</td><td><strong>运营端动作（当场闭环）：</strong>若是引流词偏差，<strong>运营当场在直通车后台删词或加否定词</strong>。业务看到运营当场解决问题，配合度立刻提升。</td></tr>
            <tr><td>③ 同步一线买家新痛点</td><td>业务同步最近买家频繁问到的功能细节、包装或新认证（如 Type-C 快充、特定检测证书）。</td><td><strong>运营端动作：</strong>作为下周上新发品、标题扩词与素材优化的核心依据。</td></tr>
          </tbody></table></div>
          <figure class="course-figure">
            <div class="figure-head"><span>04</span><div><strong>起草信用保障订单表单全貌</strong><p>交易管理总览 →「起草信用保障订单」表单全貌（字段结构展示）</p></div></div>
            <img src="assets/lesson-11-trade-assurance-order.png" alt="阿里国际站起草信用保障订单全貌，包含交易设置、买家信息、产品信息、运输信息、出口方式、交易保障服务与支付条款七大区块" loading="lazy">
            <figcaption>入口在后台 <code>biz.alibaba.com</code> 交易管理总览，点击<strong>「起草信用保障订单」</strong>。整张表单严格分为七大区块：<strong>① 交易设置</strong>（结算方式汇款/信用卡/信用证，币种选 USD 或 CNY）；<strong>② 买家信息</strong>（买家邮箱、姓名与收货地址）；<strong>③ 产品信息</strong>（点击添加产品，录入数量、单价与规格）；<strong>④ 运输信息</strong>（拆为三项：运输方式、发货日期、贸易术语 FOB／CIF／EXW 等）；<strong>⑤ 出口方式</strong>（自营出口／便捷发货等）；<strong>⑥ 交易保障服务</strong>（信保额度与保障范围）；<strong>⑦ 支付条款</strong>（总价、预付款与尾款比例）。<strong>起草前必须对照聊天记录逐字核实产品型号、总价与贸易术语</strong>，确认无误再提交，严防口头承诺与线上合同不一致导致的违约纠纷。</figcaption>
          </figure>
          <figure class="course-figure">
            <div class="figure-head"><span>05</span><div><strong>店铺数据的导出入口</strong><p>数据参谋 → 数据总览（数值已隐去）</p></div></div>
            <img src="assets/lesson-12-report-export.png" alt="数据参谋数据总览顶部，含实时数据与日周月数据切换、日期与全店数据筛选、运营常用模式、图形与三列表切换、下载按钮" loading="lazy">
            <figcaption>这一条筛选栏上有三样东西要认：<strong>「实时数据／日周月数据」</strong>决定看的是当下还是结算后的数、<strong>「运营常用」</strong>是模式、<strong>「下载」</strong>才是导出。先切模式再下载，否则导出来的还是默认那几列。</figcaption>
          </figure>
          <div class="method-note"><strong>这五个数去哪取，两个入口别混。</strong><br><strong>① 店铺经营数据：</strong>数据参谋 → 数据概览 → 右上「下载」，导出的是店铺整体数据；注意默认模式下没有访客、曝光、点击，先在顶部切模式或加列，下载出来才齐。<br><strong>② 广告报告：</strong>营销中心 → 直通车报告 → 右上「导出」，导的是投放数据（分全站推广／标准推广两组）。<br>两条线的口径不同，别把广告报告里的询盘和店铺总询盘直接相加，也别用同一张表算全店转化率——在取数这一步就要守住口径红线。</div>
        </div></details>`]
    ],
    decisions: [
      ["询盘很多但业务反馈全是垃圾", "引流词太泛，引入了个人自用或零售客群", "让业务挑出 3 条最水询盘，运营现场查来源词并在直通车加否定词"],
      ["买家国家偏离目标市场", "投放地域定向或系统智能扩量跑偏", "核查买家参谋国家分布，收缩直通车地域定向至重点主推国"],
      ["高潜买家报价后集体沉默", "价格带或起订量门槛卡壳", "收集业务丢单反馈（贵多少、和谁比），反推详情页与阶梯定价策略"],
      ["业务抱怨运营不给好客户", "缺少统一客观的分级标准", "落地 A/B/C 三档分级台账，A 类由资深业务优先攻坚"],
      ["运业例会总是沦为互相甩锅", "缺少数据凭证与闭环机制", "每次例会只对三件事：高潜进展、垃圾词现场加否、买家新诉求"]
    ],
    checklist: [
      "掌握商机列表与全屏详情两级后台路径",
      "能通过国旗与买家档案核对目标市场匹配度",
      "掌握真假客户四步过滤，能识别钓鱼与同行探价",
      "清晰区分 A/B/C 三档客户并执行对应的运营动作",
      "每周与业务固定 30 分钟对账会，现场完成垃圾词加否",
      "掌握信保订单七大区块一致性与数据导出双入口"
    ],
    assignment: "选出最近 1 周店铺收到的 5 条真实询盘，在全屏商机页核对其买家国家、注册年限与原始诉求；用四步过滤法做一次真伪脱水，并按 A/B/C 评定等级。针对评为 C 级的线索，反查其进店来源词，在直通车后台完成一次否定词添加操作。",
    sources: [
      {label:"运营每天的工作（会员）",url:"https://t.zsxq.com/PlMGd"},
      {label:"平台诊断报告（会员）",url:"https://t.zsxq.com/elo8T"},
      {label:"月数据报告（会员）",url:"https://t.zsxq.com/mns1l"}
    ]
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
      ["产品国家矩阵", "按产品和国家的组合打分，排出核心、验证、暂缓三类市场。", "downloads/07-产品国家矩阵.csv", "CSV 模板"],
      ["访客来源词台账", "把访客明细按词和国家汇总，标出有商机词与处理动作。", "downloads/08-访客来源词台账.csv", "CSV 模板"],
      ["RFQ高转化报价策略表", "包含五大行业高回复率RFQ报价实战案例与切入角度。", "downloads/09-RFQ高转化报价策略表.csv", "业务模板"],
      ["外贸形式发票PI标准要素清单", "防漏洞防钓鱼的10大核心要素与法律声明对照表。", "downloads/10-外贸形式发票PI标准要素清单.csv", "单证模板"],
      ["业务员样品跟进闭环台账", "第0/3/7天样品追踪看板与客户反馈转化台账。", "downloads/11-业务员样品跟进闭环台账.csv", "业务模板"]
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

let activeSystem = localStorage.getItem("jamooz_active_system") || "ops"; // "ops" | "sales"

const salesUsers = [
  { account: "苏菲菲", name: "苏菲菲", title: "负责人 / 超级管理员", role: "admin" },
  { account: "杨艳琼", name: "杨艳琼", title: "运营助理", role: "ops" },
  { account: "孙利君", name: "孙利君", title: "运营助理", role: "ops" },
  { account: "王舒奇", name: "王舒奇", title: "运营助理", role: "ops" },
  { account: "刘静", name: "刘静", title: "外贸业务员", role: "sales" },
  { account: "黄秀菊", name: "黄秀菊", title: "外贸业务员", role: "sales" },
  { account: "杨桂萍", name: "杨桂萍", title: "外贸业务员", role: "sales" },
  { account: "杨美清", name: "杨美清", title: "外贸业务员", role: "sales" },
  { account: "桑小川", name: "桑小川 (Eric)", title: "外贸业务员", role: "sales" },
  { account: "李伟鸿", name: "李伟鸿 (Jasper)", title: "外贸业务员", role: "sales" }
];
let currentAccount = localStorage.getItem("jamooz_current_user") || "苏菲菲";

// 如果当前账号是业务员且没有手动指定过体系，默认进入 sales
const initUserObj = salesUsers.find(u => u.account === currentAccount);
if(initUserObj && initUserObj.role === "sales" && !localStorage.getItem("jamooz_active_system")){
  activeSystem = "sales";
}

function getCurrentLessons(){
  return activeSystem === "sales" && typeof bizLessons !== "undefined" ? bizLessons : lessons;
}
function getTotalLessonsCount(){
  return getCurrentLessons().length;
}

function getProgressKey(acc, sys = activeSystem){ 
  return `jamooz-progress-${sys}-${acc}`; 
}
let completed = new Set(JSON.parse(localStorage.getItem(getProgressKey(currentAccount)) || "[]"));
let selectedTrack = "all";
const app = document.querySelector("#app");
const nav = document.querySelector("#lessonNav");
const crumbs = document.querySelector("#breadcrumbs");

function pad(n){ return String(n).padStart(2,"0"); }
function saveProgress(){
  localStorage.setItem(getProgressKey(currentAccount), JSON.stringify([...completed]));
  updateProgress();
  renderNav();
}
function updateProgress(){
  const total = getTotalLessonsCount();
  document.querySelector("#sideProgress").textContent = `${completed.size} / ${total}`;
  document.querySelector("#sideProgressBar").style.width = `${total > 0 ? (completed.size / total * 100) : 0}%`;
  
  // 更新顶部 Tab 高亮
  document.querySelectorAll(".system-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.sys === activeSystem);
  });
  
  // 更新品牌 Logo 标题
  const brandSub = document.querySelector(".brand div strong");
  if(brandSub){
    brandSub.textContent = activeSystem === "sales" ? "外贸业务实战" : "国际站运营";
  }

  // 更新用户选择下拉框
  const userSelect = document.querySelector("#userSelect");
  if(userSelect){
    userSelect.innerHTML = salesUsers.map(u => 
      `<option value="${u.account}" data-role="${u.role}" ${u.account===currentAccount?'selected':''}>${u.name} (${u.title})</option>`
    ).join("");
  }
  // 更新体系 Tab 显隐与选中状态
  updateSystemTabsUI();
}

function updateSystemTabsUI(){
  const currentUserObj = salesUsers.find(u => u.account === currentAccount);
  const isAdmin = currentUserObj && currentUserObj.role === "admin";
  const tabsWrap = document.querySelector("#systemTabs");
  
  if(tabsWrap){
    if(!isAdmin && currentUserObj && currentUserObj.role){
      // 普通员工强制只展示自己岗位的一侧 Tab，隐藏另一侧（彻底杜绝交叉）
      tabsWrap.querySelectorAll(".system-tab-btn").forEach(btn => {
        if(btn.dataset.sys !== currentUserObj.role){
          btn.style.display = "none";
        } else {
          btn.style.display = "inline-flex";
          btn.classList.add("active");
        }
      });
    } else {
      // 超级管理员 苏菲菲：完整展示双轨 Tab，自由随意切换
      tabsWrap.querySelectorAll(".system-tab-btn").forEach(btn => {
        btn.style.display = "inline-flex";
        btn.classList.toggle("active", btn.dataset.sys === activeSystem);
      });
    }
  }
}

// 绑定体系切换按钮事件
document.querySelectorAll(".system-tab-btn").forEach(btn => {
  btn.onclick = () => {
    const sys = btn.dataset.sys;
    if(sys === activeSystem) return;
    
    // 权限校验拦截
    const currentUserObj = salesUsers.find(u => u.account === currentAccount);
    const isAdmin = currentUserObj && currentUserObj.role === "admin";
    if(!isAdmin && currentUserObj && currentUserObj.role && currentUserObj.role !== sys){
      alert(`⚠️ 权限提示：您当前岗位是【${currentUserObj.title}】，该板块为【${sys==='ops'?'运营':'业务'}】专属培训。如有需要请联系管理员 苏菲菲。`);
      return;
    }

    activeSystem = sys;
    localStorage.setItem("jamooz_active_system", activeSystem);
    completed = new Set(JSON.parse(localStorage.getItem(getProgressKey(currentAccount)) || "[]"));
    selectedTrack = "all";
    location.hash = "home";
    updateProgress();
    renderNav();
    route();
  };
});

// 监听子账号切换
const userSelectElem = document.querySelector("#userSelect");
if(userSelectElem){
  userSelectElem.addEventListener("change", (e)=>{
    currentAccount = e.target.value;
    localStorage.setItem("jamooz_current_user", currentAccount);
    
    // 切换用户时，根据该用户的岗位角色智能联动体系
    const u = salesUsers.find(x => x.account === currentAccount);
    if(u && u.role && u.role !== activeSystem){
      activeSystem = u.role;
      localStorage.setItem("jamooz_active_system", activeSystem);
    }
    
    completed = new Set(JSON.parse(localStorage.getItem(getProgressKey(currentAccount)) || "[]"));
    updateProgress();
    renderNav();
    route();
  });
}
function renderNav(){
  const curLessons = getCurrentLessons();
  const subTitle = activeSystem === "sales" ? "SALES BIZ LESSONS" : "CORE LESSONS";
  nav.innerHTML = `<button class="nav-link ${location.hash==="#home"||!location.hash?"active":""}" data-home><span class="nav-num">⌂</span><span>课程地图</span></button><div class="nav-group-title">${subTitle}</div>` + curLessons.map(l=>`<button class="nav-link ${location.hash===`#lesson-${l.id}`?"active":""}" data-id="${l.id}"><span class="nav-num">${pad(l.id)}</span><span>${l.title}</span><span class="nav-check">${completed.has(l.id)?"✓":""}</span></button>`).join("") + `<div class="nav-group-title">RESOURCE LIBRARY</div>${Object.entries(libraries).map(([key,lib])=>`<button class="nav-link ${location.hash===`#library-${key}`?"active":""}" data-library="${key}"><span class="nav-num">＋</span><span>${lib.title}</span></button>`).join("")}<button class="nav-link ${location.hash==="#source-map"?"active":""}" data-source-map><span class="nav-num">≡</span><span>资料来源</span></button>`;
  nav.querySelector("[data-home]").onclick=()=>{location.hash="home";};
  nav.querySelectorAll("[data-id]").forEach(b=>b.onclick=()=>{location.hash=`lesson-${b.dataset.id}`;});
  nav.querySelectorAll("[data-library]").forEach(b=>b.onclick=()=>{location.hash=`library-${b.dataset.library}`;});
  nav.querySelector("[data-source-map]").onclick=()=>{location.hash="source-map";};
}

function dashboard(){
  crumbs.textContent="课程地图";
  const curLessons = getCurrentLessons();
  const total = curLessons.length;
  const query = document.querySelector("#searchInput").value.trim().toLowerCase();
  
  let visible = curLessons;
  if(activeSystem === "ops" && tracks[selectedTrack]){
    visible = visible.filter(l => tracks[selectedTrack].ids.includes(l.id));
  }
  if(query){
    visible = visible.filter(l => (`${l.title}${l.summary}${l.stage}${l.outcomes.join("")}${l.steps.flat().join("")}`).toLowerCase().includes(query));
  }

  const isSales = activeSystem === "sales";
  const headEyebrow = isSales ? "Global Trade B2B Sales" : "Alibaba.com Operations";
  const headH1 = isSales ? "从商机线索到履约成交，<br>外贸业务员全流程实战。" : "把流量变成订单，<br>从一张清晰的课程地图开始。";
  const headLede = isSales ? "6 个核心实战关卡，覆盖 RFQ 抢单、询盘转化、样品推进、PI 制作、信保/e收汇订单起草与老客二次营销。" : "12 个实战章节，覆盖产品定位、链接建设、推广、诊断与业务转化。核心内容可直接阅读，原始会员资料仅作为延伸。";

  app.innerHTML=`
    <section class="dashboard-head"><p class="eyebrow">${headEyebrow}</p><h1>${headH1}</h1><p class="lede">${headLede}</p></section>
    <section class="summary-grid" aria-label="学习概览">
      <div class="summary-card accent"><span>当前进度</span><strong>${completed.size}<small> / ${total}</small></strong><p>${completed.size?"继续完成下一课，把方法落实到日常跟进。":"从第 01 课开始建立统一业务规范。"}</p></div>
      <div class="summary-card"><span>核心课程</span><strong>${total}</strong><p>${isSales?"六阶业务通关流":"按完整运营闭环重新编排"}</p></div>
      <div class="summary-card"><span>实操板块</span><strong>${isSales?"6 关卡":"4 路径"}</strong><p>${isSales?"覆盖拓客/转化/单证/履约":"按岗位选择学习路径"}</p></div>
    </section>
    ${!isSales ? `<section class="path-strip"><p class="eyebrow">选择学习路径</p><div class="path-buttons">${Object.entries(tracks).map(([k,v])=>`<button class="path-button ${selectedTrack===k?"active":""}" data-track="${k}">${v.label}</button>`).join("")}</div></section>` : ""}
    <section><h2>${query?`搜索结果 · ${visible.length}`:"课程章节"}</h2>${visible.length?`<div class="course-grid">${visible.map(l=>`<article class="course-card" data-stage="${l.stage}"><div class="meta"><span>LESSON ${pad(l.id)}</span><span>${l.stage}</span></div><h3>${l.title}</h3><p>${l.summary}</p><button class="card-action" data-open="${l.id}">${completed.has(l.id)?"重新学习":"开始学习"} →</button></article>`).join("")}</div>`:`<div class="empty"><h3>没有找到相关课程</h3><p>换一个关键词试试。</p></div>`}</section>
    <section class="library-strip"><div><p class="eyebrow">RESOURCE LIBRARY</p><h2>案例、模板与工具</h2><p>主课程负责教方法，资料库负责随用随查。</p></div><div class="library-buttons">${Object.entries(libraries).map(([key,lib])=>`<button data-library-open="${key}"><strong>${lib.title}</strong><span>${lib.items.length} 项资源</span></button>`).join("")}</div></section>`;
  
  if(!isSales){
    app.querySelectorAll("[data-track]").forEach(b=>b.onclick=()=>{selectedTrack=b.dataset.track;dashboard();});
  }
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
      <img src="assets/lesson-1-traffic-sources.png" alt="国际站后台常见流量来源清单" loading="lazy">
      <figcaption>上下滚动可查看完整清单；下面用新人能懂的话逐项解释。</figcaption>
    </figure>
    <div class="source-guide" aria-label="流量入口解释">
      ${groups.map(([title,items])=>`<section class="source-group"><h3>${title}</h3>${items.map(([name,meaning])=>`<div class="source-item"><strong>${name}</strong><p>${meaning}</p></div>`).join("")}</section>`).join("")}
    </div>
    <div class="metric-note"><strong>第一课只看懂 4 个结果：</strong><span>店铺访问人数＝来了多少人</span><span>店内询盘人数＝多少人发了询盘</span><span>店内 TM 咨询人数＝多少人发起即时沟通</span><span>商机转化率＝访问后产生商机的比例</span><p>先会认入口和结果就够了。怎么根据涨跌判断问题，留到后面的“数据诊断与增长漏斗”课程。</p></div>
     <p class="paid-traffic-note">补充：直通车属于付费推广流量，通常在营销模块单独管理，第 08 课再展开。</p>
   </section>
   <section class="lesson-section"><h2>先认这几个词</h2>
     <p class="drill-intro">后面 11 课会反复用到这些词。不用背，看不懂的时候回来查一眼就行。</p>
     <details class="drill"><summary>展开看 19 个常用词的一句话解释</summary><div class="answer">
       <div class="source-table-wrap"><table class="decision-table glossary-table"><thead><tr><th>词</th><th>一句话解释</th></tr></thead><tbody>
         <tr><td>曝光</td><td>平台把你的产品展示给买家，展示一次算一次</td></tr>
         <tr><td>点击</td><td>买家在主图或标题上点进了产品页</td></tr>
         <tr><td>访问（访客）</td><td>进入店铺或产品页的人数。同一个人来十次，只算一个人</td></tr>
         <tr><td>询盘</td><td>买家通过站内信发来的具体采购询问，通常带产品和数量</td></tr>
         <tr><td>TM</td><td>阿里国际站的即时聊天工具。买家在那头发消息，就记为 TM 咨询</td></tr>
         <tr><td>商机</td><td>平台把询盘、TM 咨询这类「有可能成交的沟通」统一算作商机</td></tr>
         <tr><td>MOQ</td><td>最小起订量，英文 Minimum Order Quantity。低于这个量通常不接单</td></tr>
         <tr><td>RFQ</td><td>采购需求单。买家发布需求，供应商报名报价，多方同时竞争</td></tr>
         <tr><td>FOB／CIF</td><td>两种贸易术语。FOB 是货交到船上为止，CIF 是卖方付运费和保险到目的港。所以同款产品这两个价格不能直接比</td></tr>
         <tr><td>信保订单</td><td>通过平台担保交易的订单。金额和履约记录会计入店铺数据</td></tr>
         <tr><td>橱窗</td><td>店铺里可以重点推荐产品的展示位，数量有限</td></tr>
         <tr><td>SKU</td><td>同一款产品下的不同规格、颜色或套装。三个颜色就是三个 SKU</td></tr>
         <tr><td>OEM／ODM</td><td>OEM 是按客户品牌代工，ODM 是工厂自己设计好、贴客户品牌</td></tr>
         <tr><td>点击率／询盘率</td><td>点击率＝点击 ÷ 曝光；询盘率＝询盘人数 ÷ 访客数。分母用错，算出来会好看得离谱</td></tr>
         <tr><td>直通车</td><td>按关键词买搜索流量的付费推广工具。你选词、定出价，买家搜到就展示</td></tr>
         <tr><td>全站推</td><td>智能投放工具。你给产品和预算，系统自己去找可能感兴趣的买家，可控性比直通车低</td></tr>
         <tr><td>首响</td><td>第一次回复的简称。客户发来询盘或消息后，你回的第一条</td></tr>
         <tr><td>口径</td><td>一个指标按什么规则统计。口径不同，两个数字就不能直接比——比如拿 7 天的数和 30 天的数比</td></tr>
         <tr><td>增量／归因</td><td>增量是「多出来的」，不是从原有流量里挪过来的；归因是找出变化到底由什么引起</td></tr>
       </tbody></table></div>
     </div></details>
   </section>`;
}

function lessonSupplement(lessonId){
  if(lessonId===2){
    return `<section class="lesson-section"><h2>后台去哪里查这几组数据</h2><div class="source-guide">
      <section class="source-group"><h3>国家分布只有一个入口，两个页签</h3><div class="source-item"><strong>数据参谋 → 买家参谋</strong><p>顶部并排两个页签：本店买家（你的历史数据）和行业买家（类目大盘）。两个都在同一个模块里，不用换系统。</p></div><div class="source-item"><strong>本店买家 → 买家来源 → Top 国家及地区分布</strong><p>用顶部「买家类型」切换访问／询盘／TM／订单买家，四种国家分布都在这一块，分别对应第 03、04、05 步。</p></div><div class="source-item"><strong>怎么找得到它</strong><p>一定从工作台 <code>i.alibaba.com</code> 左侧菜单点进「数据参谋」，直接输 <code>data.alibaba.com</code> 会跳到买家登录页，白折腾一趟。左侧二级菜单分五组：店铺、参谋、智能、营销、学堂——<strong>买家参谋在「参谋组」的最末一个</strong>，不是挨着「访客详情」。第一次找的人常在「访客详情」附近来回翻。</p></div><div class="source-item"><strong>不要走流量参谋</strong><p>「流量参谋 → 流量来源」是按渠道拆的（搜索、系统推荐、导购会场、频道、互动、自营销、店内、站外），那一页没有国家维度。第一课用它认渠道，这一课不能用它取国家。</p></div></section>
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

const DINGTALK_FORM_URL = "https://alidocs.dingtalk.com/notable/share/form/v01LbnjLyr0bBKByOaN_9fg2cDW_OgZ3HpC?source=link";

function showCheckinModal(lesson){
  const user = salesUsers.find(u => u.account === currentAccount) || { name: currentAccount, account: currentAccount, role: activeSystem };
  const now = new Date();
  const timeStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  const total = getTotalLessonsCount();
  const progressStr = `${completed.size} / ${total}`;
  const statusStr = completed.size >= (total - 1) ? "全部已学完" : "学习中";
  const sysPrefix = activeSystem === "sales" ? "【业务实战】" : "【运营体系】";
  const lessonTitle = `${sysPrefix} 第 ${pad(lesson.id)} 课 ${lesson.title}`;

  let modal = document.querySelector("#checkinModal");
  if(!modal){
    modal = document.createElement("div");
    modal.id = "checkinModal";
    modal.className = "checkin-modal";
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div class="checkin-card">
      <div class="checkin-head">
        <h3>🎉 恭喜完成本课！打卡数据同步中...</h3>
        <button type="button" aria-label="关闭" onclick="document.querySelector('#checkinModal').classList.remove('active')">✕</button>
      </div>
      <div class="checkin-body">
        <div class="checkin-item"><span>学员姓名：</span><strong>${user.name}</strong></div>
        <div class="checkin-item"><span>岗位职能：</span><strong>${user.title || (activeSystem==="sales"?"外贸业务员":"运营助理")}</strong></div>
        <div class="checkin-item"><span>完成课时：</span><strong>${lessonTitle}</strong></div>
        <div class="checkin-item"><span>打卡时间：</span><span>${timeStr}</span></div>
        <div class="checkin-item"><span>当前进度：</span><strong style="color:var(--teal,#258b86);">${progressStr}</strong></div>
        <div class="checkin-item"><span>同步状态：</span><strong id="syncStatusText" style="color:#d97706;">⏳ 正在自动写入钉钉表格...</strong></div>
        <p style="margin:14px 0 0;font-size:0.82rem;color:#64748b;line-height:1.4;">系统已全自动将学习进度写入公司钉钉 AI 进度表，无需手动上报。</p>
      </div>
      <div class="checkin-foot">
        <button type="button" class="btn-close" style="flex:1;background:var(--teal,#258b86);color:#fff;border-color:var(--teal,#258b86);padding:10px;" onclick="document.querySelector('#checkinModal').classList.remove('active')">完成打卡</button>
      </div>
    </div>
  `;
  modal.classList.add("active");
  modal.onclick = (e) => { if(e.target === modal) modal.classList.remove("active"); };

  // 异步静默写入 Vercel 后端接口（自动存入钉钉 AI 表格）
  fetch("/api/checkin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: user.name,
      lessonTitle: lessonTitle,
      progress: progressStr,
      status: statusStr,
      time: timeStr
    })
  }).then(r => r.json()).then(res => {
    const statusElem = modal.querySelector("#syncStatusText");
    if(statusElem){
      statusElem.textContent = "✅ 已自动写入钉钉表格！";
      statusElem.style.color = "#16a34a";
    }
    const headTitle = modal.querySelector(".checkin-head h3");
    if(headTitle) headTitle.textContent = "🎉 打卡成功！学习数据已入库";
  }).catch(err => {
    console.warn("Silent checkin fallback:", err);
    const statusElem = modal.querySelector("#syncStatusText");
    if(statusElem){
      statusElem.textContent = "✓ 已存入本地进度 (表格已排队)";
      statusElem.style.color = "#258b86";
    }
  });
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
      ${lesson.decisions.length?`<section class="lesson-section"><h2>${lesson.decisionTitle||"数据表现与判断方法"}</h2><table class="decision-table"><thead><tr><th>${lesson.id===1?"阶段":"表现"}</th><th>${lesson.id===1?"是什么意思":"可能原因"}</th><th>${lesson.id===1?"新人先问什么":"优先动作"}</th></tr></thead><tbody>${rows}</tbody></table></section>`:""}
      ${lesson.id===1?trafficSourcePrimer():""}
      ${lesson.checklist.length?`<section class="lesson-section"><h2>本课检查表</h2><ul class="checklist">${lesson.checklist.map(x=>`<li>${x}</li>`).join("")}</ul></section>`:""}
      <section class="lesson-section"><h2>课后任务</h2><div class="assignment">${lesson.assignment}</div></section>
     </article><aside class="lesson-aside">
       <div class="aside-card"><h3>学习状态</h3><button class="complete-button ${completed.has(lesson.id)?"done":""}" data-complete>${completed.has(lesson.id)?"✓ 已完成":"标记为已完成"}</button></div>
     </aside></div>`;
  app.querySelector("[data-complete]").onclick=()=>{
    const wasDone = completed.has(lesson.id);
    if(wasDone){
      completed.delete(lesson.id);
    } else {
      completed.add(lesson.id);
      showCheckinModal(lesson);
    }
    saveProgress();
    lessonPage(lesson);
  };
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
  const curLessons = getCurrentLessons();
  if(match){
    const lesson=curLessons.find(x=>x.id===Number(match[1]));
    lesson?lessonPage(lesson):dashboard();
  }
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

// 首次进入强防呆绑定弹窗与钉钉环境检测
(function initUserBinding(){
  const boundUser = localStorage.getItem("jamooz_current_user");
  const modal = document.createElement("div");
  modal.className = "welcome-modal-overlay" + (boundUser ? "" : " active");
  modal.innerHTML = `
    <div class="welcome-modal" role="dialog" aria-modal="true">
      <div class="welcome-header">
        <h3>🎓 外贸经营学习中心</h3>
        <p>国际站日常运营与业务实战实训系统</p>
      </div>
      <div class="welcome-body">
        <div class="welcome-prompt" id="welcomePromptText">请选择您的真实姓名进行身份绑定（首次进入确认）：</div>
        <div style="font-size:0.78rem;font-weight:700;color:#0b1f33;margin:0 0 8px;text-align:left;">👑 团队负责人 / 管理员：</div>
        <div class="welcome-user-grid" style="margin-bottom:14px;">
          ${salesUsers.filter(u=>u.role==='admin').map(u=>`
            <button class="welcome-user-btn" data-account="${u.account}" data-name="${u.name}" style="border-color:#f4b942;background:#fffdfa;">
              <span class="btn-avatar">👑</span>
              <span class="btn-name" style="font-weight:800;color:#0b1f33;">${u.name}</span>
              <span class="btn-title" style="color:#d97706;font-weight:600;">${u.title}</span>
            </button>
          `).join("")}
        </div>
        <div style="font-size:0.78rem;font-weight:700;color:#64748b;margin:0 0 8px;text-align:left;">🎯 运营团队：</div>
        <div class="welcome-user-grid" style="margin-bottom:14px;">
          ${salesUsers.filter(u=>u.role==='ops').map(u=>`
            <button class="welcome-user-btn" data-account="${u.account}" data-name="${u.name}">
              <span class="btn-avatar">👤</span>
              <span class="btn-name">${u.name}</span>
              <span class="btn-title">${u.title}</span>
            </button>
          `).join("")}
        </div>
        <div style="font-size:0.78rem;font-weight:700;color:#64748b;margin:0 0 8px;text-align:left;">💼 外贸业务团队：</div>
        <div class="welcome-user-grid">
          ${salesUsers.filter(u=>u.role==='sales').map(u=>`
            <button class="welcome-user-btn" data-account="${u.account}" data-name="${u.name}">
              <span class="btn-avatar">💼</span>
              <span class="btn-name">${u.name}</span>
              <span class="btn-title">${u.title}</span>
            </button>
          `).join("")}
        </div>
        <div class="welcome-confirm-box" id="welcomeConfirmBox">
          <p id="welcomeConfirmText">请确认：您是【杨艳琼】本人吗？</p>
          <div class="welcome-confirm-actions">
            <button class="btn-reselect" id="btnReselect">点错了，重新选</button>
            <button class="btn-bind-ok" id="btnBindOk">确认是我，进入学习</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  let pendingAccount = null;
  const confirmBox = modal.querySelector("#welcomeConfirmBox");
  const confirmText = modal.querySelector("#welcomeConfirmText");
  const promptText = modal.querySelector("#welcomePromptText");
  const grid = modal.querySelector(".welcome-user-grid");

  // 尝试钉钉静默免登：如果是钉钉内置环境打开，自动换取真实姓名并直接绑定
  function tryDingTalkAuth(){
    if(window.dd && dd.runtime && dd.runtime.permission){
      const runAuth = () => {
        dd.runtime.permission.requestAuthCode({
          corpId: "ding0c50faf1571a82cbffe93478753d9884",
          onSuccess: function(info){
            if(info && info.code){
              fetch(`/api/user?code=${encodeURIComponent(info.code)}`)
                .then(r => r.json())
                .then(data => {
                  if(data && data.success && data.name){
                    currentAccount = data.name;
                    localStorage.setItem("jamooz_current_user", currentAccount);
                    const matchedUser = salesUsers.find(u => u.account === currentAccount);
                    if(matchedUser && matchedUser.role){
                      activeSystem = matchedUser.role;
                      localStorage.setItem("jamooz_active_system", activeSystem);
                    }
                    completed = new Set(JSON.parse(localStorage.getItem(getProgressKey(currentAccount)) || "[]"));
                    updateProgress();
                    renderNav();
                    route();
                    modal.classList.remove("active");
                  }
                }).catch(e => console.warn("DingTalk userinfo error:", e));
            }
          },
          onFail: function(err){
            console.warn("DingTalk requestAuthCode failed:", err);
          }
        });
      };
      if(dd.ready) dd.ready(runAuth);
      else runAuth();
    }
  }

  // 延迟检测并执行，确保钉钉 JSAPI 注入完成
  setTimeout(tryDingTalkAuth, 50);
  window.addEventListener("load", tryDingTalkAuth);

  grid.querySelectorAll(".welcome-user-btn").forEach(btn=>{
    btn.onclick = () => {
      pendingAccount = btn.dataset.account;
      confirmText.textContent = `请确认：您是【${btn.dataset.name}】本人吗？`;
      confirmBox.classList.add("show");
    };
  });

  modal.querySelector("#btnReselect").onclick = () => {
    pendingAccount = null;
    confirmBox.classList.remove("show");
  };

  modal.querySelector("#btnBindOk").onclick = () => {
    if(!pendingAccount) return;
    currentAccount = pendingAccount;
    localStorage.setItem("jamooz_current_user", currentAccount);
    const matchedUser = salesUsers.find(u => u.account === currentAccount);
    if(matchedUser && matchedUser.role){
      activeSystem = matchedUser.role;
      localStorage.setItem("jamooz_active_system", activeSystem);
    }
    completed = new Set(JSON.parse(localStorage.getItem(getProgressKey(currentAccount)) || "[]"));
    updateProgress();
    renderNav();
    route();
    modal.classList.remove("active");
  };

  // 暴露全局唤起重新绑定接口
  window.rebindUser = function(){
    confirmBox.classList.remove("show");
    pendingAccount = null;
    modal.classList.add("active");
  };
})();

// 全屏图片灯箱 (Lightbox) 交互：支持点击任意截图全屏放大查看，ESC/点击关闭
(function initLightbox(){
  const box = document.createElement("div");
  box.className = "image-lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-label", "图片全屏预览");
  box.innerHTML = `
    <button class="image-lightbox-close" aria-label="关闭预览" title="按 ESC 或点击关闭">✕</button>
    <div class="image-lightbox-wrap"><img src="" alt="全屏大图预览"></div>
    <div class="image-lightbox-tip">点击大图、任意空白处或按 ESC 键即可退出</div>
  `;
  document.body.appendChild(box);
  const bigImg = box.querySelector("img");
  const close = () => {
    box.classList.remove("active");
    setTimeout(()=>{ if(!box.classList.contains("active")) bigImg.src = ""; }, 220);
  };
  box.onclick = (e) => { close(); };
  window.addEventListener("keydown", (e) => {
    if(e.key === "Escape" && box.classList.contains("active")) close();
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if(target && target.tagName === "IMG" && (target.closest(".screenshot-scroll") || target.closest(".course-figure"))){
      e.preventDefault();
      bigImg.src = target.src;
      box.classList.add("active");
    }
  });
})();

