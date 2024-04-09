import {makeRecipe} from 'ohm-js';const result=makeRecipe(["grammar",{"source":"SvgPathD {\n  Exp\n    = D*\n  D\n    = Move | LineTo | CubicBezierCurve | QuadraticBezierCurve | EllipticalArcCurve | ClosePath\n\n  Move\n    = (\"M\" | \"m\") point+\n\n  LineTo\n    = (\"L\" | \"l\") point+\n    | (\"H\" | \"h\" | \"V\" | \"v\") digit+\n\n  CubicBezierCurve\n    = (\"C\" | \"c\") ThreePoints+\n    | (\"S\" | \"s\") TwoPoints+\n\n  QuadraticBezierCurve\n    = (\"Q\" | \"q\") TwoPoints+\n    | (\"T\" | \"t\") point+\n\n  EllipticalArcCurve\n    = (\"A\" | \"a\") ellipticalParameter+\n\n  ClosePath\n    = (\"Z\" | \"z\")\n\n  // point angle largeArcFlag sweepFlag point\n  ellipticalParameter\n    = point number binaryNumber binaryNumber point\n\n  TwoPoints\n    = point \",\"? point\n\n  ThreePoints\n    = point \",\"? point \",\"? point\n\n  point\n    = number \",\"? number\n\n  number\n    = (\"+\" | \"-\")? (digit | \".\")+\n\n  binaryNumber\n    = \"0\" | \"1\"\n}"},"SvgPathD",null,"Exp",{"Exp":["define",{"sourceInterval":[13,25]},null,[],["star",{"sourceInterval":[23,25]},["app",{"sourceInterval":[23,24]},"D",[]]]],"D":["define",{"sourceInterval":[28,124]},null,[],["alt",{"sourceInterval":[36,124]},["app",{"sourceInterval":[36,40]},"Move",[]],["app",{"sourceInterval":[43,49]},"LineTo",[]],["app",{"sourceInterval":[52,68]},"CubicBezierCurve",[]],["app",{"sourceInterval":[71,91]},"QuadraticBezierCurve",[]],["app",{"sourceInterval":[94,112]},"EllipticalArcCurve",[]],["app",{"sourceInterval":[115,124]},"ClosePath",[]]]],"Move":["define",{"sourceInterval":[128,157]},null,[],["seq",{"sourceInterval":[139,157]},["alt",{"sourceInterval":[140,149]},["terminal",{"sourceInterval":[140,143]},"M"],["terminal",{"sourceInterval":[146,149]},"m"]],["plus",{"sourceInterval":[151,157]},["app",{"sourceInterval":[151,156]},"point",[]]]]],"LineTo":["define",{"sourceInterval":[161,229]},null,[],["alt",{"sourceInterval":[174,229]},["seq",{"sourceInterval":[174,192]},["alt",{"sourceInterval":[175,184]},["terminal",{"sourceInterval":[175,178]},"L"],["terminal",{"sourceInterval":[181,184]},"l"]],["plus",{"sourceInterval":[186,192]},["app",{"sourceInterval":[186,191]},"point",[]]]],["seq",{"sourceInterval":[199,229]},["alt",{"sourceInterval":[200,221]},["terminal",{"sourceInterval":[200,203]},"H"],["terminal",{"sourceInterval":[206,209]},"h"],["terminal",{"sourceInterval":[212,215]},"V"],["terminal",{"sourceInterval":[218,221]},"v"]],["plus",{"sourceInterval":[223,229]},["app",{"sourceInterval":[223,228]},"digit",[]]]]]],"CubicBezierCurve":["define",{"sourceInterval":[233,309]},null,[],["alt",{"sourceInterval":[256,309]},["seq",{"sourceInterval":[256,280]},["alt",{"sourceInterval":[257,266]},["terminal",{"sourceInterval":[257,260]},"C"],["terminal",{"sourceInterval":[263,266]},"c"]],["plus",{"sourceInterval":[268,280]},["app",{"sourceInterval":[268,279]},"ThreePoints",[]]]],["seq",{"sourceInterval":[287,309]},["alt",{"sourceInterval":[288,297]},["terminal",{"sourceInterval":[288,291]},"S"],["terminal",{"sourceInterval":[294,297]},"s"]],["plus",{"sourceInterval":[299,309]},["app",{"sourceInterval":[299,308]},"TwoPoints",[]]]]]],"QuadraticBezierCurve":["define",{"sourceInterval":[313,387]},null,[],["alt",{"sourceInterval":[340,387]},["seq",{"sourceInterval":[340,362]},["alt",{"sourceInterval":[341,350]},["terminal",{"sourceInterval":[341,344]},"Q"],["terminal",{"sourceInterval":[347,350]},"q"]],["plus",{"sourceInterval":[352,362]},["app",{"sourceInterval":[352,361]},"TwoPoints",[]]]],["seq",{"sourceInterval":[369,387]},["alt",{"sourceInterval":[370,379]},["terminal",{"sourceInterval":[370,373]},"T"],["terminal",{"sourceInterval":[376,379]},"t"]],["plus",{"sourceInterval":[381,387]},["app",{"sourceInterval":[381,386]},"point",[]]]]]],"EllipticalArcCurve":["define",{"sourceInterval":[391,448]},null,[],["seq",{"sourceInterval":[416,448]},["alt",{"sourceInterval":[417,426]},["terminal",{"sourceInterval":[417,420]},"A"],["terminal",{"sourceInterval":[423,426]},"a"]],["plus",{"sourceInterval":[428,448]},["app",{"sourceInterval":[428,447]},"ellipticalParameter",[]]]]],"ClosePath":["define",{"sourceInterval":[452,479]},null,[],["alt",{"sourceInterval":[468,479]},["terminal",{"sourceInterval":[469,472]},"Z"],["terminal",{"sourceInterval":[475,478]},"z"]]],"ellipticalParameter":["define",{"sourceInterval":[529,599]},null,[],["seq",{"sourceInterval":[555,599]},["app",{"sourceInterval":[555,560]},"point",[]],["app",{"sourceInterval":[561,567]},"number",[]],["app",{"sourceInterval":[568,580]},"binaryNumber",[]],["app",{"sourceInterval":[581,593]},"binaryNumber",[]],["app",{"sourceInterval":[594,599]},"point",[]]]],"TwoPoints":["define",{"sourceInterval":[603,635]},null,[],["seq",{"sourceInterval":[619,635]},["app",{"sourceInterval":[619,624]},"point",[]],["opt",{"sourceInterval":[625,629]},["terminal",{"sourceInterval":[625,628]},","]],["app",{"sourceInterval":[630,635]},"point",[]]]],"ThreePoints":["define",{"sourceInterval":[639,684]},null,[],["seq",{"sourceInterval":[657,684]},["app",{"sourceInterval":[657,662]},"point",[]],["opt",{"sourceInterval":[663,667]},["terminal",{"sourceInterval":[663,666]},","]],["app",{"sourceInterval":[668,673]},"point",[]],["opt",{"sourceInterval":[674,678]},["terminal",{"sourceInterval":[674,677]},","]],["app",{"sourceInterval":[679,684]},"point",[]]]],"point":["define",{"sourceInterval":[688,718]},null,[],["seq",{"sourceInterval":[700,718]},["app",{"sourceInterval":[700,706]},"number",[]],["opt",{"sourceInterval":[707,711]},["terminal",{"sourceInterval":[707,710]},","]],["app",{"sourceInterval":[712,718]},"number",[]]]],"number":["define",{"sourceInterval":[722,762]},null,[],["seq",{"sourceInterval":[735,762]},["opt",{"sourceInterval":[735,747]},["alt",{"sourceInterval":[736,745]},["terminal",{"sourceInterval":[736,739]},"+"],["terminal",{"sourceInterval":[742,745]},"-"]]],["plus",{"sourceInterval":[748,762]},["alt",{"sourceInterval":[749,760]},["app",{"sourceInterval":[749,754]},"digit",[]],["terminal",{"sourceInterval":[757,760]},"."]]]]],"binaryNumber":["define",{"sourceInterval":[766,794]},null,[],["alt",{"sourceInterval":[785,794]},["terminal",{"sourceInterval":[785,788]},"0"],["terminal",{"sourceInterval":[791,794]},"1"]]]}]);export default result;