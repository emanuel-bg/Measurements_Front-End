import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GetMeasures, SearchMeasures } from "../../redux/measuresSlice";
import { validateJustNumbers } from "../../utils/validations";
import { getUnixTime } from "date-fns";

function validate(search) {
    let errors = {};
    switch (search.selectedAttribute) {
        case "date":
            if (!validateJustNumbers(search.search)) {
                errors.searchText = "Invalid date";
            }
            break;

        case "amount":
            if (
                // TODO refactor to a single line if statement using variables
                !validateJustNumbers(search.search) ||
                search.search === null
            ) {
                errors.searchText = "Invalid amount(Just numbers)";
            }
            break;

        default:
            errors.attribute = "Invalid attribute";
            break;
    }

    return errors;
}

const SearchMenu = () => {
    const dispatch = useDispatch();
    const [selectedAttribute, setSelectedAttribute] = useState("");
    const [searchText, setSearchText] = useState("");
    const [formErrors, setFormErrors] = useState({});

    const handleSearch = () => {
        onSearch(selectedAttribute, searchText);
    };

    const handleClear = () => {
        setSelectedAttribute("");
        setSearchText("");
        setFormErrors({});
        onClear();
    };

    const onClear = () => {
        dispatch(GetMeasures());
    };

    const onSearch = (selectedAttribute, searchText) => {
        let search = "";

        if (selectedAttribute === "date") {
            search = getUnixTime(new Date(searchText)).toString();
        } else {
            search = searchText;
        }

        const errors = validate({ selectedAttribute, search });
        setFormErrors(errors);
        const formOk = Object.keys(errors).length;

        if (!formOk) {
            dispatch(SearchMeasures({ selectedAttribute, search }));
        }
    };

    return (
        <div className="container mt-4">
            <div className="row  align-items-center">
                <div className="col-md-3">
                    <select
                        className="form-select form-select-sm"
                        value={selectedAttribute}
                        onChange={(e) => {
                            setSelectedAttribute(e.target.value);
                            setSearchText("");
                            setFormErrors({});
                        }}
                    >
                        <option value="">Select an attribute</option>
                        <option value="amount">Amount</option>
                        <option value="date">Date</option>
                    </select>
                    {
                        <span className="text-danger">
                            {formErrors.attribute}
                        </span>
                    }
                </div>
                <div className="col-md-5">
                    <input
                        className="form-control form-control-sm"
                        type={
                            selectedAttribute === "date"
                                ? "datetime-local"
                                : "text"
                        }
                        placeholder="Search Text"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            setFormErrors({});
                        }}
                    />
                    {
                        <span className="text-danger">
                            {formErrors.searchText}
                        </span>
                    }
                </div>

                <div className="col-md-2">
                    <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={handleSearch}
                    >
                        Buscar
                    </button>
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={handleClear}
                    >
                        Limpiar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchMenu;
