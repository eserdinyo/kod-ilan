import React, { useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import Ilanlar from '../components/ilanlar';

const Home = (props) => {
  useEffect(() => {
    console.log(props);
    return () => {
    }
  }, [])


  return (
    <div>
      <SearchBox />
      <Ilanlar />
    </div>
  )
}

export default Home;