"use client";
import { useState } from "react";

import { Heart, MessageCircle } from "lucide-react";

import * as styles from "./feedFooter.css";

export const FeedFooter = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.statsContainer}>
        <button className={styles.likeContainer} aria-label={isLiked ? "좋아요 취소" : "좋아요"}>
          <Heart
            size={16}
            className={styles.likeButton}
            onClick={() => setIsLiked(!isLiked)}
            fill={isLiked ? "#EF4444" : "none"}
            stroke={isLiked ? "none" : "#64748B"}
            aria-hidden="true"
          />
          {/** TODO - 좋아요,댓글 수 props */}
          <span>좋아요</span>
          <span aria-label={`현재 좋아요 개수 ${112}개`}>112</span>
        </button>
        <div className={styles.commentCount}>
          <MessageCircle size={16} />
          <span>댓글</span>
          <span>7</span>
        </div>
      </div>

      <div className={styles.messageContainer}>
        <button className={styles.messageButton}>쪽지 보내기</button>
      </div>
    </footer>
  );
};
