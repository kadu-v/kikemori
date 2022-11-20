import React from "react";
import "./Sidebar.css";
import { ContentDataType } from "./ContentData";
import SidebarIcon from "./SidebarIcon";

const Sidebar: React.FC<{
  sidebarData: Array<ContentDataType>;
}> = (props) => {
  return (
    <div className="Sidebar">
      <SidebarIcon />
      <ul className="SidebarList">
        {props.sidebarData.map((value, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === value.link ? "active" : ""}
              onClick={() => (window.location.pathname = value.link)}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
