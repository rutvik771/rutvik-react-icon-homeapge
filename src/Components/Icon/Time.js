import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    Calendar1Bold
,Calendar2Bold
,CalendarAddBold
,CalendarCircleBold
,CalendarEditBold
,CalendarRemoveBold
,CalendarSearchBold
,CalendarTickBold
,CalendarBold
,ClockBold
,SecurityTimeBold
,Timer1Bold
,TimerPauseBold
,TimerStartBold
,TimerBold
,Calendar1Outlined
,Calendar2Outlined
,CalendarAddOutlined
,CalendarCircleOutlined
,CalendarEditOutlined
,CalendarRemoveOutlined
,CalendarSearchOutlined
,CalendarTickOutlined
,CalendarOutlined
,ClockOutlined
,SecurityTimeOutlined
,Timer1Outlined
,TimerPauseOutlined
,TimerStartOutlined
,TimerOutlined


    
} from "react-icon-cx";

export const Time = () => {
  const [copied, setcopied] = useState(false);

  const time_bold =  [
    { icon: <Calendar1Bold/>, icon_name: 'Calendar1Bold' },
    { icon: <Calendar2Bold/>, icon_name: 'Calendar2Bold' },
    { icon: <CalendarAddBold/>, icon_name: 'CalendarAddBold' },
    { icon: <CalendarCircleBold/>, icon_name: 'CalendarCircleBold' },
    { icon: <CalendarEditBold/>, icon_name: 'CalendarEditBold' },
    { icon: <CalendarRemoveBold/>, icon_name: 'CalendarRemoveBold' },
    { icon: <CalendarSearchBold/>, icon_name: 'CalendarSearchBold' },
    { icon: <CalendarTickBold/>, icon_name: 'CalendarTickBold' },
    { icon: <CalendarBold/>, icon_name: 'CalendarBold' },
    { icon: <ClockBold/>, icon_name: 'ClockBold' },
    { icon: <SecurityTimeBold/>, icon_name: 'SecurityTimeBold' },
    { icon: <Timer1Bold/>, icon_name: 'Timer1Bold' },
    { icon: <TimerPauseBold/>, icon_name: 'TimerPauseBold' },
    { icon: <TimerStartBold/>, icon_name: 'TimerStartBold' },
    { icon: <TimerBold/>, icon_name: 'TimerBold' }
  ]
  const time_outlined =  [
    { icon: <Calendar1Outlined/>, icon_name: 'Calendar1Outlined' },
    { icon: <Calendar2Outlined/>, icon_name: 'Calendar2Outlined' },
    { icon: <CalendarAddOutlined/>, icon_name: 'CalendarAddOutlined' },
    {
      icon: <CalendarCircleOutlined/>,
      icon_name: 'CalendarCircleOutlined'
    },
    {
      icon: <CalendarEditOutlined/>,
      icon_name: 'CalendarEditOutlined'
    },
    {
      icon: <CalendarRemoveOutlined/>,
      icon_name: 'CalendarRemoveOutlined'
    },
    {
      icon: <CalendarSearchOutlined/>,
      icon_name: 'CalendarSearchOutlined'
    },
    {
      icon: <CalendarTickOutlined/>,
      icon_name: 'CalendarTickOutlined'
    },
    { icon: <CalendarOutlined/>, icon_name: 'CalendarOutlined' },
    { icon: <ClockOutlined/>, icon_name: 'ClockOutlined' },
    {
      icon: <SecurityTimeOutlined/>,
      icon_name: 'SecurityTimeOutlined'
    },
    { icon: <Timer1Outlined/>, icon_name: 'Timer1Outlined' },
    { icon: <TimerPauseOutlined/>, icon_name: 'TimerPauseOutlined' },
    { icon: <TimerStartOutlined/>, icon_name: 'TimerStartOutlined' },
    { icon: <TimerOutlined/>, icon_name: 'TimerOutlined' }
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
            <h2 className="icon-heading">Time</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {time_bold.map((i) => {
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
              {time_outlined.map((i) => {
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
