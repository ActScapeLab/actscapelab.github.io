interface StaffData {
  figPath: string
  firstName: string
  lastName: string
  grade:  string
  from: string
  hobby: string[]
  link: string
}
export const staffs: StaffData[] = [
  {
    figPath: "oyamajacket.jpg",
    firstName: "大山",
    lastName: "雄己",
    grade: "准教授",
    from: "埼玉県",
    hobby: ["ポケモン", "ヒップホップ", "麻雀"],
    link: "https://yuki-oyama.github.io/about.html"
  }
]


interface studentData {
  figPath: string
  firstName: string
  lastName: string
  grade:  string
  keywards: string[]
  from: string
  hobby: string[]
  journalKeys?: string[]
}
export const students: studentData[] = [
  {
    figPath: "murakami.png",
    firstName: "村上",
    lastName: "颯一朗",
    grade: "M2",
    keywards: ["マルチモーダルNDP", "街路空間再配分", "都市デザイン"],
    from: "埼玉県",
    hobby: ["ポケモン", "ヒップホップ", "麻雀"],
    journalKeys: [
      'Murakami2022_CPIJ',
      'Murakami2022_JSCEau',
      'Murakami2022_JSCEsp',
      'Murakami2021_JSCEall'
    ]
  },
  {
    figPath: "tamaki.jpg",
    firstName: "玉木",
    lastName: "悠太",
    grade: "M2",
    keywards: ["マルチモーダルNDP", "街路空間再配分", "都市デザイン"],
    from: "神奈川県",
    hobby: ["野球", "車", "バンド"]
  },
  {
    figPath: "tayama.jpg",
    firstName: "田山",
    lastName: "航平",
    grade: "M2",
    keywards: ["土地利用", "鉄道駅", "都市集積", "因果推論"],
    from: "神奈川県",
    hobby: ["カメラ", "ドライブ", "Jリーグ"]
  },
  {
    figPath: "sugiyama.jpg",
    firstName: "杉山",
    lastName: "航太郎",
    grade: "M2",
    keywards: ["人のいる空間", "ファジィ理論", "公共空間設計"],
    from: "静岡県",
    hobby: ["テニス", "お笑い鑑賞", "散歩"]
  },
  {
    figPath: "matsumura-03.jpg",
    firstName: "松村",
    lastName: "健太",
    grade: "M2",
    keywards: ["MaaS", "最適化", "経路推薦"],
    from: "山口県",
    hobby: ["研究室のHPを見ること", "高校野球", "落語鑑賞"],
    journalKeys: [
      'Matsumura2022_CPIJ',
      'Matsumura2022_JSCEau'
    ]
  },
  {
    figPath: "sunada.jpg",
    firstName: "砂田",
    lastName: "遼大",
    grade: "M2",
    keywards: ["物流", "歩行者空間"],
    from: "広島県",
    hobby: ["野球", "カフェ巡り", "筋トレ"]
  },
  {
    figPath: "okazaki.jpg",
    firstName: "岡崎",
    lastName: "凌太",
    grade: "M1",
    keywards: ["物流最適化", "配送計画", "需要マネジメント"],
    from: "愛知県",
    hobby: ["研究"],
    journalKeys: 
    [
      'Okazaki2023'
    ]
  },
  {
    figPath: "sakurai.jpg",
    firstName: "櫻井",
    lastName: "由伸",
    grade: "M1",
    keywards: ["災害", "リスク認知", "避難所選択"],
    from: "宮城県",
    hobby: ["ディズニー", "旅行", "スポーツ観戦"]
  },
  {
    figPath: "tada.jpg",
    firstName: "多田",
    lastName: "和生",
    grade: "M1",
    keywards: ["マルチモーダルNDP", "駐車場配置", "LRT"],
    from: "栃木県",
    hobby: ["水泳", "サッカー観戦", "ビアバー巡り"]
  },
  {
    figPath: "tetsusaki.jpg",
    firstName: "鉄崎",
    lastName: "詩乃",
    grade: "M1",
    keywards: ["街路景観", "景観認知", "街路空間設計"],
    from: "東京都",
    hobby: ["散歩", "美術館巡り", "旅行"]
  },
  {
    figPath: "imamura.jpg",
    firstName: "今村",
    lastName: "啓太",
    grade: "B4",
    keywards: ["経路選択行動", "街路"],
    from: "東京都",
    hobby: ["水泳", "野球", "LEGO"]
  },
  {
    figPath: "yoshimura.jpg",
    firstName: "吉村",
    lastName: "将",
    grade: "B4",
    keywards: ["都市開発", "インサイト分析", "地域活性化"],
    from: "和歌山県",
    hobby: ["食事", "盛り上げ"]
  },
  {
    figPath: "wada.jpg",
    firstName: "和田",
    lastName: "聡",
    grade: "B4",
    keywards: ["行動モデル"],
    from: "東京都",
    hobby: ["ゲーム", "将棋", "テニス"]
  }
]



// 卒論 or 修論を判別
export function getThesisType(grade:string) {
  switch (grade) {
    case 'B4':
      return '卒論'
    case 'M2':
      return '修論'
    case 'D3':
      return '博論'
    default:
      return 'unknown'
  }
}

export function getLink(link?:string, kind?:string) {
  if (link == undefined) {
    return undefined
  }
  else if (kind == 'staff'){
    return `member/staff/${link}`
  }

  else {
    return `member/current/${link}`
  }
}