import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  var link_list = [
    { route: "", name: "Home" },
    { route: "money", name: "Money" },
    { route: "video_audio", name: "Video , Audio , Image" },
    { route: "email_msg", name: "Emails , Messages" },
    { route: "design", name: "Design Tool" },
    { route: "content_edit", name: "Content , Edit" },
    { route: "social_media", name: "Social Media" },
    { route: "type_para", name: "Type, Paragraph, Character" },
    { route: "arrow", name: "Arrow" },
    { route: "essential", name: "Essential" },
    { route: "archiv", name: "Archive" },
    { route: "weather", name: "Weather" },
    { route: "files", name: "Files" },
    { route: "user", name: "Users" },
    { route: "car", name: "Car" },
    { route: "location", name: "Location" },
    { route: "school", name: "School , Learning" },
    { route: "delivery", name: "Delivery" },
    { route: "grid", name: "Grid" },
    { route: "shop", name: "Shop" },
    { route: "programing", name: "Programing" },
    { route: "support_like", name: "Support , Like , Question" },
    { route: "building", name: "Building" },
    { route: "business", name: "Business" },
    { route: "call", name: "Call" },
    { route: "computer", name: "Computer,Device" },
    { route: "security", name: "Security" },
    { route: "setting", name: "Setting" },
    { route: "notification", name: "Notification" },
    { route: "search", name: "Search" },
    { route: "time", name: "Time" },
  ];
  return (
    <>
      <div
        className="sidebar"
        data-color="purple"
        data-image="assets/img/sidebar-5.jpg"
      >
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to="" className="simple-text">
              Icon Gallary
            </Link>
          </div>
          <ul className="nav">
            {link_list.map((e) => {
              return (
                <li>
                  <Link className="link" to={e.route}>
                    {/* <i className="pe-7s-graph" /> */}
                    <p>{e.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
