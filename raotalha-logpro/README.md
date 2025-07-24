# raotalha-logpro

`raotalha-logpro` is a VS Code extension for efficiently **filtering `.log` and `.txt` files** using a **WebAssembly-powered Rust module**. It allows developers to quickly extract relevant information from large log files without leaving the editor.

![filtering-demo](images/filtering-demo.png)

---

## ✨ Features

* 🪵 Supports `.log` and `.txt` files only
* 🧠 Uses a WebAssembly-compiled Rust module for fast in-browser filtering
* 🔍 Prompts for a search string and filters logs in-place
* 📄 Opens filtered results in a new side-by-side editor
* 🚫 Protects original logs from being overwritten

---

## 📦 Requirements

* Visual Studio Code (latest recommended)
* No extra dependencies required at runtime
* Rust toolchain only required if you're rebuilding the WASM module

---

## ⚙️ Extension Settings

This extension currently does not expose any settings.

---

## 🐞 Known Issues

* Binary files or files with unsupported encodings may not filter properly.
* Filtering is case-sensitive (enhancement planned).
* Very large files may take some time depending on system performance.

---

## 📘 Release Notes

### 0.0.1

* Initial release
* Integrated WebAssembly backend for log filtering
* Added UI prompt for filter string

### 0.0.2

* Updated Rust wasm placement

---

## 📚 Extension Guidelines

For best practices and contributing help, see:

* [VS Code Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

---

## ✍️ Working with Markdown

To edit this README:

* Split the editor: `Ctrl+\`
* Toggle preview: `Shift+Ctrl+V`
* Trigger suggestions: `Ctrl+Space`

---

## 🔗 More Resources

* [VS Code Extension Docs](https://code.visualstudio.com/api)
* [Markdown Reference](https://www.markdownguide.org/basic-syntax/)

---

Enjoy using **raotalha-logpro** to simplify your log debugging workflow!
