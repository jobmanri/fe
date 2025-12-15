export interface UserSchema {
  id: number;
  email: string;
  role: "NORMAL" | "ADMIN";
}
