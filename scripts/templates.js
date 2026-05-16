
// add notes 
function getNoteTemplate(i){ 
    return `
    <div class ="note-card">
        <h3>${notesTitles[i]}</h3>
        <p>${notes[i]}</p>
        <div class="button-wrapper">
        <button onclick="pushNoteToTrash(${i})">x</button>
        <button onclick="pushNoteToArchive(${i})">A</button>

        </div>
    </div>
    `
    // return `<p>+ title: ${notesTitles[i]} --> ${notes[i]} <button onclick="pushNoteToTrash(${i})">x</button> </p>`;
}

// add to archive
function getArchiveNoteTemplate(a){
    return `
    <div class = "note-card">
         <h3>${archiveNotesTitles[a]}</h3>
        <p>${archiveNotes[a]}</p>
        <div class="button-wrapper">
        <button onclick ="pushArchiveToTrash(${a})">x</button>
        <button onclick="pushNoteToArchive(${a})">A</button>
        </div>
    </div>
    
    
    `
}


// add to trash 
function getTrashNoteTemplate(j){
    return `
     <div class ="note-card">
        <h3>${trashNotesTitles[j]}</h3>
        <p>${trashNotes[j]}</p>
        <div class="button-wrapper">
        <button onclick ="permanentlyDelete(${j})">x</button>
        <button onclick="pushNoteToArchive(${j})">A</button>
        </div>
    </div>
    `
}

// permanently delete
function getPermanentlyDeletedTemplate(k){
    return `
     <div class ="note-card">
        <h3>${permanentlyDeleted[k]}</h3>
        <p>${permanentlyDeleted[k]}</p>
        <div class="button-wrapper">
        <button onclick ="permanentlyDelete(${k})">x</button> 
        <button onclick="pushNoteToArchive(${k})">A</button>
        </div>
    </div>
    `
}