import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info:null,
};

export const PeopleSlice = createSlice({
  name: 'People',
  initialState,
  reducers: {
    loadPeople: (state,action)=>{
        state.info = action.payload;
    },
    removePeople: (state,action)=>{
        state.info = null;
    }
    }
})

// Action creators are generated for each case reducer function
export const {loadPeople,removePeople} = PeopleSlice.actions

export default PeopleSlice.reducer