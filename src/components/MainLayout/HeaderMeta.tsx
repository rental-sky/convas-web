import Head from 'next/head';

interface HeaderMetaProps {
  title: string;
}

const HeaderMeta: React.FC<HeaderMetaProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="path/to/atropos.css" />

      {/* Google / Search Engine Tags  */}
      <meta itemProp="name" content="Rental Snowboard ushuaia" />
      <meta
        itemProp="description"
        lang="es"
        content="Alquiler de equipos de snowboard tierra del fuego ushuaia"
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://covans.store" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Covans Rental Snowboard Ushuaia" />
      <meta
        property="og:description"
        content="Alquiler de equipos de snowboard tierra del fuego ushuaia"
      />
      <meta property="og:image" content="https://i.ibb.co/D1TBZGh/covans.jpg" />

      {/* Etiquetas meta en inglés */}
      <meta itemProp="name" lang="en" content="Covans Rental Snowboard" />
      <meta
        itemProp="description"
        lang="en"
        content="Snowboard equipment rental in Tierra del Fuego Ushuaia"
      />
      <meta property="og:title" lang="en" content="Covans Rental Snowboard" />
      <meta
        property="og:description"
        lang="en"
        content="Snowboard equipment rental in Tierra del Fuego Ushuaia"
      />
    </Head>
  );
};

export default HeaderMeta;
