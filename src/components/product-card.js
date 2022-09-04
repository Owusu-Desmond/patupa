import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// component to return a product
const ProductCard = ({ product }) => (
  <Card>
    <Card.Img className="card-image" alt={product.title} variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <div className="card-btns-container">
        <span className="product-stars btn">
          {product.rating.rate}
          k stars
        </span>
        {/* link to product route */}
        <Link to={`/product/id=${product.id}`} className="btn btn-sm">shop now</Link>
      </div>
    </Card.Body>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;
