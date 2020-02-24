export interface UpdateHistory {
  description: string
  updateDate: string
}

export interface ArticleGroup {
  id: number
  articles: Article[]
  publishedAt: string // TODO: Dateにする
}

export interface Article {
  id: number
  title: string
  articleItems: ArticleItem[]
}

export interface ArticleItem {
  id: number
  text: string
}

export interface Link {
  id: number
  name: string
  url: string
}
