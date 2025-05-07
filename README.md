# Brady Trains – E-Commerce Site Remodel

Brady Trains is a fully responsive, modern e-commerce site remodel for a model train store. Built with Next.js, TypeScript, and Tailwind CSS, the project was adapted from a template and heavily customized to deliver a production-quality frontend optimized for both desktop and mobile users.

This project showcases product-focused UI/UX design, practical filtering/search logic, and clean component structure — ideal for hobbyist-driven inventory like model trains.

---

## 🔨 Tech Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **React**
- **Swiper.js** (carousel)
- No backend — product data is stored and filtered via a local array

---

## ✨ Key Features & Changes

### 🛒 Product & Shop Enhancements
- Replaced placeholder products with realistic model train inventory
- Added structured fields to product data (e.g., `scale`, `manufacturer`, `category`, `collection`) to support detailed filtering
- Updated all product images for a more authentic and polished look

### 🔍 Search & Filtering
- Implemented full **search functionality** with query-based results
- Added dynamic filters for:
  - Scale (e.g., O, N)
  - Manufacturer
  - Price Range
  - Price: High to Low & Low to High
- Additional custom select field added to search field to optimize for model trains

### 🎨 Visual & UX Improvements
- Updated color scheme (red primary), font sizes, margins, and layout spacing
- Reorganized navigation:
  - Updated link names and routing paths
  - Clean, logical structure based on real-world shop categories
- Adjusted component sizing and layout to fit more content and site theme
- All changes remain fully **responsive** across screen sizes

### 📄 Page Additions
- **FAQ Page** – custom-built to match site styling; designed from scratch
- **Sell Your Trains Page** – adapted from contact components, with a sidebar explaining the process
- Built all new pages/components to match the site's organizational structure and naming conventions

### 🧹 Codebase Cleanup
- Removed unused files, components, and images from the original template
- Renamed and reorganized folders for clarity and maintainability

---

## 📱 Mobile Optimization

All pages and components were developed or adjusted with mobile responsiveness in mind. Layouts adapt cleanly across breakpoints and maintain usability on small devices.

---

## 🚀 Getting Started (Local)

```bash
git clone https://github.com/your-username/brady-trains.git
cd brady-trains
npm install
npm run dev
