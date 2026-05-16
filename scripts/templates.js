
// add notes 
function getNoteTemplate(indexNote){ 
    return `
    <div class ="note-card">
        <h3>${notesTitles[indexNote]}</h3>
        <p>${notes[indexNote]}</p>
        <div class="button-wrapper">
        <button onclick="pushNoteToTrash(${indexNote})">Trash</button>
        <button onclick="pushNoteToArchive(${indexNote})">Archive</button>

        </div>
    </div>
    `
    // return `<p>+ title: ${notesTitles[i]} --> ${notes[i]} <button onclick="pushNoteToTrash(${i})">x</button> </p>`;
}

// add to archive
function getArchiveNoteTemplate(indexArchive){
    return `
    <div class = "note-card">
         <h3>${archiveNotesTitles[indexArchive]}</h3>
        <p>${archiveNotes[indexArchive]}</p>
        <div class="button-wrapper">
        <button onclick ="pushArchiveToTrash(${indexArchive})">Trash</button>
        <button onclick="pushArchiveToNotes(${indexArchive})">Unarchive</button>
        </div>
    </div>
    
    
    `
}


// add to trash 
function getTrashNoteTemplate(indexTrash){
    return `
     <div class ="note-card">
        <h3>${trashNotesTitles[indexTrash]}</h3>
        <p>${trashNotes[indexTrash]}</p>
        <div class="button-wrapper">
        <button onclick ="permanentlyDelete(${indexTrash})">Delete</button>
        <button onclick="recoverNote(${indexTrash})">Recover</button>
        </div>
    </div>
    `
}


// permanently delete
// function getPermanentlyDeletedTemplate(indexDeleted){
//     return `
//      <div class ="note-card">
//         <h3>${permanentlyDeletedTitles[indexDeleted]}</h3>
//         <p>${permanentlyDeleted[indexDeleted]}</p>
//     </div>
//     `
// }
