// lib/userPrompt.js
async function promptUser() {
  try {
    // Use dynamic import to load inquirer
    const inquirer = (await import('inquirer')).default;

    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal):',
      },
    ]);

    return userInput;
  } catch (error) {
    console.error('Error loading inquirer:', error);
    throw error; // Rethrow the error for handling in the calling code
  }
}

module.exports = { promptUser };
