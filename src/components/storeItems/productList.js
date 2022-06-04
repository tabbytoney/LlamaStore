import ProductItem from './productItem';
import classes from './productList.module.css';

const ProductList = (props) => {
  return (
    <section className={classes.column}>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </section>
  );
}

export default ProductList;
