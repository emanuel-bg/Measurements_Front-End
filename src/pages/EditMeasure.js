import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PutMeasure, GetMeasure } from "../redux/measuresSlice";
import getUnixTime from "date-fns/getUnixTime";
import { useEffect } from "react";
import { validate } from "../utils/validations";


export default function EditMeasure() {
   const params = useParams();
   const measures = useSelector((state) => state.measures);
   const navigate = useNavigate();

   const measureDataInitialState = { amount: "", calendarDate: "" };
   const [measureData, setmeasureData] = useState(measureDataInitialState);
   const [formError, setFormError] = useState({});
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(GetMeasure(params.id));
   }, [dispatch, params.id]);

   useEffect(() => {
      if (measures.selectedMeasure) {
         setmeasureData(measures.selectedMeasure);
      }
   }, [measures.selectedMeasure]);

   const handleChange = (e) => {
      let value = e.target.value;
      let name = e.target.name;
      setmeasureData((prevData) => {
         return {
            ...prevData,
            [name]: value,
         };
      });
      console.log(measureData);
   };

   const handlePutMeasure = async (e) => {
      e.preventDefault();
      setFormError({});
      const errors = validate(measureData);
      setFormError(errors);
      const formOk = Object.keys(errors).length;
      if (!formOk) {
         measureData.date = getUnixTime(new Date(measureData.calendarDate));
         dispatch(PutMeasure(measureData));
         navigate("/");
      }
   };

   return (
      <div className="container">
         <div className="row d-flex justify-content-center bg-dark vh-100 align-items-center">
            <div className="col-md-4">
               <h1 className="text-center">Measure</h1>
               <form
                  autoComplete="false"
                  id="newMeasure"
                  onSubmit={handlePutMeasure}
               >
                  <div className="form-group">
                     <label>Amount</label>
                     <input
                        type="text"
                        className="form-control"
                        value={measureData.amount}
                        id="amountInput"
                        name="amount"
                        placeholder="Enter Amount"
                        onChange={handleChange}
                     />
                     {<span className="text-danger">{formError.amount}</span>}
                  </div>
                  <div className="form-group">
                     <label>Date</label>
                     <input
                        type="datetime-local"
                        value={measureData.calendarDate}
                        className="form-control"
                        id="dateInput"
                        name="calendarDate"
                        placeholder="Select Date"
                        onChange={handleChange}
                     />
                     {<span className="text-danger">{formError.date}</span>}
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}
