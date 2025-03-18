export const SITE = {
  website: "https://ekrishnachaitanya2004.netlify.app", // Your deployed domain
  author: "Krishna Chaitanya Ethamukkala",
  profile: "https://ekrishnachaitanya2004.netlify.app/about/",
  desc: "A minimal, responsive, and SEO-friendly Astro blog theme.",
  title: "Time Machine",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // Show back button in post detail
  editPost: {
    url: "https://github.com/ekrishnachaitanya2004/Time-Machine/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
} as const;