# Clean Up React.js 🚀

Clean-Up React is a powerful VS Code extension that automates the tedious process of cleaning up a fresh React installation. It removes boilerplate files and scrubs unnecessary code, letting you start your project with a clean slate in seconds.

## ✨ Features
- **Automatic Deletion**: Removes unnecessary files like `favicon.ico`, `logo192.png`, `App.test.js`, and more from `public/` and `src/` folders.
- **Code Scrubbing**: Cleans up remaining files (`App.js`, `index.js`) by removing extraneous imports and boilerplate comments.
- **Cross-Platform**: Fully compatible with Windows, macOS, and Linux.
- **One-Click Setup**: Organizes your project structure instantly.

## 🛠 Tech Stack
- **Language**: TypeScript / JavaScript
- **Platform**: Visual Studio Code Extension API
- **Environment**: Node.js

## 🚀 Getting Started

### Installation
You can install the extension directly from the VS Code Marketplace:
1. Open **VS Code**.
2. Go to **Extensions** (Ctrl+Shift+X).
3. Search for `Clean Up React`.
4. Click **Install**.

**Marketplace Link:** [Clean Up React](https://marketplace.visualstudio.com/items?itemName=khechoyan.clean-up-react)

## 📖 Usage
1. Open your newly created React project folder in VS Code.
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
3. Type `Clean Up React` and press **Enter**.
4. Watch the extension automatically organize your files!

## 📋 File Operations
| Folder | Action | Files Affected |
| :--- | :--- | :--- |
| `src/` | **Remove** | `App.test.js`, `logo.svg`, `setupTests.js`, `reportWebVitals.js` |
| `public/` | **Remove** | `favicon.ico`, `logo192.png`, `logo512.png`, `manifest.json` |
| `App.js` | **Clean** | Removes default CSS imports and boilerplate JSX |
