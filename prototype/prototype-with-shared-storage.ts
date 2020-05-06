namespace PrototypeWithSharedStorage {
  interface Prototype {
    getColor(): string;
    clone(): Prototype;
  }

  class Button implements Prototype {
    private x: number;
    private y: number;
    private color: string;

    constructor();
    constructor(prototype: Button);
    constructor(x: number, y: number, color: string);
    constructor(...args) {
      if (args.length === 1) {
        const [prototype] = args;
        this.x = prototype.x;
        this.y = prototype.y;
        this.color = prototype.color;
      } else if (args.length === 3) {
        const [x, y, color] = args;
        this.x = x;
        this.y = y;
        this.color = color;
      }
    }


    clone(): Prototype {
      return new Button(this);
    }

    getColor(): string {
      return this.color;
    }
  }

  class PrototypeRegisty {
    private items: Map<string, Prototype> = new Map();

    addItem(id: string, item: Prototype) {
      this.items.set(id, item);
    }

    getById(id: string): Prototype {
      return this.items.get(id);
    }

    getByColor(color: string): Prototype {
      color = color.toLowerCase();
      for (const i of this.items.values()) {
        if (String(i.getColor()).toLowerCase() === color) {
          return i.clone();
        }
      }
    }
  }

  const button = new Button(10, 50, 'red');
}
