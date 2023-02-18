import { MenuAdmin } from '../../interfaces/core/menu-admin';

export const menuItemsSuperAdmin: MenuAdmin[] = [
  // Parent Dashboard
  {
    id: 'dashboard-parent',
    title: 'Dashboard',
    icon: 'dashboard',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'dashboard',
    href: null,
    target: null,
  },
  // Parent Customization
  {
    id: 'customization-parent',
    title: 'Customization',
    icon: 'dashboard_customize',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null,
  },
  // {
  //   id: 'customization-child-1',
  //   title: 'Category Menu',
  //   icon: 'arrow_right',
  //   hasSubMenu: false,
  //   parentId: 'customization-parent',
  //   routerLink: 'customization/all-category-menu',
  //   href: null,
  //   target: null
  // },

  {
    id: 'customization-child-2',
    title: 'Carousel',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'customization-parent',
    routerLink: 'customization/all-carousels',
    href: null,
    target: null,
  },
  {
    id: 'customization-child-3',
    title: 'Shop Information',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'customization-parent',
    routerLink: 'customization/shop-information',
    href: null,
    target: null,
  },
  {
    id: 'customization-child-4',
    title: 'Footer Data',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'customization-parent',
    routerLink: 'customization/footer-data',
    href: null,
    target: null,
  },
  // {
  //   id: 'customization-child-4',
  //   title: 'Story',
  //   icon: 'arrow_right',
  //   hasSubMenu: false,
  //   parentId: 'customization-parent',
  //   routerLink: 'customization/all-story',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'customization-child-5',
  //   title: 'Popup',
  //   icon: 'arrow_right',
  //   hasSubMenu: false,
  //   parentId: 'customization-parent',
  //   routerLink: 'customization/all-popup',
  //   href: null,
  //   target: null
  // },
  // Parent Products
  //catalog parent
  {
    id: 'catalog-parent',
    title: 'Catalog',
    icon: 'category',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null,
  },
  // {
  //   id: 'b1',
  //   title: 'Attributes',
  //   icon: 'arrow_right',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'attributes',
  //   href: null,
  //   target: null
  // },
  {
    id: 'catalog-child-1',
    title: 'Categories',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'catalog-parent',
    routerLink: 'catalog/all-categories',
    href: null,
    target: null,
  },
  {
    id: 'catalog-child-1',
    title: 'Sub Categories',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'catalog-parent',
    routerLink: 'catalog/all-sub-categories',
    href: null,
    target: null,
  },
  {
    id: 'catalog-child-2',
    title: 'Brands',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'catalog-parent',
    routerLink: 'catalog/all-brands',
    href: null,
    target: null,
  },
  {
    id: 'catalog-child-3',
    title: 'Tags',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'catalog-parent',
    routerLink: 'catalog/all-tags',
    href: null,
    target: null,
  },
  // {
  //   id: 'catalog-child-4',
  //   title: 'Variations',
  //   icon: 'arrow_right',
  //   hasSubMenu: false,
  //   parentId: 'catalog-parent',
  //   routerLink: 'catalog/all-variations',
  //   href: null,
  //   target: null
  // },
  // Parent Products
  {
    id: 'products-parent',
    title: 'Products',
    icon: 'view_list',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null,
  },
  {
    id: 'products-child-1',
    title: 'Products List',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'products-parent',
    routerLink: 'product/all-product',
    href: null,
    target: null,
  },
  {
    id: 'products-child-2',
    title: 'Add Product',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'products-parent',
    routerLink: 'product/add-product',
    href: null,
    target: null,
  },
  // {
  //   id: 'products-child-3',
  //   title: 'Test Variation',
  //   icon: 'arrow_right',
  //   hasSubMenu: false,
  //   parentId: 'products-parent',
  //   routerLink: 'product/test-variation',
  //   href: null,
  //   target: null
  // },

  // Parent Sales
  {
    id: 'sales-parent',
    title: 'Sales',
    icon: 'local_mall',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null,
  },
  {
    id: 'sales-child-1',
    title: 'Order List',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'sales-parent',
    routerLink: 'sales/all-orders',
    href: null,
    target: null,
  },
  {
    id: 'sales-child-2',
    title: 'Cancel List',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'sales-parent',
    routerLink: 'sales/cancel-orders',
    href: null,
    target: null,
  },


  {
    id: 'sales-child-2',
    title: 'Search By Invoice',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'sales-parent',
    routerLink: 'sales/search-by-invoice',
    href: null,
    target: null,
  },

  {
    id: 'sales-child-2',
    title: 'Add Order',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'sales-parent',
    routerLink: 'sales/add-order',
    href: null,
    target: null,
  },
  {
    id: 'sales-child-3',
    title: 'Transactions',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'sales-parent',
    routerLink: 'sales/transaction',
    href: null,
    target: null,
  },
  {
    id: 'sales-child-4',
    title: 'Shipping Charge',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'sales-parent',
    routerLink: 'sales/shipping-charge',
    href: null,
    target: null,
  },
  // {
  //   id: 'sales-child-3',
  //   title: 'Best Selling Products',
  //   icon: 'arrow_right',
  //   hasSubMenu: false,
  //   parentId: 'sales-parent',
  //   routerLink: 'best-sell-products',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'sales-child-3',
  //   title: 'Warranty Dashboard',
  //    icon: 'arrow_right',
  //   hasSubMenu: false,
  //   parentId: 'sales-parent',
  //   routerLink: 'warranty-dashboard',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'sales-child-3',
  //   title: 'Product Authenticators',
  //   icon: 'arrow_right',
  //   hasSubMenu: false,
  //   parentId: 'sales-parent',
  //   routerLink: 'product-authenticators',
  //   href: null,
  //   target: null
  // },
  // Parent Offer
  {
    id: 'offer-parent',
    title: 'Offers',
    icon: 'local_offer',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null,
  },
  {
    id: 'offer-child-1',
    title: 'Promo Offer',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'offer-parent',
    routerLink: 'offers/promo-offer',
    href: null,
    target: null,
  },
  // {
  //   id: 'offer-child-2',
  //   title: 'Coupon',
  //   icon: 'arrow_right',
  //   hasSubMenu: false,
  //   parentId: 'offer-parent',
  //   routerLink: 'offers/coupons',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'offer-child-3',
  //   title: 'Featured Product',
  //   icon: 'arrow_right',
  //   hasSubMenu: false,
  //   parentId: 'offer-parent',
  //   routerLink: 'featured-product',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'offer-child-4',
  //   title: 'Featured Category',
  //   icon: 'arrow_right',
  //   hasSubMenu: false,
  //   parentId: 'offer-parent',
  //   routerLink: 'featured-category',
  //   href: null,
  //   target: null
  // },
  // {
  //     id: 'offer-child-5',
  //     title: 'Product Banner',
  //     icon: 'arrow_right',
  //     hasSubMenu: false,
  //     parentId: 'offer-parent',
  //     routerLink: 'product-list-banner',
  //     href: null,
  //     target: null
  //   },
  // Parent Coupons
  {
    id: '8',
    title: 'Coupons',
    icon: 'vpn_key',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'coupons',
    href: null,
    target: null,
  },
  {
    id: '74BRY',
    title: 'Banner',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'banner',
    href: null,
    target: null,
  },
  {
    id: '932r',
    title: 'Promotional Offer',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'promotional-offer',
    href: null,
    target: null,
  },
  {
    id: '1024',
    title: 'Offer products',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'offer-products',
    href: null,
    target: null,
  },
  // Parent Gallery Folder
  {
    id: 'gallery-parent',
    title: 'Gallery',
    icon: 'collections',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null,
  },
  {
    id: 'gallery-child-1',
    title: 'Folders',
    icon: 'folder',
    hasSubMenu: false,
    parentId: 'gallery-parent',
    routerLink: 'gallery/all-folders',
    href: null,
    target: null,
  },
  {
    id: 'gallery-child-2',
    title: 'Images',
    icon: 'collections',
    hasSubMenu: false,
    parentId: 'gallery-parent',
    routerLink: 'gallery/all-images',
    href: null,
    target: null,
  },

  // Parent Additional Pages
  {
    id: 'additional-page-parent',
    title: 'Additional Pages',
    icon: 'offline_bolt',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null,
  },
  {
    id: 'additional-page-child-1',
    title: 'Page List',
    icon: 'group_add',
    hasSubMenu: false,
    parentId: 'additional-page-parent',
    routerLink: 'additional-pages/page-list',
    href: null,
    target: null,
  },
  // Parent Customers
  {
    id: 'user-parent',
    title: 'Customer',
    icon: 'people',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null,
  },
  {
    id: 'user-child-1',
    title: 'All Customer',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'user-parent',
    routerLink: 'user/all-user',
    href: null,
    target: null,
  },
  {
    id: 'user-child-2',
    title: 'Add Customer',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'user-parent',
    routerLink: 'user/add-user',
    href: null,
    target: null,
  },

  // Parent Vendor
  {
    id: 'vendor-parent',
    title: 'Vendor',
    icon: 'people',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null,
  },
  {
    id: 'vendor-child-1',
    title: 'All Vendor',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'vendor-parent',
    routerLink: 'vendors',
    href: null,
    target: null,
  },
  {
    id: 'vendor-child-2',
    title: 'Add Vendor',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'vendor-parent',
    routerLink: 'vendors/vendor-details/:id',
    href: null,
    target: null,
  },
  {
    id: 'vendor-child-3',
    title: 'Edit Vendor',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'vendor-parent',
    routerLink: 'vendors/edit-vendor/:id',
    href: null,
    target: null,
  },
  {
    id: 'vendor-child-4',
    title: 'Identifications Vendor',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'vendor-parent',
    routerLink: 'vendors/vendor-identifications/:id',
    href: null,
    target: null,
  },
  //admin control
  {
    id: 'admin-control-parent',
    title: 'Admin Control',
    icon: 'offline_bolt',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null,
  },
  // {
  //   id: '51',
  //   title: 'Roles',
  //   icon: 'offline_bolt',
  //   hasSubMenu: false,
  //   parentId: '631',
  //   routerLink: 'roles',
  //   href: null,
  //   target: null
  // },
  // Parent Users
  {
    id: 'admin-control-child-1',
    title: 'All Admins',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'admin-control-parent',
    routerLink: 'admin-control/all-admins',
    href: null,
    target: null,
  },
  // Parent
  //   {
  //     id: 'blog-area-parent',
  //     title: 'Blog Area',
  //     icon: 'rss_feed',
  //     hasSubMenu: true,
  //     parentId: null,
  //     routerLink: null,
  //     href: null,
  //     target: null
  //   },
  {
    id: 'blog-area-child-1',
    title: 'Blogs',
    // icon: 'people',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'blog-area-parent',
    routerLink: 'blogs/all-blogs',
    href: null,
    target: null,
  },
  {
    id: 'blog-area-child-2',
    title: 'Add Blog',
    // icon: 'people',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'blog-area-parent',
    routerLink: 'blogs/add-blog',
    href: null,
    target: null,
  },

  // Parent
  {
    id: 'contact-parent',
    title: 'Contact Us',
    icon: 'drafts',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null,
  },
  {
    id: 'contact-child-1',
    title: 'Subscribers',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'contact-parent',
    routerLink: 'contact-us/newsletter',
    href: null,
    target: null,
  },
  {
    id: 'contact-child-2',
    title: 'Contact Data',
    icon: 'arrow_right',
    hasSubMenu: false,
    parentId: 'contact-parent',
    routerLink: 'contact-us/contact-data',
    href: null,
    target: null,
  },

  // Parent Reviews
  // {
  //   id: 'reviews-and-discussion-parent',
  //   title: 'Review and Discussion',
  //   icon: 'offline_bolt',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: null,
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'reviews-and-discussion-child-1',
  //   title: 'Reviews',
  //   icon: 'reviews',
  //   hasSubMenu: false,
  //   parentId: 'reviews-and-discussion-parent',
  //   routerLink: 'reviews',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'reviews-and-discussion-child-2',
  //   title: 'Discussion',
  //   icon: 'reviews',
  //   hasSubMenu: false,
  //   parentId: 'reviews-and-discussion-parent',
  //   routerLink: 'discussions',
  //   href: null,
  //   target: null
  // },
  //backup and restore
  {
    id: 'review',
    title: 'Review',
    icon: 'warning',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'review',
    href: null,
    target: null,
  },
  // Parent Support
  {
    id: 'support-parent',
    title: 'Support',
    icon: 'support_agent',
    hasSubMenu: false,
    parentId: null,
    routerLink: null,
    href: 'https://softlabit.com/',
    target: '_blank',
  },
];
