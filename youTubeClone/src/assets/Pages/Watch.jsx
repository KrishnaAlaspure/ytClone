import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../Constant/constant";
import Avatar from "react-avatar";

import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";

import { BsThreeDotsVertical } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";

function Watch() {
    const [input,setInput]=useState()
  const [singleVideo, setSingleVideo] = useState();
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("V");
  

  const dispatch = useDispatch()

  const sendMessage=()=>{
    dispatch(
        setMessage({
            
                name: "Krish",
                message:input
            
        })
    )
    setInput("")
  }

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      console.log(res.data);
      setSingleVideo(res.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleVideo();
  }, []);

  return (
    
      <div className="flex ">
        {/* Video Watch */}
      <div className="ml-4 ">
        <div>
          <iframe
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h1 className="text-lg font-bold mt-2">
            {singleVideo?.snippet?.title}{" "}
          </h1>
        </div>
        <div className="flex  mt-2 justify-between items-center">
          <div className="flex items-center justify-start ">
            <div className="flex items-center mr-2">
              <div className="mr-2">
                <Avatar
                  src="https://avatar.iran.liara.run/public/boy?username=scout"
                  size={40}
                  round={true}
                  className=""
                />
              </div>
              <div>
                <h1 className="text-md font-semibold">
                  {singleVideo?.snippet?.channelTitle}
                </h1>
                <p className="text-sm text-neutral-500 ">4.9M Subcriber</p>
              </div>
            </div>
            <div>
              <button className="bg-neutral-300 rounded-full px-3 text-lg font-medium py-1 mx-1">
                Join
              </button>
            </div>
            <div>
              <button className="bg-neutral-300 rounded-full px-3 text-lg font-medium py-1 mx-1">
                Subcribe
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end ">
            <div className="flex items-center justify-around bg-neutral-300 border border-neutral-300 rounded-full px-3 py-1 mr-2">
              <AiOutlineLike size={26} />
              <p className=" border-r-2 px-1 font-medium ">
                {singleVideo?.statistics?.likeCount}
              </p>
              <BiDislike size={26} />
            </div>
            <div className="flex items-center justify-around bg-neutral-300 border border-neutral-300 rounded-full px-3 py-1 mr-2">
              <PiShareFat size={26} />
              <p className="ml-2 font-medium ">Share</p>
            </div>
            <div className="flex items-center justify-around bg-neutral-300 border border-neutral-300 rounded-full px-3 py-1 mr-2">
              <LiaDownloadSolid size={26} />
              <p className="ml-2 font-medium ">Download</p>
            </div>
            <div className="flex items-center justify-around bg-neutral-300 border border-neutral-300 rounded-full p-1 mr-2">
              <BsThreeDots size={26} />
            </div>
          </div>
        </div>
      </div >
      {/* Top Chat */}
      <div className="w-full border border-neutral-300 rounded-xl ml-3 h-fit p-2 ">
        <div className="flex justify-between items-center">
            <h1 className="">Top Chat</h1>
            <BsThreeDotsVertical className=""/>
        </div>
        <div className="overflow-y-auto h-[28rem] flex flex-col-reverse scrollbar">
            <LiveChat/>
        </div>
        <div className="border-t-2">
            <div className="flex items-center justify-around mt-5">
                <div>
                <Avatar
                  src="https://avatar.iran.liara.run/public/boy?username=random"
                  size={40}
                  round={true}
                  className=""
                />
                </div>
                <input value={input} className="border-b-2 outline-none" onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Sent message"/>
                <div className="border bg-neutral-300 p-1 rounded-full">
                    <BsSend className=" " onClick={sendMessage} size={17}/>
                </div>
            </div>
        </div>
      </div>
      </div>
    
  );
}

export default Watch;
