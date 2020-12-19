"use strict";

function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

// Returns number of books in the library that have not been returned yet.

function booksBorrowedCount(books) {
  const booksLoaned = books.filter(
    (book) => book.borrows[0].returned === false
  );
  return booksLoaned.length;
}
// Returns an array of 5 objects or less that represents the most common genres
// Ordered from most common to least.
/* Object structure -> {
  name: count
}*/
function sortArray(array) {
  return array.sort((element1, element2) => (element1.count > element2.count ? -1 : 1)).slice(0, 5);
};

function getMostCommonGenres(books) {
  let genreList = books.map((book) => book.genre);
  let countedGenres = genreList.reduce((allGenres, genre) => {
    if (genre in allGenres) {
      allGenres[genre]++;
    } else {
      allGenres[genre] = 1;
    }
    return allGenres;
  }, {});
  //console.log(countedGenres);
  let genreData = [];
  for (let key in countedGenres) {
    genreData.push({
      name: `${key}`,
      count: countedGenres[key],
    });
  }

  return sortArray(genreData);
}

// Returns an array contained five objects or less that represents the most
// popular books in the library.
// Popularity is represented by the number of times a book has been borrowed.
// Sort books from greatest to least based on books.borrowed array.
function getMostPopularBooks(books) {
  let borrowed = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));
  return sortArray(borrowed);
}

// Returns an array containing 5 objects or less that represents the most
// popular books in the library.
// Popularity is represented by finding all books written by author and then adding up the # of times those
// have been borrowed.
function getMostPopularAuthors(books, authors) {
  let authorBorrows = [];
  for (let key in authors) {
    let booksByAuthor = books.filter((book) => book.authorId == authors[key].id);
    
    let count = 0;
    let authorObj = {
      name: `${authors[key].name.first} ${authors[key].name.last}`
    };

    for (let key in booksByAuthor) {
      count += booksByAuthor[key].borrows.length;
    }
    authorObj.count = count;
    authorBorrows.push(authorObj);
  }

  return sortArray(authorBorrows);
}
module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
  sortArray
};
