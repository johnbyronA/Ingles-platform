import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="p-3 bg-dark text-white text-center fixed-bottom">
        <div className="container">
          <p className="lead">Copyright &copy; 2023 - John Byron Alzate</p>
          <a href="#" className="position-absolute bottom-0 end-0 p-5">
            <i className="bi-bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>
    </>
  );
};
