namespace Command {

  abstract class Command {
    protected backup;

    constructor(
      protected app: Application,
      protected editor: Editor,
    ) {}

    saveBackup() {
      this.backup = this.editor.text;
    }

    undo() {
      this.editor.text = this.backup;
    }

    execute() {};
  }

  class Editor {
    text: string;

    getSelection(): string {
      return ''; // ...
    }

    deleteSelection() {
      // ...
    }

    replaceSelection(text) {
      // ...
    }
  }

  // Commands
  class CopyCommand extends Command {
    execute() {
      this.app.clipboard = this.editor.getSelection();
      return false; // no save history
    }
  }

  class CutCommand extends Command {
    execute() {
      this.saveBackup();
      this.app.clipboard = this.editor.getSelection();
      this.editor.deleteSelection();
      return true; // save history
    }
  }

  class PasteCommand extends Command {
    execute() {
      this.saveBackup();
      this.editor.replaceSelection(this.app.clipboard);
      return true;
    }
  }

  class UndoCommand extends Command {
    execute() {
      this.app.undo();
      return false;
    }
  }


  class CommandHistory {
    private history: Command[];

    push(c: Command) {
      this.history.push(c);
    }

    pop(): Command {
      return this.history.pop();
    }
  }


  // CLIENT
  class Button {
    command: Function;

    setCommand(c: Function) {
      this.command = c;
    }

    onClick() {
      this.command();
    }
  }

  class Shortcut {
    onKeyPress(keys: string, command: Function) {}
  }

  class Application {
    clipboard: string;
    editors: Editor[] = [];
    activeEditor: Editor = null;
    history: CommandHistory;
    shortcut: Shortcut;

    createUI() {
      const copy = () => {
        this.executeCommand(new CopyCommand(this, this.activeEditor));
      };
      const copyButton = new Button();
      copyButton.setCommand(copy);
      this.shortcut.onKeyPress('Ctrl+C', copy);

      // etc...
    }

    executeCommand(command: Command) {
      this.history.push(command);
    }

    undo() {
      const command = this.history.pop();
      if (command) {
        command.undo();
      }
    }
  }
}