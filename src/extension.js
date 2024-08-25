const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("clean-up-react.cleanup", () => {
      // vscode.window.showInformationMessage("Done!");
      const workspaceFolders = vscode.workspace.workspaceFolders;

      if (!workspaceFolders) {
        vscode.window.showErrorMessage("No workspace folder is open");
        return;
      }

      const rootDir = workspaceFolders[0].uri.fsPath;

      deleteFiles(rootDir);
      changeFiles(rootDir);
    })
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};

// FUNCTIONS

function deleteFiles(rootDir) {
  const deletingFilesPath = [
    `public${path.sep}favicon.ico`,
    `public${path.sep}logo192.png`,
    `public${path.sep}logo512.png`,
    `public${path.sep}manifest.json`,
    `public${path.sep}robots.txt`,
    `src${path.sep}App.css`,
    `src${path.sep}App.test.js`,
    `src${path.sep}index.css`,
    `src${path.sep}logo.svg`,
    `src${path.sep}reportWebVitals.js`,
    `src${path.sep}setupTests.js`,
  ];

  for (let i = 0; i < deletingFilesPath.length; ++i) {
    const filePath = path.join(rootDir, deletingFilesPath[i]);

    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {
        if (err) {
          vscode.window.showErrorMessage(
            `Ошибка при удалении файла: ${err.message}`
          );
        }
      });
    }
  }
}

function changeFiles(rootDir) {
  const workspaceName = (() => {
    const rootDirTokens = rootDir.split(path.sep);
    const length = rootDirTokens.length;
    return rootDirTokens[length - 1];
  })();

  console.log(workspaceName);

  const changingFilesPath = [
    {
      path: `public${path.sep}index.html`,
      fileContent: [
        `<!DOCTYPE html>`,
        `<html lang="en">`,
        `	<head>`,
        `		<meta charset="utf-8" />`,
        `		<meta name="viewport" content="width=device-width, initial-scale=1" />`,
        `		<meta name="theme-color" content="#000000" />`,
        `		<title>App</title>`,
        `	</head>`,
        `	<body>`,
        `		<noscript>You need to enable JavaScript to run this app.</noscript>`,
        `		<div id="root"></div>`,
        `	</body>`,
        `</html>`,
      ],
    },
    {
      path: `src${path.sep}App.js`,
      fileContent: [
        `function App() {`,
        `	return (`,
        `		<div>`,
        `			App`,
        `		</div>`,
        `	);`,
        `}`,
        ``,
        `export default App;`,
      ],
    },
    {
      path: `src${path.sep}index.js`,
      fileContent: [
        `import React from "react";`,
        `import ReactDOM from "react-dom/client";`,
        `import App from "./App";`,
        ``,
        `const root = ReactDOM.createRoot(document.getElementById("root"));`,
        `root.render(<App />);`,
      ],
    },
    {
      path: "README.md",
      fileContent: [`# ${workspaceName}`],
    },
  ];

  for (let i = 0; i < changingFilesPath.length; ++i) {
    const filePath = path.join(rootDir, changingFilesPath[i].path);

    fs.writeFileSync(filePath, changingFilesPath[i].fileContent.join('\n'));
  }
}
