type Product = 'tables' | 'boots' | 'goggles' | 'helmets';

const Card = ({
  product,
  setFilter,
}: {
  product: { name: string; image: string };
  setFilter: React.Dispatch<React.SetStateAction<Product | undefined>>;
}) => {
  return (
    <div
      className="bg-white shadow-lg p-2 m-4 rounded-xl cursor-pointer"
      onClick={() => {
        setFilter(product.name as Product);
      }}
    >
      <h2 className="text-xl font-semibold text-[#144b84] mb-2">
        {product.name}
      </h2>
      {/* <p className="text-[#144b84] mb-2">${product.price} por dia</p> */}
      <img className=" rounded-lg mb-4" src={product.image} alt={'table'} />
      {/* <button className="m-8 bg-[#144b84] text-white px-4 py-2 rounded-lg w-8/12">
        Ver mas
      </button> */}
    </div>
  );
};

export default Card;
