export const API_KEY= "AIzaSyDtTFw-htPjbg5wJX2oGCEpfgR-YijPNuw";
export const BASE_URL= "https://www.googleapis.com/youtube/v3";
export const YouTube_Videos_API =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&key=${API_KEY}`
export const YouTube_Channel_API =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${API_KEY}`
export const YouTube_Search_API=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=${API_KEY}`
export const SUGGESTION_API=`https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=`