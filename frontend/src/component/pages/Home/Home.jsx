
import ExploreMenu from '../../ExploreMenu/ExploreMenu';
import Fooditem from '../../FoodItem/Fooditem';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import { useState } from 'react';
import './Home.css';
import EmbeddedMap from '../../Map/Map';

function Home() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <div className='header'>
        <Header />
        <ExploreMenu setFilter={setFilter} />
        <Fooditem filter={filter} />
        <EmbeddedMap/>
        <Footer />
      </div>
    </>
  );
}

export default Home;
