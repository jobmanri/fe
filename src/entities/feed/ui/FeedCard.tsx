import { FeedContent, FeedFooter, FeedHeader } from "@/entities/feed/ui";

import * as styles from "./feedCard.css";

export const FeedCard = () => {
  return (
    <article className={styles.cardContainer}>
      <FeedHeader />
      <FeedContent />
      <FeedFooter />
    </article>
  );
};
