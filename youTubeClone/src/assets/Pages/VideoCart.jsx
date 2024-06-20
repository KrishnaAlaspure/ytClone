import axios from "axios";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { API_KEY } from "../Constant/constant";

function VideoCart({item}) {
    const [ytProfileIcon, setYtProfileIcon]=useState()
    const getYouTubeChannelName = async()=>{
        try {
            const res =await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
            
            setYtProfileIcon(res?.data?.items[0]?.snippet?.thumbnails?.high?.url)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getYouTubeChannelName();
    },[])
  return (
    <div className="w-full my-4 ">
      <img
        className=" w-full rounded-xl "
        src={item?.snippet?.thumbnails?.medium?.url}
        alt="VideoCart"
      />
      <div>
        <div className="flex mt-2">
          <Avatar
            src={ytProfileIcon}
            size={40}
            round={true}
            className=""
          />
          <div className="ml-2">
            <h1 className="font-bold">{item?.snippet?.title}</h1>
            <p className="text-sm text-gray-600">{item?.snippet?.channelTitle}</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default VideoCart;
