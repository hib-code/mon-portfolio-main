import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaTwitter, FaFacebook} from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/hib-code/'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/hiba-rochdi-13b0aa358/'},
    {icon: <FaFacebook />, path: ''},
    {icon: <FaTwitter />, path: 'https://x.com/hiba_roc'},
]



const Social = ({ containerStyles, iconStyles }) => {
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        ))}
      </div>
    );
  };
  
  
export default Social;