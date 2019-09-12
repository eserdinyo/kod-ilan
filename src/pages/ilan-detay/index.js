import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { IlanHeader } from "./ilan-header";
import { IlanInfo } from "./ilan-info";
import IlanBox from "./ilan-box";
import Loader from '../../components/Loader';
import * as actions from '../../store/actions';



const IlanPage = ({ match }) => {

  const dispatch = useDispatch();
  const post = useSelector(store => store.postsReducer.post);
  const isDetailLoading = useSelector(state => state.postsReducer.isDetailLoading);


  useEffect(() => {

    dispatch(actions.fetchPost(match.params.slug))
    window.scrollTo(0, 0); // Scrool page to up

    return () => {
    }
    // eslint-disable-next-line
  }, []);


  return (
    <div>
      {
        isDetailLoading ?
          (
            <div>
              <IlanHeader position={post.position} type={post.type} />
              <div className="container">
                <div className="ilan__detail">
                  <IlanInfo company={post.company} desc={post.description} />
                  <IlanBox position={post.position} location={post.location} tags={post.tags} www={post.company.www} />
                </div>
              </div>
            </div>
          ) :
          <Loader />

      }


    </div>

  );
}

export default IlanPage;
