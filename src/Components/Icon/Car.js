import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    AirplaneSquareBold
   , AirplaneBold
   , BusBold
   , CarBold
   , DrivingBold
   , GasStationBold
   , ShipBold
   , SmartCarBold
   , AirplaneSquareOutlined
   , AirplaneOutlined
   , BusOutlined
   , CarOutlined
   , DrivingOutlined
   , GasStationOutlined
   , ShipOutlined
   , SmartCarOutlined
    
    


    
} from "rutvik-react-icon";

export const Car = () => {
  const [copied, setcopied] = useState(false);

  const car_bold =  [
    { icon: <AirplaneSquareBold/>, icon_name: 'AirplaneSquareBold' },
    { icon: <AirplaneBold/>, icon_name: 'AirplaneBold' },
    { icon: <BusBold/>, icon_name: 'BusBold' },
    { icon: <CarBold/>, icon_name: 'CarBold' },
    { icon: <DrivingBold/>, icon_name: 'DrivingBold' },
    { icon: <GasStationBold/>, icon_name: 'GasStationBold' },
    { icon: <ShipBold/>, icon_name: 'ShipBold' },
    { icon: <SmartCarBold/>, icon_name: 'SmartCarBold' }
  ]
  const car_outlined =  [
    {
      icon: <AirplaneSquareOutlined/>,
      icon_name: 'AirplaneSquareOutlined'
    },
    { icon: <AirplaneOutlined/>, icon_name: 'AirplaneOutlined' },
    { icon: <BusOutlined/>, icon_name: 'BusOutlined' },
    { icon: <CarOutlined/>, icon_name: 'CarOutlined' },
    { icon: <DrivingOutlined/>, icon_name: 'DrivingOutlined' },
    { icon: <GasStationOutlined/>, icon_name: 'GasStationOutlined' },
    { icon: <ShipOutlined/>, icon_name: 'ShipOutlined' },
    { icon: <SmartCarOutlined/>, icon_name: 'SmartCarOutlined' }
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
            <h2 className="icon-heading">Car</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {car_bold.map((i) => {
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
              {car_outlined.map((i) => {
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
