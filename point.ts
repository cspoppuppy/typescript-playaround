// Interface and class
interface IPoint {
  x: number;
  y: number;
  drawPoint: () => void;
  getDistances: (p: IPoint) => number;
}


export class Point implements IPoint {
  constructor(private _x: number, private _y: number) {

  }

  drawPoint = () => {
    console.log("x: ", this._x, " y: ", this._y);
  }

  getDistances = (p: IPoint) => {
    return Math.pow(p.x - this._x, 2) + Math.pow(p.y - this._y, 2);
  }

  set x(value: number) {
    if (value < 0) {
      throw new Error("value no less than 0");
    }
    this._x = value;
  }

  get x() {
    return this._x;
  }

  set y(value: number) {
    if (value < 0) {
      throw new Error("value no less than 0");
    }
    this._y = value;
  }

  get y() {
    return this._y;
  }
}


