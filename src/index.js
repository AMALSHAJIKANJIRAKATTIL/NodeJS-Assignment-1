const fs = require('fs/promises');

async function myFileWriter(fileName, fileContent) {
  try {
    await fs.writeFile(fileName, fileContent);
  } catch (error) {
    console.log(error);
  }
}

async function myFileReader(fileName) {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function myFileUpdater(fileName, fileContent) {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    const updatedContent = data + fileContent;
    await fs.writeFile(fileName, updatedContent);
  } catch (error) {
    console.log(error);
  }
}

async function myFileDeleter(fileName) {
  try {
    await fs.unlink(fileName);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };

