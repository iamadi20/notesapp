const yargs=require('yargs');
const chalk=require('chalk');
const notes=require('./notes.js');
yargs.version('13.4.2');
//Add a new note
yargs.command({
    command:'add',
    describe:'Add a new note!',
    builder:
    {
    title:{
        describe:'Note title is required',
        demandOption:true,
        type:'string'
    },
     body:{
         describe:'Body of Note',
         demandOption:true,
         type:'string'
     }
},
    handler(argv)
    {
        notes.addNote(argv.title,argv.body);
    }
})
// Remove a note
yargs.command({
    command:'remove',
    describe:'Remove a note!',
    builder:
    {
        title:{
            describe:'Note title is required',
            demandOption:true,
            type:"string"
        }
        
    },
    handler(argv)
    {
        notes.removeNote(argv.title);
    }
})
// List all notes
yargs.command({
    command:'list',
    describe:'lists all notes!',
    handler(argv)
    {
        notes.listNotes(argv.title);
    }
})
// Read all notes
yargs.command({
    command:'read',
    describe:'Reads all notes!',
    builder:{
        title:{
            describe:'Note title Required',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv)
    {
        notes.readNotes(argv.title);
    }
})
yargs.parse();








 
