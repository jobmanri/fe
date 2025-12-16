import { Badge } from "@/shared/ui/badge/Badge";

import * as styles from "./feedContent.css";

export const FeedContent = () => {
  return (
    <section className={styles.contentContainer}>
      <p className={styles.contentBody}>피드 내용</p>
      <div className={styles.hashtagContainer}>
        <Badge>태그1</Badge>
        <Badge>태그2</Badge>
      </div>
    </section>
  );
};
