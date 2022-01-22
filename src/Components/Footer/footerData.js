import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const iconSize = 20;

export const socialLinks = [
  {
    id: 1,
    name: "Twitter",
    icon: <FaTwitter size={iconSize} />,
    socialUrl: "",
  },
  {
    id: 2,
    name: "Facebook",
    icon: <FaFacebookF size={iconSize} />,
    socialUrl: "",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram size={iconSize} />,
    socialUrl: "",
  },
];

export const copyright = {
  text: "Blake Wire and Cable Corporation",
  year: "2022",
};

export const portal = {
  label: "Blakesource Portal",
  portalUrl: "",
};
