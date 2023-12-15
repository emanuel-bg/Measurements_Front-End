import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PutMeasure, GetMeasures } from "../redux/measuresSlice";
import getUnixTime from "date-fns/getUnixTime";
import { validateMeasureAmount } from "../utils/Validations";
import { useEffect } from "react";

function validate(measureData) {
   let errors = {};
   if (!validateMeasureAmount(measureData.amount.toString())) {
      errors.amount = "Invalid measure amount";
      //Only numbers available
   }
   if (!measureData.calendarDate) {
      errors.date = "Invalid date";
      //Only numbers available
   }

   return errors;
}

function objectById(array, id) {
   for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
         var newObj = Object.assign({}, array[i]);
         return newObj;
      }
   }
}

export default function EditMeasure() {
   const params = useParams();
   const measures = useSelector((state) => state.measures);
   const user = useSelector((state) => state.user);
   const navigate = useNavigate();

   const measureDataInitialState = { amount: "", calendarDate: "" };
   const [measureData, setmeasureData] = useState(measureDataInitialState);
   const [formError, setFormError] = useState({});

   useEffect(() => {
      if (!measures.measures || !measures.measures.length) {
         navigate("/");
      } else {
         let measureDataInitialState = objectById(measures.measures, params.id);
         const date = new Date(measureDataInitialState.date * 1000);
         const year = date.getFullYear();
         const month = String(date.getMonth() + 1).padStart(2, "0");
         const day = String(date.getDate()).padStart(2, "0");
         const hours = String(date.getHours()).padStart(2, "0");
         const minutes = String(date.getMinutes()).padStart(2, "0");
         const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
         measureDataInitialState.calendarDate = formattedDateTime;
         setmeasureData(measureDataInitialState);
      }
   }, []);

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
