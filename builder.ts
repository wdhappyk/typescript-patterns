namespace Builder {

  class Engine {
    public power = 100;
  }

  class SportEngine extends Engine {
    public power = 300;
  }

  class Car {
    public seatsCount: number;
    public engine: Engine;
    public hasTripComputer = false;
    public hasGPS = false;
  }

  class Manual {
  }


  interface Builder {
    reset(): void;

    setSeats(count: number): void;

    setEngine(engine: Engine): void;

    setTripComputer(): void;

    setGPS(): void;
  }

  class CarBuilder implements Builder {
    private car: Car;

    reset(): void {
      this.car = new Car();
    }

    setEngine(engine: Engine): void {
      this.car.engine = engine;
    }

    setGPS(): void {
      this.car.hasGPS = true;
    }

    setSeats(count: number): void {
      this.car.seatsCount = count;
    }

    setTripComputer(): void {
      this.car.hasTripComputer = true;
    }

    getResult(): Car {
      return this.car;
    }
  }

  class CarManualBuilder implements Builder {
    private manual: Manual;

    reset(): void {
      this.manual = new Manual();
    }

    setEngine(engine: Engine): void {
    }

    setGPS(): void {
    }

    setSeats(count: number): void {
    }

    setTripComputer(): void {
    }

    getResult(): Manual {
      return this.manual;
    }
  }

  class Director {
    public makeSUV(builder: Builder) {
      builder.reset();
      builder.setSeats(4);
      builder.setEngine(new Engine());
      builder.setTripComputer();
    }

    public makeSportsCar(builder: Builder) {
      builder.reset();
      builder.setSeats(2);
      builder.setEngine(new SportEngine());
      builder.setTripComputer();
      builder.setGPS();
    }
  }


  const director = new Director();
  const builder = new CarBuilder();
  director.makeSportsCar(builder);
  const car = builder.getResult();
}
