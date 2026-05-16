// display notes:
// I need notes to display --> in an array
let notesTitles = ["To-do", "Reminder"];
let notes = ["clean kitchen", "book train ticket"];

// archive array
let archiveNotesTitles = [];
let archiveNotes = [];

// trash array
let trashNotesTitles = [];
let trashNotes = [];

// permanently delete from trash
let permanentlyDeletedTitles = [];
let permanentlyDeleted = [];

// define where notes are displayed --> render notes into content div with for loop / empty content div before rendering into it
// when are notes displayed
// local storage???

function renderNotes() {
  getFromLocalStorage();

  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let i = 0; i < notes.length; i++) {
    contentRef.innerHTML += getNoteTemplate(i);
  }
}

// function for archive

function renderArchiveNotes() {
  let archiveContentRef = document.getElementById("archive_content");
  archiveContentRef.innerHTML = "";
  for (let a = 0; a < archiveNotes.length; a++) {
    archiveContentRef.innerHTML += getArchiveNoteTemplate(a);
  }
}

// function for trash --> render notes into trash-content div
function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (let j = 0; j < trashNotes.length; j++) {
    trashContentRef.innerHTML += getTrashNoteTemplate(j);
  }
}

// permanently delete note from trash function
function renderPermanentlyDeleted() {
  let permanentlyDeletedRef = document.getElementById("permanently_deleted");
  permanentlyDeletedRef.innerHTML = "";

  for (let k = 0; k < permanentlyDeleted.length; k++) {
    permanentlyDeletedRef.innerHTML += getPermanentlyDeletedTemplate(k);
  }
}

// add notes input field --> user defines input
// read input
// save input --> push input to notes array
// display input

function addNote() {
  let noteTitleRef = document.getElementById("note_input_title");
  let noteInputRef = document.getElementById("note_input");

  let noteTitle = noteTitleRef.value;
  let noteInput = noteInputRef.value;

  notesTitles.push(noteTitle);
  notes.push(noteInput);

  saveToLocalStorage();

  renderNotes();

  noteTitleRef.value = "";
  noteInputRef.value = "";
}

// archive notes
// [0] because the spliced item is going to be at index 0 in the variable arhciveNote

function pushNoteToArchive(i) {
  let archiveNoteTitle = notesTitles.splice(i, 1);
  archiveNotesTitles.push(archiveNoteTitle[0]);

  let archiveNote = notes.splice(i, 1);
  archiveNotes.push(archiveNote[0]);

  renderNotes();
  renderArchiveNotes();
}

function pushArchiveToTrash(a) {
  let trashNoteTitle = archiveNotesTitles.splice(a, 1);
  trashNotesTitles.push(trashNoteTitle[0]);

  let trashNote = archiveNotes.splice(a, 1);
  trashNotes.push(trashNote[0]);

  renderArchiveNotes();
  renderTrashNotes();
}

// push notes to trash
// which note must be deleted
// when must the note be deleted
// update displayed notes

function pushNoteToTrash(i) {
  let trashNoteTitle = notesTitles.splice(i, 1);
  trashNotesTitles.push(trashNoteTitle[0]);

  let trashNote = notes.splice(i, 1);
  trashNotes.push(trashNote[0]);

  renderNotes();
  renderTrashNotes();
}

// permanently delete note

function permanentlyDelete(k) {
  let deletedNoteTitle = trashNotesTitles.splice(k, 1);
  permanentlyDeletedTitles.push(deletedNoteTitle[0]);

  let deletedNote = trashNotes.splice(k, 1);
  permanentlyDeleted.push(deletedNote[0]);
  renderTrashNotes();
  renderPermanentlyDeleted();
}

function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function getFromLocalStorage() {
  const storedNotes = localStorage.getItem("notes");
  let myNewArr = JSON.parse(storedNotes);

  if (myNewArr !== null) {
    notes = myNewArr;
  }
}
