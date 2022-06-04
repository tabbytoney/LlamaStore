import classes from './productPages.module.css';
import kuzcoImage from '../components/images/kuzcoImage.jpeg';
import bootsImage from '../components/images/bootsImage.jpeg';
import llanaImage from '../components/images/llanaImage.jpeg';
import effieImage from '../components/images/effieImage.jpeg';
import oatsImage from '../components/images/oatsImage.jpeg';
import moonImage from '../components/images/moonImage.jpeg';
import beansImage from '../components/images/beansImage.jpeg';
import flowerImage from '../components/images/flowerImage.jpeg';

// weird way to handle data, but without a database it needed to be hardcoded.

const llamaOne = {
  id: 'LlamaOne',
  title: 'Kuzco',
  image: kuzcoImage,
  price: '$1,000,000',
  description:
    'Camelids first appeared on the Central Plains of North America about 40 million years ago. About 3 million years ago, llama ancestors migrated to South America.'
};

const llamaTwo = {
  id: 'LlamaTwo',
  title: 'Boots',
  image: bootsImage,
  price: '$1,000,000',
  description: 'Llamas are social animals and prefer to live with other llamas or herd animals.'
};

const llamaThree = {
  id: 'LlamaThree',
  title: 'Lana',
  image: llanaImage,
  price: '$1,000,000',
  description:
    'Llamas can grow as much as 6 feet tall though the average llama between 5 feet 6 inches and 5 feet 9 inches tall.'
};

const llamaFour = {
  id: 'LlamaFour',
  title: 'Effie',
  image: effieImage,
  price: '$1,000,000',
  description:
    'Llamas weigh between 280 and 450 pounds and can carry 25 to 30 percent of their body weight, so a 400-pound male llama can carry about 100 to 120 pounds on a trek of 10 to 12 miles with no problem.'
};

const llamaFive = {
  id: 'LlamaFive',
  title: 'Oats',
  image: oatsImage,
  price: '$1,000,000',
  description:
    'Llamas dont bite. They spit when theyre agitated, but thats mostly at each other. Llamas also kick and neck wrestle each other when agitated.'
};

const llamaSix = {
  id: 'LlamaSix',
  title: 'Moon',
  image: moonImage,
  price: '$1,000,000',
  description:
    'A baby llama is called a cria - the Spanish word for baby. Pregnancy lasts for about 350 days, nearly a full year. Crias weigh 20 to 35 pounds at birth.'
};

const llamaSeven = {
  id: 'LlamaSeven',
  title: 'Beans',
  image: beansImage,
  price: '$1,000,000',
  description:
    'Llamas know their own limits. If you try to overload a llama with too much weight, the llama is likely to lie down or simply refuse to move.'
};

const llamaEight = {
  id: 'LlamaEight',
  title: 'Flower',
  image: flowerImage,
  price: '$1,000,000',
  description: 'Llamas are vegetarians and have very efficient digestive systems.'
};

const showSomething = (dataSet) => {
  return (
    <section className={classes.item}>
      <div className={classes.image}>
        <img src={dataSet.image} alt={dataSet.title} />
      </div>
      <div className={classes.content}>
        <h3>{dataSet.title}</h3>
        <p>{dataSet.price}</p>
        <p>{dataSet.description}</p>
      </div>
      <div className={classes.actions}>
        <button data-e2e-id='more-details-btn' type='button'>
          Sold Out!
        </button>
      </div>
    </section>
  );
};

function AllProductsDetails() {
  const currentUrl = window.location.pathname;
  switch (currentUrl) {
    case '/products/LlamaOne':
      return showSomething(llamaOne);
    case '/products/LlamaTwo':
      return showSomething(llamaTwo);
    case '/products/LlamaThree':
      return showSomething(llamaThree);
    case '/products/LlamaFour':
      return showSomething(llamaFour);
    case '/products/LlamaFive':
      return showSomething(llamaFive);
    case '/products/LlamaSix':
      return showSomething(llamaSix);
    case '/products/LlamaSeven':
      return showSomething(llamaSeven);
    case '/products/LlamaEight':
      return showSomething(llamaEight);
    default:
  }
}

export default AllProductsDetails;
