import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
 ArchiveBookBold
,BillBold
,ClipboardCloseBold
,ClipboardExportBold
,ClipboardImportBold
,ClipboardTextBold
,ClipboardTickBold
,CopyrightBold
,CreativeCommonsBold
,DocumentCloudBold
,DocumentCopyBold
,DocumentDownloadBold
,DocumentFavoriteBold
,DocumentFilterBold
,DocumentForwardBold
,DocumentLikeBold
,DocumentNormalBold
,DocumentPreviousBold
,DocumentSketchBold
,DocumentText1Bold
,DocumentTextBold
,DocumentUploadBold
,DocumentBold
,Edit2Bold
,EditBold
,MenuBoardBold
,Note1Bold
,NoteAddBold
,NoteFavoriteBold
,NoteRemoveBold
,NoteTextBold
,NoteBold
,StickynoteBold
,TaskSquareBold
,TaskBold
,ArchiveBookOutlined
,BillOutlined
,ClipboardCloseOutlined
,ClipboardExportOutlined
,ClipboardImportOutlined
,ClipboardTextOutlined
,ClipboardTickOutlined
,CopyrightOutlined
,CreativeCommonsOutlined
,DocumentCloudOutlined
,DocumentCopyOutlined
,DocumentDownloadOutlined
,DocumentFavoriteOutlined
,DocumentFilterOutlined
,DocumentForwardOutlined
,DocumentLikeOutlined
,DocumentNormalOutlined
,DocumentPreviousOutlined
,DocumentSketchOutlined
,DocumentText1Outlined
,DocumentTextOutlined
,DocumentUploadOutlined
,DocumentOutlined
,Edit2Outlined
,EditOutlined
,MenuBoardOutlined
,Note1Outlined
,NoteAddOutlined
,NoteFavoriteOutlined
,NoteRemoveOutlined
,NoteTextOutlined
,NoteOutlined
,StickynoteOutlined
,TaskSquareOutlined
,TaskOutlined   
} from "rutvik-react-icon";

export const Content_edit = () => {
  const [copied, setcopied] = useState(false);

  const content_edit_bold =  [
    { icon: <ArchiveBookBold/>, icon_name: 'ArchiveBookBold' },
    { icon: <BillBold/>, icon_name: 'BillBold' },
    { icon: <ClipboardCloseBold/>, icon_name: 'ClipboardCloseBold' },
    { icon: <ClipboardExportBold/>, icon_name: 'ClipboardExportBold' },
    { icon: <ClipboardImportBold/>, icon_name: 'ClipboardImportBold' },
    { icon: <ClipboardTextBold/>, icon_name: 'ClipboardTextBold' },
    { icon: <ClipboardTickBold/>, icon_name: 'ClipboardTickBold' },
    { icon: <CopyrightBold/>, icon_name: 'CopyrightBold' },
    { icon: <CreativeCommonsBold/>, icon_name: 'CreativeCommonsBold' },
    { icon: <DocumentCloudBold/>, icon_name: 'DocumentCloudBold' },
    { icon: <DocumentCopyBold/>, icon_name: 'DocumentCopyBold' },
    {
      icon: <DocumentDownloadBold/>,
      icon_name: 'DocumentDownloadBold'
    },
    {
      icon: <DocumentFavoriteBold/>,
      icon_name: 'DocumentFavoriteBold'
    },
    { icon: <DocumentFilterBold/>, icon_name: 'DocumentFilterBold' },
    { icon: <DocumentForwardBold/>, icon_name: 'DocumentForwardBold' },
    { icon: <DocumentLikeBold/>, icon_name: 'DocumentLikeBold' },
    { icon: <DocumentNormalBold/>, icon_name: 'DocumentNormalBold' },
    {
      icon: <DocumentPreviousBold/>,
      icon_name: 'DocumentPreviousBold'
    },
    { icon: <DocumentSketchBold/>, icon_name: 'DocumentSketchBold' },
    { icon: <DocumentText1Bold/>, icon_name: 'DocumentText1Bold' },
    { icon: <DocumentTextBold/>, icon_name: 'DocumentTextBold' },
    { icon: <DocumentUploadBold/>, icon_name: 'DocumentUploadBold' },
    { icon: <DocumentBold/>, icon_name: 'DocumentBold' },
    { icon: <Edit2Bold/>, icon_name: 'Edit2Bold' },
    { icon: <EditBold/>, icon_name: 'EditBold' },
    { icon: <MenuBoardBold/>, icon_name: 'MenuBoardBold' },
    { icon: <Note1Bold/>, icon_name: 'Note1Bold' },
    { icon: <NoteAddBold/>, icon_name: 'NoteAddBold' },
    { icon: <NoteFavoriteBold/>, icon_name: 'NoteFavoriteBold' },
    { icon: <NoteRemoveBold/>, icon_name: 'NoteRemoveBold' },
    { icon: <NoteTextBold/>, icon_name: 'NoteTextBold' },
    { icon: <NoteBold/>, icon_name: 'NoteBold' },
    { icon: <StickynoteBold/>, icon_name: 'StickynoteBold' },
    { icon: <TaskSquareBold/>, icon_name: 'TaskSquareBold' },
    { icon: <TaskBold/>, icon_name: 'TaskBold' }
  ]
  const content_edit_outlined =  [
    { icon: <ArchiveBookOutlined/>, icon_name: 'ArchiveBookOutlined' },
    { icon: <BillOutlined/>, icon_name: 'BillOutlined' },
    {
      icon: <ClipboardCloseOutlined/>,
      icon_name: 'ClipboardCloseOutlined'
    },
    {
      icon: <ClipboardExportOutlined/>,
      icon_name: 'ClipboardExportOutlined'
    },
    {
      icon: <ClipboardImportOutlined/>,
      icon_name: 'ClipboardImportOutlined'
    },
    {
      icon: <ClipboardTextOutlined/>,
      icon_name: 'ClipboardTextOutlined'
    },
    {
      icon: <ClipboardTickOutlined/>,
      icon_name: 'ClipboardTickOutlined'
    },
    { icon: <CopyrightOutlined/>, icon_name: 'CopyrightOutlined' },
    {
      icon: <CreativeCommonsOutlined/>,
      icon_name: 'CreativeCommonsOutlined'
    },
    {
      icon: <DocumentCloudOutlined/>,
      icon_name: 'DocumentCloudOutlined'
    },
    {
      icon: <DocumentCopyOutlined/>,
      icon_name: 'DocumentCopyOutlined'
    },
    {
      icon: <DocumentDownloadOutlined/>,
      icon_name: 'DocumentDownloadOutlined'
    },
    {
      icon: <DocumentFavoriteOutlined/>,
      icon_name: 'DocumentFavoriteOutlined'
    },
    {
      icon: <DocumentFilterOutlined/>,
      icon_name: 'DocumentFilterOutlined'
    },
    {
      icon: <DocumentForwardOutlined/>,
      icon_name: 'DocumentForwardOutlined'
    },
    {
      icon: <DocumentLikeOutlined/>,
      icon_name: 'DocumentLikeOutlined'
    },
    {
      icon: <DocumentNormalOutlined/>,
      icon_name: 'DocumentNormalOutlined'
    },
    {
      icon: <DocumentPreviousOutlined/>,
      icon_name: 'DocumentPreviousOutlined'
    },
    {
      icon: <DocumentSketchOutlined/>,
      icon_name: 'DocumentSketchOutlined'
    },
    {
      icon: <DocumentText1Outlined/>,
      icon_name: 'DocumentText1Outlined'
    },
    {
      icon: <DocumentTextOutlined/>,
      icon_name: 'DocumentTextOutlined'
    },
    {
      icon: <DocumentUploadOutlined/>,
      icon_name: 'DocumentUploadOutlined'
    },
    { icon: <DocumentOutlined/>, icon_name: 'DocumentOutlined' },
    { icon: <Edit2Outlined/>, icon_name: 'Edit2Outlined' },
    { icon: <EditOutlined/>, icon_name: 'EditOutlined' },
    { icon: <MenuBoardOutlined/>, icon_name: 'MenuBoardOutlined' },
    { icon: <Note1Outlined/>, icon_name: 'Note1Outlined' },
    { icon: <NoteAddOutlined/>, icon_name: 'NoteAddOutlined' },
    {
      icon: <NoteFavoriteOutlined/>,
      icon_name: 'NoteFavoriteOutlined'
    },
    { icon: <NoteRemoveOutlined/>, icon_name: 'NoteRemoveOutlined' },
    { icon: <NoteTextOutlined/>, icon_name: 'NoteTextOutlined' },
    { icon: <NoteOutlined/>, icon_name: 'NoteOutlined' },
    { icon: <StickynoteOutlined/>, icon_name: 'StickynoteOutlined' },
    { icon: <TaskSquareOutlined/>, icon_name: 'TaskSquareOutlined' },
    { icon: <TaskOutlined/>, icon_name: 'TaskOutlined' }
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
            <h2 className="icon-heading">Content , Edit</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {content_edit_bold.map((i) => {
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
              {content_edit_outlined.map((i) => {
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
