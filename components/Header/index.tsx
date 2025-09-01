"use client";
import { useEffect, useState, memo } from "react";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Link as LinkScroll } from "react-scroll";
import SmartNavLink from "../SmartNavLink";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import cn from "classnames";
import styles from "./Header.module.sass";
import Container from "../Container";
import Icon from "../Icon";
import Socials from "../Socials";
import { navigation } from "@/constants/navigation";

const Header = memo(() => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setScrolled(window.scrollY > 32);
  }, []);

  // Optimized scroll position with throttling
  useScrollPosition(
    ({ currPos }) => setScrolled(currPos.y < -32),
    [scrolled],
    undefined,
    false,
    100 // throttle to every 100ms for better performance
  );

  const toggleMenu = () => {
    if (open) {
      setOpen(false);
      enablePageScroll();
    } else {
      setOpen(true);
      disablePageScroll();
    }
  };

  const closeMenu = () => {
    if (open) {
      setOpen(false);
      enablePageScroll();
    }
  };

  const NavLink = ({ index }: { index: number }) => (
    <SmartNavLink
      onClick={closeMenu}
      activeClass={styles.active}
      to={navigation[index].element}
      offset={navigation[index].offset}
      spy
    >
      {navigation[index].title}
    </SmartNavLink>
  );

  return (
    <header className={cn(styles.header, { [styles.scrolled]: scrolled })}>
      <Container className={styles.container}>
        <SmartNavLink className={styles.logo} to="home">
          <svg width="56" height="56" viewBox="0 0 56 56">
            <path
              fill="#3c52d9"
              d="M38.5 15.9c.68.69.68 1.81 0 2.5l-7.1 7.25c-.47.48-1.23.48-1.7 0L22.6 18.4c-.33-.33-.51-.78-.51-1.25V4.2c0-1.05 1.25-1.58 1.98-.83l15.43 15.53zM7.2 25.55c.47.48 1.24.48 1.71 0l7.86-8.04c.32-.33.51-.78.51-1.25V4.21c0-1.05-1.25-1.58-1.98-.83L.51 15.92c-.68.69-.68 1.81 0 2.5l6.69 6.83z"
            />
            <rect
              width="13.2"
              height="13.3"
              x="12.9"
              y="23"
              fill="#2ef2ff"
              rx="2.16"
              transform="rotate(315 19.5 29.65)"
            />
          </svg>
        </SmartNavLink>
        <div className={cn(styles.wrapper, { [styles.open]: open })}>
          <div className={styles.inner}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <NavLink index={0} />
                  <div className={styles.dot}></div>
                  <NavLink index={1} />
                </li>
                <li>
                  <NavLink index={2} />
                  <div className={styles.dot}></div>
                  <NavLink index={3} />
                </li>
              </ul>
            </nav>
            <Socials className={styles.socials} small />
            <div className={styles.background}>
              <Image
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="Outlines"
              />
              <Image
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="Fill"
              />
            </div>
          </div>
        </div>
        <button
          className={cn(styles.burger, { [styles.active]: open })}
          onClick={toggleMenu}
        >
          <Icon name="magic" />
          <Icon name="close" />
        </button>
      </Container>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
