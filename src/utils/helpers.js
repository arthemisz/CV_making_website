export const generateId = () => {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).substring(2, 10);
};

export const formatMonthYear = (dateString) => {
  if (!dateString) return "";
  const [year, month] = dateString.split("-");
  if (!month) return year;
  
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString(undefined, { month: "short", year: "numeric" });
};