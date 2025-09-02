import { useState } from "react";
import { Collapse } from "react-collapse";
import cn from "classnames";
import styles from "./Item.module.sass";

type Props = {
  item: {
    id: string;
    question: string;
    answer: string;
  };
  index: number;
};

const Item = ({ item, index }: Props) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div
      className={cn(styles.item, {
        [styles.active]: activeId === item.id,
      })}
      key={item.id}
    >
      <div
        className={styles.question}
        onClick={() => setActiveId(activeId === item.id ? null : item.id)}
      >
        <div className={styles.number}>
          {`${index < 10 ? "0" : ""}${index}.`}
        </div>
        <div className={styles.title}>{item.question}</div>
        <div className={styles.icon}></div>
      </div>
      <Collapse isOpened={activeId === item.id}>
        <div className={styles.answer}>{item.answer}</div>
      </Collapse>
      <div className={styles.substrate}></div>
    </div>
  );
};

export default Item;
