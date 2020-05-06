namespace Flyweight {

  interface TreeState {
    name: string;
    color: string;
    texture: string;
  }

  // Легковес
  class TreeType {
    constructor(
      private state: TreeState
    ) {}

    draw(canvas, x, y) {
      // draw on canvas
    }
  }

  // Фабрика Легковесов
  class TreeFactory {
    private static treeTypes: {[key: string]: TreeType} = {};

    static getTreeType(sharedState: TreeState) {
      const key = this.getKey(sharedState);

      if (!this.treeTypes.hasOwnProperty(key)) {
        this.treeTypes[key] = new TreeType(sharedState);
      }

      return this.treeTypes[key];
    }

    private static getKey(state: TreeState): string {
      return Object.entries(state).map((i) => i.join('=')).join(';');
    }
  }

  // Контекст
  class Tree {
    constructor(
      private x: number,
      private y: number,
      private type: TreeType,
    ) {}

    draw(canvas) {
      this.type.draw(canvas, this.x, this.y);
    }
  }

  class Forest {
    trees: Tree[] = [];

    plantTree(x: number, y: number, name: string, color: string, texture: string) {
      const type = TreeFactory.getTreeType({ name, color, texture });
      const tree = new Tree(x, y, type);
      this.trees.push(tree);
    }

    draw(canvas) {
      for (const tree of this.trees) {
        tree.draw(canvas);
      }
    }
  }

}