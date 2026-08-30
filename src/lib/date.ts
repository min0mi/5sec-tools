export const parseLocalDate = (value: string) => { const [y,m,d] = value.split('-').map(Number); return new Date(y, m - 1, d); };
export const formatDate = (date: Date) => `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`;
export const addDays = (value: string, days: number) => { const date = parseLocalDate(value); date.setDate(date.getDate() + days); return date; };
export const daysBetween = (start: string, end: string) => Math.round((parseLocalDate(end).getTime() - parseLocalDate(start).getTime()) / 86400000);
