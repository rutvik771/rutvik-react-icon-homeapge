import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    Candle2Bold
    ,CandleBold
    ,Category2Bold
    ,CategoryBold
    ,MenuBold
    ,More2Bold
    ,MoreBold
    ,Setting2Bold
    ,Setting3Bold
    ,Setting4Bold
    ,Setting5Bold
    ,SettingsBold
    ,SettingBold
    ,ToggleOffCircleBold
    ,ToggleOffBold
    ,ToggleOnCircleBold
    ,ToggleOnBold
    ,Candle2Outlined
    ,CandleOutlined
    ,Category2Outlined
    ,CategoryOutlined
    ,MenuOutlined
    ,More2Outlined
    ,MoreOutlined
    ,Setting2Outlined
    ,Setting3Outlined
    ,Setting4Outlined
    ,Setting5Outlined
    ,SettingsOutlined
    ,SettingOutlined
    ,ToggleOffCircleOutlined
    ,ToggleOffOutlined
    ,ToggleOnCircleOutlined
    ,ToggleOnOutlined
    
    
} from "rutvik-react-icon";

export const Setting = () => {
  const [copied, setcopied] = useState(false);

  const setting_bold =  [
    { icon: <Candle2Bold/>, icon_name: 'Candle2Bold' },
    { icon: <CandleBold/>, icon_name: 'CandleBold' },
    { icon: <Category2Bold/>, icon_name: 'Category2Bold' },
    { icon: <CategoryBold/>, icon_name: 'CategoryBold' },
    { icon: <MenuBold/>, icon_name: 'MenuBold' },
    { icon: <More2Bold/>, icon_name: 'More2Bold' },
    { icon: <MoreBold/>, icon_name: 'MoreBold' },
    { icon: <Setting2Bold/>, icon_name: 'Setting2Bold' },
    { icon: <Setting3Bold/>, icon_name: 'Setting3Bold' },
    { icon: <Setting4Bold/>, icon_name: 'Setting4Bold' },
    { icon: <Setting5Bold/>, icon_name: 'Setting5Bold' },
    { icon: <SettingsBold/>, icon_name: 'SettingsBold' },
    { icon: <SettingBold/>, icon_name: 'SettingBold' },
    { icon: <ToggleOffCircleBold/>, icon_name: 'ToggleOffCircleBold' },
    { icon: <ToggleOffBold/>, icon_name: 'ToggleOffBold' },
    { icon: <ToggleOnCircleBold/>, icon_name: 'ToggleOnCircleBold' },
    { icon: <ToggleOnBold/>, icon_name: 'ToggleOnBold' }
  ]
  const setting_outlined =  [
    { icon: <Candle2Outlined/>, icon_name: 'Candle2Outlined' },
    { icon: <CandleOutlined/>, icon_name: 'CandleOutlined' },
    { icon: <Category2Outlined/>, icon_name: 'Category2Outlined' },
    { icon: <CategoryOutlined/>, icon_name: 'CategoryOutlined' },
    { icon: <MenuOutlined/>, icon_name: 'MenuOutlined' },
    { icon: <More2Outlined/>, icon_name: 'More2Outlined' },
    { icon: <MoreOutlined/>, icon_name: 'MoreOutlined' },
    { icon: <Setting2Outlined/>, icon_name: 'Setting2Outlined' },
    { icon: <Setting3Outlined/>, icon_name: 'Setting3Outlined' },
    { icon: <Setting4Outlined/>, icon_name: 'Setting4Outlined' },
    { icon: <Setting5Outlined/>, icon_name: 'Setting5Outlined' },
    { icon: <SettingsOutlined/>, icon_name: 'SettingsOutlined' },
    { icon: <SettingOutlined/>, icon_name: 'SettingOutlined' },
    {
      icon: <ToggleOffCircleOutlined/>,
      icon_name: 'ToggleOffCircleOutlined'
    },
    { icon: <ToggleOffOutlined/>, icon_name: 'ToggleOffOutlined' },
    {
      icon: <ToggleOnCircleOutlined/>,
      icon_name: 'ToggleOnCircleOutlined'
    },
    { icon: <ToggleOnOutlined/>, icon_name: 'ToggleOnOutlined' }
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
            <h2 className="icon-heading">Setting</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {setting_bold.map((i) => {
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
              {setting_outlined.map((i) => {
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
