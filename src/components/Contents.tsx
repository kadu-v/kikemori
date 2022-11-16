import React, { useEffect, useState } from "react";
import "github-markdown-css";
import "./Contents.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import HomeMarkDown from "../contents/home.md";
import WorksMarkDown from "../contents/works.md";
import PublicationsMarkDown from "../contents/publications.md";

const ContentsData: Map<string, URL> = new Map([
  ["/home", HomeMarkDown],
  ["/publications", PublicationsMarkDown],
  ["/works", WorksMarkDown],
]);

const Contents: React.FC<{ link: string }> = (props) => {
  const [markdown, setState] = useState("# Not found");

  useEffect(() => {
    fetch(ContentsData.get(props.link) ?? HomeMarkDown)
      .then((response) => response.text())
      .then((text) => {
        setState(text);
      });
  }, [props.link]);

  return (
    <ReactMarkdown
      className="markdown-body Contents"
      children={markdown}
      remarkPlugins={[remarkGfm]}
    />
  );
};

export default Contents;
