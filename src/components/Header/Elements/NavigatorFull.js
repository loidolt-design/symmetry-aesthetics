import React from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";

import ClientOnlyPortal from "../../../common/ClientOnlyPortal";

export default function NavigationFull({ showMenu, setShowMenu }) {
  return (
    <ClientOnlyPortal selector="#nav-full">
      <CSSTransition
        in={showMenu}
        unmountOnExit
        timeout={500}
        classNames="nav-full"
      >
        <div className="navigation-full">
          <div className="navigation-full__content">
            <a
              onClick={(e) => {
                e.preventDefault();
                setShowMenu(false);
              }}
              href="#"
              className="close-btn"
            >
              <i className="fal fa-times"></i>
            </a>
            <ul>
              <li>
                <Link href={process.env.PUBLIC_URL + "/"}>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href={process.env.PUBLIC_URL + "/services"}>
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href={process.env.PUBLIC_URL + "/about"}>
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href={process.env.PUBLIC_URL + "/about"}>
                  <a>Meet The Team</a>
                </Link>
              </li>
              <li>
                <Link href={process.env.PUBLIC_URL + "/contact"}>
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <a href={"https://www.skinmedica.com/us/allproducts/"}>
                  Shop Skincare
                </a>
              </li>
              <li>
                <a href={"https://app.aestheticrecord.com/login"}>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </CSSTransition>
    </ClientOnlyPortal>
  );
}
