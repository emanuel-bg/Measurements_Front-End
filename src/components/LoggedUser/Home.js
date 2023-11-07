import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMeasures } from "../../redux/measuresSlice";

export default function Home() {
   const dispatch = useDispatch();
   const measures = useSelector((state) => state.measures);
   useEffect(() => {
      dispatch(GetMeasures());
   }, [dispatch]);

   return (
      <div className="bg-dark h-100">
         <div className="m-4">
            <table className="table ">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Amount</th>
                     <th>Date</th>
                     <th>Measured by</th>
                     <th>User ID</th>
               
                  </tr>
               </thead>
               <tbody>
                  {measures.measures.map((d, i) => (
                     <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.amount}</td>
                        <td>{d.date}</td>
                        <td>{d.measuredby}</td>
                        <td>{d.UserID}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
