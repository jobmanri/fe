import { Spacing } from "@/shared/ui/spacing";

import { CompanyListSection } from "./_components/CompanyListSection";
import { FeedSection } from "./_components/FeedSection";

export default function Home() {
  return (
    <>
      <CompanyListSection />
      <Spacing direction="vertical" size={30} />
      <FeedSection />
    </>
  );
}
