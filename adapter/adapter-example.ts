namespace AdapterExample {

  class RoundHole {

    constructor(
      private radius: number = 0,
    ) {}

    getRadius() {
      return this.radius;
    }

    fits(peg: RoundPeg): boolean {
      return this.getRadius() >= peg.getRadius();
    }
  }

  class RoundPeg {
    constructor(
      private radius: number = 0,
    ) {}

    getRadius() {
      return this.radius;
    }
  }

  class SquarePeg {
    constructor(
      private width: number = 0,
    ) {}

    getWidth() {
      return this.width;
    }
  }


  class SquarePegAdapter extends RoundPeg {
    constructor(
      private peg: SquarePeg,
    ) {
      super();
    }

    getRadius(): number {
      return  Math.sqrt(2 * this.peg.getWidth() ** 2) / 2;
    }
  }


  const hole = new RoundHole(5);
  const rpeg = new RoundPeg(5);
  console.log(hole.fits(rpeg)); // true

  const smallSqpeg = new SquarePeg(5);
  const largeSqpeg = new SquarePeg(10);
  // console.log(hole.fits(smallSqpeg)); // error compile
  // console.log(hole.fits(largeSqpeg)); // error compile

  const smallSqpegAdapter = new SquarePegAdapter(smallSqpeg);
  const largeSqpegAdapter = new SquarePegAdapter(largeSqpeg);
  console.log(hole.fits(smallSqpegAdapter)); // true
  console.log(hole.fits(largeSqpegAdapter)); // false
}