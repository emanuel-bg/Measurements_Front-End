
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PostMeasure } from "../redux/measuresSlice";
import { getUnixTime } from "date-fns";
import { validate } from "../utils/validations";

export default function NewMeasure() {
   const measureDataInitialState = {
      amount: "",
      calendarDate: "",
      measuredby: "",
      image: "",
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
         measureData.date = getUnixTime(new Date(measureData.calendarDate));
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
                        type="datetime-local"
                        className="form-control"
                        id="dateInput"
                        name="calendarDate"
                        placeholder="Select Date"
                        onChange={handleChange}
                     />
                     {<span className="text-danger">{formError.date}</span>}
                  </div>
                  <div className="form-group">
                     <label>
                        Image <span className="text-info">(optional)</span>
                     </label>
                     <input
                        type="file"
                        className="form-control"
                        id="imageInput"
                        name="image"
                        onChange={handleImage}
                     />
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
