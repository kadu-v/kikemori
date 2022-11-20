import React from "react";
import "github-markdown-css";
import "./Contents.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Contents: React.FC<{ markdown: string }> = (props) => {
  return (
    <ReactMarkdown
      className="markdown-body Contents"
      children={props.markdown}
      remarkPlugins={[remarkGfm]}
    />
  );
};

export default Contents;
