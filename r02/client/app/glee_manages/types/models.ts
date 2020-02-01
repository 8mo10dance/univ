export interface ArticleGroup {
  articles: Article[]
  publishedAt: Date
}

export interface Article {
  title: string
  articleItems: ArticleItem[]
}

export interface ArticleItem {
  text: string
}
