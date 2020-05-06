var ProxyPattern;
(function (ProxyPattern) {
    var RealSubject = /** @class */ (function () {
        function RealSubject() {
        }
        RealSubject.prototype.request = function () {
            console.log('Real Subject: Handling request.');
        };
        return RealSubject;
    }());
    var Proxy = /** @class */ (function () {
        function Proxy(realSubject) {
            this.realSubject = realSubject;
        }
        Proxy.prototype.request = function () {
            if (this.checkAccess()) {
                this.realSubject.request();
                this.logAccess();
            }
        };
        Proxy.prototype.checkAccess = function () {
            console.log('Proxy: Checking access prior to real request.');
            return true;
        };
        Proxy.prototype.logAccess = function () {
            console.log('Proxy: Logging the time of request');
        };
        return Proxy;
    }());
    function clientCode(subject) {
        subject.request();
    }
    var realSubject = new RealSubject();
    clientCode(realSubject);
    console.log('---');
    var proxy = new Proxy(realSubject);
    clientCode(proxy);
})(ProxyPattern || (ProxyPattern = {}));
