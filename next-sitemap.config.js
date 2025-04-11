/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bcs15-next.vercel.app/", // 🔁 thay bằng domain thật
  generateRobotsTxt: true, // Tự động tạo robots.txt
  sitemapSize: 5000, // Tối đa 5000 URLs mỗi file sitemap
  changefreq: "daily",
  priority: 0.7,
};
