import * as R from "ramda";

const publishedInYear = (book, year) => book.year === year;

const titlesForYear = (books, year) => {
  const selected = R.filter(book => publishedInYear(book, year), books);

  return R.map(book => book.title, selected);
};

export default titlesForYear;
