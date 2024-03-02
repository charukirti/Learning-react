import PropTypes from 'prop-types'

function ProductCard(props) {
  const { name, image, price, inStock } = props
  return (
    <div className="product-card">
      <img
        src={`/images/${image}`}
        alt="product-image"
        className="product-image"
      />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">₹ {price.toFixed(2)}</p>
      {inStock ? (
        <button className="btn">Add to cart</button>
      ) : (
        <p>Product is out of stock</p>
      )}
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inStock: PropTypes.bool.isRequired,
}

export default ProductCard
