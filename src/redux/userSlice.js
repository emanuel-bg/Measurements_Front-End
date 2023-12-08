import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Login } from "./../API/requests";

const userLogin = createAsyncThunk("user/login", async (userData, thunkAPI) => {
   try {
      const user = await Login(userData);
      return user;
   } catch (error) {
      console.error("Error de inicio de sesión:", error.message);
      throw error;
   }
});

export const initialState = {
   id: "",
   name: "",
   token: "",
   username: "",
   email: "",
   image: "",
};

export const userSlice = createSlice({
   name: "currentUser",
   initialState,
   reducers: {
      addUser: (state, action) => {
         const { id, name, token, username, email, image } = action.payload;
         state.id = id;
         state.name = name;
         state.token = token;
         state.username = username;
         state.email = email;
         state.image = image;
      },
   },
   extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder
         .addCase(userLogin.fulfilled, (state, action) => {
            const { id, name, token, username, email, image } =
               action.payload.data;
            state.id = id;
            state.name = name;
            state.token = token;
            state.username = username;
            state.email = email;
            state.image = image;
         })
         .addCase(userLogin.rejected, (state, action) => {
            console.log("No se pudo iniciar sesions");
         });
   },
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;
export { userLogin };
