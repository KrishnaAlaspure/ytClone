import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, YouTube_Videos_API } from "../Constant/constant";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../utils/appSlice";

function VideoContainer() {
  
  const dispatch =useDispatch()
  const videos=useSelector((store)=>store.app.video)
  const category=useSelector((store)=>store.app.category)

  const fetchYTAllVideos = async () => {
    try {
      const res = await axios.get(`${YouTube_Videos_API}`);
      
      dispatch(setHomeVideo(res?.data?.items))
      
    } catch (error) {
      console.log(error);
    }
  };
 

  const fetchVideoByTagName=async()=>{
    try {
      const res= await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`) 
      dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if(category=="All"){fetchYTAllVideos();}
    else {fetchVideoByTagName();}
  }, [category]);


  return (
    <div className="grid grid-cols-3 gap-5  h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden no-scrollbar">
      {videos.map((item,index) => {
        return (
          <Link key={index} to={`/watch?V=${typeof item.id=== 'object'? item.id.videoId :item.id}`}>
            <VideoCart item={item}  />
          </Link>
        );
      })}
    </div>
  );
}

export default VideoContainer;
