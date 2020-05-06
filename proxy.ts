namespace ProxyPattern {
  
  interface Subject {
    request(): void;
  }

  class RealSubject implements Subject {
    public request(): void {
      console.log('Real Subject: Handling request.');
    }
  }

  class Proxy implements Subject {
    constructor(
      private realSubject: Subject
    ) {}

    public request(): void {
      if (this.checkAccess()) {
        this.realSubject.request();
        this.logAccess();
      }
    }

    private checkAccess(): boolean {
      console.log('Proxy: Checking access prior to real request.');
      return true;
    }

    private logAccess(): void {
      console.log('Proxy: Logging the time of request');
    }
  }

  function clientCode(subject: Subject) {
    subject.request();
  }

  const realSubject = new RealSubject();
  clientCode(realSubject);

  console.log('---');

  const proxy = new Proxy(realSubject);
  clientCode(proxy);

}