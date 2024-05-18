export const NavbarData = () => {
  return [
    { title: "Home", link: "/" },
    { title: "Projects", link: "/projects" },
    { title: "Blogs", link: "/blogs" },
    { title: "Contact Us", link: "/contactus" },
  ];
};

export const HomeNavbarData = () => {
  return [
    { title: "Home", link: "/" },
    { title: "Projects", route: "ourprojects" },
    { title: "Blogs", route: "ourblogs" },
    { title: "Contact Us", link: "/contactus" },
  ];
};
