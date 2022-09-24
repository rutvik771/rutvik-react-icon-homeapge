import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    AlarmBold
,CheckBold
,EyeSlashBold
,EyeBold
,FingerCricleBold
,FingerScanBold
,FrameBold
,KeySquareBold
,KeyBold
,Lock1Bold
,LockCircleBold
,LockSlashBold
,LockBold
,PasswordCheckBold
,RadarBold
,ScanBarcodeBold
,ScannerBold
,ScanningBold
,ScanBold
,SecuritySafeBold
,SecurityUserBold
,SecurityBold
,ShieldCrossBold
,ShieldSearchBold
,ShieldSecurityBold
,ShieldSlashBold
,ShieldTickBold
,UnlockBold
,AlarmOutlined
,CheckOutlined
,EyeSlashOutlined
,EyeOutlined
,FingerCricleOutlined
,FingerScanOutlined
,FrameOutlined
,KeySquareOutlined
,KeyOutlined
,Lock1Outlined
,LockCircleOutlined
,LockSlashOutlined
,LockOutlined
,PasswordCheckOutlined
,RadarOutlined
,ScanBarcodeOutlined
,ScannerOutlined
,ScanningOutlined
,ScanOutlined
,SecuritySafeOutlined
,SecurityUserOutlined
,SecurityOutlined
,ShieldCrossOutlined
,ShieldSearchOutlined
,ShieldSlashOutlined
,ShieldTickOutlined
,ShieldOutlined
,UnlockOutlined



    


    
} from "rutvik-react-icon";

export const Security = () => {
  const [copied, setcopied] = useState(false);

  const security_bold =  [
    { icon: <AlarmBold/>, icon_name: 'AlarmBold' },
    { icon: <CheckBold/>, icon_name: 'CheckBold' },
    { icon: <EyeSlashBold/>, icon_name: 'EyeSlashBold' },
    { icon: <EyeBold/>, icon_name: 'EyeBold' },
    { icon: <FingerCricleBold/>, icon_name: 'FingerCricleBold' },
    { icon: <FingerScanBold/>, icon_name: 'FingerScanBold' },
    { icon: <FrameBold/>, icon_name: 'FrameBold' },
    { icon: <KeySquareBold/>, icon_name: 'KeySquareBold' },
    { icon: <KeyBold/>, icon_name: 'KeyBold' },
    { icon: <Lock1Bold/>, icon_name: 'Lock1Bold' },
    { icon: <LockCircleBold/>, icon_name: 'LockCircleBold' },
    { icon: <LockSlashBold/>, icon_name: 'LockSlashBold' },
    { icon: <LockBold/>, icon_name: 'LockBold' },
    { icon: <PasswordCheckBold/>, icon_name: 'PasswordCheckBold' },
    { icon: <RadarBold/>, icon_name: 'RadarBold' },
    { icon: <ScanBarcodeBold/>, icon_name: 'ScanBarcodeBold' },
    { icon: <ScannerBold/>, icon_name: 'ScannerBold' },
    { icon: <ScanningBold/>, icon_name: 'ScanningBold' },
    { icon: <ScanBold/>, icon_name: 'ScanBold' },
    { icon: <SecuritySafeBold/>, icon_name: 'SecuritySafeBold' },
    { icon: <SecurityUserBold/>, icon_name: 'SecurityUserBold' },
    { icon: <SecurityBold/>, icon_name: 'SecurityBold' },
    { icon: <ShieldCrossBold/>, icon_name: 'ShieldCrossBold' },
    { icon: <ShieldSearchBold/>, icon_name: 'ShieldSearchBold' },
    { icon: <ShieldSecurityBold/>, icon_name: 'ShieldSecurityBold' },
    { icon: <ShieldSlashBold/>, icon_name: 'ShieldSlashBold' },
    { icon: <ShieldTickBold/>, icon_name: 'ShieldTickBold' },
    { icon: <UnlockBold/>, icon_name: 'UnlockBold' }
  ]

  const security_outlined =  [
    { icon: <AlarmOutlined/>, icon_name: 'AlarmOutlined' },
    { icon: <CheckOutlined/>, icon_name: 'CheckOutlined' },
    { icon: <EyeSlashOutlined/>, icon_name: 'EyeSlashOutlined' },
    { icon: <EyeOutlined/>, icon_name: 'EyeOutlined' },
    {
      icon: <FingerCricleOutlined/>,
      icon_name: 'FingerCricleOutlined'
    },
    { icon: <FingerScanOutlined/>, icon_name: 'FingerScanOutlined' },
    { icon: <FrameOutlined/>, icon_name: 'FrameOutlined' },
    { icon: <KeySquareOutlined/>, icon_name: 'KeySquareOutlined' },
    { icon: <KeyOutlined/>, icon_name: 'KeyOutlined' },
    { icon: <Lock1Outlined/>, icon_name: 'Lock1Outlined' },
    { icon: <LockCircleOutlined/>, icon_name: 'LockCircleOutlined' },
    { icon: <LockSlashOutlined/>, icon_name: 'LockSlashOutlined' },
    { icon: <LockOutlined/>, icon_name: 'LockOutlined' },
    {
      icon: <PasswordCheckOutlined/>,
      icon_name: 'PasswordCheckOutlined'
    },
    { icon: <RadarOutlined/>, icon_name: 'RadarOutlined' },
    { icon: <ScanBarcodeOutlined/>, icon_name: 'ScanBarcodeOutlined' },
    { icon: <ScannerOutlined/>, icon_name: 'ScannerOutlined' },
    { icon: <ScanningOutlined/>, icon_name: 'ScanningOutlined' },
    { icon: <ScanOutlined/>, icon_name: 'ScanOutlined' },
    {
      icon: <SecuritySafeOutlined/>,
      icon_name: 'SecuritySafeOutlined'
    },
    {
      icon: <SecurityUserOutlined/>,
      icon_name: 'SecurityUserOutlined'
    },
    { icon: <SecurityOutlined/>, icon_name: 'SecurityOutlined' },
    { icon: <ShieldCrossOutlined/>, icon_name: 'ShieldCrossOutlined' },
    {
      icon: <ShieldSearchOutlined/>,
      icon_name: 'ShieldSearchOutlined'
    },
    { icon: <ShieldSlashOutlined/>, icon_name: 'ShieldSlashOutlined' },
    { icon: <ShieldTickOutlined/>, icon_name: 'ShieldTickOutlined' },
    { icon: <ShieldOutlined/>, icon_name: 'ShieldOutlined' },
    { icon: <UnlockOutlined/>, icon_name: 'UnlockOutlined' }
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
            <h2 className="icon-heading">Security</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {security_bold.map((i) => {
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
              {security_outlined.map((i) => {
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
