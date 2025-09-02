"use client";
import { useState } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import CountUp from "react-countup";
import cn from "classnames";
import styles from "./Pricing.module.sass";
import Container from "../Container";
import Button from "../Button";
import icons from "./icons";
import { plans } from "@/constants/pricing";

type Props = {};

const Pricing = ({}: Props) => {
  const [monthly, setMonthly] = useState<boolean>(true);

  return (
    <Element name="pricing">
      <Container>
        <div className={styles.head}>
          <h2 className={styles.title}>
            Have An insight about us and our services
          </h2>
          <div className={styles.tabs}>
            <button
              className={cn({ [styles.active]: monthly })}
              onClick={() => setMonthly(true)}
            >
              Our Team
            </button>
            <button
              className={cn({ [styles.active]: !monthly })}
              onClick={() => setMonthly(false)}
            >
              Our Services
            </button>
            <div
              className={cn(styles.substrate, {
                [styles.active]: !monthly,
              })}
            ></div>
          </div>
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
        <div className={styles.plans}>
          {plans.map((plan) => (
            <div className={styles.plan} key={plan.id}>
              <div className={styles.inner}>
                <div className={styles.icon}>
                  <svg>
                    <path d="M15.998 0c5.193 0 10.267.883 15.057 2.588l.651.238-.616 1.649c-3.203-1.197-6.542-2.008-9.965-2.413L16.66 7.163a.88.88 0 0 1-1.325 0l-4.464-5.102A42.84 42.84 0 0 0 1.56 4.236l-.654.238L.29 2.826C5.271.965 10.569 0 15.998 0z" />
                  </svg>
                  <span className="icon-frame"></span>
                  {icons.get(plan.id)}
                </div>
                <div className={styles.name}>{plan.title}</div>
                <div className={styles.price}>
                  <div className={styles.value}>
                    $
                    <CountUp
                      start={monthly ? plan.priceMonthly : plan.priceMonthly}
                      end={monthly ? plan.priceMonthly : plan.priceYearly}
                      duration={0.4}
                      useEasing={false}
                      preserveValue
                    />
                  </div>
                  <div className={styles.period}>/ mo</div>
                </div>
                <div className={styles.caption}>{plan.caption}</div>
                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Button
                  className={styles.button}
                  icon={plan.icon}
                  themeBlue={plan.id !== "1"}
                  themeGreen={plan.id === "1"}
                >
                  Get started
                </Button>
                {plan.id === "1" && (
                  <div className={styles.limited}>Limited time offer</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Element>
  );
};

export default Pricing;
