// TODO remove unused variables, for example thunkAPI
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import requests from "./../API/requests";

const userLogin = createAsyncThunk("user/login", async (userData, thunkAPI) => {
   try {
      const user = await requests["Login"](userData);
      //aqui configurar axios
      return user;
   } catch (error) {
      if (error.response.status === 422) {
         // TODO add ? to avoid responses where the expected data structure is
         // not present. Example: error?.response?.data?.errors?.email
         throw new Error(error.response.data.errors.email[0]);
      } else {
         throw new Error("Server error");
      }
   }
});

export const Logout = createAsyncThunk("user/logout", async (userData, thunkAPI) => {
   try {
      const user = await requests["Logout"]();
      return user;
   } catch (error) {
      throw new Error("Server error");
   }
});

export const verifySession = createAsyncThunk(
   "user/verifySession",
   async (userData, thunkAPI) => {
      try {
         const user = await requests["verifySession"]();
         return user;
      } catch (error) {
         if (error.response.status === 422) {
            // TODO see feedback from userLogin
            throw new Error(error.response.data.errors.email[0]);
         } else {
            throw new Error("Server error");
         }
      }
   }
);

export const initialState = {
   id: "",
   name: "",
   token: localStorage.getItem("token"),
   username: "",
   email: "",
   image: "",
   userLoginError: " ",
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
            localStorage.setItem("token", token);
         })
         .addCase(userLogin.rejected, (state, action) => {
            state.userLoginError = "";
            state.userLoginError = action.error.message;
         })
         .addCase(verifySession.fulfilled, (state, action) => {
            const { id, name, username, email, image } =
               action.payload.data;
            state.id = id;
            state.name = name
            state.username = username;
            state.email = email;
            state.image = image;
         }).
         addCase(verifySession.rejected, (state, action) => {
            state.token = ""
            state.id = "";
            state.name = ""
            state.username = "";
            state.email = "";
            state.image = "";
         }).addCase(Logout.fulfilled, (state, action) => {
            state.token = ""
            state.id = "";
            state.name = ""
            state.username = "";
            state.email = "";
            state.image = "";
            localStorage.clear()
         }).addCase(Logout.rejected, (state, action) => {
            state.token = ""
         });;
   },
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;
export { userLogin };
