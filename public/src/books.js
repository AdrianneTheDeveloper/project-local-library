'use strict';

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

// Function should return an array with two arrays in it.
// Array 1: Books loaned out that haven't been returned. Array 2: Books that have been returned.
// 1. Declare an empty array for arrays to go in.
// 2. Loop through every book object in books array and filter out ones whose books.borrows[0] is false.
function partitionBooksByBorrowedStatus(books) {
  let bookStatuses = [];
  let booksLoanedOut = [];
  let booksReturned = [];
booksLoanedOut = books.filter((book) => book.borrows[0].returned === false);
booksReturned = books.filter((book) => book.borrows[0].returned === true );
bookStatuses.push(booksLoanedOut, booksReturned);

return bookStatuses;
}

// Function should return an array of all transactions from a book's borrows key.
// Array -> Array of object including account info related to book's borrow transaction and actual transaction info.
// 1. 
function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.forEach(account =>{
    book.borrows.forEach(transaction =>{
      if (transaction.id === account.id){
        let accountObj = {...account}
        accountObj.returned = transaction.returned;
        borrowers.push(accountObj)
      }
    })
  })
return borrowers.slice(0,10)
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
