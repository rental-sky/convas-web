import axios from 'axios';
import { Product } from '../store/productStore';

type ProductsResponse = {
  tables: Product[];
  boots: Product[];
  helmets: Product[];
  googles: Product[];
};

const processData = (data: any[]) => {
  return data.map((row) => {
    const [
      id,
      name,
      description,
      price,
      regular_price,
      sale_price,
      on_sale,
      brand,
      available,
      sizes,
      characteristics,
      image,
    ] = row.split('\t');
    let sizesArray;
    let characteristicsArray;
    let imagesArray;
    try {
      // Intenta analizar sizes como JSON
      sizesArray = JSON.parse(sizes);
      characteristicsArray = JSON.parse(characteristics);
      imagesArray = JSON.parse(image);
    } catch (error) {
      // Si no se pudo analizar como JSON, trata sizes como un valor individual
      sizesArray = [sizes];
      characteristicsArray = [characteristics];
      imagesArray = [image];
    }

    return {
      id,
      name,
      slug: name.replace(/\s/g, ''),
      description,
      price: price.replace('$', ''),
      regular_price: regular_price.replace('$', ''),
      sale_price: sale_price.replace('$', ''),
      on_sale: on_sale === 'SI',
      available: available === 'SI',
      sizes: sizesArray,
      characteristics: characteristicsArray,
      type: 'product' as 'product' | 'tarif',
      brand,
      images: imagesArray.map((image: string) => ({
        id: id + name.replace(/\s/g, ''),
        src: image,
        alt: name,
      })),
    };
  });
};

const processDataTarif = (data: any[]) => {
  return data.map((row) => {
    const [
      id,
      name,
      description,
      price,
      price_2,
      price_3,
      price_4,
      price_5,
      price_6,
      price_7,
      on_sale,
      brand,
      sizes,
      image,
    ] = row.split('\t');
    let sizesArray;
    try {
      // Intenta analizar sizes como JSON

      sizesArray = JSON.parse(sizes);
    } catch (error) {
      // Si no se pudo analizar como JSON, trata sizes como un valor individual

      sizesArray = [sizes];
    }

    const prices = [
      price,
      price_2,
      price_3,
      price_4,
      price_5,
      price_6,
      price_7,
    ];

    return {
      id,
      name,
      slug: name.replace(/\s/g, ''),
      description,
      price: price.replace('$', ''),
      regular_price: price.replace('$', ''),
      sale_price: price.replace('$', ''),
      available: true,
      prices: prices.map((price) => price.replace('$', '')),
      on_sale: on_sale === 'SI',
      sizes: sizesArray,
      type: 'tarif' as 'product' | 'tarif',
      brand,
      images: [
        {
          id: id + name.replace(/\s/g, ''),
          src: image,
          alt: name,
        },
      ],
    };
  });
};

const api = {
  products: {
    list: async (): Promise<ProductsResponse> => {
      const promises = [
        axios.get(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQydJIfbug_P2WB1IxOzq0O-__7VcZuDQTRIfJGD1KFMnQ_XE6H5Cx4r1GM8u68bGxcriZ2iZixJVq4/pub?gid=0&single=true&output=tsv'
        ),
        axios.get(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQydJIfbug_P2WB1IxOzq0O-__7VcZuDQTRIfJGD1KFMnQ_XE6H5Cx4r1GM8u68bGxcriZ2iZixJVq4/pub?gid=897709889&single=true&output=tsv'
        ),
        axios.get(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQydJIfbug_P2WB1IxOzq0O-__7VcZuDQTRIfJGD1KFMnQ_XE6H5Cx4r1GM8u68bGxcriZ2iZixJVq4/pub?gid=1527186987&single=true&output=tsv'
        ),
        axios.get(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQydJIfbug_P2WB1IxOzq0O-__7VcZuDQTRIfJGD1KFMnQ_XE6H5Cx4r1GM8u68bGxcriZ2iZixJVq4/pub?gid=686915449&single=true&output=tsv'
        ),
      ];

      try {
        const [tables, boots, helmets, googles] = await Promise.all(promises);

        const [tablesData, bootsData, helmetsData, googlesData] = [
          tables.data,
          boots.data,
          helmets.data,
          googles.data,
        ];

        const tableRows = tablesData.split('\n').slice(1);

        const bootRows = bootsData.split('\n').slice(1);
        const helmetRows = helmetsData.split('\n').slice(1);
        const goggleRows = googlesData.split('\n').slice(1);

        const dataTables = processData(tableRows);
        const dataBoots = processData(bootRows);
        const dataHelmets = processData(helmetRows);
        const dataGoggles = processData(goggleRows);

        return {
          tables: dataTables,
          boots: dataBoots,
          helmets: dataHelmets,
          googles: dataGoggles,
        };
      } catch (error) {
        console.log(error);
        return {
          tables: [],
          boots: [],
          helmets: [],
          googles: [],
        };
      }
    },
  },
  tarif: {
    list: async (): Promise<Product[]> => {
      const promises = [
        axios.get(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQydJIfbug_P2WB1IxOzq0O-__7VcZuDQTRIfJGD1KFMnQ_XE6H5Cx4r1GM8u68bGxcriZ2iZixJVq4/pub?gid=1414758922&single=true&output=tsv'
        ),
      ];

      try {
        const [tarifario] = await Promise.all(promises);

        const [tarifarioData] = [tarifario.data];

        const tarifarioRows = tarifarioData.split('\n').slice(1);

        const dataTarifario = processDataTarif(tarifarioRows);

        return dataTarifario;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
  },
};

export default api;
