import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    ActivityBold
    ,Chart1Bold
    ,Chart21Bold
    ,Chart2Bold
    ,ChartFailBold
    ,ChartSuccessBold
    ,ChartBold
    ,DiagramBold
    ,FavoriteChartBold
    ,GraphBold
    ,HashtagBold
    ,HealthBold
    ,HomeHashtagBold
    ,HomeTrendDownBold
    ,HomeTrendUpBold
    ,PersonalcardBold
    ,PresentionChartBold
    ,StatusUpBold
    ,TrendDownBold
    ,TrendUpBold
    ,ActivityOutlined
    ,Chart1Outlined
    ,Chart21Outlined
    ,Chart2Outlined
    ,ChartFailOutlined
    ,ChartSuccessOutlined
    ,ChartOutlined
    ,DiagramOutlined
    ,FavoriteChartOutlined
    ,GraphOutlined
    ,HashtagOutlined
    ,HealthOutlined
    ,HomeHashtagOutlined
    ,HomeTrendDownOutlined
    ,HomeTrendUpOutlined
    ,PersonalcardOutlined
    ,PresentionChartOutlined
    ,StatusUpOutlined
    ,TrendDownOutlined
    ,TrendUpOutlined
    
      
} from "react-icon-cx";

export const Business = () => {
  const [copied, setcopied] = useState(false);

  const business_bold =  [
    { icon: <ActivityBold/>, icon_name: 'ActivityBold' },
    { icon: <Chart1Bold/>, icon_name: 'Chart1Bold' },
    { icon: <Chart21Bold/>, icon_name: 'Chart21Bold' },
    { icon: <Chart2Bold/>, icon_name: 'Chart2Bold' },
    { icon: <ChartFailBold/>, icon_name: 'ChartFailBold' },
    { icon: <ChartSuccessBold/>, icon_name: 'ChartSuccessBold' },
    { icon: <ChartBold/>, icon_name: 'ChartBold' },
    { icon: <DiagramBold/>, icon_name: 'DiagramBold' },
    { icon: <FavoriteChartBold/>, icon_name: 'FavoriteChartBold' },
    { icon: <GraphBold/>, icon_name: 'GraphBold' },
    { icon: <HashtagBold/>, icon_name: 'HashtagBold' },
    { icon: <HealthBold/>, icon_name: 'HealthBold' },
    { icon: <HomeHashtagBold/>, icon_name: 'HomeHashtagBold' },
    { icon: <HomeTrendDownBold/>, icon_name: 'HomeTrendDownBold' },
    { icon: <HomeTrendUpBold/>, icon_name: 'HomeTrendUpBold' },
    { icon: <PersonalcardBold/>, icon_name: 'PersonalcardBold' },
    { icon: <PresentionChartBold/>, icon_name: 'PresentionChartBold' },
    { icon: <StatusUpBold/>, icon_name: 'StatusUpBold' },
    { icon: <TrendDownBold/>, icon_name: 'TrendDownBold' },
    { icon: <TrendUpBold/>, icon_name: 'TrendUpBold' }
  ]
  const business_outlined =  [
    { icon: <ActivityOutlined/>, icon_name: 'ActivityOutlined' },
    { icon: <Chart1Outlined/>, icon_name: 'Chart1Outlined' },
    { icon: <Chart21Outlined/>, icon_name: 'Chart21Outlined' },
    { icon: <Chart2Outlined/>, icon_name: 'Chart2Outlined' },
    { icon: <ChartFailOutlined/>, icon_name: 'ChartFailOutlined' },
    {
      icon: <ChartSuccessOutlined/>,
      icon_name: 'ChartSuccessOutlined'
    },
    { icon: <ChartOutlined/>, icon_name: 'ChartOutlined' },
    { icon: <DiagramOutlined/>, icon_name: 'DiagramOutlined' },
    {
      icon: <FavoriteChartOutlined/>,
      icon_name: 'FavoriteChartOutlined'
    },
    { icon: <GraphOutlined/>, icon_name: 'GraphOutlined' },
    { icon: <HashtagOutlined/>, icon_name: 'HashtagOutlined' },
    { icon: <HealthOutlined/>, icon_name: 'HealthOutlined' },
    { icon: <HomeHashtagOutlined/>, icon_name: 'HomeHashtagOutlined' },
    {
      icon: <HomeTrendDownOutlined/>,
      icon_name: 'HomeTrendDownOutlined'
    },
    { icon: <HomeTrendUpOutlined/>, icon_name: 'HomeTrendUpOutlined' },
    {
      icon: <PersonalcardOutlined/>,
      icon_name: 'PersonalcardOutlined'
    },
    {
      icon: <PresentionChartOutlined/>,
      icon_name: 'PresentionChartOutlined'
    },
    { icon: <StatusUpOutlined/>, icon_name: 'StatusUpOutlined' },
    { icon: <TrendDownOutlined/>, icon_name: 'TrendDownOutlined' },
    { icon: <TrendUpOutlined/>, icon_name: 'TrendUpOutlined' }
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
            <h2 className="icon-heading">Business</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {business_bold.map((i) => {
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
              {business_outlined.map((i) => {
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
