import {createSlice} from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        toggle:true,
        video:[],
        category:"All",
        searchSuggestion:[]
    },
    reducers: {
        toggleSideBar:(state)=>{
            state.toggle = !state.toggle
        },
        setHomeVideo:(state,action)=>{
            state.video = action.payload
        },
        setCategory:(state,action)=>{
            state.category=action.payload
        },
        setSearchSuggestion:(state,action)=>{
            state.searchSuggestion=action.payload
        },
    }
})


export default appSlice.reducer
export const {toggleSideBar,setCategory,setHomeVideo,setSearchSuggestion}=appSlice.actions