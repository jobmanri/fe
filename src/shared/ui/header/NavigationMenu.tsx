"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_MENU_ITEMS } from "@/shared/ui/header";
import * as styles from "@/shared/ui/header/navigationMenu.css";

export function NavigationMenu() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navMenu}>
        {NAV_MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className={isActive ? styles.active : ""}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
