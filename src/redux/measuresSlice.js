import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
   getMeasures,
   postMeasure,
   deleteMeasure,
   putMeasure,
} from "../API/requests";

export const initialState = {
   measures: [
      {
         id: "1",
         amount: "200",
         date: "2023-11-26",
         measuredby: "Emmanuel Barrientos",
         userId: "1",
         image: {}
      },
      {
         id: "2",
         amount: "1000",
         date: "2023-11-26",
         measuredby: "Emmanuel Barrientos",
         userId: "1",
         image:{}
      },
      {
         id: "3",
         amount: "1000",
         date: "2023-11-26",
         measuredby: "Emmanuel Barrientos",
         userId: "1",
         image: {},
      },
   ],
};

// Measures
const GetMeasures = createAsyncThunk(
   "measures/getMeasures",
   async (measures, thunkAPI) => {
      try {
         const response = await getMeasures();
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
         debugger
         const response = await postMeasure(measure);
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
         const response = await putMeasure(measure);
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
         const response = await deleteMeasure(measureId);
         return response;
      } catch (error) {
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
            state.measures = [...state.measures, action.payload];
         })
         .addCase(PutMeasure.fulfilled, (state, action) => {
            const measures = state.measures;
            for (let i = 0; i < measures.length; i++) {
               if (action.payload.id === measures[i].id) {
                  measures[i].amount = action.payload.amount;
                  measures[i].date = action.payload.date;
                  measures[i].measuredby = action.payload.measuredby;
                  measures[i].userId = action.payload.userId;
               }
            }
            state.measures = measures;
         })
         .addCase(DeleteMeasure.fulfilled, (state, action) => {

            const measures = state.measures.filter(
               (o) => o.id !== action.payload.toString()
            );
            state.measures = measures;
         });
   },
});

export default measuresSlice.reducer;
export { GetMeasures, PostMeasure, DeleteMeasure, PutMeasure };
//export const { } = measuresSlice.actions;
