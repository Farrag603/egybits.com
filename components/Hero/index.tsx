"use client";
import { Element } from "react-scroll";
import styles from "./Hero.module.sass";
import Container from "../Container";
import Caption from "../Caption";
import Button from "../Button";
import Image from "next/image";

type Props = {
  onLoadindComplete: () => void;
};

const Hero = ({ onLoadindComplete }: Props) => {
  return (
    <Element className={styles.hero} name="home">
      <Container>
        <div className={styles.inner}>
          <Caption className={styles.caption}>Software Development</Caption>
          <h1 className={styles.title}>Innovation delivered</h1>
          <p className={styles.text}>
            We craft custom software solutions that transform businesses. From
            web applications to mobile apps, we deliver cutting-edge technology
            that drives growth and efficiency.
          </p>
          <Button icon="zap-fast">Start your project</Button>
        </div>
        <div className={styles.preview}>
          <Image
            src="/images/hero.png"
            width={1230}
            height={1230}
            quality={100}
            onLoadingComplete={onLoadindComplete}
            alt="Hero"
          />
        </div>
      </Container>
    </Element>
  );
};

export default Hero;
