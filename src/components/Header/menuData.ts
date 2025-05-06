import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "New Arrivals",
    newTab: false,
    path: "/shop-new-items",
  },
  {
    id: 6,
    title: "Shop",
    newTab: false,
    path: "/shop",
    submenu: [
      {
        id: 60,
        title: "All Products",
        newTab: false,
        path: "/shop",
      },
      {
        id: 61,
        title: "By Manufacturer",
        newTab: false,
        path: "/shop-by-manufacturer",
      },
      {
        id: 62,
        title: "By Scale",
        newTab: false,
        path: "/shop-by-scale",
      },
      {
        id: 66,
        title: "Train Sets",
        newTab: false,
        path: "/shop-train-sets",
      },
    ],
  },
  {
    id: 7,
    title: "blogs",
    newTab: false,
    path: "/blogs/blog-grid",
    submenu: [
      {
        id: 74,
        title: "All Blogs",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 71,
        title: "Tent Sales",
        newTab: false,
        path: "/blogs/tent-sales",
      },
      {
        id: 72,
        title: "Train Shows",
        newTab: false,
        path: "/blogs/train-shows",
      }
    ],
  },
  {
    id: 1000,
    title: "Sell Your Trains",
    newTab: false,
    path: "/sell-your-trains",
  },
  {
    id: 4,
    title: "FAQ",
    newTab: false,
    path: "/faq",
  },
  {
    id: 3,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
];
