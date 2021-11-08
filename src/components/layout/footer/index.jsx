import React from "react";
import ReactTooltip from "react-tooltip";
import {
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import capitalizeFirstLetter from "../../../utils/capitalize-word";

function Footer() {
  const location = useLocation();

  const path = location.pathname.split("/");
  path.shift();

  const socials = [
    {
      name: "Twitter",
      icon: <FaTwitterSquare size={48} />,
      color: "#1DA1F2",
    },
    {
      name: "Twitter",
      icon: <FaFacebookSquare size={48} />,
      color: "#3B5999",
    },
    {
      name: "Twitter",
      icon: <FaDribbbleSquare size={48} />,
      color: "#EA4C89",
    },
    {
      name: "Twitter",
      icon: <FaGithubSquare size={48} />,
      color: "#222222",
    },
  ];

  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-left'>
          <h4 className='footer-left-top'>Thank you for supporting us!</h4>
          <h5 className='footer-left-bottom'>
            Let's get in touch on any of these platforms.
          </h5>
        </div>
        <div className='footer-right'>
          {socials.map((x, i) => (
            <span key={i}>
              <a
                data-for='main'
                data-tip='Follow Us'
                data-iscapture='true'
                style={{ color: x.color }}
              >
                {x.icon}
              </a>
              <ReactTooltip
                id='main'
                place='top'
                type='dark'
                effect='solid'
                multiline={true}
              />
            </span>
          ))}
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-left'>
          © 2018 <a href='#'> Şikayetvar</a>
        </div>
        <div className='footer-bottom-right'>
          {path?.map(
            (x, i) => `${i > 0 ? `/` : ""}${capitalizeFirstLetter(x)}`
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
