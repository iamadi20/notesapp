console.log('Starting notes.js..');
const fs=require('fs');
const chalk=require('chalk');
const getNotes=()=>
{
    return 'Exporting notes';
}
const addNote=(title,body)=>
{
    const notes=loadNote();
    // const duplicateNotes=notes.filter((notes)=>notes.title===title)
    const duplicateNote=notes.find((notes)=>notes.title===title)
         
    debugger;

    if(!duplicateNote)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen('New Note Added!'));
    }else{
        console.log(chalk.bgRed('Note title taken!'));
    }

}
const saveNotes=(notes)=>
{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.JSON',dataJSON);
}
const loadNote=()=>
{
   try{
    const dataBuffer=fs.readFileSync('notes.json');
    const dataJSON=dataBuffer.toString();
    return JSON.parse(dataJSON);
   }catch(e)
   {
       return [];
   }
}

// Function to remove note
const removeNote=(title)=>
{
    const notes=loadNote();
    const deleteNote=notes.filter( (notes)=>
    {
        return notes.title!==title;
    })
    if(deleteNote.length < notes.length)
    {
        
        console.log(chalk.bgGreen('Note removed'));
        saveNotes(deleteNote);
    }else
    {
        console.log(chalk.bgRed('Note not Removed'));
    }
    
    
}
// Function to List notes
const listNotes=()=>
{
    console.log(chalk.bgBlue('Your Notes!!'));
    const notes=loadNote();

    notes.forEach((note)=>{
        console.log("Title:" +note.title);
        
    })

}
// Function to Read notes
const readNotes=(title)=>
{
    const notes=loadNote();
    const readNote=notes.find((readNote)=>readNote.title===title);
    if(readNote)
    {
        console.log(chalk.bgGreen(readNote.title));
        console.log(readNote.body);
    }
    else
    {
        console.log(chalk.bgRed('Not Found!!'));
    }
}
module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}