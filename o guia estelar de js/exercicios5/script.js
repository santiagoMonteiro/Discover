const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente Milionária",
        author: "T. Harv Eker",
      },

      {
        title: "O homem mais rico da Babilônia",
        author: "George S.Clason",
      },

      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },

  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },

      {
        title: "Ansiedade como enfrentar o mal do século",
        author: "Augusto Cury",
      },

      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

function getNumberOfCategories() {
  return booksByCategory.length;
}

function numberOfBooksInEachCategory() {
  for (let categoryObj of booksByCategory) {
    console.log(`${categoryObj.category}: ${categoryObj.books.length} livros`);
  }
}

function getNumberOfAuthors() {
  const authors = [];
  for (let categoryObj of booksByCategory) {
    for (let bookObj of categoryObj.books) {
      if (!authors.includes(bookObj.author)) {
        authors.push(bookObj.author);
      }
    }
  }

  return authors.length;
}

function getBooksOfAuthor(author) {
  for (let categoryObj of booksByCategory) {
    for (let bookObj of categoryObj.books) {
      if (bookObj.author === author) {
        console.log(bookObj.title);
      }
    }
  }
}

console.log(getNumberOfCategories());
console.log();
numberOfBooksInEachCategory();
console.log();
console.log(getNumberOfAuthors());
console.log();
getBooksOfAuthor("Augusto Cury");
console.log();
getBooksOfAuthor("Stephen R. Covey");
