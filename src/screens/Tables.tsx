import { Layout } from '../layout/MainLayout';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';
import { CartItem } from '../store/useAppStore';

export default function Tables() {
  const [data, setData] = useState<CartItem[]>([]);
  const [loading, setloading] = useState(false);

  const fetchExcelTableData = async () => {
    const url =
      'https://docs.google.com/spreadsheets/d/1YRE0gVZR1-1ouoi_ObPeyMi1rE7pHTndMKI2YiLj9cA/edit?usp=sharing';

    try {
      setloading(true);
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      const data = new Uint8Array(response.data);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const parsedData = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
      }) as any[];
      const filteredData = parsedData.filter((row) => row?.length > 1);

      const mappepdData = filteredData.slice(3).map((row) => {
        return {
          type: row[1],
          name: row[2],
          price: row[3],
          brand: row[4],
          available: row[5] === 'SI',
          size: row[6],
          image: `tables/${row[2]
            .replace(/\s/g, '_')
            .replace('.', '')
            .concat(`_${row[6]}.png`)}`,
        };
      });
      setloading(false);
      setData(mappepdData);
    } catch (error) {
      console.error('Error fetching or parsing Excel data:', error);
    }
  };

  useEffect(() => {
    fetchExcelTableData();
  }, []);

  return (
    <Layout>
      <h2 className="text-3xl  font-bold mb-4 mt-8">Tablas</h2>

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-3  md:gap-4 md:p-8">
          {data.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </Layout>
  );
}
