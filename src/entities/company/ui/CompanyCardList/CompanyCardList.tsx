import React from "react";

import { Company } from "@/entities/company/mock";
import { CompanyCard } from "@/entities/company/ui/CompanyCard";

import * as styles from "./companyCardList.css";

interface CompanyCardListProps {
  companies: Company[];
}

export const CompanyCardList = ({ companies }: CompanyCardListProps) => {
  return (
    <nav>
      <ul className={styles.cardList}>
        {companies.map((company) => (
          <li key={company.id} className={styles.cardItem}>
            <CompanyCard company={company} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
