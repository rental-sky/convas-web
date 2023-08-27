const ProductCard = ({
  product,
}: {
  product: {
    name: string;
    image: string;
    price: number;
    brand: string;
    available: boolean;
  };
}) => {
  return (
    <div
      className="bg-white shadow-lg p-2 m-4 rounded-xl cursor-pointer"
      onClick={() => {
        // TODO add to cart
      }}
    >
      <h2 className="text-xl font-semibold text-[#144b84] mb-2">
        {product.name}
      </h2>
      <p className="text-[#144b84] mb-2">${product.price} por dia</p>
      <img className=" rounded-lg mb-4" src={'/table1.jpeg'} alt={'table'} />
      <p className="text-[#144b84] mb-2">Marca: {product.brand}</p>
      <p className="text-[#144b84] mb-2">
        Disponible: {product.available ? 'Si' : 'No'}
      </p>
      <button className="m-8 bg-[#144b84] text-white px-4 py-2 rounded-lg w-8/12">
        Agregar
      </button>
    </div>
  );
};

export default ProductCard;
