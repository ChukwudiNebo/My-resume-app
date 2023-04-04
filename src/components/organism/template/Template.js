import React, { useState, useEffect } from "react";
import SearchBar from "../../molecules/search bar/SearchBar";

// Data
import ImgData from "../../../Data/ImgData";
import BgImg from "../../atoms/backgroundImage/BgImg";
import Text from "../../atoms/text/Text";

const Template = () => {
  // console.log(ImgData);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPage, setItemsPage] = useState(10);
  const [arrNumber, setArrNumber] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState([]);

  const totalPages = Math.ceil(ImgData.length / itemsPage);

  //prev button
  const prev = () => {
    const lastItem = (currentPage - 1) * 10;
    const items = ImgData.slice(lastItem - 10, lastItem);
    console.log(items, currentPage);
    setItemsPerPage(items);
    if (currentPage > 2) {
      setCurrentPage(currentPage - 1);
    }
  };
  //next button
  const next = () => {
    const lastItem = (currentPage + 1) * 10;
    const items = ImgData.slice(lastItem - 10, lastItem);
    setItemsPerPage(items);
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (page) => {
    let lastItem = page * 10;
    const items = ImgData.slice(lastItem - 10, lastItem);
    setItemsPerPage(items);
    setCurrentPage(page);
  };

  const arr = (len) => {
    let store = [];
    for (let i = 1; i <= len; i++) {
      store.push(i);
    }
    return store;
  };

  useEffect(() => {
    let value = arr(totalPages);
    setArrNumber(value);
    setItemsPerPage(ImgData.slice(0, 10));
  }, []);

  return (
    <>
      <div style={{ marginLeft: "70px", marginTop: "70px" }}>
        <div>
          <div>
            <SearchBar />
          </div>
          <div>
            <Text text="Select a template" />
          </div>
          <div className="d-flex  flex-wrap justify-content-between align-items-center">
            {itemsPerPage.map(({ template, index }) => {
              return (
                <ul key={index} className=" list-unstyled">
                  <li className="template__img">
                    <BgImg img={template} width="300" height="300" />
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div>
            <button onClick={() => prev()}>Prev</button>
          </div>
          <div>
            <div>
              {arrNumber.map((numberArr, index) => (
                <button key={index} onClick={() => paginate(numberArr)}>
                  {numberArr}
                </button>
              ))}
            </div>
          </div>
          <div>
            <button onClick={() => next()}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
