import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PostMeasure } from "../redux/measuresSlice";
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

export default function NewMeasure() {
   const measureDataInitialState = {
      id: "1",
      amount: "2",
      date: "12/12/2000",
      measuredby: "Ema",
      userId: "12",
      image: {},
   };

   const [measureData, setmeasureData] = useState(measureDataInitialState);
   const [formError, setFormError] = useState({});

   const handleChange = (e) => {
      let value = e.target.value;
      let name = e.target.name;
      setmeasureData((prevData) => {
         return { ...prevData, [name]: value };
      });
   };

   const handleImage = (e) => {
      let value = e.target.files[0];
      setmeasureData((prevData) => {
         return { ...prevData, image: value };
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
         console.log(measureData);
         dispatch(PostMeasure(measureData));
         console.log("Se actualizo measures");
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
                        value={measureData.id}
                        type="text"
                        className="form-control"
                        id="idInput"
                        name="id"
                        placeholder="Enter ID"
                        onChange={handleChange}
                     />
                     {<span className="text-danger">{formError.id}</span>}
                  </div>
                  <div className="form-group">
                     <label>Amount</label>
                     <input
                        value={measureData.amount}
                        type="text"
                        className="form-control"
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
                        value={measureData.date}
                        type="date"
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
                        value={measureData.measuredby}
                        type="text"
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
                        value={measureData.userId}
                        type="text"
                        className="form-control"
                        id="userIdInput"
                        name="userId"
                        placeholder="Enter User ID"
                        onChange={handleChange}
                     />
                     {<span className="text-danger">{formError.userId}</span>}
                  </div>
                  <div className="form-group">
                     <label>Image</label>
                     <input
                        type="file"
                        className="form-control"
                        id="imageInput"
                        name="image"
                        onChange={handleImage}
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
