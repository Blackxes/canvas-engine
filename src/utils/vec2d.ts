/**
 * @Author Alexander Bassov Sun May 05 2024
 * @Email blackxes.dev@gmail.com
 */

export interface ICoords2d {
  x: number;
  y: number;
}

/** Implementation which mutates the original vector */
export interface IVector2d extends ICoords2d {
  add: (b: ICoords2d | number) => IVector2d;
  subtract: (b: ICoords2d | number) => IVector2d;
  multiply: (b: ICoords2d | number) => IVector2d;
  divide: (b: ICoords2d | number) => IVector2d;
  compare: (b: ICoords2d) => IVector2d;
  length: () => number;
  normalize: () => IVector2d;
  dot: (b: ICoords2d) => number;
  toString: (point: IVector2d, divider: string) => string;
}

/** Implementation which doesn't mutate the original vectors */
export interface IVector2dStatic extends ICoords2d {
  add: (a: ICoords2d, b: ICoords2d | number) => ICoords2d;
  subtract: (a: ICoords2d, b: ICoords2d | number) => ICoords2d;
  multiply: (a: ICoords2d, b: ICoords2d | number) => ICoords2d;
  divide: (a: ICoords2d, b: ICoords2d | number) => ICoords2d;
  compare: (a: ICoords2d, b: ICoords2d) => ICoords2d;
  length: (vec: ICoords2d) => number;
  normalize: (vec: ICoords2d) => ICoords2d;
  dot: (a: ICoords2d, b: ICoords2d) => number;
  toString: (point: ICoords2d, divider: string) => string;
}

// Static vector
export const Vector2dStatic: IVector2dStatic = {
  add(a: ICoords2d, b: ICoords2d) {
    return new Vector2d(a.x + b.x, a.y + b.y);
  },
  subtract(a: ICoords2d, b: ICoords2d) {
    return new Vector2d(a.x - b.x, a.y - b.y);
  },
  multiply(a: ICoords2d, b: ICoords2d | number) {
    return typeof b == "number"
      ? new Vector2d(a.x * b, a.y * b)
      : new Vector2d(a.x * b.x, a.y * b.y);
  },
  divide(a: ICoords2d, b: ICoords2d | number) {
    return typeof b == "number"
      ? new Vector2d(a.x / b, a.y / b)
      : new Vector2d(a.x / b.x, a.y / b.y);
  },
  compare(a: ICoords2d, b: ICoords2d) {
    return a.x == b.x && a.y == b.y;
  },
  length(vec: ICoords2d) {
    return Math.sqrt(vec.x ** 2 + vec.y ** 2);
  },
  normalize(vec: ICoords2d) {
    const length = StaticVector2dFunctions.length(vec);
    return new Vector2d(vec.x / length, vec.y / length);
  },
  dot(a: ICoords2d, b: ICoords2d) {
    return a.x * b.x + a.y * b.y;
  },
  toString(point: ICoords2d, divider: string = "_") {
    return point.x + divider + point.y;
  },
};

export class Vector2d implements IVector2d {
  x: number = 0;
  y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(b: Vector2d) {
    this.x += b.x;
    this.y += b.y;
  }
  subtract(b: IVector2d) {
    this.x -= b.x;
    this.y -= b.y;
  }
  multiply(scale: number) {
    this.x *= scale;
    this.y *= scale;
  }
  divide(divider: number) {
    this.multiply(1 / divider);
  }
  length(): number {
    return StaticVector2dFunctions.length(this);
  }
  normalize(): IPoint {
    return StaticVector2dFunctions.normalize(this);
  }
  dot(b: IPoint): number {
    return StaticVector2dFunctions.dot(this, b);
  }
}
