let myLibrary = [];

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

function addBookToLibrary() {
	for (const book of myLibrary) {
	}
}

///////////
/* Modal */
///////////

const addBookButton = document.querySelector("#add-book");
const newBookModal = document.querySelector(".new-book-modal");
const modalClose = document.querySelector("#modal-close");

addBookButton.addEventListener("click", () => {
	newBookModal.show();
});

modalClose.addEventListener("click", () => {
	newBookModal.close();
});

/* bottom buttons */

const submitButton = document.querySelector('button[type="submit"]');

const resetButton = document.querySelector('button[type="reset"]');
