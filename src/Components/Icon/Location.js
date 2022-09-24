import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    ArrowSquareBold
    ,ArrowBold
    ,DirectDownBold
    ,DirectLeftBold
    ,DirectRightBold
    ,DirectUpBold
    ,DiscoverBold
    ,GlobalEditBold
    ,GlobalRefreshBold
    ,GlobalSearchBold
    ,GlobalBold
    ,GpsSlashBold
    ,GpsBold
    ,LocationAddBold
    ,LocationCrossBold
    ,LocationMinusBold
    ,LocationSlashBold
    ,LocationTickBold
    ,LocationBold
    ,Map1Bold
    ,MapBold
    ,PictureFrameBold
    ,Radar2Bold
    ,RadarBold
    ,RouteSquareBold
    ,Routing2Bold
    ,RoutingBold
    ,ArrowSquareOutlined
    ,ArrowOutlined
    ,DirectDownOutlined
    ,DirectLeftOutlined
    ,DirectRightOutlined
    ,DirectUpOutlined
    ,DiscoverOutlined
    ,GlobalEditOutlined
    ,GlobalRefreshOutlined
    ,GlobalSearchOutlined
    ,GlobalOutlined
    ,GpsSlashOutlined
    ,GpsOutlined
    ,LocationAddOutlined
    ,LocationCrossOutlined
    ,LocationMinusOutlined
    ,LocationSlashOutlined
    ,LocationTickOutlined
    ,LocationOutlined
    ,Map1Outlined
    ,MapOutlined
    ,PictureFrameOutlined
    ,Radar2Outlined
    ,RadarOutlined
    ,RouteSquareOutlined
    ,Routing2Outlined
    ,RoutingOutlined
    
    
    


    
} from "rutvik-react-icon";

export const Location = () => {
  const [copied, setcopied] = useState(false);

  const location_bold =  [
    { icon: <ArrowSquareBold/>, icon_name: 'ArrowSquareBold' },
    { icon: <ArrowBold/>, icon_name: 'ArrowBold' },
    { icon: <DirectDownBold/>, icon_name: 'DirectDownBold' },
    { icon: <DirectLeftBold/>, icon_name: 'DirectLeftBold' },
    { icon: <DirectRightBold/>, icon_name: 'DirectRightBold' },
    { icon: <DirectUpBold/>, icon_name: 'DirectUpBold' },
    { icon: <DiscoverBold/>, icon_name: 'DiscoverBold' },
    { icon: <GlobalEditBold/>, icon_name: 'GlobalEditBold' },
    { icon: <GlobalRefreshBold/>, icon_name: 'GlobalRefreshBold' },
    { icon: <GlobalSearchBold/>, icon_name: 'GlobalSearchBold' },
    { icon: <GlobalBold/>, icon_name: 'GlobalBold' },
    { icon: <GpsSlashBold/>, icon_name: 'GpsSlashBold' },
    { icon: <GpsBold/>, icon_name: 'GpsBold' },
    { icon: <LocationAddBold/>, icon_name: 'LocationAddBold' },
    { icon: <LocationCrossBold/>, icon_name: 'LocationCrossBold' },
    { icon: <LocationMinusBold/>, icon_name: 'LocationMinusBold' },
    { icon: <LocationSlashBold/>, icon_name: 'LocationSlashBold' },
    { icon: <LocationTickBold/>, icon_name: 'LocationTickBold' },
    { icon: <LocationBold/>, icon_name: 'LocationBold' },
    { icon: <Map1Bold/>, icon_name: 'Map1Bold' },
    { icon: <MapBold/>, icon_name: 'MapBold' },
    { icon: <PictureFrameBold/>, icon_name: 'PictureFrameBold' },
    { icon: <Radar2Bold/>, icon_name: 'Radar2Bold' },
    { icon: <RadarBold/>, icon_name: 'RadarBold' },
    { icon: <RouteSquareBold/>, icon_name: 'RouteSquareBold' },
    { icon: <Routing2Bold/>, icon_name: 'Routing2Bold' },
    { icon: <RoutingBold/>, icon_name: 'RoutingBold' }
  ]
  const location_outlined =  [
    { icon: <ArrowSquareOutlined/>, icon_name: 'ArrowSquareOutlined' },
    { icon: <ArrowOutlined/>, icon_name: 'ArrowOutlined' },
    { icon: <DirectDownOutlined/>, icon_name: 'DirectDownOutlined' },
    { icon: <DirectLeftOutlined/>, icon_name: 'DirectLeftOutlined' },
    { icon: <DirectRightOutlined/>, icon_name: 'DirectRightOutlined' },
    { icon: <DirectUpOutlined/>, icon_name: 'DirectUpOutlined' },
    { icon: <DiscoverOutlined/>, icon_name: 'DiscoverOutlined' },
    { icon: <GlobalEditOutlined/>, icon_name: 'GlobalEditOutlined' },
    {
      icon: <GlobalRefreshOutlined/>,
      icon_name: 'GlobalRefreshOutlined'
    },
    {
      icon: <GlobalSearchOutlined/>,
      icon_name: 'GlobalSearchOutlined'
    },
    { icon: <GlobalOutlined/>, icon_name: 'GlobalOutlined' },
    { icon: <GpsSlashOutlined/>, icon_name: 'GpsSlashOutlined' },
    { icon: <GpsOutlined/>, icon_name: 'GpsOutlined' },
    { icon: <LocationAddOutlined/>, icon_name: 'LocationAddOutlined' },
    {
      icon: <LocationCrossOutlined/>,
      icon_name: 'LocationCrossOutlined'
    },
    {
      icon: <LocationMinusOutlined/>,
      icon_name: 'LocationMinusOutlined'
    },
    {
      icon: <LocationSlashOutlined/>,
      icon_name: 'LocationSlashOutlined'
    },
    {
      icon: <LocationTickOutlined/>,
      icon_name: 'LocationTickOutlined'
    },
    { icon: <LocationOutlined/>, icon_name: 'LocationOutlined' },
    { icon: <Map1Outlined/>, icon_name: 'Map1Outlined' },
    { icon: <MapOutlined/>, icon_name: 'MapOutlined' },
    {
      icon: <PictureFrameOutlined/>,
      icon_name: 'PictureFrameOutlined'
    },
    { icon: <Radar2Outlined/>, icon_name: 'Radar2Outlined' },
    { icon: <RadarOutlined/>, icon_name: 'RadarOutlined' },
    { icon: <RouteSquareOutlined/>, icon_name: 'RouteSquareOutlined' },
    { icon: <Routing2Outlined/>, icon_name: 'Routing2Outlined' },
    { icon: <RoutingOutlined/>, icon_name: 'RoutingOutlined' }
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
            <h2 className="icon-heading">Location</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {location_bold.map((i) => {
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
              {location_outlined.map((i) => {
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
