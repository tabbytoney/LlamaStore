import ProductList from '../components/storeItems/productList';
import kuzcoImage from '../components/images/kuzcoImage.jpeg';
import bootsImage from '../components/images/bootsImage.jpeg';
import llanaImage from '../components/images/llanaImage.jpeg';
import effieImage from '../components/images/effieImage.jpeg';
import oatsImage from '../components/images/oatsImage.jpeg';
import moonImage from '../components/images/moonImage.jpeg';
import beansImage from '../components/images/beansImage.jpeg';
import flowerImage from '../components/images/flowerImage.jpeg';

const DUMMY_DATA = [
  {
    id: 'LlamaOne',
    title: 'Kuzco',
    image: kuzcoImage,
    price: '$1,000,000',
    description: 'Wants a new palace'
  },
  {
    id: 'LlamaTwo',
    title: 'Boots',
    image: bootsImage,
    price: '$1,000,000',
    description: 'A party llama'
  },
  {
    id: 'LlamaThree',
    title: 'Lana',
    image: llanaImage,
    price: '$1,000,000',
    description: 'Llama hugs'
  },
  {
    id: 'LlamaFour',
    title: 'Effie',
    image: effieImage,
    price: '$1,000,000',
    description: 'A polite llama'
  },
  {
    id: 'LlamaFive',
    title: 'Oats',
    image: oatsImage,
    price: '$1,000,000',
    description: 'A loud llama'
  },
  {
    id: 'LlamaSix',
    title: 'Moon',
    image: moonImage,
    price: '$1,000,000',
    description: 'An adorable llama'
  },
  {
    id: 'LlamaSeven',
    title: 'Beans',
    image: beansImage,
    price: '$1,000,000',
    description: 'A lurking llama'
  },
  {
    id: 'LlamaEight',
    title: 'Flower',
    image: flowerImage,
    price: '$1,000,000',
    description: 'A hungry llama'
  }
];

const AllProductsPage = () => {
  return (
    <div>
      <h1>Supportive Llamas</h1>
      <ProductList products={DUMMY_DATA} />
    </div>
  );
};

export default AllProductsPage;
