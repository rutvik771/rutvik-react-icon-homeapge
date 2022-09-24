import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    Bag2Bold
    ,BagCross1Bold
    ,BagCrossBold
    ,BagHappyBold
    ,BagTick2Bold
    ,BagTickBold
    ,BagTimerBold
    ,BagBold
    ,BarcodeBold
    ,ShopAddBold
    ,ShopRemoveBold
    ,ShoppingBagBold
    ,ShoppingCartBold
    ,ShopBold
    ,Bag2Outlined
    ,BagCross1Outlined
    ,BagCrossOutlined
    ,BagHappyOutlined
    ,BagTick2Outlined
    ,BagTickOutlined
    ,BagTimerOutlined
    ,BagOutlined
    ,BarcodeOutlined
    ,ShopAddOutlined
    ,ShopRemoveOutlined
    ,ShoppingBagOutlined
    ,ShoppingCartOutlined
    ,ShopOutlined
    


    
} from "rutvik-react-icon";

export const Shop = () => {
  const [copied, setcopied] = useState(false);

  const shop_bold =  [
    { icon: <Bag2Bold/>, icon_name: 'Bag2Bold' },
    { icon: <BagCross1Bold/>, icon_name: 'BagCross1Bold' },
    { icon: <BagCrossBold/>, icon_name: 'BagCrossBold' },
    { icon: <BagHappyBold/>, icon_name: 'BagHappyBold' },
    { icon: <BagTick2Bold/>, icon_name: 'BagTick2Bold' },
    { icon: <BagTickBold/>, icon_name: 'BagTickBold' },
    { icon: <BagTimerBold/>, icon_name: 'BagTimerBold' },
    { icon: <BagBold/>, icon_name: 'BagBold' },
    { icon: <BarcodeBold/>, icon_name: 'BarcodeBold' },
    { icon: <ShopAddBold/>, icon_name: 'ShopAddBold' },
    { icon: <ShopRemoveBold/>, icon_name: 'ShopRemoveBold' },
    { icon: <ShoppingBagBold/>, icon_name: 'ShoppingBagBold' },
    { icon: <ShoppingCartBold/>, icon_name: 'ShoppingCartBold' },
    { icon: <ShopBold/>, icon_name: 'ShopBold' }
  ]
  const shop_outlined =  [
    { icon: <Bag2Outlined/>, icon_name: 'Bag2Outlined' },
    { icon: <BagCross1Outlined/>, icon_name: 'BagCross1Outlined' },
    { icon: <BagCrossOutlined/>, icon_name: 'BagCrossOutlined' },
    { icon: <BagHappyOutlined/>, icon_name: 'BagHappyOutlined' },
    { icon: <BagTick2Outlined/>, icon_name: 'BagTick2Outlined' },
    { icon: <BagTickOutlined/>, icon_name: 'BagTickOutlined' },
    { icon: <BagTimerOutlined/>, icon_name: 'BagTimerOutlined' },
    { icon: <BagOutlined/>, icon_name: 'BagOutlined' },
    { icon: <BarcodeOutlined/>, icon_name: 'BarcodeOutlined' },
    { icon: <ShopAddOutlined/>, icon_name: 'ShopAddOutlined' },
    { icon: <ShopRemoveOutlined/>, icon_name: 'ShopRemoveOutlined' },
    { icon: <ShoppingBagOutlined/>, icon_name: 'ShoppingBagOutlined' },
    {
      icon: <ShoppingCartOutlined/>,
      icon_name: 'ShoppingCartOutlined'
    },
    { icon: <ShopOutlined/>, icon_name: 'ShopOutlined' }
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
            <h2 className="icon-heading">Shop</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {shop_bold.map((i) => {
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
              {shop_outlined.map((i) => {
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
