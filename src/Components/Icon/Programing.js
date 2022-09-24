import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    Code1Bold
,CodeCircleBold
,CodeBold
,CommandSquareBold
,CommandBold
,Data2Bold
,DataBold
,DocumentCode2Bold
,DocumentCodeBold
,HashtagDownBold
,HashtagUpBold
,HashtagBold
,Hierarchy2Bold
,Hierarchy3Bold
,HierarchySquare2Bold
,HierarchySquare3Bold
,HierarchySquareBold
,HierarchyBold
,MessageProgrammingBold
,MobileProgrammingBold
,ProgrammingArrowsBold
,ProgrammingArrowBold
,ScrollBold
,SidebarBottomBold
,SidebarLeftBold
,SidebarRightBold
,SidebarTopBold
,Code1Outlined
,CodeCircleOutlined
,CodeOutlined
,CommandSquareOutlined
,CommandOutlined
,Data2Outlined
,DataOutlined
,DocumentCode2Outlined
,DocumentCodeOutlined
,HashtagDownOutlined
,HashtagUpOutlined
,HashtagOutlined
,Hierarchy2Outlined
,Hierarchy3Outlined
,HierarchySquare2Outlined
,HierarchySquare3Outlined
,HierarchySquareOutlined
,HierarchyOutlined
,MessageProgrammingOutlined
,MobileProgrammingOutlined
,ProgrammingArrowsOutlined
,ProgrammingArrowOutlined
,ScrollOutlined
,SidebarBottomOutlined
,SidebarLeftOutlined
,SidebarRightOutlined
,SidebarTopOutlined



    
} from "rutvik-react-icon";

export const Programing = () => {
  const [copied, setcopied] = useState(false);

  const programming_bold =  [
    { icon: <Code1Bold/>, icon_name: 'Code1Bold' },
    { icon: <CodeCircleBold/>, icon_name: 'CodeCircleBold' },
    { icon: <CodeBold/>, icon_name: 'CodeBold' },
    { icon: <CommandSquareBold/>, icon_name: 'CommandSquareBold' },
    { icon: <CommandBold/>, icon_name: 'CommandBold' },
    { icon: <Data2Bold/>, icon_name: 'Data2Bold' },
    // { icon: <DataBold/>, icon_name: 'DataBold' },
    { icon: <DocumentCode2Bold/>, icon_name: 'DocumentCode2Bold' },
    { icon: <DocumentCodeBold/>, icon_name: 'DocumentCodeBold' },
    { icon: <HashtagDownBold/>, icon_name: 'HashtagDownBold' },
    { icon: <HashtagUpBold/>, icon_name: 'HashtagUpBold' },
    { icon: <HashtagBold/>, icon_name: 'HashtagBold' },
    { icon: <Hierarchy2Bold/>, icon_name: 'Hierarchy2Bold' },
    { icon: <Hierarchy3Bold/>, icon_name: 'Hierarchy3Bold' },
    {
      icon: <HierarchySquare2Bold/>,
      icon_name: 'HierarchySquare2Bold'
    },
    {
      icon: <HierarchySquare3Bold/>,
      icon_name: 'HierarchySquare3Bold'
    },
    { icon: <HierarchySquareBold/>, icon_name: 'HierarchySquareBold' },
    { icon: <HierarchyBold/>, icon_name: 'HierarchyBold' },
    {
      icon: <MessageProgrammingBold/>,
      icon_name: 'MessageProgrammingBold'
    },
    {
      icon: <MobileProgrammingBold/>,
      icon_name: 'MobileProgrammingBold'
    },
    {
      icon: <ProgrammingArrowsBold/>,
      icon_name: 'ProgrammingArrowsBold'
    },
    {
      icon: <ProgrammingArrowBold/>,
      icon_name: 'ProgrammingArrowBold'
    },
    { icon: <ScrollBold/>, icon_name: 'ScrollBold' },
    { icon: <SidebarBottomBold/>, icon_name: 'SidebarBottomBold' },
    { icon: <SidebarLeftBold/>, icon_name: 'SidebarLeftBold' },
    { icon: <SidebarRightBold/>, icon_name: 'SidebarRightBold' },
    { icon: <SidebarTopBold/>, icon_name: 'SidebarTopBold' }
  ]
  const programming_outlined =  [
    { icon: <Code1Outlined/>, icon_name: 'Code1Outlined' },
    { icon: <CodeCircleOutlined/>, icon_name: 'CodeCircleOutlined' },
    { icon: <CodeOutlined/>, icon_name: 'CodeOutlined' },
    {
      icon: <CommandSquareOutlined/>,
      icon_name: 'CommandSquareOutlined'
    },
    { icon: <CommandOutlined/>, icon_name: 'CommandOutlined' },
    { icon: <Data2Outlined/>, icon_name: 'Data2Outlined' },
    { icon: <DataOutlined/>, icon_name: 'DataOutlined' },
    {
      icon: <DocumentCode2Outlined/>,
      icon_name: 'DocumentCode2Outlined'
    },
    {
      icon: <DocumentCodeOutlined/>,
      icon_name: 'DocumentCodeOutlined'
    },
    { icon: <HashtagDownOutlined/>, icon_name: 'HashtagDownOutlined' },
    { icon: <HashtagUpOutlined/>, icon_name: 'HashtagUpOutlined' },
    { icon: <HashtagOutlined/>, icon_name: 'HashtagOutlined' },
    { icon: <Hierarchy2Outlined/>, icon_name: 'Hierarchy2Outlined' },
    { icon: <Hierarchy3Outlined/>, icon_name: 'Hierarchy3Outlined' },
    {
      icon: <HierarchySquare2Outlined/>,
      icon_name: 'HierarchySquare2Outlined'
    },
    {
      icon: <HierarchySquare3Outlined/>,
      icon_name: 'HierarchySquare3Outlined'
    },
    {
      icon: <HierarchySquareOutlined/>,
      icon_name: 'HierarchySquareOutlined'
    },
    { icon: <HierarchyOutlined/>, icon_name: 'HierarchyOutlined' },
    {
      icon: <MessageProgrammingOutlined/>,
      icon_name: 'MessageProgrammingOutlined'
    },
    {
      icon: <MobileProgrammingOutlined/>,
      icon_name: 'MobileProgrammingOutlined'
    },
    {
      icon: <ProgrammingArrowsOutlined/>,
      icon_name: 'ProgrammingArrowsOutlined'
    },
    {
      icon: <ProgrammingArrowOutlined/>,
      icon_name: 'ProgrammingArrowOutlined'
    },
    { icon: <ScrollOutlined/>, icon_name: 'ScrollOutlined' },
    {
      icon: <SidebarBottomOutlined/>,
      icon_name: 'SidebarBottomOutlined'
    },
    { icon: <SidebarLeftOutlined/>, icon_name: 'SidebarLeftOutlined' },
    {
      icon: <SidebarRightOutlined/>,
      icon_name: 'SidebarRightOutlined'
    },
    { icon: <SidebarTopOutlined/>, icon_name: 'SidebarTopOutlined' }
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
            <h2 className="icon-heading">Programing</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {programming_bold.map((i) => {
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
              {programming_outlined.map((i) => {
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
