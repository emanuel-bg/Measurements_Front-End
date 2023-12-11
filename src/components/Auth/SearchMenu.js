import React, { useState } from "react";

const SearchMenu = ({ attributes, onSearch, onClear }) => {
   const [selectedAttribute, setSelectedAttribute] = useState("");
   const [searchText, setSearchText] = useState("");

   const handleSearch = () => {
      onSearch(selectedAttribute, searchText);
   };

   const handleClear = () => {
      setSelectedAttribute("");
      setSearchText("");
      onClear();
   };

   return (
      <div className="container mt-4">
         <div className="row  align-items-center">
            <div className="col-md-3">
               <select
                  className="form-select form-select-sm"
                  value={selectedAttribute}
                  onChange={(e) => setSelectedAttribute(e.target.value)}
               >
                  <option value="">Seleccionar atributo</option>
                  {/* {attributes.map((attribute, index) => (
                     <option key={index} value={attribute}>
                        {attribute}
                     </option>
                  ))} */}
               </select>
            </div>
            <div className="col-md-5">
               <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Texto de búsqueda"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
               />
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
