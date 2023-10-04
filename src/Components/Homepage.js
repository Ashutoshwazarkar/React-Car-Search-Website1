import React, { useState } from "react";
import './style.css';
import data from "./TemplateData.json";
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from "./Pagination";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState("");

  const [showPerPage, setShowPerPage] = useState(6);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <>
      <div className="Container">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control w-20" type="search" placeholder="Search here.." onChange={(event) => {
                setSearchTerm(event.target.value);
              }} />
              <div class="dropdown mx-3">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Relevance
                </a>
              </div>
              <div class="dropdown mx-3">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Brands
                </a>
              </div>
            </form>
          </div>
        </nav>
        <div className="row" style={{ padding: " 14px" }}>
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return true; // Return all items if search term is empty
              } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return true; // Return items that match the search term
              }
              return false; // Filter out items that don't match
            })
            .slice(pagination.start, pagination.end) // Limit to 6 items
            .map((val) => (
              <div className="col-4 mb-2" key={val.id}>
                <div className="card " style={{ width: "100%" }}>
                  <img src={val.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <div className="flex mb-3">
                      <h5 className="card-title">{val.title}</h5>
                      <button type="button" className="btn btn-outline-primary ml-auto">{val.start_production}</button>
                    </div>
                    <div className="flex">
                      <span className="cat">{val.class}</span>
                      <p className="price ml-auto">$500 <span>/day</span></p>
                    </div>
                    <a href="#" className="btn btn-primary">Rent Now</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={data.length}
        />
      </div>
    </>
  )
}

export default Homepage;
