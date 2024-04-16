export function formatTimer(seconds: number) {
  let timeLeft = {
    minute: '00',
    second: '00',
  };
  if (seconds > 0) {
    let minute = Math.floor(seconds / 60).toString();
    let second = Math.floor(seconds % 60).toString();

    if (minute.length === 1) minute = '0' + minute;
    if (second.length === 1) second = '0' + second;
    timeLeft = {
      minute,
      second,
    };
  }
  return timeLeft;
}
