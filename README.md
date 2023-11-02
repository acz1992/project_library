To do:

First Iteration - COMPLETED
Second Iteration:
-Add backend so library stored locally

Completed:
-Set out and style page structure
-Create form in Modal where user can add title, author, pages and whether book has been read or not
-Added edit and remove functions
-Add toggle that switches book's read status
-Make sort function from select form
-Create check box that displays read/ non-read books
-Fix bug that redisplays entire myLibrary array when read-status changed
-Fix form remembering text from last time
-Fix positioning of .book-container

Future Iterations:
-Add text input to allow a brief blurb for each book
-Add Genres and ability to sort by genres
-Add accounts and login (firebase)
-Create Search Function
HTML:

<div class="toolBar-form-row">
<label for="search">Search</label>
<input type="search" name="search" />
</div>

-Create ability to sort by date added

<option value="newest">Newest</option>
<option value="oldest">Oldest</option>
