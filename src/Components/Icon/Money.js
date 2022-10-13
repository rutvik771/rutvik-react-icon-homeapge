import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  ArchiveBold,
  CardAddBold,
  CardEditBold,
  CardPosBold,
  CardReceiveBold,
  CardRemove1Bold,
  CardRemoveBold,
  CardSendBold,
  CardSlashBold,
  CardTick1Bold,
  CardTickBold,
  CardsBold,
  CardBold,
  ChartSquareBold,
  Coin1Bold,
  CoinBold,
  ConvertCardBold,
  DiscountCircleBold,
  DiscountShapeBold,
  DocumentBold,
  DollarCircleBold,
  DollarSquareBold,
  EmptyWalletAddBold,
  EmptyWalletChangeBold,
  EmptyWalletRemoveBold,
  EmptyWalletTickBold,
  EmptyWalletTimeBold,
  EmptyWalletBold,
  MathBold,
  Money2Bold,
  Money3Bold,
  Money4Bold,
  MoneyAddBold,
  MoneyChangeBold,
  MoneyForbiddenBold,
  MoneyReciveBold,
  MoneyRemoveBold,
  MoneySendBold,
  MoneyTickBold,
  MoneyTimeBold,
  MoneysBold,
  MoneyBold,
  PercentageCircleBold,
  PercentageSquareBold,
  Receipt1Bold,
  Receipt21Bold,
  Receipt2Bold,
  ReceiptAddBold,
  ReceiptDiscountBold,
  ReceiptDisscountBold,
  ReceiptEditBold,
  ReceiptItemBold,
  ReceiptMinusBold,
  ReceiptSearchBold,
  ReceiptTextBold,
  ReceiptBold,
  SecurityCardBold,
  Strongbox2Bold,
  StrongboxBold,
  Tag2Bold,
  TagBold,
  Ticket2Bold,
  TicketDiscountBold,
  TicketExpiredBold,
  TicketStarBold,
  TicketBold,
  TransactionMinusBold,
  Wallet1Bold,
  Wallet2Bold,
  Wallet3Bold,
  WalletAdd1Bold,
  WalletAddBold,
  WalletCheckBold,
  WalletMinusBold,
  WalletMoneyBold,
  WalletRemoveBold,
  WalletSearchBold,
  WalletBold,
  ArchiveOutlined,
  CardAddOutlined,
  CardEditOutlined,
  CardPosOutlined,
  CardReceiveOutlined,
  CardRemove1Outlined,
  CardRemoveOutlined,
  CardSendOutlined,
  CardSlashOutlined,
  CardTick1Outlined,
  CardTickOutlined,
  CardsOutlined,
  CardOutlined,
  ChartSquareOutlined,
  Coin1Outlined,
  CoinOutlined,
  ConvertCardOutlined,
  DiscountCircleOutlined,
  DiscountShapeOutlined,
  DocumentOutlined,
  DollarCircleOutlined,
  DollarSquareOutlined,
  EmptyWalletAddOutlined,
  EmptyWalletChangeOutlined,
  EmptyWalletRemoveOutlined,
  EmptyWalletTickOutlined,
  EmptyWalletTimeOutlined,
  EmptyWalletOutlined,
  MathOutlined,
  Money2Outlined,
  Money3Outlined,
  Money4Outlined,
  MoneyAddOutlined,
  MoneyChangeOutlined,
  MoneyForbiddenOutlined,
  MoneyReciveOutlined,
  MoneyRemoveOutlined,
  MoneySendOutlined,
  MoneyTickOutlined,
  MoneyTimeOutlined,
  MoneysOutlined,
  MoneyOutlined,
  PercentageCircleOutlined,
  PercentageSquareOutlined,
  Receipt1Outlined,
  Receipt21Outlined,
  Receipt2Outlined,
  ReceiptAddOutlined,
  ReceiptDiscountOutlined,
  ReceiptDisscountOutlined,
  ReceiptEditOutlined,
  ReceiptItemOutlined,
  ReceiptMinusOutlined,
  ReceiptSearchOutlined,
  ReceiptTextOutlined,
  ReceiptOutlined,
  SecurityCardOutlined,
  Strongbox2Outlined,
  StrongboxOutlined,
  Tag2Outlined,
  TagOutlined,
  Ticket2Outlined,
  TicketDiscountOutlined,
  TicketExpiredOutlined,
  TicketStarOutlined,
  TicketOutlined,
  TransactionMinusOutlined,
  Wallet1Outlined,
  Wallet2Outlined,
  Wallet3Outlined,
  WalletAdd1Outlined,
  WalletAddOutlined,
  WalletCheckOutlined,
  WalletMinusOutlined,
  WalletMoneyOutlined,
  WalletRemoveOutlined,
  WalletSearchOutlined,
  WalletOutlined,
} from "react-icon-cx";

export const Money = () => {
  const [copied, setcopied] = useState(false);

  const money_bold = [
    { icon: <ArchiveBold />, icon_name: "ArchiveBold" },
    { icon: <CardAddBold />, icon_name: "CardAddBold" },
    { icon: <CardEditBold />, icon_name: "CardEditBold" },
    { icon: <CardPosBold />, icon_name: "CardPosBold" },
    { icon: <CardReceiveBold />, icon_name: "CardReceiveBold" },
    { icon: <CardRemove1Bold />, icon_name: "CardRemove1Bold" },
    { icon: <CardRemoveBold />, icon_name: "CardRemoveBold" },
    { icon: <CardSendBold />, icon_name: "CardSendBold" },
    { icon: <CardSlashBold />, icon_name: "CardSlashBold" },
    { icon: <CardTick1Bold />, icon_name: "CardTick1Bold" },
    { icon: <CardTickBold />, icon_name: "CardTickBold" },
    { icon: <CardsBold />, icon_name: "CardsBold" },
    { icon: <CardBold />, icon_name: "CardBold" },
    { icon: <ChartSquareBold />, icon_name: "ChartSquareBold" },
    { icon: <Coin1Bold />, icon_name: "Coin1Bold" },
    { icon: <CoinBold />, icon_name: "CoinBold" },
    { icon: <ConvertCardBold />, icon_name: "ConvertCardBold" },
    { icon: <DiscountCircleBold />, icon_name: "DiscountCircleBold" },
    { icon: <DiscountShapeBold />, icon_name: "DiscountShapeBold" },
    { icon: <DocumentBold />, icon_name: "DocumentBold" },
    { icon: <DollarCircleBold />, icon_name: "DollarCircleBold" },
    { icon: <DollarSquareBold />, icon_name: "DollarSquareBold" },
    { icon: <EmptyWalletAddBold />, icon_name: "EmptyWalletAddBold" },
    {
      icon: <EmptyWalletChangeBold />,
      icon_name: "EmptyWalletChangeBold",
    },
    {
      icon: <EmptyWalletRemoveBold />,
      icon_name: "EmptyWalletRemoveBold",
    },
    { icon: <EmptyWalletTickBold />, icon_name: "EmptyWalletTickBold" },
    { icon: <EmptyWalletTimeBold />, icon_name: "EmptyWalletTimeBold" },
    { icon: <EmptyWalletBold />, icon_name: "EmptyWalletBold" },
    { icon: <MathBold />, icon_name: "MathBold" },
    { icon: <Money2Bold />, icon_name: "Money2Bold" },
    { icon: <Money3Bold />, icon_name: "Money3Bold" },
    { icon: <Money4Bold />, icon_name: "Money4Bold" },
    { icon: <MoneyAddBold />, icon_name: "MoneyAddBold" },
    { icon: <MoneyChangeBold />, icon_name: "MoneyChangeBold" },
    { icon: <MoneyForbiddenBold />, icon_name: "MoneyForbiddenBold" },
    { icon: <MoneyReciveBold />, icon_name: "MoneyReciveBold" },
    { icon: <MoneyRemoveBold />, icon_name: "MoneyRemoveBold" },
    { icon: <MoneySendBold />, icon_name: "MoneySendBold" },
    { icon: <MoneyTickBold />, icon_name: "MoneyTickBold" },
    { icon: <MoneyTimeBold />, icon_name: "MoneyTimeBold" },
    { icon: <MoneysBold />, icon_name: "MoneysBold" },
    { icon: <MoneyBold />, icon_name: "MoneyBold" },
    {
      icon: <PercentageCircleBold />,
      icon_name: "PercentageCircleBold",
    },
    {
      icon: <PercentageSquareBold />,
      icon_name: "PercentageSquareBold",
    },
    { icon: <Receipt1Bold />, icon_name: "Receipt1Bold" },
    { icon: <Receipt21Bold />, icon_name: "Receipt21Bold" },
    { icon: <Receipt2Bold />, icon_name: "Receipt2Bold" },
    { icon: <ReceiptAddBold />, icon_name: "ReceiptAddBold" },
    { icon: <ReceiptDiscountBold />, icon_name: "ReceiptDiscountBold" },
    {
      icon: <ReceiptDisscountBold />,
      icon_name: "ReceiptDisscountBold",
    },
    { icon: <ReceiptEditBold />, icon_name: "ReceiptEditBold" },
    { icon: <ReceiptItemBold />, icon_name: "ReceiptItemBold" },
    { icon: <ReceiptMinusBold />, icon_name: "ReceiptMinusBold" },
    { icon: <ReceiptSearchBold />, icon_name: "ReceiptSearchBold" },
    { icon: <ReceiptTextBold />, icon_name: "ReceiptTextBold" },
    { icon: <ReceiptBold />, icon_name: "ReceiptBold" },
    { icon: <SecurityCardBold />, icon_name: "SecurityCardBold" },
    { icon: <Strongbox2Bold />, icon_name: "Strongbox2Bold" },
    { icon: <StrongboxBold />, icon_name: "StrongboxBold" },
    { icon: <Tag2Bold />, icon_name: "Tag2Bold" },
    { icon: <TagBold />, icon_name: "TagBold" },
    { icon: <Ticket2Bold />, icon_name: "Ticket2Bold" },
    { icon: <TicketDiscountBold />, icon_name: "TicketDiscountBold" },
    { icon: <TicketExpiredBold />, icon_name: "TicketExpiredBold" },
    { icon: <TicketStarBold />, icon_name: "TicketStarBold" },
    { icon: <TicketBold />, icon_name: "TicketBold" },
    {
      icon: <TransactionMinusBold />,
      icon_name: "TransactionMinusBold",
    },
    { icon: <Wallet1Bold />, icon_name: "Wallet1Bold" },
    { icon: <Wallet2Bold />, icon_name: "Wallet2Bold" },
    { icon: <Wallet3Bold />, icon_name: "Wallet3Bold" },
    { icon: <WalletAdd1Bold />, icon_name: "WalletAdd1Bold" },
    { icon: <WalletAddBold />, icon_name: "WalletAddBold" },
    { icon: <WalletCheckBold />, icon_name: "WalletCheckBold" },
    { icon: <WalletMinusBold />, icon_name: "WalletMinusBold" },
    { icon: <WalletMoneyBold />, icon_name: "WalletMoneyBold" },
    { icon: <WalletRemoveBold />, icon_name: "WalletRemoveBold" },
    { icon: <WalletSearchBold />, icon_name: "WalletSearchBold" },
    { icon: <WalletBold />, icon_name: "WalletBold" },
  ];

  const money_outlined = [
    { icon: <ArchiveOutlined />, icon_name: "ArchiveOutlined" },
    { icon: <CardAddOutlined />, icon_name: "CardAddOutlined" },
    { icon: <CardEditOutlined />, icon_name: "CardEditOutlined" },
    { icon: <CardPosOutlined />, icon_name: "CardPosOutlined" },
    { icon: <CardReceiveOutlined />, icon_name: "CardReceiveOutlined" },
    { icon: <CardRemove1Outlined />, icon_name: "CardRemove1Outlined" },
    { icon: <CardRemoveOutlined />, icon_name: "CardRemoveOutlined" },
    { icon: <CardSendOutlined />, icon_name: "CardSendOutlined" },
    { icon: <CardSlashOutlined />, icon_name: "CardSlashOutlined" },
    { icon: <CardTick1Outlined />, icon_name: "CardTick1Outlined" },
    { icon: <CardTickOutlined />, icon_name: "CardTickOutlined" },
    { icon: <CardsOutlined />, icon_name: "CardsOutlined" },
    { icon: <CardOutlined />, icon_name: "CardOutlined" },
    { icon: <ChartSquareOutlined />, icon_name: "ChartSquareOutlined" },
    { icon: <Coin1Outlined />, icon_name: "Coin1Outlined" },
    { icon: <CoinOutlined />, icon_name: "CoinOutlined" },
    { icon: <ConvertCardOutlined />, icon_name: "ConvertCardOutlined" },
    {
      icon: <DiscountCircleOutlined />,
      icon_name: "DiscountCircleOutlined",
    },
    {
      icon: <DiscountShapeOutlined />,
      icon_name: "DiscountShapeOutlined",
    },
    { icon: <DocumentOutlined />, icon_name: "DocumentOutlined" },
    {
      icon: <DollarCircleOutlined />,
      icon_name: "DollarCircleOutlined",
    },
    {
      icon: <DollarSquareOutlined />,
      icon_name: "DollarSquareOutlined",
    },
    {
      icon: <EmptyWalletAddOutlined />,
      icon_name: "EmptyWalletAddOutlined",
    },
    {
      icon: <EmptyWalletChangeOutlined />,
      icon_name: "EmptyWalletChangeOutlined",
    },
    {
      icon: <EmptyWalletRemoveOutlined />,
      icon_name: "EmptyWalletRemoveOutlined",
    },
    {
      icon: <EmptyWalletTickOutlined />,
      icon_name: "EmptyWalletTickOutlined",
    },
    {
      icon: <EmptyWalletTimeOutlined />,
      icon_name: "EmptyWalletTimeOutlined",
    },
    { icon: <EmptyWalletOutlined />, icon_name: "EmptyWalletOutlined" },
    { icon: <MathOutlined />, icon_name: "MathOutlined" },
    { icon: <Money2Outlined />, icon_name: "Money2Outlined" },
    { icon: <Money3Outlined />, icon_name: "Money3Outlined" },
    { icon: <Money4Outlined />, icon_name: "Money4Outlined" },
    { icon: <MoneyAddOutlined />, icon_name: "MoneyAddOutlined" },
    { icon: <MoneyChangeOutlined />, icon_name: "MoneyChangeOutlined" },
    {
      icon: <MoneyForbiddenOutlined />,
      icon_name: "MoneyForbiddenOutlined",
    },
    { icon: <MoneyReciveOutlined />, icon_name: "MoneyReciveOutlined" },
    { icon: <MoneyRemoveOutlined />, icon_name: "MoneyRemoveOutlined" },
    { icon: <MoneySendOutlined />, icon_name: "MoneySendOutlined" },
    { icon: <MoneyTickOutlined />, icon_name: "MoneyTickOutlined" },
    { icon: <MoneyTimeOutlined />, icon_name: "MoneyTimeOutlined" },
    { icon: <MoneysOutlined />, icon_name: "MoneysOutlined" },
    { icon: <MoneyOutlined />, icon_name: "MoneyOutlined" },
    {
      icon: <PercentageCircleOutlined />,
      icon_name: "PercentageCircleOutlined",
    },
    {
      icon: <PercentageSquareOutlined />,
      icon_name: "PercentageSquareOutlined",
    },
    { icon: <Receipt1Outlined />, icon_name: "Receipt1Outlined" },
    { icon: <Receipt21Outlined />, icon_name: "Receipt21Outlined" },
    { icon: <Receipt2Outlined />, icon_name: "Receipt2Outlined" },
    { icon: <ReceiptAddOutlined />, icon_name: "ReceiptAddOutlined" },
    {
      icon: <ReceiptDiscountOutlined />,
      icon_name: "ReceiptDiscountOutlined",
    },
    {
      icon: <ReceiptDisscountOutlined />,
      icon_name: "ReceiptDisscountOutlined",
    },
    { icon: <ReceiptEditOutlined />, icon_name: "ReceiptEditOutlined" },
    { icon: <ReceiptItemOutlined />, icon_name: "ReceiptItemOutlined" },
    {
      icon: <ReceiptMinusOutlined />,
      icon_name: "ReceiptMinusOutlined",
    },
    {
      icon: <ReceiptSearchOutlined />,
      icon_name: "ReceiptSearchOutlined",
    },
    { icon: <ReceiptTextOutlined />, icon_name: "ReceiptTextOutlined" },
    { icon: <ReceiptOutlined />, icon_name: "ReceiptOutlined" },
    {
      icon: <SecurityCardOutlined />,
      icon_name: "SecurityCardOutlined",
    },
    { icon: <Strongbox2Outlined />, icon_name: "Strongbox2Outlined" },
    { icon: <StrongboxOutlined />, icon_name: "StrongboxOutlined" },
    { icon: <Tag2Outlined />, icon_name: "Tag2Outlined" },
    { icon: <TagOutlined />, icon_name: "TagOutlined" },
    { icon: <Ticket2Outlined />, icon_name: "Ticket2Outlined" },
    {
      icon: <TicketDiscountOutlined />,
      icon_name: "TicketDiscountOutlined",
    },
    {
      icon: <TicketExpiredOutlined />,
      icon_name: "TicketExpiredOutlined",
    },
    { icon: <TicketStarOutlined />, icon_name: "TicketStarOutlined" },
    { icon: <TicketOutlined />, icon_name: "TicketOutlined" },
    {
      icon: <TransactionMinusOutlined />,
      icon_name: "TransactionMinusOutlined",
    },
    { icon: <Wallet1Outlined />, icon_name: "Wallet1Outlined" },
    { icon: <Wallet2Outlined />, icon_name: "Wallet2Outlined" },
    { icon: <Wallet3Outlined />, icon_name: "Wallet3Outlined" },
    { icon: <WalletAdd1Outlined />, icon_name: "WalletAdd1Outlined" },
    { icon: <WalletAddOutlined />, icon_name: "WalletAddOutlined" },
    { icon: <WalletCheckOutlined />, icon_name: "WalletCheckOutlined" },
    { icon: <WalletMinusOutlined />, icon_name: "WalletMinusOutlined" },
    { icon: <WalletMoneyOutlined />, icon_name: "WalletMoneyOutlined" },
    {
      icon: <WalletRemoveOutlined />,
      icon_name: "WalletRemoveOutlined",
    },
    {
      icon: <WalletSearchOutlined />,
      icon_name: "WalletSearchOutlined",
    },
    { icon: <WalletOutlined />, icon_name: "WalletOutlined" },
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
            <h2 className="icon-heading">Money</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {money_bold.map((i) => {
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
              {money_outlined.map((i) => {
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
