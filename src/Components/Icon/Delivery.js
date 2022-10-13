import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  Box1Bold,
  BoxAddBold,
  BoxRemoveBold,
  BoxSearchBold,
  BoxTickBold,
  BoxTimeBold,
  BoxBold,
  Convert3dCubeBold,
  TruckFastBold,
  TruckRemoveBold,
  TruckTickBold,
  TruckTimeBold,
  TruckBold,
  Box1Outlined,
  BoxAddOutlined,
  BoxRemoveOutlined,
  BoxSearchOutlined,
  BoxTickOutlined,
  BoxTimeOutlined,
  BoxOutlined,
  Convert3dCubeOutlined,
  TruckFastOutlined,
  TruckRemoveOutlined,
  TruckTickOutlined,
  TruckTimeOutlined,
  TruckOutlined,
} from "react-icon-cx";

export const Delivery = () => {
  const [copied, setcopied] = useState(false);

  const delivery_bold = [
    { icon: <Box1Bold/>, icon_name: "Box1Bold" },
    { icon: <BoxAddBold/>, icon_name: "BoxAddBold" },
    { icon: <BoxRemoveBold/>, icon_name: "BoxRemoveBold" },
    { icon: <BoxSearchBold/>, icon_name: "BoxSearchBold" },
    { icon: <BoxTickBold/>, icon_name: "BoxTickBold" },
    { icon: <BoxTimeBold/>, icon_name: "BoxTimeBold" },
    { icon: <BoxBold/>, icon_name: "BoxBold" },
    // { icon: <Convert3dCubeBold/>, icon_name: "Convert3dCubeBold" },
    { icon: <TruckFastBold/>, icon_name: "TruckFastBold" },
    { icon: <TruckRemoveBold/>, icon_name: "TruckRemoveBold" },
    { icon: <TruckTickBold/>, icon_name: "TruckTickBold" },
    { icon: <TruckTimeBold/>, icon_name: "TruckTimeBold" },
    { icon: <TruckBold/>, icon_name: "TruckBold" },
  ]
  const delivery_outlined = [
   
    { icon: <Box1Outlined/>, icon_name: "Box1Outlined" },
    { icon: <BoxAddOutlined/>, icon_name: "BoxAddOutlined" },
    { icon: <BoxRemoveOutlined/>, icon_name: "BoxRemoveOutlined" },
    { icon: <BoxSearchOutlined/>, icon_name: "BoxSearchOutlined" },
    { icon: <BoxTickOutlined/>, icon_name: "BoxTickOutlined" },
    { icon: <BoxTimeOutlined/>, icon_name: "BoxTimeOutlined" },
    { icon: <BoxOutlined/>, icon_name: "BoxOutlined" },
    // {
    //   icon: <Convert3dCubeOutlined/>,
    //   icon_name: "Convert3dCubeOutlined",
    // },
    { icon: <TruckFastOutlined/>, icon_name: "TruckFastOutlined" },
    { icon: <TruckRemoveOutlined/>, icon_name: "TruckRemoveOutlined" },
    { icon: <TruckTickOutlined/>, icon_name: "TruckTickOutlined" },
    { icon: <TruckTimeOutlined/>, icon_name: "TruckTimeOutlined" },
    { icon: <TruckOutlined/>, icon_name: "TruckOutlined" },
  ];

  const copy = () => {
    setcopied(true);
    toast.success("Copied to Clipboard");
  };

  return (
    <>
      <div className="main-panel">
        <div className="tb-container">
          <div className="tb-content-bold">
            <h2 className="icon-heading">Delivery</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {delivery_bold.map((i) => {
                return (
                  <div className="tb-data">
                    <CopyToClipboard text={i.icon_name} onCopy={copy}>
                      <button className="copy-button">
                        <div className="icon-img">{i.icon}</div>
                      </button>
                    </CopyToClipboard>

                    <div className="icon-name" value={i.icon_name}>
                      {i.icon_name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tb-content-outlined">
            <h3 className="icon-type">Outlined</h3>
            <div className="tb-row">
              {delivery_outlined.map((i) => {
                return (
                  <div className="tb-data">
                    <CopyToClipboard text={i.icon_name} onCopy={copy}>
                      <button className="copy-button">
                        <div className="icon-img">{i.icon}</div>
                      </button>
                    </CopyToClipboard>
                    <div className="icon-name">{i.icon_name}</div>
                  </div>
                );
              })}
            </div>
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
