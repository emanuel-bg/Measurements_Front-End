// TODO remove usused variables
// TODO remove console.log. It should be used only on development. In production
// we should use another service like Sentry
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import requests from "../api";

export const initialState = {
    measures: [],
    selectedMeasure: {},
};

// Measures
export const GetMeasures = createAsyncThunk(
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
export const GetMeasure = createAsyncThunk(
    "measures/getMeasure",
    async (measureId, thunkAPI) => {
        try {
            const response = await requests["getMeasure"](measureId);
            return response;
        } catch (error) {
            throw error;
        }
    }
);

export const PostMeasure = createAsyncThunk(
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

export const PutMeasure = createAsyncThunk(
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

export const DeleteMeasure = createAsyncThunk(
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
            .addCase(GetMeasure.fulfilled, (state, action) => {
                debugger; // TODO remove debugger
                // TODO this is a big piece of logic, consider moving it to its own file
                // add unit tests
                let measureData = action.payload.data;
                const date = new Date(measureData.date * 1000);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const day = String(date.getDate()).padStart(2, "0");
                const hours = String(date.getHours()).padStart(2, "0");
                const minutes = String(date.getMinutes()).padStart(2, "0");
                const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
                measureData.calendarDate = formattedDateTime;
                state.selectedMeasure = measureData;
            })
            .addCase(GetMeasure.rejected, (state, action) => {
                state.selectedMeasure = {};
            })
            .addCase(PostMeasure.fulfilled, (state, action) => {
                state.measures = [...state.measures, action.payload.data];
            })
            .addCase(PutMeasure.fulfilled, (state, action) => {
                // TODO this is a big piece of logic, consider moving it to its own file
                // add unit tests
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
            .addCase(PutMeasure.rejected, (state, action) => {
                state.measures = [];
            })
            .addCase(DeleteMeasure.fulfilled, (state, action) => {
                // TODO add ? to avoid issues on unexpected data
                // action?.payload?.data
                const measures = state.measures.filter(
                    (o) =>
                        o.id.toString() !==
                        action.payload.data.deletedId.toString()
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
