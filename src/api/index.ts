import axios from 'axios';
import { Product } from '../store/productStore';

type ProductsResponse = {
  tables: Product[];
  boots: Product[];
  helmets: Product[];
  googles: Product[];
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

      const dataTables = tableRows.map((row: any) => {
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
          image,
        ] = row.split('\t');
        return {
          id,
          name,
          slug: name.replace(/\s/g, ''),
          description,
          price,
          regular_price,
          sale_price,
          on_sale,
          available,
          sizes: JSON.parse(sizes),
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

      return {
        tables: dataTables,
        boots: [],
        helmets: [],
        googles: [],
      };
    },
  },
};

export default api;
