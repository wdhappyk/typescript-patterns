namespace Decorator {

  interface DataSource {
    writeData(data);
    readData();
  }

  class FileDataSource implements DataSource {
    constructor(private filename) {
    }

    readData() {
    }

    writeData(data) {
    }
  }

  abstract class DataSourceDecorator implements DataSource {
    constructor(
      protected wrappee: DataSource
    ) {}

    readData() {
      this.wrappee.readData();
    }

    writeData(data) {
      this.wrappee.writeData(data);
    }
  }

  class EncryptionDecorator extends DataSourceDecorator {
    writeData(data) {
      // encrypting data...
      super.writeData(data);
    }

    readData() {
      // decrypting data...
      super.readData();
    }
  }

  class CompressionDecorator extends DataSourceDecorator {
    writeData(data) {
      // compressing data...
      super.writeData(data);
    }

    readData() {
      // uncompressing data...
      super.readData();
    }
  }

  const fileDataSource = new FileDataSource('filename');
  const compressionFileDataSource = new CompressionDecorator(fileDataSource);
  compressionFileDataSource.readData();

}