"use client";
import { useState } from "react";

import { Heart, MessageCircle } from "lucide-react";

import * as styles from "./feedFooter.css";

export const FeedFooter = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.statsContainer}>
        <div className={styles.likeButton}>
          <Heart
            onClick={() => setIsLiked(!isLiked)}
            size={16}
            fill={isLiked ? "#EF4444" : "none"}
            stroke={isLiked ? "none" : "#64748B"}
            className={`${styles.heartIcon} ${isLiked ? styles.heartIconLiked : ""}`}
          />
          <span>좋아요</span>
          <span>112</span>
        </div>
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
