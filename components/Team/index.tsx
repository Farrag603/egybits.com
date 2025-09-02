"use client";
import { useState } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import styles from "./Team.module.sass";
import Container from "../Container";
import { teamMembers } from "@/constants/team";

type Props = {};

const Team = ({}: Props) => {
  return (
    <Element name="team">
      <Container>
        <div className={styles.head}>
          <h2 className={styles.title}>Meet Our Expert Team</h2>
          <p className={styles.subtitle}>
            The talented professionals behind EgyBits&apos;s innovative
            solutions
          </p>
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

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.iconContainer}>
                    <div className={styles.iconBox}>
                      <svg
                        className={styles.icon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>

                <div className={styles.description}>
                  <p className={styles.shortDesc}>{member.shortDescription}</p>
                  <div className={styles.longDesc}>
                    <p>{member.longDescription}</p>
                  </div>
                </div>
              </div>

              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>
      </Container>
    </Element>
  );
};

export default Team;
