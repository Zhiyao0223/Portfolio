import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { linkedinLink } from "@/config/constants";

const CustomNavBar = () => {
  const [showLine, setShowLine] = React.useState(false);
  const headerItem = {
    "Projects": "#projects",
    "Awards": "#awards",
    "Experience": "#experience",
  }

  return (
    <Navbar shouldHideOnScroll className="py-4 bg-black z-1">
      <NavbarBrand>
        <p className="font-bold text-2xl text-white">Portfolio</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {Object.keys(headerItem).map((item, index) => (
          <NavbarItem key={index}>
            <Link
              color="foreground"
              href={headerItem[item]}
              onMouseEnter={() => setShowLine(index)}
              onMouseLeave={() => setShowLine(false)}
              className="relative"
            >
              {item}
              {showLine === index && (
                <div
                  style={{
                    height: "2px",
                    background: "white",
                    marginTop: "4px",
                    width: "100%",
                    position: "absolute",
                    left: 0,
                    bottom: -6,
                  }}
                />
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            target="_blank"
            href={linkedinLink}
            className="bg-blue-500 rounded-full py-2 px-4 text-white"
          >
            Hit Me Up
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavBar;
