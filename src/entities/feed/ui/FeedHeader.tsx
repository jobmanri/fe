import { Badge } from "@/shared/ui/badge/Badge";

import * as styles from "./feedHeader.css";

export const FeedHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.cardHeader}>
        <Badge>태그</Badge>
        <span className={styles.tagText}>피드 분류</span>
      </header>
      <h3 className={styles.cardTitle}>피드 제목</h3>
      <div className={styles.cardMeta}>
        <span>작성자</span>
        <span>날짜</span>
      </div>
    </div>
  );
};
