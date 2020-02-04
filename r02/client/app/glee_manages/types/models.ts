export interface ArticleGroup {
  articles: Article[]
  publishedAt: string // TODO: Dateにする
}

export interface Article {
  title: string
  articleItems: ArticleItem[]
}

export interface ArticleItem {
  text: string
}
