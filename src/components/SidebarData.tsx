import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ConstructionIcon from "@mui/icons-material/Construction";

const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Publications",
    icon: <AutoStoriesIcon />,
    link: "/publications",
  },
  {
    title: "Hobby",
    icon: <ConstructionIcon />,
    link: "/hobby",
  },
];
export default SidebarData;
