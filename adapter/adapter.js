var Adapter;
(function (Adapter_1) {
    function fromCelsiusToFahrenheit(v) {
        return v * 18 / 10 + 32;
    }
    function fromFahrenheitToCelsius(v) {
        return (v * 10 - 320) / 18;
    }
    var Adapter = /** @class */ (function () {
        function Adapter(adaptee) {
            this.adaptee = adaptee;
        }
        Adapter.prototype.setTemperature = function (v) {
            var specialData = fromCelsiusToFahrenheit(v);
            this.adaptee.setTemperature(specialData);
        };
        Adapter.prototype.getTemperature = function () {
            return fromFahrenheitToCelsius(this.adaptee.getTemperature());
        };
        return Adapter;
    }());
    var Service = /** @class */ (function () {
        function Service() {
        }
        Service.prototype.setTemperature = function (temperature) {
            this.temperature = temperature;
        };
        Service.prototype.getTemperature = function () {
            return this.temperature;
        };
        return Service;
    }());
    var service = new Service();
    var serviceAdapter = new Adapter(service);
    serviceAdapter.setTemperature(3);
    console.log(service.getTemperature(), 'by Fahrenheit'); // 37.4 by Fahrenheit
    console.log(serviceAdapter.getTemperature(), 'by Celsius'); // 3 by Celsius
})(Adapter || (Adapter = {}));
