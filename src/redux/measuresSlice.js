import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import requests from "../API/requests";
export const initialState = {
   measures: [],
};

// Measures
const GetMeasures = createAsyncThunk(
   "measures/getMeasures",
   async (measures, thunkAPI) => {
      try {
         const response = await requests["getMeasures"]();
         return response.data;
      } catch (error) {
         console.error("Error getting the measures:", error.message);
         throw error;
      }
   }
);

const PostMeasure = createAsyncThunk(
   "measures/postMeasure",
   async (measure, thunkAPI) => {
      try {
         const response = await requests["postMeasure"](measure);
         return response;
      } catch (error) {
         console.error("Error creating the measure:", error.message);
         throw error;
      }
   }
);

const PutMeasure = createAsyncThunk(
   "measures/putMeasure",
   async (measure, thunkAPI) => {
      try {
         const response = await requests["putMeasure"](measure);
         return response;
      } catch (error) {
         throw error;
      }
   }
);

const DeleteMeasure = createAsyncThunk(
   "measures/deleteMeasure",
   async (measureId, thunkAPI) => {
      try {
         const response = await requests["deleteMeasure"](measureId);
         return response;
      } catch (error) {
         throw error;
      }
   }
);

export const SearchMeasures = createAsyncThunk(
   "measures/searchMeasures",
   async (search, thunkAPI) => {
      try {
         
         const response = await requests["search"](search);
         return response.data;
      } catch (error) {
         console.error("Error getting the measures:", error.message);
         throw error;
      }
   }
);

export const measuresSlice = createSlice({
   name: "measures",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder
         .addCase(GetMeasures.fulfilled, (state, action) => {
            state.measures = action.payload;
         })
         .addCase(GetMeasures.rejected, (state, action) => {
            state.measures = [];
         })
         .addCase(PostMeasure.fulfilled, (state, action) => {
            state.measures = [...state.measures, action.payload.data];
         })
         .addCase(PutMeasure.fulfilled, (state, action) => {
            const measures = state.measures;
            for (let i = 0; i < measures.length; i++) {
               if (action.payload.id === measures[i].id) {
                  measures[i].amount = action.payload.amount;
                  measures[i].date = action.payload.date;
                  measures[i].measuredby = action.payload.measuredby;
                  measures[i].userId = action.payload.userId;
                  measures[i].updated_at = action.payload.updated_at;
               }
            }
            state.measures = measures;
         })
         .addCase(DeleteMeasure.fulfilled, (state, action) => {
            const measures = state.measures.filter(
               (o) => o.id.toString() !== action.payload.deletedId.toString()
            );
            state.measures = measures;
         })
         .addCase(SearchMeasures.fulfilled, (state, action) => {
            state.measures = action.payload;
         })
         .addCase(SearchMeasures.rejected, (state, action) => {
            state.measures = [];
         });
   },
});

export default measuresSlice.reducer;
export { GetMeasures, PostMeasure, DeleteMeasure, PutMeasure };
