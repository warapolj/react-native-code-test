export function formatDate(date: Date) {
  if (!date) return '-';

  return `${date.toLocaleString('th-TH', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })} น.`;
}
