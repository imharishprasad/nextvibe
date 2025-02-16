# 📖 NextVibe Blog Feature - Guide to Get Started...  

Welcome to the NextVibe Blog Feature! 🎉 This is a fully open-source blog system that allows anyone to easily add and manage blog posts using simple Markdown (`.md`) files.  

---

## 🚀 Features  

- ✅ **Markdown-based blogging** – No need for a CMS! Just drop `.md` files in `/content/blogs/`.  
- ✅ **Metadata-driven structure** – Use front matter (title, author, date, etc.) for automatic rendering.  
- ✅ **Search & Filtering** – Search by keywords in titles/descriptions and filter by tags.  
- ✅ **SEO & Performance Optimized** – Fast and lightweight with Next.js + TailwindCSS.  
- ✅ **Fully Responsive UI** – Works seamlessly across devices.  

---

## 📂 Project Structure  

```plaintext
/nextvibe
 ├── /content
 │    ├── /blogs  <- 📌 Place your Markdown files here
 │         ├── <filename1>.md
 │         ├── <filename2>.md
 │         ├── <filename3>.md
 ├── src/components
 │    ├── BlogCard.tsx
 │    ├── BlogList.tsx
 │    ├── BlogSearch.tsx
 │    ├── BlogSidebar.tsx
 │    ├── BlogPagination.tsx
 ├── src/app
 │    ├── /blog
 │    │    ├── page.tsx  <- 📌 Blog listing page
 │    │    ├── [slug].tsx <- 📌 Blog details page (dynamic routing)

 📝 How to Add a New Blog Post

1️⃣ Create a Markdown file (.md) inside /content/blogs/.
2️⃣ Add metadata (front matter) at the top of the file.
3️⃣ Write your blog content using Markdown syntax.

Example Blog File (content/blogs/<filename>.md)
---
title: "Tech Space"
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit quis deleniti ex! Incidunt, perspiciatis?."
author: "Harish Prasad"
date: "2025-01-01"
tags: ["Technology", "Future", "AI", "BlockChain"]
thumbnail: "/images/AboutImage.png"
---

🔍 Search & Filtering

✅ Search by keyword – The blog supports searching by title and tags.
✅ Filter by tags – Click on a tag to filter relevant blogs.

How It Works Internally

	•	The blog posts are parsed from .md files dynamically.
	•	The search bar filters blogs based on title/description/tags.
	•	The pagination ensures smooth navigation for large blogs.

🎨 Customization

You can easily customize the UI by modifying:
	•	BlogCard.tsx – Blog preview card design
	•	BlogList.tsx – Main blog listing page
	•	BlogSidebar.tsx – Sidebar for latest blogs
	•	BlogPagination.tsx – Pagination component

💡 Want a different color theme? Just tweak the Tailwind CSS classes inside these components! 🎨

🛠 How to Run Locally
1️⃣ Clone this repository

git clone https://github.com/imharishprasd/nextvibe.git
cd nextvibe

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev

4️⃣ Open http://localhost:3000/blog in your browser 🚀

❤️ Contribute & Improve

Since this is open-source, feel free to:
	•	Add new features – PRs are welcome!
	•	Improve UI/UX – Have a better design? Suggest it!
	•	Fix bugs – Found an issue? Report or fix it!

🔗 GitHub Repo: https://github.com/imharishprasad/nextvibe
📢 License

This project is licensed under the MIT License – free to use, modify, and share!

🎉 Happy Blogging with NextVibe! 🚀