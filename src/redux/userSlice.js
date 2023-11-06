import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
   name: "",
   token: "",
   username: "",
   email: "",
   image: "",
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      addUser: (state, action) => {
         const { name, token, username, email, image } = action.payload;
         state.name = name;
         state.token = token;
         state.username = username;
         state.email = email;
         state.image = image;
      },
      changeEmail: (state, action) => {
         state.email = action.payload;
      },
   },
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;
