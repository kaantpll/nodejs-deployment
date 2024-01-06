import bcrypt from "bcrypt";
import { shuffle } from "lodash";
export async function generateHash(password: string) {
  return await bcrypt.hash(password, 10);
}

export function generateCode() {
  return "CODE";
}
export function generateExpiresAt() {
  const currentDate = new Date();
  currentDate.setMinutes(currentDate.getMinutes() + 5);
  return currentDate;
}
