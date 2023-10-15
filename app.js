let myLibrary = [];

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

function addBookToLibrary(title, author, pages, read) {
	const newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
}

function displayLibrary() {
	const bookContainer = document.querySelector(".book-container");

	const bookCards = bookContainer.querySelectorAll(".book-card");
	bookCards.forEach((bookCard) => {
		if (bookCard.id !== "add-book") {
			bookContainer.removeChild(bookCard);
		}
	});

	for (let i = 0; i < myLibrary.length; i++) {
		const book = myLibrary[i];
		const card = document.createElement("div");
		card.className = "book-card";

		if (book.read) {
			card.classList.add("green-background");
		} else {
			card.classList.add("red-background");
		}

		card.innerHTML = `
	
					<div class="top-book-card">
						<div class="book-title">${book.title}</div>

						<p class="book-author">
							By <span>${book.author}</span>
						</p>
					</div>
					<p class="book-pages">Length: <span>${book.pages} pages</span></p>
					<p class="read-status">Status: <span>${
						book.read ? "Read" : "Not Read"
					}</span></p>

					<div class="book-card-bottom">

						<div class="card-buttons-container">
							<svg
								class="book-edit book-card-buttons"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<title>pencil-box-outline</title>
								<path
									d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z"
								/>
							</svg>
							<svg
								class="book-delete book-card-buttons"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<title>delete-outline</title>
								<path
									d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
								/>
							</svg>
						</div>
					</div>
				
	`;

		bookContainer.appendChild(card);
	}
}

///////////
/* Modal */
///////////

const addBookButton = document.querySelector("#plus-symbol");
const newBookModal = document.querySelector(".new-book-modal");
const modalClose = document.querySelector("#modal-close");
const submitButton = document.querySelector('button[type="submit"');

addBookButton.addEventListener("click", () => {
	newBookModal.show();
});

modalClose.addEventListener("click", () => {
	newBookModal.close();
});

submitButton.addEventListener("click", (event) => {
	event.preventDefault();
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const pages = document.getElementById("pages").value;
	const read = document.getElementById("read").checked;

	addBookToLibrary(title, author, pages, read);
	displayLibrary();

	newBookModal.close();
});

/* Edit Card */

const editButton = document.querySelector(".edit-button");
editButton.addEventListener("click", (event) => {});
