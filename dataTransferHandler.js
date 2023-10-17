const fileOperations = require('./fileOperations.js');
const readline = require('readline');

const dataTransfer = (userInput) => {
  const [dfile, tfile] = userInput.split(':'); // Split the input into source and target files
  return fileOperations.Append(tfile, dfile);
};

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLineInterface.question('Please specify the source (first) and target file (second) for data transfer (separated by a colon: ":"): ', (userInput) => {
  dataTransfer(userInput)
    .then(result => {
      console.log(result);
      readLineInterface.close();
    })
    .catch(error => {
      console.error(error);
      readLineInterface.close();
    });
});