import { Header } from "@/shared/ui/header";

import * as styles from "./layout.css";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className={styles.bodyWithHeader}>{children}</main>
    </>
  );
}
