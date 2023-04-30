import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    CloudCrossBold
   , CloudDrizzleBold
   , CloudFogBold
   , CloudLightningBold
   , CloudMinusBold
   , CloudNotifBold
   , CloudPlusBold
   , CloudSnowBold
   , CloudSunnyBold
   , CloudBold
   , DropBold
   , FlashBold
   , MoonBold
   , Sun1Bold
   , SunFogBold
   , SunBold
   , Wind2Bold
   , WindBold
   , CloudCrossOutlined
   , CloudDrizzleOutlined
   , CloudFogOutlined
   , CloudLightningOutlined
   , CloudMinusOutlined
   , CloudNotifOutlined
   , CloudPlusOutlined
   , CloudSnowOutlined
   , CloudSunnyOutlined
   , CloudOutlined
   , FlashOutlined
   , IconOutlined
   , MoonOutlined
   , Sun1Outlined
   , SunFogOutlined
   , SunOutlined
   , Wind2Outlined
   , WindOutlined

    
    
    


    
} from "react-icon-cx";

export const Weather = () => {
  const [copied, setcopied] = useState(false);

  const whether_bold =  [
    { icon: <CloudCrossBold/>, icon_name: 'CloudCrossBold' },
    { icon: <CloudDrizzleBold/>, icon_name: 'CloudDrizzleBold' },
    { icon: <CloudFogBold/>, icon_name: 'CloudFogBold' },
    { icon: <CloudLightningBold/>, icon_name: 'CloudLightningBold' },
    { icon: <CloudMinusBold/>, icon_name: 'CloudMinusBold' },
    { icon: <CloudNotifBold/>, icon_name: 'CloudNotifBold' },
    { icon: <CloudPlusBold/>, icon_name: 'CloudPlusBold' },
    { icon: <CloudSnowBold/>, icon_name: 'CloudSnowBold' },
    { icon: <CloudSunnyBold/>, icon_name: 'CloudSunnyBold' },
    { icon: <CloudBold/>, icon_name: 'CloudBold' },
    { icon: <DropBold/>, icon_name: 'DropBold' },
    { icon: <FlashBold/>, icon_name: 'FlashBold' },
    { icon: <MoonBold/>, icon_name: 'MoonBold' },
    { icon: <Sun1Bold/>, icon_name: 'Sun1Bold' },
    { icon: <SunFogBold/>, icon_name: 'SunFogBold' },
    { icon: <SunBold/>, icon_name: 'SunBold' },
    { icon: <Wind2Bold/>, icon_name: 'Wind2Bold' },
    { icon: <WindBold/>, icon_name: 'WindBold' }
  ]
  const whether_outlined =  [
    { icon: <CloudCrossOutlined/>, icon_name: 'CloudCrossOutlined' },
    {
      icon: <CloudDrizzleOutlined/>,
      icon_name: 'CloudDrizzleOutlined'
    },
    { icon: <CloudFogOutlined/>, icon_name: 'CloudFogOutlined' },
    {
      icon: <CloudLightningOutlined/>,
      icon_name: 'CloudLightningOutlined'
    },
    { icon: <CloudMinusOutlined/>, icon_name: 'CloudMinusOutlined' },
    { icon: <CloudNotifOutlined/>, icon_name: 'CloudNotifOutlined' },
    { icon: <CloudPlusOutlined/>, icon_name: 'CloudPlusOutlined' },
    { icon: <CloudSnowOutlined/>, icon_name: 'CloudSnowOutlined' },
    { icon: <CloudSunnyOutlined/>, icon_name: 'CloudSunnyOutlined' },
    { icon: <CloudOutlined/>, icon_name: 'CloudOutlined' },
    { icon: <FlashOutlined/>, icon_name: 'FlashOutlined' },
    { icon: <IconOutlined/>, icon_name: 'IconOutlined' },
    { icon: <MoonOutlined/>, icon_name: 'MoonOutlined' },
    { icon: <Sun1Outlined/>, icon_name: 'Sun1Outlined' },
    { icon: <SunFogOutlined/>, icon_name: 'SunFogOutlined' },
    { icon: <SunOutlined/>, icon_name: 'SunOutlined' },
    { icon: <Wind2Outlined/>, icon_name: 'Wind2Outlined' },
    { icon: <WindOutlined />, icon_name: 'WindOutlined' }
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
            <h2 className="icon-heading">weather</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {whether_bold.map((i) => {
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
              {whether_outlined.map((i) => {
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
