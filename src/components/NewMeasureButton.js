import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewMeasureButton() {
   const navigate = useNavigate();

   return (
      <>
         <button
            title="New Measure"
            className="btn btn-primary btn-lg w-25 text-light mb-2 align-self-end"
            onClick={() => {
               navigate("/measure/new");
            }}
         >
            New Measure
         </button>
      </>
   );
}
