import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Products = [
  {
    id:1,
    title:'first book',
    price:5,
    description:'the first book i ever wrote',
  },
  {
    id:2,
    title:'second book',
    price:10,
    description:'the second book i ever wrote',
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map(product=>(
          <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          id={product.id}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
