import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMeasures } from "../utils/CallApi";

export const initialState = {
   measures: [],
};

// Measures
const GetMeasures = createAsyncThunk(
   "measures/getMeasures",
   async (thunkAPI) => {
      try {
         const measures = await getMeasures();
         return measures;
      } catch (error) {
         console.error("Error al obtener los measures:", error.message);
         throw error;
      }
   }
);

// const PostMeasure = createAsyncThunk(
//    "measures/postMeasure",
//    async (measure, thunkAPI) => {
//       try {
//       } catch (error) {
//          throw error;
//       }
//    }
// );

// const PutMeasure = createAsyncThunk(
//    "measures/putMeasure",
//    async (measure, thunkAPI) => {
//       try {
//       } catch (error) {
//          throw error;
//       }
//    }
// );

// const GetMeasure = createAsyncThunk(
//    "measures/getMeasure",
//    async (measureId, thunkAPI) => {
//       try {
//       } catch (error) {
//          throw error;
//       }
//    }
// );

// const DeleteMeasure = createAsyncThunk(
//    "measures/deleteMeasure",
//    async (measureId, thunkAPI) => {
//       try {
//       } catch (error) {
//          throw error;
//       }
//    }
// );

export const measuresSlice = createSlice({
   name: "measures",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(GetMeasures.fulfilled, (state, action) => {
         state.measures = action.payload;
      });
   },
});

export default measuresSlice.reducer;
export { GetMeasures };
