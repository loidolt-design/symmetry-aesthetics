import React, { useState } from "react";
import classNames from "classnames";

import SearchBox from "./SearchBox";
import CartItemsSidebar from "./CartItemsSidebar";
import MobileNavSidebar from "./MobileNavSidebar";

export default function MenuFunctionIcons(props) {
  const hide = props.hide || "";
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <>
      <div
        className={`menu__wrapper__functions ${classNames(props.className)}`}
      >
        {!hide.includes("search") && (
          <a
            href="#"
            className="menu-icon -search"
            onClick={(e) => {
              e.preventDefault();
              setShowSearch(true);
            }}
            style={{ marginRight: hide.includes("cart") && 0 }}
          >
            <img
              src={
                props.white
                  ? process.env.PUBLIC_URL +
                  "/assets/images/header/search-icon-white.png"
                  : process.env.PUBLIC_URL +
                  "/assets/images/header/search-icon.png"
              }
              alt="Search icon"
            />
          </a>
        )}
      </div>
      {/* Search input */}
      <SearchBox showSearch={showSearch} setShowSearch={setShowSearch} />
      {/* Cart sidebar */}
      <CartItemsSidebar showCart={showCart} setShowCart={setShowCart} />
      {/* Mobile navigation sidebar */}
      <MobileNavSidebar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
    </>
  );
}
