import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import format from "date-fns-tz/format";
import { GetMeasure } from "../redux/measuresSlice";
import utcToZonedTime from "date-fns-tz/utcToZonedTime";

export default function ViewMeasure() {
    const params = useParams();
    const measures = useSelector((state) => state.measures);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetMeasure(params.id));
    }, [dispatch, params.id]);

    return (
        <div className="container">
            <div className="row vh-100 align-items-center">
                <div className="col-md-12">
                    <h1 className="text-center">Measurement:</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Details</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>ID:</strong>{" "}
                                    {measures.selectedMeasure.id}
                                </li>
                                <li className="list-group-item">
                                    <strong>Amount:</strong>{" "}
                                    {measures.selectedMeasure.amount}
                                </li>
                                <li className="list-group-item">
                                    <strong>Date:</strong>{" "}
                                    {measures.selectedMeasure.date // TODO move this logic to a variable outside of the jsx code, it will help read and maintain
                                        ? format(
                                              utcToZonedTime(
                                                  +measures.selectedMeasure
                                                      .date * 1000,
                                                  "America/Costa_Rica"
                                              ),
                                              "dd/MM/yyyy hh:mm a"
                                          ).toString()
                                        : ""}
                                </li>
                                <li className="list-group-item">
                                    <strong>Measured By:</strong>{" "}
                                    {measures.selectedMeasure.measuredby}
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h4>Other Information</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>User ID:</strong>{" "}
                                    {measures.selectedMeasure.userId}
                                </li>
                                <li className="list-group-item">
                                    <strong>Created At:</strong>{" "}
                                    {measures.selectedMeasure.created_at // TODO move this logic to a variable outside of the jsx code, it will help read and maintain
                                        ? format(
                                              utcToZonedTime(
                                                  +measures.selectedMeasure
                                                      .created_at * 1000,
                                                  "America/Costa_Rica" // TODO timezone should not be hardcoded, it should come from config, env variable or API
                                              ),
                                              "dd/MM/yyyy hh:mm a"
                                          ).toString()
                                        : ""}
                                </li>
                                <li className="list-group-item">
                                    <strong>Updated At:</strong>{" "}
                                    {measures.selectedMeasure.updated_at // TODO move this logic to a variable outside of the jsx code, it will help read and maintain
                                        ? format(
                                              utcToZonedTime(
                                                  +measures.selectedMeasure
                                                      .updated_at * 1000,
                                                  "America/Costa_Rica"
                                              ),
                                              "dd/MM/yyyy hh:mm a"
                                          ).toString()
                                        : ""}
                                </li>
                                <li className="list-group-item">
                                    <strong>Image Name:</strong>{" "}
                                    {measures.selectedMeasure.imageName}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
