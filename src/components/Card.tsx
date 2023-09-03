import { Link } from 'react-router-dom';

const Card = ({
  product,
}: {
  product: { name: string; image: string; key: string };
}) => {
  return (
    <div className="bg-white shadow-lg p-2 m-4 rounded-xl cursor-pointer">
      <Link to={`/${product.key}`}>
        <h2 className="text-xl font-sans text-[#8ab3cf] font-extrabold mb-2 tracking-wider ">
          {product.name}
        </h2>
        <img className=" rounded-lg mb-4" src={product.image} alt={'table'} />
      </Link>
    </div>
  );
};

export default Card;
