"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import * as styles from "@/shared/ui/header/header.css";
import { SearchBar, Sidebar, NavigationMenu } from "@/shared/ui/header";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerWrapped}>
          <h1 className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              잡만리
            </Link>
          </h1>

          <div className={styles.navSearchContainer}>
            <NavigationMenu />
            <SearchBar />
          </div>

          <div className={styles.funcActions}>
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setIsSidebarOpen(true)}
              aria-label="메뉴 열기"
            >
              <Menu size={24} color="black" />
            </button>
            <Link href="/login" className={styles.loginButton}>
              로그인
            </Link>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
