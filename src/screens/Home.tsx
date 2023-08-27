
import { useEffect, useState } from 'react';

import axios from 'axios';
import * as XLSX from 'xlsx';
import Card from '../components/Card';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  { name: 'Tablas', image: 'table1.jpeg' },
  { name: 'Antiparras', image: 'table1.jpeg' },
  { name: 'Botas', image: 'bota.jpeg' },
  { name: 'Cascos', image: 'cascos.png' },
];

export default function Home() {


  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState<any[]>([]);
  const [filter, setFilter] = useState<
    'tables' | 'boots' | 'goggles' | 'helmets' | undefined
  >();

  const fetchExcelData = async () => {
    const url =
      'https://docs.google.com/spreadsheets/d/1Op_uGIemnQm8klGlqH0dyvqGqlkv5gQ6jtY7hDrWkrw/edit?usp=sharing';

    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      const data = new Uint8Array(response.data);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const parsedData = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
      }) as any[];
      const filteredData = parsedData.filter((row) => row?.length > 1);

      const mappepdData = filteredData.slice(2).map((row) => {
        return {
          type: row[1],
          name: row[2],
          price: row[3],
          brand: row[4],
          available: row[5] === 'si',
        };
      });

      setData(mappepdData);
    } catch (error) {
      console.error('Error fetching or parsing Excel data:', error);
    }
  };

  useEffect(() => {
    fetchExcelData();
  }, []);

  const title = filter ? `Catalogo de ${filter}` : 'Catalogo';

  return (
    <div className="bg-gray-200 w-screen h-full">
      <Header setFilter={setFilter} />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl text-[#144b84] font-semibold mb-4">{title}</h2>
        {!filter ? (
          <div className="grid grid-cols-3 gap-4">
            {products.map((product, index) => (
              <Card key={index} product={product} setFilter={setFilter} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {data.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )}
      </div>
      <footer className="bg-[#144b84] p-2 text-white text-center sticky bottom-0 w-full">
        <div className="flex justify-between px-10 items-center py-2 ">
          <p className="font-medium text-xl ml-10">Total: 0 </p>

          <button className="bg-cyan-500 rounded-2xl text-md">Reservar</button>
        </div>

        <p>&copy; {new Date().getFullYear()} Covans. All rights reserved.</p>
      </footer>
    </div>
  )
}
