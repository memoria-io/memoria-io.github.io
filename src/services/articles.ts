const BASE_URL = import.meta.env.BASE_URL
const ARTICLES_PATH = `${BASE_URL}articles`
const CONFIG_PATH = `${BASE_URL}config.json`

export interface ArticleConfig {
  filename: string
  title: string
  order: number
}

export interface Article {
  content: string
  filename: string
  title: string
}

export const loadArticle = async (filename: string): Promise<Article> => {
  const response = await fetch(`${ARTICLES_PATH}/${filename}`)
  if (!response.ok) {
    console.error(`Failed to load article: ${response.status} ${response.statusText}`)
    throw new Error(`Failed to load article: ${response.statusText}`)
  }

  const content = await response.text()
  const config = await loadConfig()
  const articleConfig = config.find(article => article.filename === filename)

  return {
    content,
    filename,
    title: articleConfig?.title || filename
  }
}

export const loadConfig = async (): Promise<ArticleConfig[]> => {
  const response = await fetch(CONFIG_PATH)
  if (!response.ok) {
    console.error(`Failed to load config: ${response.status} ${response.statusText}`)
    throw new Error('Failed to load articles configuration')
  }
  const data = await response.json()
  return data.articles.sort((a: ArticleConfig, b: ArticleConfig) => a.order - b.order)
} 