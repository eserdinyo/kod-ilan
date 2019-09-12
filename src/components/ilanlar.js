import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import * as actions from '../store/actions';

import Ilan from "./ilan";
import FeaturedPost from './FeaturedPost';
import Loader from './Loader';




function Ilanlar(props) {

  const posts = useSelector(state => state.postsReducer.posts)
  const isLoading = useSelector(state => state.postsReducer.isLoading)
  const featuredPosts = useSelector(state => state.postsReducer.featuredPosts);

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(actions.fetchPosts())
    dispatch(actions.fetchFeauteredPosts())

    return () => {
      dispatch(actions.resetLoading())
    }
    // eslint-disable-next-line
  }, [])


  return (
    <div className="container">
      <div className="home-page">
        <div className="son-ilanlar">
          <h3 className="son-ilanlar__title">En son eklenen ilanlar</h3>
          {
            isLoading ?
              (
                <div className="son-ilanlar__list">
                  {posts.map((ilan, idx) => (
                    <Link key={idx} to={`/ilanlar/${ilan.slug}`} style={{ textDecoration: "none" }}>
                      <Ilan key={idx} {...ilan} />
                    </Link>
                  ))}
                </div>
              ) :
              <Loader />
          }

        </div>
        <div className="featured-posts__wrapper">
          {
            isLoading ?
              (
                <div>
                  {
                    featuredPosts.map(post => (
                      <FeaturedPost key={post.slug} post={post} />
                    ))
                  }
                </div>
              ) :
              <Loader />
          }
        </div>
      </div>
    </div>
  );
}

export default Ilanlar;
