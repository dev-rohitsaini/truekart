import React, { useState } from "react";
const Sidebar = (props) => {
  const [currentSideLink, setCurrentSideLink] = useState(-1);
  const cat = props.cat;
  const handleClick = (e) => {
    const currentId = e.target.getAttribute("data-id");
    props.handleClick(currentId);
    setCurrentSideLink(currentId);
  };
  const handleChange = (e) => {
    props.setRecordsPerPage(e.target.value);
  };

  return (
    <>
      <div className="col-12 col-sm-3 mt-3">
        <div className="card bg-light mb-3">
          <div className="card-header bg-secondary text-white text-uppercase">
            <i className="fa fa-list" /> Categories
          </div>
          <ul className="list-group category_block side-link">
            {cat.map((element, index) => (
              <li
                key={element.id}
                style={{ cursor: "pointer" }}
                onClick={handleClick}
                data-id={element.id}
                className={`list-group-item  ${
                  element.id == currentSideLink ? "active" : currentSideLink
                }`}
              >
                <a data-id={element.id}>{element.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-header bg-secondary text-white text-uppercase">
          <div className="card-header bg-secondary text-white text-uppercase border-0 pt-2">
            Product Per Pgae
          </div>

          <div className="card-header text-white text-uppercase  mt-2">
            <select
              className="form-select border-radious-0"
              aria-label="Default select example"
              onChange={handleChange}
              defaultValue={"DEFAULT"}
            >
              <option value={12}>Select Limit</option>
              <option value={15}>15 Products Per Pgae</option>
              <option value={20}>30 Products Per Pgae</option>
              <option value={50}>50 Products Per Pgae</option>
              <option value={100}>100 Products Per Pgae</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
