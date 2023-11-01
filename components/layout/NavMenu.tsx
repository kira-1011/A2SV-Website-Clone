import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const links: { link: string; name: string }[] = [
    { name: "Home", link: "/" },
    { name: "Team", link: "/teams" },
    { name: "Success Stories", link: "/success-stories" },
    { name: "About Us", link: "/about-us" },
    { name: "Blogs", link: "/blogs" },
  ];

  const externalLink = { name: "Get Involved", link: "https://a2sv.org/get-involved" }

  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <div key={link.name}>
            <div className="flex flex-col group">
              <Link className="pb-2 hover:text-gray-400" href={`${link.link}`}>
                {link.name}
              </Link>
              <span
                className={`${
                  pathname === link.link ? "w-full" : "w-0"
                } group-hover:w-full h-[2px] bg-blue-800`}
                style={{ transition: "width 0.3s ease-in-out" }}
              ></span>
            </div>
          </div>
        );
      })}

      <div>
        <div className="flex flex-col group">
          <a className="pb-2 hover:text-gray-400" href={externalLink.link}>
            {externalLink.name}
          </a>
          <span
            className={`${
              pathname === externalLink.link ? "w-full" : "w-0"
            } group-hover:w-full h-[2px] bg-blue-800`}
            style={{ transition: "width 0.3s ease-in-out" }}
          ></span>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
