const ROWS = 6;
const COLS = 5;
const HAND_SIZE = 3;
const BENCH_LIMIT = 4;
const STOCK_PER_UNIT = 6;
const MAX_STAR = 3;
const COPIES_FOR_MAX_STAR = 4;
const PREP_LIMIT_SECONDS = 45;
const ROUND_LIMIT_SECONDS = 35;
const BASE_ROUND_ELIXIR = 10;
const ROUND_ELIXIR_GAIN = 2;
const RELOAD_COST = 1;
const TICK_SECONDS = 0.16;
const WINS_TO_MATCH = 3;
const MAX_ROUNDS = 5;

const translations = {
  en: {
    tagline: "Private-shop PvP auto battler prototype",
    round: "Round",
    score: "Score",
    elixir: "Elixir",
    time: "Time",
    yourHand: "Your Hand",
    handHint: "Buy from your private three-unit shop.",
    enemyHand: "Enemy Shop",
    enemyHint: "The opponent shop is hidden.",
    enemyBench: "Enemy Bench",
    enemyTerritory: "Enemy territory 3 x 5",
    yourTerritory: "Your territory 3 x 5",
    bench: "Bench",
    teamState: "Team State",
    synergies: "Synergies",
    battleLog: "Battle Log",
    findMatch: "Find Match",
    reload: "Reload -1",
    sell: "Sell",
    fight: "Fight",
    reset: "Reset",
    matchmaking: "Matchmaking",
    planning: "Planning",
    battle: "Battle",
    complete: "Complete",
    none: "None",
    bot: "Bot",
    searching: "Searching",
    available: "Available",
    hiddenPool: "Hidden shop",
    stock: "Stock",
    soldOut: "No copies in stock.",
    prep: "Prep",
    bought: "Bench",
    claimed: "Taken",
    buy: "Buy",
    move: "Move",
    mergedUnit: "merged and powered up",
    level: "Lv.",
    returnBench: "Return to bench",
    soldUnit: "sold for",
    emptyBench: "Empty bench slot",
    noUnits: "No units bought yet.",
    noSynergy: "No active synergy.",
    activeSynergy: "Active",
    combo: "Combo",
    matchReady: "Bot fallback is ready. Buy units, place from bench, then fight.",
    finding: "Searching for PvP opponent...",
    botFallback: "No live opponent found. Bot opponent loaded.",
    handReloaded: "Your shop reloaded for 1 Elixir.",
    selectBench: "Bench unit selected. Drop it on your bottom 3 x 5 territory.",
    placeBottom: "Place units only on your bottom 3 rows.",
    cellOccupied: "That cell is occupied.",
    boughtUnit: "bought",
    enemyBoughtUnit: "Enemy bought",
    capReached: "Bench is full.",
    notEnoughElixir: "Not enough Elixir.",
    fightStarted: "Round started.",
    wonRound: "Round won.",
    lostRound: "Round lost.",
    timeLimit: "by time limit",
    matchWon: "Match won.",
    matchLost: "Match lost.",
    revived: "All surviving roster slots refresh for the next round.",
    dragHint: "Drag bench units to the board, or tap bench then tap a cell.",
    statusCap: "Shops are private, but inventory is shared: each unit has 6 total copies.",
  },
  ja: {
    tagline: "\u500b\u5225\u30b7\u30e7\u30c3\u30d7\u578bPvP\u30aa\u30fc\u30c8\u30d0\u30c8\u30e9\u30fc\u8a66\u4f5c",
    round: "\u30e9\u30a6\u30f3\u30c9",
    score: "\u30b9\u30b3\u30a2",
    elixir: "\u30a8\u30ea\u30af\u30b5\u30fc",
    time: "\u6642\u9593",
    yourHand: "\u624b\u672d",
    handHint: "\u81ea\u5206\u5c02\u7528\u306e3\u4f53\u30b7\u30e7\u30c3\u30d7\u304b\u3089\u8cfc\u5165\u3002",
    enemyHand: "\u6575\u306e\u30b7\u30e7\u30c3\u30d7",
    enemyHint: "\u76f8\u624b\u306e\u30b7\u30e7\u30c3\u30d7\u306f\u898b\u3048\u306a\u3044\u3002",
    enemyBench: "\u6575\u306e\u30d9\u30f3\u30c1",
    enemyTerritory: "\u6575\u9663\u5730 3 x 5",
    yourTerritory: "\u81ea\u9663 3 x 5",
    bench: "\u30d9\u30f3\u30c1",
    teamState: "\u7de8\u6210",
    synergies: "\u30b7\u30ca\u30b8\u30fc",
    battleLog: "\u30d0\u30c8\u30eb\u30ed\u30b0",
    findMatch: "\u30de\u30c3\u30c1\u691c\u7d22",
    reload: "\u30ea\u30ed\u30fc\u30c9 -1",
    sell: "\u58f2\u5374",
    fight: "\u958b\u59cb",
    reset: "\u30ea\u30bb\u30c3\u30c8",
    matchmaking: "\u691c\u7d22\u4e2d",
    planning: "\u6e96\u5099",
    battle: "\u6226\u95d8",
    complete: "\u7d42\u4e86",
    none: "\u306a\u3057",
    bot: "Bot",
    searching: "\u691c\u7d22\u4e2d",
    available: "\u8cfc\u5165\u53ef",
    hiddenPool: "\u975e\u516c\u958b\u30b7\u30e7\u30c3\u30d7",
    stock: "\u5728\u5eab",
    soldOut: "\u5728\u5eab\u306a\u3057\u3002",
    prep: "\u6e96\u5099",
    bought: "\u30d9\u30f3\u30c1",
    claimed: "\u53d6\u5f97\u6e08\u307f",
    buy: "\u8cfc\u5165",
    move: "\u79fb\u52d5",
    mergedUnit: "\u304c\u30de\u30fc\u30b8\u3055\u308c\u3066\u5f37\u5316",
    level: "Lv.",
    returnBench: "\u30d9\u30f3\u30c1\u306b\u623b\u3059",
    soldUnit: "\u3092\u58f2\u5374",
    emptyBench: "\u7a7a\u304d\u30d9\u30f3\u30c1",
    noUnits: "\u307e\u3060\u8cfc\u5165\u3057\u3066\u3044\u306a\u3044\u3002",
    noSynergy: "\u767a\u52d5\u4e2d\u306e\u30b7\u30ca\u30b8\u30fc\u306a\u3057\u3002",
    activeSynergy: "\u767a\u52d5",
    combo: "\u30b3\u30f3\u30dc",
    matchReady: "Bot\u5bfe\u6226\u306e\u6e96\u5099\u5b8c\u4e86\u3002\u8cfc\u5165\u3057\u3066\u30d9\u30f3\u30c1\u304b\u3089\u914d\u7f6e\u3057\u3088\u3046\u3002",
    finding: "PvP\u76f8\u624b\u3092\u691c\u7d22\u4e2d...",
    botFallback: "\u5bfe\u6226\u76f8\u624b\u304c\u898b\u3064\u304b\u3089\u306a\u3044\u305f\u3081Bot\u306b\u5207\u308a\u66ff\u3048\u3002",
    handReloaded: "\u30a8\u30ea\u30af\u30b5\u30fc1\u3092\u4f7f\u3063\u3066\u30b7\u30e7\u30c3\u30d7\u3092\u5f15\u304d\u76f4\u3057\u305f\u3002",
    selectBench: "\u30d9\u30f3\u30c1\u30e6\u30cb\u30c3\u30c8\u3092\u9078\u629e\u3002\u81ea\u9663\u306b\u7f6e\u3051\u308b\u3002",
    placeBottom: "\u914d\u7f6e\u3067\u304d\u308b\u306e\u306f\u4e0b3\u6bb5\u3060\u3051\u3002",
    cellOccupied: "\u305d\u306e\u30de\u30b9\u306f\u57cb\u307e\u3063\u3066\u3044\u308b\u3002",
    boughtUnit: "\u3092\u8cfc\u5165",
    enemyBoughtUnit: "\u6575\u304c\u8cfc\u5165",
    capReached: "\u30d9\u30f3\u30c1\u304c\u6e80\u676f\u3002",
    notEnoughElixir: "\u30a8\u30ea\u30af\u30b5\u30fc\u4e0d\u8db3\u3002",
    fightStarted: "\u30e9\u30a6\u30f3\u30c9\u958b\u59cb\u3002",
    wonRound: "\u30e9\u30a6\u30f3\u30c9\u52dd\u5229\u3002",
    lostRound: "\u30e9\u30a6\u30f3\u30c9\u6557\u5317\u3002",
    timeLimit: "\u6642\u9593\u5207\u308c",
    matchWon: "\u30de\u30c3\u30c1\u52dd\u5229\u3002",
    matchLost: "\u30de\u30c3\u30c1\u6557\u5317\u3002",
    revived: "\u6b21\u30e9\u30a6\u30f3\u30c9\u3067\u5168\u30e6\u30cb\u30c3\u30c8\u306f\u5fa9\u6d3b\u3002",
    dragHint: "\u30d9\u30f3\u30c1\u304b\u3089\u76e4\u9762\u3078\u30c9\u30e9\u30c3\u30b0\u3002\u30bf\u30c3\u30d7\u9078\u629e\u3067\u3082\u914d\u7f6e\u53ef\u3002",
    statusCap: "\u30b7\u30e7\u30c3\u30d7\u306f\u5225\u3001\u5728\u5eab\u306f\u5171\u6709\u3002\u5404\u30e6\u30cb\u30c3\u30c8\u306f\u4e21\u9663\u55b6\u5408\u8a086\u4f53\u3002",
  },
  zh: {
    tagline: "\u72ec\u7acb\u5546\u5e97PvP\u81ea\u52a8\u6218\u6597\u539f\u578b",
    round: "\u56de\u5408",
    score: "\u6bd4\u5206",
    elixir: "\u5723\u6c34",
    time: "\u65f6\u95f4",
    yourHand: "\u624b\u724c",
    handHint: "\u4ece\u81ea\u5df1\u7684\u4e09\u4e2a\u5355\u4f4d\u5546\u5e97\u8d2d\u4e70\u3002",
    enemyHand: "\u654c\u65b9\u5546\u5e97",
    enemyHint: "\u5bf9\u624b\u5546\u5e97\u4e0d\u53ef\u89c1\u3002",
    enemyBench: "\u654c\u65b9\u5907\u6218",
    enemyTerritory: "\u654c\u65b9\u9635\u5730 3 x 5",
    yourTerritory: "\u6211\u65b9\u9635\u5730 3 x 5",
    bench: "\u5907\u6218",
    teamState: "\u961f\u4f0d",
    synergies: "\u7f81\u7eca",
    battleLog: "\u6218\u6597\u8bb0\u5f55",
    findMatch: "\u5339\u914d",
    reload: "\u5237\u65b0 -1",
    sell: "\u51fa\u552e",
    fight: "\u5f00\u6218",
    reset: "\u91cd\u7f6e",
    matchmaking: "\u5339\u914d\u4e2d",
    planning: "\u51c6\u5907",
    battle: "\u6218\u6597",
    complete: "\u7ed3\u675f",
    none: "\u65e0",
    bot: "Bot",
    searching: "\u641c\u7d22\u4e2d",
    available: "\u53ef\u8d2d\u4e70",
    hiddenPool: "\u9690\u85cf\u5546\u5e97",
    stock: "\u5e93\u5b58",
    soldOut: "\u5df2\u65e0\u5e93\u5b58\u3002",
    prep: "\u51c6\u5907",
    bought: "\u5907\u6218",
    claimed: "\u5df2\u88ab\u62ff\u8d70",
    buy: "\u8d2d\u4e70",
    move: "\u79fb\u52a8",
    mergedUnit: "\u5df2\u5408\u5e76\u5e76\u5f3a\u5316",
    level: "Lv.",
    returnBench: "\u8fd4\u56de\u5907\u6218",
    soldUnit: "\u5df2\u51fa\u552e",
    emptyBench: "\u7a7a\u5907\u6218\u4f4d",
    noUnits: "\u5c1a\u672a\u8d2d\u4e70\u5355\u4f4d\u3002",
    noSynergy: "\u5c1a\u65e0\u6fc0\u6d3b\u7f81\u7eca\u3002",
    activeSynergy: "\u6fc0\u6d3b",
    combo: "\u7ec4\u5408",
    matchReady: "Bot\u5df2\u5c31\u7eea\u3002\u8d2d\u4e70\u5355\u4f4d\uff0c\u4ece\u5907\u6218\u62d6\u5230\u6218\u573a\u3002",
    finding: "\u6b63\u5728\u641c\u7d22PvP\u5bf9\u624b...",
    botFallback: "\u672a\u627e\u5230\u771f\u4eba\u5bf9\u624b\uff0c\u5df2\u5207\u6362\u5230Bot\u3002",
    handReloaded: "\u6d88\u80171\u70b9\u5723\u6c34\u5237\u65b0\u5546\u5e97\u3002",
    selectBench: "\u5df2\u9009\u4e2d\u5907\u6218\u5355\u4f4d\uff0c\u653e\u5230\u5e95\u90e83 x 5\u9635\u5730\u3002",
    placeBottom: "\u53ea\u80fd\u653e\u5728\u5e95\u90e83\u884c\u3002",
    cellOccupied: "\u8be5\u683c\u5df2\u88ab\u5360\u7528\u3002",
    boughtUnit: "\u5df2\u8d2d\u4e70",
    enemyBoughtUnit: "\u654c\u65b9\u8d2d\u4e70",
    capReached: "\u5907\u6218\u5e2d\u5df2\u6ee1\u3002",
    notEnoughElixir: "\u5723\u6c34\u4e0d\u8db3\u3002",
    fightStarted: "\u56de\u5408\u5f00\u59cb\u3002",
    wonRound: "\u56de\u5408\u80dc\u5229\u3002",
    lostRound: "\u56de\u5408\u5931\u8d25\u3002",
    timeLimit: "\u65f6\u95f4\u5230",
    matchWon: "\u6bd4\u8d5b\u80dc\u5229\u3002",
    matchLost: "\u6bd4\u8d5b\u5931\u8d25\u3002",
    revived: "\u4e0b\u4e00\u56de\u5408\u6240\u6709\u5355\u4f4d\u590d\u6d3b\u3002",
    dragHint: "\u4ece\u5907\u6218\u62d6\u5230\u6218\u573a\uff0c\u4e5f\u53ef\u70b9\u9009\u540e\u653e\u7f6e\u3002",
    statusCap: "\u5546\u5e97\u72ec\u7acb\uff0c\u5e93\u5b58\u5171\u4eab\uff1a\u6bcf\u4e2a\u5355\u4f4d\u53cc\u65b9\u5408\u8ba16\u4efd\u3002",
  },
};

const catalog = [
  {
    id: "sentinel",
    code: "NG",
    trait: "Vanguard",
    cost: 3,
    hp: 92,
    damage: 9,
    range: 1,
    attackMs: 980,
    color: "#36cdb5",
    dark: "#1c625e",
    name: {
      en: "Nightglass Sentinel",
      ja: "\u591c\u93e1\u306e\u885b\u5175",
      zh: "\u591c\u955c\u54e8\u5175",
    },
    desc: {
      en: "Shield bearer. Charges forward with a heavy bash.",
      ja: "\u76fe\u3092\u69cb\u3048\u3001\u91cd\u3044\u30d0\u30c3\u30b7\u30e5\u3067\u8e0f\u307f\u8fbc\u3080\u524d\u885b\u3002",
      zh: "\u6301\u76fe\u524d\u536b\uff0c\u7528\u91cd\u51fb\u5411\u524d\u538b\u5236\u3002",
    },
  },
  {
    id: "squire",
    code: "IS",
    trait: "Vanguard",
    cost: 2,
    hp: 62,
    damage: 7,
    range: 1,
    attackMs: 820,
    color: "#b8c1cc",
    dark: "#4b5665",
    name: {
      en: "Iron Squire",
      ja: "\u9244\u306e\u5f93\u8005",
      zh: "\u94c1\u4ece\u8005",
    },
    desc: {
      en: "Cheap frontliner. Quick shield chops buy time.",
      ja: "2\u30b3\u30b9\u30c8\u306e\u8efd\u3044\u524d\u885b\u3002\u77ed\u3044\u65ac\u6483\u3067\u6642\u9593\u3092\u7a3c\u3050\u3002",
      zh: "2\u8d39\u524d\u536b\uff0c\u4ee5\u5feb\u901f\u77ed\u65a9\u62d6\u65f6\u95f4\u3002",
    },
  },
  {
    id: "pike",
    code: "SP",
    trait: "Vanguard",
    cost: 3,
    hp: 70,
    damage: 13,
    range: 2,
    attackMs: 1040,
    color: "#e9b84d",
    dark: "#7c5120",
    name: {
      en: "Solar Pike",
      ja: "\u592a\u967d\u69cd",
      zh: "\u65e5\u8000\u957f\u77db",
    },
    desc: {
      en: "Long spear. Thrusts from a safe second line.",
      ja: "\u9577\u69cd\u3067\u4e00\u6b69\u5965\u304b\u3089\u7a81\u304f\u4e2d\u8ddd\u96e2\u524d\u885b\u3002",
      zh: "\u957f\u77db\u5355\u4f4d\uff0c\u53ef\u4ece\u7b2c\u4e8c\u6392\u7a81\u523a\u3002",
    },
  },
  {
    id: "spark",
    code: "KS",
    trait: "Ranger",
    cost: 2,
    hp: 38,
    damage: 8,
    range: 3,
    attackMs: 760,
    color: "#f8d66c",
    dark: "#8c6525",
    name: {
      en: "Kite Spark",
      ja: "\u51e7\u706b\u306e\u5c04\u624b",
      zh: "\u98ce\u7b5d\u706b\u82b1",
    },
    desc: {
      en: "Cheap backliner. Fires small bolts very quickly.",
      ja: "2\u30b3\u30b9\u30c8\u306e\u5f8c\u885b\u3002\u5c0f\u3055\u306a\u706b\u82b1\u3092\u7d20\u65e9\u304f\u98db\u3070\u3059\u3002",
      zh: "2\u8d39\u540e\u6392\uff0c\u5feb\u901f\u53d1\u5c04\u5c0f\u578b\u706b\u82b1\u3002",
    },
  },
  {
    id: "cinder",
    code: "CX",
    trait: "Arcana",
    cost: 4,
    hp: 48,
    damage: 17,
    range: 3,
    attackMs: 1320,
    color: "#ef7446",
    dark: "#7f2b23",
    name: {
      en: "Cinder Hex",
      ja: "\u71fc\u706b\u306e\u5492\u5e2b",
      zh: "\u70ec\u7070\u5492\u5e08",
    },
    desc: {
      en: "Fire caster. Throws a bursting ember bomb.",
      ja: "\u7206\u305c\u308b\u706b\u7403\u3092\u653e\u3064\u5f8c\u885b\u30ad\u30e3\u30b9\u30bf\u30fc\u3002",
      zh: "\u706b\u7130\u6cd5\u5e08\uff0c\u6295\u51fa\u7206\u88c2\u706b\u79cd\u3002",
    },
  },
  {
    id: "volt",
    code: "VW",
    trait: "Ranger",
    cost: 3,
    hp: 50,
    damage: 11,
    range: 4,
    attackMs: 820,
    color: "#6ca7ff",
    dark: "#28518e",
    name: {
      en: "Volt Warden",
      ja: "\u96f7\u5149\u306e\u756a\u4eba",
      zh: "\u7535\u5149\u5b88\u536b",
    },
    desc: {
      en: "Rapid ranger. Snaps lightning from the backline.",
      ja: "\u5f8c\u885b\u304b\u3089\u96fb\u6483\u3092\u9023\u5c04\u3059\u308b\u30ec\u30f3\u30b8\u30e3\u30fc\u3002",
      zh: "\u9ad8\u901f\u5c04\u624b\uff0c\u4ece\u540e\u6392\u91ca\u653e\u95ea\u7535\u3002",
    },
  },
  {
    id: "frost",
    code: "FR",
    trait: "Arcana",
    cost: 3,
    hp: 58,
    damage: 9,
    range: 3,
    attackMs: 1020,
    color: "#8fd8f4",
    dark: "#39728d",
    name: {
      en: "Frost Revenant",
      ja: "\u971c\u306e\u4ea1\u970a",
      zh: "\u971c\u7075\u4ea1\u8005",
    },
    desc: {
      en: "Ice spirit. Sweeps a freezing blade to slow targets.",
      ja: "\u51cd\u308b\u5203\u3067\u6575\u306e\u884c\u52d5\u3092\u9045\u3089\u305b\u308b\u970a\u4f53\u3002",
      zh: "\u51b0\u971c\u7075\u4f53\uff0c\u4ee5\u51b0\u5203\u51cf\u901f\u76ee\u6807\u3002",
    },
  },
  {
    id: "gravehook",
    code: "GH",
    trait: "Reaver",
    cost: 4,
    hp: 64,
    damage: 14,
    range: 1,
    attackMs: 900,
    color: "#d2a35a",
    dark: "#6c4b24",
    name: {
      en: "Gravehook Duelist",
      ja: "\u5893\u9264\u306e\u6c7a\u95d8\u8005",
      zh: "\u5893\u94a9\u51b3\u6597\u8005",
    },
    desc: {
      en: "Hook fighter. Pulls and cuts with a chained sickle.",
      ja: "\u9396\u9264\u3067\u5f15\u304d\u5bc4\u305b\u3001\u659c\u3081\u306b\u5208\u308b\u524d\u885b\u3002",
      zh: "\u94a9\u9501\u6597\u58eb\uff0c\u62c9\u8fd1\u540e\u65a9\u51fb\u3002",
    },
  },
  {
    id: "oracle",
    code: "VO",
    trait: "Sanctum",
    cost: 3,
    hp: 54,
    damage: 6,
    range: 3,
    attackMs: 1140,
    color: "#82dd6b",
    dark: "#3f7a37",
    name: {
      en: "Verdant Oracle",
      ja: "\u7fe0\u7dd1\u306e\u795e\u8a17\u5b98",
      zh: "\u7fe0\u7eff\u5148\u77e5",
    },
    desc: {
      en: "Support mystic. Sends a healing bloom to allies.",
      ja: "\u56de\u5fa9\u306e\u82b1\u3092\u98db\u3070\u3059\u652f\u63f4\u5f79\u3002",
      zh: "\u8f85\u52a9\u795e\u79d8\u8005\uff0c\u4ee5\u751f\u547d\u4e4b\u82b1\u6cbb\u7597\u961f\u53cb\u3002",
    },
  },
  {
    id: "shade",
    code: "RS",
    trait: "Reaver",
    cost: 4,
    hp: 52,
    damage: 18,
    range: 1,
    attackMs: 760,
    color: "#aa7cff",
    dark: "#523887",
    name: {
      en: "Riftblade Shade",
      ja: "\u88c2\u754c\u5203\u306e\u5f71",
      zh: "\u88c2\u754c\u5203\u5f71",
    },
    desc: {
      en: "Assassin. Blinks in and carves with twin blades.",
      ja: "\u77ac\u9593\u79fb\u52d5\u3057\u3066\u53cc\u5203\u3067\u5207\u308a\u8fbc\u3080\u6697\u6bba\u8005\u3002",
      zh: "\u523a\u5ba2\uff0c\u95ea\u8eab\u540e\u7528\u53cc\u5203\u5207\u5165\u3002",
    },
  },
];

const synergies = [
  {
    id: "ironChoir",
    units: ["sentinel", "pike"],
    name: { en: "Iron Choir", ja: "\u9244\u58c1\u306e\u8056\u6b4c", zh: "\u94c1\u58c1\u5723\u6b4c" },
    desc: { en: "+18 HP and shield.", ja: "HP+18\u3068\u30b7\u30fc\u30eb\u30c9\u3002", zh: "HP+18\u5e76\u83b7\u5f97\u62a4\u76fe\u3002" },
  },
  {
    id: "stormRitual",
    units: ["cinder", "volt"],
    name: { en: "Storm Ritual", ja: "\u5d50\u306e\u5100\u5f0f", zh: "\u98ce\u66b4\u4eea\u5f0f" },
    desc: { en: "+18% damage.", ja: "\u30c0\u30e1\u30fc\u30b8+18%\u3002", zh: "\u4f24\u5bb3+18%\u3002" },
  },
  {
    id: "coldGrave",
    units: ["frost", "gravehook"],
    name: { en: "Cold Grave", ja: "\u51b7\u305f\u3044\u5893", zh: "\u51b0\u51b7\u5893\u573a" },
    desc: { en: "Enemy starts slowed.", ja: "\u6575\u3092\u958b\u59cb\u6642\u306b\u9045\u5ef6\u3002", zh: "\u5f00\u5c40\u51cf\u901f\u654c\u4eba\u3002" },
  },
  {
    id: "wildOath",
    units: ["sentinel", "oracle"],
    name: { en: "Wild Oath", ja: "\u91ce\u751f\u306e\u8a93\u3044", zh: "\u91ce\u6027\u8a93\u7ea6" },
    desc: { en: "Allies regenerate.", ja: "\u5473\u65b9\u304c\u5f90\u3005\u306b\u56de\u5fa9\u3002", zh: "\u961f\u53cb\u6301\u7eed\u56de\u590d\u3002" },
  },
  {
    id: "duskDuel",
    units: ["gravehook", "shade"],
    name: { en: "Dusk Duel", ja: "\u9ec4\u660f\u306e\u6c7a\u95d8", zh: "\u9ec4\u660f\u51b3\u6597" },
    desc: { en: "First strike hits harder.", ja: "\u521d\u6483\u304c\u5f37\u5316\u3002", zh: "\u9996\u6b21\u653b\u51fb\u66f4\u5f3a\u3002" },
  },
  {
    id: "mageborn",
    units: ["cinder", "frost"],
    name: { en: "Mageborn", ja: "\u9b54\u5c0e\u306e\u8840", zh: "\u9b54\u5bfc\u8840\u8109" },
    desc: { en: "Arcana attacks faster.", ja: "Arcana\u306e\u653b\u6483\u901f\u5ea6\u30a2\u30c3\u30d7\u3002", zh: "Arcana\u653b\u51fb\u66f4\u5feb\u3002" },
  },
];

const unitById = new Map(catalog.map((unit) => [unit.id, unit]));
const unitPortraitIndex = new Map(catalog.map((unit, index) => [unit.id, index]));
const synergyById = new Map(synergies.map((synergy) => [synergy.id, synergy]));

const state = {
  lang: "en",
  phase: "planning",
  opponent: "Bot",
  round: 1,
  wins: 0,
  losses: 0,
  playerElixir: roundElixir(1),
  enemyElixir: roundElixir(1),
  nextUid: 1,
  selectedBenchUid: null,
  playerHand: [],
  enemyHand: [],
  playerBench: [],
  enemyBench: [],
  battleFighters: [],
  prepTime: 0,
  battleTime: 0,
  log: [],
  matchOver: false,
};

const els = {};
let battleTimer = null;
let botTimer = null;
let matchTimer = null;
let prepTimer = null;
let dragging = null;
let pendingShopDrag = null;
let suppressShopClick = false;

document.addEventListener("DOMContentLoaded", () => {
  els.roundLabel = document.querySelector("#roundLabel");
  els.scoreLabel = document.querySelector("#scoreLabel");
  els.elixirLabel = document.querySelector("#elixirLabel");
  els.timeLabel = document.querySelector("#timeLabel");
  els.clockLabel = document.querySelector("#clockLabel");
  els.timerFill = document.querySelector("#timerFill");
  els.selectionLabel = document.querySelector("#selectionLabel");
  els.playerHand = document.querySelector("#playerHand");
  els.enemyHand = document.querySelector("#enemyHand");
  els.enemyDraftLabel = document.querySelector("#enemyDraftLabel");
  els.phaseLabel = document.querySelector("#phaseLabel");
  els.statusLine = document.querySelector("#statusLine");
  els.matchButton = document.querySelector("#matchButton");
  els.reloadButton = document.querySelector("#reloadButton");
  els.sellButton = document.querySelector("#sellButton");
  els.fightButton = document.querySelector("#fightButton");
  els.resetButton = document.querySelector("#resetButton");
  els.board = document.querySelector("#board");
  els.bench = document.querySelector("#bench");
  els.enemyBench = document.querySelector("#enemyBench");
  els.benchCountLabel = document.querySelector("#benchCountLabel");
  els.enemyBenchCountLabel = document.querySelector("#enemyBenchCountLabel");
  els.teamSummary = document.querySelector("#teamSummary");
  els.synergySummary = document.querySelector("#synergySummary");
  els.battleLog = document.querySelector("#battleLog");

  els.matchButton.addEventListener("click", findMatch);
  els.reloadButton.addEventListener("click", reloadPlayerHand);
  els.sellButton.addEventListener("click", sellSelectedUnit);
  els.fightButton.addEventListener("click", startBattle);
  els.resetButton.addEventListener("click", resetMatch);
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);
  document.addEventListener("pointercancel", cancelDragState);
  document.addEventListener("dragend", cancelDragState);
  document.addEventListener("drop", cancelDragState);
  window.addEventListener("blur", cancelDragState);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelDragState();
  });
  resetMatch();
});

function resetMatch() {
  clearTimers();
  state.phase = "planning";
  state.opponent = "Bot";
  state.round = 1;
  state.wins = 0;
  state.losses = 0;
  state.playerElixir = roundElixir(state.round);
  state.enemyElixir = roundElixir(state.round);
  state.nextUid = 1;
  state.selectedBenchUid = null;
  state.playerBench = [];
  state.enemyBench = [];
  state.battleFighters = [];
  state.prepTime = 0;
  state.battleTime = 0;
  state.log = [];
  state.matchOver = false;
  drawHands();
  addLog(t("botFallback"), true);
  addLog(t("dragHint"));
  startPrepTimer();
  startBotDraftLoop();
  render();
}

function clearTimers() {
  if (battleTimer) window.clearInterval(battleTimer);
  if (botTimer) window.clearInterval(botTimer);
  if (matchTimer) window.clearTimeout(matchTimer);
  if (prepTimer) window.clearInterval(prepTimer);
  battleTimer = null;
  botTimer = null;
  matchTimer = null;
  prepTimer = null;
}

function roundElixir(round) {
  return BASE_ROUND_ELIXIR + (round - 1) * ROUND_ELIXIR_GAIN;
}

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  render();
}

function findMatch() {
  if (state.phase === "battle") return;
  if (matchTimer) window.clearTimeout(matchTimer);
  state.phase = "matchmaking";
  state.opponent = t("searching");
  stopBotDraftLoop();
  stopPrepTimer();
  addLog(t("finding"), true);
  render();
  matchTimer = window.setTimeout(() => {
    state.phase = "planning";
    state.opponent = "Bot";
    addLog(t("botFallback"), true);
    startPrepTimer();
    startBotDraftLoop();
    render();
  }, 850);
}

function startPrepTimer() {
  stopPrepTimer();
  prepTimer = window.setInterval(() => {
    if (state.phase !== "planning" || state.matchOver) return;
    state.prepTime = Math.min(PREP_LIMIT_SECONDS, state.prepTime + TICK_SECONDS);
    if (state.prepTime >= PREP_LIMIT_SECONDS) {
      addLog(`${t("prep")} ${t("timeLimit")}.`, true);
      startBattle();
      return;
    }
    render();
  }, TICK_SECONDS * 1000);
}

function stopPrepTimer() {
  if (prepTimer) window.clearInterval(prepTimer);
  prepTimer = null;
}

function drawHands() {
  state.playerHand = [];
  state.enemyHand = [];
  state.playerHand = randomHand("player");
  state.enemyHand = randomHand("enemy");
}

function randomHand(owner) {
  const available = catalog.filter((unit) => canOfferShopUnit(owner, unit.id));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, HAND_SIZE).map((unit) => unit.id);
}

function reloadPlayerHand() {
  if (state.phase !== "planning" || state.matchOver) return;
  if (state.playerElixir < RELOAD_COST) {
    addLog(t("notEnoughElixir"));
    render();
    return;
  }
  state.playerElixir -= RELOAD_COST;
  state.playerHand = randomHand("player");
  addLog(t("handReloaded"));
  render();
}

function reloadEnemyHand() {
  state.enemyHand = randomHand("enemy");
}

function startBotDraftLoop() {
  stopBotDraftLoop();
  botTimer = window.setInterval(() => {
    if (state.phase !== "planning" || state.matchOver) return;
    botDraft();
  }, 1450);
}

function stopBotDraftLoop() {
  if (botTimer) window.clearInterval(botTimer);
  botTimer = null;
}

function botDraft() {
  const canOpenSlot = waitingUnits(state.enemyBench).length < BENCH_LIMIT;
  const canDeploy = openSpotExists("enemy");
  if (!canOpenSlot && !canDeploy && !state.enemyHand.some((id) => findMergeTarget("enemy", id))) return;
  if (!state.enemyHand.length) reloadEnemyHand();
  const affordable = state.enemyHand
    .map((id) => unitById.get(id))
    .filter(
      (unit) =>
        unit &&
        canBuyShopUnit("enemy", unit.id) &&
        unit.cost <= state.enemyElixir &&
        (canDeploy || canOpenSlot || findMergeTarget("enemy", unit.id)),
    );
  if (!affordable.length) {
    reloadEnemyHand();
    return;
  }
  affordable.sort((a, b) => enemyDraftScore(b) - enemyDraftScore(a));
  const unit = affordable[0];
  state.enemyElixir -= unit.cost;
  const mergeTarget = findMergeTarget("enemy", unit.id);
  if (mergeTarget) {
    addUnitCopy(mergeTarget);
  } else {
    const position = enemyAutoPosition(unit);
    state.enemyBench.push(createBenchUnit(unit.id, "enemy", position?.row ?? null, position?.col ?? null));
  }
  state.enemyHand = removeOneFromHand(state.enemyHand, unit.id);
  addLog(`${t("enemyBoughtUnit")} ${unitName(unit)}${mergeTarget ? ` ${t("mergedUnit")}` : ""}.`, true);
  if (state.enemyBench.length < BENCH_LIMIT && !state.enemyHand.length) reloadEnemyHand();
  render();
}

function enemyDraftScore(unit) {
  const synergyBonus = getPotentialSynergies(unit.id, state.enemyBench).length * 18;
  const rangeBonus = unit.range >= 3 ? 6 : 0;
  const mergeBonus = findMergeTarget("enemy", unit.id) ? 34 : 0;
  return unit.damage + unit.hp * 0.12 + unit.cost * 5 + rangeBonus + synergyBonus + mergeBonus;
}

function createBenchUnit(id, team, row = null, col = null) {
  return {
    uid: `${team}-${state.nextUid++}`,
    id,
    team,
    row,
    col,
    star: 1,
    copies: 1,
  };
}

function buyUnit(unitId, preferredPosition = null) {
  if (state.phase !== "planning" || state.matchOver) return;
  const unit = unitById.get(unitId);
  if (!unit || !canBuyShopUnit("player", unit.id)) return;
  const mergeTarget = findMergeTarget("player", unit.id);
  const position = mergeTarget ? null : resolvePurchasePosition(unit, preferredPosition);
  if (!mergeTarget && preferredPosition && !position) return;
  if (!mergeTarget && !position && waitingUnits(state.playerBench).length >= BENCH_LIMIT) {
    addLog(t("capReached"));
    render();
    return;
  }
  if (state.playerElixir < unit.cost) {
    addLog(t("notEnoughElixir"));
    render();
    return;
  }
  state.playerElixir -= unit.cost;
  if (mergeTarget) {
    addUnitCopy(mergeTarget);
  } else {
    state.playerBench.push(createBenchUnit(unit.id, "player", position?.row ?? null, position?.col ?? null));
  }
  state.playerHand = removeOneFromHand(state.playerHand, unit.id);
  addLog(`${unitName(unit)} ${mergeTarget ? t("mergedUnit") : t("boughtUnit")}.`, true);
  render();
}

function buyUnitAtCell(unitId, row, col) {
  buyUnit(unitId, { row, col });
}

function sellSelectedUnit() {
  if (state.phase !== "planning" || state.matchOver) return;
  const unit = getSelectedUnit();
  if (!unit) return;
  const value = getSellValue(unit);
  const template = unitById.get(unit.id);
  state.playerElixir += value;
  state.playerBench = state.playerBench.filter((benchUnit) => benchUnit.uid !== unit.uid);
  state.selectedBenchUid = null;
  addLog(`${unitName(template)} ${t("soldUnit")} +${value} ${t("elixir")}.`, true);
  render();
}

function getSelectedUnit() {
  return state.playerBench.find((unit) => unit.uid === state.selectedBenchUid);
}

function getSellValue(unit) {
  const template = unitById.get(unit.id);
  return Math.ceil((template.cost * getUnitCopies(unit)) / 2);
}

function resolvePurchasePosition(unit, preferredPosition) {
  if (!preferredPosition) return firstOpenSpot("player", unit);
  if (!isPlayerZone(preferredPosition.row)) {
    addLog(t("placeBottom"));
    render();
    return null;
  }
  if (isRosterCellOccupied("player", preferredPosition.row, preferredPosition.col)) {
    addLog(t("cellOccupied"));
    render();
    return null;
  }
  return preferredPosition;
}

function startBattle() {
  if (state.phase !== "planning" || state.matchOver) return;
  stopBotDraftLoop();
  stopPrepTimer();
  autoPlaceMissingUnits();
  state.phase = "battle";
  state.selectedBenchUid = null;
  state.battleTime = 0;
  const teamSynergies = {
    player: getActiveSynergies(state.playerBench).map((synergy) => synergy.id),
    enemy: getActiveSynergies(state.enemyBench).map((synergy) => synergy.id),
  };
  state.battleFighters = [...state.enemyBench, ...state.playerBench]
    .filter((unit) => unit.row != null && unit.col != null)
    .map((unit) => createFighter(unit, teamSynergies[unit.team]));
  applyOpeningSynergies(teamSynergies);
  applyOpeningAbilities();
  addLog(`${t("fightStarted")} ${ROUND_LIMIT_SECONDS}s.`, true);
  render();
  battleTimer = window.setInterval(tickBattle, TICK_SECONDS * 1000);
}

function autoPlaceMissingUnits() {
  for (const unit of state.playerBench.filter((benchUnit) => benchUnit.row == null)) {
    const spot = firstOpenSpot("player", unitById.get(unit.id));
    if (spot) {
      unit.row = spot.row;
      unit.col = spot.col;
    }
  }
  for (const unit of state.enemyBench.filter((benchUnit) => benchUnit.row == null)) {
    const spot = firstOpenSpot("enemy", unitById.get(unit.id));
    if (spot) {
      unit.row = spot.row;
      unit.col = spot.col;
    }
  }
}

function createFighter(unit, synergyIds) {
  const template = unitById.get(unit.id);
  const star = getUnitStar(unit);
  let maxHp = Math.round(template.hp * (1 + (star - 1) * 0.34));
  let damage = Math.round(template.damage * (1 + (star - 1) * 0.28));
  let attackInterval = (template.attackMs / 1000) * Math.max(0.74, 1 - (star - 1) * 0.05);

  if (synergyIds.includes("ironChoir")) maxHp += 18;
  if (synergyIds.includes("stormRitual")) damage = Math.round(damage * 1.18);
  if (synergyIds.includes("mageborn") && template.trait === "Arcana") attackInterval *= 0.85;

  return {
    ...unit,
    copies: getUnitCopies(unit),
    star,
    synergyIds,
    alive: true,
    maxHp,
    hp: maxHp,
    shield: synergyIds.includes("ironChoir") ? 14 : 0,
    damage,
    range: template.range,
    attackInterval,
    cooldown: 0.16 + Math.random() * 0.24,
    moveCooldown: 0,
    shots: 0,
    firstStrike: synergyIds.includes("duskDuel"),
    stunnedUntil: 0,
    slowedUntil: 0,
    nextRegen: 1,
    fx: null,
    fxUntil: 0,
  };
}

function applyOpeningSynergies(teamSynergies) {
  for (const team of ["player", "enemy"]) {
    const ids = teamSynergies[team];
    if (ids.includes("ironChoir")) {
      teamFighters(team).forEach((ally) => setFx(ally, "cast", 0.5));
      addLog(`${synergyName(synergyById.get("ironChoir"))} ${t("activeSynergy")}.`, true);
    }
    if (ids.includes("coldGrave")) {
      const other = team === "player" ? "enemy" : "player";
      teamFighters(other).forEach((target) => {
        target.slowedUntil = Math.max(target.slowedUntil, 2.8);
        setFx(target, "hit", 0.4);
      });
      addLog(`${synergyName(synergyById.get("coldGrave"))} ${t("activeSynergy")}.`, true);
    }
  }
}

function applyOpeningAbilities() {
  state.battleFighters
    .filter((unit) => unit.alive && unit.id === "gravehook")
    .forEach((hook) => {
      const target = nearestEnemy(hook);
      if (!target) return;
      const direction = hook.team === "player" ? 1 : -1;
      const nextRow = target.row + direction;
      if (nextRow >= 0 && nextRow < ROWS && !isOccupied(nextRow, target.col, target.uid)) {
        target.row = nextRow;
        target.stunnedUntil = Math.max(target.stunnedUntil, 1.15);
        setFx(hook, `attack-${hook.id}`, 0.45);
        setFx(target, "hit", 0.35);
      }
    });
}

function tickBattle() {
  state.battleTime = Math.min(ROUND_LIMIT_SECONDS, state.battleTime + TICK_SECONDS);
  for (const fighter of state.battleFighters) {
    if (!fighter.alive) continue;
    applyTickSynergies(fighter);
    if (fighter.stunnedUntil > state.battleTime) continue;

    fighter.cooldown -= TICK_SECONDS;
    fighter.moveCooldown -= TICK_SECONDS;

    let acted = false;
    if (fighter.cooldown <= 0) {
      acted = performAction(fighter);
      if (acted) {
        const slow = fighter.slowedUntil > state.battleTime ? 1.45 : 1;
        fighter.cooldown = fighter.attackInterval * slow;
      }
    }
    if (!acted && fighter.moveCooldown <= 0) {
      moveTowardTarget(fighter);
      fighter.moveCooldown = fighter.slowedUntil > state.battleTime ? 0.88 : 0.55;
    }
  }

  const winner = getBattleWinner();
  render();
  if (winner) finishRound(winner.team, winner.reason);
}

function applyTickSynergies(fighter) {
  if (!fighter.synergyIds.includes("wildOath") || fighter.hp <= 0) return;
  if (state.battleTime >= fighter.nextRegen && fighter.hp < fighter.maxHp) {
    fighter.hp = Math.min(fighter.maxHp, fighter.hp + 4);
    fighter.nextRegen = state.battleTime + 1.1;
    setFx(fighter, "heal", 0.45);
  }
}

function performAction(fighter) {
  if (fighter.id === "oracle") {
    const ally = lowestInjuredAlly(fighter);
    if (ally) {
      ally.hp = Math.min(ally.maxHp, ally.hp + 16);
      setFx(fighter, `attack-${fighter.id}`, 0.55);
      setFx(ally, "heal", 0.48);
      return true;
    }
  }

  const target = nearestEnemy(fighter);
  if (!target || distance(fighter, target) > fighter.range) return false;
  resolveAttack(fighter, target);
  return true;
}

function resolveAttack(attacker, target) {
  setFx(attacker, `attack-${attacker.id}`, 0.5);
  let damage = attacker.damage;
  if (attacker.firstStrike) {
    damage = Math.round(damage * 1.45);
    attacker.firstStrike = false;
  }
  if (attacker.id === "shade" && attacker.shots % 3 === 2) damage = Math.round(damage * 1.35);

  applyDamage(target, damage, attacker);
  attacker.shots += 1;

  if (attacker.id === "cinder") {
    aliveEnemies(attacker)
      .filter((unit) => unit.uid !== target.uid && distance(target, unit) <= 1)
      .forEach((enemy) => applyDamage(enemy, Math.max(4, Math.round(attacker.damage * 0.45)), attacker));
  }
  if (attacker.id === "volt" && attacker.shots % 3 === 0) {
    const chain = aliveEnemies(attacker)
      .filter((unit) => unit.uid !== target.uid)
      .sort((a, b) => distance(target, a) - distance(target, b))[0];
    if (chain) applyDamage(chain, Math.round(attacker.damage * 0.72), attacker);
  }
  if (attacker.id === "frost" && target.alive) {
    target.slowedUntil = Math.max(target.slowedUntil, state.battleTime + 1.8);
  }
}

function applyDamage(target, amount, source) {
  let final = amount;
  if (target.id === "sentinel") final = Math.max(1, Math.round(final * 0.76));
  if (target.shield > 0) {
    const absorbed = Math.min(target.shield, final);
    target.shield -= absorbed;
    final -= absorbed;
  }
  target.hp -= final;
  setFx(target, "hit", 0.28);
  if (target.hp <= 0 && target.alive) {
    target.alive = false;
    target.hp = 0;
    addLog(`${unitName(unitById.get(source.id))} KO ${unitName(unitById.get(target.id))}.`);
  }
}

function moveTowardTarget(fighter) {
  const target = nearestEnemy(fighter);
  if (!target || distance(fighter, target) <= fighter.range) return;
  const candidates = [
    { row: fighter.row + Math.sign(target.row - fighter.row), col: fighter.col },
    { row: fighter.row, col: fighter.col + Math.sign(target.col - fighter.col) },
    { row: fighter.row, col: fighter.col - Math.sign(target.col - fighter.col) },
    { row: fighter.row - Math.sign(target.row - fighter.row), col: fighter.col },
  ].filter(
    (spot) =>
      spot.row >= 0 &&
      spot.row < ROWS &&
      spot.col >= 0 &&
      spot.col < COLS &&
      !isOccupied(spot.row, spot.col, fighter.uid),
  );
  if (!candidates.length) return;
  candidates.sort((a, b) => distance(a, target) - distance(b, target));
  fighter.row = candidates[0].row;
  fighter.col = candidates[0].col;
  setFx(fighter, "move", 0.32);
}

function finishRound(winner, reason) {
  if (battleTimer) window.clearInterval(battleTimer);
  battleTimer = null;

  const playerWon = winner === "player";
  if (playerWon) state.wins += 1;
  else state.losses += 1;

  const suffix = reason === "timeout" ? ` ${t("timeLimit")}` : "";
  addLog(playerWon ? `${t("wonRound")} ${suffix}` : `${t("lostRound")} ${suffix}`, true);

  if (state.wins >= WINS_TO_MATCH || state.losses >= WINS_TO_MATCH || state.round >= MAX_ROUNDS) {
    state.phase = "finished";
    state.matchOver = true;
    addLog(state.wins > state.losses ? t("matchWon") : t("matchLost"), true);
    render();
    return;
  }

  state.round += 1;
  state.phase = "planning";
  state.battleFighters = [];
  state.prepTime = 0;
  state.battleTime = 0;
  state.playerElixir = roundElixir(state.round);
  state.enemyElixir = roundElixir(state.round);
  state.selectedBenchUid = null;
  drawHands();
  addLog(t("revived"), true);
  startPrepTimer();
  startBotDraftLoop();
  render();
}

function render() {
  const remaining = getRemainingTime();
  const timeText = remaining.toFixed(1);
  const playerWaiting = waitingUnits(state.playerBench);
  const enemyWaiting = waitingUnits(state.enemyBench);
  const selectedUnit = getSelectedUnit();

  els.roundLabel.textContent = `${state.round}/${MAX_ROUNDS}`;
  els.scoreLabel.textContent = `${state.wins}-${state.losses}`;
  els.elixirLabel.textContent = state.playerElixir;
  els.timeLabel.textContent = timeText;
  els.clockLabel.textContent = timeText;
  els.phaseLabel.textContent = t(state.matchOver ? "complete" : state.phase);
  els.timerFill.style.width = `${Math.max(0, Math.min(100, (remaining / getCurrentLimit()) * 100))}%`;
  els.enemyDraftLabel.textContent = state.opponent === "Bot" ? t("bot") : state.opponent;
  els.benchCountLabel.textContent = `${playerWaiting.length}/${BENCH_LIMIT}`;
  els.enemyBenchCountLabel.textContent = `${enemyWaiting.length}/${BENCH_LIMIT}`;
  els.selectionLabel.textContent = getSelectionLabel();

  els.fightButton.disabled = state.phase !== "planning" || state.matchOver;
  els.reloadButton.disabled = state.phase !== "planning" || state.matchOver || state.playerElixir < RELOAD_COST;
  els.sellButton.disabled = state.phase !== "planning" || state.matchOver || !selectedUnit;
  els.sellButton.textContent = selectedUnit ? `${t("sell")} +${getSellValue(selectedUnit)}` : t("sell");
  els.matchButton.disabled = state.phase === "battle";
  els.statusLine.textContent = getStatusLine();

  renderHand(els.playerHand, state.playerHand, "player");
  renderHand(els.enemyHand, state.enemyHand, "enemy");
  renderBench();
  renderBoard();
  renderSummaries();
  renderLog();
}

function renderHand(container, hand, owner) {
  container.replaceChildren();
  if (owner === "enemy") {
    renderHiddenHand(container);
    return;
  }
  if (!hand.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = t("soldOut");
    container.append(empty);
    return;
  }
  for (const id of hand) {
    const unit = unitById.get(id);
    const button = document.createElement("button");
    button.className = "unit-card";
    button.type = "button";
    button.disabled = state.phase !== "planning" || !canBuyShopUnit("player", id);
    button.draggable = !button.disabled;
    button.addEventListener("click", () => {
      if (suppressShopClick) {
        suppressShopClick = false;
        return;
      }
      buyUnit(id);
    });
    button.addEventListener("dragstart", (event) => {
      if (button.disabled) {
        event.preventDefault();
        return;
      }
      event.dataTransfer.setData("application/x-shop-unit", id);
      event.dataTransfer.setData("text/plain", `shop:${id}`);
    });
    button.addEventListener("pointerdown", (event) => beginShopPointerDrag(event, id));
    button.append(renderCharacter(unit, "small"), renderCardBody(unit, owner));
    container.append(button);
  }
}

function renderHiddenHand(container) {
  for (let index = 0; index < HAND_SIZE; index += 1) {
    const card = document.createElement("div");
    card.className = "hidden-card";
    const mark = document.createElement("div");
    mark.className = "card-back";
    mark.textContent = "?";
    const label = document.createElement("span");
    label.textContent = t("hiddenPool");
    card.append(mark, label);
    container.append(card);
  }
}

function renderCardBody(unit, owner) {
  const body = document.createElement("div");
  const name = document.createElement("strong");
  name.textContent = unitName(unit);
  const desc = document.createElement("p");
  desc.textContent = unitDesc(unit);
  const meta = document.createElement("div");
  meta.className = "unit-meta";
  meta.append(
    chip(`${unit.cost} ${t("elixir")}`),
    chip(unit.trait),
    chip(`${t("stock")}: ${rosterStockRemaining(unit.id)}/${STOCK_PER_UNIT}`),
    chip(owner === "player" ? t("buy") : t("claimed"), owner),
  );
  const bench = owner === "player" ? state.playerBench : state.enemyBench;
  const combos = getPotentialSynergies(unit.id, bench);
  if (combos.length) meta.append(chip(`${t("combo")}: ${combos.map(synergyName).join(", ")}`));
  body.append(name, desc, meta);
  return body;
}

function renderBench() {
  renderBenchSide(els.bench, waitingUnits(state.playerBench), "player");
  renderBenchSide(els.enemyBench, waitingUnits(state.enemyBench), "enemy");
}

function renderBenchSide(container, bench, owner) {
  container.replaceChildren();
  for (let index = 0; index < BENCH_LIMIT; index += 1) {
    const unit = bench[index];
    const card = document.createElement(owner === "player" ? "button" : "div");
    card.className = "bench-card";
    if (owner === "player") card.type = "button";
    if (!unit) {
      card.innerHTML = `<small>${t("emptyBench")}</small>`;
      if (owner === "player") {
        card.addEventListener("click", returnSelectedToBench);
        card.addEventListener("dragover", (event) => {
          if (state.phase === "planning") event.preventDefault();
        });
        card.addEventListener("drop", (event) => {
          event.preventDefault();
          moveBenchUnitToBench(event.dataTransfer.getData("text/plain"));
        });
      }
      container.append(card);
      continue;
    }
    if (owner === "player") {
      card.draggable = true;
      card.dataset.uid = unit.uid;
      card.setAttribute("aria-pressed", String(state.selectedBenchUid === unit.uid));
      card.addEventListener("click", () => selectBenchUnit(unit.uid));
      card.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", unit.uid);
      });
      card.addEventListener("pointerdown", (event) => beginPointerDrag(event, unit.uid));
    }
    card.append(renderCharacter(unitById.get(unit.id), "tiny", getUnitStar(unit)));
    const label = document.createElement("small");
    label.textContent = `${unitName(unitById.get(unit.id))} ${unitLevelText(unit)}`;
    card.append(label);
    container.append(card);
  }
}

function renderBoard() {
  els.board.replaceChildren();
  const boardUnits =
    state.phase === "battle"
      ? state.battleFighters.filter((unit) => unit.alive)
      : [...state.enemyBench, ...state.playerBench].filter((unit) => unit.row != null && unit.col != null);

  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.setAttribute("role", "button");
      cell.setAttribute("tabindex", "0");
      cell.classList.add(isPlayerZone(row) ? "player-zone" : "enemy-zone");
      if (isPlayerZone(row)) cell.classList.add("placeable");
      if (state.selectedBenchUid && isPlayerZone(row)) cell.classList.add("selected");

      const unit = boardUnits.find((candidate) => candidate.row === row && candidate.col === col);
      if (unit) cell.append(renderUnitToken(unit));

      cell.addEventListener("click", () => handleCellClick(row, col));
      cell.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleCellClick(row, col);
        }
      });
      cell.addEventListener("dragover", (event) => {
        if (state.phase === "planning" && isPlayerZone(row)) event.preventDefault();
      });
      cell.addEventListener("drop", (event) => {
        event.preventDefault();
        const shopUnitId =
          event.dataTransfer.getData("application/x-shop-unit") ||
          event.dataTransfer.getData("text/plain").replace(/^shop:/, "");
        const text = event.dataTransfer.getData("text/plain");
        if (text.startsWith("shop:") || event.dataTransfer.getData("application/x-shop-unit")) {
          buyUnitAtCell(shopUnitId, row, col);
          return;
        }
        moveBenchUnitToCell(text, row, col);
      });

      els.board.append(cell);
    }
  }
}

function renderUnitToken(unit) {
  const template = unitById.get(unit.id);
  const token = document.createElement("div");
  token.className = `unit-token ${unit.team}`;
  if (state.phase === "planning" && unit.team === "player") {
    token.draggable = true;
    token.dataset.uid = unit.uid;
    token.addEventListener("dragstart", (event) => {
      event.stopPropagation();
      event.dataTransfer.setData("text/plain", unit.uid);
    });
    token.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      beginPointerDrag(event, unit.uid);
    });
  }
  if (unit.shield > 0) token.classList.add("shielded");
  if (unit.fx && unit.fxUntil > state.battleTime) token.classList.add(unit.fx);
  const starLevel = getUnitStar(unit);
  token.append(renderCharacter(template, "tiny", starLevel));
  const name = document.createElement("div");
  name.className = "name";
  name.textContent = `${unitName(template)} ${unitLevelText(unit)}`;
  const hp = document.createElement("div");
  hp.className = "hp";
  const fill = document.createElement("span");
  const maxHp = unit.maxHp || template.hp;
  const current = unit.hp == null ? maxHp : Math.max(0, unit.hp + (unit.shield || 0));
  fill.style.width = `${Math.max(0, Math.min(100, (current / maxHp) * 100))}%`;
  hp.append(fill);
  const star = document.createElement("span");
  star.className = "star-badge";
  star.textContent = `${t("level")}${starLevel}`;
  token.append(star, name, hp);
  return token;
}

function renderCharacter(unit, size = "", star = 1) {
  const character = document.createElement("div");
  character.className = `character unit-${unit.id} ${size} star-${Math.min(MAX_STAR, star || 1)}`.trim();
  character.style.setProperty("--unit-color", unit.color);
  character.style.setProperty("--unit-dark", unit.dark);
  const portraitIndex = unitPortraitIndex.get(unit.id);
  if (portraitIndex != null) {
    character.classList.add("has-portrait");
    character.style.setProperty("--portrait-x", `${(portraitIndex % 5) * 25}%`);
    character.style.setProperty("--portrait-y", `${Math.floor(portraitIndex / 5) * 100}%`);
    const portrait = document.createElement("span");
    portrait.className = "portrait";
    character.append(portrait);
  }
  ["aura", "cape", "body", "head", "helm", "arm left", "arm right", "offhand", "weapon", "sigil", "sparkle"].forEach((part) => {
    const element = document.createElement("span");
    element.className = part;
    character.append(element);
  });
  return character;
}

function renderSummaries() {
  const playerSynergies = getActiveSynergies(state.playerBench);
  const unitText = state.playerBench.length
    ? state.playerBench.map((unit) => unitName(unitById.get(unit.id))).join(" + ")
    : t("noUnits");
  els.teamSummary.textContent = unitText;
  els.synergySummary.textContent = playerSynergies.length
    ? playerSynergies.map((synergy) => `${synergyName(synergy)}: ${synergyDesc(synergy)}`).join(" / ")
    : t("noSynergy");
}

function renderLog() {
  els.battleLog.replaceChildren();
  for (const entry of state.log.slice(0, 24)) {
    const item = document.createElement("li");
    item.className = entry.important ? "important" : "";
    item.textContent = entry.text;
    els.battleLog.append(item);
  }
}

function selectBenchUnit(uid) {
  if (state.phase !== "planning") return;
  state.selectedBenchUid = state.selectedBenchUid === uid ? null : uid;
  addLog(t("selectBench"));
  render();
}

function handleCellClick(row, col) {
  if (state.phase !== "planning") return;
  if (!state.selectedBenchUid) {
    const unit = state.playerBench.find((benchUnit) => benchUnit.row === row && benchUnit.col === col);
    if (unit) selectBenchUnit(unit.uid);
    return;
  }
  moveBenchUnitToCell(state.selectedBenchUid, row, col);
}

function moveBenchUnitToCell(uid, row, col) {
  if (state.phase !== "planning") return;
  if (!isPlayerZone(row)) {
    addLog(t("placeBottom"));
    render();
    return;
  }
  const unit = state.playerBench.find((benchUnit) => benchUnit.uid === uid);
  if (!unit) return;
  const occupant = state.playerBench.find(
    (benchUnit) => benchUnit.uid !== uid && benchUnit.row === row && benchUnit.col === col,
  );
  if (occupant) {
    occupant.row = unit.row;
    occupant.col = unit.col;
  }
  unit.row = row;
  unit.col = col;
  state.selectedBenchUid = null;
  render();
}

function returnSelectedToBench() {
  if (!state.selectedBenchUid) return;
  moveBenchUnitToBench(state.selectedBenchUid);
}

function moveBenchUnitToBench(uid) {
  if (state.phase !== "planning") return;
  const unit = state.playerBench.find((benchUnit) => benchUnit.uid === uid);
  if (!unit) return;
  if (unit.row != null && unit.col != null && waitingUnits(state.playerBench).length >= BENCH_LIMIT) {
    addLog(t("capReached"));
    render();
    return;
  }
  unit.row = null;
  unit.col = null;
  state.selectedBenchUid = null;
  addLog(t("returnBench"));
  render();
}

function beginPointerDrag(event, uid) {
  if (state.phase !== "planning") return;
  cancelDragState();
  event.preventDefault();
  const source = event.currentTarget;
  const ghost = source.cloneNode(true);
  ghost.classList.add("drag-ghost");
  ghost.style.position = "fixed";
  ghost.style.left = `${event.clientX - 34}px`;
  ghost.style.top = `${event.clientY - 34}px`;
  ghost.style.width = "74px";
  ghost.style.pointerEvents = "none";
  ghost.style.zIndex = "1000";
  document.body.append(ghost);
  dragging = { uid, ghost };
}

function beginShopPointerDrag(event, unitId) {
  if (state.phase !== "planning" || !canBuyShopUnit("player", unitId)) return;
  if (dragging || pendingShopDrag?.ghost) cancelDragState();
  pendingShopDrag = {
    unitId,
    source: event.currentTarget,
    startX: event.clientX,
    startY: event.clientY,
    ghost: null,
  };
}

function activateShopPointerDrag(event) {
  if (!pendingShopDrag || pendingShopDrag.ghost) return;
  const moved = Math.hypot(event.clientX - pendingShopDrag.startX, event.clientY - pendingShopDrag.startY);
  if (moved < 9) return;
  const ghost = pendingShopDrag.source.cloneNode(true);
  ghost.classList.add("drag-ghost", "shop-drag-ghost");
  ghost.style.position = "fixed";
  ghost.style.left = `${event.clientX - 72}px`;
  ghost.style.top = `${event.clientY - 44}px`;
  ghost.style.width = "145px";
  ghost.style.pointerEvents = "none";
  ghost.style.zIndex = "1000";
  document.body.append(ghost);
  pendingShopDrag.ghost = ghost;
}

function onPointerMove(event) {
  if (pendingShopDrag) {
    activateShopPointerDrag(event);
    if (pendingShopDrag.ghost) {
      event.preventDefault();
      pendingShopDrag.ghost.style.left = `${event.clientX - 72}px`;
      pendingShopDrag.ghost.style.top = `${event.clientY - 44}px`;
    }
  }
  if (dragging) {
    dragging.ghost.style.left = `${event.clientX - 34}px`;
    dragging.ghost.style.top = `${event.clientY - 34}px`;
  }
}

function onPointerUp(event) {
  if (pendingShopDrag) {
    const shopDrag = pendingShopDrag;
    pendingShopDrag = null;
    if (shopDrag.ghost) {
      suppressShopClick = true;
      shopDrag.ghost.remove();
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const cell = target?.closest?.(".cell");
      if (cell) {
        buyUnitAtCell(shopDrag.unitId, Number(cell.dataset.row), Number(cell.dataset.col));
      }
    }
  }
  if (!dragging) return;
  const { uid, ghost } = dragging;
  dragging = null;
  ghost.remove();
  const target = document.elementFromPoint(event.clientX, event.clientY);
  const cell = target?.closest?.(".cell");
  if (cell) {
    moveBenchUnitToCell(uid, Number(cell.dataset.row), Number(cell.dataset.col));
    return;
  }
  const benchCard = target?.closest?.("#bench .bench-card");
  if (benchCard) {
    moveBenchUnitToBench(uid);
  }
}

function cancelDragState() {
  if (pendingShopDrag?.ghost) pendingShopDrag.ghost.remove();
  if (dragging?.ghost) dragging.ghost.remove();
  pendingShopDrag = null;
  dragging = null;
}

function firstOpenSpot(team, unit) {
  const rows = team === "player" ? [unit.range >= 3 ? 5 : 3, 4, 5, 3] : [unit.range >= 3 ? 0 : 2, 1, 0, 2];
  const cols = [2, 1, 3, 0, 4];
  const occupied = team === "player" ? state.playerBench : state.enemyBench;
  for (const row of rows) {
    for (const col of cols) {
      if (!occupied.some((benchUnit) => benchUnit.row === row && benchUnit.col === col)) {
        return { row, col };
      }
    }
  }
  return null;
}

function enemyAutoPosition(unit) {
  return firstOpenSpot("enemy", unit) || { row: 0, col: 2 };
}

function openSpotExists(team) {
  return catalog.some((unit) => firstOpenSpot(team, unit));
}

function getBattleWinner() {
  const playerAlive = state.battleFighters.some((unit) => unit.alive && unit.team === "player");
  const enemyAlive = state.battleFighters.some((unit) => unit.alive && unit.team === "enemy");
  if (playerAlive && !enemyAlive) return { team: "player", reason: "wipe" };
  if (!playerAlive && enemyAlive) return { team: "enemy", reason: "wipe" };
  if (!playerAlive && !enemyAlive) {
    return { team: totalHealth("player") >= totalHealth("enemy") ? "player" : "enemy", reason: "wipe" };
  }
  if (getRemainingTime() <= 0) {
    return { team: totalHealth("player") >= totalHealth("enemy") ? "player" : "enemy", reason: "timeout" };
  }
  return null;
}

function getStatusLine() {
  if (state.matchOver) return state.wins > state.losses ? t("matchWon") : t("matchLost");
  if (state.phase === "battle") return `${t("battle")} ${ROUND_LIMIT_SECONDS}s`;
  if (state.phase === "matchmaking") return t("finding");
  return `${t("matchReady")} ${t("prep")}: ${getRemainingTime().toFixed(1)}s. ${t("statusCap")}`;
}

function getSelectionLabel() {
  const selected = getSelectedUnit();
  return selected ? `${t("move")} ${unitName(unitById.get(selected.id))}` : t("none");
}

function getActiveSynergies(units) {
  const ids = new Set(units.map((unit) => unit.id));
  return synergies.filter((synergy) => synergy.units.every((unitId) => ids.has(unitId)));
}

function getPotentialSynergies(unitId, existingUnits) {
  const ids = new Set(existingUnits.map((unit) => unit.id));
  ids.add(unitId);
  return synergies.filter(
    (synergy) => synergy.units.includes(unitId) && synergy.units.every((candidateId) => ids.has(candidateId)),
  );
}

function lowestInjuredAlly(fighter) {
  return state.battleFighters
    .filter(
      (unit) =>
        unit.alive &&
        unit.team === fighter.team &&
        unit.uid !== fighter.uid &&
        unit.hp < unit.maxHp * 0.86 &&
        distance(fighter, unit) <= 3,
    )
    .sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
}

function nearestEnemy(fighter) {
  return aliveEnemies(fighter).sort((a, b) => {
    const distanceDiff = distance(fighter, a) - distance(fighter, b);
    if (distanceDiff !== 0) return distanceDiff;
    return a.hp - b.hp;
  })[0];
}

function aliveEnemies(fighter) {
  return state.battleFighters.filter((unit) => unit.alive && unit.team !== fighter.team);
}

function teamFighters(team) {
  return state.battleFighters.filter((unit) => unit.alive && unit.team === team);
}

function totalHealth(team) {
  return teamFighters(team).reduce((sum, unit) => sum + unit.hp + unit.shield, 0);
}

function waitingUnits(units) {
  return units.filter((unit) => unit.row == null || unit.col == null);
}

function rosterFor(owner) {
  return owner === "enemy" ? state.enemyBench : state.playerBench;
}

function getUnitCopies(unit) {
  return Math.max(1, Math.min(COPIES_FOR_MAX_STAR, unit.copies ?? unit.star ?? 1));
}

function getUnitStar(unit) {
  const copies = getUnitCopies(unit);
  if (copies >= COPIES_FOR_MAX_STAR) return MAX_STAR;
  if (copies >= 2) return 2;
  return 1;
}

function unitLevelText(unit) {
  return `${t("level")}${getUnitStar(unit)} (${getUnitCopies(unit)}/${COPIES_FOR_MAX_STAR})`;
}

function addUnitCopy(unit) {
  unit.copies = Math.min(COPIES_FOR_MAX_STAR, getUnitCopies(unit) + 1);
  unit.star = getUnitStar(unit);
}

function canOfferShopUnit(owner, unitId) {
  return stockAvailableForShop(owner, unitId) > 0 && canAddRosterCopy(owner, unitId);
}

function canAddRosterCopy(owner, unitId) {
  const existing = rosterFor(owner).find((unit) => unit.id === unitId);
  return !existing || getUnitCopies(existing) < COPIES_FOR_MAX_STAR;
}

function findMergeTarget(owner, unitId) {
  return rosterFor(owner).find((unit) => unit.id === unitId && getUnitCopies(unit) < COPIES_FOR_MAX_STAR);
}

function isRosterCellOccupied(owner, row, col, ignoredUid = null) {
  return rosterFor(owner).some(
    (unit) => unit.uid !== ignoredUid && unit.row === row && unit.col === col,
  );
}

function ownedCount(unitId) {
  return [...state.playerBench, ...state.enemyBench]
    .filter((unit) => unit.id === unitId)
    .reduce((sum, unit) => sum + getUnitCopies(unit), 0);
}

function stockAvailableForShop(owner, unitId) {
  return Math.max(0, STOCK_PER_UNIT - ownedCount(unitId));
}

function rosterStockRemaining(unitId) {
  return Math.max(0, STOCK_PER_UNIT - ownedCount(unitId));
}

function canBuyShopUnit(owner, unitId) {
  const hand = owner === "enemy" ? state.enemyHand : state.playerHand;
  return hand.includes(unitId) && canOfferShopUnit(owner, unitId);
}

function removeOneFromHand(hand, unitId) {
  const index = hand.indexOf(unitId);
  if (index < 0) return hand;
  return [...hand.slice(0, index), ...hand.slice(index + 1)];
}

function isOccupied(row, col, ignoredUid = null) {
  return state.battleFighters.some(
    (unit) => unit.alive && unit.uid !== ignoredUid && unit.row === row && unit.col === col,
  );
}

function distance(a, b) {
  return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
}

function isPlayerZone(row) {
  return row >= 3;
}

function getRemainingTime() {
  if (state.phase === "battle") return Math.max(0, ROUND_LIMIT_SECONDS - state.battleTime);
  if (state.phase === "planning") return Math.max(0, PREP_LIMIT_SECONDS - state.prepTime);
  return getCurrentLimit();
}

function getCurrentLimit() {
  return state.phase === "battle" ? ROUND_LIMIT_SECONDS : PREP_LIMIT_SECONDS;
}

function setFx(unit, fx, duration) {
  unit.fx = fx;
  unit.fxUntil = state.battleTime + duration;
}

function chip(text, tone = null) {
  const element = document.createElement("span");
  element.className = tone ? `chip ${tone}` : "chip";
  element.textContent = text;
  return element;
}

function addLog(text, important = false) {
  state.log.unshift({ text, important });
}

function t(key) {
  return translations[state.lang]?.[key] || translations.en[key] || key;
}

function localized(value) {
  return value?.[state.lang] || value?.en || "";
}

function unitName(unit) {
  return localized(unit.name);
}

function unitDesc(unit) {
  return localized(unit.desc);
}

function synergyName(synergy) {
  return localized(synergy.name);
}

function synergyDesc(synergy) {
  return localized(synergy.desc);
}
