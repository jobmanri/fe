import * as styles from "@/shared/ui/header/searchBar.css";

export function SearchBar() {
  return (
    <section role="search" className={styles.searchSection}>
      <input
        type="search"
        placeholder="관심있는 기업을 검색해보세요."
        className={styles.searchInput}
        autoComplete="off"
      />
    </section>
  );
}
