"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Utility function to determine if the link is active
const isActiveLink = (linkPath, currentPath) => linkPath === currentPath;

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/settings", label: "Settings" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-800 p-4 mt-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={`cursor-pointer px-3 py-2 rounded-md text-white hover:text-gray-400 ${
                  isActiveLink(href, pathname)
                    ? "bg-gray-900 text-yellow-400"
                    : ""
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
