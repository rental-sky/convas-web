import Card from '../components/Card';
import { Layout } from '../layout/MainLayout';

const products = [
  { name: 'Tablas', image: 'table1.jpeg', key: 'tables' },
  { name: 'Antiparras', image: 'table1.jpeg', key: 'goggles' },
  { name: 'Botas', image: 'bota.jpeg', key: 'boots' },
  { name: 'Cascos', image: 'cascos.png', key: 'helmets' },
];

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl  font-bold mb-4">{'Catalogo'}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
