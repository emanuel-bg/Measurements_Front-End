import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PutMeasure } from "../redux/measuresSlice";
import {
   validateMeasureId,
   validateMeasureAmount,
   validateMeasureDate,
   validateMeasureMeasuredby,
   validateMeasureUserId,
} from "../utils/Validations";

function validate(measureData) {
   let errors = {};
   if (!validateMeasureId(measureData.id)) {
      errors.id = "Invalid measure ID";
      //Only numbers available
   }
   if (!validateMeasureAmount(measureData.amount)) {
      errors.amount = "Invalid measure amount";
      //Only numbers available
   }
   if (!validateMeasureDate(measureData.date)) {
      errors.date = "Invalid measure date";
      //Only mm/dd/yyyy format
   }
   if (!validateMeasureMeasuredby(measureData.measuredby)) {
      errors.measuredby = "Invalid name for Measured By";
      //Only letters
   }
   if (!validateMeasureUserId(measureData.userId)) {
      errors.userId = "Invalid User ID";
      //Only numbers and letters
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
   const measureDataInitialState = objectById(measures.measures, params.id);
   const [measureData, setmeasureData] = useState(measureDataInitialState);
   const [formError, setFormError] = useState({});

   const handleChange = (e) => {
      let value = e.target.value;
      let name = e.target.name;
      setmeasureData((prevData) => {
         return { ...prevData, [name]: value };
      });
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
                     <label>ID</label>
                     <input
                        type="text"
                        value={measureData.id}
                        className="form-control"
                        id="idInput"
                        name="id"
                        placeholder="Enter ID"
                        readOnly
                     />
                     {<span className="text-danger">{formError.id}</span>}
                  </div>
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
                        type="date"
                        value={measureData.date}
                        className="form-control"
                        id="dateInput"
                        name="date"
                        placeholder="Select Date"
                        onChange={handleChange}
                     />
                     {<span className="text-danger">{formError.date}</span>}
                  </div>
                  <div className="form-group">
                     <label>Measured By</label>
                     <input
                        type="text"
                        value={measureData.measuredby}
                        className="form-control"
                        id="measuredByInput"
                        name="measuredby"
                        placeholder="Enter Measured By"
                        onChange={handleChange}
                     />
                     {
                        <span className="text-danger">
                           {formError.measuredby}
                        </span>
                     }
                  </div>
                  <div className="form-group">
                     <label>User ID</label>
                     <input
                        type="text"
                        className="form-control"
                        value={measureData.userId}
                        id="userIdInput"
                        name="userId"
                        placeholder="Enter User ID"
                        onChange={handleChange}
                     />
                     {<span className="text-danger">{formError.userId}</span>}
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
