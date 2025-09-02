"use client";
import { Element } from "react-scroll";
import styles from "./Features.module.sass";
import Button from "../Button";
import Caption from "../Caption";
import Container from "../Container";
import Icon from "../Icon";
import { details, features } from "@/constants/features";

type Props = {};

const Features = ({}: Props) => {
  return (
    <Element name="features">
      <Container>
        <div className={styles.features}>
          {features.map((feature) => (
            <div className={styles.feature} key={feature.id}>
              <div className={styles.preview}>
                <span className="icon-frame"></span>
                {feature.icon}
              </div>
              <Caption className={styles.caption}>{feature.caption}</Caption>
              <h2 className={styles.title}>{feature.title}</h2>
              <div className={styles.text}>{feature.text}</div>
              <Button icon={feature.button.icon}>{feature.button.title}</Button>
            </div>
          ))}
          <ul className={styles.details}>
            {details.map((detail) => (
              <li key={detail.id}>
                <div className={styles.icon}>
                  <Icon name={detail.icon} />
                </div>
                <h3 className={styles.subtitle}>{detail.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Element>
  );
};

export default Features;
