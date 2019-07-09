'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.languages.registerDocumentFormattingEditProvider(
        { scheme: 'file' },
        {
            provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
                vscode.commands.executeCommand('editor.action.reindentlines');

                return [];
            }
        }
    );
}
