const { read } = require('fs');
const fileOperations = require('./fileOperations.js');
const readline = require('readline');

const dataTransfer = (i) => {
  const [dfile, tfile] = i.split(':'); // Split the input into source and target files
  return fileOperations.Append(tfile, dfile); // return the result with the imported function: "Append"
};

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askToAppend = async (qa) => {
  readLineInterface.question(qa, (input) => {
    if (input === 'yes'){
        readLineInterface.question('Enter data file path (1) and target file path (2) separated by a colon: ', (userInput) => {
          dataTransfer(userInput)
          .then(result => {
            console.log(`${result}`)
            askToAppend('Would you like to append a text file again? ');
          })
          .catch(error => {
            console.log(`THERE WAS AN ERROR ${error}`)
            askToAppend('Would you like to append a text file again? ');
          });
        })
    }
    else if (input === `no`){
      console.log('Thank you for using FTS. Come back soon!')
      readLineInterface.close();
    }
  });
}

askToAppend('Would you like to append a text file file? ');
