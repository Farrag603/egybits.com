"use client";
import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Projects.module.sass";
import { projects } from "@/constants/projects-data";

const ProjectsContent = memo(() => {
  return (
    <>
      <div className={styles.projectsGrid}>
        {projects.slice(0, 6).map((project) => (
          <div key={project.id} className={styles.projectCard}>
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className={styles.categoryText}>{project.category}</p>
                </div>
              </div>
            </div>

            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>
                {project.shortDescription}
              </p>

              <div className={styles.projectMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Client:</span>
                  <span className={styles.metaValue}>{project.client}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration:</span>
                  <span className={styles.metaValue}>{project.duration}</span>
                </div>
              </div>

              <div className={styles.technologies}>
                {project.technologies
                  .slice(0, 3)
                  .map((tech: string, index: number) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                {project.technologies.length > 3 && (
                  <span className={styles.techTag}>
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className={styles.cardFooter}>
                <Link
                  href={`/projects?project=${project.id}`}
                  className={styles.viewButton}
                >
                  View Details
                  <svg
                    className={styles.arrowIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className={styles.cardOverlay}></div>
          </div>
        ))}
      </div>

      <div className={styles.moreProjects}>
        <Link href="/projects" className={styles.moreButton}>
          View All Projects
          <svg
            className={styles.arrowIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </>
  );
});

ProjectsContent.displayName = "ProjectsContent";

export default ProjectsContent;
