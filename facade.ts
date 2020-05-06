namespace Facade {

  /* Сложная система классов */
  class File {
    constructor(
      private filename: string
    ) {}

    save() {}
  }
  class Codec {}
  class VideoFile extends File {}
  class OggCompressionCodec {}
  class MPEG4CompressionCodec {}
  class CodecFactory {
    static extract(file: VideoFile): Codec {
      return new Codec();
    }
  }
  class BitrateReader {
    static read(filename, sourceCodec) {
      // ...
    }
    static convert(buffer, destinationCodec) {
      // ...
      return new VideoFile('filename');
    }
  }
  class AudioMixer {
    fix(convertResult) {
      // ...
      return 'complete';
    }
  }

  /* Фасад - простой интерфес общения со сложной системой классов */
  class VideoConverter {
    convert(filename, format): File {
      const file = new VideoFile(filename);
      const sourceCodec = CodecFactory.extract(file);
      const CompressionCodec = format === 'mp4' ? MPEG4CompressionCodec : OggCompressionCodec;
      const destinationCodec = new CompressionCodec();
      const buffer = BitrateReader.read(filename, sourceCodec);
      const convertResult = BitrateReader.convert(buffer, destinationCodec);
      const audioMixer = new AudioMixer();
      const result = audioMixer.fix(convertResult);
      return new File(result);
    }
  }

  /* Клиентский код больше не зависит от сложного фреймворка и может использовать простой интерфейс Фасада */
  class Application {
    static main(): void {
      const convertor = new VideoConverter();
      const mp4 = convertor.convert('video.ogg', 'mp4');
      mp4.save();
    }
  }
}