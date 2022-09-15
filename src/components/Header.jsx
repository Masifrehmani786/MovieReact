import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai/";

const Header = () => {
  const  social_links = [
    {
      icon: AiOutlineTwitter,
      href_link: "https://twitter.com/MAsifBashiR98?t=cpqiw9J5F7Q1Ni_lxlWDKA&s=09",
    },
    {
      icon: AiFillLinkedin,
      href_link: "https://www.linkedin.com/in/muhammad-asif-bashir-6378171a0",
    },
    {
      icon: AiFillInstagram,
      href_link: "https://www.instagram.com/engnrmasif/",
    },
    {
      icon: AiFillGithub,
      href_link: "https://github.com/Masifrehmani786",
    },
    {
      icon: AiFillFacebook,
      href_link: "https://web.facebook.com/profile.php?id=100080491305596",
    },
  ];

  return (
    <div className="text-white bg-neutral-900 text-xl p-2">
      <div className="flex place-content-around">
        <p>M Asif Bashir</p>
        <div className="flex self-center font1-5">
          <p className="hidden find-me-text sm:block">Find me : </p>
          {social_links.map((element, index) => {
            const ItemIcon = element.icon;
            return (
              <a
                href={element.href_link}
                target="_blank"
                className="sm:text-2xl mx-1"
                key={index}
                rel="noreferrer"
              >
                < ItemIcon  />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default Header;
