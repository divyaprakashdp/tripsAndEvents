import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialLinks() {
  const links = [
    {
      id: 1,
      link: "https://www.facebook.com",
      icon: (
        <>
          Facebook
          <FaFacebook size={30} />
        </>
      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      link: "https://instagram.com",
      icon: (
        <>
          Instagram
          <FaInstagram size={30} />
        </>
      ),
    },
    {
      id: 3,
      link: "mailto:xyz@gmail.com",
      icon: (
        <>
          Email Us
          <MdEmail size={30} />
        </>
      ),
    },
  ];
  return (
    <div className="flex md:flex-col top-[35%] md:left-0 absolute md:fixed rounded-br-md ">
      <ul>
        {links.map(({ id, link, icon, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 bg-blue-300 ml-[-100px] md:hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-white"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
