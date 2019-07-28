import React, { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import Ilanlar from '../components/ilanlar';

const Home = (props) => {
  return (
    <div>
      <SearchBox />
      <Ilanlar />
    </div>
  )
}

export default Home