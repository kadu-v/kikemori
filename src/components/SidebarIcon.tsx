import Icon from "../images/icon.png";
import "./SidebarIcon.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import Link from "@mui/material/Link";

const SidebarIcon: React.FC<{}> = () => {
  return (
    <div className="SidebarIcon">
      <img src={Icon} alt="kadu-v" />
      <p>Kazuki Ikemori</p>
      <div className="SNSIcons">
        {/* <div className="SNSIcon">
          <Link href="x" color="inherit">
            <LinkedInIcon fontSize="large" />
          </Link>
        </div> */}
        <div className="SNSIcon">
          <Link href="mailto:ikemori.k.aa@prg.titech.ac.jp" color="inherit">
            <EmailIcon fontSize="large" />
          </Link>
        </div>
        <div className="SNSIcon">
          <Link href="https://twitter.com/kadu_vv" color="inherit">
            <TwitterIcon fontSize="large" />
          </Link>
        </div>
        <div className="SNSIcon">
          <Link href="https://github.com/kadu-v" color="inherit">
            <GitHubIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarIcon;
