import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    AttachCircleBold
,AttachSquareBold
,EraserBold
,FirstlineBold
,LanguageCircleBold
,LanguageSquareBold
,Link1Bold
,Link21Bold
,Link2Bold
,LinkCircleBold
,LinkSquareBold
,LinkBold
,MaximizeBold
,Paperclip2Bold
,PaperclipBold
,PharagraphspacingBold
,QuoteDownCircleBold
,QuoteDownSquareBold
,QuoteDownBold
,QuoteUpCircleBold
,QuoteUpSquareBold
,QuoteUpBold
,SmallcapsBold
,TextBlockBold
,TextBoldBold
,TextItalicBold
,TextUnderlineBold
,TextalignCenterBold
,TextalignJustifycenterBold
,TextalignJustifyleftBold
,TextalignJustifyrightBold
,TextalignLeftBold
,TextalignRightBold
,TextBold
,TranslateBold
,AttachCircleOutlined
,AttachSquareOutlined
,EraserOutlined
,FirstlineOutlined
,LanguageCircleOutlined
,LanguageSquareOutlined
,Link1Outlined
,Link21Outlined
,Link2Outlined
,LinkCircleOutlined
,LinkSquareOutlined
,LinkOutlined
,MaximizeOutlined
,Paperclip2Outlined
,PaperclipOutlined
,PharagraphspacingOutlined
,QuoteDownCircleOutlined
,QuoteDownSquareOutlined
,QuoteDownOutlined
,QuoteUpCircleOutlined
,QuoteUpSquareOutlined
,QuoteUpOutlined
,SmallcapsOutlined
,TextBlockOutlined
,TextBoldOutlined
,TextItalicOutlined
,TextUnderlineOutlined
,TextalignCenterOutlined
,TextalignJustifycenterOutlined
,TextalignJustifyleftOutlined
,TextalignJustifyrightOutlined
,TextalignLeftOutlined
,TextalignRightOutlined
,TextOutlined
,TranslateOutlined

 
      
} from "rutvik-react-icon";

export const Type_para = () => {
  const [copied, setcopied] = useState(false);

  const type_paragraph_bold =  [
    { icon: <AttachCircleBold/>, icon_name: 'AttachCircleBold' },
    { icon: <AttachSquareBold/>, icon_name: 'AttachSquareBold' },
    { icon: <EraserBold/>, icon_name: 'EraserBold' },
    { icon: <FirstlineBold/>, icon_name: 'FirstlineBold' },
    { icon: <LanguageCircleBold/>, icon_name: 'LanguageCircleBold' },
    { icon: <LanguageSquareBold/>, icon_name: 'LanguageSquareBold' },
    { icon: <Link1Bold/>, icon_name: 'Link1Bold' },
    { icon: <Link21Bold/>, icon_name: 'Link21Bold' },
    { icon: <Link2Bold/>, icon_name: 'Link2Bold' },
    { icon: <LinkCircleBold/>, icon_name: 'LinkCircleBold' },
    { icon: <LinkSquareBold/>, icon_name: 'LinkSquareBold' },
    { icon: <LinkBold/>, icon_name: 'LinkBold' },
    { icon: <MaximizeBold/>, icon_name: 'MaximizeBold' },
    { icon: <Paperclip2Bold/>, icon_name: 'Paperclip2Bold' },
    { icon: <PaperclipBold/>, icon_name: 'PaperclipBold' },
    {
      icon: <PharagraphspacingBold/>,
      icon_name: 'PharagraphspacingBold'
    },
    { icon: <QuoteDownCircleBold/>, icon_name: 'QuoteDownCircleBold' },
    { icon: <QuoteDownSquareBold/>, icon_name: 'QuoteDownSquareBold' },
    // { icon: <QuoteDownBold/>, icon_name: 'QuoteDownBold' },
    { icon: <QuoteUpCircleBold/>, icon_name: 'QuoteUpCircleBold' },
    { icon: <QuoteUpSquareBold/>, icon_name: 'QuoteUpSquareBold' },
    { icon: <QuoteUpBold/>, icon_name: 'QuoteUpBold' },
    { icon: <SmallcapsBold/>, icon_name: 'SmallcapsBold' },
    { icon: <TextBlockBold/>, icon_name: 'TextBlockBold' },
    { icon: <TextBoldBold/>, icon_name: 'TextBoldBold' },
    { icon: <TextItalicBold/>, icon_name: 'TextItalicBold' },
    { icon: <TextUnderlineBold/>, icon_name: 'TextUnderlineBold' },
    { icon: <TextalignCenterBold/>, icon_name: 'TextalignCenterBold' },
    {
      icon: <TextalignJustifycenterBold/>,
      icon_name: 'TextalignJustifycenterBold'
    },
    {
      icon: <TextalignJustifyleftBold/>,
      icon_name: 'TextalignJustifyleftBold'
    },
    {
      icon: <TextalignJustifyrightBold/>,
      icon_name: 'TextalignJustifyrightBold'
    },
    { icon: <TextalignLeftBold/>, icon_name: 'TextalignLeftBold' },
    { icon: <TextalignRightBold/>, icon_name: 'TextalignRightBold' },
    { icon: <TextBold/>, icon_name: 'TextBold' },
    { icon: <TranslateBold/>, icon_name: 'TranslateBold' }
  ]
  const type_paragraph_outlined =  [
    {
      icon: <AttachCircleOutlined/>,
      icon_name: 'AttachCircleOutlined'
    },
    {
      icon: <AttachSquareOutlined/>,
      icon_name: 'AttachSquareOutlined'
    },
    { icon: <EraserOutlined/>, icon_name: 'EraserOutlined' },
    { icon: <FirstlineOutlined/>, icon_name: 'FirstlineOutlined' },
    {
      icon: <LanguageCircleOutlined/>,
      icon_name: 'LanguageCircleOutlined'
    },
    {
      icon: <LanguageSquareOutlined/>,
      icon_name: 'LanguageSquareOutlined'
    },
    { icon: <Link1Outlined/>, icon_name: 'Link1Outlined' },
    { icon: <Link21Outlined/>, icon_name: 'Link21Outlined' },
    { icon: <Link2Outlined/>, icon_name: 'Link2Outlined' },
    { icon: <LinkCircleOutlined/>, icon_name: 'LinkCircleOutlined' },
    { icon: <LinkSquareOutlined/>, icon_name: 'LinkSquareOutlined' },
    { icon: <LinkOutlined/>, icon_name: 'LinkOutlined' },
    { icon: <MaximizeOutlined/>, icon_name: 'MaximizeOutlined' },
    { icon: <Paperclip2Outlined/>, icon_name: 'Paperclip2Outlined' },
    { icon: <PaperclipOutlined/>, icon_name: 'PaperclipOutlined' },
    {
      icon: <PharagraphspacingOutlined/>,
      icon_name: 'PharagraphspacingOutlined'
    },
    {
      icon: <QuoteDownCircleOutlined/>,
      icon_name: 'QuoteDownCircleOutlined'
    },
    {
      icon: <QuoteDownSquareOutlined/>,
      icon_name: 'QuoteDownSquareOutlined'
    },
    { icon: <QuoteDownOutlined/>, icon_name: 'QuoteDownOutlined' },
    {
      icon: <QuoteUpCircleOutlined/>,
      icon_name: 'QuoteUpCircleOutlined'
    },
    {
      icon: <QuoteUpSquareOutlined/>,
      icon_name: 'QuoteUpSquareOutlined'
    },
    { icon: <QuoteUpOutlined/>, icon_name: 'QuoteUpOutlined' },
    { icon: <SmallcapsOutlined/>, icon_name: 'SmallcapsOutlined' },
    { icon: <TextBlockOutlined/>, icon_name: 'TextBlockOutlined' },
    { icon: <TextBoldOutlined/>, icon_name: 'TextBoldOutlined' },
    { icon: <TextItalicOutlined/>, icon_name: 'TextItalicOutlined' },
    {
      icon: <TextUnderlineOutlined/>,
      icon_name: 'TextUnderlineOutlined'
    },
    {
      icon: <TextalignCenterOutlined/>,
      icon_name: 'TextalignCenterOutlined'
    },
    {
      icon: <TextalignJustifycenterOutlined/>,
      icon_name: 'TextalignJustifycenterOutlined'
    },
    {
      icon: <TextalignJustifyleftOutlined/>,
      icon_name: 'TextalignJustifyleftOutlined'
    },
    {
      icon: <TextalignJustifyrightOutlined/>,
      icon_name: 'TextalignJustifyrightOutlined'
    },
    {
      icon: <TextalignLeftOutlined/>,
      icon_name: 'TextalignLeftOutlined'
    },
    {
      icon: <TextalignRightOutlined/>,
      icon_name: 'TextalignRightOutlined'
    },
    { icon: <TextOutlined/>, icon_name: 'TextOutlined' },
    { icon: <TranslateOutlined/>, icon_name: 'TranslateOutlined' }
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
            <h2 className="icon-heading">Type , Paragraph , Character</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {type_paragraph_bold.map((i) => {
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
              {type_paragraph_outlined.map((i) => {
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
