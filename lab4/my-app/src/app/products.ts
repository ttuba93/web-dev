export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  rating: string;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple MacBook Air 13',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    price: 480550,
    description: 'A small chip. A grand breakthrough is the first chip designed specifically for Mac.',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
  },
  {
    id: 2,
    name: 'ASUS VivoBook 15',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h0c/62069150973982/asus-vivobook-15-k513ea-l12013w-90nb0sg2-m38550-serebristyj-106243075-1.jpg',
    price: 349990,
    description: 'The matrix in this laptop does not flicker in the entire range of brightness level changes.',
    rating: '5 stars',
    url:"https://kaspi.kz/shop/p/asus-vivobook-15-k513ea-l12013w-90nb0sg2-m38550-serebristyi-106243075/?c=750000000#!/item",
  },
  {
    id: 3,
    name: 'Huawei MateBook D14',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/ha1/52681694543902/huawei-matebook-d14-nobeld-wdi9a-seryj-105935084-1.jpg',
    price: 319990,
    description: 'Equipped with a bright IPC screen with a resolution of 1920*1080 pixels',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/huawei-matebook-d14-nobeld-wdi9a-serebristyi-105935084/?c=750000000#!/item",
  },
  {
    id: 4,
    name: 'Samsung Galaxy Watch4',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb0/h14/44807403274270/samsung-galaxy-watch-4-sm-r860-40-mm-rozovyi-102120670-1.jpg',
    price: 90680,
    description: 'For healthy sleep, the Galaxy Watch4 has a special tracker that determines the quality of your sleep.',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/samsung-galaxy-watch-4-sm-r860-40-mm-rozovyi-102120670/?c=750000000#!/item",
  },
  {
    id: 5,
    name: 'Huawei Watch Fit 2 Active',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9a/hc4/62048109756446/huawei-watch-fit-2-cernyj-105632660-1.jpg',
    price: 61211,
    description: 'Huawei Watch Fit 2 can play pre-downloaded music through a mobile app.',
    rating: '4,98 stars',
    url: "https://kaspi.kz/shop/p/huawei-watch-fit-2-active-chernyi-105632660/?c=750000000#!/item",
  },
  {
    id: 6,
    name: 'Instax MINI 11',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha9/h84/65597366108190/instax-mini-11-belyi-plenka-20-sht-103579524-1.jpg',
    price: 60700,
    description: 'Do you consider yourself a true connoisseur of classics and dream of an instant printing camera? Then Instax MINI 11 is designed for YOU.',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/instax-mini-11-belyi-plenka-20-sht-103579524/?c=750000000#!/item",
  },
  {
    id: 7,
    name: 'Canon EOS 4000D ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/he4/31852480069662/canon-eos-4000d-18-55-iii-cernyj-2240150-1.jpg',
    price: 176980,
    description: 'Creating interesting stories with high-quality photos and videos in Full HD format is easier than you think, because now there is an 18-megapixel EOS 4000D camera.',
    rating: '4,5 stars',
    url: "https://kaspi.kz/shop/p/canon-eos-4000d-18-55-iii-chernyi-2240150/?c=750000000#!/item",
  },
  {
    id: 8,
    name: 'Apple iPhone 13',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    price: 373598,
    description: 'New ultra-wide-angle camera sees more detail in dark vaults',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item",
  },
  {
    id: 9,
    name: 'Samsung Galaxy s22 Ultra',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/h31/48703240863774/samsung-galaxy-s22-ultra-12-512gb-cernyj-podarok-103675087-1.jpg',
    price: 495950,
    description: 'Its thin aluminum body impresses with its perfect shape. And the exquisite outlines of the main chambers seem to be buried in its smooth surface.',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-8-gb-128-gb-chernyi-103675087/?c=750000000#!/item",
  },
  {
    id: 10,
    name: 'Poco F4 GT',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcc/h87/50644574470174/xiaomi-poco-f4-gt-12-gb-256-gb-cernyj-104798981-1.jpg',
    price: 279275,
    description: 'Metal construction with elegant and delicate details AG glass provides a more pleasant feeling in the hand.',
    rating: '4,99 stars',
    url: "https://kaspi.kz/shop/p/poco-f4-gt-12-gb-256-gb-chernyi-104798981/?c=750000000#!/item",
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/