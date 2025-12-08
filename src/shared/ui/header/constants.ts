export interface NavMenuItem {
  label: string;
  href: string;
}

export const NAV_MENU_ITEMS: NavMenuItem[] = [
  {
    label: "홈",
    href: "/",
  },
  {
    label: "채용정보",
    href: "/jobs",
  },
  {
    label: "기업정보",
    href: "/companies",
  },
];
