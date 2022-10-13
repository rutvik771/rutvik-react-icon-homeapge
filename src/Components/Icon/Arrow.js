import React,{useState} from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  ArrangeCircle2Bold,
  ArrangeCircleBold,
  ArrangeSquare2Bold,
  ArrangeSquareBold,
  Arrow2Bold,
  Arrow3Bold,
  ArrowBottomBold,
  ArrowCircleDownBold,
  ArrowCircleLeftBold,
  ArrowCircleRightBold,
  ArrowCircleUpBold,
  ArrowDown1Bold,
  ArrowDown2Bold,
  ArrowDownBold,
  ArrowLeft1Bold,
  ArrowLeft2Bold,
  ArrowLeft3Bold,
  ArrowLeftBold,
  ArrowRight1Bold,
  ArrowRight2Bold,
  ArrowRight3Bold,
  ArrowRightBold,
  ArrowSquareDownBold,
  ArrowSquareLeftBold,
  ArrowSquareRightBold,
  ArrowSquareUpBold,
  ArrowSwapHorizontalBold,
  ArrowSwapBold,
  ArrowUp1Bold,
  ArrowUp2Bold,
  ArrowUp3Bold,
  ArrowUpBold,
  BackSquareBold,
  ConvertBold,
  Export1Bold,
  Export2Bold,
  Export3Bold,
  ExportBold,
  ForwardSquareBold,
  Import1Bold,
  Import2Bold,
  Import3Bold,
  ImportBold,
  Login1Bold,
  LoginBold,
  Logout1Bold,
  LogoutBold,
  ReceiveSquare2Bold,
  ReceiveSquareBold,
  ReceivedBold,
  RedoBold,
  Refresh2Bold,
  RefreshCircleBold,
  RefreshLeftSquareBold,
  RefreshRightSquareBold,
  RefreshSquare2Bold,
  RefreshBold,
  RepeatCircleBold,
  RepeatBold,
  RotateLeftBold,
  RotateRightBold,
  SendSqaure2Bold,
  SendSquareBold,
  SendBold,
  UndoBold,
  ArrangeCircle2Outlined,
  ArrangeCircleOutlined,
  ArrangeSquare2Outlined,
  ArrangeSquareOutlined,
  Arrow2Outlined,
  Arrow3Outlined,
  ArrowBottomOutlined,
  ArrowCircleDownOutlined,
  ArrowCircleLeftOutlined,
  ArrowCircleRightOutlined,
  ArrowCircleUpOutlined,
  ArrowDown1Outlined,
  ArrowDown2Outlined,
  ArrowDownOutlined,
  ArrowLeft1Outlined,
  ArrowLeft2Outlined,
  ArrowLeft3Outlined,
  ArrowLeftOutlined,
  ArrowRight1Outlined,
  ArrowRight2Outlined,
  ArrowRight3Outlined,
  ArrowRight4Outlined,
  ArrowRightOutlined,
  ArrowSquareDownOutlined,
  ArrowSquareLeftOutlined,
  ArrowSquareUpOutlined,
  ArrowSwapHorizontalOutlined,
  ArrowSwapOutlined,
  ArrowUp1Outlined,
  ArrowUp2Outlined,
  ArrowUp3Outlined,
  ArrowUpOutlined,
  BackSquareOutlined,
  ConvertOutlined,
  Export1Outlined,
  Export2Outlined,
  Export3Outlined,
  ExportOutlined,
  ForwardSquareOutlined,
  FrameOutlined,
  Import1Outlined,
  Import2Outlined,
  ImportOutlined,
  Login1Outlined,
  LoginOutlined,
  Logout1Outlined,
  LogoutOutlined,
  ReceiveSquare2Outlined,
  ReceiveSquareOutlined,
  ReceivedOutlined,
  RedoOutlined,
  Refresh2Outlined,
  RefreshCircleOutlined,
  RefreshLeftSquareOutlined,
  RefreshRightSquareOutlined,
  RefreshSquare2Outlined,
  RefreshOutlined,
  RepeatCircleOutlined,
  RepeatOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SendSqaure2Outlined,
  SendSquareOutlined,
  SendOutlined,
  UndoOutlined,
} from "react-icon-cx";

export const Arrow = () => {
  const [copied, setcopied] = useState(false);

  const Arrow_bold = [
    { icon: <ArrangeCircle2Bold />, icon_name: "ArrangeCircle2Bold" },
    { icon: <ArrangeCircleBold />, icon_name: "ArrangeCircleBold" },
    { icon: <ArrangeSquare2Bold />, icon_name: "ArrangeSquare2Bold" },
    { icon: <ArrangeSquareBold />, icon_name: "ArrangeSquareBold" },
    { icon: <Arrow2Bold />, icon_name: "Arrow2Bold" },
    { icon: <Arrow3Bold />, icon_name: "Arrow3Bold" },
    { icon: <ArrowBottomBold />, icon_name: "ArrowBottomBold" },
    { icon: <ArrowCircleDownBold />, icon_name: "ArrowCircleDownBold" },
    { icon: <ArrowCircleLeftBold />, icon_name: "ArrowCircleLeftBold" },
    {
      icon: <ArrowCircleRightBold />,
      icon_name: "ArrowCircleRightBold",
    },
    { icon: <ArrowCircleUpBold />, icon_name: "ArrowCircleUpBold" },
    { icon: <ArrowDown1Bold />, icon_name: "ArrowDown1Bold" },
    { icon: <ArrowDown2Bold />, icon_name: "ArrowDown2Bold" },
    { icon: <ArrowDownBold />, icon_name: "ArrowDownBold" },
    { icon: <ArrowLeft1Bold />, icon_name: "ArrowLeft1Bold" },
    { icon: <ArrowLeft2Bold />, icon_name: "ArrowLeft2Bold" },
    { icon: <ArrowLeft3Bold />, icon_name: "ArrowLeft3Bold" },
    { icon: <ArrowLeftBold />, icon_name: "ArrowLeftBold" },
    { icon: <ArrowRight1Bold />, icon_name: "ArrowRight1Bold" },
    { icon: <ArrowRight2Bold />, icon_name: "ArrowRight2Bold" },
    { icon: <ArrowRight3Bold />, icon_name: "ArrowRight3Bold" },
    { icon: <ArrowRightBold />, icon_name: "ArrowRightBold" },
    { icon: <ArrowSquareDownBold />, icon_name: "ArrowSquareDownBold" },
    { icon: <ArrowSquareLeftBold />, icon_name: "ArrowSquareLeftBold" },
    {
      icon: <ArrowSquareRightBold />,
      icon_name: "ArrowSquareRightBold",
    },
    { icon: <ArrowSquareUpBold />, icon_name: "ArrowSquareUpBold" },
    {
      icon: <ArrowSwapHorizontalBold />,
      icon_name: "ArrowSwapHorizontalBold",
    },
    { icon: <ArrowSwapBold />, icon_name: "ArrowSwapBold" },
    { icon: <ArrowUp1Bold />, icon_name: "ArrowUp1Bold" },
    { icon: <ArrowUp2Bold />, icon_name: "ArrowUp2Bold" },
    { icon: <ArrowUp3Bold />, icon_name: "ArrowUp3Bold" },
    { icon: <ArrowUpBold />, icon_name: "ArrowUpBold" },
    { icon: <BackSquareBold />, icon_name: "BackSquareBold" },
    { icon: <ConvertBold />, icon_name: "ConvertBold" },
    { icon: <Export1Bold />, icon_name: "Export1Bold" },
    { icon: <Export2Bold />, icon_name: "Export2Bold" },
    { icon: <Export3Bold />, icon_name: "Export3Bold" },
    { icon: <ExportBold />, icon_name: "ExportBold" },
    { icon: <ForwardSquareBold />, icon_name: "ForwardSquareBold" },
    { icon: <Import1Bold />, icon_name: "Import1Bold" },
    { icon: <Import2Bold />, icon_name: "Import2Bold" },
    { icon: <Import3Bold />, icon_name: "Import3Bold" },
    { icon: <ImportBold />, icon_name: "ImportBold" },
    { icon: <Login1Bold />, icon_name: "Login1Bold" },
    { icon: <LoginBold />, icon_name: "LoginBold" },
    { icon: <Logout1Bold />, icon_name: "Logout1Bold" },
    { icon: <LogoutBold />, icon_name: "LogoutBold" },
    { icon: <ReceiveSquare2Bold />, icon_name: "ReceiveSquare2Bold" },
    { icon: <ReceiveSquareBold />, icon_name: "ReceiveSquareBold" },
    { icon: <ReceivedBold />, icon_name: "ReceivedBold" },
    { icon: <RedoBold />, icon_name: "RedoBold" },
    { icon: <Refresh2Bold />, icon_name: "Refresh2Bold" },
    { icon: <RefreshCircleBold />, icon_name: "RefreshCircleBold" },
    {
      icon: <RefreshLeftSquareBold />,
      icon_name: "RefreshLeftSquareBold",
    },
    {
      icon: <RefreshRightSquareBold />,
      icon_name: "RefreshRightSquareBold",
    },
    { icon: <RefreshSquare2Bold />, icon_name: "RefreshSquare2Bold" },
    { icon: <RefreshBold />, icon_name: "RefreshBold" },
    { icon: <RepeatCircleBold />, icon_name: "RepeatCircleBold" },
    { icon: <RepeatBold />, icon_name: "RepeatBold" },
    { icon: <RotateLeftBold />, icon_name: "RotateLeftBold" },
    { icon: <RotateRightBold />, icon_name: "RotateRightBold" },
    { icon: <SendSqaure2Bold />, icon_name: "SendSqaure2Bold" },
    { icon: <SendSquareBold />, icon_name: "SendSquareBold" },
    { icon: <SendBold />, icon_name: "SendBold" },
    { icon: <UndoBold />, icon_name: "UndoBold" },
  ];

  const Arrow_outlined = [
    {
      icon: <ArrangeCircle2Outlined />,
      icon_name: "ArrangeCircle2Outlined",
    },
    {
      icon: <ArrangeCircleOutlined />,
      icon_name: "ArrangeCircleOutlined",
    },
    {
      icon: <ArrangeSquare2Outlined />,
      icon_name: "ArrangeSquare2Outlined",
    },
    {
      icon: <ArrangeSquareOutlined />,
      icon_name: "ArrangeSquareOutlined",
    },
    { icon: <Arrow2Outlined />, icon_name: "Arrow2Outlined" },
    { icon: <Arrow3Outlined />, icon_name: "Arrow3Outlined" },
    { icon: <ArrowBottomOutlined />, icon_name: "ArrowBottomOutlined" },
    {
      icon: <ArrowCircleDownOutlined />,
      icon_name: "ArrowCircleDownOutlined",
    },
    {
      icon: <ArrowCircleLeftOutlined />,
      icon_name: "ArrowCircleLeftOutlined",
    },
    {
      icon: <ArrowCircleRightOutlined />,
      icon_name: "ArrowCircleRightOutlined",
    },
    {
      icon: <ArrowCircleUpOutlined />,
      icon_name: "ArrowCircleUpOutlined",
    },
    { icon: <ArrowDown1Outlined />, icon_name: "ArrowDown1Outlined" },
    { icon: <ArrowDown2Outlined />, icon_name: "ArrowDown2Outlined" },
    { icon: <ArrowDownOutlined />, icon_name: "ArrowDownOutlined" },
    { icon: <ArrowLeft1Outlined />, icon_name: "ArrowLeft1Outlined" },
    { icon: <ArrowLeft2Outlined />, icon_name: "ArrowLeft2Outlined" },
    { icon: <ArrowLeft3Outlined />, icon_name: "ArrowLeft3Outlined" },
    { icon: <ArrowLeftOutlined />, icon_name: "ArrowLeftOutlined" },
    { icon: <ArrowRight1Outlined />, icon_name: "ArrowRight1Outlined" },
    { icon: <ArrowRight2Outlined />, icon_name: "ArrowRight2Outlined" },
    { icon: <ArrowRight3Outlined />, icon_name: "ArrowRight3Outlined" },
    { icon: <ArrowRight4Outlined />, icon_name: "ArrowRight4Outlined" },
    { icon: <ArrowRightOutlined />, icon_name: "ArrowRightOutlined" },
    {
      icon: <ArrowSquareDownOutlined />,
      icon_name: "ArrowSquareDownOutlined",
    },
    {
      icon: <ArrowSquareLeftOutlined />,
      icon_name: "ArrowSquareLeftOutlined",
    },
    {
      icon: <ArrowSquareUpOutlined />,
      icon_name: "ArrowSquareUpOutlined",
    },
    {
      icon: <ArrowSwapHorizontalOutlined />,
      icon_name: "ArrowSwapHorizontalOutlined",
    },
    { icon: <ArrowSwapOutlined />, icon_name: "ArrowSwapOutlined" },
    { icon: <ArrowUp1Outlined />, icon_name: "ArrowUp1Outlined" },
    { icon: <ArrowUp2Outlined />, icon_name: "ArrowUp2Outlined" },
    { icon: <ArrowUp3Outlined />, icon_name: "ArrowUp3Outlined" },
    { icon: <ArrowUpOutlined />, icon_name: "ArrowUpOutlined" },
    { icon: <BackSquareOutlined />, icon_name: "BackSquareOutlined" },
    { icon: <ConvertOutlined />, icon_name: "ConvertOutlined" },
    { icon: <Export1Outlined />, icon_name: "Export1Outlined" },
    { icon: <Export2Outlined />, icon_name: "Export2Outlined" },
    { icon: <Export3Outlined />, icon_name: "Export3Outlined" },
    { icon: <ExportOutlined />, icon_name: "ExportOutlined" },
    {
      icon: <ForwardSquareOutlined />,
      icon_name: "ForwardSquareOutlined",
    },
    { icon: <FrameOutlined />, icon_name: "FrameOutlined" },
    { icon: <Import1Outlined />, icon_name: "Import1Outlined" },
    { icon: <Import2Outlined />, icon_name: "Import2Outlined" },
    { icon: <ImportOutlined />, icon_name: "ImportOutlined" },
    { icon: <Login1Outlined />, icon_name: "Login1Outlined" },
    { icon: <LoginOutlined />, icon_name: "LoginOutlined" },
    { icon: <Logout1Outlined />, icon_name: "Logout1Outlined" },
    { icon: <LogoutOutlined />, icon_name: "LogoutOutlined" },
    {
      icon: <ReceiveSquare2Outlined />,
      icon_name: "ReceiveSquare2Outlined",
    },
    {
      icon: <ReceiveSquareOutlined />,
      icon_name: "ReceiveSquareOutlined",
    },
    { icon: <ReceivedOutlined />, icon_name: "ReceivedOutlined" },
    { icon: <RedoOutlined />, icon_name: "RedoOutlined" },
    { icon: <Refresh2Outlined />, icon_name: "Refresh2Outlined" },
    {
      icon: <RefreshCircleOutlined />,
      icon_name: "RefreshCircleOutlined",
    },
    {
      icon: <RefreshLeftSquareOutlined />,
      icon_name: "RefreshLeftSquareOutlined",
    },
    {
      icon: <RefreshRightSquareOutlined />,
      icon_name: "RefreshRightSquareOutlined",
    },
    {
      icon: <RefreshSquare2Outlined />,
      icon_name: "RefreshSquare2Outlined",
    },
    { icon: <RefreshOutlined />, icon_name: "RefreshOutlined" },
    {
      icon: <RepeatCircleOutlined />,
      icon_name: "RepeatCircleOutlined",
    },
    { icon: <RepeatOutlined />, icon_name: "RepeatOutlined" },
    { icon: <RotateLeftOutlined />, icon_name: "RotateLeftOutlined" },
    { icon: <RotateRightOutlined />, icon_name: "RotateRightOutlined" },
    { icon: <SendSqaure2Outlined />, icon_name: "SendSqaure2Outlined" },
    { icon: <SendSquareOutlined />, icon_name: "SendSquareOutlined" },
    { icon: <SendOutlined />, icon_name: "SendOutlined" },
    { icon: <UndoOutlined />, icon_name: "UndoOutlined" },
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
          <h2 className="icon-heading">Arrow</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {Arrow_bold.map((i) => {
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
              {Arrow_outlined.map((i) => {
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
