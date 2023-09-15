type ProductCardProps = {
  imgSrc: string
  name: string
  stock: number
}

const ProductCard = ({ imgSrc, name, stock }: ProductCardProps) => {
  return (
    <div style={{ height: "fit-content", width: "250px" }} className="card shadow">
      <div className="card-body text-center">
        <img className="img-fluid" src={imgSrc} alt="product image" />
        <h3 className="m-0">{name}</h3>
        <p className="mt-0">Stock: <strong>{stock}</strong></p>
      </div>
    </div>
  )
}

export default ProductCard