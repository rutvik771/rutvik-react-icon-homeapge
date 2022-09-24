import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    SearchFavorite1Bold
,SearchFavoriteBold
,SearchNormal1Bold
,SearchNormalBold
,SearchStatus1Bold
,SearchStatusBold
,SearchZoomIn1Bold
,SearchZoomInBold
,SearchZoomOut1Bold
,SearchZoomOutBold
,SearchFavorite1Outlined
,SearchFavoriteOutlined
,SearchNormal1Outlined
,SearchNormalOutlined
,SearchStatus1Outlined
,SearchStatusOutlined
,SearchZoomIn1Outlined
,SearchZoomInOutlined
,SearchZoomOut1Outlined
,SearchZoomOutOutlined

    
} from "rutvik-react-icon";

export const Search = () => {
  const [copied, setcopied] = useState(false);

  const search_bold =  [
    { icon: <SearchFavorite1Bold/>, icon_name: 'SearchFavorite1Bold' },
    { icon: <SearchFavoriteBold/>, icon_name: 'SearchFavoriteBold' },
    { icon: <SearchNormal1Bold/>, icon_name: 'SearchNormal1Bold' },
    { icon: <SearchNormalBold/>, icon_name: 'SearchNormalBold' },
    { icon: <SearchStatus1Bold/>, icon_name: 'SearchStatus1Bold' },
    { icon: <SearchStatusBold/>, icon_name: 'SearchStatusBold' },
    { icon: <SearchZoomIn1Bold/>, icon_name: 'SearchZoomIn1Bold' },
    { icon: <SearchZoomInBold/>, icon_name: 'SearchZoomInBold' },
    { icon: <SearchZoomOut1Bold/>, icon_name: 'SearchZoomOut1Bold' },
    { icon: <SearchZoomOutBold/>, icon_name: 'SearchZoomOutBold' }
  ]
  const search_outlined =  [
    {
      icon: <SearchFavorite1Outlined/>,
      icon_name: 'SearchFavorite1Outlined'
    },
    {
      icon: <SearchFavoriteOutlined/>,
      icon_name: 'SearchFavoriteOutlined'
    },
    {
      icon: <SearchNormal1Outlined/>,
      icon_name: 'SearchNormal1Outlined'
    },
    {
      icon: <SearchNormalOutlined/>,
      icon_name: 'SearchNormalOutlined'
    },
    {
      icon: <SearchStatus1Outlined/>,
      icon_name: 'SearchStatus1Outlined'
    },
    {
      icon: <SearchStatusOutlined/>,
      icon_name: 'SearchStatusOutlined'
    },
    {
      icon: <SearchZoomIn1Outlined/>,
      icon_name: 'SearchZoomIn1Outlined'
    },
    {
      icon: <SearchZoomInOutlined/>,
      icon_name: 'SearchZoomInOutlined'
    },
    {
      icon: <SearchZoomOut1Outlined/>,
      icon_name: 'SearchZoomOut1Outlined'
    },
    {
      icon: <SearchZoomOutOutlined/>,
      icon_name: 'SearchZoomOutOutlined'
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
            <h2 className="icon-heading">Search</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {search_bold.map((i) => {
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
              {search_outlined.map((i) => {
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
