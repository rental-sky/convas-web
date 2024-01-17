import create from 'zustand';

export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  date_created: string;
  description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  related_ids: number[];
  images: ProductImage[];
}

export type ProducStore = {
  saleProducts: Product[];
  categoryProducts: {
    [key: string]: Product[];
  };
  currentProduct?: Product;
  cartProducts: Product[];
  fetchProductById: (id: string) => void;
  fetchProductsByIds: (ids: string) => void;
  setCurrentProduct: (currentProduct: Product) => void;
  setCartProducts: (cartProducts: Product[]) => void;
};

const useProductStore = create<ProducStore>((set, get) => ({
  saleProducts: [
    {
      id: 1,
      name: 'Tabla x 3dias',
      slug: 'table-snowboard-x-stream',
      date_created: '2021-01-15T09:00:00',
      description:
        'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
      price: '399.99',
      regular_price: '449.99',
      sale_price: '399.99',
      on_sale: true,
      related_ids: [2, 3, 4],
      images: [
        {
          id: 101,
          src: 'https://res.cloudinary.com/dja5ahopr/image/upload/c_scale,q_90,w_400/v1616685819/ctkagycm1sueztjri7wp.webp',
          alt: 'Tabla Snowboard X-Stream',
        },
      ],
    },
    {
      id: 2,
      name: 'Casco x6 dias',
      slug: 'casco-snowsafe-pro',
      date_created: '2021-02-20T10:30:00',
      description:
        'Casco de snowboard con tecnología de absorción de impactos y diseño cómodo.',
      price: '80.000',
      regular_price: '80.000',
      sale_price: '60.000',
      on_sale: true,
      related_ids: [1, 3, 4],
      images: [
        {
          id: 102,
          src: 'https://www.tradeinn.com/f/13813/138133858/cairn-casco-nitro.jpg',
          alt: 'Casco SnowSafe Pro',
        },
      ],
    },
    {
      id: 3,
      name: 'Botas x3 dias',
      slug: 'botas-snowmaster-flex',
      date_created: '2021-03-05T15:45:00',
      description:
        'Botas de snowboard con ajuste flexible y soporte óptimo para el tobillo.',
      price: '199.99',
      regular_price: '249.99',
      sale_price: '199.99',
      on_sale: true,
      related_ids: [1, 2, 4],
      images: [
        {
          id: 103,
          src: 'https://www.loopboardshop.com.ar/wp-content/uploads/sites/19/2023/07/D_675463-MLA70485728947_072023-O.jpg',
          alt: 'Casco SnowSafe Pro',
        },
      ],
    },
  ],
  categoryProducts: {
    tables: [
      {
        id: 100,
        name: 'Tabla',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 100,
            src: 'https://helpsnowboards.com/wp-content/uploads/2020/11/THE-MOUNTAIN-00_LD-scaled.jpg',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 101,
        name: 'Tabla',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: true,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 102,
            src: 'https://helpsnowboards.com/wp-content/uploads/2020/11/THE-MOUNTAIN-00_LD-scaled.jpg',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 103,
        name: 'Tabla',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 100,
            src: 'https://helpsnowboards.com/wp-content/uploads/2020/11/THE-MOUNTAIN-00_LD-scaled.jpg',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 104,
        name: 'Tabla',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 100,
            src: 'https://helpsnowboards.com/wp-content/uploads/2020/11/THE-MOUNTAIN-00_LD-scaled.jpg',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 105,
        name: 'Tabla',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 105,
            src: 'https://helpsnowboards.com/wp-content/uploads/2020/11/THE-MOUNTAIN-00_LD-scaled.jpg',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 106,
        name: 'Tabla',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 106,
            src: 'https://helpsnowboards.com/wp-content/uploads/2020/11/THE-MOUNTAIN-00_LD-scaled.jpg',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 107,
        name: 'Tabla',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 107,
            src: 'https://helpsnowboards.com/wp-content/uploads/2020/11/THE-MOUNTAIN-00_LD-scaled.jpg',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
    ],
    boots: [
      {
        id: 200,
        name: 'Botas',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 200,
            src: 'https://www.loopboardshop.com.ar/wp-content/uploads/sites/19/2023/04/D_757504-MLA54952639005_042023-O.jpg',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 201,
        name: 'Botas',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 200,
            src: 'https://www.loopboardshop.com.ar/wp-content/uploads/sites/19/2023/04/D_757504-MLA54952639005_042023-O.jpg',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 202,
        name: 'Botas',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 200,
            src: 'https://www.loopboardshop.com.ar/wp-content/uploads/sites/19/2023/04/D_757504-MLA54952639005_042023-O.jpg',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
    ],
    helmets: [
      {
        id: 300,
        name: 'Casco',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 300,
            src: 'https://http2.mlstatic.com/D_NQ_NP_646855-MLA69425037789_052023-O.webp',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 301,
        name: 'Casco',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: true,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 300,
            src: 'https://http2.mlstatic.com/D_NQ_NP_646855-MLA69425037789_052023-O.webp',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 302,
        name: 'Casco',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 300,
            src: 'https://http2.mlstatic.com/D_NQ_NP_646855-MLA69425037789_052023-O.webp',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
    ],
    googles: [
      {
        id: 400,
        name: 'Antiparra',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 400,
            src: 'https://i0.wp.com/rocksun.com.ar/wp-content/uploads/2023/06/D_812482-MLA49762082773_042022-F.jpg?fit=1200%2C626&ssl=1',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 401,
        name: 'Antiparra',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 400,
            src: 'https://i0.wp.com/rocksun.com.ar/wp-content/uploads/2023/06/D_812482-MLA49762082773_042022-F.jpg?fit=1200%2C626&ssl=1',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 402,
        name: 'Antiparra',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 400,
            src: 'https://i0.wp.com/rocksun.com.ar/wp-content/uploads/2023/06/D_812482-MLA49762082773_042022-F.jpg?fit=1200%2C626&ssl=1',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
      {
        id: 403,
        name: 'Antiparra',
        slug: 'table-snowboard-x-stream',
        date_created: '2021-01-15T09:00:00',
        description:
          'Tabla de snowboard de alto rendimiento para freestyle y pista. por 3 dias',
        price: '399.99',
        regular_price: '449.99',
        sale_price: '399.99',
        on_sale: false,
        related_ids: [2, 3, 4],
        images: [
          {
            id: 400,
            src: 'https://i0.wp.com/rocksun.com.ar/wp-content/uploads/2023/06/D_812482-MLA49762082773_042022-F.jpg?fit=1200%2C626&ssl=1',
            alt: 'Tabla Snowboard X-Stream',
          },
        ],
      },
    ],
  },
  cartProducts: [],
  currentProduct: undefined,
  setSaleProducts: (saleProducts: Product[]) => set({ saleProducts }),
  // setCategoryProducts: (categoryProducts: Product[]) =>
  //   set({ categoryProducts }),
  setCurrentProduct: (currentProduct: Product) => set({ currentProduct }),
  setCartProducts: (cartProducts: Product[]) => set({ cartProducts }),
  fetchProductById: (id: string) => {
    const allProducts = get().saleProducts.concat(
      get().categoryProducts.tables,
      get().categoryProducts.boots,
      get().categoryProducts.helmets,
      get().categoryProducts.googles
    );

    const product = allProducts.find(
      (product: Product) => product.id === Number(id)
    );

    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    get().setCurrentProduct(product);
  },
  fetchProductsByIds: (ids: string) => {
    const allProducts = get().saleProducts.concat(
      get().categoryProducts.tables,
      get().categoryProducts.boots,
      get().categoryProducts.helmets,
      get().categoryProducts.googles
    );

    const products = allProducts.filter((product: Product) =>
      ids.includes(String(product.id))
    );

    console.log(products, 'HOLAA');

    if (!products) {
      throw new Error(`Product with id not found`);
    }

    get().setCartProducts(products);
  },
}));

export default useProductStore;
