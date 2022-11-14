import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Publication",
    icon: <AutoStoriesIcon />,
    link: "/publication",
  },
];
export default SidebarData;
