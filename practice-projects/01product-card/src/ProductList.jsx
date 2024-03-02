import ProductCard from './ProductCard'

function ProductList() {
  const products = [
    { name: 'Headphone', image: 'headphone.jpg', price: 2300, inStock: true },
    { name: 'T-shirt', image: 't-shirt.jpg', price: 450, inStock: false },
    { name: 'Watch', image: 'watch.jpg', price: 4500, inStock: true },
  ]

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  )
}

export default ProductList
