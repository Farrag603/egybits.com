"use client";
import { Link as LinkScroll } from "react-scroll";
import SmartNavLink from "../SmartNavLink";
import styles from "./Footer.module.sass";
import Container from "../Container";
import Subscribe from "../Subscribe";
import { navigation } from "@/constants/navigation";
import Socials from "../Socials";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.col}>
          <div className={styles.logo}>
            <svg width="40" height="40">
              <path
                fill="#2ef2ff"
                d="M39.272 19.87a2.58 2.58 0 0 0 .021-3.57L24.839 1.162C23.802.076 21.998.827 21.998 2.345v14.24a2.57 2.57 0 0 0 .686 1.753l7.657 8.21a1.63 1.63 0 0 0 2.37.029l6.561-6.707zm-29.051 6.027c-.963 1.03-2.567 1.048-3.552.041L.726 19.863c-.962-.984-.971-2.577-.02-3.572L15.16 1.173c1.038-1.086 2.841-.334 2.841 1.184V16.56a2.57 2.57 0 0 1-.689 1.756l-7.091 7.583zm2.25 2.622c-1.197 1.224-1.197 3.207 0 4.43l5.367 5.486c1.197 1.223 3.137 1.223 4.334 0l5.29-5.408c1.197-1.223 1.197-3.207 0-4.43l-5.367-5.486c-1.197-1.223-3.137-1.223-4.334 0l-5.29 5.408z"
              />
            </svg>
            <svg width="592" height="592" viewBox="0 0 40 40">
              <path
                fill="url(#gradient)"
                d="M39.272 19.87a2.58 2.58 0 0 0 .021-3.57L24.839 1.162C23.802.076 21.998.827 21.998 2.345v14.24a2.57 2.57 0 0 0 .686 1.753l7.657 8.21a1.63 1.63 0 0 0 2.37.029l6.561-6.707zm-29.051 6.027c-.963 1.03-2.567 1.048-3.552.041L.726 19.863c-.962-.984-.971-2.577-.02-3.572L15.16 1.173c1.038-1.086 2.841-.334 2.841 1.184V16.56a2.57 2.57 0 0 1-.689 1.756l-7.091 7.583zm2.25 2.622c-1.197 1.224-1.197 3.207 0 4.43l5.367 5.486c1.197 1.223 3.137 1.223 4.334 0l5.29-5.408c1.197-1.223 1.197-3.207 0-4.43l-5.367-5.486c-1.197-1.223-3.137-1.223-4.334 0l-5.29 5.408z"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#253575" />
                  <stop offset="100%" stopColor="#162561" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <nav className={styles.nav}>
            <ul>
              {navigation.map((link) => (
                <li key={link.id}>
                  <SmartNavLink to={link.element} offset={link.offset}>
                    {link.title}
                  </SmartNavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.bottom}>
            <div className={styles.copyright}>© Copyright UI8, LLC.</div>
            <ul className={styles.legal}>
              <li>
                <a href="#">
                  Privacy <span>policy</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Terms <span>of service</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.col}>
          <Subscribe />
          <Socials className={styles.socials} />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
