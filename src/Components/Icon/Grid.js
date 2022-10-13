import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    // 3squareBold
    AlignBottomBold
    ,AlignHorizontallyBold
    ,AlignLeftBold
    ,AlignRightBold
    ,AlignVerticallyBold
    ,Convertshape2Bold
    ,ConvertshapeBold
    ,CropBold
    ,Element2Bold
    ,Element3Bold
    ,Element4Bold
    ,ElementEqualBold
    ,ElementPlusBold
    ,FatrowsBold
    ,FormatCircleBold
    ,FormatSquareBold
    ,Frame1Bold
    ,FrameBold
    ,Grid1Bold
    ,Grid2Bold
    ,Grid3Bold
    ,Grid4Bold
    ,Grid5Bold
    ,Grid6Bold
    ,Grid7Bold
    ,Grid8Bold
    ,Grid9Bold
    ,GridEditBold
    ,GridEraserBold
    ,GridLockBold
    ,KanbanBold
    ,Maximize1Bold
    ,Maximize2Bold
    ,Maximize3Bold
    ,Maximize4Bold
    ,MaximizeBold
    ,RotateLeftBold
    ,RotateRightBold
    ,RowHorizontalBold
    ,RowVerticalBold
    ,SliderHorizontal1Bold
    ,SliderHorizontalBold
    ,SliderVertical1Bold
    ,SliderVerticalBold
    // ,3squareOutlined
    ,AlignBottomOutlined
    ,AlignHorizontallyOutlined
    ,AlignLeftOutlined
    ,AlignRightOutlined
    ,AlignVerticallyOutlined
    ,Convertshape2Outlined
    ,ConvertshapeOutlined
    ,CropOutlined
    ,Element2Outlined
    ,Element3Outlined
    ,Element4Outlined
    ,ElementEqualOutlined
    ,ElementPlusOutlined
    ,FatrowsOutlined
    ,FormatCircleOutlined
    ,FormatSquareOutlined
    ,Frame1Outlined
    ,FrameOutlined
    ,Grid1Outlined
    ,Grid2Outlined
    ,Grid3Outlined
    ,Grid4Outlined
    ,Grid5Outlined
    ,Grid6Outlined
    ,Grid7Outlined
    ,Grid8Outlined
    ,Grid9Outlined
    ,GridEditOutlined
    ,GridEraserOutlined
    ,GridLockOutlined
    ,KanbanOutlined
    ,Maximize1Outlined
    ,Maximize2Outlined
    ,Maximize3Outlined
    ,Maximize4Outlined
    ,MaximizeOutlined
    ,RotateLeftOutlined
    ,RotateRightOutlined
    ,RowHorizontalOutlined
    ,RowVerticalOutlined
    ,SliderHorizontal1Outlined
    ,SliderHorizontalOutlined
    ,SliderVertical1Outlined
    ,SliderVerticalOutlined
    


    
} from "react-icon-cx";

export const Grid = () => {
  const [copied, setcopied] = useState(false);

  const grid_bold =  [
    // { icon: '<3squareBold/>', icon_name: '3squareBold' },
    { icon: <AlignBottomBold/>, icon_name: 'AlignBottomBold' },
    {
      icon: <AlignHorizontallyBold/>,
      icon_name: 'AlignHorizontallyBold'
    },
    { icon: <AlignLeftBold/>, icon_name: 'AlignLeftBold' },
    { icon: <AlignRightBold/>, icon_name: 'AlignRightBold' },
    { icon: <AlignVerticallyBold/>, icon_name: 'AlignVerticallyBold' },
    { icon: <Convertshape2Bold/>, icon_name: 'Convertshape2Bold' },
    { icon: <ConvertshapeBold/>, icon_name: 'ConvertshapeBold' },
    { icon: <CropBold/>, icon_name: 'CropBold' },
    { icon: <Element2Bold/>, icon_name: 'Element2Bold' },
    { icon: <Element3Bold/>, icon_name: 'Element3Bold' },
    { icon: <Element4Bold/>, icon_name: 'Element4Bold' },
    { icon: <ElementEqualBold/>, icon_name: 'ElementEqualBold' },
    { icon: <ElementPlusBold/>, icon_name: 'ElementPlusBold' },
    { icon: <FatrowsBold/>, icon_name: 'FatrowsBold' },
    { icon: <FormatCircleBold/>, icon_name: 'FormatCircleBold' },
    { icon: <FormatSquareBold/>, icon_name: 'FormatSquareBold' },
    { icon: <Frame1Bold/>, icon_name: 'Frame1Bold' },
    { icon: <FrameBold/>, icon_name: 'FrameBold' },
    { icon: <Grid1Bold/>, icon_name: 'Grid1Bold' },
    { icon: <Grid2Bold/>, icon_name: 'Grid2Bold' },
    { icon: <Grid3Bold/>, icon_name: 'Grid3Bold' },
    { icon: <Grid4Bold/>, icon_name: 'Grid4Bold' },
    { icon: <Grid5Bold/>, icon_name: 'Grid5Bold' },
    { icon: <Grid6Bold/>, icon_name: 'Grid6Bold' },
    { icon: <Grid7Bold/>, icon_name: 'Grid7Bold' },
    { icon: <Grid8Bold/>, icon_name: 'Grid8Bold' },
    { icon: <Grid9Bold/>, icon_name: 'Grid9Bold' },
    { icon: <GridEditBold/>, icon_name: 'GridEditBold' },
    { icon: <GridEraserBold/>, icon_name: 'GridEraserBold' },
    { icon: <GridLockBold/>, icon_name: 'GridLockBold' },
    { icon: <KanbanBold/>, icon_name: 'KanbanBold' },
    { icon: <Maximize1Bold/>, icon_name: 'Maximize1Bold' },
    { icon: <Maximize2Bold/>, icon_name: 'Maximize2Bold' },
    { icon: <Maximize3Bold/>, icon_name: 'Maximize3Bold' },
    { icon: <Maximize4Bold/>, icon_name: 'Maximize4Bold' },
    { icon: <MaximizeBold/>, icon_name: 'MaximizeBold' },
    { icon: <RotateLeftBold/>, icon_name: 'RotateLeftBold' },
    { icon: <RotateRightBold/>, icon_name: 'RotateRightBold' },
    { icon: <RowHorizontalBold/>, icon_name: 'RowHorizontalBold' },
    { icon: <RowVerticalBold/>, icon_name: 'RowVerticalBold' },
    {
      icon: <SliderHorizontal1Bold/>,
      icon_name: 'SliderHorizontal1Bold'
    },
    {
      icon: <SliderHorizontalBold/>,
      icon_name: 'SliderHorizontalBold'
    },
    { icon: <SliderVertical1Bold/>, icon_name: 'SliderVertical1Bold' },
    { icon: <SliderVerticalBold/>, icon_name: 'SliderVerticalBold' }
  ]
  const grid_outlined =  [
    // { icon: <3squareOutlined/>, icon_name: '3squareOutlined' },
    { icon: <AlignBottomOutlined/>, icon_name: 'AlignBottomOutlined' },
    {
      icon: <AlignHorizontallyOutlined/>,
      icon_name: 'AlignHorizontallyOutlined'
    },
    { icon: <AlignLeftOutlined/>, icon_name: 'AlignLeftOutlined' },
    { icon: <AlignRightOutlined/>, icon_name: 'AlignRightOutlined' },
    {
      icon: <AlignVerticallyOutlined/>,
      icon_name: 'AlignVerticallyOutlined'
    },
    {
      icon: <Convertshape2Outlined/>,
      icon_name: 'Convertshape2Outlined'
    },
    {
      icon: <ConvertshapeOutlined/>,
      icon_name: 'ConvertshapeOutlined'
    },
    { icon: <CropOutlined/>, icon_name: 'CropOutlined' },
    { icon: <Element2Outlined/>, icon_name: 'Element2Outlined' },
    { icon: <Element3Outlined/>, icon_name: 'Element3Outlined' },
    { icon: <Element4Outlined/>, icon_name: 'Element4Outlined' },
    {
      icon: <ElementEqualOutlined/>,
      icon_name: 'ElementEqualOutlined'
    },
    { icon: <ElementPlusOutlined/>, icon_name: 'ElementPlusOutlined' },
    { icon: '<FatrowsOutlined/>', icon_name: 'FatrowsOutlined' },
    {
      icon: <FormatCircleOutlined/>,
      icon_name: 'FormatCircleOutlined'
    },
    {
      icon: <FormatSquareOutlined/>,
      icon_name: 'FormatSquareOutlined'
    },
    { icon: <Frame1Outlined/>, icon_name: 'Frame1Outlined' },
    { icon: <FrameOutlined/>, icon_name: 'FrameOutlined' },
    { icon: <Grid1Outlined/>, icon_name: 'Grid1Outlined' },
    { icon: <Grid2Outlined/>, icon_name: 'Grid2Outlined' },
    { icon: <Grid3Outlined/>, icon_name: 'Grid3Outlined' },
    { icon: <Grid4Outlined/>, icon_name: 'Grid4Outlined' },
    { icon: <Grid5Outlined/>, icon_name: 'Grid5Outlined' },
    { icon: <Grid6Outlined/>, icon_name: 'Grid6Outlined' },
    { icon: <Grid7Outlined/>, icon_name: 'Grid7Outlined' },
    { icon: <Grid8Outlined/>, icon_name: 'Grid8Outlined' },
    { icon: <Grid9Outlined/>, icon_name: 'Grid9Outlined' },
    { icon: <GridEditOutlined/>, icon_name: 'GridEditOutlined' },
    { icon: <GridEraserOutlined/>, icon_name: 'GridEraserOutlined' },
    { icon: <GridLockOutlined/>, icon_name: 'GridLockOutlined' },
    { icon: <KanbanOutlined/>, icon_name: 'KanbanOutlined' },
    { icon: <Maximize1Outlined/>, icon_name: 'Maximize1Outlined' },
    { icon: <Maximize2Outlined/>, icon_name: 'Maximize2Outlined' },
    { icon: <Maximize3Outlined/>, icon_name: 'Maximize3Outlined' },
    { icon: <Maximize4Outlined/>, icon_name: 'Maximize4Outlined' },
    { icon: <MaximizeOutlined/>, icon_name: 'MaximizeOutlined' },
    { icon: <RotateLeftOutlined/>, icon_name: 'RotateLeftOutlined' },
    { icon: <RotateRightOutlined/>, icon_name: 'RotateRightOutlined' },
    {
      icon: <RowHorizontalOutlined/>,
      icon_name: 'RowHorizontalOutlined'
    },
    { icon: <RowVerticalOutlined/>, icon_name: 'RowVerticalOutlined' },
    {
      icon: <SliderHorizontal1Outlined/>,
      icon_name: 'SliderHorizontal1Outlined'
    },
    {
      icon: <SliderHorizontalOutlined/>,
      icon_name: 'SliderHorizontalOutlined'
    },
    {
      icon: <SliderVertical1Outlined/>,
      icon_name: 'SliderVertical1Outlined'
    },
    {
      icon: <SliderVerticalOutlined/>,
      icon_name: 'SliderVerticalOutlined'
    }
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
            <h2 className="icon-heading">Grid</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {grid_bold.map((i) => {
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
              {grid_outlined.map((i) => {
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
