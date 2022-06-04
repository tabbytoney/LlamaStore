import classes from './productItem.module.css';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.price}</p>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <Link to={`./products/${props.id}`}>
            <button data-e2e-id={`more-details-btn-${props.id}`} type='button'>
              More Details
            </button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
