import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PutMeasure } from "../redux/measuresSlice";
import getUnixTime from "date-fns/getUnixTime";
import {
   validateMeasureAmount
} from "../utils/Validations";
import { fromUnixTime } from "date-fns";

function validate(measureData) {
   let errors = {};
   if (!validateMeasureAmount(measureData.amount)) {
      errors.amount = "Invalid measure amount";
      //Only numbers available
   }
   if (!measureData.date) {
      errors.date = "Invalid date";
      //Only numbers available
   }


   return errors;
}

function objectById(array, id) {
   for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
         return array[i];
      }
   }
}

export default function EditMeasure() {
   const params = useParams();
   const measures = useSelector((state) => state.measures);
   const user = useSelector((state) => state.user);

   var measureDataInitialState = objectById(measures.measures, params.id);
   const [measureData, setmeasureData] = useState(measureDataInitialState);
   const [formError, setFormError] = useState({});

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
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleNewMeasure = async (e) => {
      e.preventDefault();
      setFormError({});
      const errors = validate(measureData);
      setFormError(errors);
      const formOk = Object.keys(errors).length;
      if (!formOk) {
         measureData.userId = user.id;
         measureData.measuredby = user.username;
         measureData.date = getUnixTime(new Date(measureData.calendarDate));
         measureData.updated_at = getUnixTime(new Date(Date.now()));
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
                  onSubmit={handleNewMeasure}
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
                        name="date"
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
