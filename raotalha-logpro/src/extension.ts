import * as path from "path";
import * as vscode from "vscode";
import init, { filter_logs } from "./wasm/logpro.js";

export function activate(context: vscode.ExtensionContext) {
  console.log('✅ Extension "raotalha-logpro" is now active!');

  const disposable = vscode.commands.registerCommand(
    "raotalha-logpro.filterLogs",
    async () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showErrorMessage("❌ No active editor with a file open.");
        return;
      }

      const filePath = editor.document.uri.fsPath;
      const fileExt = filePath.split(".").pop()?.toLowerCase() ?? "";

      if (!["log", "txt"].includes(fileExt)) {
        vscode.window.showErrorMessage(
          "⚠️ This extension only supports .log and .txt files."
        );
        return;
      }

      try {
        console.log("📥 Loading WASM module...");

        const wasmPath = vscode.Uri.file(
          path.join(context.extensionPath, "src", "wasm", "logpro_bg.wasm")
        );

        const wasmBytes = await vscode.workspace.fs.readFile(wasmPath);
        await init(wasmBytes);

        const content = editor.document.getText();

        const search = await vscode.window.showInputBox({
          prompt: "🔍 Enter search string (leave blank to show all)",
          placeHolder: "e.g., ERROR, 404, etc.",
        });

        const result = search ? filter_logs(content, search) : content;

        const doc = await vscode.workspace.openTextDocument({
          content: result,
          language: "log",
        });

        await vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside);
        console.log("✅ Filtered log displayed.");
      } catch (err: any) {
        console.error("❌ Error in filterLogs:", err);
        vscode.window.showErrorMessage(`Error filtering logs: ${err.message || err}`);
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {
  console.log("🛑 Extension deactivated.");
}
