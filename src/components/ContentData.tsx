import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ConstructionIcon from "@mui/icons-material/Construction";
import HomeMarkDown from "../contents/home.md";
import HobbyMarkDown from "../contents/hobby.md";
import PublicationsMarkDown from "../contents/publications.md";

const ContentData: ContentDataType[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
    markdown: HomeMarkDown,
  },
  {
    title: "Publications",
    icon: <AutoStoriesIcon />,
    link: "/publications",
    markdown: PublicationsMarkDown,
  },
  {
    title: "Hobby",
    icon: <ConstructionIcon />,
    link: "/hobby",
    markdown: HobbyMarkDown,
  },
];

export default ContentData;

export interface ContentDataType {
  title: string;
  icon: JSX.Element;
  link: string;
  markdown: "*.md";
}
