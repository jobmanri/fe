import { COMPANIES } from "@/entities/company/mock";
import { CompanyCardList } from "@/entities/company/ui/CompanyCardList";

import { SearchForm } from "@/features/search-company/ui/SearchForm";

import { Container } from "@/shared/container/Container";

export const CompanyListSection = () => {
  return (
    <Container>
      <header>
        <span>잡만리 · 취준생을 위한 커뮤니티</span>
        <h1>원하는 회사를 검색하고 피드를 바로 확인하세요</h1>
        <p>신입·중고 취준생, 직군별 최신 후기와 쪽지로 바로 대화할 수 있어요.</p>
      </header>

      <SearchForm />

      <CompanyCardList companies={COMPANIES} />
    </Container>
  );
};
