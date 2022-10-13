import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    FrameBold
,LampChargeBold
,LampOnBold
,LampSlashBold
,Notification1Bold
,NotificationBingBold
,NotificationFavoriteBold
,NotificationStatusBold
,NotificationBold
,LampChargeOutlined
,LampOnOutlined
,LampSlashOutlined
,Notification1Outlined
,NotificationBingOutlined
,NotificationCircleOutlined
,NotificationFavoriteOutlined
,NotificationStatusOutlined
,NotificationOutlined


    


    
} from "react-icon-cx";

export const Notification = () => {
  const [copied, setcopied] = useState(false);

  const notification_bold =  [
    { icon: <FrameBold/>, icon_name: 'FrameBold' },
    { icon: <LampChargeBold/>, icon_name: 'LampChargeBold' },
    { icon: <LampOnBold/>, icon_name: 'LampOnBold' },
    { icon: <LampSlashBold/>, icon_name: 'LampSlashBold' },
    { icon: <Notification1Bold/>, icon_name: 'Notification1Bold' },
    {
      icon: <NotificationBingBold/>,
      icon_name: 'NotificationBingBold'
    },
    {
      icon: <NotificationFavoriteBold/>,
      icon_name: 'NotificationFavoriteBold'
    },
    {
      icon: <NotificationStatusBold/>,
      icon_name: 'NotificationStatusBold'
    },
    { icon: <NotificationBold/>, icon_name: 'NotificationBold' }
  ]
  const notification_outlined =  [
    { icon: <LampChargeOutlined/>, icon_name: 'LampChargeOutlined' },
    { icon: <LampOnOutlined/>, icon_name: 'LampOnOutlined' },
    { icon: <LampSlashOutlined/>, icon_name: 'LampSlashOutlined' },
    {
      icon: <Notification1Outlined/>,
      icon_name: 'Notification1Outlined'
    },
    {
      icon: <NotificationBingOutlined/>,
      icon_name: 'NotificationBingOutlined'
    },
    {
      icon: <NotificationCircleOutlined/>,
      icon_name: 'NotificationCircleOutlined'
    },
    {
      icon: <NotificationFavoriteOutlined/>,
      icon_name: 'NotificationFavoriteOutlined'
    },
    {
      icon: <NotificationStatusOutlined/>,
      icon_name: 'NotificationStatusOutlined'
    },
    {
      icon: <NotificationOutlined/>,
      icon_name: 'NotificationOutlined'
    }
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
            <h2 className="icon-heading">Notification</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {notification_bold.map((i) => {
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
              {notification_outlined.map((i) => {
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
