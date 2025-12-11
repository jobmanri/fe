import React from "react";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Company } from "@/entities/company/mock";

import * as styles from "./companyCard.css";

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard = ({ company }: CompanyCardProps) => {
  // TODO : href 경로 데이터 받아와서 넘기는 것 남음
  return (
    <Link href="#" className={styles.cardLink}>
      <div>
        <div className={styles.cardHeader}>
          <div className={styles.companyNameKr}>{company.nameKr}</div>
          <ArrowUpRight />
        </div>
        <div className={styles.companyNameEn}>{company.nameEn}</div>
      </div>
    </Link>
  );
};
