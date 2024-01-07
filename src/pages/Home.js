import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMeasures } from "../redux/measuresSlice";
import NewMeasureButton from "../components/NewMeasureButton";
import { Modal, Button } from "react-bootstrap";
import { DeleteMeasure } from "../redux/measuresSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchMenu from "../components/Auth/SearchMenu";
import formattedDate from "../utils/formattedDate";

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const measures = useSelector((state) => state.measures);

    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState("");
    const handleClose = () => setShow(false);

    const handleShow = (i) => {
        setShow(true);
        setSelected(i);
    };

    useEffect(() => {
        dispatch(GetMeasures());
    }, [dispatch]);

    const handleDelete = async (i, e) => {
        dispatch(DeleteMeasure(selected));
        handleClose();
    };
    const handleEdit = (i) => {
        navigate("/measure/" + i);
    };

    const handleView = (i) => {
        navigate("/measure/view/" + i);
    };

    return (
        <div className="bg-dark vh-100">
            <SearchMenu />
            <div className="d-flex flex-column m-4">
                <NewMeasureButton />
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Measured by</th>
                            <th>Created at</th>
                            <th>Updated at</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {measures.measures.map((d, i) => {
                            return (
                                <tr key={i}>
                                    <td>{d.amount}</td>
                                    <td>{formattedDate(d.date)}</td>
                                    <td>{d.measuredby}</td>
                                    <td>{formattedDate(d.created_at)}</td>
                                    <td>{formattedDate(d.updated_at)}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary me-2"
                                            onClick={() => handleView(d.id)}
                                        >
                                            <i className="bi bi-eye-fill"></i>
                                        </button>
                                        <button
                                            className="btn btn-warning me-2"
                                            onClick={() => handleEdit(d.id)}
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </button>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleShow(d.id)}
                                        >
                                            <i className="bi bi-trash3"></i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Measure</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the measure?({selected})
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
