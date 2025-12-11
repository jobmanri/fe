import React from "react";

import { Search } from "lucide-react";

import * as styles from "./searchForm.css";

export const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <div className={styles.searchIcon}>
        <Search />
      </div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="회사 이름, 키워드, 태그로 검색하세요"
        aria-label="회사 검색"
      />
    </form>
  );
};
