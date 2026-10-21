const baseUrl = 'https://krzysteczko-m.pl'

const projects = [
  { slug: 'arex', date: '2026-10-21' },
  { slug: 'camera-capture', date: '2026-07-31' },
  { slug: 'gig-coordinator', date: '2026-05-10' },
  { slug: 'trixbrix', date: '2026-03-24' },
  { slug: 'pomoc-drogowa', date: '2026-03-14' },
  { slug: 'gabinet-psychologiczny', date: '2025-07-31' },
  { slug: 'zdrowo-aktywni', date: '2024-12-30' },
  { slug: 'pixel-picture', date: '2023-07-01' },
]

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projekty/${project.slug}`,
      lastModified: new Date(project.date),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ]
}
