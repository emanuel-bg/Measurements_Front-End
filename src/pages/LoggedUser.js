import React from "react";
import NavBar from "../components/NavBar";
import Content from "../routes";
import { useDispatch } from "react-redux";
import { verifySession } from "../redux/userSlice";
import { GetMeasures } from "../redux/measuresSlice";
import { useEffect } from "react";

export default function LoggedUser() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(verifySession());
        dispatch(GetMeasures());
    }, [dispatch]);

    return (
        <>
            {" "}
            <div>
                <div className="text-light ">
                    <NavBar />
                    <Content />
                </div>
            </div>
        </>
    );
}
