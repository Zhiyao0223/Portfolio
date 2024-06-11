import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { linkedinLink } from "@/config/constants";

// Headers
// const Navbar = () => {
//   return (
//     <nav className="scrolled-header sticky top-0 left-0 w-full border-b border-[#4d4e53] shadow-sm text-xl bg-black z-10 mx-auto">
//       <div className="px-12 h-24 flex justify-between items-center text-white relative">
//         <div className="md:inline hidden">Portfolio</div>

//         <div className="flex justify-end space-x-2">
//           <a href="#aboutMe" className="p-4">
//             About Me
//           </a>
//           <a href="#projects" className="p-4">
//             Projects
//           </a>
//           <a href="#contact" className="p-4">
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

const CustomNavBar = () => {
  return (
    <Navbar shouldHideOnScroll className="py-4 bg-black z-1">
      <NavbarBrand>
        <p className="font-bold text-2xl text-white">Portfolio</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#awards" aria-current="page">
            Awards
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#experience">
            Experience
          </Link>
        </NavbarItem>
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
