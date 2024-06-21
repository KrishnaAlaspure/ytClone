import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import YouTubeLogo from "../Imgs/youtubeLogo.jpg";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMicOutline } from "react-icons/io5";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setSearchSuggestion,
  toggleSideBar,
} from "../utils/appSlice";
import axios from "axios";
import { SUGGESTION_API } from "../Constant/constant";
import { Link } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const { searchSuggestion } = useSelector((store) => store.app);
  const [input, setInput] = useState();
  const [suggestion,setSuggestion]=useState(false)
  const toggleHandler = () => {
    dispatch(toggleSideBar());
  };

  const searchSuggestionAPI = async () => {
    try {
      const res = await axios.get(SUGGESTION_API + input);
      console.log(res.data[0].show.name);
      dispatch(setSearchSuggestion(res?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    

    const timer =setTimeout(()=>
      searchSuggestionAPI(),200)
     return ()=>{
      clearTimeout(timer)
     }
  }, [input]);

  const handleClickEvent = () => {
    dispatch(setCategory(input));
    setInput("");
  };

  const openSuggestion= ()=>{
    setSuggestion(true)
   const timer =setTimeout(()=>
    setSuggestion(false),5000)
   return ()=>{
    clearTimeout(timer)
   }
  }

  return (
    <div className=" sticky top-0 flex items-center justify-between my-2 bg-white">
      <div className="flex items-center justify-around gap-4 ">
        <GiHamburgerMenu
          onClick={toggleHandler}
          className="hover:cursor-pointer"
          size={28}
        />

        <a href="/">
          <img
            src={YouTubeLogo}
            className="w-"
            width={"120px"}
            alt="youtube logo"
          />
        </a>
      </div>
      <div className="flex w-[40%] items-center justify-between">
        <div className="flex w-[1000%] border border-gray-600 rounded-full justify-between mr-2">
          <div className="w-full">
            <input
              placeholder="Search"
              type="text"
              name="search"
              className=" outline-none rounded-full px-2 py-1 pr-0 w-full  "
              id=""
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={openSuggestion}
            />
            {
              (suggestion && searchSuggestion.length !=0) &&
              <div className="absolute p-2 z-50 w-[35%] text-black bg-slate-50 shadow-lg mt-1 border rounded-md">
              <ul>
                {searchSuggestion.map((text, index) => {
                  return (
                    <div className="flex ">
                      <FiSearch className="items-center" size={20} />
                      <li className="hover: cursor-pointer ml-2 ">{text?.show?.name}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
            }
          </div>
          <div className=" py-1 px-4  border-l-2 items-center rounded-r-full">
            <button onClick={handleClickEvent}>
              <FiSearch className="items-center" size={20} />{" "}
            </button>
          </div>
        </div>

        <div className="border border-neutral-200 rounded-full p-1 ">
          <IoMicOutline size={30} />
        </div>
      </div>
      <div className="flex justify-between items-center  ">
        <RiVideoAddLine size={25} className="mx-2" />
        <IoMdNotificationsOutline size={25} className="mx-2" />
        <Avatar
          src="https://discourse.disneyheroesgame.com/uploads/default/original/3X/0/8/08607f6fb4891b7f2917930419bed6f45c665df3.jpeg"
          size={40}
          round={true}
          className="mx-2"
        />
      </div>
    </div>
  );
}

export default NavBar;
