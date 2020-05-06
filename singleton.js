var Database = /** @class */ (function () {
    function Database() {
        // connect to database
    }
    Database.getInstance = function () {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    };
    Database.prototype.query = function (sql) {
        // ...
    };
    return Database;
}());
console.log(Database.getInstance() === Database.getInstance()); // true
