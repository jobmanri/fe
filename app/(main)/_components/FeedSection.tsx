import { FeedCard } from "@/entities/feed/ui/FeedCard";

import { Container } from "@/shared/container/Container";

import * as styles from "./feedSection.css";

//TODO - 반응형해야함
export const FeedSection = () => {
  return (
    <Container>
      <header className={styles.header}>
        <h2 className={styles.h2}>잡만리에서 지금 화제인 글</h2>
        <span className={styles.span}>실시간 좋아요 & 트렌드</span>
      </header>

      <div className={styles.cardGrid}>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
    </Container>
  );
};
