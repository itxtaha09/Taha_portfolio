import Link from "next/link";

import { FaGithub, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path:""},
    {icon: <FaYoutube />, path:""},
    {icon: <FaInstagram />, path:""},
    {icon: <FaTwitter />, path:""},
];
// video wala be like: Ye Baten batai nhi jati, Next js warr jati hai 
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