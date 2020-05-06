namespace Singleton {
  class Database {
    private static instance: Database;

    private constructor() {
      // connect to database
    }

    static getInstance() {
      if (!this.instance) {
        this.instance = new Database();
      }
      return this.instance;
    }

    public query(sql) {
      // ...
    }
  }

  console.log(Database.getInstance() === Database.getInstance()); // true
}