export interface AppConfig {
  products: ProductMeta[]
  blogPosts: BlogPostMeta[]
  caseStudies: CaseStudyMeta[]
}

export interface ProductMeta {
  filePath: string
  title: string
  lastUpdated: string
}

export interface BlogPostMeta {
  filePath: string
  title: string
  lastUpdated: string
  excerpt: string
}

export interface CaseStudyMeta {
  id: string
  filePath: string
  title: string
  technologies: string[]
  logo: string
  excerpt: string
}

export const config = async (): Promise<AppConfig> => {
  const response = await fetch(`config.json`)

  if (!response.ok) {
    console.error(`Failed to load config: ${response.status} ${response.statusText}`)
    throw new Error('Failed to load articles configuration')
  }
  return await response.json()
} 