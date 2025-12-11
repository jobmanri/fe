export interface Company {
  id: number;
  nameKr: string;
  nameEn: string;
}

export const COMPANIES: Company[] = [
  { id: 1, nameKr: "토스", nameEn: "Toss" },
  { id: 2, nameKr: "직항 랩스", nameEn: "Zighang" },
  { id: 3, nameKr: "당근마켓", nameEn: "Dangn" },
  { id: 4, nameKr: "라인플러스", nameEn: "LINE+" },
  { id: 5, nameKr: "쿠팡", nameEn: "Coupang" },
];
