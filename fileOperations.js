const fs = require('fs');

const Read = (filename, encoding) => {
    const read = fs.readFileSync(filename, encoding);
    return new Promise((resolve, reject) => {
        try {
            resolve(read);
        } catch (err) {
            reject(err)
        }
    })

}

const Append = (targetPath, dataPath) => {
    return new Promise((resolve, reject) => {
        // Read the data from the dataPath file
        fs.readFile(dataPath, 'utf-8', (error, data) => {
          if (error) {
            reject(`ERROR WHILE READING DATA FILE: ${error}`);
          } else {
            // Append the read data to the targetPath file
            fs.appendFile(targetPath, data, (error) => {
              if (error) {
                reject(`ERROR WHILE APPENDING DATA: ${error}`);
              } else {
                resolve('Data Appended Successfully.');
              }
            });
          }
        });
      });
}

module.exports = {
    Read,
    Append
}