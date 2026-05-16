// notes array
let notesTitles = ["A", "B"];
let notes = ["1", "2"];

// archive array
let archiveNotesTitles = [];
let archiveNotes = [];

// trash array
let trashNotesTitles = [];
let trashNotes = [];

// permanently delete from trash
let permanentlyDeletedTitles = [];
let permanentlyDeleted = [];




function init(){
  getFromLocalStorage();
  renderNotes();

}

// define where notes are displayed --> render notes into content div with for loop / empty content div before rendering into it
// when are notes displayed --> at onload
// local storage???

function renderNotes() {

  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

// function for archive
function renderArchiveNotes() {
  let archiveContentRef = document.getElementById("archive_content");
  archiveContentRef.innerHTML = "";
  for (let indexArchive = 0; indexArchive < archiveNotes.length; indexArchive++) {
    archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchive);
  }
}

// function for trash --> render notes into trash-content div
function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (let indexTrash = 0; indexTrash < trashNotes.length; indexTrash ++) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrash);
  }
}

// permanently delete note from trash function
function renderPermanentlyDeleted() {
  let permanentlyDeletedRef = document.getElementById("permanently_deleted");
  permanentlyDeletedRef.innerHTML = "";

  for (let indexDeleted = 0; indexDeleted < permanentlyDeleted.length; indexDeleted ++) {
    permanentlyDeletedRef.innerHTML += getPermanentlyDeletedTemplate(indexDeleted);
  }
}




// add notes input field --> user defines input + button save note and onclick 
// read input
// save input --> push input to notes array
// display input
// noteTitleRef.value = ""; clears value of input field so it's empty

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

function pushNoteToArchive(indexNote) {
  let archiveNoteTitle = notesTitles.splice(indexNote, 1);
  archiveNotesTitles.push(archiveNoteTitle[0]);

  let archiveNote = notes.splice(indexNote, 1);
  archiveNotes.push(archiveNote[0]);

  renderNotes();
  renderArchiveNotes();
}

// push notes to trash
// which note must be deleted
// when must the note be deleted
// update displayed notes

function pushNoteToTrash(indexNote) {
  let trashNoteTitle = notesTitles.splice(indexNote, 1);
  trashNotesTitles.push(trashNoteTitle[0]);

  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote[0]);

  renderNotes();
  renderTrashNotes();
}




function pushArchiveToNotes(indexArchive){
let notesTitle = archiveNotesTitles.splice(indexArchive, 1);
notesTitles.push(indexArchive[0]);

let note = archiveNotes.splice(indexArchive, 1);
notes.push(indexArchive[0]);

renderNotes();
renderArchiveNotes();
}


function pushArchiveToTrash(indexArchive) {
  let trashNoteTitle = archiveNotesTitles.splice(indexArchive, 1);
  trashNotesTitles.push(trashNoteTitle[0]);

  let trashNote = archiveNotes.splice(indexArchive, 1);
  trashNotes.push(trashNote[0]);

  renderArchiveNotes();
  renderTrashNotes();
}





function recoverNote (indexTrash){
  let recoveredNoteTitle = trashNotesTitles.splice(indexTrash, 1);
  notesTitles.push(recoveredNoteTitle[0]);

  let recoveredNote = trashNotes.splice(indexTrash, 1);
  notes.push(recoveredNote[0]);

  renderNotes();
  renderTrashNotes();

}


// permanently delete note --> pushTrashToDelete

function permanentlyDelete(indexTrash) {
  let deletedNoteTitle = trashNotesTitles.splice(indexTrash, 1);
  permanentlyDeletedTitles.push(deletedNoteTitle[0]);

  let deletedNote = trashNotes.splice(indexTrash, 1);
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
