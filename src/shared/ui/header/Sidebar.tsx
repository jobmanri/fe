"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as styles from "@/shared/ui/header/sidebar.css";
import { X } from "lucide-react";
import { NAV_MENU_ITEMS } from "@/shared/ui/header";
import { KeyboardEvent } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const overlayClass = `${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`;
  const sidebarClass = `${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onClose();
    }
  };

  return (
    <>
      <div
        className={overlayClass}
        onClick={onClose}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="메뉴 닫기"
        aria-hidden={!isOpen}
      />

      <aside className={sidebarClass} aria-hidden={!isOpen}>
        <div className={styles.sidebarHeader}>
          <button className={styles.closeButton} onClick={onClose} aria-label="닫기">
            <X color="black" />
          </button>
        </div>

        <div className={styles.sidebarActions}>
          <Link href="/login" className={styles.sidebarLoginButton} onClick={onClose}>
            로그인
          </Link>
          <Link href="/signup" className={styles.sidebarSignupButton} onClick={onClose}>
            회원가입
          </Link>
        </div>

        <nav className={styles.sidebarNav}>
          <ul className={styles.sidebarMenu}>
            {NAV_MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.sidebarLink} ${pathname === item.href ? styles.sidebarLinkActive : ""}`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
