export const greetingFormatting = (name: string, time: number) => {
  let timePeriod = '';

  if (time >= 22 || time < 6) {
    timePeriod = 'night';
  } else if (time >= 18) {
    timePeriod = 'evening';
  } else if (time >= 12) {
    timePeriod = 'afternoon';
  } else if (time >= 6) {
    timePeriod = 'morning';
  }
  return name ? `Good ${timePeriod}, ${name}!` : `Good ${timePeriod}!`;
};
