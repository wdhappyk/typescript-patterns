namespace BasePrototype {
  interface Prototype {
    clone(): Prototype;
  }

  class ConcretePrototype implements Prototype {
    private field1;

    constructor(prototype: ConcretePrototype) {
      if (prototype !== null) {
        this.field1 = prototype.field1;
      }
    }

    clone(): ConcretePrototype {
      return new ConcretePrototype(this);
    }
  }

  class SubclassPrototype extends ConcretePrototype {
    private field2;

    constructor(prototype: SubclassPrototype) {
      super(prototype);
      if (prototype !== null) {
        this.field2 = prototype.field2;
      }
    }

    clone(): SubclassPrototype {
      return new SubclassPrototype(this);
    }
  }

  const existing = new ConcretePrototype(null);
  const copy = existing.clone();
}
