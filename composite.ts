namespace Composite {

  interface Graphic {
    move(x, y);

    draw();
  }

  class Dot implements Graphic {
    constructor(
      protected x: number,
      protected y: number,
    ) {
    }

    draw() {
    }

    move(x, y) {
      this.x += x;
      this.y += y;
    }
  }

  class Circle extends Dot {
    constructor(
      x: number,
      y: number,
      protected radius: number,
    ) {
      super(x, y);
    }

    draw() {
    }
  }


  class CompoundGraphic implements Graphic {
    private children: Graphic[] = [];

    add(child: Graphic | Graphic[]) {
      const add = (c: Graphic) => {
        this.children.push(c);
      };


      if (Array.isArray(child)) {
        for (const c of child) {
          add(c);
        }
      } else {
        add(child);
      }
    }

    remove(child: Graphic | Graphic[]) {
      const remove = (c: Graphic) => {
        const idx = this.children.indexOf(c);
        if (idx !== -1) {
          this.children.splice(idx, 1);
        }
      };

      if (Array.isArray(child)) {
        for (const c of child) {
          remove(c);
        }
      } else {
        remove(child);
      }
    }

    draw() {
      for (const child of this.children) {
        child.draw();
      }
    }

    move(x, y) {
      for (const child of this.children) {
        child.move(x, y);
      }
    }

  }


  class ImageEditor {
    private all: CompoundGraphic;

    load() {
      const all = new CompoundGraphic();
      all.add(new Dot(1, 2));
      all.add(new Circle(5, 3, 10));

      this.all = all;
    }

    groupSelected(components: Graphic[]) {
      const group = new CompoundGraphic();
      group.add(components);
      this.all.remove(components);
      this.all.add(group);
      this.all.draw();
    }
  }
}