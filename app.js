/* let myLibrary = [];



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
} */

/* Creating Modal */

/* const addBookButton = document.querySelector("#add-book");

const newBookModal = document.createElement("dialog");
newBookModal.classList = "new-book-modal";
newBookModal.style.height = "400px";
newBookModal.style.width = "300px";
newBookModal.style.textAlign = "center";

const modalContent = document.createElement("div");
modalContent.textContent = "This is a Modal";

const bookContainer = document.querySelector("#plus-symbol");
bookContainer.appendChild(newBookModal);

const modalClose = document.createElement("button");
modalClose.textContent = "Close";
modalClose.style.marginTop = "20px";

newBookModal.appendChild(modalContent);
newBookModal.appendChild(modalClose);

addBookButton.addEventListener("click", () => {
	newBookModal.showModal();
});

modalClose.addEventListener("click", () => {
	newBookModal.close();
}); */

const addBookButton = document.querySelector("#add-book");
const newBookModal = document.querySelector(".new-book-modal");
const modalClose = document.querySelector("#modal-close");

addBookButton.addEventListener("click", () => {
	newBookModal.show();
});

modalClose.addEventListener("click", () => {
	newBookModal.close();
});

/* const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
	dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
	dialog.close();
});
 */
