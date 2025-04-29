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
    title: "New Items",
    newTab: false,
    path: "/shop",
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
        path: "/shop",
      },
      {
        id: 62,
        title: "By Scale",
        newTab: false,
        path: "/shop",
        submenu: [
          {
            id: 895,
            title: "G",
            newTab: false,
            path: "/shop",
          },
          {
            id: 995,
            title: "O",
            newTab: false,
            path: "/shop",
          },
          {
            id: 894,
            title: "S",
            newTab: false,
            path: "/shop",
          },
          {
            id: 994,
            title: "HO",
            newTab: false,
            path: "/shop",
          },
          {
            id: 993,
            title: "N",
            newTab: false,
            path: "/shop",
          },
          {
            id: 992,
            title: "Z",
            newTab: false,
            path: "/shop",
          },
        ]
      },
      {
        id: 64,
        title: "Road Name",
        newTab: false,
        path: "/shop",
        submenu: [
          {
            id: 991,
            title: "Eastern Railroads",
            newTab: false,
            path: "/shop",
          },
          {
            id: 990,
            title: "Southern Railroads",
            newTab: false,
            path: "/shop",
          },
          {
            id: 989,
            title: "Midwestern Railroads",
            newTab: false,
            path: "/shop",
          },
          {
            id: 988,
            title: "Western Railroads",
            newTab: false,
            path: "/shop",
          },
        ]
      },
      {
        id: 65,
        title: "Themed Collection",
        newTab: false,
        path: "/shop",
      },
      {
        id: 66,
        title: "Train Sets",
        newTab: false,
        path: "/shop",
      },
      {
        id: 67,
        title: "Buildings, Layout, & Track",
        newTab: false,
        path: "/shop",
      },
      {
        id: 68,
        title: "Transformers & Controllers",
        newTab: false,
        path: "/shop",
      },
      {
        id: 69,
        title: "Pins & Collectibles",
        newTab: false,
        path: "/shop",
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
        path: "/blogs/blog-details",
      },
      {
        id: 72,
        title: "Train Shows",
        newTab: false,
        path: "/blogs/blog-details",
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
