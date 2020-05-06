namespace AbstractFactory {

  interface GUIElement {
    paint();
  }

  // Abstract Items
  interface Button extends GUIElement {
  }

  interface Checkbox extends GUIElement {
  }

  // Abstract Factory
  interface GUIFactory {
    createButton(): Button;

    createCheckbox(): Checkbox;
  }

  // Concrete Items
  class WinButton implements Button {
    paint() { /* Paint element */
    }
  }

  class WinCheckbox implements Checkbox {
    paint() { /* Paint element */
    }
  }

  class MacButton implements Button {
    paint() { /* Paint element */
    }
  }

  class MacCheckbox implements Checkbox {
    paint() { /* Paint element */
    }
  }

  // Concrete Factory
  class WinFactory implements GUIFactory {
    createButton(): Button {
      return new WinButton();
    }

    createCheckbox(): Checkbox {
      return new WinCheckbox();
    }
  }

  // Concrete Factory
  class MacFactory implements GUIFactory {
    createButton(): Button {
      return new MacButton();
    }

    createCheckbox(): Checkbox {
      return new MacCheckbox();
    }
  }

  // Client
  class Application {
    private button: Button;

    constructor(
      private factory: GUIFactory,
    ) {
    }

    createUI() {
      this.button = this.factory.createButton();
    }

    paint() {
      this.button.paint();
    }
  }
}
