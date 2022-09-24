import React from "react";
import "./landing.css";
import code_img from "../Homepage/Usecase.png";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export const Landing_page = () => {
  const copy = () => {
    // setcopied(true);
    toast.success("Copied to Clipboard");
  };

  return (
    <>
      <div className="main-panel" id="homapge">
        <div className="tb-container">
          <h2 className="home-title">React Icon CX</h2>
          <div className="sub-title">Installation</div>
          <div className="npm-copy">
            <p className="npm-copy-text">
              npm install react-icons --save{" "}
              <p className="button-copy">
                <CopyToClipboard
                  text="npm install react-icons --save"
                  onCopy={copy}
                >
                  <button className="button-copy">copy</button>
                </CopyToClipboard>
              </p>
            </p>
          </div>
          <div className="sub-title">Usage</div>
          <div className="demo-container">
            <img className="demo-img" src={code_img}></img>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={500}
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
