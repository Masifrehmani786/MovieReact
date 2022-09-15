import {
    AiOutlineTwitter,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub,
    AiFillFacebook,
  } from "react-icons/ai/";

const Footer = () => {
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
    <footer className=" text-gray-600 body-font relative top-full border border-t-2">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">MoviesGo</span>
        </span>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 all rights reserved —
          <a
            href="https://twitter.com/saran_pariyar1"
            className="text-gray-600 ml-1"
            rel="noreferrer"
            target="_blank" 
          >
            @MAsifBashiR98
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          
        {social_links.map((element, index) => {
            const ItemIcon = element.icon;
            return (
              <a
                href={element.href_link}
                target="_blank" rel="noreferrer" 
                className="social-links sm:text-2xl"
                key={index}
              >
                <ItemIcon className="social-icons " />
              </a>
            );
          })}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
