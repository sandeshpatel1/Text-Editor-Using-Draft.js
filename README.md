#!/bin/bash

# Start by setting up the environment and initializing the project

echo "Cloning the repository..."
git clone https://github.com/sandeshpatel1/Text-Editor-Using-Draft.js.git

# Navigate to the project directory
cd Text-Editor-Using-Draft.js

echo "Initializing Git repository..."
git init

# Set up the remote origin
git remote add origin https://github.com/sandeshpatel1/Text-Editor-Using-Draft.js.git

echo "Installing dependencies..."
npm install

# Starting the application locally
echo "Starting the application locally..."
npm start

# Instructions for the user
cat << EOF

# Text Editor Using Draft.js

A simple text editor built using [Draft.js](https://draftjs.org/), featuring functionalities like:

- Heading format (\#)
- Bold format (\*)
- Red line (\*\*)
- Underline format (\*\*\*)
- Save content to local storage
- Retrieve and load saved content from local storage on page refresh

## Features

- **Heading**: Type \`#\` at the beginning of a line and press space to switch the text to a heading.
- **Bold**: Type \`*\` at the beginning of a line and press space to apply bold formatting.
- **Red line**: Type \`**\` at the beginning of a line and press space to apply red color to the text.
- **Underline**: Type \`***\` at the beginning of a line and press space to underline the text.
- **Save**: Save content to the browser's local storage.
- **Load**: Load saved content from local storage on page refresh.

## Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (which includes npm)

## Getting Started

Follow these steps to get the app running locally on your device.

### 1. Clone the repository

First, clone the repository to your local machine.

\`\`\`bash
git clone https://github.com/sandeshpatel1/Text-Editor-Using-Draft.js.git
\`\`\`

### 2. Navigate to the project directory

Change the directory to the project folder:

\`\`\`bash
cd Text-Editor-Using-Draft.js
\`\`\`

### 3. Install dependencies

Install the required dependencies using npm (Node.js package manager):

\`\`\`bash
npm install
\`\`\`

This will install all the necessary dependencies listed in the \`package.json\` file.

### 4. Start the development server

Run the following command to start the app on a local development server:

\`\`\`bash
npm start
\`\`\`

This will start the app and open it in your default web browser, typically at \`http://localhost:3000\`. If you’re working on a different device, ensure that your device is on the same network and replace \`localhost\` with your computer’s IP address (e.g., \`http://192.168.x.x:3000\`).

### 5. Access the app from any device

If you want to run the app on a different device, follow these additional steps:

1. Find your computer's local IP address:
   - **Windows**: Run \`ipconfig\` in Command Prompt and find the \`IPv4 Address\` under your network connection.
   - **Mac/Linux**: Run \`ifconfig\` or \`ip a\` in the terminal and find your \`inet\` address.

2. Make sure your firewall allows traffic on port 3000 (or whichever port the app is using).

3. From your other device's browser, navigate to \`http://<your-ip>:3000\`, where \`<your-ip>\` is the IP address of the computer running the app.

## Project Structure

\`\`\`bash
Text-Editor-Using-Draft.js/
│
├── src/
│   ├── Components/
│   │   ├── Editor.js           # Main Editor Component
│   │   ├── SaveButton.js       # Button to save content to localStorage
│   │   ├── Title.js            # Title component
│   │   └── AppStyles.js        # Custom Styles
│   ├── App.js                  # Main Application Entry Point
│   ├── App.css                 # App-level styles
│   └── index.js                # Entry point for React
│
├── package.json                # Dependencies and project metadata
├── README.md                   # Project documentation
└── .gitignore                  # Git ignore file
\`\`\`

## Saving and Loading Content

- The content is automatically saved to \`localStorage\` when you type and press the \`Save\` button.
- Upon refreshing the page, the app will load the saved content from \`localStorage\` and re-display it in the editor.

## Troubleshooting

- **Issue with dependencies**: If you face any issues during installation or when running the app, try removing the \`node_modules\` folder and \`package-lock.json\` file, and then reinstall the dependencies:
  \`\`\`bash
  rm -rf node_modules package-lock.json
  npm install
  \`\`\`

- **Editor formatting issues**: Ensure that you’re typing the symbols (\`#\`, \`*\`, \`**\`, \`***\`) at the beginning of the line and pressing space immediately to trigger the respective format.

## Built With

- **React**: A JavaScript library for building user interfaces.
- **Draft.js**: A framework for building rich text editors in React.
- **localStorage**: Used for persisting editor content.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Draft.js](https://draftjs.org/) for the rich text editor library.
- [React](https://reactjs.org/) for building the app.

EOF
