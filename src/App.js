import { Route, Switch } from 'react-router-dom';

import AllProductsPage from './pages/allProductsPage';
import Layout from './components/layout/Layout';
import AllProductsDetails from './pages/allProductsDetails';
import Carousel, { CarouselItem } from './components/carousel/carousel';
import StorePage from './pages/store';

import cuddlesImage from '../src/components/images/cuddlesImage.jpeg';
import moonImage from '../src/components/images/moonImage.jpeg';
import beansImage from '../src/components/images/beansImage.jpeg';
import leroyImage from '../src/components/images/leroyImage.jpeg';
import murphyImage from '../src/components/images/murphyImage.jpeg';


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <div className='App'>
            <Carousel>
              <CarouselItem>
                <img
                  src={moonImage}
                  alt='llama'
                ></img>
              </CarouselItem>
              <CarouselItem>
              <img
                  src={beansImage}
                  alt='llama'
                ></img>
              </CarouselItem>
              <CarouselItem>
              <img
                  src={leroyImage}
                  alt='llama'
                ></img>
              </CarouselItem>
              <CarouselItem>
              <img
                  src={cuddlesImage}
                  alt='llama'
                ></img>
              </CarouselItem>
              <CarouselItem>
              <img
                  src={murphyImage}
                  alt='llama'
                ></img>
              </CarouselItem>
            </Carousel>
          </div>
          <AllProductsPage />
        </Route>
        <Route path='/store' exact>
          <StorePage />
        </Route>
        <AllProductsDetails />
      </Switch>
    </Layout>
  );
}

export default App;
