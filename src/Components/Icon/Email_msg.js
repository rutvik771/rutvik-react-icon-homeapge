import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    DeviceMessageBold
   , DirectInboxBold
   , DirectNormalBold
   , DirectNotificationBold
   , DirectSendBold
   , DirectboxDefaultBold
   , DirectboxNotifBold
   , DirectboxReceiveBold
   , DirectboxSendBold
   , DirectBold
   , Message2Bold
   , MessageAdd1Bold
   , MessageAddBold
   , MessageCircleBold
   , MessageEditBold
   , MessageFavoriteBold
   , MessageMinusBold
   , MessageNotifBold
   , MessageRemoveBold
   , MessageSearchBold
   , MessageSquareBold
   , MessageText1Bold
   , MessageTextBold
   , MessageTickBold
   , MessageTimeBold
   , Messages1Bold
   , Messages2Bold
   , Messages3Bold
   , MessagesBold
   , MessageBold
   , SmsEditBold
   , SmsNotificationBold
   , SmsSearchBold
   , SmsStarBold
   , SmsTrackingBold
   , SmsBold
   , DeviceMessageOutlined
   , DirectInboxOutlined
   , DirectNormalOutlined
   , DirectNotificationOutlined
   , DirectSendOutlined
   , DirectboxDefaultOutlined
   , DirectboxNotifOutlined
   , DirectboxReceiveOutlined
   , DirectboxSendOutlined
   , DirectOutlined
   , Message2Outlined
   , MessageAdd1Outlined
   , MessageAddOutlined
   , MessageCircleOutlined
   , MessageEditOutlined
   , MessageFavoriteOutlined
   , MessageMinusOutlined
   , MessageNotifOutlined
   , MessageRemoveOutlined
   , MessageSearchOutlined
   , MessageSquareOutlined
   , MessageText1Outlined
   , MessageTextOutlined
   , MessageTickOutlined
   , MessageTimeOutlined
   , Messages1Outlined
   , Messages2Outlined
   , Messages3Outlined
   , MessagesOutlined
   , MessageOutlined
   , SmsEditOutlined
   , SmsNotificationOutlined
   , SmsSearchOutlined
   , SmsStarOutlined
   , SmsTrackingOutlined
   , SmsOutlined
    
} from "react-icon-cx";

export const Email_msg = () => {
  const [copied, setcopied] = useState(false);

  const email_msg_bold =  [
    { icon: <DeviceMessageBold />, icon_name: 'DeviceMessageBold' },
    { icon: <DirectInboxBold/>, icon_name: 'DirectInboxBold' },
    { icon: <DirectNormalBold/>, icon_name: 'DirectNormalBold' },
    {
      icon: <DirectNotificationBold/>,
      icon_name: 'DirectNotificationBold'
    },
    { icon: <DirectSendBold/>, icon_name: 'DirectSendBold' },
    {
      icon: <DirectboxDefaultBold/>,
      icon_name: 'DirectboxDefaultBold'
    },
    { icon: <DirectboxNotifBold/>, icon_name: 'DirectboxNotifBold' },
    {
      icon: <DirectboxReceiveBold/>,
      icon_name: 'DirectboxReceiveBold'
    },
    { icon: <DirectboxSendBold/>, icon_name: 'DirectboxSendBold' },
    { icon: <DirectBold/>, icon_name: 'DirectBold' },
    { icon: <Message2Bold/>, icon_name: 'Message2Bold' },
    { icon: <MessageAdd1Bold/>, icon_name: 'MessageAdd1Bold' },
    { icon: <MessageAddBold/>, icon_name: 'MessageAddBold' },
    { icon: <MessageCircleBold/>, icon_name: 'MessageCircleBold' },
    { icon: <MessageEditBold/>, icon_name: 'MessageEditBold' },
    { icon: <MessageFavoriteBold/>, icon_name: 'MessageFavoriteBold' },
    { icon: <MessageMinusBold/>, icon_name: 'MessageMinusBold' },
    { icon: <MessageNotifBold/>, icon_name: 'MessageNotifBold' },
    { icon: <MessageRemoveBold/>, icon_name: 'MessageRemoveBold' },
    { icon: <MessageSearchBold/>, icon_name: 'MessageSearchBold' },
    { icon: <MessageSquareBold/>, icon_name: 'MessageSquareBold' },
    { icon: <MessageText1Bold/>, icon_name: 'MessageText1Bold' },
    { icon: <MessageTextBold/>, icon_name: 'MessageTextBold' },
    { icon: <MessageTickBold/>, icon_name: 'MessageTickBold' },
    { icon: <MessageTimeBold/>, icon_name: 'MessageTimeBold' },
    { icon: <Messages1Bold/>, icon_name: 'Messages1Bold' },
    { icon: <Messages2Bold/>, icon_name: 'Messages2Bold' },
    { icon: <Messages3Bold/>, icon_name: 'Messages3Bold' },
    { icon: <MessagesBold/>, icon_name: 'MessagesBold' },
    { icon: <MessageBold/>, icon_name: 'MessageBold' },
    { icon: <SmsEditBold/>, icon_name: 'SmsEditBold' },
    { icon: <SmsNotificationBold/>, icon_name: 'SmsNotificationBold' },
    { icon: <SmsSearchBold/>, icon_name: 'SmsSearchBold' },
    { icon: <SmsStarBold/>, icon_name: 'SmsStarBold' },
    { icon: <SmsTrackingBold/>, icon_name: 'SmsTrackingBold' },
    { icon: <SmsBold/>, icon_name: 'SmsBold' }
]
  const email_msg_outlined =  [
    // {
    //   icon: <DeviceMessageOutlined/>,
    //   icon_name: 'DeviceMessageOutlined'
    // },
    // { icon: <DirectInboxOutlined/>, icon_name: 'DirectInboxOutlined' },
    // {
    //   icon: <DirectNormalOutlined/>,
    //   icon_name: 'DirectNormalOutlined'
    // },
    // {
    //   icon: <DirectNotificationOutlined/>,
    //   icon_name: 'DirectNotificationOutlined'
    // },
    // { icon: <DirectSendOutlined/>, icon_name: 'DirectSendOutlined' },
    // {
    //   icon: <DirectboxDefaultOutlined/>,
    //   icon_name: 'DirectboxDefaultOutlined'
    // },
    // {
    //   icon: <DirectboxNotifOutlined/>,
    //   icon_name: 'DirectboxNotifOutlined'
    // },
    // {
    //   icon: <DirectboxReceiveOutlined/>,
    //   icon_name: 'DirectboxReceiveOutlined'
    // },
    // {
    //   icon: <DirectboxSendOutlined/>,
    //   icon_name: 'DirectboxSendOutlined'
    // },
    // { icon: <DirectOutlined/>, icon_name: 'DirectOutlined' },
    // { icon: <Message2Outlined/>, icon_name: 'Message2Outlined' },
    // { icon: <MessageAdd1Outlined/>, icon_name: 'MessageAdd1Outlined' },
    // { icon: <MessageAddOutlined/>, icon_name: 'MessageAddOutlined' },
    // {
    //   icon: <MessageCircleOutlined/>,
    //   icon_name: 'MessageCircleOutlined'
    // },
    // { icon: <MessageEditOutlined/>, icon_name: 'MessageEditOutlined' },
    // {
    //   icon: <MessageFavoriteOutlined/>,
    //   icon_name: 'MessageFavoriteOutlined'
    // },
    // {
    //   icon: <MessageMinusOutlined/>,
    //   icon_name: 'MessageMinusOutlined'
    // },
    // {
    //   icon: <MessageNotifOutlined/>,
    //   icon_name: 'MessageNotifOutlined'
    // },
    // {
    //   icon: <MessageRemoveOutlined/>,
    //   icon_name: 'MessageRemoveOutlined'
    // },
    // {
    //   icon: <MessageSearchOutlined/>,
    //   icon_name: 'MessageSearchOutlined'
    // },
    // {
    //   icon: <MessageSquareOutlined/>,
    //   icon_name: 'MessageSquareOutlined'
    // },
    // {
    //   icon: <MessageText1Outlined/>,
    //   icon_name: 'MessageText1Outlined'
    // },
    // { icon: <MessageTextOutlined/>, icon_name: 'MessageTextOutlined' },
    // { icon: <MessageTickOutlined/>, icon_name: 'MessageTickOutlined' },
    // { icon: <MessageTimeOutlined/>, icon_name: 'MessageTimeOutlined' },
    // { icon: <Messages1Outlined/>, icon_name: 'Messages1Outlined' },
    // { icon: <Messages2Outlined/>, icon_name: 'Messages2Outlined' },
    // { icon: <Messages3Outlined/>, icon_name: 'Messages3Outlined' },
    // { icon: <MessagesOutlined/>, icon_name: 'MessagesOutlined' },
    // { icon: <MessageOutlined/>, icon_name: 'MessageOutlined' },
    // { icon: <SmsEditOutlined/>, icon_name: 'SmsEditOutlined' },
    // {
    //   icon: <SmsNotificationOutlined/>,
    //   icon_name: 'SmsNotificationOutlined'
    // },
    // { icon: <SmsSearchOutlined/>, icon_name: 'SmsSearchOutlined' },
    // { icon: <SmsStarOutlined/>, icon_name: 'SmsStarOutlined' },
    // { icon: <SmsTrackingOutlined/>, icon_name: 'SmsTrackingOutlined' },
    // { icon: <SmsOutlined/>, icon_name: 'SmsOutlined' }
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
            <h2 className="icon-heading">Email , Message</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {email_msg_bold.map((i) => {
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
              {email_msg_outlined.map((i) => {
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
