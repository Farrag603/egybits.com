import Image from "next/image";
import cn from "classnames";
import styles from "./Loader.module.sass";

type Props = {
  hidden: boolean;
};

const Loader = ({ hidden }: Props) => (
  <div className={cn(styles.loader, { [styles.hidden]: hidden })}>
    <div className={styles.logo}>
      <svg viewBox="0 0 56 56">
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
    </div>
    <div className={styles.circle}></div>
  </div>
);

export default Loader;
