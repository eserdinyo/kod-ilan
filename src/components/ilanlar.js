import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import * as actions from '../store/actions';

import Ilan from "./ilan";
import FeaturedPost from './FeaturedPost';
import Loader from './Loader';




function Ilanlar() {
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
  }, [])


  return (
    <div className="container">
      <div className="home-page">
        <div className="son-ilanlar">
          <h3 className="son-ilanlar__title">En son eklenen ilanlar</h3>
          {
            !isLoading &&
            (
              <div className="son-ilanlar__list">
                {posts.map((ilan, idx) => (
                  <Link key={idx} to={`/ilanlar/${ilan.slug}`} style={{ textDecoration: "none" }}>
                    <Ilan key={idx} ilan={ilan} />
                  </Link>
                ))}
              </div>
            )
          }
          <div className='loader-wrapper'>
            {
              isLoading &&
              <Loader />
            }
          </div>

        </div>
        <div className="featured-posts__wrapper">
          {
            isLoading &&
            <div className='loader-wrapper'>

              <Loader />
            </div>

          }
          {
            !isLoading &&
            <div>
              {
                featuredPosts.map(post => (
                  <FeaturedPost key={post.slug} post={post} />
                ))
              }
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Ilanlar;
