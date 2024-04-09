import grammar from './grammar/svg-path-d.ohm-bundle'

const s = grammar.createSemantics()

s.addOperation<any>('e', {
  Exp(n) {
    return n.e()
  },
  D(command) {
    return command.e()
  },
  Move(type, points) {
    return {
      type: type.sourceString,
      params: points.e(),
    }
  },
  LineTo(type, params) {
    return {
      type: type.sourceString,
      params: params.e(),
    }
  },
  CubicBezierCurve(type, params) {
    return {
      type: type.sourceString,
      params: params.e(),
    }
  },
  QuadraticBezierCurve(type, params) {
    return {
      type: type.sourceString,
      params: params.e(),
    }
  },
  EllipticalArcCurve(type, params) {
    return {
      type: type.sourceString,
      params: params.e(),
    }
  },
  ClosePath(type) {
    return {
      type: type.sourceString,
    }
  },
  ellipticalParameter(rPoint, angle, largeArcFlag, sweepFlag, point1) {
    const rp = rPoint.e()
    const p = point1.e()

    return {
      x: p.x,
      y: p.y,
      rx: rp.x,
      ry: rp.y,
      angle: parseFloat(angle.sourceString),
      largeArcFlag: largeArcFlag.e(),
      sweepFlag: sweepFlag.e(),
    }
  },
  TwoPoints(p1, _, p2) {
    return {
      p1: p1.e(),
      p2: p2.e(),
    }
  },
  ThreePoints(p1, _, p2, _1, p3) {
    return {
      p1: p1.e(),
      p2: p2.e(),
      p3: p3.e(),
    }
  },
  point(x, _, y) {
    return {
      x: x.e(),
      y: y.e(),
    }
  },
  number(sign, num) {
    return (sign.sourceString === '-' ? -1 : 1) * parseFloat(num.sourceString)
  },
  binaryNumber(num) {
    return parseInt(num.sourceString)
  },
  _iter(...children) {
    return children.map((item) => item.e())
  },
})
