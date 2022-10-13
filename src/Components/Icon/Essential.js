import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    // 3dcubeBold
    AddCircleBold
   , AddSquareBold
   , AddBold
   , ArchiveBold
   , AutobrightnessBold
   , Battery2
   , BatteryChargingBold
   , BatteryDisableBold
   , BatteryEmpty1Bold
   , BatteryEmptyBold
   , BatteryFullBold
   , Box2Bold
   , BroomBold
   , BubbleBold
   , CakeBold
   , CdBold
   , ChartBold
   , ChromeBold
   , CloseCircleBold
   , CloseSquareBold
   , CoffeeBold
   , ComputingBold
   , Crown1Bold
   , CrownBold
   , CupBold
   , DangerBold
   , DiamondsBold
   , DiscoverBold
   , EmojiHappyBold
   , EmojiNormalBold
   , EmojiSadBold
   , FilterAddBold
   , FilterEditBold
   , FilterRemoveBold
   , FilterSearchBold
   , FilterSquareBold
   , FilterTickBold
   , FilterBold
   , Flag2Bold
   , FlagBold
   , FlashCircleBold
   , FlashSlashBold
   , FlashBold
   , Forbidden2Bold
   , ForbiddenBold
   , GhostBold
   , GlassBold
   , GrammerlyBold
   , HappyemojiBold
   , Home1Bold
   , Home2Bold
   , HomeWifiBold
   , HomeBold
   , InfoCircleBold
   , InformationBold
   , InstagramBold
   , JudgeBold
   , LampBold
   , LevelBold
   , MenuBold
   , MilkBold
   , MinusCirlceBold
   , MinusSquareBold
   , MinusBold
   , MirrorBold
   , MoreCircleBold
   , MoreSquareBold
   , MouseCircleBold
   , MouseSquareBold
   , MouseBold
   , PetBold
   , RankingBold
   , ReserveBold
   , SafeHomeBold
   , Send2Bold
   , SendBold
   , ShareBold
   , SignpostBold
   , SlashBold
   , SliderBold
   , SmartHomeBold
   , SortBold
   , SoundBold
   , SpeedometerBold
   , StatusBold
   , StickerBold
   , StoryBold
   , TagCrossBold
   , TagRightBold
   , TickCircleBold
   , TickSquareBold
   , TrashBold
   , TreeBold
   , TriangleBold
   , TrushSquareBold
   , VerifyBold
   , Warning2Bold
   , WeightBold
   , WifiSquareBold
   , WifiBold
//    , 3dcubeOutlined
   , AddCircleOutlined
   , AddSquareOutlined
   , AddOutlined
   , ArchiveOutlined
   , AutobrightnessOutlined
   , BatteryChargingOutlined
   , BatteryDisableOutlined
   , BatteryEmpty1Outlined
   , BatteryEmptyOutlined
   , BatteryFullOutlined
   , Box2Outlined
   , BroomOutlined
   , BubbleOutlined
   , CakeOutlined
   , CdOutlined
   , ChartOutlined
   , ChromeOutlined
   , CloseCircleOutlined
   , CloseSquareOutlined
   , CoffeeOutlined
   , ComputingOutlined
   , Crown1Outlined
   , CrownOutlined
   , CupOutlined
   , DangerOutlined
   , DiamondsOutlined
   , DiscoverOutlined
   , EmojiHappyOutlined
   , EmojiNormalOutlined
   , EmojiSadOutlined
   , FilterAddOutlined
   , FilterEditOutlined
   , FilterRemoveOutlined
   , FilterSearchOutlined
   , FilterSquareOutlined
   , FilterTickOutlined
   , FilterOutlined
   , Flag2Outlined
   , FlagOutlined
   , FlashCircleOutlined
   , FlashSlashOutlined
   , FlashOutlined
   , Forbidden2Outlined
   , ForbiddenOutlined
   , GhostOutlined
   , GlassOutlined
   , GrammerlyOutlined
   , HappyemojiOutlined
   , Home1Outlined
   , Home2Outlined
   , HomeWifiOutlined
   , HomeOutlined
   , InfoCircleOutlined
   , InformationOutlined
   , InstagramOutlined
   , JudgeOutlined
   , LampOutlined
   , LevelOutlined
   , MenuOutlined
   , MilkOutlined
   , MinusCirlceOutlined
   , MinusSquareOutlined
   , MinusOutlined
   , MirrorOutlined
   , MoreCircleOutlined
   , MoreSquareOutlined
   , MouseCircleOutlined
   , MouseSquareOutlined
   , MouseOutlined
   , PetOutlined
   , RankingOutlined
   , ReserveOutlined
   , SafeHomeOutlined
   , Send2Outlined
   , SendOutlined
   , ShareOutlined
   , SignpostOutlined
   , SlashOutlined
   , SliderOutlined
   , SmartHomeOutlined
   , SortOutlined
   , SoundOutlined
   , SpeedometerOutlined
   , StatusOutlined
   , StickerOutlined
   , StoryOutlined
   , TagCrossOutlined
   , TagRightOutlined
   , TickCircleOutlined
   , TickSquareOutlined
   , TrashOutlined
   , TreeOutlined
   , TriangleOutlined
   , TrushSquareOutlined
   , VerifyOutlined
   , Warning2Outlined
   , WeightOutlined
   , WifiSquareOutlined
   , WifiOutlined 
    
} from "react-icon-cx";

export const Essential = () => {
  const [copied, setcopied] = useState(false);

  const essential_bold =  [
    // { icon: <3dcubeBold/>, icon_name: '3dcubeBold' },
    { icon: <AddCircleBold/>, icon_name: 'AddCircleBold' },
    { icon: <AddSquareBold/>, icon_name: 'AddSquareBold' },
    { icon: <AddBold/>, icon_name: 'AddBold' },
    { icon: <ArchiveBold/>, icon_name: 'ArchiveBold' },
    { icon: <AutobrightnessBold/>, icon_name: 'AutobrightnessBold' },
    // { icon: <Battery2/>, icon_name: 'Battery2' },
    { icon: <BatteryChargingBold/>, icon_name: 'BatteryChargingBold' },
    { icon: <BatteryDisableBold/>, icon_name: 'BatteryDisableBold' },
    { icon: <BatteryEmpty1Bold/>, icon_name: 'BatteryEmpty1Bold' },
    { icon: <BatteryEmptyBold/>, icon_name: 'BatteryEmptyBold' },
    { icon: <BatteryFullBold/>, icon_name: 'BatteryFullBold' },
    { icon: <Box2Bold/>, icon_name: 'Box2Bold' },
    { icon: <BroomBold/>, icon_name: 'BroomBold' },
    { icon: <BubbleBold/>, icon_name: 'BubbleBold' },
    { icon: <CakeBold/>, icon_name: 'CakeBold' },
    { icon: <CdBold/>, icon_name: 'CdBold' },
    { icon: <ChartBold/>, icon_name: 'ChartBold' },
    { icon: <ChromeBold/>, icon_name: 'ChromeBold' },
    { icon: <CloseCircleBold/>, icon_name: 'CloseCircleBold' },
    { icon: <CloseSquareBold/>, icon_name: 'CloseSquareBold' },
    { icon: <CoffeeBold/>, icon_name: 'CoffeeBold' },
    { icon: <ComputingBold/>, icon_name: 'ComputingBold' },
    { icon: <Crown1Bold/>, icon_name: 'Crown1Bold' },
    { icon: <CrownBold/>, icon_name: 'CrownBold' },
    { icon: <CupBold/>, icon_name: 'CupBold' },
    { icon: <DangerBold/>, icon_name: 'DangerBold' },
    { icon: <DiamondsBold/>, icon_name: 'DiamondsBold' },
    { icon: <DiscoverBold/>, icon_name: 'DiscoverBold' },
    { icon: <EmojiHappyBold/>, icon_name: 'EmojiHappyBold' },
    { icon: <EmojiNormalBold/>, icon_name: 'EmojiNormalBold' },
    { icon: <EmojiSadBold/>, icon_name: 'EmojiSadBold' },
    { icon: <FilterAddBold/>, icon_name: 'FilterAddBold' },
    { icon: <FilterEditBold/>, icon_name: 'FilterEditBold' },
    { icon: <FilterRemoveBold/>, icon_name: 'FilterRemoveBold' },
    { icon: <FilterSearchBold/>, icon_name: 'FilterSearchBold' },
    { icon: <FilterSquareBold/>, icon_name: 'FilterSquareBold' },
    { icon: <FilterTickBold/>, icon_name: 'FilterTickBold' },
    { icon: <FilterBold/>, icon_name: 'FilterBold' },
    { icon: <Flag2Bold/>, icon_name: 'Flag2Bold' },
    { icon: <FlagBold/>, icon_name: 'FlagBold' },
    { icon: <FlashCircleBold/>, icon_name: 'FlashCircleBold' },
    { icon: <FlashSlashBold/>, icon_name: 'FlashSlashBold' },
    { icon: <FlashBold/>, icon_name: 'FlashBold' },
    { icon: <Forbidden2Bold/>, icon_name: 'Forbidden2Bold' },
    { icon: <ForbiddenBold/>, icon_name: 'ForbiddenBold' },
    { icon: <GhostBold/>, icon_name: 'GhostBold' },
    { icon: <GlassBold/>, icon_name: 'GlassBold' },
    { icon: <GrammerlyBold/>, icon_name: 'GrammerlyBold' },
    { icon: <HappyemojiBold/>, icon_name: 'HappyemojiBold' },
    { icon: <Home1Bold/>, icon_name: 'Home1Bold' },
    { icon: <Home2Bold/>, icon_name: 'Home2Bold' },
    { icon: <HomeWifiBold/>, icon_name: 'HomeWifiBold' },
    { icon: <HomeBold/>, icon_name: 'HomeBold' },
    { icon: <InfoCircleBold/>, icon_name: 'InfoCircleBold' },
    { icon: <InformationBold/>, icon_name: 'InformationBold' },
    { icon: <InstagramBold/>, icon_name: 'InstagramBold' },
    { icon: <JudgeBold/>, icon_name: 'JudgeBold' },
    { icon: <LampBold/>, icon_name: 'LampBold' },
    { icon: <LevelBold/>, icon_name: 'LevelBold' },
    { icon: <MenuBold/>, icon_name: 'MenuBold' },
    { icon: <MilkBold/>, icon_name: 'MilkBold' },
    { icon: <MinusCirlceBold/>, icon_name: 'MinusCirlceBold' },
    { icon: <MinusSquareBold/>, icon_name: 'MinusSquareBold' },
    { icon: <MinusBold/>, icon_name: 'MinusBold' },
    { icon: <MirrorBold/>, icon_name: 'MirrorBold' },
    { icon: <MoreCircleBold/>, icon_name: 'MoreCircleBold' },
    { icon: <MoreSquareBold/>, icon_name: 'MoreSquareBold' },
    { icon: <MouseCircleBold/>, icon_name: 'MouseCircleBold' },
    { icon: <MouseSquareBold/>, icon_name: 'MouseSquareBold' },
    { icon: <MouseBold/>, icon_name: 'MouseBold' },
    { icon: <PetBold/>, icon_name: 'PetBold' },
    { icon: <RankingBold/>, icon_name: 'RankingBold' },
    { icon: <ReserveBold/>, icon_name: 'ReserveBold' },
    { icon: <SafeHomeBold/>, icon_name: 'SafeHomeBold' },
    { icon: <Send2Bold/>, icon_name: 'Send2Bold' },
    { icon: <SendBold/>, icon_name: 'SendBold' },
    { icon: <ShareBold/>, icon_name: 'ShareBold' },
    { icon: <SignpostBold/>, icon_name: 'SignpostBold' },
    { icon: <SlashBold/>, icon_name: 'SlashBold' },
    { icon: <SliderBold/>, icon_name: 'SliderBold' },
    { icon: <SmartHomeBold/>, icon_name: 'SmartHomeBold' },
    { icon: <SortBold/>, icon_name: 'SortBold' },
    { icon: <SoundBold/>, icon_name: 'SoundBold' },
    { icon: <SpeedometerBold/>, icon_name: 'SpeedometerBold' },
    { icon: <StatusBold/>, icon_name: 'StatusBold' },
    { icon: <StickerBold/>, icon_name: 'StickerBold' },
    { icon: <StoryBold/>, icon_name: 'StoryBold' },
    { icon: <TagCrossBold/>, icon_name: 'TagCrossBold' },
    { icon: <TagRightBold/>, icon_name: 'TagRightBold' },
    { icon: <TickCircleBold/>, icon_name: 'TickCircleBold' },
    { icon: <TickSquareBold/>, icon_name: 'TickSquareBold' },
    { icon: <TrashBold/>, icon_name: 'TrashBold' },
    { icon: <TreeBold/>, icon_name: 'TreeBold' },
    { icon: <TriangleBold/>, icon_name: 'TriangleBold' },
    { icon: <TrushSquareBold/>, icon_name: 'TrushSquareBold' },
    { icon: <VerifyBold/>, icon_name: 'VerifyBold' },
    { icon: <Warning2Bold/>, icon_name: 'Warning2Bold' },
    { icon: <WeightBold/>, icon_name: 'WeightBold' },
    { icon: <WifiSquareBold/>, icon_name: 'WifiSquareBold' }
  ]

  const essential_outlined =  [
    // { icon: <3dcubeOutlined/>', icon_name: '3dcubeOutlined' },
    { icon: <AddCircleOutlined/>, icon_name: 'AddCircleOutlined' },
    { icon: <AddSquareOutlined/>, icon_name: 'AddSquareOutlined' },
    { icon: <AddOutlined/>, icon_name: 'AddOutlined' },
    { icon: <ArchiveOutlined/>, icon_name: 'ArchiveOutlined' },
    {
      icon: <AutobrightnessOutlined/>,
      icon_name: 'AutobrightnessOutlined'
    },
    {
      icon: <BatteryChargingOutlined/>,
      icon_name: 'BatteryChargingOutlined'
    },
    {
      icon: <BatteryDisableOutlined/>,
      icon_name: 'BatteryDisableOutlined'
    },
    {
      icon: <BatteryEmpty1Outlined/>,
      icon_name: 'BatteryEmpty1Outlined'
    },
    {
      icon: <BatteryEmptyOutlined/>,
      icon_name: 'BatteryEmptyOutlined'
    },
    { icon: <BatteryFullOutlined/>, icon_name: 'BatteryFullOutlined' },
    { icon: <Box2Outlined/>, icon_name: 'Box2Outlined' },
    { icon: <BroomOutlined/>, icon_name: 'BroomOutlined' },
    { icon: <BubbleOutlined/>, icon_name: 'BubbleOutlined' },
    { icon: <CakeOutlined/>, icon_name: 'CakeOutlined' },
    { icon: <CdOutlined/>, icon_name: 'CdOutlined' },
    { icon: <ChartOutlined/>, icon_name: 'ChartOutlined' },
    { icon: <ChromeOutlined/>, icon_name: 'ChromeOutlined' },
    { icon: <CloseCircleOutlined/>, icon_name: 'CloseCircleOutlined' },
    { icon: <CloseSquareOutlined/>, icon_name: 'CloseSquareOutlined' },
    { icon: <CoffeeOutlined/>, icon_name: 'CoffeeOutlined' },
    { icon: <ComputingOutlined/>, icon_name: 'ComputingOutlined' },
    { icon: <Crown1Outlined/>, icon_name: 'Crown1Outlined' },
    { icon: <CrownOutlined/>, icon_name: 'CrownOutlined' },
    { icon: <CupOutlined/>, icon_name: 'CupOutlined' },
    { icon: <DangerOutlined/>, icon_name: 'DangerOutlined' },
    { icon: <DiamondsOutlined/>, icon_name: 'DiamondsOutlined' },
    { icon: <DiscoverOutlined/>, icon_name: 'DiscoverOutlined' },
    { icon: <EmojiHappyOutlined/>, icon_name: 'EmojiHappyOutlined' },
    { icon: <EmojiNormalOutlined/>, icon_name: 'EmojiNormalOutlined' },
    { icon: <EmojiSadOutlined/>, icon_name: 'EmojiSadOutlined' },
    { icon: <FilterAddOutlined/>, icon_name: 'FilterAddOutlined' },
    { icon: <FilterEditOutlined/>, icon_name: 'FilterEditOutlined' },
    {
      icon: <FilterRemoveOutlined/>,
      icon_name: 'FilterRemoveOutlined'
    },
    {
      icon: <FilterSearchOutlined/>,
      icon_name: 'FilterSearchOutlined'
    },
    {
      icon: <FilterSquareOutlined/>,
      icon_name: 'FilterSquareOutlined'
    },
    { icon: <FilterTickOutlined/>, icon_name: 'FilterTickOutlined' },
    { icon: <FilterOutlined/>, icon_name: 'FilterOutlined' },
    { icon: <Flag2Outlined/>, icon_name: 'Flag2Outlined' },
    { icon: <FlagOutlined/>, icon_name: 'FlagOutlined' },
    { icon: <FlashCircleOutlined/>, icon_name: 'FlashCircleOutlined' },
    { icon: <FlashSlashOutlined/>, icon_name: 'FlashSlashOutlined' },
    { icon: <FlashOutlined/>, icon_name: 'FlashOutlined' },
    { icon: <Forbidden2Outlined/>, icon_name: 'Forbidden2Outlined' },
    { icon: <ForbiddenOutlined/>, icon_name: 'ForbiddenOutlined' },
    { icon: <GhostOutlined/>, icon_name: 'GhostOutlined' },
    { icon: <GlassOutlined/>, icon_name: 'GlassOutlined' },
    { icon: <GrammerlyOutlined/>, icon_name: 'GrammerlyOutlined' },
    { icon: <HappyemojiOutlined/>, icon_name: 'HappyemojiOutlined' },
    { icon: <Home1Outlined/>, icon_name: 'Home1Outlined' },
    { icon: <Home2Outlined/>, icon_name: 'Home2Outlined' },
    { icon: <HomeWifiOutlined/>, icon_name: 'HomeWifiOutlined' },
    { icon: <HomeOutlined/>, icon_name: 'HomeOutlined' },
    { icon: <InfoCircleOutlined/>, icon_name: 'InfoCircleOutlined' },
    { icon: <InformationOutlined/>, icon_name: 'InformationOutlined' },
    { icon: <InstagramOutlined/>, icon_name: 'InstagramOutlined' },
    { icon: <JudgeOutlined/>, icon_name: 'JudgeOutlined' },
    { icon: <LampOutlined/>, icon_name: 'LampOutlined' },
    { icon: <LevelOutlined/>, icon_name: 'LevelOutlined' },
    { icon: <MenuOutlined/>, icon_name: 'MenuOutlined' },
    { icon: <MilkOutlined/>, icon_name: 'MilkOutlined' },
    { icon: <MinusCirlceOutlined/>, icon_name: 'MinusCirlceOutlined' },
    { icon: <MinusSquareOutlined/>, icon_name: 'MinusSquareOutlined' },
    { icon: <MinusOutlined/>, icon_name: 'MinusOutlined' },
    { icon: <MirrorOutlined/>, icon_name: 'MirrorOutlined' },
    { icon: <MoreCircleOutlined/>, icon_name: 'MoreCircleOutlined' },
    { icon: <MoreSquareOutlined/>, icon_name: 'MoreSquareOutlined' },
    { icon: <MouseCircleOutlined/>, icon_name: 'MouseCircleOutlined' },
    { icon: <MouseSquareOutlined/>, icon_name: 'MouseSquareOutlined' },
    { icon: <MouseOutlined/>, icon_name: 'MouseOutlined' },
    { icon: <PetOutlined/>, icon_name: 'PetOutlined' },
    { icon: <RankingOutlined/>, icon_name: 'RankingOutlined' },
    { icon: <ReserveOutlined/>, icon_name: 'ReserveOutlined' },
    { icon: <SafeHomeOutlined/>, icon_name: 'SafeHomeOutlined' },
    { icon: <Send2Outlined/>, icon_name: 'Send2Outlined' },
    { icon: <SendOutlined/>, icon_name: 'SendOutlined' },
    { icon: <ShareOutlined/>, icon_name: 'ShareOutlined' },
    { icon: <SignpostOutlined/>, icon_name: 'SignpostOutlined' },
    { icon: <SlashOutlined/>, icon_name: 'SlashOutlined' },
    { icon: <SliderOutlined/>, icon_name: 'SliderOutlined' },
    { icon: <SmartHomeOutlined/>, icon_name: 'SmartHomeOutlined' },
    { icon: <SortOutlined/>, icon_name: 'SortOutlined' },
    { icon: <SoundOutlined/>, icon_name: 'SoundOutlined' },
    { icon: <SpeedometerOutlined/>, icon_name: 'SpeedometerOutlined' },
    { icon: <StatusOutlined/>, icon_name: 'StatusOutlined' },
    { icon: <StickerOutlined/>, icon_name: 'StickerOutlined' },
    { icon: <StoryOutlined/>, icon_name: 'StoryOutlined' },
    { icon: <TagCrossOutlined/>, icon_name: 'TagCrossOutlined' },
    { icon: <TagRightOutlined/>, icon_name: 'TagRightOutlined' },
    { icon: <TickCircleOutlined/>, icon_name: 'TickCircleOutlined' },
    { icon: <TickSquareOutlined/>, icon_name: 'TickSquareOutlined' },
    { icon: <TrashOutlined/>, icon_name: 'TrashOutlined' },
    { icon: <TreeOutlined/>, icon_name: 'TreeOutlined' },
    { icon: <TriangleOutlined/>, icon_name: 'TriangleOutlined' },
    { icon: <TrushSquareOutlined/>, icon_name: 'TrushSquareOutlined' },
    { icon: <VerifyOutlined/>, icon_name: 'VerifyOutlined' },
    { icon: <Warning2Outlined/>, icon_name: 'Warning2Outlined' },
    { icon: <WeightOutlined/>, icon_name: 'WeightOutlined' },
    { icon: <WifiSquareOutlined/>, icon_name: 'WifiSquareOutlined' },
    { icon: <WifiOutlined/>, icon_name: 'WifiOutlined' }
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
            <h2 className="icon-heading">Essential</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {essential_bold.map((i) => {
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
              {essential_outlined.map((i) => {
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
