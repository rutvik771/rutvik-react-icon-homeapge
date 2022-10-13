import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
    FrameBold
    ,PeopleBold
    ,Profile2userBold
    ,ProfileAddBold
    ,ProfileCircleBold
    ,ProfileDeleteBold
    ,ProfileRemoveBold
    ,ProfileTickBold
    ,TagUserBold
    ,UserAddBold
    ,UserCirlceAddBold
    ,UserEditBold
    ,UserMinusBold
    ,UserOctagonBold
    ,UserRemoveBold
    ,UserSearchBold
    ,UserSquareBold
    ,UserTagBold
    ,UserTickBold
    ,UserBold
    ,FrameOutlined
    ,PeopleOutlined
    ,Profile2userOutlined
    ,ProfileAddOutlined
    ,ProfileCircleOutlined
    ,ProfileDeleteOutlined
    ,ProfileRemoveOutlined
    ,ProfileTickOutlined
    ,TagUserOutlined
    ,UserAddOutlined
    ,UserCirlceAddOutlined
    ,UserEditOutlined
    ,UserMinusOutlined
    ,UserOctagonOutlined
    ,UserRemoveOutlined
    ,UserSearchOutlined
    ,UserSquareOutlined
    ,UserTagOutlined
    ,UserTickOutlined
    ,UserOutlined
    

    


    
} from "react-icon-cx";

export const User = () => {
  const [copied, setcopied] = useState(false);

  const users_bold =  [
    { icon: <FrameBold/>, icon_name: 'FrameBold' },
    { icon: <PeopleBold/>, icon_name: 'PeopleBold' },
    // { icon: <Profile2userBold/>, icon_name: 'Profile2userBold' },
    { icon: <ProfileAddBold/>, icon_name: 'ProfileAddBold' },
    { icon: <ProfileCircleBold/>, icon_name: 'ProfileCircleBold' },
    { icon: <ProfileDeleteBold/>, icon_name: 'ProfileDeleteBold' },
    { icon: <ProfileRemoveBold/>, icon_name: 'ProfileRemoveBold' },
    { icon: <ProfileTickBold/>, icon_name: 'ProfileTickBold' },
    { icon: <TagUserBold/>, icon_name: 'TagUserBold' },
    { icon: <UserAddBold/>, icon_name: 'UserAddBold' },
    { icon: <UserCirlceAddBold/>, icon_name: 'UserCirlceAddBold' },
    { icon: <UserEditBold/>, icon_name: 'UserEditBold' },
    { icon: <UserMinusBold/>, icon_name: 'UserMinusBold' },
    { icon: <UserOctagonBold/>, icon_name: 'UserOctagonBold' },
    { icon: <UserRemoveBold/>, icon_name: 'UserRemoveBold' },
    { icon: <UserSearchBold/>, icon_name: 'UserSearchBold' },
    { icon: <UserSquareBold/>, icon_name: 'UserSquareBold' },
    { icon: <UserTagBold/>, icon_name: 'UserTagBold' },
    { icon: <UserTickBold/>, icon_name: 'UserTickBold' },
    { icon: <UserBold/>, icon_name: 'UserBold' }
  ]
  const users_outlined =  [
    { icon: <FrameOutlined/>, icon_name: 'FrameOutlined' },
    { icon: <PeopleOutlined/>, icon_name: 'PeopleOutlined' },
    // {
    //   icon: <Profile2userOutlined/>,
    //   icon_name: 'Profile2userOutlined'
    // },
    { icon: <ProfileAddOutlined/>, icon_name: 'ProfileAddOutlined' },
    {
      icon: <ProfileCircleOutlined/>,
      icon_name: 'ProfileCircleOutlined'
    },
    {
      icon: <ProfileDeleteOutlined/>,
      icon_name: 'ProfileDeleteOutlined'
    },
    {
      icon: <ProfileRemoveOutlined/>,
      icon_name: 'ProfileRemoveOutlined'
    },
    { icon: <ProfileTickOutlined/>, icon_name: 'ProfileTickOutlined' },
    { icon: <TagUserOutlined/>, icon_name: 'TagUserOutlined' },
    { icon: <UserAddOutlined/>, icon_name: 'UserAddOutlined' },
    {
      icon: <UserCirlceAddOutlined/>,
      icon_name: 'UserCirlceAddOutlined'
    },
    { icon: <UserEditOutlined/>, icon_name: 'UserEditOutlined' },
    { icon: <UserMinusOutlined/>, icon_name: 'UserMinusOutlined' },
    { icon: <UserOctagonOutlined/>, icon_name: 'UserOctagonOutlined' },
    { icon: <UserRemoveOutlined/>, icon_name: 'UserRemoveOutlined' },
    { icon: <UserSearchOutlined/>, icon_name: 'UserSearchOutlined' },
    { icon: <UserSquareOutlined/>, icon_name: 'UserSquareOutlined' },
    { icon: <UserTagOutlined/>, icon_name: 'UserTagOutlined' },
    { icon: <UserTickOutlined/>, icon_name: 'UserTickOutlined' },
    { icon: <UserOutlined/>, icon_name: 'UserOutlined' }
  
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
            <h2 className="icon-heading">User</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {users_bold.map((i) => {
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
              {users_outlined.map((i) => {
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
