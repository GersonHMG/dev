"use client";
import Image from "next/image";
import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import next from "next";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light">
    <div className="container">
      <div className="row items-center py-10">
        <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
          <Logo />
        </div>
        <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
          <Image
            src="/images/logo2.png"
            width={120}
            height={120}
            alt=""
          />
        </div>
        <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
          <Image
            src="/images/logo3.png"
            width={120}
            height={60}
            alt=""
          />
        </div>
        <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
          <h2>Contacto</h2>
          <p>contacto.muvec@gmail.com</p>
          <p>+56 9 8599 5690</p>
          <Social source={social.main} className="social-icons" />
        </div>
      </div>
    </div>
    <div className="border-t border-border py-7 dark:border-darkmode-border">
      <div className="container text-center text-light dark:text-darkmode-light">
        <p dangerouslySetInnerHTML={markdownify(copyright)} />
      </div>
    </div>
  </footer>
);
};

export default Footer;
