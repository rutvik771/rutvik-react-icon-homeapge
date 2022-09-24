import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    AaveaaveBold
    ,AndroidBold
    ,AnkrankrBold
    ,AppleBold
    ,AugurrepBold
    ,AutonionioxBold
    ,AvalancheavaxBold
    ,BeBold
    ,BinancecoinbnbBold
    ,BinanceusdbusdBold
    ,BitcoinbtcBold
    ,BloggerBold
    ,BootsrapBold
    ,CardanoadaBold
    ,CeloceloBold
    ,CelsiuscelBold
    ,ChainlinklinkBold
    ,CiviccvcBold
    ,DaidaiBold
    ,DashdashBold
    ,DecreddcrBold
    ,DentdentBold
    ,DribbbleBold
    ,DropboxBold
    ,EducareektBold
    ,EmercoinemcBold
    ,EnjincoinenjBold
    ,EoseosBold
    ,EthereumclassicetcBold
    ,EthereumethBold
    ,FacebookBold
    ,Figma1Bold
    ,FigmaBold
    ,FramerBold
    ,FtxtokenfttBold
    ,Google1Bold
    ,GooglePlayBold
    ,GoogleBold
    ,HarmonyoneBold
    ,HederahashgraphhbarBold
    ,HexhexBold
    ,Html3Bold
    ,Html5Bold
    ,HuobitokenhtBold
    ,Icon1Bold
    ,IconicxBold
    ,IconBold
    ,IllustratorBold
    ,IostiostBold
    ,JavaScriptBold
    ,JsBold
    ,KybernetworkkncBold
    ,LitecoinltcBold
    ,MakermkrBold
    ,MessengerBold
    ,MoneroxmrBold
    ,NebulasnasBold
    ,NemxemBold
    ,NexonexoBold
    ,OceanprotocoloceanBold
    ,OkbokbBold
    ,OntologyontBold
    ,PaypalBold
    ,PhotoshopBold
    ,PolkadotdotBold
    ,PolygonmaticBold
    ,PolyswarmnctBold
    ,PythonBold
    ,QuantqntBold
    ,SiacoinscBold
    ,SlackBold
    ,SnapchatBold
    ,SolanasolBold
    ,SpotifyBold
    ,StacksstxBold
    ,StellarxlmBold
    ,TenxpayBold
    ,TetherusdtBold
    ,ThegraphgrtBold
    ,ThetathetaBold
    ,ThorchainruneBold
    ,TrelloBold
    ,TriangleBold
    ,TrontrontrxBold
    ,TwitchBold
    ,Ui8Bold
    ,UsdcoinusdcBold
    ,VelasvlxBold
    ,VibevibeBold
    ,VuesaxBold
    ,Wanchainwan2Bold
    ,WanchainwanBold
    ,WhatsappBold
    ,WindowsBold
    ,WingwingBold
    ,XdBold
    ,XiaomiBold
    ,XrpxrpBold
    ,YoutubeBold
    ,ZelzelBold
    ,ZoomBold
    ,AaveaaveOutlined
    ,AndroidOutlined
    ,AnkrankrOutlined
    ,AppleOutlined
    ,AugurrepOutlined
    ,AutonionioxOutlined
    ,AvalancheavaxOutlined
    ,BeOutlined
    ,BinancecoinbnbOutlined
    ,BinanceusdbusdOutlined
    ,BitcoinbtcOutlined
    ,BloggerOutlined
    ,BootstrapOutlined
    ,CardanoadaOutlined
    ,CeloceloOutlined
    ,CelsiuscelOutlined
    ,ChainlinklinkOutlined
    ,CiviccvcOutlined
    ,DaidaiOutlined
    ,DashdashOutlined
    ,DecreddcrOutlined
    ,DentdentOutlined
    ,DribbbleOutlined
    ,DropboxOutlined
    ,EducareektOutlined
    ,EmercoinemcOutlined
    ,EnjincoinenjOutlined
    ,EoseosOutlined
    ,EthereumclassicetcOutlined
    ,EthereumethOutlined
    ,FacebookOutlined
    ,Figma1Outlined
    ,FigmaOutlined
    ,FramerOutlined
    ,FtxtokenfttOutlined
    ,GoogleDriveOutlined
    ,GooglePalyOutlined
    ,GoogleOutlined
    ,HarmonyoneOutlined
    ,HederahashgraphhbarOutlined
    ,HexHexOutlined
    ,Html3Outlined
    ,Html5Outlined
    ,HuobitokenhtOutlined
    ,Icon1Outlined
    ,IconicxOutlined
    ,IconOutlined
    ,IllustratorOutlined
    ,IostiostOutlined
    ,JavaScriptOutlined
    ,JsOutlined
    ,KyberNetworkKncOutlined
    ,LitecoinltcOutlined
    ,MakermkrOutlined
    ,MessengerOutlined
    ,MoneroxmrOutlined
    ,NebulasnasOutlined
    ,NemxemOutlined
    ,NexonexoOutlined
    ,OceanProtocolOceanOutlined
    ,OkbokbOutlined
    ,OntologyontOutlined
    ,PaypalOutlined
    ,PhotoshopOutlined
    ,PolkadotdotOutlined
    ,PolygonmaticOutlined
    ,PolyswarmnctOutlined
    ,PythonOutlined
    ,QuantqntOutlined
    ,SiacoinscOutlined
    ,SlackOutlined
    ,SnapchatOutlined
    ,SolanasolOutlined
    ,SpotifyOutlined
    ,StacksstxOutlined
    ,StellarxlmOutlined
    ,TenxpayOutlined
    ,TetherusdtOutlined
    ,TheGraphGrtOutlined
    ,ThetathetaOutlined
    ,ThorchainruneOutlined
    ,TrelloOutlined
    ,TriangleOutlined
    ,TrontrontrxOutlined
    ,TwitchOutlined
    ,Ui8Outlined
    ,UsdCoinUsdcOutlined
    ,VelasVlxOutlined
    ,VibeVibeOutlined
    ,VuesaxOutlined
    ,WanchainWan1Outlined
    ,WanchainWanOutlined
    ,WhatsappOutlined
    ,WindowsOutlined
    ,WingWingOutlined
    ,XdOutlined
    ,XiaomiOutlined
    ,XrpXrpOutlined
    ,YoutubeOutlined
    ,ZelZelOutlined
    ,ZoomOutlined
    
    
} from "rutvik-react-icon";

export const Social_media = () => {
  const [copied, setcopied] = useState(false);

  const social_bold =  [
    { icon: <AaveaaveBold/>, icon_name: 'AaveaaveBold' },
    { icon: <AndroidBold/>, icon_name: 'AndroidBold' },
    { icon: <AnkrankrBold/>, icon_name: 'AnkrankrBold' },
    { icon: <AppleBold/>, icon_name: 'AppleBold' },
    { icon: <AugurrepBold/>, icon_name: 'AugurrepBold' },
    { icon: <AutonionioxBold/>, icon_name: 'AutonionioxBold' },
    { icon: <AvalancheavaxBold/>, icon_name: 'AvalancheavaxBold' },
    { icon: <BeBold/>, icon_name: 'BeBold' },
    { icon: <BinancecoinbnbBold/>, icon_name: 'BinancecoinbnbBold' },
    { icon: <BinanceusdbusdBold/>, icon_name: 'BinanceusdbusdBold' },
    { icon: <BitcoinbtcBold/>, icon_name: 'BitcoinbtcBold' },
    { icon: <BloggerBold/>, icon_name: 'BloggerBold' },
    { icon: <BootsrapBold/>, icon_name: 'BootsrapBold' },
    { icon: <CardanoadaBold/>, icon_name: 'CardanoadaBold' },
    { icon: <CeloceloBold/>, icon_name: 'CeloceloBold' },
    { icon: <CelsiuscelBold/>, icon_name: 'CelsiuscelBold' },
    { icon: <ChainlinklinkBold/>, icon_name: 'ChainlinklinkBold' },
    { icon: <CiviccvcBold/>, icon_name: 'CiviccvcBold' },
    { icon: <DaidaiBold/>, icon_name: 'DaidaiBold' },
    { icon: <DashdashBold/>, icon_name: 'DashdashBold' },
    { icon: <DecreddcrBold/>, icon_name: 'DecreddcrBold' },
    { icon: <DentdentBold/>, icon_name: 'DentdentBold' },
    { icon: <DribbbleBold/>, icon_name: 'DribbbleBold' },
    { icon: <DropboxBold/>, icon_name: 'DropboxBold' },
    { icon: <EducareektBold/>, icon_name: 'EducareektBold' },
    { icon: <EmercoinemcBold/>, icon_name: 'EmercoinemcBold' },
    { icon: <EnjincoinenjBold/>, icon_name: 'EnjincoinenjBold' },
    { icon: <EoseosBold/>, icon_name: 'EoseosBold' },
    {
      icon: <EthereumclassicetcBold/>,
      icon_name: 'EthereumclassicetcBold'
    },
    { icon: <EthereumethBold/>, icon_name: 'EthereumethBold' },
    { icon: <FacebookBold/>, icon_name: 'FacebookBold' },
    { icon: <Figma1Bold/>, icon_name: 'Figma1Bold' },
    { icon: <FigmaBold/>, icon_name: 'FigmaBold' },
    { icon: <FramerBold/>, icon_name: 'FramerBold' },
    { icon: <FtxtokenfttBold/>, icon_name: 'FtxtokenfttBold' },
    { icon: <Google1Bold/>, icon_name: 'Google1Bold' },
    { icon: <GooglePlayBold/>, icon_name: 'GooglePlayBold' },
    { icon: <GoogleBold/>, icon_name: 'GoogleBold' },
    { icon: <HarmonyoneBold/>, icon_name: 'HarmonyoneBold' },
    {
      icon: <HederahashgraphhbarBold/>,
      icon_name: 'HederahashgraphhbarBold'
    },
    { icon: <HexhexBold/>, icon_name: 'HexhexBold' },
    { icon: <Html3Bold/>, icon_name: 'Html3Bold' },
    { icon: <Html5Bold/>, icon_name: 'Html5Bold' },
    { icon: <HuobitokenhtBold/>, icon_name: 'HuobitokenhtBold' },
    { icon: <Icon1Bold/>, icon_name: 'Icon1Bold' },
    { icon: <IconicxBold/>, icon_name: 'IconicxBold' },
    { icon: <IconBold/>, icon_name: 'IconBold' },
    { icon: <IllustratorBold/>, icon_name: 'IllustratorBold' },
    { icon: <IostiostBold/>, icon_name: 'IostiostBold' },
    { icon: <JavaScriptBold/>, icon_name: 'JavaScriptBold' },
    { icon: <JsBold/>, icon_name: 'JsBold' },
    { icon: <KybernetworkkncBold/>, icon_name: 'KybernetworkkncBold' },
    { icon: <LitecoinltcBold/>, icon_name: 'LitecoinltcBold' },
    { icon: <MakermkrBold/>, icon_name: 'MakermkrBold' },
    { icon: <MessengerBold/>, icon_name: 'MessengerBold' },
    { icon: <MoneroxmrBold/>, icon_name: 'MoneroxmrBold' },
    { icon: <NebulasnasBold/>, icon_name: 'NebulasnasBold' },
    { icon: <NemxemBold/>, icon_name: 'NemxemBold' },
    { icon: <NexonexoBold/>, icon_name: 'NexonexoBold' },
    {
      icon: <OceanprotocoloceanBold/>,
      icon_name: 'OceanprotocoloceanBold'
    },
    { icon: <OkbokbBold/>, icon_name: 'OkbokbBold' },
    { icon: <OntologyontBold/>, icon_name: 'OntologyontBold' },
    { icon: <PaypalBold/>, icon_name: 'PaypalBold' },
    { icon: <PhotoshopBold/>, icon_name: 'PhotoshopBold' },
    { icon: <PolkadotdotBold/>, icon_name: 'PolkadotdotBold' },
    { icon: <PolygonmaticBold/>, icon_name: 'PolygonmaticBold' },
    { icon: <PolyswarmnctBold/>, icon_name: 'PolyswarmnctBold' },
    { icon: <PythonBold/>, icon_name: 'PythonBold' },
    { icon: <QuantqntBold/>, icon_name: 'QuantqntBold' },
    { icon: <SiacoinscBold/>, icon_name: 'SiacoinscBold' },
    { icon: <SlackBold/>, icon_name: 'SlackBold' },
    { icon: <SnapchatBold/>, icon_name: 'SnapchatBold' },
    { icon: <SolanasolBold/>, icon_name: 'SolanasolBold' },
    { icon: <SpotifyBold/>, icon_name: 'SpotifyBold' },
    { icon: <StacksstxBold/>, icon_name: 'StacksstxBold' },
    { icon: <StellarxlmBold/>, icon_name: 'StellarxlmBold' },
    { icon: <TenxpayBold/>, icon_name: 'TenxpayBold' },
    { icon: <TetherusdtBold/>, icon_name: 'TetherusdtBold' },
    { icon: <ThegraphgrtBold/>, icon_name: 'ThegraphgrtBold' },
    { icon: <ThetathetaBold/>, icon_name: 'ThetathetaBold' },
    { icon: <ThorchainruneBold/>, icon_name: 'ThorchainruneBold' },
    { icon: <TrelloBold/>, icon_name: 'TrelloBold' },
    { icon: <TriangleBold/>, icon_name: 'TriangleBold' },
    { icon: <TrontrontrxBold/>, icon_name: 'TrontrontrxBold' },
    { icon: <TwitchBold/>, icon_name: 'TwitchBold' },
    { icon: <Ui8Bold/>, icon_name: 'Ui8Bold' },
    { icon: <UsdcoinusdcBold/>, icon_name: 'UsdcoinusdcBold' },
    { icon: <VelasvlxBold/>, icon_name: 'VelasvlxBold' },
    { icon: <VibevibeBold/>, icon_name: 'VibevibeBold' },
    { icon: <VuesaxBold/>, icon_name: 'VuesaxBold' },
    // { icon: <Wanchainwan2Bold/>, icon_name: 'Wanchainwan2Bold' },
    // { icon: <WanchainwanBold/>, icon_name: 'WanchainwanBold' },
    { icon: <WhatsappBold/>, icon_name: 'WhatsappBold' },
    { icon: <WindowsBold/>, icon_name: 'WindowsBold' },
    { icon: <WingwingBold/>, icon_name: 'WingwingBold' },
    { icon: <XdBold/>, icon_name: 'XdBold' },
    { icon: <XiaomiBold/>, icon_name: 'XiaomiBold' },
    { icon: <XrpxrpBold/>, icon_name: 'XrpxrpBold' },
    { icon: <YoutubeBold/>, icon_name: 'YoutubeBold' },
    { icon: <ZelzelBold/>, icon_name: 'ZelzelBold' },
  
  ]
  const social_outlined =  [
  { icon: <AaveaaveOutlined/>, icon_name: 'AaveaaveOutlined' },
  { icon: <AndroidOutlined/>, icon_name: 'AndroidOutlined' },
  { icon: <AnkrankrOutlined/>, icon_name: 'AnkrankrOutlined' },
  { icon: <AppleOutlined/>, icon_name: 'AppleOutlined' },
  { icon: <AugurrepOutlined/>, icon_name: 'AugurrepOutlined' },
  { icon: <AutonionioxOutlined/>, icon_name: 'AutonionioxOutlined' },
  {
    icon: <AvalancheavaxOutlined/>,
    icon_name: 'AvalancheavaxOutlined'
  },
  { icon: <BeOutlined/>, icon_name: 'BeOutlined' },
  {
    icon: <BinancecoinbnbOutlined/>,
    icon_name: 'BinancecoinbnbOutlined'
  },
  {
    icon: <BinanceusdbusdOutlined/>,
    icon_name: 'BinanceusdbusdOutlined'
  },
  { icon: <BitcoinbtcOutlined/>, icon_name: 'BitcoinbtcOutlined' },
  { icon: <BloggerOutlined/>, icon_name: 'BloggerOutlined' },
  { icon: <BootstrapOutlined/>, icon_name: 'BootstrapOutlined' },
  { icon: <CardanoadaOutlined/>, icon_name: 'CardanoadaOutlined' },
  { icon: <CeloceloOutlined/>, icon_name: 'CeloceloOutlined' },
  { icon: <CelsiuscelOutlined/>, icon_name: 'CelsiuscelOutlined' },
  {
    icon: <ChainlinklinkOutlined/>,
    icon_name: 'ChainlinklinkOutlined'
  },
  { icon: <CiviccvcOutlined/>, icon_name: 'CiviccvcOutlined' },
  { icon: <DaidaiOutlined/>, icon_name: 'DaidaiOutlined' },
  { icon: <DashdashOutlined/>, icon_name: 'DashdashOutlined' },
  { icon: <DecreddcrOutlined/>, icon_name: 'DecreddcrOutlined' },
  { icon: <DentdentOutlined/>, icon_name: 'DentdentOutlined' },
  { icon: <DribbbleOutlined/>, icon_name: 'DribbbleOutlined' },
  { icon: <DropboxOutlined/>, icon_name: 'DropboxOutlined' },
  { icon: <EducareektOutlined/>, icon_name: 'EducareektOutlined' },
  { icon: <EmercoinemcOutlined/>, icon_name: 'EmercoinemcOutlined' },
  {
    icon: <EnjincoinenjOutlined/>,
    icon_name: 'EnjincoinenjOutlined'
  },
  { icon: <EoseosOutlined/>, icon_name: 'EoseosOutlined' },
  {
    icon: <EthereumclassicetcOutlined/>,
    icon_name: 'EthereumclassicetcOutlined'
  },
  { icon: <EthereumethOutlined/>, icon_name: 'EthereumethOutlined' },
  { icon: <FacebookOutlined/>, icon_name: 'FacebookOutlined' },
  { icon: <Figma1Outlined/>, icon_name: 'Figma1Outlined' },
  { icon: <FigmaOutlined/>, icon_name: 'FigmaOutlined' },
  { icon: <FramerOutlined/>, icon_name: 'FramerOutlined' },
  { icon: <FtxtokenfttOutlined/>, icon_name: 'FtxtokenfttOutlined' },
  { icon: <GoogleDriveOutlined/>, icon_name: 'GoogleDriveOutlined' },
  { icon: <GooglePalyOutlined/>, icon_name: 'GooglePalyOutlined' },
  { icon: <GoogleOutlined/>, icon_name: 'GoogleOutlined' },
  { icon: <HarmonyoneOutlined/>, icon_name: 'HarmonyoneOutlined' },
  {
    icon: <HederahashgraphhbarOutlined/>,
    icon_name: 'HederahashgraphhbarOutlined'
  },
//   { icon: <HexHexOutlined/>, icon_name: 'HexHexOutlined' },
  { icon: <Html3Outlined/>, icon_name: 'Html3Outlined' },
  { icon: <Html5Outlined/>, icon_name: 'Html5Outlined' },
  {
    icon: <HuobitokenhtOutlined/>,
    icon_name: 'HuobitokenhtOutlined'
  },
  { icon: <Icon1Outlined/>, icon_name: 'Icon1Outlined' },
  { icon: <IconicxOutlined/>, icon_name: 'IconicxOutlined' },
  { icon: <IconOutlined/>, icon_name: 'IconOutlined' },
  { icon: <IllustratorOutlined/>, icon_name: 'IllustratorOutlined' },
  { icon: <IostiostOutlined/>, icon_name: 'IostiostOutlined' },
  { icon: <JavaScriptOutlined/>, icon_name: 'JavaScriptOutlined' },
  { icon: <JsOutlined/>, icon_name: 'JsOutlined' },
  {
    icon: <KyberNetworkKncOutlined/>,
    icon_name: 'KyberNetworkKncOutlined'
  },
  { icon: <LitecoinltcOutlined/>, icon_name: 'LitecoinltcOutlined' },
  { icon: <MakermkrOutlined/>, icon_name: 'MakermkrOutlined' },
  { icon: <MessengerOutlined/>, icon_name: 'MessengerOutlined' },
  { icon: <MoneroxmrOutlined/>, icon_name: 'MoneroxmrOutlined' },
  { icon: <NebulasnasOutlined/>, icon_name: 'NebulasnasOutlined' },
  { icon: <NemxemOutlined/>, icon_name: 'NemxemOutlined' },
  { icon: <NexonexoOutlined/>, icon_name: 'NexonexoOutlined' },
  {
    icon: <OceanProtocolOceanOutlined/>,
    icon_name: 'OceanProtocolOceanOutlined'
  },
  { icon: <OkbokbOutlined/>, icon_name: 'OkbokbOutlined' },
  { icon: <OntologyontOutlined/>, icon_name: 'OntologyontOutlined' },
  { icon: <PaypalOutlined/>, icon_name: 'PaypalOutlined' },
  { icon: <PhotoshopOutlined/>, icon_name: 'PhotoshopOutlined' },
  { icon: <PolkadotdotOutlined/>, icon_name: 'PolkadotdotOutlined' },
  {
    icon: <PolygonmaticOutlined/>,
    icon_name: 'PolygonmaticOutlined'
  },
  {
    icon: <PolyswarmnctOutlined/>,
    icon_name: 'PolyswarmnctOutlined'
  },
  { icon: <PythonOutlined/>, icon_name: 'PythonOutlined' },
  { icon: <QuantqntOutlined/>, icon_name: 'QuantqntOutlined' },
  { icon: <SiacoinscOutlined/>, icon_name: 'SiacoinscOutlined' },
  { icon: <SlackOutlined/>, icon_name: 'SlackOutlined' },
  { icon: <SnapchatOutlined/>, icon_name: 'SnapchatOutlined' },
  { icon: <SolanasolOutlined/>, icon_name: 'SolanasolOutlined' },
  { icon: <SpotifyOutlined/>, icon_name: 'SpotifyOutlined' },
  { icon: <StacksstxOutlined/>, icon_name: 'StacksstxOutlined' },
  { icon: <StellarxlmOutlined/>, icon_name: 'StellarxlmOutlined' },
  { icon: <TenxpayOutlined/>, icon_name: 'TenxpayOutlined' },
  { icon: <TetherusdtOutlined/>, icon_name: 'TetherusdtOutlined' },
  { icon: <TheGraphGrtOutlined/>, icon_name: 'TheGraphGrtOutlined' },
  { icon: <ThetathetaOutlined/>, icon_name: 'ThetathetaOutlined' },
  {
    icon: <ThorchainruneOutlined/>,
    icon_name: 'ThorchainruneOutlined'
  },
  { icon: <TrelloOutlined/>, icon_name: 'TrelloOutlined' },
  { icon: <TriangleOutlined/>, icon_name: 'TriangleOutlined' },
  { icon: <TrontrontrxOutlined/>, icon_name: 'TrontrontrxOutlined' },
  { icon: <TwitchOutlined/>, icon_name: 'TwitchOutlined' },
  { icon: <Ui8Outlined/>, icon_name: 'Ui8Outlined' },
  { icon: <UsdCoinUsdcOutlined/>, icon_name: 'UsdCoinUsdcOutlined' },
  { icon: <VelasVlxOutlined/>, icon_name: 'VelasVlxOutlined' },
  { icon: <VibeVibeOutlined/>, icon_name: 'VibeVibeOutlined' },
  { icon: <VuesaxOutlined/>, icon_name: 'VuesaxOutlined' },
  {
    icon: <WanchainWan1Outlined/>,
    icon_name: 'WanchainWan1Outlined'
  },
//   { icon: <WanchainWanOutlined/>, icon_name: 'WanchainWanOutlined' },
  { icon: <WhatsappOutlined/>, icon_name: 'WhatsappOutlined' },
  { icon: <WindowsOutlined/>, icon_name: 'WindowsOutlined' },
  { icon: <WingWingOutlined/>, icon_name: 'WingWingOutlined' },
  { icon: <XdOutlined/>, icon_name: 'XdOutlined' },
  { icon: <XiaomiOutlined/>, icon_name: 'XiaomiOutlined' },
  { icon: <XrpXrpOutlined/>, icon_name: 'XrpXrpOutlined' },
  { icon: <YoutubeOutlined/>, icon_name: 'YoutubeOutlined' },
  { icon: <ZelZelOutlined/>, icon_name: 'ZelZelOutlined' },

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
            <h2 className="icon-heading">Social media</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {social_bold.map((i) => {
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
              {social_outlined.map((i) => {
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
