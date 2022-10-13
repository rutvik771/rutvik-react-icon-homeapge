import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    BankBold
    ,Building3Bold
    ,Building4Bold
    ,Buildings2Bold
    ,BuildingsBold
    ,BuildingBold
    ,BulidingBold
    ,CourthouseBold
    ,HospitalBold
    ,House2Bold
    ,HouseBold
    ,BankOutlined
    ,Building3Outlined
    ,Building4Outlined
    ,Buildings2Outlined
    ,BuildingsOutlined
    ,BuildingOutlined
    ,BulidingOutlined
    ,CourthouseOutlined
    ,HospitalOutlined
    ,House2Outlined
    ,HouseOutlined
    
} from "react-icon-cx";

export const Building = () => {
  const [copied, setcopied] = useState(false);

  const building_bold =  [
    { icon: <BankBold/>, icon_name: 'BankBold' },
    { icon: <Building3Bold/>, icon_name: 'Building3Bold' },
    { icon: <Building4Bold/>, icon_name: 'Building4Bold' },
    { icon: <Buildings2Bold/>, icon_name: 'Buildings2Bold' },
    { icon: <BuildingsBold/>, icon_name: 'BuildingsBold' },
    { icon: <BuildingBold/>, icon_name: 'BuildingBold' },
    { icon: <BulidingBold/>, icon_name: 'BulidingBold' },
    { icon: <CourthouseBold/>, icon_name: 'CourthouseBold' },
    { icon: <HospitalBold/>, icon_name: 'HospitalBold' },
    { icon: <House2Bold/>, icon_name: 'House2Bold' },
    { icon: <HouseBold/>, icon_name: 'HouseBold' }
  ]
  const building_outlined =  [
    { icon: <BankOutlined/>, icon_name: 'BankOutlined' },
    { icon: <Building3Outlined/>, icon_name: 'Building3Outlined' },
    { icon: <Building4Outlined/>, icon_name: 'Building4Outlined' },
    { icon: <Buildings2Outlined/>, icon_name: 'Buildings2Outlined' },
    { icon: <BuildingsOutlined/>, icon_name: 'BuildingsOutlined' },
    { icon: <BuildingOutlined/>, icon_name: 'BuildingOutlined' },
    { icon: <BulidingOutlined/>, icon_name: 'BulidingOutlined' },
    { icon: <CourthouseOutlined/>, icon_name: 'CourthouseOutlined' },
    { icon: <HospitalOutlined/>, icon_name: 'HospitalOutlined' },
    { icon: <House2Outlined/>, icon_name: 'House2Outlined' },
    { icon: <HouseOutlined/>, icon_name: 'HouseOutlined' }
  ]
  

  const copy = () => {
    setcopied(true);
    toast.success("Copied to Clipboard");
  };

  return (
    <>
      <div className="main-panel">
        <div className="tb-container">
          <div className="tb-content-bold">
            <h2 className="icon-heading">Building</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {building_bold.map((i) => {
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
              {building_outlined.map((i) => {
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
