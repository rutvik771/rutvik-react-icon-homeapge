import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    Folder2Bold
,FolderAddBold
,FolderCloudBold
,FolderCrossBold
,FolderFavoriteBold
,FolderMinusBold
,FolderOpenBold
,FolderBold
,Folder2Outlined
,FolderAddOutlined
,FolderCloudOutlined
,FolderCrossOutlined
,FolderFavoriteOutlined
,FolderMinusOutlined
,FolderOpenOutlined
,FolderOutlined

    


    
} from "rutvik-react-icon";

export const Files = () => {
  const [copied, setcopied] = useState(false);

  const files_bold =  [
    { icon: <Folder2Bold/>, icon_name: 'Folder2Bold' },
    { icon: <FolderAddBold/>, icon_name: 'FolderAddBold' },
    { icon: <FolderCloudBold/>, icon_name: 'FolderCloudBold' },
    { icon: <FolderCrossBold/>, icon_name: 'FolderCrossBold' },
    { icon: <FolderFavoriteBold/>, icon_name: 'FolderFavoriteBold' },
    { icon: <FolderMinusBold/>, icon_name: 'FolderMinusBold' },
    { icon: <FolderOpenBold/>, icon_name: 'FolderOpenBold' },
    { icon: <FolderBold/>, icon_name: 'FolderBold' }
  ]
  const files_outlined =  [
    { icon: <Folder2Outlined/>, icon_name: 'Folder2Outlined' },
    { icon: <FolderAddOutlined/>, icon_name: 'FolderAddOutlined' },
    { icon: <FolderCloudOutlined/>, icon_name: 'FolderCloudOutlined' },
    { icon: <FolderCrossOutlined/>, icon_name: 'FolderCrossOutlined' },
    {
      icon: <FolderFavoriteOutlined/>,
      icon_name: 'FolderFavoriteOutlined'
    },
    { icon: <FolderMinusOutlined/>, icon_name: 'FolderMinusOutlined' },
    { icon: <FolderOpenOutlined/>, icon_name: 'FolderOpenOutlined' },
    { icon: <FolderOutlined/>, icon_name: 'FolderOutlined' }
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
            <h2 className="icon-heading">Files</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {files_bold.map((i) => {
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
              {files_outlined.map((i) => {
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
