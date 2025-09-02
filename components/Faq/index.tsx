"use client";
import { Element } from "react-scroll";
import styles from "./Faq.module.sass";
import Container from "../Container";
import Item from "./Item";
import { faq } from "@/constants/faq";

type Props = {};

const Faq = ({}: Props) => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <Element className={styles.faq} name="faq">
      <div className={styles.head}>
        <Container className={styles.container}>
          <h2 className={styles.title}>
            Curiosity didn’t kill the cat, it got answers.
          </h2>
          <p className={styles.text}>
            You’ve got questions, we’ve got answers.
          </p>
        </Container>
        <div className={styles.line}></div>
      </div>
      <div className={styles.inner}>
        <Container className={styles.row}>
          <div className={styles.col}>
            {faq.slice(0, halfLength).map((item, index) => (
              <Item item={item} index={index + 1} key={item.id} />
            ))}
            <div className={styles.logo}>
              <svg width="40" height="40">
                <path
                  fill="#2ef2ff"
                  d="M39.272 19.87a2.58 2.58 0 0 0 .021-3.57L24.839 1.162C23.802.076 21.998.827 21.998 2.345v14.24a2.57 2.57 0 0 0 .686 1.753l7.657 8.21a1.63 1.63 0 0 0 2.37.029l6.561-6.707zm-29.051 6.027c-.963 1.03-2.567 1.048-3.552.041L.726 19.863c-.962-.984-.971-2.577-.02-3.572L15.16 1.173c1.038-1.086 2.841-.334 2.841 1.184V16.56a2.57 2.57 0 0 1-.689 1.756l-7.091 7.583zm2.25 2.622c-1.197 1.224-1.197 3.207 0 4.43l5.367 5.486c1.197 1.223 3.137 1.223 4.334 0l5.29-5.408c1.197-1.223 1.197-3.207 0-4.43l-5.367-5.486c-1.197-1.223-3.137-1.223-4.334 0l-5.29 5.408z"
                />
              </svg>
            </div>
          </div>
          <div className={styles.col}>
            {faq.slice(halfLength).map((item, index) => (
              <Item item={item} index={index + 1 + halfLength} key={item.id} />
            ))}
          </div>
        </Container>
        <div className={styles.line}></div>
      </div>
    </Element>
  );
};

export default Faq;
