import { toWords_ } from './toWords';

export const toOrdinal_ = (number) => {
  const words = toWords_(number);
  // Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)
  if (
    /(hundred|thousand|(m|b|tr|quadr)illion)$/.test(words) ||
    /teen$/.test(words)
  ) {
    return `${words}th`;
  }
  // Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
  else if (/y$/.test(words)) {
    return words.replace(/y$/, 'ieth');
  }
  // Ends with one through twelve
  else if (
    /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/.test(
      words,
    )
  ) {
    const ordinalLessThanThirteen = {
      zero: 'zeroth',
      one: 'first',
      two: 'second',
      three: 'third',
      four: 'fourth',
      five: 'fifth',
      six: 'sixth',
      seven: 'seventh',
      eight: 'eighth',
      nine: 'ninth',
      ten: 'tenth',
      eleven: 'eleventh',
      twelve: 'twelfth',
    };
    return words.replace(
      /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,
      (_, numberWord) => ordinalLessThanThirteen[numberWord],
    );
  }
  return words;
};
export const toOrdinal = toOrdinal_;

export default toOrdinal;
