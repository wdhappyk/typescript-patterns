namespace Adapter {

  function fromCelsiusToFahrenheit(v: number): number {
    return v * 18 / 10 + 32;
  }

  function fromFahrenheitToCelsius(v: number): number {
    return (v * 10 - 320) / 18;
  }

  interface ClientInterface {
    setTemperature(v: number): void;
  }

  class Adapter implements ClientInterface {
    constructor(
      private adaptee: Service,
    ) {}

    setTemperature(v: number): void {
      const specialData = fromCelsiusToFahrenheit(v);
      this.adaptee.setTemperature(specialData);
    }

    getTemperature(): number {
      return fromFahrenheitToCelsius(this.adaptee.getTemperature());
    }
  }

  class Service {
    private temperature: number;

    setTemperature(temperature): void {
      this.temperature = temperature;
    }

    getTemperature(): number {
      return this.temperature;
    }
  }

  const service = new Service();
  const serviceAdapter = new Adapter(service);

  serviceAdapter.setTemperature(3);
  console.log(service.getTemperature(), 'by Fahrenheit'); // 37.4 by Fahrenheit
  console.log(serviceAdapter.getTemperature(), 'by Celsius'); // 3 by Celsius
}
