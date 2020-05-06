namespace Bridge {

  interface Device {
    isEnabled(): boolean;
    enable();
    disable();
    getVolume(): number;
    setVolume(percent: number);
    getChannel(): number;
    setChannel(channel: number);
  }

  class Radio implements Device {
    disable() {
    }

    enable() {
    }

    getChannel(): number {
      return 0;
    }

    getVolume(): number {
      return 0;
    }

    isEnabled(): boolean {
      return false;
    }

    setChannel(channel: number) {
    }

    setVolume(percent: number) {
    }
  }
  class TV implements Device {
    disable() {
    }

    enable() {
    }

    getChannel(): number {
      return 0;
    }

    getVolume(): number {
      return 0;
    }

    isEnabled(): boolean {
      return false;
    }

    setChannel(channel: number) {
    }

    setVolume(percent: number) {
    }
  }

  class Remote {

    constructor(
      protected device: Device
    ) {}


    togglePower() {
      if (this.device.isEnabled()) {
        this.device.disable();
      } else {
        this.device.enable();
      }
    }

    volumeDown() {
      const volume = this.device.getVolume();
      this.device.setVolume(volume - 1);
    }
    volumeUp() {
      const volume = this.device.getVolume();
      this.device.setVolume(volume + 1);
    }
    channelDown() {
      const channel = this.device.getChannel();
      this.device.setChannel(channel - 1);
    }
    channelUp() {
      const channel = this.device.getChannel();
      this.device.setChannel(channel + 1);
    }
  }

  class AdvancedRemote extends Remote {
    private savedVulume: number;

    mute() {
      const volume = this.device.getVolume();
      if (volume > 0) {
        this.savedVulume = volume;
        this.device.setVolume(0);
      } else {
        this.device.setVolume(this.savedVulume);
      }
    }
  }


  const radio = new Radio();
  const remote = new Remote(radio);
  remote.togglePower();

  const tv = new TV();
  const advancedRemote = new AdvancedRemote(tv);
  advancedRemote.togglePower();
  advancedRemote.mute();
}