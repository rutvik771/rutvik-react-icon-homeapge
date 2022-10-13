import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    AwardBold
    ,Book1Bold
    ,Bookmark2Bold
    ,BookmarkBold
    ,BookBold
    ,BriefcaseBold
    ,BrifecaseCrossBold
    ,BrifecaseTickBold
    ,BrifecaseTimerBold
    ,CalculatorBold
    ,ClipboardBold
    ,GiftBold
    ,Note2Bold
    ,NoteBold
    ,TeacherBold
    ,AwardOutlined
    ,Book1Outlined
    ,Bookmark2Outlined
    ,BookmarkOutlined
    ,BookOutlined
    ,BriefcaseOutlined
    ,BrifecaseCrossOutlined
    ,BrifecaseTickOutlined
    ,BrifecaseTimerOutlined
    ,CalculatorOutlined
    ,ClipboardOutlined
    ,GiftOutlined
    ,Note2Outlined
    ,NoteOutlined
    ,TeacherOutlined
    

    


    
} from "react-icon-cx";

export const School = () => {
  const [copied, setcopied] = useState(false);

  const school_learning_bold =  [
    { icon: <AwardBold/>, icon_name: 'AwardBold' },
    { icon: <Book1Bold/>, icon_name: 'Book1Bold' },
    { icon: <Bookmark2Bold/>, icon_name: 'Bookmark2Bold' },
    { icon: <BookmarkBold/>, icon_name: 'BookmarkBold' },
    { icon: <BookBold/>, icon_name: 'BookBold' },
    { icon: <BriefcaseBold/>, icon_name: 'BriefcaseBold' },
    { icon: <BrifecaseCrossBold/>, icon_name: 'BrifecaseCrossBold' },
    { icon: <BrifecaseTickBold/>, icon_name: 'BrifecaseTickBold' },
    { icon: <BrifecaseTimerBold/>, icon_name: 'BrifecaseTimerBold' },
    { icon: <CalculatorBold/>, icon_name: 'CalculatorBold' },
    { icon: <ClipboardBold/>, icon_name: 'ClipboardBold' },
    { icon: <GiftBold/>, icon_name: 'GiftBold' },
    { icon: <Note2Bold/>, icon_name: 'Note2Bold' },
    { icon: <NoteBold/>, icon_name: 'NoteBold' },
    { icon: <TeacherBold/>, icon_name: 'TeacherBold' }
  ]
  const school_learning_outlined =  [
    { icon: <AwardOutlined/>, icon_name: 'AwardOutlined' },
    { icon: <Book1Outlined/>, icon_name: 'Book1Outlined' },
    { icon: <Bookmark2Outlined/>, icon_name: 'Bookmark2Outlined' },
    { icon: <BookmarkOutlined/>, icon_name: 'BookmarkOutlined' },
    { icon: <BookOutlined/>, icon_name: 'BookOutlined' },
    { icon: <BriefcaseOutlined/>, icon_name: 'BriefcaseOutlined' },
    {
      icon: <BrifecaseCrossOutlined/>,
      icon_name: 'BrifecaseCrossOutlined'
    },
    {
      icon: <BrifecaseTickOutlined/>,
      icon_name: 'BrifecaseTickOutlined'
    },
    {
      icon: <BrifecaseTimerOutlined/>,
      icon_name: 'BrifecaseTimerOutlined'
    },
    { icon: <CalculatorOutlined/>, icon_name: 'CalculatorOutlined' },
    { icon: <ClipboardOutlined/>, icon_name: 'ClipboardOutlined' },
    { icon: <GiftOutlined/>, icon_name: 'GiftOutlined' },
    { icon: <Note2Outlined/>, icon_name: 'Note2Outlined' },
    { icon: <NoteOutlined/>, icon_name: 'NoteOutlined' },
    { icon: <TeacherOutlined/>, icon_name: 'TeacherOutlined' }
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
            <h2 className="icon-heading">School , Learning</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {school_learning_bold.map((i) => {
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
              {school_learning_outlined.map((i) => {
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
