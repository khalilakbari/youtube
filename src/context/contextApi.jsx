import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

 const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
     fetchSelectedCategoryData(selectCategories)
  }, [selectCategories]);

  const fetchSelectedCategoryData = (guery) => {
      setLoading(true)
      fetchDataFromApi(`search/?q=${guery}`)
      .then(res => {
        console.log(res);
        // setSearchResults(res)
        setLoading(false)
      })
  }

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default AppContext
