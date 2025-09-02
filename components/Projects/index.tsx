"use client";
import { lazy, Suspense, memo } from "react";
import Image from "next/image";
import Container from "../Container";
import { Element } from "react-scroll";
import styles from "./Projects.module.sass";

// Lazy load projects data to improve performance
const ProjectsContent = lazy(() => import("./ProjectsContent"));

type Props = {};

const Projects = memo(({}: Props) => {
  return (
    <Element name="projects" className={styles.projects}>
      <Container>
        <div className={styles.head}>
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.subtitle}>
            Explore our portfolio of innovative software solutions that have
            transformed businesses across various industries.
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

        <Suspense
          fallback={
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}>Loading projects...</div>
            </div>
          }
        >
          <ProjectsContent />
        </Suspense>
      </Container>
    </Element>
  );
});

Projects.displayName = "Projects";

export default Projects;
