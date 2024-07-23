import Link from "next/link";

import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path:"https://github.com/itxtaha09"},
    { icon: <FaLinkedin />, path:"https://www.linkedin.com/in/muhammad-taha-3518a2259/"},
    { icon: <FaInstagram />, path:"https://www.instagram.com/itx_taha_09/"},
    { icon: <FaFacebook />, path:"https://web.facebook.com/taha.prince.37051/"},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index)=>{
                return (
                    <Link href={item.path} key={index} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
};

export default Social;