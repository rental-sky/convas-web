import 'animate.css';
import Card from '../components/Card';
import { Layout } from '../layout/MainLayout';
import { GoLocation } from 'react-icons/go';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const products = [
  { name: 'Tablas', image: 'table1.jpeg', key: 'tables' },
  { name: 'Antiparras', image: 'ombak.png', key: 'goggles' },
  { name: 'Botas', image: 'bota.jpeg', key: 'boots' },
  { name: 'Cascos', image: 'cascos.png', key: 'helmets' },
];

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // El elemento se considerará visible cuando al menos el 20% esté en el viewport
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="mt-24 flex flex-col items-center justify-center bg-gradient-to-r from-sky-800 to-cyan-600 py-12 rounded-lg  ">
      <div
        ref={ref}
        className={
          isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'
        }
      >
        <p className="text-[50px] font-sans font-bold text-cyan-300 ">{`¿Como funciona?`}</p>
        <ul className="ml-10 md:ml-0  text-start">
          <li className="mt-4">
            <p className="text-[20px] font-sans ">
              {`❄️  Busca lo que necesites`}
            </p>
          </li>
          <li className="mt-4">
            <p className="text-[20px] font-sans  ">
              {`🌨️  Reserva tus equipos`}
            </p>
          </li>
          <li className="mt-4">
            <p className="text-[20px] font-sans  ">
              {`🏔️  Completa el formulario`}
            </p>
          </li>
          <li className="mt-4">
            <p className="text-[20px] font-sans  ">
              {`🏂  Envia el mensaje y seguiremos en contacto por whatsapp `}
              <AiOutlineWhatsApp className="inline-block text-2xl" />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9, // El elemento se considerará visible cuando al menos el 20% esté en el viewport
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <Layout>
      <div className="mx-auto p-4">
        <p className="text-[60px] font-sans font-bold leading-tight mt-16 animate__animated animate__fadeIn">
          {`Reserva `}
          <br />
          <span className="text-[60px] font-sans font-bold  text-sky-900">{`tus equipos de`}</span>
          <br />
          <span className="text-[60px] font-sans">{`snow`}</span>
        </p>

        <p className="font-sans mt-10 font-bold">
          Busca lo que necesites y reserva tus equipos <br /> para la temporada
          de nieve.
        </p>

        <div className=" py-8 rounded-lg mt-24 mb-12 flex flex-col items-center justify-center bg-gradient-to-r from-sky-800 to-cyan-600  ">
          <GoLocation className="text-5xl" />
          <p className="text-[50px] font-sans font-bold animate__animated  animate__pulse animate__repeat-3">
            {`Ushuaia -`}
            <span className="font-light font-sans">Tierra del fuego</span>
          </p>
        </div>

        <div
          ref={ref}
          className={`${
            isVisible ? 'animate__animated animate__zoomIn' : 'opacity-0'
          }  hidden  md:grid md:grid-cols-4 md:gap-4 mt-24`}
        >
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>

        <div className={`grid grid-cols-1 md:hidden`}>
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>

        <HowItWorks />
      </div>
    </Layout>
  );
}
