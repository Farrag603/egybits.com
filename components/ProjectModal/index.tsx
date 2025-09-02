"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./ProjectModal.module.sass";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (!project.images?.length) return;

      if (direction === "prev") {
        setCurrentImageIndex((prev) =>
          prev === 0 ? project.images.length - 1 : prev - 1
        );
      } else {
        setCurrentImageIndex((prev) =>
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }
    },
    [project.images?.length]
  );

  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";

    // Re-enable body scroll when modal is closed
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Handle keyboard events for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "Escape":
          setLightboxOpen(false);
          break;
        case "ArrowLeft":
          e.preventDefault();
          navigateImage("prev");
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateImage("next");
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [lightboxOpen, navigateImage]);

  const openLightbox = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className={styles.modalContent}>
          {/* Project Images/Videos Section */}
          <div className={styles.mediaSection}>
            <h3 className={styles.sectionTitle}>Project Showcase</h3>
            <div className={styles.mediaGrid}>
              {/* Project Images */}
              {project.images?.map((image: string, index: number) => (
                <div key={index} className={styles.mediaItem}>
                  <div
                    className={styles.imageContainer}
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Screenshot ${index + 1}`}
                      width={400}
                      height={300}
                      className={styles.projectImage}
                      priority={false}
                    />
                    <div className={styles.imageOverlay}>
                      <p className={styles.imageCaption}>
                        Screenshot {index + 1}
                      </p>
                      <div className={styles.clickHint}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          <path d="M10 10l4 4m0-4l-4 4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details Section */}
          <div className={styles.detailsSection}>
            <div className={styles.projectOverview}>
              <h3 className={styles.sectionTitle}>Project Overview</h3>
              <p className={styles.detailedDescription}>
                {project.detailedDescription}
              </p>

              <div className={styles.projectMeta}>
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Client</span>
                    <span className={styles.metaValue}>{project.client}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Duration</span>
                    <span className={styles.metaValue}>{project.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Team Size</span>
                    <span className={styles.metaValue}>{project.teamSize}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Category</span>
                    <span className={styles.metaValue}>{project.category}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className={styles.technologiesSection}>
              <h3 className={styles.sectionTitle}>Technologies Used</h3>
              <div className={styles.techGrid}>
                {project.technologies.map((tech: string, index: number) => (
                  <div key={index} className={styles.techCard}>
                    <span className={styles.techName}>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className={styles.challengesSection}>
              <div className={styles.challengesGrid}>
                <div className={styles.challengesColumn}>
                  <h3 className={styles.sectionTitle}>Challenges</h3>
                  <ul className={styles.itemsList}>
                    {project.challenges?.map(
                      (challenge: string, index: number) => (
                        <li key={index} className={styles.listItem}>
                          <span className={styles.bulletPoint}>⚡</span>
                          {challenge}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className={styles.solutionsColumn}>
                  <h3 className={styles.sectionTitle}>Solutions</h3>
                  <ul className={styles.itemsList}>
                    {project.solutions?.map(
                      (solution: string, index: number) => (
                        <li key={index} className={styles.listItem}>
                          <span className={styles.bulletPoint}>✅</span>
                          {solution}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className={styles.resultsSection}>
              <h3 className={styles.sectionTitle}>Results & Impact</h3>
              <div className={styles.resultsGrid}>
                {project.results?.map((result: string, index: number) => (
                  <div key={index} className={styles.resultCard}>
                    <div className={styles.resultIcon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.27 0 2.48.26 3.58.74" />
                      </svg>
                    </div>
                    <span className={styles.resultText}>{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && project.images && (
        <div className={styles.lightboxBackdrop} onClick={closeLightbox}>
          <div
            className={styles.lightboxContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className={styles.lightboxImageContainer}>
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                width={1200}
                height={800}
                className={styles.lightboxImage}
                priority={true}
              />
            </div>

            {/* Navigation buttons */}
            {project.images.length > 1 && (
              <>
                <button
                  className={`${styles.navButton} ${styles.navPrev}`}
                  onClick={() => navigateImage("prev")}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                <button
                  className={`${styles.navButton} ${styles.navNext}`}
                  onClick={() => navigateImage("next")}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </>
            )}

            {/* Image counter */}
            <div className={styles.imageCounter}>
              {currentImageIndex + 1} of {project.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
