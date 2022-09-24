import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  ArchiveAddBold,
  ArchiveMinusBold,
  ArchiveSlashBold,
  ArchiveTickBold,
  ArchiveBold,
  BookSavedBold,
  BookSquareBold,
  ReceiptSquareBold,
  Save2Bold,
  SaveAddBold,
  SaveMinusBold,
  SaveRemoveBold,
  ArchiveAddOutlined,
  ArchiveMinusOutlined,
  ArchiveSlashOutlined,
  ArchiveTickOutlined,
  ArchiveOutlined,
  BookSavedOutlined,
  BookSquareOutlined,
  ReceiptSquareOutlined,
  Save2Outlined,
  SaveAddOutlined,
  SaveMinusOutlined,
  SaveRemoveOutlined,
} from "rutvik-react-icon";

export const Archiv = () => {
  const [copied, setcopied] = useState(false);

  const archiv_bold = [
    { icon: <ArchiveAddBold />, icon_name: "ArchiveAddBold" },
    { icon: <ArchiveMinusBold />, icon_name: "ArchiveMinusBold" },
    { icon: <ArchiveSlashBold />, icon_name: "ArchiveSlashBold" },
    { icon: <ArchiveTickBold />, icon_name: "ArchiveTickBold" },
    { icon: <ArchiveBold />, icon_name: "ArchiveBold" },
    { icon: <BookSavedBold />, icon_name: "BookSavedBold" },
    { icon: <BookSquareBold />, icon_name: "BookSquareBold" },
    { icon: <ReceiptSquareBold />, icon_name: "ReceiptSquareBold" },
    { icon: <Save2Bold />, icon_name: "Save2Bold" },
    { icon: <SaveAddBold />, icon_name: "SaveAddBold" },
    { icon: <SaveMinusBold />, icon_name: "SaveMinusBold" },
    { icon: <SaveRemoveBold />, icon_name: "SaveRemoveBold" },
  ];

  const archiv_outlined = [
    { icon: <ArchiveAddOutlined />, icon_name: "ArchiveAddOutlined" },
    {
      icon: <ArchiveMinusOutlined />,
      icon_name: "ArchiveMinusOutlined",
    },
    {
      icon: <ArchiveSlashOutlined />,
      icon_name: "ArchiveSlashOutlined",
    },
    { icon: <ArchiveTickOutlined />, icon_name: "ArchiveTickOutlined" },
    { icon: <ArchiveOutlined />, icon_name: "ArchiveOutlined" },
    { icon: <BookSavedOutlined />, icon_name: "BookSavedOutlined" },
    { icon: <BookSquareOutlined />, icon_name: "BookSquareOutlined" },
    {
      icon: <ReceiptSquareOutlined />,
      icon_name: "ReceiptSquareOutlined",
    },
    { icon: <Save2Outlined />, icon_name: "Save2Outlined" },
    { icon: <SaveAddOutlined />, icon_name: "SaveAddOutlined" },
    { icon: <SaveMinusOutlined />, icon_name: "SaveMinusOutlined" },
    { icon: <SaveRemoveOutlined />, icon_name: "SaveRemoveOutlined" },
  ];

  const copy = () => {
    setcopied(true);
    toast.success("Copied to Clipboard");
  };

  return (
    <>
      <div className="main-panel">
        <div className="tb-container">
          <div className="tb-content-bold">
            <h2 className="icon-heading">Archiv</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {archiv_bold.map((i) => {
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
          <div className="tb-content-outlined">
            <h3 className="icon-type">Outlined</h3>
            <div className="tb-row">
              {archiv_outlined.map((i) => {
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
