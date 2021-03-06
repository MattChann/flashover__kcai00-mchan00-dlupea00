export default class PVector {
  x = 0.0;
  y = 0.0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  translate(vec) {
    this.x += vec.x;
    this.y += vec.y;
  }
  scale(scale) {
    this.x *= scale;
    this.y *= scale;
  }
  rotate(vec, rad) {
    let diff = PVector.sub(this, vec);
    let tmp = diff.x;
    this.x = diff.x * Math.cos(rad) - diff.y * Math.sin(rad);
    this.y = diff.y * Math.cos(rad) + tmp * Math.sin(rad);
    this.translate(vec);
  }
  static getDistance(vec1, vec2) {
    let tmp = this.sub(vec1, vec2);
    return this.getScalar(tmp);
  }
  static getScalar(vec) {
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
  }
  static getAngle(vec) {
    if (vec.y) {
      return Math.atan2(vec.y, vec.x);
    }
    if (vec.x == Math.PI) {
      return Math.PI;
    }
    return 0;
  }
  static getUnitVec(rad) {
    let tmp = new PVector(1, 0);
    tmp.rotate(new PVector(0, 0), rad);
    return tmp;
  }
  static copy(vec) {
    return new PVector(vec.x, vec.y);
  }
  static add(vec1, vec2) {
    return new PVector(vec1.x + vec2.x, vec1.y + vec2.y);
  }
  static sub(vec1, vec2) {
    return new PVector(vec1.x - vec2.x, vec1.y - vec2.y);
  }
  static perp(vec) {
    let tmp = vec.x;
    vec.x = vec.y;
    vec.y = -tmp;
    return vec;
  }
  static normalize(vec) {
    let len = Math.sqrt(vec.x * vec.x + vec.y * vec.y);
    return new PVector(vec.x / len, vec.y / len);
  }
  static normal(vec1, vec2) {
    let sub = PVector.sub(vec1, vec2);
    let perp = PVector.perp(sub);
    let norm = PVector.normalize(perp);
    return norm;
  }
  static dot(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y;
  }
}
