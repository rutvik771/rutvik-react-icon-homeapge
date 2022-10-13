import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    // 24SupportBold
    DislikeBold
    ,HeartAddBold
    ,HeartCircleBold
    ,HeartEditBold
    ,HeartRemoveBold
    ,HeartSearchBold
    ,HeartSlashBold
    ,HeartTickBold
    ,HeartBold
    ,Like1Bold
    ,LikeDislikeBold
    ,LikeShapesBold
    ,LikeTagBold
    ,LikeBold
    ,LovelyBold
    ,MagicStarBold
    ,MedalStarBold
    ,MedalBold
    ,MessageQuestionBold
    ,RankingBold
    ,SmileysBold
    ,Star1Bold
    ,StarSlashBold
    ,StarBold
    ,UnlimitedBold
    // ,24SupportOutlined
    ,DislikeOutlined
    ,HeartAddOutlined
    ,HeartCircleOutlined
    ,HeartEditOutlined
    ,HeartRemoveOutlined
    ,HeartSearchOutlined
    ,HeartSlashOutlined
    ,HeartTickOutlined
    ,HeartOutlined
    ,Like1Outlined
    ,LikeDislikeOutlined
    ,LikeShapesOutlined
    ,LikeTagOutlined
    ,LikeOutlined
    ,LovelyOutlined
    ,MagicStarOutlined
    ,MedalStarOutlined
    ,MedalOutlined
    ,MessageQuestionOutlined
    ,RankingOutlined
    ,SmileysOutlined
    ,Star1Outlined
    ,StarSlashOutlined
    ,StarOutlined
    ,UnlimitedOutlined
    

    
} from "react-icon-cx";

export const Support_like = () => {
  const [copied, setcopied] = useState(false);

  const like_question_bold =  [
    // { icon: <24SupportBold/>, icon_name: '24SupportBold' },
    { icon: <DislikeBold/>, icon_name: 'DislikeBold' },
    { icon: <HeartAddBold/>, icon_name: 'HeartAddBold' },
    { icon: <HeartCircleBold/>, icon_name: 'HeartCircleBold' },
    { icon: <HeartEditBold/>, icon_name: 'HeartEditBold' },
    { icon: <HeartRemoveBold/>, icon_name: 'HeartRemoveBold' },
    { icon: <HeartSearchBold/>, icon_name: 'HeartSearchBold' },
    { icon: <HeartSlashBold/>, icon_name: 'HeartSlashBold' },
    { icon: <HeartTickBold/>, icon_name: 'HeartTickBold' },
    { icon: <HeartBold/>, icon_name: 'HeartBold' },
    { icon: <Like1Bold/>, icon_name: 'Like1Bold' },
    { icon: <LikeDislikeBold/>, icon_name: 'LikeDislikeBold' },
    { icon: <LikeShapesBold/>, icon_name: 'LikeShapesBold' },
    { icon: <LikeTagBold/>, icon_name: 'LikeTagBold' },
    { icon: <LikeBold/>, icon_name: 'LikeBold' },
    { icon: <LovelyBold/>, icon_name: 'LovelyBold' },
    { icon: <MagicStarBold/>, icon_name: 'MagicStarBold' },
    { icon: <MedalStarBold/>, icon_name: 'MedalStarBold' },
    { icon: <MedalBold/>, icon_name: 'MedalBold' },
    { icon: <MessageQuestionBold/>, icon_name: 'MessageQuestionBold' },
    { icon: <RankingBold/>, icon_name: 'RankingBold' },
    { icon: <SmileysBold/>, icon_name: 'SmileysBold' },
    { icon: <Star1Bold/>, icon_name: 'Star1Bold' },
    { icon: <StarSlashBold/>, icon_name: 'StarSlashBold' },
    { icon: <StarBold/>, icon_name: 'StarBold' },
    { icon: <UnlimitedBold/>, icon_name: 'UnlimitedBold' }

  ] 
   const like_question_outlined =  [
    // { icon: <24upportOutlined/>', icon_name: '24SupportOutlined' },
    { icon: <DislikeOutlined/>, icon_name: 'DislikeOutlined' },
    { icon: <HeartAddOutlined/>, icon_name: 'HeartAddOutlined' },
    { icon: <HeartCircleOutlined/>, icon_name: 'HeartCircleOutlined' },
    { icon: <HeartEditOutlined/>, icon_name: 'HeartEditOutlined' },
    { icon: <HeartRemoveOutlined/>, icon_name: 'HeartRemoveOutlined' },
    { icon: <HeartSearchOutlined/>, icon_name: 'HeartSearchOutlined' },
    { icon: <HeartSlashOutlined/>, icon_name: 'HeartSlashOutlined' },
    { icon: <HeartTickOutlined/>, icon_name: 'HeartTickOutlined' },
    { icon: <HeartOutlined/>, icon_name: 'HeartOutlined' },
    { icon: <Like1Outlined/>, icon_name: 'Like1Outlined' },
    { icon: <LikeDislikeOutlined/>, icon_name: 'LikeDislikeOutlined' },
    { icon: <LikeShapesOutlined/>, icon_name: 'LikeShapesOutlined' },
    { icon: <LikeTagOutlined/>, icon_name: 'LikeTagOutlined' },
    { icon: <LikeOutlined/>, icon_name: 'LikeOutlined' },
    { icon: <LovelyOutlined/>, icon_name: 'LovelyOutlined' },
    { icon: <MagicStarOutlined/>, icon_name: 'MagicStarOutlined' },
    { icon: <MedalStarOutlined/>, icon_name: 'MedalStarOutlined' },
    { icon: <MedalOutlined/>, icon_name: 'MedalOutlined' },
    {
      icon: <MessageQuestionOutlined/>,
      icon_name: 'MessageQuestionOutlined'
    },
    { icon: <RankingOutlined/>, icon_name: 'RankingOutlined' },
    { icon: <SmileysOutlined/>, icon_name: 'SmileysOutlined' },
    { icon: <Star1Outlined/>, icon_name: 'Star1Outlined' },
    { icon: <StarSlashOutlined/>, icon_name: 'StarSlashOutlined' },
    { icon: <StarOutlined/>, icon_name: 'StarOutlined' },
    { icon: <UnlimitedOutlined/>, icon_name: 'UnlimitedOutlined' }
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
            <h2 className="icon-heading">Support,Like,Question</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {like_question_bold.map((i) => {
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
              {like_question_outlined.map((i) => {
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
