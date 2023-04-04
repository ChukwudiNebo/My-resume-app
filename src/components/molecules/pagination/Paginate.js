import React from 'react'

const Paginate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPage, setItemsPage] = useState(10);
  const [arrNumber, setArrNumber] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState([]);

  const totalPages = Math.ceil(data.length / itemsPage);
  //prev button
  const prev = () => {
    const lastItem = (currentPage - 1) * 10;
    const items = data.slice(lastItem - 10, lastItem);
    console.log(items, currentPage);
    setItemsPerPage(items);
    if (currentPage > 2) {
      setCurrentPage(currentPage - 1);
    }
  };
  //next button
  const next = () => {
    const lastItem = (currentPage + 1) * 10;
    const items = data.slice(lastItem - 10, lastItem);
    setItemsPerPage(items);
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    }
    // console.log(currentPage)
  };

  const paginate = (page) => {
    let lastItem = page * 10;
    const items = data.slice(lastItem - 10, lastItem);
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
    setItemsPerPage(data.slice(0, 10));
  }, []);
  return (
    <>
      <div>
        <div>
          {itemsPerPage.map((item, index) => (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          ))}
        </div>
        <div className="d-flex">
          <button onClick={() => prev()}>Prev</button>
          <div>
            {arrNumber.map((numberArr, index) => (
              <button key={index} onClick={() => paginate(numberArr)}>
                {numberArr}
              </button>
            ))}
          </div>
          {/* <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
        </div> */}
          <button onClick={() => next()}>Next</button>
        </div>
        <div>Total pages - {totalPages}</div>
      </div>
    </>
  );
}

export default Paginate
