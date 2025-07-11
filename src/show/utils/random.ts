import { ShowStatus } from '../entities/show.entity';

export function randomBoolean(id: string, chance: number[]): boolean {
  if (!id || id.length === 0) return false;
  const idStr = String(id);
  const lastChar = idStr.charAt(idStr.length - 1);
  const lastDigit = parseInt(lastChar, 10);
  if (isNaN(lastDigit)) return false;
  return chance.includes(lastDigit);
}

export function randomShowStatus(id: string): ShowStatus {
  const statuses = [
    'new',
    'popular',
    'trending',
    'upcoming',
    'classic',
  ] as const;
  if (!id || id.length === 0) return statuses[0];
  const lastDigit = parseInt(id[id.length - 1], 10);
  if (isNaN(lastDigit)) return statuses[0];
  // Just modulo the last digit by the statuses length
  const index = lastDigit % statuses.length;
  return statuses[index];
}
