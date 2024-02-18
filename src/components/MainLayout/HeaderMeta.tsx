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
      <meta itemProp="name" content="Covans | Tienda Snowboard" />
      <meta
        itemProp="description"
        lang="es"
        content="Alquiler de equipos de snowboard tierra del fuego"
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://covans.store" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Covans | Tienda Snowboard" />
      <meta
        property="og:description"
        content="Alquiler de equipos de snowboard tierra del fuego"
      />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/Images/readme-img.png?token=AK7VCIF5RYEUZZAURELPTAC76U6AK"
      />

      {/* Etiquetas meta en inglés */}
      <meta itemProp="name" lang="en" content="Covans | Snowboard Store" />
      <meta
        itemProp="description"
        lang="en"
        content="Snowboard equipment rental in Tierra del Fuego"
      />
      <meta property="og:title" lang="en" content="Covans | Snowboard Store" />
      <meta
        property="og:description"
        lang="en"
        content="Snowboard equipment rental in Tierra del Fuego"
      />
    </Head>
  );
};

export default HeaderMeta;
