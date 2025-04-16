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
    path: "/shop-with-sidebar",
  },
  {
    id: 6,
    title: "Shop",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "By Manufacturer",
        newTab: false,
        path: "/fds",
        submenu: [
          {
            id: 999,
            title: "Atlas",
            newTab: false,
            path: "/shop-without-sidebar",
          },
          {
            id: 998,
            title: "Bachmann",
            newTab: false,
            path: "/shop-without-sidebar",
          },
          {
            id: 997,
            title: "Lionel",
            newTab: false,
            path: "/shop-without-sidebar",
          },
          {
            id: 996,
            title: "MTH",
            newTab: false,
            path: "/shop-without-sidebar",
          },
        ]
      },
      {
        id: 62,
        title: "By Scale",
        newTab: false,
        path: "/shop-without-sidebar",
        submenu: [
          {
            id: 895,
            title: "G",
            newTab: false,
            path: "/shop-without-sidebar",
          },
          {
            id: 995,
            title: "O",
            newTab: false,
            path: "/shop-without-sidebar",
          },
          {
            id: 894,
            title: "S",
            newTab: false,
            path: "/shop-without-sidebar",
          },
          {
            id: 994,
            title: "HO",
            newTab: false,
            path: "/shop-without-sidebar",
          },
          {
            id: 993,
            title: "N",
            newTab: false,
            path: "/shop-without-sidebar",
          },
          {
            id: 992,
            title: "Z",
            newTab: false,
            path: "/shop-without-sidebar",
          },
        ]
      },
      {
        id: 64,
        title: "Road Name",
        newTab: false,
        path: "/checkout",
        submenu: [
          {
            id: 991,
            title: "Eastern Railroads",
            newTab: false,
            path: "/shop-without-sidebar",
          },
          {
            id: 990,
            title: "Southern Railroads",
            newTab: false,
            path: "/shop-without-sidebar",
          },
          {
            id: 989,
            title: "Midwestern Railroads",
            newTab: false,
            path: "/shop-without-sidebar",
          },
          {
            id: 988,
            title: "Western Railroads",
            newTab: false,
            path: "/shop-without-sidebar",
          },
        ]
      },
      {
        id: 65,
        title: "Themed Collection",
        newTab: false,
        path: "/cart",
      },
      {
        id: 66,
        title: "Train Sets",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 67,
        title: "Buildings, Layout, & Track",
        newTab: false,
        path: "/signin",
      },
      {
        id: 68,
        title: "Transformers & Controllers",
        newTab: false,
        path: "/signup",
      },
      {
        id: 69,
        title: "Pins & Collectibles",
        newTab: false,
        path: "/my-account",
      },
      // {
      //   id: 70,
      //   title: "Contact",
      //   newTab: false,
      //   path: "/contact",
      // },
      // {
      //   id: 62,
      //   title: "Error",
      //   newTab: false,
      //   path: "/error",
      // },
      // {
      //   id: 63,
      //   title: "Mail Success",
      //   newTab: false,
      //   path: "/mail-success",
      // },
    ],
  },
  {
    id: 7,
    title: "blogs",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 71,
        title: "Tent Sales",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 72,
        title: "Train Shows",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      // {
      //   id: 73,
      //   title: "Blog details with sidebar",
      //   newTab: false,
      //   path: "/blogs/blog-details-with-sidebar",
      // },
      {
        id: 74,
        title: "Blog details",
        newTab: false,
        path: "/blogs/blog-details",
      },
    ],
  },
  {
    id: 1000,
    title: "Sell Your Trains",
    newTab: false,
    path: "/",
  },
  {
    id: 4,
    title: "FAQ",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
];
