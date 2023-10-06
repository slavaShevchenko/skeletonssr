import { SITEMAP_ENDPOINT } from '@/api/endpoints'

export default defineEventHandler(async () => {
  const sitemapData = await $fetch(SITEMAP_ENDPOINT)

  function formatedSitemap({ news, categories, positions, services }) {
    const result = []

    services.forEach((item) => {
      result.push(`services/${item?.slug}`)
    })

    positions.forEach((item) => {
      result.push(`positions/${item?.slug}`)
    })

    categories.forEach((item) => {
      result.push(`blog/${item?.slug}`)
    })

    news.forEach((item) => {
      result.push(`blog/${item?.category?.slug}/${item?.slug}`)
    })

    return result
  }

  return formatedSitemap(sitemapData.data).map((p) => {
    return { loc: p }
  })
})
