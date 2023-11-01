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
		// Associate the card with the book's index
		card.dataset.index = i;
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
					<p class="book-pages">Length: <span>${
						book.pages ? book.pages + " pages" : ""
					} </span></p>
					

					<div class="book-card-bottom">
					<p class="read-status">Read? <span>${
						book.read
							? '<svg id="read-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>'
							: `<svg id="not-read-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-circle</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" /></svg>`
					}</span></p>
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

		const editButton = card.querySelector(".book-edit");
		editButton.addEventListener("click", () => {
			// Grab dataset associated with each Book instace
			const bookIndex = card.dataset.index;
			editBookModal.dataset.index = bookIndex;
			// Pass associated instance to opeEditModal
			openEditModal(bookIndex);
		});

		const deleteButton = card.querySelector(".book-delete");
		deleteButton.addEventListener("click", () => {
			// Grab dataset associated with each Book instace
			const bookIndex = card.dataset.index;
			// Remove the book from myLibrary array
			myLibrary.splice(bookIndex, 1);

			// Refresh the displayed book cards
			displayLibrary();
		});

		bookContainer.appendChild(card);
	}
}

///////////
/* Modal */
///////////

const addBookButton = document.querySelector("#plus-symbol");
const newBookModal = document.querySelector(".new-book-modal");
const modalClose = document.querySelector("#new-modal-close");
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

///////////////////
/* Edit & Remove */
///////////////////

/* Edit */

const editBookModal = document.querySelector(".edit-book-modal");

function openEditModal(bookIndex) {
	const book = myLibrary[bookIndex];

	// Fill the edit form fields with the book's details
	document.getElementById("edit-title").value = book.title;
	document.getElementById("edit-author").value = book.author;
	document.getElementById("edit-pages").value = book.pages;
	document.getElementById("edit-read").checked = book.read;

	// Set the bookIndex in the dataset of the edit modal
	editBookModal.dataset.index = bookIndex;

	editBookModal.show();

	// Remove any previous event listeners from the "Confirm" button
	// Stops bug that changes all card
	const previousConfirmEditButton = document.querySelector(
		"#confirm-edit-button"
	);
	if (previousConfirmEditButton) {
		const newConfirmEditButton = previousConfirmEditButton.cloneNode(true);
		previousConfirmEditButton.parentNode.replaceChild(
			newConfirmEditButton,
			previousConfirmEditButton
		);
	}

	// Add an event listener to Confirm button
	const confirmEditButton = document.querySelector("#confirm-edit-button");
	confirmEditButton.addEventListener("click", () => {
		// Retrieve the bookIndex from the dataset of the edit modal
		const bookIndex = editBookModal.dataset.index;
		// Update the book object with the edited details
		book.title = document.getElementById("edit-title").value;
		book.author = document.getElementById("edit-author").value;
		book.pages = document.getElementById("edit-pages").value;
		book.read = document.getElementById("edit-read").checked;

		displayLibrary();
		editBookModal.close();
	});
}

const editModalClose = document.querySelector("#edit-modal-close");
editModalClose.addEventListener("click", () => {
	editBookModal.close();
});

/////////////////
/* Read Toggle */
/////////////////

const bookContainer = document.querySelector(".book-container");
bookContainer.addEventListener("click", (event) => {
	const target = event.target;
	if (target.classList.contains("read-status")) {
		// Retrieve the dataset index associated with the clicked card
		const bookIndex = target.closest(".book-card").dataset.index;
		// Toggle the read property of the book
		myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
		// Update the displayed library
		displayLibrary();
	}
});

////////////////
/* Sort Menus */
////////////////

const sortSelect = document.getElementById("sort-by-menu");
sortSelect.addEventListener("change", () => {
	const selectedValue = sortSelect.value;

	if (selectedValue === "atoz") {
		myLibrary.sort((a, b) => a.title.localeCompare(b.title));
		displayLibrary();
	} else if (selectedValue === "ztoa") {
		myLibrary.sort((a, b) => b.title.localeCompare(a.title));
		displayLibrary();
	}
});

////////////////
/* Filter Menu */
////////////////
