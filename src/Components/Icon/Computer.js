import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    AirdropBold
    ,AirpodsBold
    ,AirpodBold
    ,Bluetooth2Bold
    ,BluetoothCircleBold
    ,BluetoothRectangleBold
    ,BluetoothBold
    ,ClockBold
    ,CloudAddBold
    ,CloudChangeBold
    ,CloudConnectionBold
    ,CloudRemoveBold
    ,CpuChargeBold
    ,CpuSettingBold
    ,CpuBold
    ,DevicesBold
    ,Driver2Bold
    ,DriverRefreshBold
    ,DriverBold
    ,ElectricityBold
    ,ExternalDriveBold
    ,FolderConnectionBold
    ,GameboyBold
    ,GameBold
    ,HeadphonesBold
    ,HeadphoneBold
    ,KeyboardOpenBold
    ,KeyboardBold
    ,LampBold
    ,MicroscopeBold
    ,MirroringScreenBold
    ,MobileBold
    ,MonitorMobbileBold
    ,MonitorRecorderBold
    ,MonitorBold
    ,MouseBold
    ,MusicPlayBold
    ,PrinterSlashBold
    ,PrinterBold
    ,Ram2Bold
    ,RamBold
    ,Simcard1Bold
    ,Simcard2Bold
    ,SimcardBold
    ,SpeakerBold
    ,WatchStatusBold
    ,WatchBold
    ,WeightBold
    ,AirdropOutlined
    ,AirpodsOutlined
    ,AirpodOutlined
    ,Bluetooth2Outlined
    ,BluetoothCircleOutlined
    ,BluetoothRectangleOutlined
    ,BluetoothOutlined
    ,ClockOutlined
    ,CloudAddOutlined
    ,CloudChangeOutlined
    ,CloudConnectionOutlined
    ,CloudRemoveOutlined
    ,CpuChargeOutlined
    ,CpuSettingOutlined
    ,CpuOutlined
    ,DevicesOutlined
    ,Driver2Outlined
    ,DriverRefreshOutlined
    ,DriverOutlined
    ,ElectricityOutlined
    ,ExternalDriveOutlined
    ,FolderConnectionOutlined
    ,GameboyOutlined
    ,GameOutlined
    ,HeadphonesOutlined
    ,HeadphoneOutlined
    ,KeyboardOpenOutlined
    ,KeyboardOutlined
    ,LampOutlined
    ,MicroscopeOutlined
    ,MirroringScreenOutlined
    ,MobileOutlined
    ,MonitorMobbileOutlined
    ,MonitorRecorderOutlined
    ,MonitorOutlined
    ,MouseOutlined
    ,MusicPlayOutlined
    ,PrinterSlashOutlined
    ,PrinterOutlined
    ,Ram2Outlined
    ,RamOutlined
    ,Simcard1Outlined
    ,Simcard2Outlined
    ,SimcardOutlined
    ,SpeakerOutlined
    ,WatchStatusOutlined
    ,WatchOutlined
    ,WeightOutlined
    
    
    


    
} from "rutvik-react-icon";

export const Computer = () => {
  const [copied, setcopied] = useState(false);

  const computer_device_bold =  [
    { icon: <AirdropBold/>, icon_name: 'AirdropBold' },
    { icon: <AirpodsBold/>, icon_name: 'AirpodsBold' },
    { icon: <AirpodBold/>, icon_name: 'AirpodBold' },
    { icon: <Bluetooth2Bold/>, icon_name: 'Bluetooth2Bold' },
    { icon: <BluetoothCircleBold/>, icon_name: 'BluetoothCircleBold' },
    {
      icon: <BluetoothRectangleBold/>,
      icon_name: 'BluetoothRectangleBold'
    },
    { icon: <BluetoothBold/>, icon_name: 'BluetoothBold' },
    { icon: <ClockBold/>, icon_name: 'ClockBold' },
    { icon: <CloudAddBold/>, icon_name: 'CloudAddBold' },
    { icon: <CloudChangeBold/>, icon_name: 'CloudChangeBold' },
    { icon: <CloudConnectionBold/>, icon_name: 'CloudConnectionBold' },
    { icon: <CloudRemoveBold/>, icon_name: 'CloudRemoveBold' },
    { icon: <CpuChargeBold/>, icon_name: 'CpuChargeBold' },
    { icon: <CpuSettingBold/>, icon_name: 'CpuSettingBold' },
    { icon: <CpuBold/>, icon_name: 'CpuBold' },
    { icon: <DevicesBold/>, icon_name: 'DevicesBold' },
    { icon: <Driver2Bold/>, icon_name: 'Driver2Bold' },
    { icon: <DriverRefreshBold/>, icon_name: 'DriverRefreshBold' },
    { icon: <DriverBold/>, icon_name: 'DriverBold' },
    { icon: <ElectricityBold/>, icon_name: 'ElectricityBold' },
    { icon: <ExternalDriveBold/>, icon_name: 'ExternalDriveBold' },
    {
      icon: <FolderConnectionBold/>,
      icon_name: 'FolderConnectionBold'
    },
    { icon: <GameboyBold/>, icon_name: 'GameboyBold' },
    { icon: <GameBold/>, icon_name: 'GameBold' },
    { icon: <HeadphonesBold/>, icon_name: 'HeadphonesBold' },
    { icon: <HeadphoneBold/>, icon_name: 'HeadphoneBold' },
    { icon: <KeyboardOpenBold/>, icon_name: 'KeyboardOpenBold' },
    { icon: <KeyboardBold/>, icon_name: 'KeyboardBold' },
    { icon: <LampBold/>, icon_name: 'LampBold' },
    { icon: <MicroscopeBold/>, icon_name: 'MicroscopeBold' },
    { icon: <MirroringScreenBold/>, icon_name: 'MirroringScreenBold' },
    { icon: <MobileBold/>, icon_name: 'MobileBold' },
    { icon: <MonitorMobbileBold/>, icon_name: 'MonitorMobbileBold' },
    { icon: <MonitorRecorderBold/>, icon_name: 'MonitorRecorderBold' },
    { icon: <MonitorBold/>, icon_name: 'MonitorBold' },
    { icon: <MouseBold/>, icon_name: 'MouseBold' },
    { icon: <MusicPlayBold/>, icon_name: 'MusicPlayBold' },
    { icon: <PrinterSlashBold/>, icon_name: 'PrinterSlashBold' },
    { icon: <PrinterBold/>, icon_name: 'PrinterBold' },
    { icon: <Ram2Bold/>, icon_name: 'Ram2Bold' },
    { icon: <RamBold/>, icon_name: 'RamBold' },
    { icon: <Simcard1Bold/>, icon_name: 'Simcard1Bold' },
    { icon: <Simcard2Bold/>, icon_name: 'Simcard2Bold' },
    { icon: <SimcardBold/>, icon_name: 'SimcardBold' },
    { icon: <SpeakerBold/>, icon_name: 'SpeakerBold' },
    { icon: <WatchStatusBold/>, icon_name: 'WatchStatusBold' },
    { icon: <WatchBold/>, icon_name: 'WatchBold' },
    { icon: <WeightBold/>, icon_name: 'WeightBold' }
  ]
  const computer_device_outlined =  [
    { icon: <AirdropOutlined/>, icon_name: 'AirdropOutlined' },
    { icon: <AirpodsOutlined/>, icon_name: 'AirpodsOutlined' },
    { icon: <AirpodOutlined/>, icon_name: 'AirpodOutlined' },
    { icon: <Bluetooth2Outlined/>, icon_name: 'Bluetooth2Outlined' },
    {
      icon: <BluetoothCircleOutlined/>,
      icon_name: 'BluetoothCircleOutlined'
    },
    {
      icon: <BluetoothRectangleOutlined/>,
      icon_name: 'BluetoothRectangleOutlined'
    },
    { icon: <BluetoothOutlined/>, icon_name: 'BluetoothOutlined' },
    { icon: <ClockOutlined/>, icon_name: 'ClockOutlined' },
    { icon: <CloudAddOutlined/>, icon_name: 'CloudAddOutlined' },
    { icon: <CloudChangeOutlined/>, icon_name: 'CloudChangeOutlined' },
    {
      icon: <CloudConnectionOutlined/>,
      icon_name: 'CloudConnectionOutlined'
    },
    { icon: <CloudRemoveOutlined/>, icon_name: 'CloudRemoveOutlined' },
    { icon: <CpuChargeOutlined/>, icon_name: 'CpuChargeOutlined' },
    { icon: <CpuSettingOutlined/>, icon_name: 'CpuSettingOutlined' },
    { icon: <CpuOutlined/>, icon_name: 'CpuOutlined' },
    { icon: <DevicesOutlined/>, icon_name: 'DevicesOutlined' },
    { icon: <Driver2Outlined/>, icon_name: 'Driver2Outlined' },
    {
      icon: <DriverRefreshOutlined/>,
      icon_name: 'DriverRefreshOutlined'
    },
    { icon: <DriverOutlined/>, icon_name: 'DriverOutlined' },
    { icon: <ElectricityOutlined/>, icon_name: 'ElectricityOutlined' },
    {
      icon: <ExternalDriveOutlined/>,
      icon_name: 'ExternalDriveOutlined'
    },
    {
      icon: <FolderConnectionOutlined/>,
      icon_name: 'FolderConnectionOutlined'
    },
    { icon: <GameboyOutlined/>, icon_name: 'GameboyOutlined' },
    { icon: <GameOutlined/>, icon_name: 'GameOutlined' },
    { icon: <HeadphonesOutlined/>, icon_name: 'HeadphonesOutlined' },
    { icon: <HeadphoneOutlined/>, icon_name: 'HeadphoneOutlined' },
    {
      icon: <KeyboardOpenOutlined/>,
      icon_name: 'KeyboardOpenOutlined'
    },
    { icon: <KeyboardOutlined/>, icon_name: 'KeyboardOutlined' },
    { icon: <LampOutlined/>, icon_name: 'LampOutlined' },
    { icon: <MicroscopeOutlined/>, icon_name: 'MicroscopeOutlined' },
    {
      icon: <MirroringScreenOutlined/>,
      icon_name: 'MirroringScreenOutlined'
    },
    { icon: <MobileOutlined/>, icon_name: 'MobileOutlined' },
    {
      icon: <MonitorMobbileOutlined/>,
      icon_name: 'MonitorMobbileOutlined'
    },
    {
      icon: <MonitorRecorderOutlined/>,
      icon_name: 'MonitorRecorderOutlined'
    },
    { icon: <MonitorOutlined/>, icon_name: 'MonitorOutlined' },
    { icon: <MouseOutlined/>, icon_name: 'MouseOutlined' },
    { icon: <MusicPlayOutlined/>, icon_name: 'MusicPlayOutlined' },
    {
      icon: <PrinterSlashOutlined/>,
      icon_name: 'PrinterSlashOutlined'
    },
    { icon: <PrinterOutlined/>, icon_name: 'PrinterOutlined' },
    { icon: <Ram2Outlined/>, icon_name: 'Ram2Outlined' },
    { icon: <RamOutlined/>, icon_name: 'RamOutlined' },
    { icon: <Simcard1Outlined/>, icon_name: 'Simcard1Outlined' },
    { icon: <Simcard2Outlined/>, icon_name: 'Simcard2Outlined' },
    { icon: <SimcardOutlined/>, icon_name: 'SimcardOutlined' },
    { icon: <SpeakerOutlined/>, icon_name: 'SpeakerOutlined' },
    { icon: <WatchStatusOutlined/>, icon_name: 'WatchStatusOutlined' },
    { icon: <WatchOutlined/>, icon_name: 'WatchOutlined' },
    { icon: <WeightOutlined/>, icon_name: 'WeightOutlined' }
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
            <h2 className="icon-heading">Computer,Device</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {computer_device_bold.map((i) => {
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
              {computer_device_outlined.map((i) => {
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
