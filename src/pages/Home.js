import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Ilanlar from '../components/ilanlar';

const Home = () => (
  <div>
    <SearchBox />
    <Ilanlar />
  </div>
)


export default Home