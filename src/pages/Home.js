import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { GetMeasures } from "../redux/measuresSlice";
import NewMeasureButton from "../components/NewMeasureButton";
import { Modal, Button } from "react-bootstrap";
import { DeleteMeasure } from "../redux/measuresSlice";

export default function Home() {
   const dispatch = useDispatch();
   const measures = useSelector((state) => state.measures);
   const [show, setShow] = useState(false);
   const [selectedToDelete, setselectedToDelete] = useState("");
   const handleClose = () => setShow(false);
   const handleShow = (i) => {
      setShow(true);
      setselectedToDelete(i);
   };

   // useEffect(() => {
   //    dispatch(GetMeasures());
   // }, [dispatch]);

   const handleDelete = async (i, e) => {
      dispatch(DeleteMeasure(selectedToDelete));
      handleClose();
   };

   return (
      <div className="bg-dark vh-100">
         <div className="d-flex flex-column m-4">
            <NewMeasureButton />

            <table className="table table-dark">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Amount</th>
                     <th>Date</th>
                     <th>Measured by</th>
                     <th>User ID</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {measures.measures.map((d, i) => (
                     <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.amount}</td>
                        <td>{d.date}</td>
                        <td>{d.measuredby}</td>
                        <td>{d.userId}</td>
                        <td>
                           <button
                              className="btn btn-danger"
                              onClick={() => handleShow(d.id)}
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Delete Measure</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Are you sure you want to delete the measure?({selectedToDelete})
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="danger" onClick={handleDelete}>
                  Delete
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
}
