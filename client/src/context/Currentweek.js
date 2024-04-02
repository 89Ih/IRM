 export  function getCurrentWeekOfMonth() {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const diff = now.getDate() + startOfMonth.getDay() - 1;
    return Math.ceil(diff / 7);
  }

 export function getCurrentWeekofYear() {
    const now = new Date();
    const onejan = new Date(now.getFullYear(), 0, 1);
    const millisecondsInDay = 86400000; // 1000 * 60 * 60 * 24
    const currentDayOfYear = Math.ceil((now - onejan) / millisecondsInDay);
    return Math.ceil(currentDayOfYear / 7);
  }
  
  const date = new Date();
  const currentWeekOfMonth = getCurrentWeekOfMonth();
  const currentWeekOfYear = getCurrentWeekofYear();

 export const dateInfo ={
    date: new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date),
    year: date.getFullYear(),
    month: new Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
    week: `0${currentWeekOfMonth}`,
    woy: currentWeekOfYear,
  }