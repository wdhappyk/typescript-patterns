namespace ChainOfCommand {

  interface ComponentWithContextualHelp {
    showHelp();
  }

  abstract class Component implements ComponentWithContextualHelp {
    tooltipText: string = null;
    container: Container;

    showHelp() {
      if (this.tooltipText !== null) {
        alert('Help text');
      }
      else {
        this.container.showHelp();
      }
    }
  }

  abstract class Container extends Component {
    protected children: Component[];

    add(child: Component) {
      this.children.push(child);
      child.container = this;
    }
  }

  class Button extends Component {
    constructor(
      public x: number,
      public y: number,
      public width: number,
      public height: number,
      public value: string,
    ) {
      super();
    }
  }

  class Panel extends Container {
    modalHelpText: string = null;

    constructor(
      public x: number,
      public y: number,
      public width: number,
      public height: number,
    ) {
      super();
    }

    showHelp() {
      if (this.modalHelpText !== null) {
        // show modal help
      }
      else {
        super.showHelp();
      }
    }
  }

  class Dialog extends Container {
    wikiPageURL: string = null;

    constructor(
      public title: string
    ) {
      super();
    }

    showHelp() {
      if (this.wikiPageURL !== null) {
        // open page with help
      }
      else {
        super.showHelp();
      }
    }
  }


  // CLIENT
  class Application {
    createUI() {
      const dialog = new Dialog('Budget Reports');
      dialog.wikiPageURL = 'http://...';
      const panel = new Panel(0, 0, 400, 800);
      panel.modalHelpText = 'This panel does...';
      const ok = new Button(250, 760, 50, 20, 'OK');
      ok.tooltipText = 'This is a OK button that...';
      const cancel = new Button(320, 760, 50, 20, 'Cancel');

      panel.add(ok);
      panel.add(cancel);
      dialog.add(panel);
    }

    onF1KeyPress() {
      const component = this.getComponentAtMouseCoords();
      component.showHelp();
    }


    private getComponentAtMouseCoords(): ComponentWithContextualHelp {
      return null;
    }
  }

}