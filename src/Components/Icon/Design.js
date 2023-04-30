import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    AdditemBold
,BackwardItemBold
,BezierBold
,Blend2Bold
,BlendBold
,BlurBold
,Brush1Bold
,Brush2Bold
,Brush3Bold
,Brush4Bold
,BrushBold
,BucketCircleBold
,BucketSquareBold
,BucketBold
,ColorSwatchBold
,ColorfilterBold
,ColorsSquareBold
,ComponentBold
,CopySuccessBold
,CopyBold
,DesigntoolsBold
,EraserBold
,FlashCircleBold
,ForwardItemBold
,GlassBold
,LayerBold
,LifebuoyBold
,MagicpenBold
,MainComponentBold
,Mask1Bold
,Mask2Bold
,MaskBold
,OmegaCircleBold
,OmegaSquareBold
,PaintbucketBold
,Path2Bold
,PathSquareBold
,PathBold
,PenAddBold
,PenCloseBold
,PenRemoveBold
,PenTool2Bold
,PenToolBold
,RecoveryConvertBold
,RulerpenBold
,RulerBold
,ScissorBold
,Shapes1Bold
,ShapesBold
,SizeBold
,AdditemOutlined
,BackwardItemOutlined
,BezierOutlined
,Blend2Outlined
,BlendOutlined
,BlurOutlined
,Brush1Outlined
,Brush2Outlined
,Brush3Outlined
,Brush4Outlined
,BrushOutlined
,BucketCircleOutlined
,BucketSquareOutlined
,BucketOutlined
,ColorSwatchOutlined
,ColorfilterOutlined
,ColorsSquareOutlined
,ComponentOutlined
,CopySuccessOutlined
,CopyOutlined
,DesigntoolsOutlined
,EraserOutlined
,FlashCircleOutlined
,ForwardItemOutlined
,GlassOutlined
,LayerOutlined
,LifebuoyOutlined
,MagicpenOutlined
,MainComponentOutlined
,Mask1Outlined
,Mask2Outlined
,MaskOutlined
,OmegaCircleOutlined
,OmegaSquareOutlined
,PaintbucketOutlined
,Path2Outlined
,PathSquareOutlined
,PathOutlined
,PenAddOutlined
,PenCloseOutlined
,PenRemoveOutlined
,PenTool2Outlined
,PenToolOutlined
,RecoveryConvertOutlined
,RulerOutlined
,ScissorOutlined
,Shapes1Outlined
,ShapesOutlined
,SizeOutlined


} from "react-icon-cx";

export const Design = () => {
  const [copied, setcopied] = useState(false);

  const design_tool_bold =  [
    { icon: <AdditemBold />, icon_name: 'AdditemBold' },
    { icon: <BackwardItemBold/>, icon_name: 'BackwardItemBold' },
    { icon: <BezierBold/>, icon_name: 'BezierBold' },
    { icon: <Blend2Bold/>, icon_name: 'Blend2Bold' },
    { icon: <BlendBold/>, icon_name: 'BlendBold' },
    { icon: <BlurBold/>, icon_name: 'BlurBold' },
    { icon: <Brush1Bold/>, icon_name: 'Brush1Bold' },
    { icon: <Brush2Bold/>, icon_name: 'Brush2Bold' },
    { icon: <Brush3Bold/>, icon_name: 'Brush3Bold' },
    { icon: <Brush4Bold/>, icon_name: 'Brush4Bold' },
    { icon: <BrushBold/>, icon_name: 'BrushBold' },
    { icon: <BucketCircleBold/>, icon_name: 'BucketCircleBold' },
    { icon: <BucketSquareBold/>, icon_name: 'BucketSquareBold' },
    { icon: <BucketBold/>, icon_name: 'BucketBold' },
    { icon: <ColorSwatchBold/>, icon_name: 'ColorSwatchBold' },
    { icon: <ColorfilterBold/>, icon_name: 'ColorfilterBold' },
    { icon: <ColorsSquareBold/>, icon_name: 'ColorsSquareBold' },
    { icon: <ComponentBold/>, icon_name: 'ComponentBold' },
    { icon: <CopySuccessBold/>, icon_name: 'CopySuccessBold' },
    { icon: <CopyBold/>, icon_name: 'CopyBold' },
    { icon: <DesigntoolsBold/>, icon_name: 'DesigntoolsBold' },
    { icon: <EraserBold/>, icon_name: 'EraserBold' },
    { icon: <FlashCircleBold/>, icon_name: 'FlashCircleBold' },
    { icon: <ForwardItemBold/>, icon_name: 'ForwardItemBold' },
    { icon: <GlassBold/>, icon_name: 'GlassBold' },
    { icon: <LayerBold/>, icon_name: 'LayerBold' },
    { icon: <LifebuoyBold/>, icon_name: 'LifebuoyBold' },
    { icon: <MagicpenBold/>, icon_name: 'MagicpenBold' },
    { icon: <MainComponentBold/>, icon_name: 'MainComponentBold' },
    { icon: <Mask1Bold/>, icon_name: 'Mask1Bold' },
    { icon: <Mask2Bold/>, icon_name: 'Mask2Bold' },
    { icon: <MaskBold/>, icon_name: 'MaskBold' },
    { icon: <OmegaCircleBold/>, icon_name: 'OmegaCircleBold' },
    { icon: <OmegaSquareBold/>, icon_name: 'OmegaSquareBold' },
    { icon: <Path2Bold/>, icon_name: 'Path2Bold' },
    { icon: <PathSquareBold/>, icon_name: 'PathSquareBold' },
    { icon: <PathBold/>, icon_name: 'PathBold' },
    { icon: <PenAddBold/>, icon_name: 'PenAddBold' },
    { icon: <PenCloseBold/>, icon_name: 'PenCloseBold' },
    { icon: <PenRemoveBold/>, icon_name: 'PenRemoveBold' },
    { icon: <PenTool2Bold/>, icon_name: 'PenTool2Bold' },
    { icon: <PenToolBold/>, icon_name: 'PenToolBold' },
    { icon: <RecoveryConvertBold/>, icon_name: 'RecoveryConvertBold' },
    { icon: <RulerBold/>, icon_name: 'RulerBold' },
    { icon: <ScissorBold/>, icon_name: 'ScissorBold' },
    { icon: <Shapes1Bold/>, icon_name: 'Shapes1Bold' },
    { icon: <ShapesBold/>, icon_name: 'ShapesBold' },
    { icon: <SizeBold/>, icon_name: 'SizeBold' }
  ]
  const design_tool_outlined =  [
    { icon: <AdditemOutlined/>, icon_name: 'AdditemOutlined' },
    {
      icon: <BackwardItemOutlined/>,
      icon_name: 'BackwardItemOutlined'
    },
    { icon: <BezierOutlined/>, icon_name: 'BezierOutlined' },
    { icon: <Blend2Outlined/>, icon_name: 'Blend2Outlined' },
    { icon: <BlendOutlined/>, icon_name: 'BlendOutlined' },
    { icon: <BlurOutlined/>, icon_name: 'BlurOutlined' },
    { icon: <Brush1Outlined/>, icon_name: 'Brush1Outlined' },
    { icon: <Brush2Outlined/>, icon_name: 'Brush2Outlined' },
    { icon: <Brush3Outlined/>, icon_name: 'Brush3Outlined' },
    { icon: <Brush4Outlined/>, icon_name: 'Brush4Outlined' },
    { icon: <BrushOutlined/>, icon_name: 'BrushOutlined' },
    {
      icon: <BucketCircleOutlined/>,
      icon_name: 'BucketCircleOutlined'
    },
    {
      icon: <BucketSquareOutlined/>,
      icon_name: 'BucketSquareOutlined'
    },
    { icon: <BucketOutlined/>, icon_name: 'BucketOutlined' },
    { icon: <ColorSwatchOutlined/>, icon_name: 'ColorSwatchOutlined' },
    { icon: <ColorfilterOutlined/>, icon_name: 'ColorfilterOutlined' },
    {
      icon: <ColorsSquareOutlined/>,
      icon_name: 'ColorsSquareOutlined'
    },
    { icon: <ComponentOutlined/>, icon_name: 'ComponentOutlined' },
    { icon: <CopySuccessOutlined/>, icon_name: 'CopySuccessOutlined' },
    { icon: <CopyOutlined/>, icon_name: 'CopyOutlined' },
    { icon: <DesigntoolsOutlined/>, icon_name: 'DesigntoolsOutlined' },
    { icon: <EraserOutlined/>, icon_name: 'EraserOutlined' },
    { icon: <FlashCircleOutlined/>, icon_name: 'FlashCircleOutlined' },
    { icon: <ForwardItemOutlined/>, icon_name: 'ForwardItemOutlined' },
    { icon: <GlassOutlined/>, icon_name: 'GlassOutlined' },
    { icon: <LayerOutlined/>, icon_name: 'LayerOutlined' },
    { icon: <LifebuoyOutlined/>, icon_name: 'LifebuoyOutlined' },
    { icon: <MagicpenOutlined/>, icon_name: 'MagicpenOutlined' },
    {
      icon: <MainComponentOutlined/>,
      icon_name: 'MainComponentOutlined'
    },
    { icon: <Mask1Outlined/>, icon_name: 'Mask1Outlined' },
    { icon: <Mask2Outlined/>, icon_name: 'Mask2Outlined' },
    { icon: <MaskOutlined/>, icon_name: 'MaskOutlined' },
    { icon: <OmegaCircleOutlined/>, icon_name: 'OmegaCircleOutlined' },
    { icon: <OmegaSquareOutlined/>, icon_name: 'OmegaSquareOutlined' },
    { icon: <PaintbucketOutlined/>, icon_name: 'PaintbucketOutlined' },
    { icon: <Path2Outlined/>, icon_name: 'Path2Outlined' },
    { icon: <PathSquareOutlined/>, icon_name: 'PathSquareOutlined' },
    { icon: <PathOutlined/>, icon_name: 'PathOutlined' },
    { icon: <PenAddOutlined/>, icon_name: 'PenAddOutlined' },
    { icon: <PenCloseOutlined/>, icon_name: 'PenCloseOutlined' },
    { icon: <PenRemoveOutlined/>, icon_name: 'PenRemoveOutlined' },
    { icon: <PenTool2Outlined/>, icon_name: 'PenTool2Outlined' },
    { icon: <PenToolOutlined/>, icon_name: 'PenToolOutlined' },
    {
      icon: <RecoveryConvertOutlined/>,
      icon_name: 'RecoveryConvertOutlined'
    },
    { icon: <RulerOutlined/>, icon_name: 'RulerOutlined' },
    { icon: <ScissorOutlined/>, icon_name: 'ScissorOutlined' },
    { icon: <Shapes1Outlined/>, icon_name: 'Shapes1Outlined' },
    { icon: <ShapesOutlined/>, icon_name: 'ShapesOutlined' },
    { icon: <SizeOutlined/>, icon_name: 'SizeOutlined' }
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
            <h2 className="icon-heading">Design tool</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {design_tool_bold.map((i) => {
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
              {design_tool_outlined.map((i) => {
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
