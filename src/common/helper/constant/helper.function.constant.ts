import ms from 'ms';

export function seconds(value: string): number {
  return ms(value) / 1000;
}
