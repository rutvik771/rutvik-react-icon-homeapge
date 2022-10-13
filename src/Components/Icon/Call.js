import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    CallAddBold
,CallCallingBold
,CallIncomingBold
,CallMinusBold
,CallOutgoingBold
,CallReceivedBold
,CallRemoveBold
,CallSlashBold
,CallBold
,CallAddOutlined
,CallCallingOutlined
,CallIncomingOutlined
,CallMinusOutlined
,CallOutgoingOutlined
,CallReceivedOutlined
,CallRemoveOutlined
,CallSlashOutlined
,CallOutlined


    
} from "react-icon-cx";

export const Call = () => {
  const [copied, setcopied] = useState(false);

  const call_bold =  [
    { icon: <CallAddBold/>, icon_name: 'CallAddBold' },
    { icon: <CallCallingBold/>, icon_name: 'CallCallingBold' },
    { icon: <CallIncomingBold/>, icon_name: 'CallIncomingBold' },
    { icon: <CallMinusBold/>, icon_name: 'CallMinusBold' },
    { icon: <CallOutgoingBold/>, icon_name: 'CallOutgoingBold' },
    { icon: <CallReceivedBold/>, icon_name: 'CallReceivedBold' },
    { icon: <CallRemoveBold/>, icon_name: 'CallRemoveBold' },
    { icon: <CallSlashBold/>, icon_name: 'CallSlashBold' },
    { icon: <CallBold/>, icon_name: 'CallBold' }
  ]
  const call_outlined =  [
    { icon: <CallAddOutlined/>, icon_name: 'CallAddOutlined' },
    { icon: <CallCallingOutlined/>, icon_name: 'CallCallingOutlined' },
    {
      icon: <CallIncomingOutlined/>,
      icon_name: 'CallIncomingOutlined'
    },
    { icon: <CallMinusOutlined/>, icon_name: 'CallMinusOutlined' },
    {
      icon: <CallOutgoingOutlined/>,
      icon_name: 'CallOutgoingOutlined'
    },
    {
      icon: <CallReceivedOutlined/>,
      icon_name: 'CallReceivedOutlined'
    },
    { icon: <CallRemoveOutlined/>, icon_name: 'CallRemoveOutlined' },
    { icon: <CallSlashOutlined/>, icon_name: 'CallSlashOutlined' },
    { icon: <CallOutlined/>, icon_name: 'CallOutlined' }
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
            <h2 className="icon-heading">Call</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {call_bold.map((i) => {
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
              {call_outlined.map((i) => {
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
