/* Used as starting data for ShopPage */

const SHOP_DATA = {
  shopUrl: 'assets/images/shop',
  collections: [
    {
      id: 1,
      title: 'Digital SLR Cameras',
      routeName: 'dslr',
      items: [
        {
          id: 1,
          name: 'Canon EOS 80D Camera Body with 18-135mm f/3.5-5.6 IS USM Lens | Black',
          imageUrl: 'assets/images/shop/dslr/canon-eos-80d',
          price: 1399
        },
        {
          id: 2,
          name: 'Nikon D780 with AF-S 24-85mm ED VR Lens | Black',
          imageUrl: 'assets/images/shop/dslr/nikon-d780',
          price: 2899
        },
        {
          id: 3,
          name: 'Pentax K-1 Mark II with 24-70mm F2.8 Lens | Black',
          imageUrl: 'assets/images/shop/dslr/pentax-k1',
          price: 2800
        },
        {
          id: 4,
          name: 'Pentax KP Body | Silver',
          imageUrl: 'assets/images/shop/dslr/pentax-kp',
          price: 999
        }
      ]
    },
    {
      id: 2,
      title: 'Mirrorless Cameras',
      routeName: 'mirrorless',
      items: [
        {
          id: 5,
          name: 'Sony Alpha a7 III Digital Camera with 28-70mm Lens | Black',
          linkUrl: 'assets/images/shop/mirrorless/sony-alpha-a7',
          price: 2499
        },
        {
          id: 6,
          name: 'Panasonic GX80 Camera with 12-32mm Lens | Black',
          linkUrl: 'assets/images/shop/mirrorless/lumix-gx80',
          price: 489
        },
        {
          id: 7,
          name: 'Leica M10-P Edition Safari Camera Body',
          linkUrl: 'assets/images/shop/mirrorless/leica-m10-p',
          price: 8109
        },
        {
          id: 8,
          name: 'Sigma FP L Digital Camera Body',
          linkUrl: 'assets/images/shop/mirrorless/sigma-fp-l',
          price: 2299
        }
      ]
    },
    {
      id: 3,
      title: 'Bridge Cameras',
      routeName: 'bridge',
      items: [
        {
          id: 9,
          name: 'Panasonic Lumix FZ330 Bridge Camera | Black',
          linkUrl: 'assets/images/shop/bridge/lumix-fz330',
          price: 489
        },
        {
          id: 10,
          name: 'Kodak PixPro AZ401 Bridge Camera | White',
          linkUrl: 'assets/images/shop/bridge/kodak-pixpro',
          price: 189.99
        }
      ]
    },
    {
      id: 4,
      title: 'Compact Cameras',
      routeName: 'compact',
      items: [
        {
          id: 11,
          name: 'Panasonic Lumix DMC-TZ100 Digital Travel Camera | Silver',
          linkUrl: 'assets/images/shop/compact/lumix-dmc',
          price: 429
        },
        {
          id: 12,
          name: 'Canon PowerShot SX740 HS Compact Camera | Black',
          linkUrl: 'assets/images/shop/compact/canon-powershot',
          price: 429
        },
        {
          id: 13,
          name: 'Sony HX90V Cyber Shot Compact Camera | Black',
          linkUrl: 'assets/images/shop/compact/sony-cybershot',
          price: 349
        },
        {
          id: 14,
          name: 'Nikon Coolpix W300 geel OUTLET',
          linkUrl: 'assets/images/shop/compact/nikon-coolpix',
          price: 354
        }
      ]
    },
    {
      id: 5,
      title: 'Instant Cameras',
      routeName: 'instant',
      items: [
        {
          id: 15,
          name: 'Fujifilm Instax Mini 40 Instant Camera',
          linkUrl: 'assets/images/shop/instant/instax-mini40',
          price: 95.99
        },
        {
          id: 16,
          name: 'Fujifilm Instax Mini LiPlay Bundle | Elegant Black',
          linkUrl: 'assets/images/shop/instant/instax-mini-liplay',
          price: 159
        },
        {
          id: 17,
          name: 'Fujifilm Instax Mini 11 Instant Camera | Sky Blue',
          linkUrl: 'assets/images/shop/instant/instax-mini11',
          price: 75.99
        },
        {
          id: 18,
          name: 'Polaroid Now Instant Camera | Mint',
          linkUrl: 'assets/images/shop/instant/polaroid',
          price: 129.99
        }
      ]
    },
    {
      id: 6,
      title: 'GoPro & Action Cameras',
      routeName: 'action',
      items: [
        {
          id: 19,
          name: 'GoPro HERO9 Action Camera | Black',
          linkUrl: 'assets/images/shop/action/goPro-hero9',
          price: 429
        },
        {
          id: 20,
          name: 'GoPro MAX Black',
          linkUrl: 'assets/images/shop/action/goPro-max',
          price: 529
        },
        {
          id: 21,
          name: 'Kaiser Baas X450 Action Camera',
          linkUrl: 'assets/images/shop/action/kaiser-baas',
          price: 119
        }
      ]
    }
  ]
};

export default SHOP_DATA;
