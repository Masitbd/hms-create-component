import { useState } from "react";
import Link from "next/link";
import { SlBriefcase } from "react-icons/sl";

export default function SideBarItems({ role }: { role: string }) {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const defaultItems = (
    <li>
      <Link legacyBehavior href={`/${role}`}>
        <a
          onClick={() => handleLinkClick(`/${role}`)}
          className={activeLink === `/${role}` ? "active" : ""}
        >
          <SlBriefcase /> Dashboard Home
        </a>
      </Link>
    </li>
  );

  const userItems = (
    <>
      {defaultItems}
      <li>
        <Link legacyBehavior href={`/${role}/my_services`}>
          <a
            onClick={() => handleLinkClick(`/${role}/my_services`)}
            className={activeLink === `/${role}/my_services` ? "active" : ""}
          >
            My Services
          </a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href={`/${role}/booking_history`}>
          <a
            onClick={() => handleLinkClick(`/${role}/booking_history`)}
            className={
              activeLink === `/${role}/booking_history` ? "active" : ""
            }
          >
            Booking History
          </a>
        </Link>
      </li>
    </>
  );

  const superAdminItems = (
    <>
      {defaultItems}
      <li>
        <Link legacyBehavior href={`/${role}/manage_admin`}>
          <a
            onClick={() => handleLinkClick(`/${role}/manage_admin`)}
            className={activeLink === `/${role}/manage_admin` ? "active" : ""}
          >
            Manage Admin
          </a>
        </Link>
      </li>
      {/* ... (similar changes for other links) ... */}
    </>
  );

  const adminItems = (
    <>
      {defaultItems}
      <li>
        <Link legacyBehavior href={`/${role}/manage_service`}>
          <a
            onClick={() => handleLinkClick(`/${role}/manage_service`)}
            className={activeLink === `/${role}/manage_service` ? "active" : ""}
          >
            Manage Service
          </a>
        </Link>
      </li>
      {/* ... (similar changes for other links) ... */}
    </>
  );

  if (role === "admin") return superAdminItems;
  if (role === "user") return adminItems;
  return userItems;
}
