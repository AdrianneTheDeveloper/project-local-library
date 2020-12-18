'use strict';

// Function should return account object that has matching ID.
// Takes 2 args.
// Use find method to find first matching ID.
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

//Function should return array passed through sorted alphabetically by last name.
// Use sort method and point to last property of accounts.name key.
function sortAccountsByLastName(accounts) {
  return accounts.sort((name1, name2) =>
    name1.name.last.toLowerCase() > name2.name.last.toLowerCase() ? 1 : -1
  );
}

// Function should return a number representing how many times an account's ID has appeared in a book's borrow' array.
// 1. Get access to account's ID.
// 2. Get access to every book object's borrows array.
// 3. Loop through borrows array.
// 4. Check if index's borrow value matches account's ID.
// 5. Push matching values into an empty array.
// 6. Return array length.
function numberOfBorrows(account, books) {
  const idNumber = account.id;
  let peopleWhoBorrowed = [];
  for (let index = 0; index < books.length; index++) {
    for (let indexTwo = 0; indexTwo < books[index].borrows.length; indexTwo++) {
      if (books[index].borrows[indexTwo].id === idNumber) {
        peopleWhoBorrowed.push(idNumber);
      }
    }
  }
  return peopleWhoBorrowed.length;
}

/* Function should return an array of books and authors that represents 
all books currently checked out by the given account.*/
// Authors object should be embedded in books object.
// 1. Get access to account's ID number.
// 2. Get access to every book's borrows array.
// 3. Filter out instances of books.borrows where Id matches account Id and returned is false. (for loop 1)
// 4. Add matching author into book's array as new property. (for loop 2)
// 5. Return new array.

function getBooksPossessedByAccount(account, books, authors) {
  const {id} = account;
  let borrowedNotReturned = [];
  for (let index = 0; index < books.length; index++) {
    for (let indexTwo = 0; indexTwo < books[index].borrows.length;indexTwo++) {
      if (books[index].borrows[indexTwo].id === id && books[index].borrows[indexTwo].returned === false) {
        borrowedNotReturned.push(books[index]);
      }
    }
  } 
  for (let index = 0; index < authors.length; index++) {
    for (let indexTwo = 0; indexTwo < borrowedNotReturned.length; indexTwo++) {
      if(authors[index].id === borrowedNotReturned[indexTwo].authorId) {
        borrowedNotReturned[indexTwo].author = authors[index];
      }
    }
  } return borrowedNotReturned;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
