import Global from '#global';

const AggregateError = Global.AggregateError;
const AggregateErrorPrototype = (
  AggregateError ? AggregateError.prototype : undefined
);
const Array = Global.Array;
const ArrayFrom = Array.from;
const ArrayIsArray = Array.isArray;
const ArrayOf = Array.of;
const ArrayPrototype = Array.prototype;
const ArrayPrototypeAt = ArrayPrototype.at;
const ArrayPrototypeConcat = ArrayPrototype.concat;
const ArrayPrototypeCopyWithin = ArrayPrototype.copyWithin;
const ArrayPrototypeEntries = ArrayPrototype.entries;
const ArrayPrototypeEvery = ArrayPrototype.every;
const ArrayPrototypeFill = ArrayPrototype.fill;
const ArrayPrototypeFilter = ArrayPrototype.filter;
const ArrayPrototypeFind = ArrayPrototype.find;
const ArrayPrototypeFindIndex = ArrayPrototype.findIndex;
const ArrayPrototypeFlat = ArrayPrototype.flat;
const ArrayPrototypeFlatMap = ArrayPrototype.flatMap;
const ArrayPrototypeForEach = ArrayPrototype.forEach;
const ArrayPrototypeIncludes = ArrayPrototype.includes;
const ArrayPrototypeIndexOf = ArrayPrototype.indexOf;
const ArrayPrototypeJoin = ArrayPrototype.join;
const ArrayPrototypeKeys = ArrayPrototype.keys;
const ArrayPrototypeLastIndexOf = ArrayPrototype.lastIndexOf;
const ArrayPrototypeMap = ArrayPrototype.map;
const ArrayPrototypePop = ArrayPrototype.pop;
const ArrayPrototypePush = ArrayPrototype.push;
const ArrayPrototypeReduce = ArrayPrototype.reduce;
const ArrayPrototypeReduceRight = ArrayPrototype.reduceRight;
const ArrayPrototypeReverse = ArrayPrototype.reverse;
const ArrayPrototypeShift = ArrayPrototype.shift;
const ArrayPrototypeSlice = ArrayPrototype.slice;
const ArrayPrototypeSome = ArrayPrototype.some;
const ArrayPrototypeSort = ArrayPrototype.sort;
const ArrayPrototypeSplice = ArrayPrototype.splice;
const ArrayPrototypeToLocaleString = ArrayPrototype.toLocaleString;
const ArrayPrototypeToString = ArrayPrototype.toString;
const ArrayPrototypeUnshift = ArrayPrototype.unshift;
const ArrayPrototypeValues = ArrayPrototype.values;
const ArrayPrototypeSymbolIterator = ArrayPrototypeValues;
const ArrayBuffer = Global.ArrayBuffer;
const ArrayBufferIsView = ArrayBuffer.isView;
const ArrayBufferPrototype = ArrayBuffer.prototype;
const ArrayBufferPrototypeSlice = ArrayBufferPrototype.slice;
const Atomics = Global.Atomics;
const AtomicsAdd = Atomics ? Atomics.add : undefined;
const AtomicsAnd = Atomics ? Atomics.and : undefined;
const AtomicsCompareExchange = Atomics ? Atomics.compareExchange : undefined;
const AtomicsExchange = Atomics ? Atomics.exchange : undefined;
const AtomicsIsLockFree = Atomics ? Atomics.isLockFree : undefined;
const AtomicsLoad = Atomics ? Atomics.load : undefined;
const AtomicsOr = Atomics ? Atomics.or : undefined;
const AtomicsStore = Atomics ? Atomics.store : undefined;
const AtomicsSub = Atomics ? Atomics.sub : undefined;
const AtomicsWait = Atomics ? Atomics.wait : undefined;
const AtomicsNotify = Atomics ? Atomics.notify : undefined;
const AtomicsXor = Atomics ? Atomics.xor : undefined;
const BigInt = Global.BigInt;
const BigIntAsIntN = BigInt ? BigInt.asIntN : undefined;
const BigIntAsUintN = BigInt ? BigInt.asUintN : undefined;
const BigIntPrototype = BigInt ? BigInt.prototype : undefined;
const BigIntPrototypeToLocaleString = (
  BigIntPrototype ? BigIntPrototype.toLocaleString : undefined
);
const BigIntPrototypeToString = (
  BigIntPrototype ? BigIntPrototype.toString : undefined
);
const BigIntPrototypeValueOf = (
  BigIntPrototype ? BigIntPrototype.valueOf : undefined
);
const BigInt64Array = Global.BigInt64Array;
const BigInt64ArrayBYTES_PER_ELEMENT = (
  BigInt64Array ? BigInt64Array.BYTES_PER_ELEMENT : undefined
);
const BigInt64ArrayPrototype = (
  BigInt64Array ? BigInt64Array.prototype : undefined
);
const BigUint64Array = Global.BigUint64Array;
const BigUint64ArrayBYTES_PER_ELEMENT = (
  BigUint64Array ? BigUint64Array.BYTES_PER_ELEMENT : undefined
);
const BigUint64ArrayPrototype = (
  BigUint64Array ? BigUint64Array.prototype : undefined
);
const Boolean = Global.Boolean;
const BooleanPrototype = Boolean.prototype;
const BooleanPrototypeToString = BooleanPrototype.toString;
const BooleanPrototypeValueOf = BooleanPrototype.valueOf;
const DataView = Global.DataView;
const DataViewPrototype = DataView.prototype;
const DataViewPrototypeGetBigInt64 = DataViewPrototype.getBigInt64;
const DataViewPrototypeGetBigUint64 = DataViewPrototype.getBigUint64;
const DataViewPrototypeGetFloat32 = DataViewPrototype.getFloat32;
const DataViewPrototypeGetFloat64 = DataViewPrototype.getFloat64;
const DataViewPrototypeGetInt8 = DataViewPrototype.getInt8;
const DataViewPrototypeGetInt16 = DataViewPrototype.getInt16;
const DataViewPrototypeGetInt32 = DataViewPrototype.getInt32;
const DataViewPrototypeGetUint8 = DataViewPrototype.getUint8;
const DataViewPrototypeGetUint16 = DataViewPrototype.getUint16;
const DataViewPrototypeGetUint32 = DataViewPrototype.getUint32;
const DataViewPrototypeSetBigInt64 = DataViewPrototype.setBigInt64;
const DataViewPrototypeSetBigUint64 = DataViewPrototype.setBigUint64;
const DataViewPrototypeSetFloat32 = DataViewPrototype.setFloat32;
const DataViewPrototypeSetFloat64 = DataViewPrototype.setFloat64;
const DataViewPrototypeSetInt8 = DataViewPrototype.setInt8;
const DataViewPrototypeSetInt16 = DataViewPrototype.setInt16;
const DataViewPrototypeSetInt32 = DataViewPrototype.setInt32;
const DataViewPrototypeSetUint8 = DataViewPrototype.setUint8;
const DataViewPrototypeSetUint16 = DataViewPrototype.setUint16;
const DataViewPrototypeSetUint32 = DataViewPrototype.setUint32;
const Date = Global.Date;
const DateNow = Date.now;
const DateParse = Date.parse;
const DateUTC = Date.UTC;
const DatePrototype = Date.prototype;
const DatePrototypeGetDate = DatePrototype.getDate;
const DatePrototypeGetDay = DatePrototype.getDay;
const DatePrototypeGetFullYear = DatePrototype.getFullYear;
const DatePrototypeGetHours = DatePrototype.getHours;
const DatePrototypeGetMilliseconds = DatePrototype.getMilliseconds;
const DatePrototypeGetMinutes = DatePrototype.getMinutes;
const DatePrototypeGetMonth = DatePrototype.getMonth;
const DatePrototypeGetSeconds = DatePrototype.getSeconds;
const DatePrototypeGetTime = DatePrototype.getTime;
const DatePrototypeGetTimezoneOffset = DatePrototype.getTimezoneOffset;
const DatePrototypeGetUTCDate = DatePrototype.getUTCDate;
const DatePrototypeGetUTCDay = DatePrototype.getUTCDay;
const DatePrototypeGetUTCFullYear = DatePrototype.getUTCFullYear;
const DatePrototypeGetUTCHours = DatePrototype.getUTCHours;
const DatePrototypeGetUTCMilliseconds = DatePrototype.getUTCMilliseconds;
const DatePrototypeGetUTCMinutes = DatePrototype.getUTCMinutes;
const DatePrototypeGetUTCMonth = DatePrototype.getUTCMonth;
const DatePrototypeGetUTCSeconds = DatePrototype.getUTCSeconds;
const DatePrototypeSetDate = DatePrototype.setDate;
const DatePrototypeSetFullYear = DatePrototype.setFullYear;
const DatePrototypeSetHours = DatePrototype.setHours;
const DatePrototypeSetMilliseconds = DatePrototype.setMilliseconds;
const DatePrototypeSetMinutes = DatePrototype.setMinutes;
const DatePrototypeSetMonth = DatePrototype.setMonth;
const DatePrototypeSetSeconds = DatePrototype.setSeconds;
const DatePrototypeSetTime = DatePrototype.setTime;
const DatePrototypeSetUTCDate = DatePrototype.setUTCDate;
const DatePrototypeSetUTCFullYear = DatePrototype.setUTCFullYear;
const DatePrototypeSetUTCHours = DatePrototype.setUTCHours;
const DatePrototypeSetUTCMilliseconds = DatePrototype.setUTCMilliseconds;
const DatePrototypeSetUTCMinutes = DatePrototype.setUTCMinutes;
const DatePrototypeSetUTCMonth = DatePrototype.setUTCMonth;
const DatePrototypeSetUTCSeconds = DatePrototype.setUTCSeconds;
const DatePrototypeToDateString = DatePrototype.toDateString;
const DatePrototypeToISOString = DatePrototype.toISOString;
const DatePrototypeToJSON = DatePrototype.toJSON;
const DatePrototypeToLocaleDateString = DatePrototype.toLocaleDateString;
const DatePrototypeToLocaleString = DatePrototype.toLocaleString;
const DatePrototypeToLocaleTimeString = DatePrototype.toLocaleTimeString;
const DatePrototypeToString = DatePrototype.toString;
const DatePrototypeToTimeString = DatePrototype.toTimeString;
const DatePrototypeToUTCString = DatePrototype.toUTCString;
const DatePrototypeValueOf = DatePrototype.valueOf;
const Error = Global.Error;
const ErrorPrototype = Error.prototype;
const ErrorPrototypeToString = ErrorPrototype.toString;
const EvalError = Global.EvalError;
const EvalErrorPrototype = EvalError.prototype;
const FinalizationRegistry = Global.FinalizationRegistry;
const FinalizationRegistryPrototype = (
  FinalizationRegistry ? FinalizationRegistry.prototype : undefined
);
const FinalizationRegistryPrototypeRegister = (
  FinalizationRegistryPrototype ?
    FinalizationRegistryPrototype.register : undefined
);
const FinalizationRegistryPrototypeUnregister = (
  FinalizationRegistryPrototype ?
    FinalizationRegistryPrototype.unregister : undefined
);
const Float32Array = Global.Float32Array;
const Float32ArrayBYTES_PER_ELEMENT = Float32Array.BYTES_PER_ELEMENT;
const Float32ArrayPrototype = Float32Array.prototype;
const Float64Array = Global.Float64Array;
const Float64ArrayBYTES_PER_ELEMENT = Float64Array.BYTES_PER_ELEMENT;
const Float64ArrayPrototype = Float64Array.prototype;
const Function = Global.Function;
const FunctionPrototype = Function.prototype;
const FunctionPrototypeApply = FunctionPrototype.apply;
const FunctionPrototypeBind = FunctionPrototype.bind;
const FunctionPrototypeCall = FunctionPrototype.call;
const FunctionPrototypeToString = FunctionPrototype.toString;
const Int8Array = Global.Int8Array;
const Int8ArrayBYTES_PER_ELEMENT = Int8Array.BYTES_PER_ELEMENT;
const Int8ArrayPrototype = Int8Array.prototype;
const Int16Array = Global.Int16Array;
const Int16ArrayBYTES_PER_ELEMENT = Int16Array.BYTES_PER_ELEMENT;
const Int16ArrayPrototype = Int16Array.prototype;
const Int32Array = Global.Int32Array;
const Int32ArrayBYTES_PER_ELEMENT = Int32Array.BYTES_PER_ELEMENT;
const Int32ArrayPrototype = Int32Array.prototype;
const JSON = Global.JSON;
const JSONParse = JSON.parse;
const JSONStringify = JSON.stringify;
const Map = Global.Map;
const MapPrototype = Map.prototype;
const MapPrototypeClear = MapPrototype.clear;
const MapPrototypeDelete = MapPrototype.delete;
const MapPrototypeEntries = MapPrototype.entries;
const MapPrototypeForEach = MapPrototype.forEach;
const MapPrototypeGet = MapPrototype.get;
const MapPrototypeHas = MapPrototype.has;
const MapPrototypeKeys = MapPrototype.keys;
const MapPrototypeSet = MapPrototype.set;
const MapPrototypeValues = MapPrototype.values;
const MapPrototypeSymbolIterator = MapPrototypeEntries;
const Math = Global.Math;
const MathE = Math.E;
const MathLN10 = Math.LN10;
const MathLN2 = Math.LN2;
const MathLOG10E = Math.LOG10E;
const MathLOG2E = Math.LOG2E;
const MathPI = Math.PI;
const MathSQRT1_2 = Math.SQRT1_2;
const MathSQRT2 = Math.SQRT2;
const MathAbs = Math.abs;
const MathAcos = Math.acos;
const MathAcosh = Math.acosh;
const MathAsin = Math.asin;
const MathAsinh = Math.asinh;
const MathAtan = Math.atan;
const MathAtanh = Math.atanh;
const MathAtan2 = Math.atan2;
const MathCbrt = Math.cbrt;
const MathCeil = Math.ceil;
const MathClz32 = Math.clz32;
const MathCos = Math.cos;
const MathCosh = Math.cosh;
const MathExp = Math.exp;
const MathExpm1 = Math.expm1;
const MathFloor = Math.floor;
const MathFround = Math.fround;
const MathHypot = Math.hypot;
const MathImul = Math.imul;
const MathLog = Math.log;
const MathLog1p = Math.log1p;
const MathLog10 = Math.log10;
const MathLog2 = Math.log2;
const MathMax = Math.max;
const MathMin = Math.min;
const MathPow = Math.pow;
const MathRandom = Math.random;
const MathRound = Math.round;
const MathSign = Math.sign;
const MathSin = Math.sin;
const MathSinh = Math.sinh;
const MathSqrt = Math.sqrt;
const MathTan = Math.tan;
const MathTanh = Math.tanh;
const MathTrunc = Math.trunc;
const Number = Global.Number;
const NumberEPSILON = Number.EPSILON;
const NumberMAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
const NumberMAX_VALUE = Number.MAX_VALUE;
const NumberMIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
const NumberMIN_VALUE = Number.MIN_VALUE;
const NumberNaN = Number.NaN;
const NumberNEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
const NumberPOSITIVE_INFINITY = Number.POSITIVE_INFINITY;
const NumberIsFinite = Number.isFinite;
const NumberIsInteger = Number.isInteger;
const NumberIsNaN = Number.isNaN;
const NumberIsSafeInteger = Number.isSafeInteger;
const NumberParseFloat = Number.parseFloat;
const NumberParseInt = Number.parseInt;
const NumberPrototype = Number.prototype;
const NumberPrototypeToExponential = NumberPrototype.toExponential;
const NumberPrototypeToFixed = NumberPrototype.toFixed;
const NumberPrototypeToLocaleString = NumberPrototype.toLocaleString;
const NumberPrototypeToPrecision = NumberPrototype.toPrecision;
const NumberPrototypeToString = NumberPrototype.toString;
const NumberPrototypeValueOf = NumberPrototype.valueOf;
const Object = Global.Object;
const ObjectAssign = Object.assign;
const ObjectCreate = Object.create;
const ObjectDefineProperties = Object.defineProperties;
const ObjectDefineProperty = Object.defineProperty;
const ObjectEntries = Object.entries;
const ObjectFreeze = Object.freeze;
const ObjectFromEntries = Object.fromEntries;
const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
const ObjectGetOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;
const ObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
const ObjectGetOwnPropertySymbols = Object.getOwnPropertySymbols;
const ObjectGetPrototypeOf = Object.getPrototypeOf;
const ObjectHasOwn = Object.hasOwn;
const ObjectIs = Object.is;
const ObjectIsExtensible = Object.isExtensible;
const ObjectIsFrozen = Object.isFrozen;
const ObjectIsSealed = Object.isSealed;
const ObjectKeys = Object.keys;
const ObjectPreventExtensions = Object.preventExtensions;
const ObjectSeal = Object.seal;
const ObjectSetPrototypeOf = Object.setPrototypeOf;
const ObjectValues = Object.values;
const ObjectPrototype = Object.prototype;
const ObjectPrototypeHasOwnProperty = ObjectPrototype.hasOwnProperty;
const ObjectPrototypeIsPrototypeOf = ObjectPrototype.isPrototypeOf;
const ObjectPrototypePropertyIsEnumerable = ObjectPrototype.propertyIsEnumerable;
const ObjectPrototypeToLocaleString = ObjectPrototype.toLocaleString;
const ObjectPrototypeToString = ObjectPrototype.toString;
const ObjectPrototypeValueOf = ObjectPrototype.valueOf;
const Promise = Global.Promise;
const PromiseAll = Promise.all;
const PromiseAllSettled = Promise.allSettled;
const PromiseAny = Promise.any;
const PromiseRace = Promise.race;
const PromiseReject = Promise.reject;
const PromiseResolve = Promise.resolve;
const PromisePrototype = Promise.prototype;
const PromisePrototypeCatch = PromisePrototype.catch;
const PromisePrototypeFinally = PromisePrototype.finally;
const PromisePrototypeThen = PromisePrototype.then;
const Proxy = Global.Proxy;
const ProxyRevocable = Proxy.revocable;
const RangeError = Global.RangeError;
const RangeErrorPrototype = RangeError.prototype;
const ReferenceError = Global.ReferenceError;
const ReferenceErrorPrototype = ReferenceError.prototype;
const Reflect = Global.Reflect;
const ReflectApply = Reflect.apply;
const ReflectConstruct = Reflect.construct;
const ReflectDefineProperty = Reflect.defineProperty;
const ReflectDeleteProperty = Reflect.deleteProperty;
const ReflectGet = Reflect.get;
const ReflectGetOwnPropertyDescriptor = Reflect.getOwnPropertyDescriptor;
const ReflectGetPrototypeOf = Reflect.getPrototypeOf;
const ReflectHas = Reflect.has;
const ReflectIsExtensible = Reflect.isExtensible;
const ReflectOwnKeys = Reflect.ownKeys;
const ReflectPreventExtensions = Reflect.preventExtensions;
const ReflectSet = Reflect.set;
const ReflectSetPrototypeOf = Reflect.setPrototypeOf;
const RegExp = Global.RegExp;
const RegExpPrototype = RegExp.prototype;
const RegExpPrototypeExec = RegExpPrototype.exec;
const RegExpPrototypeTest = RegExpPrototype.test;
const RegExpPrototypeToString = RegExpPrototype.toString;
const Set = Global.Set;
const SetPrototype = Set.prototype;
const SetPrototypeAdd = SetPrototype.add;
const SetPrototypeClear = SetPrototype.clear;
const SetPrototypeDelete = SetPrototype.delete;
const SetPrototypeEntries = SetPrototype.entries;
const SetPrototypeForEach = SetPrototype.forEach;
const SetPrototypeHas = SetPrototype.has;
const SetPrototypeKeys = SetPrototype.keys;
const SetPrototypeValues = SetPrototype.values;
const SetPrototypeSymbolIterator = SetPrototypeValues;
const SharedArrayBuffer = Global.SharedArrayBuffer;
const SharedArrayBufferPrototype = (
  SharedArrayBuffer ? SharedArrayBuffer.prototype : undefined
);
const SharedArrayBufferPrototypeSlice = (
  SharedArrayBufferPrototype ? SharedArrayBufferPrototype.slice : undefined
);
const String = Global.String;
const StringFromCharCode = String.fromCharCode;
const StringFromCodePoint = String.fromCodePoint;
const StringRaw = String.raw;
const StringPrototype = String.prototype;
const StringPrototypeAt = StringPrototype.at;
const StringPrototypeCharAt = StringPrototype.charAt;
const StringPrototypeCharCodeAt = StringPrototype.charCodeAt;
const StringPrototypeCodePointAt = StringPrototype.codePointAt;
const StringPrototypeConcat = StringPrototype.concat;
const StringPrototypeEndsWith = StringPrototype.endsWith;
const StringPrototypeIncludes = StringPrototype.includes;
const StringPrototypeIndexOf = StringPrototype.indexOf;
const StringPrototypeLastIndexOf = StringPrototype.lastIndexOf;
const StringPrototypeLocaleCompare = StringPrototype.localeCompare;
const StringPrototypeMatch = StringPrototype.match;
const StringPrototypeMatchAll = StringPrototype.matchAll;
const StringPrototypeNormalize = StringPrototype.normalize;
const StringPrototypePadEnd = StringPrototype.padEnd;
const StringPrototypePadStart = StringPrototype.padStart;
const StringPrototypeRepeat = StringPrototype.repeat;
const StringPrototypeReplace = StringPrototype.replace;
const StringPrototypeReplaceAll = StringPrototype.replaceAll;
const StringPrototypeSearch = StringPrototype.search;
const StringPrototypeSlice = StringPrototype.slice;
const StringPrototypeSplit = StringPrototype.split;
const StringPrototypeStartsWith = StringPrototype.startsWith;
const StringPrototypeSubstring = StringPrototype.substring;
const StringPrototypeToLocaleLowerCase = StringPrototype.toLocaleLowerCase;
const StringPrototypeToLocaleUpperCase = StringPrototype.toLocaleUpperCase;
const StringPrototypeToLowerCase = StringPrototype.toLowerCase;
const StringPrototypeToString = StringPrototype.toString;
const StringPrototypeToUpperCase = StringPrototype.toUpperCase;
const StringPrototypeTrim = StringPrototype.trim;
const StringPrototypeTrimEnd = StringPrototype.trimEnd;
const StringPrototypeTrimStart = StringPrototype.trimStart;
const StringPrototypeValueOf = StringPrototype.valueOf;
const Symbol = Global.Symbol;
const SymbolAsyncIterator = Symbol.asyncIterator;
const SymbolFor = Symbol.for;
const SymbolHasInstance = Symbol.hasInstance;
const SymbolIsConcatSpreadable = Symbol.isConcatSpreadable;
const SymbolIterator = Symbol.iterator;
const SymbolKeyFor = Symbol.keyFor;
const SymbolMatch = Symbol.match;
const SymbolMatchAll = Symbol.matchAll;
const SymbolReplace = Symbol.replace;
const SymbolSearch = Symbol.search;
const SymbolSpecies = Symbol.species;
const SymbolSplit = Symbol.split;
const SymbolToPrimitive = Symbol.toPrimitive;
const SymbolToStringTag = Symbol.toStringTag;
const SymbolUnscopables = Symbol.unscopables;
const SymbolPrototype = Symbol.prototype;
const SymbolPrototypeToString = SymbolPrototype.toString;
const SymbolPrototypeValueOf = SymbolPrototype.valueOf;
const SyntaxError = Global.SyntaxError;
const SyntaxErrorPrototype = SyntaxError.prototype;
const TypeError = Global.TypeError;
const TypeErrorPrototype = TypeError.prototype;
const Uint8Array = Global.Uint8Array;
const Uint8ArrayBYTES_PER_ELEMENT = Uint8Array.BYTES_PER_ELEMENT;
const Uint8ArrayPrototype = Uint8Array.prototype;
const Uint8ClampedArray = Global.Uint8ClampedArray;
const Uint8ClampedArrayBYTES_PER_ELEMENT = Uint8ClampedArray.BYTES_PER_ELEMENT;
const Uint8ClampedArrayPrototype = Uint8ClampedArray.prototype;
const Uint16Array = Global.Uint16Array;
const Uint16ArrayBYTES_PER_ELEMENT = Uint16Array.BYTES_PER_ELEMENT;
const Uint16ArrayPrototype = Uint16Array.prototype;
const Uint32Array = Global.Uint32Array;
const Uint32ArrayBYTES_PER_ELEMENT = Uint32Array.BYTES_PER_ELEMENT;
const Uint32ArrayPrototype = Uint32Array.prototype;
const URIError = Global.URIError;
const URIErrorPrototype = URIError.prototype;
const WeakMap = Global.WeakMap;
const WeakMapPrototype = WeakMap.prototype;
const WeakMapPrototypeDelete = WeakMapPrototype.delete;
const WeakMapPrototypeGet = WeakMapPrototype.get;
const WeakMapPrototypeHas = WeakMapPrototype.has;
const WeakMapPrototypeSet = WeakMapPrototype.set;
const WeakRef = Global.WeakRef;
const WeakRefPrototype = WeakRef ? WeakRef.prototype : undefined;
const WeakRefPrototypeDeref = (
  WeakRefPrototype ? WeakRefPrototype.deref : undefined
);
const WeakSet = Global.WeakSet;
const WeakSetPrototype = WeakSet.prototype;
const WeakSetPrototypeAdd = WeakSetPrototype.add;
const WeakSetPrototypeDelete = WeakSetPrototype.delete;
const WeakSetPrototypeHas = WeakSetPrototype.has;
const DecodeURI = Global.decodeURI;
const DecodeURIComponent = Global.decodeURIComponent;
const EncodeURI = Global.encodeURI;
const EncodeURIComponent = Global.encodeURIComponent;
const Eval = Global.eval;
const IsFinite = Global.isFinite;
const IsNaN = Global.isNaN;
const ParseFloat = Global.parseFloat;
const ParseInt = Global.parseInt;

const UncurryThis = FunctionPrototypeBind.bind(FunctionPrototypeCall);
const ArrayForEach = UncurryThis(ArrayPrototypeForEach);
const ArraySymbolIterator = UncurryThis(ArrayPrototypeSymbolIterator);
const MapGet = UncurryThis(MapPrototypeGet);
const MapHas = UncurryThis(MapPrototypeHas);
const MapSet = UncurryThis(MapPrototypeSet);
const MapSymbolIterator = UncurryThis(MapPrototypeSymbolIterator);
const SetSymbolIterator = UncurryThis(SetPrototypeSymbolIterator);
const WeakMapGet = UncurryThis(WeakMapPrototypeGet);
const WeakMapSet = UncurryThis(WeakMapPrototypeSet);

const GetEvaluatedConstructor = expression => {
  try {
    return new Function(`'use strict'; return (${expression}).constructor;`)();
  } catch (e) {}
}

const GetIteratorPrototype = (constructor, instance) => {
  const iterator = constructor(instance);
  return ReflectGetPrototypeOf(iterator);
}

const GetOwnGetter = (target, key) => {
  const descriptor = ReflectGetOwnPropertyDescriptor(target, key);
  return descriptor ? descriptor.get : undefined;
}

const ArrayPrototypeSymbolUnscopables = ArrayPrototype[SymbolUnscopables];
const ArraySymbolSpecies = GetOwnGetter(Array, SymbolSpecies);
const ArrayBufferPrototypeByteLength = GetOwnGetter(
  ArrayBufferPrototype, 'byteLength'
);
const ArrayBufferPrototypeSymbolToStringTag = (
  ArrayBufferPrototype[SymbolToStringTag]
);
const ArrayBufferSymbolSpecies = GetOwnGetter(ArrayBuffer, SymbolSpecies);
const ArrayIteratorPrototype = GetIteratorPrototype(ArraySymbolIterator, []);
const ArrayIteratorPrototypeNext = ArrayIteratorPrototype.next;
const ArrayIteratorPrototypeSymbolToStringTag = (
  ArrayIteratorPrototype[SymbolToStringTag]
);
const AsyncFunction = GetEvaluatedConstructor('async function () {}');
const AsyncFunctionPrototype = (
  AsyncFunction ? AsyncFunction.prototype : undefined
);
const AsyncFunctionPrototypeSymbolToStringTag = (
  AsyncFunctionPrototype ? AsyncFunctionPrototype[SymbolToStringTag] : undefined
);
const AsyncGeneratorFunction = GetEvaluatedConstructor('async function* () {}');
const AsyncGeneratorFunctionPrototype = (
  AsyncGeneratorFunction ? AsyncGeneratorFunction.prototype : undefined
);
const AsyncGeneratorFunctionPrototypeSymbolToStringTag = (
  AsyncGeneratorFunctionPrototype ?
    AsyncGeneratorFunctionPrototype[SymbolToStringTag] : undefined
);
const AsyncGeneratorPrototype = (
  AsyncGeneratorFunctionPrototype ?
    AsyncGeneratorFunctionPrototype.prototype : undefined
);
const AsyncGeneratorPrototypeNext = (
  AsyncGeneratorPrototype ? AsyncGeneratorPrototype.next : undefined
);
const AsyncGeneratorPrototypeReturn = (
  AsyncGeneratorPrototype ? AsyncGeneratorPrototype.return : undefined
);
const AsyncGeneratorPrototypeThrow = (
  AsyncGeneratorPrototype ? AsyncGeneratorPrototype.throw : undefined
);
const AsyncGeneratorPrototypeSymbolToStringTag = (
  AsyncGeneratorPrototype ?
    AsyncGeneratorPrototype[SymbolToStringTag] : undefined
);
const AsyncIteratorPrototype = (
  AsyncGeneratorPrototype ?
    ReflectGetPrototypeOf(AsyncGeneratorPrototype) : undefined
);
const AsyncIteratorPrototypeSymbolAsyncIterator = (
  AsyncIteratorPrototype ?
    AsyncIteratorPrototype[SymbolAsyncIterator] : undefined
);
const AtomicsSymbolToStringTag = (
  Atomics ? Atomics[SymbolToStringTag] : undefined
);
const BigIntPrototypeSymbolToStringTag = (
  BigIntPrototype ? BigIntPrototype[SymbolToStringTag] : undefined
);
const DataViewPrototypeBuffer = GetOwnGetter(DataViewPrototype, 'buffer');
const DataViewPrototypeByteLength = GetOwnGetter(
  DataViewPrototype, 'byteLength'
);
const DataViewPrototypeByteOffset = GetOwnGetter(
  DataViewPrototype, 'byteOffset'
);
const DataViewPrototypeSymbolToStringTag = DataViewPrototype[SymbolToStringTag];
const DatePrototypeSymbolToPrimitive = DatePrototype[SymbolToPrimitive];
const FinalizationRegistryPrototypeSymbolToStringTag = (
  FinalizationRegistryPrototype ?
    FinalizationRegistryPrototype[SymbolToStringTag] : undefined
);
const FunctionPrototypeSymbolHasInstance = FunctionPrototype[SymbolHasInstance];
const GeneratorFunction = GetEvaluatedConstructor('function* () {}');
const GeneratorFunctionPrototype = GeneratorFunction.prototype;
const GeneratorFunctionPrototypeSymbolToStringTag = (
  GeneratorFunctionPrototype[SymbolToStringTag]
);
const GeneratorPrototype = GeneratorFunctionPrototype.prototype;
const GeneratorPrototypeNext = GeneratorPrototype.next;
const GeneratorPrototypeReturn = GeneratorPrototype.return;
const GeneratorPrototypeThrow = GeneratorPrototype.throw;
const GeneratorPrototypeSymbolToStringTag = (
  GeneratorPrototype[SymbolToStringTag]
);
const IteratorPrototype = ReflectGetPrototypeOf(ArrayIteratorPrototype);
const IteratorPrototypeSymbolIterator = IteratorPrototype[SymbolIterator];
const JSONSymbolToStringTag = JSON[SymbolToStringTag];
const MapPrototypeSize = GetOwnGetter(MapPrototype, 'size');
const MapPrototypeSymbolToStringTag = MapPrototype[SymbolToStringTag];
const MapSymbolSpecies = GetOwnGetter(Map, SymbolSpecies);
const MapIteratorPrototype = GetIteratorPrototype(MapSymbolIterator, new Map);
const MapIteratorPrototypeNext = MapIteratorPrototype.next;
const MapIteratorPrototypeSymbolToStringTag = (
  MapIteratorPrototype[SymbolToStringTag]
);
const MathSymbolToStringTag = Math[SymbolToStringTag];
const PromisePrototypeSymbolToStringTag = PromisePrototype[SymbolToStringTag];
const PromiseSymbolSpecies = GetOwnGetter(Promise, SymbolSpecies);
const ReflectSymbolToStringTag = Reflect[SymbolToStringTag];
const RegExpPrototypeDotAll = GetOwnGetter(RegExpPrototype, 'dotAll');
const RegExpPrototypeFlags = GetOwnGetter(RegExpPrototype, 'flags');
const RegExpPrototypeGlobal = GetOwnGetter(RegExpPrototype, 'global');
const RegExpPrototypeIgnoreCase = GetOwnGetter(RegExpPrototype, 'ignoreCase');
const RegExpPrototypeMultiline = GetOwnGetter(RegExpPrototype, 'multiline');
const RegExpPrototypeSource = GetOwnGetter(RegExpPrototype, 'source');
const RegExpPrototypeSticky = GetOwnGetter(RegExpPrototype, 'sticky');
const RegExpPrototypeUnicode = GetOwnGetter(RegExpPrototype, 'unicode');
const RegExpPrototypeSymbolMatch = RegExpPrototype[SymbolMatch];
const RegExpPrototypeSymbolMatchAll = (
  SymbolMatchAll ? RegExpPrototype[SymbolMatchAll] : undefined
);
const RegExpPrototypeSymbolReplace = RegExpPrototype[SymbolReplace];
const RegExpPrototypeSymbolSearch = RegExpPrototype[SymbolSearch];
const RegExpPrototypeSymbolSplit = RegExpPrototype[SymbolSplit];
const RegExpSymbolSpecies = GetOwnGetter(RegExp, SymbolSpecies);
const SetPrototypeSize = GetOwnGetter(SetPrototype, 'size');
const SetPrototypeSymbolToStringTag = SetPrototype[SymbolToStringTag];
const SetSymbolSpecies = GetOwnGetter(Set, SymbolSpecies);
const SetIteratorPrototype = GetIteratorPrototype(SetSymbolIterator, new Set);
const SetIteratorPrototypeNext = SetIteratorPrototype.next;
const SetIteratorPrototypeSymbolToStringTag = (
  SetIteratorPrototype[SymbolToStringTag]
);
const SharedArrayBufferPrototypeByteLength = (
  SharedArrayBufferPrototype ?
    GetOwnGetter(SharedArrayBufferPrototype, 'byteLength') : undefined
);
const SharedArrayBufferPrototypeSymbolToStringTag = (
  SharedArrayBufferPrototype ?
    SharedArrayBufferPrototype[SymbolToStringTag] : undefined
);
const SharedArrayBufferSymbolSpecies = (
  SharedArrayBuffer ? GetOwnGetter(SharedArrayBuffer, SymbolSpecies) : undefined
);
const StringPrototypeSymbolIterator = StringPrototype[SymbolIterator];
const SymbolPrototypeDescription = GetOwnGetter(SymbolPrototype, 'description');
const SymbolPrototypeSymbolToPrimitive = SymbolPrototype[SymbolToPrimitive];
const SymbolPrototypeSymbolToStringTag = SymbolPrototype[SymbolToStringTag];
const TypedArray = ReflectGetPrototypeOf(Uint8Array);
const TypedArrayFrom = TypedArray.from;
const TypedArrayOf = TypedArray.of;
const TypedArrayPrototype = TypedArray.prototype;
const TypedArrayPrototypeAt = TypedArrayPrototype.at;
const TypedArrayPrototypeBuffer = GetOwnGetter(TypedArrayPrototype, 'buffer');
const TypedArrayPrototypeByteLength = GetOwnGetter(
  TypedArrayPrototype, 'byteLength'
);
const TypedArrayPrototypeByteOffset = GetOwnGetter(
  TypedArrayPrototype, 'byteOffset'
);
const TypedArrayPrototypeCopyWithin = TypedArrayPrototype.copyWithin;
const TypedArrayPrototypeEntries = TypedArrayPrototype.entries;
const TypedArrayPrototypeEvery = TypedArrayPrototype.every;
const TypedArrayPrototypeFill = TypedArrayPrototype.fill;
const TypedArrayPrototypeFilter = TypedArrayPrototype.filter;
const TypedArrayPrototypeFind = TypedArrayPrototype.find;
const TypedArrayPrototypeFindIndex = TypedArrayPrototype.findIndex;
const TypedArrayPrototypeForEach = TypedArrayPrototype.forEach;
const TypedArrayPrototypeIncludes = TypedArrayPrototype.includes;
const TypedArrayPrototypeIndexOf = TypedArrayPrototype.indexOf;
const TypedArrayPrototypeJoin = TypedArrayPrototype.join;
const TypedArrayPrototypeKeys = TypedArrayPrototype.keys;
const TypedArrayPrototypeLastIndexOf = TypedArrayPrototype.lastIndexOf;
const TypedArrayPrototypeLength = GetOwnGetter(TypedArrayPrototype, 'length');
const TypedArrayPrototypeMap = TypedArrayPrototype.map;
const TypedArrayPrototypeReduce = TypedArrayPrototype.reduce;
const TypedArrayPrototypeReduceRight = TypedArrayPrototype.reduceRight;
const TypedArrayPrototypeReverse = TypedArrayPrototype.reverse;
const TypedArrayPrototypeSet = TypedArrayPrototype.set;
const TypedArrayPrototypeSlice = TypedArrayPrototype.slice;
const TypedArrayPrototypeSome = TypedArrayPrototype.some;
const TypedArrayPrototypeSort = TypedArrayPrototype.sort;
const TypedArrayPrototypeSubarray = TypedArrayPrototype.subarray;
const TypedArrayPrototypeToLocaleString = TypedArrayPrototype.toLocaleString;
const TypedArrayPrototypeToString = ArrayPrototypeToString;
const TypedArrayPrototypeValues = TypedArrayPrototype.values;
const TypedArrayPrototypeSymbolIterator = TypedArrayPrototypeValues;
const TypedArrayPrototypeSymbolToStringTag = GetOwnGetter(
  TypedArrayPrototype, SymbolToStringTag
);
const TypedArraySymbolSpecies = GetOwnGetter(TypedArray, SymbolSpecies);
const WeakMapPrototypeSymbolToStringTag = WeakMapPrototype[SymbolToStringTag];
const WeakRefPrototypeSymbolToStringTag = (
  WeakRefPrototype ? WeakRefPrototype[SymbolToStringTag] : undefined
);
const WeakSetPrototypeSymbolToStringTag = WeakSetPrototype[SymbolToStringTag];

const RegExpSymbolMatchAll = (
  RegExpPrototypeSymbolMatchAll ?
    UncurryThis(RegExpPrototypeSymbolMatchAll) : undefined
);
const StringSymbolIterator = UncurryThis(StringPrototypeSymbolIterator);

const RegExpStringIteratorPrototype = (
  RegExpSymbolMatchAll ?
    GetIteratorPrototype(RegExpSymbolMatchAll, /(?:)/) : undefined
);
const RegExpStringIteratorPrototypeNext = (
  RegExpStringIteratorPrototype ? RegExpStringIteratorPrototype.next : undefined
);
const RegExpStringIteratorPrototypeSymbolToStringTag = (
  RegExpStringIteratorPrototype ?
    RegExpStringIteratorPrototype[SymbolToStringTag] : undefined
);
const StringIteratorPrototype = GetIteratorPrototype(StringSymbolIterator, '');
const StringIteratorPrototypeNext = StringIteratorPrototype.next;
const StringIteratorPrototypeSymbolToStringTag = (
  StringIteratorPrototype[SymbolToStringTag]
);

const INTRINSICS = new Map();

ArrayForEach([
  ['AggregateError', AggregateError],
  ['AggregateError.prototype', AggregateErrorPrototype],
  ['Array', Array],
  ['Array.from', ArrayFrom],
  ['Array.isArray', ArrayIsArray],
  ['Array.of', ArrayOf],
  ['Array.prototype', ArrayPrototype],
  ['Array.prototype.at', ArrayPrototypeAt],
  ['Array.prototype.concat', ArrayPrototypeConcat],
  ['Array.prototype.copyWithin', ArrayPrototypeCopyWithin],
  ['Array.prototype.entries', ArrayPrototypeEntries],
  ['Array.prototype.every', ArrayPrototypeEvery],
  ['Array.prototype.fill', ArrayPrototypeFill],
  ['Array.prototype.filter', ArrayPrototypeFilter],
  ['Array.prototype.find', ArrayPrototypeFind],
  ['Array.prototype.findIndex', ArrayPrototypeFindIndex],
  ['Array.prototype.flat', ArrayPrototypeFlat],
  ['Array.prototype.flatMap', ArrayPrototypeFlatMap],
  ['Array.prototype.forEach', ArrayPrototypeForEach],
  ['Array.prototype.includes', ArrayPrototypeIncludes],
  ['Array.prototype.indexOf', ArrayPrototypeIndexOf],
  ['Array.prototype.join', ArrayPrototypeJoin],
  ['Array.prototype.keys', ArrayPrototypeKeys],
  ['Array.prototype.lastIndexOf', ArrayPrototypeLastIndexOf],
  ['Array.prototype.map', ArrayPrototypeMap],
  ['Array.prototype.pop', ArrayPrototypePop],
  ['Array.prototype.push', ArrayPrototypePush],
  ['Array.prototype.reduce', ArrayPrototypeReduce],
  ['Array.prototype.reduceRight', ArrayPrototypeReduceRight],
  ['Array.prototype.reverse', ArrayPrototypeReverse],
  ['Array.prototype.shift', ArrayPrototypeShift],
  ['Array.prototype.slice', ArrayPrototypeSlice],
  ['Array.prototype.some', ArrayPrototypeSome],
  ['Array.prototype.sort', ArrayPrototypeSort],
  ['Array.prototype.splice', ArrayPrototypeSplice],
  ['Array.prototype.toLocaleString', ArrayPrototypeToLocaleString],
  ['Array.prototype.toString', ArrayPrototypeToString],
  ['Array.prototype.unshift', ArrayPrototypeUnshift],
  ['Array.prototype.values', ArrayPrototypeValues],
  ['Array.prototype[@@iterator]', ArrayPrototypeSymbolIterator],
  ['Array.prototype[@@unscopables]', ArrayPrototypeSymbolUnscopables],
  ['get Array[@@species]', ArraySymbolSpecies],
  ['ArrayBuffer', ArrayBuffer],
  ['ArrayBuffer.isView', ArrayBufferIsView],
  ['ArrayBuffer.prototype', ArrayBufferPrototype],
  ['get ArrayBuffer.prototype.byteLength', ArrayBufferPrototypeByteLength],
  ['ArrayBuffer.prototype.slice', ArrayBufferPrototypeSlice],
  [
    'ArrayBuffer.prototype[@@toStringTag]',
    ArrayBufferPrototypeSymbolToStringTag
  ],
  ['get ArrayBuffer[@@species]', ArrayBufferSymbolSpecies],
  ['ArrayIteratorPrototype', ArrayIteratorPrototype],
  ['ArrayIteratorPrototype.next', ArrayIteratorPrototypeNext],
  [
    'ArrayIteratorPrototype[@@toStringTag]',
    ArrayIteratorPrototypeSymbolToStringTag
  ],
  ['AsyncFunction', AsyncFunction],
  ['AsyncFunction.prototype', AsyncFunctionPrototype],
  [
    'AsyncFunction.prototype[@@toStringTag]',
    AsyncFunctionPrototypeSymbolToStringTag
  ],
  ['AsyncGeneratorFunction', AsyncGeneratorFunction],
  ['AsyncGeneratorFunction.prototype', AsyncGeneratorFunctionPrototype],
  [
    'AsyncGeneratorFunction.prototype[@@toStringTag]',
    AsyncGeneratorFunctionPrototypeSymbolToStringTag
  ],
  ['AsyncGeneratorPrototype', AsyncGeneratorPrototype],
  ['AsyncGeneratorPrototype.next', AsyncGeneratorPrototypeNext],
  ['AsyncGeneratorPrototype.return', AsyncGeneratorPrototypeReturn],
  ['AsyncGeneratorPrototype.throw', AsyncGeneratorPrototypeThrow],
  [
    'AsyncGeneratorPrototype[@@toStringTag]',
    AsyncGeneratorPrototypeSymbolToStringTag
  ],
  ['AsyncIteratorPrototype', AsyncIteratorPrototype],
  [
    'AsyncIteratorPrototype[@@asyncIterator]',
    AsyncIteratorPrototypeSymbolAsyncIterator
  ],
  ['Atomics', Atomics],
  ['Atomics.add', AtomicsAdd],
  ['Atomics.and', AtomicsAnd],
  ['Atomics.compareExchange', AtomicsCompareExchange],
  ['Atomics.exchange', AtomicsExchange],
  ['Atomics.isLockFree', AtomicsIsLockFree],
  ['Atomics.load', AtomicsLoad],
  ['Atomics.or', AtomicsOr],
  ['Atomics.store', AtomicsStore],
  ['Atomics.sub', AtomicsSub],
  ['Atomics.wait', AtomicsWait],
  ['Atomics.notify', AtomicsNotify],
  ['Atomics.xor', AtomicsXor],
  ['Atomics[@@toStringTag]', AtomicsSymbolToStringTag],
  ['BigInt', BigInt],
  ['BigInt.asIntN', BigIntAsIntN],
  ['BigInt.asUintN', BigIntAsUintN],
  ['BigInt.prototype', BigIntPrototype],
  ['BigInt.prototype.toLocaleString', BigIntPrototypeToLocaleString],
  ['BigInt.prototype.toString', BigIntPrototypeToString],
  ['BigInt.prototype.valueOf', BigIntPrototypeValueOf],
  ['BigInt.prototype[@@toStringTag]', BigIntPrototypeSymbolToStringTag],
  ['BigInt64Array', BigInt64Array],
  ['BigInt64Array.BYTES_PER_ELEMENT', BigInt64ArrayBYTES_PER_ELEMENT],
  ['BigInt64Array.prototype', BigInt64ArrayPrototype],
  ['BigUint64Array', BigUint64Array],
  ['BigUint64Array.BYTES_PER_ELEMENT', BigUint64ArrayBYTES_PER_ELEMENT],
  ['BigUint64Array.prototype', BigUint64ArrayPrototype],
  ['Boolean', Boolean],
  ['Boolean.prototype', BooleanPrototype],
  ['Boolean.prototype.toString', BooleanPrototypeToString],
  ['Boolean.prototype.valueOf', BooleanPrototypeValueOf],
  ['DataView', DataView],
  ['DataView.prototype', DataViewPrototype],
  ['get DataView.prototype.buffer', DataViewPrototypeBuffer],
  ['get DataView.prototype.byteLength', DataViewPrototypeByteLength],
  ['get DataView.prototype.byteOffset', DataViewPrototypeByteOffset],
  ['DataView.prototype.getBigInt64', DataViewPrototypeGetBigInt64],
  ['DataView.prototype.getBigUint64', DataViewPrototypeGetBigUint64],
  ['DataView.prototype.getFloat32', DataViewPrototypeGetFloat32],
  ['DataView.prototype.getFloat64', DataViewPrototypeGetFloat64],
  ['DataView.prototype.getInt8', DataViewPrototypeGetInt8],
  ['DataView.prototype.getInt16', DataViewPrototypeGetInt16],
  ['DataView.prototype.getInt32', DataViewPrototypeGetInt32],
  ['DataView.prototype.getUint8', DataViewPrototypeGetUint8],
  ['DataView.prototype.getUint16', DataViewPrototypeGetUint16],
  ['DataView.prototype.getUint32', DataViewPrototypeGetUint32],
  ['DataView.prototype.setBigInt64', DataViewPrototypeSetBigInt64],
  ['DataView.prototype.setBigUint64', DataViewPrototypeSetBigUint64],
  ['DataView.prototype.setFloat32', DataViewPrototypeSetFloat32],
  ['DataView.prototype.setFloat64', DataViewPrototypeSetFloat64],
  ['DataView.prototype.setInt8', DataViewPrototypeSetInt8],
  ['DataView.prototype.setInt16', DataViewPrototypeSetInt16],
  ['DataView.prototype.setInt32', DataViewPrototypeSetInt32],
  ['DataView.prototype.setUint8', DataViewPrototypeSetUint8],
  ['DataView.prototype.setUint16', DataViewPrototypeSetUint16],
  ['DataView.prototype.setUint32', DataViewPrototypeSetUint32],
  ['DataView.prototype[@@toStringTag]', DataViewPrototypeSymbolToStringTag],
  ['Date', Date],
  ['Date.now', DateNow],
  ['Date.parse', DateParse],
  ['Date.UTC', DateUTC],
  ['Date.prototype', DatePrototype],
  ['Date.prototype.getDate', DatePrototypeGetDate],
  ['Date.prototype.getDay', DatePrototypeGetDay],
  ['Date.prototype.getFullYear', DatePrototypeGetFullYear],
  ['Date.prototype.getHours', DatePrototypeGetHours],
  ['Date.prototype.getMilliseconds', DatePrototypeGetMilliseconds],
  ['Date.prototype.getMinutes', DatePrototypeGetMinutes],
  ['Date.prototype.getMonth', DatePrototypeGetMonth],
  ['Date.prototype.getSeconds', DatePrototypeGetSeconds],
  ['Date.prototype.getTime', DatePrototypeGetTime],
  ['Date.prototype.getTimezoneOffset', DatePrototypeGetTimezoneOffset],
  ['Date.prototype.getUTCDate', DatePrototypeGetUTCDate],
  ['Date.prototype.getUTCDay', DatePrototypeGetUTCDay],
  ['Date.prototype.getUTCFullYear', DatePrototypeGetUTCFullYear],
  ['Date.prototype.getUTCHours', DatePrototypeGetUTCHours],
  ['Date.prototype.getUTCMilliseconds', DatePrototypeGetUTCMilliseconds],
  ['Date.prototype.getUTCMinutes', DatePrototypeGetUTCMinutes],
  ['Date.prototype.getUTCMonth', DatePrototypeGetUTCMonth],
  ['Date.prototype.getUTCSeconds', DatePrototypeGetUTCSeconds],
  ['Date.prototype.setDate', DatePrototypeSetDate],
  ['Date.prototype.setFullYear', DatePrototypeSetFullYear],
  ['Date.prototype.setHours', DatePrototypeSetHours],
  ['Date.prototype.setMilliseconds', DatePrototypeSetMilliseconds],
  ['Date.prototype.setMinutes', DatePrototypeSetMinutes],
  ['Date.prototype.setMonth', DatePrototypeSetMonth],
  ['Date.prototype.setSeconds', DatePrototypeSetSeconds],
  ['Date.prototype.setTime', DatePrototypeSetTime],
  ['Date.prototype.setUTCDate', DatePrototypeSetUTCDate],
  ['Date.prototype.setUTCFullYear', DatePrototypeSetUTCFullYear],
  ['Date.prototype.setUTCHours', DatePrototypeSetUTCHours],
  ['Date.prototype.setUTCMilliseconds', DatePrototypeSetUTCMilliseconds],
  ['Date.prototype.setUTCMinutes', DatePrototypeSetUTCMinutes],
  ['Date.prototype.setUTCMonth', DatePrototypeSetUTCMonth],
  ['Date.prototype.setUTCSeconds', DatePrototypeSetUTCSeconds],
  ['Date.prototype.toDateString', DatePrototypeToDateString],
  ['Date.prototype.toISOString', DatePrototypeToISOString],
  ['Date.prototype.toJSON', DatePrototypeToJSON],
  ['Date.prototype.toLocaleDateString', DatePrototypeToLocaleDateString],
  ['Date.prototype.toLocaleString', DatePrototypeToLocaleString],
  ['Date.prototype.toLocaleTimeString', DatePrototypeToLocaleTimeString],
  ['Date.prototype.toString', DatePrototypeToString],
  ['Date.prototype.toTimeString', DatePrototypeToTimeString],
  ['Date.prototype.toUTCString', DatePrototypeToUTCString],
  ['Date.prototype.valueOf', DatePrototypeValueOf],
  ['Date.prototype[@@toPrimitive]', DatePrototypeSymbolToPrimitive],
  ['Error', Error],
  ['Error.prototype', ErrorPrototype],
  ['Error.prototype.toString', ErrorPrototypeToString],
  ['EvalError', EvalError],
  ['EvalError.prototype', EvalErrorPrototype],
  ['FinalizationRegistry', FinalizationRegistry],
  ['FinalizationRegistry.prototype', FinalizationRegistryPrototype],
  [
    'FinalizationRegistry.prototype.register',
    FinalizationRegistryPrototypeRegister
  ],
  [
    'FinalizationRegistry.prototype.unregister',
    FinalizationRegistryPrototypeUnregister
  ],
  [
    'FinalizationRegistry.prototype[@@toStringTag]',
    FinalizationRegistryPrototypeSymbolToStringTag
  ],
  ['Float32Array', Float32Array],
  ['Float32Array.BYTES_PER_ELEMENT', Float32ArrayBYTES_PER_ELEMENT],
  ['Float32Array.prototype', Float32ArrayPrototype],
  ['Float64Array', Float64Array],
  ['Float64Array.BYTES_PER_ELEMENT', Float64ArrayBYTES_PER_ELEMENT],
  ['Float64Array.prototype', Float64ArrayPrototype],
  ['Function', Function],
  ['Function.prototype', FunctionPrototype],
  ['Function.prototype.apply', FunctionPrototypeApply],
  ['Function.prototype.bind', FunctionPrototypeBind],
  ['Function.prototype.call', FunctionPrototypeCall],
  ['Function.prototype.toString', FunctionPrototypeToString],
  ['Function.prototype[@@hasInstance]', FunctionPrototypeSymbolHasInstance],
  ['GeneratorFunction', GeneratorFunction],
  ['GeneratorFunction.prototype', GeneratorFunctionPrototype],
  [
    'GeneratorFunction.prototype[@@toStringTag]',
    GeneratorFunctionPrototypeSymbolToStringTag
  ],
  ['GeneratorPrototype', GeneratorPrototype],
  ['GeneratorPrototype.next', GeneratorPrototypeNext],
  ['GeneratorPrototype.return', GeneratorPrototypeReturn],
  ['GeneratorPrototype.throw', GeneratorPrototypeThrow],
  ['GeneratorPrototype[@@toStringTag]', GeneratorPrototypeSymbolToStringTag],
  ['Int8Array', Int8Array],
  ['Int8Array.BYTES_PER_ELEMENT', Int8ArrayBYTES_PER_ELEMENT],
  ['Int8Array.prototype', Int8ArrayPrototype],
  ['Int16Array', Int16Array],
  ['Int16Array.BYTES_PER_ELEMENT', Int16ArrayBYTES_PER_ELEMENT],
  ['Int16Array.prototype', Int16ArrayPrototype],
  ['Int32Array', Int32Array],
  ['Int32Array.BYTES_PER_ELEMENT', Int32ArrayBYTES_PER_ELEMENT],
  ['Int32Array.prototype', Int32ArrayPrototype],
  ['IteratorPrototype', IteratorPrototype],
  ['IteratorPrototype[@@iterator]', IteratorPrototypeSymbolIterator],
  ['JSON', JSON],
  ['JSON.parse', JSONParse],
  ['JSON.stringify', JSONStringify],
  ['JSON[@@toStringTag]', JSONSymbolToStringTag],
  ['Map', Map],
  ['Map.prototype', MapPrototype],
  ['Map.prototype.clear', MapPrototypeClear],
  ['Map.prototype.delete', MapPrototypeDelete],
  ['Map.prototype.entries', MapPrototypeEntries],
  ['Map.prototype.forEach', MapPrototypeForEach],
  ['Map.prototype.get', MapPrototypeGet],
  ['Map.prototype.has', MapPrototypeHas],
  ['Map.prototype.keys', MapPrototypeKeys],
  ['Map.prototype.set', MapPrototypeSet],
  ['get Map.prototype.size', MapPrototypeSize],
  ['Map.prototype.values', MapPrototypeValues],
  ['Map.prototype[@@iterator]', MapPrototypeSymbolIterator],
  ['Map.prototype[@@toStringTag]', MapPrototypeSymbolToStringTag],
  ['MapIteratorPrototype', MapIteratorPrototype],
  ['MapIteratorPrototype.next', MapIteratorPrototypeNext],
  ['MapIteratorPrototype[@@toStringTag]', MapIteratorPrototypeSymbolToStringTag],
  ['get Map[@@species]', MapSymbolSpecies],
  ['Math', Math],
  ['Math.E', MathE],
  ['Math.LN10', MathLN10],
  ['Math.LN2', MathLN2],
  ['Math.LOG10E', MathLOG10E],
  ['Math.LOG2E', MathLOG2E],
  ['Math.PI', MathPI],
  ['Math.SQRT1_2', MathSQRT1_2],
  ['Math.SQRT2', MathSQRT2],
  ['Math.abs', MathAbs],
  ['Math.acos', MathAcos],
  ['Math.acosh', MathAcosh],
  ['Math.asin', MathAsin],
  ['Math.asinh', MathAsinh],
  ['Math.atan', MathAtan],
  ['Math.atanh', MathAtanh],
  ['Math.atan2', MathAtan2],
  ['Math.cbrt', MathCbrt],
  ['Math.ceil', MathCeil],
  ['Math.clz32', MathClz32],
  ['Math.cos', MathCos],
  ['Math.cosh', MathCosh],
  ['Math.exp', MathExp],
  ['Math.expm1', MathExpm1],
  ['Math.floor', MathFloor],
  ['Math.fround', MathFround],
  ['Math.hypot', MathHypot],
  ['Math.imul', MathImul],
  ['Math.log', MathLog],
  ['Math.log1p', MathLog1p],
  ['Math.log10', MathLog10],
  ['Math.log2', MathLog2],
  ['Math.max', MathMax],
  ['Math.min', MathMin],
  ['Math.pow', MathPow],
  ['Math.random', MathRandom],
  ['Math.round', MathRound],
  ['Math.sign', MathSign],
  ['Math.sin', MathSin],
  ['Math.sinh', MathSinh],
  ['Math.sqrt', MathSqrt],
  ['Math.tan', MathTan],
  ['Math.tanh', MathTanh],
  ['Math.trunc', MathTrunc],
  ['Math[@@toStringTag]', MathSymbolToStringTag],
  ['Number', Number],
  ['Number.EPSILON', NumberEPSILON],
  ['Number.MAX_SAFE_INTEGER', NumberMAX_SAFE_INTEGER],
  ['Number.MAX_VALUE', NumberMAX_VALUE],
  ['Number.MIN_SAFE_INTEGER', NumberMIN_SAFE_INTEGER],
  ['Number.MIN_VALUE', NumberMIN_VALUE],
  ['Number.NaN', NumberNaN],
  ['Number.NEGATIVE_INFINITY', NumberNEGATIVE_INFINITY],
  ['Number.POSITIVE_INFINITY', NumberPOSITIVE_INFINITY],
  ['Number.isFinite', NumberIsFinite],
  ['Number.isInteger', NumberIsInteger],
  ['Number.isNaN', NumberIsNaN],
  ['Number.isSafeInteger', NumberIsSafeInteger],
  ['Number.parseFloat', NumberParseFloat],
  ['Number.parseInt', NumberParseInt],
  ['Number.prototype', NumberPrototype],
  ['Number.prototype.toExponential', NumberPrototypeToExponential],
  ['Number.prototype.toFixed', NumberPrototypeToFixed],
  ['Number.prototype.toLocaleString', NumberPrototypeToLocaleString],
  ['Number.prototype.toPrecision', NumberPrototypeToPrecision],
  ['Number.prototype.toString', NumberPrototypeToString],
  ['Number.prototype.valueOf', NumberPrototypeValueOf],
  ['Object', Object],
  ['Object.assign', ObjectAssign],
  ['Object.create', ObjectCreate],
  ['Object.defineProperties', ObjectDefineProperties],
  ['Object.defineProperty', ObjectDefineProperty],
  ['Object.entries', ObjectEntries],
  ['Object.freeze', ObjectFreeze],
  ['Object.fromEntries', ObjectFromEntries],
  ['Object.getOwnPropertyDescriptor', ObjectGetOwnPropertyDescriptor],
  ['Object.getOwnPropertyDescriptors', ObjectGetOwnPropertyDescriptors],
  ['Object.getOwnPropertyNames', ObjectGetOwnPropertyNames],
  ['Object.getOwnPropertySymbols', ObjectGetOwnPropertySymbols],
  ['Object.getPrototypeOf', ObjectGetPrototypeOf],
  ['Object.hasOwn', ObjectHasOwn],
  ['Object.is', ObjectIs],
  ['Object.isExtensible', ObjectIsExtensible],
  ['Object.isFrozen', ObjectIsFrozen],
  ['Object.isSealed', ObjectIsSealed],
  ['Object.keys', ObjectKeys],
  ['Object.preventExtensions', ObjectPreventExtensions],
  ['Object.seal', ObjectSeal],
  ['Object.setPrototypeOf', ObjectSetPrototypeOf],
  ['Object.values', ObjectValues],
  ['Object.prototype', ObjectPrototype],
  ['Object.prototype.hasOwnProperty', ObjectPrototypeHasOwnProperty],
  ['Object.prototype.isPrototypeOf', ObjectPrototypeIsPrototypeOf],
  ['Object.prototype.propertyIsEnumerable', ObjectPrototypePropertyIsEnumerable],
  ['Object.prototype.toLocaleString', ObjectPrototypeToLocaleString],
  ['Object.prototype.toString', ObjectPrototypeToString],
  ['Object.prototype.valueOf', ObjectPrototypeValueOf],
  ['Promise', Promise],
  ['Promise.all', PromiseAll],
  ['Promise.allSettled', PromiseAllSettled],
  ['Promise.any', PromiseAny],
  ['Promise.race', PromiseRace],
  ['Promise.reject', PromiseReject],
  ['Promise.resolve', PromiseResolve],
  ['Promise.prototype', PromisePrototype],
  ['Promise.prototype.catch', PromisePrototypeCatch],
  ['Promise.prototype.finally', PromisePrototypeFinally],
  ['Promise.prototype.then', PromisePrototypeThen],
  ['Promise.prototype[@@toStringTag]', PromisePrototypeSymbolToStringTag],
  ['get Promise[@@species]', PromiseSymbolSpecies],
  ['Proxy', Proxy],
  ['Proxy.revocable', ProxyRevocable],
  ['RangeError', RangeError],
  ['RangeError.prototype', RangeErrorPrototype],
  ['ReferenceError', ReferenceError],
  ['ReferenceError.prototype', ReferenceErrorPrototype],
  ['Reflect', Reflect],
  ['Reflect.apply', ReflectApply],
  ['Reflect.construct', ReflectConstruct],
  ['Reflect.defineProperty', ReflectDefineProperty],
  ['Reflect.deleteProperty', ReflectDeleteProperty],
  ['Reflect.get', ReflectGet],
  ['Reflect.getOwnPropertyDescriptor', ReflectGetOwnPropertyDescriptor],
  ['Reflect.getPrototypeOf', ReflectGetPrototypeOf],
  ['Reflect.has', ReflectHas],
  ['Reflect.isExtensible', ReflectIsExtensible],
  ['Reflect.ownKeys', ReflectOwnKeys],
  ['Reflect.preventExtensions', ReflectPreventExtensions],
  ['Reflect.set', ReflectSet],
  ['Reflect.setPrototypeOf', ReflectSetPrototypeOf],
  ['Reflect[@@toStringTag]', ReflectSymbolToStringTag],
  ['RegExp', RegExp],
  ['RegExp.prototype', RegExpPrototype],
  ['get RegExp.prototype.dotAll', RegExpPrototypeDotAll],
  ['RegExp.prototype.exec', RegExpPrototypeExec],
  ['get RegExp.prototype.flags', RegExpPrototypeFlags],
  ['get RegExp.prototype.global', RegExpPrototypeGlobal],
  ['get RegExp.prototype.ignoreCase', RegExpPrototypeIgnoreCase],
  ['get RegExp.prototype.multiline', RegExpPrototypeMultiline],
  ['get RegExp.prototype.source', RegExpPrototypeSource],
  ['get RegExp.prototype.sticky', RegExpPrototypeSticky],
  ['RegExp.prototype.test', RegExpPrototypeTest],
  ['RegExp.prototype.toString', RegExpPrototypeToString],
  ['get RegExp.prototype.unicode', RegExpPrototypeUnicode],
  ['RegExp.prototype[@@match]', RegExpPrototypeSymbolMatch],
  ['RegExp.prototype[@@matchAll]', RegExpPrototypeSymbolMatchAll],
  ['RegExp.prototype[@@replace]', RegExpPrototypeSymbolReplace],
  ['RegExp.prototype[@@search]', RegExpPrototypeSymbolSearch],
  ['RegExp.prototype[@@split]', RegExpPrototypeSymbolSplit],
  ['get RegExp[@@species]', RegExpSymbolSpecies],
  ['RegExpStringIteratorPrototype', RegExpStringIteratorPrototype],
  ['RegExpStringIteratorPrototype.next', RegExpStringIteratorPrototypeNext],
  [
    'RegExpStringIteratorPrototype[@@toStringTag]',
    RegExpStringIteratorPrototypeSymbolToStringTag
  ],
  ['Set', Set],
  ['Set.prototype', SetPrototype],
  ['Set.prototype.add', SetPrototypeAdd],
  ['Set.prototype.clear', SetPrototypeClear],
  ['Set.prototype.delete', SetPrototypeDelete],
  ['Set.prototype.entries', SetPrototypeEntries],
  ['Set.prototype.forEach', SetPrototypeForEach],
  ['Set.prototype.has', SetPrototypeHas],
  ['Set.prototype.keys', SetPrototypeKeys],
  ['get Set.prototype.size', SetPrototypeSize],
  ['Set.prototype.values', SetPrototypeValues],
  ['Set.prototype[@@iterator]', SetPrototypeSymbolIterator],
  ['Set.prototype[@@toStringTag]', SetPrototypeSymbolToStringTag],
  ['get Set[@@species]', SetSymbolSpecies],
  ['SetIteratorPrototype', SetIteratorPrototype],
  ['SetIteratorPrototype.next', SetIteratorPrototypeNext],
  ['SetIteratorPrototype[@@toStringTag]', SetIteratorPrototypeSymbolToStringTag],
  ['SharedArrayBuffer', SharedArrayBuffer],
  ['SharedArrayBuffer.prototype', SharedArrayBufferPrototype],
  [
    'get SharedArrayBuffer.prototype.byteLength',
    SharedArrayBufferPrototypeByteLength
  ],
  ['SharedArrayBuffer.prototype.slice', SharedArrayBufferPrototypeSlice],
  [
    'SharedArrayBuffer.prototype[@@toStringTag]',
    SharedArrayBufferPrototypeSymbolToStringTag
  ],
  ['get SharedArrayBuffer[@@species]', SharedArrayBufferSymbolSpecies],
  ['String', String],
  ['String.fromCharCode', StringFromCharCode],
  ['String.fromCodePoint', StringFromCodePoint],
  ['String.raw', StringRaw],
  ['String.prototype', StringPrototype],
  ['String.prototype.at', StringPrototypeAt],
  ['String.prototype.charAt', StringPrototypeCharAt],
  ['String.prototype.charCodeAt', StringPrototypeCharCodeAt],
  ['String.prototype.codePointAt', StringPrototypeCodePointAt],
  ['String.prototype.concat', StringPrototypeConcat],
  ['String.prototype.endsWith', StringPrototypeEndsWith],
  ['String.prototype.includes', StringPrototypeIncludes],
  ['String.prototype.indexOf', StringPrototypeIndexOf],
  ['String.prototype.lastIndexOf', StringPrototypeLastIndexOf],
  ['String.prototype.localeCompare', StringPrototypeLocaleCompare],
  ['String.prototype.match', StringPrototypeMatch],
  ['String.prototype.matchAll', StringPrototypeMatchAll],
  ['String.prototype.normalize', StringPrototypeNormalize],
  ['String.prototype.padEnd', StringPrototypePadEnd],
  ['String.prototype.padStart', StringPrototypePadStart],
  ['String.prototype.repeat', StringPrototypeRepeat],
  ['String.prototype.replace', StringPrototypeReplace],
  ['String.prototype.replaceAll', StringPrototypeReplaceAll],
  ['String.prototype.search', StringPrototypeSearch],
  ['String.prototype.slice', StringPrototypeSlice],
  ['String.prototype.split', StringPrototypeSplit],
  ['String.prototype.startsWith', StringPrototypeStartsWith],
  ['String.prototype.substring', StringPrototypeSubstring],
  ['String.prototype.toLocaleLowerCase', StringPrototypeToLocaleLowerCase],
  ['String.prototype.toLocaleUpperCase', StringPrototypeToLocaleUpperCase],
  ['String.prototype.toLowerCase', StringPrototypeToLowerCase],
  ['String.prototype.toString', StringPrototypeToString],
  ['String.prototype.toUpperCase', StringPrototypeToUpperCase],
  ['String.prototype.trim', StringPrototypeTrim],
  ['String.prototype.trimEnd', StringPrototypeTrimEnd],
  ['String.prototype.trimStart', StringPrototypeTrimStart],
  ['String.prototype.valueOf', StringPrototypeValueOf],
  ['String.prototype[@@iterator]', StringPrototypeSymbolIterator],
  ['StringIteratorPrototype', StringIteratorPrototype],
  ['StringIteratorPrototype.next', StringIteratorPrototypeNext],
  [
    'StringIteratorPrototype[@@toStringTag]',
    StringIteratorPrototypeSymbolToStringTag
  ],
  ['Symbol', Symbol],
  ['Symbol.asyncIterator', SymbolAsyncIterator],
  ['Symbol.for', SymbolFor],
  ['Symbol.hasInstance', SymbolHasInstance],
  ['Symbol.isConcatSpreadable', SymbolIsConcatSpreadable],
  ['Symbol.iterator', SymbolIterator],
  ['Symbol.keyFor', SymbolKeyFor],
  ['Symbol.match', SymbolMatch],
  ['Symbol.matchAll', SymbolMatchAll],
  ['Symbol.replace', SymbolReplace],
  ['Symbol.search', SymbolSearch],
  ['Symbol.species', SymbolSpecies],
  ['Symbol.split', SymbolSplit],
  ['Symbol.toPrimitive', SymbolToPrimitive],
  ['Symbol.toStringTag', SymbolToStringTag],
  ['Symbol.unscopables', SymbolUnscopables],
  ['Symbol.prototype', SymbolPrototype],
  ['get Symbol.prototype.description', SymbolPrototypeDescription],
  ['Symbol.prototype.toString', SymbolPrototypeToString],
  ['Symbol.prototype.valueOf', SymbolPrototypeValueOf],
  ['Symbol.prototype[@@toPrimitive]', SymbolPrototypeSymbolToPrimitive],
  ['Symbol.prototype[@@toStringTag]', SymbolPrototypeSymbolToStringTag],
  ['SyntaxError', SyntaxError],
  ['SyntaxError.prototype', SyntaxErrorPrototype],
  ['TypedArray', TypedArray],
  ['TypedArray.from', TypedArrayFrom],
  ['TypedArray.of', TypedArrayOf],
  ['TypedArray.prototype', TypedArrayPrototype],
  ['TypedArray.prototype.at', TypedArrayPrototypeAt],
  ['get TypedArray.prototype.buffer', TypedArrayPrototypeBuffer],
  ['get TypedArray.prototype.byteLength', TypedArrayPrototypeByteLength],
  ['get TypedArray.prototype.byteOffset', TypedArrayPrototypeByteOffset],
  ['TypedArray.prototype.copyWithin', TypedArrayPrototypeCopyWithin],
  ['TypedArray.prototype.entries', TypedArrayPrototypeEntries],
  ['TypedArray.prototype.every', TypedArrayPrototypeEvery],
  ['TypedArray.prototype.fill', TypedArrayPrototypeFill],
  ['TypedArray.prototype.filter', TypedArrayPrototypeFilter],
  ['TypedArray.prototype.find', TypedArrayPrototypeFind],
  ['TypedArray.prototype.findIndex', TypedArrayPrototypeFindIndex],
  ['TypedArray.prototype.forEach', TypedArrayPrototypeForEach],
  ['TypedArray.prototype.includes', TypedArrayPrototypeIncludes],
  ['TypedArray.prototype.indexOf', TypedArrayPrototypeIndexOf],
  ['TypedArray.prototype.join', TypedArrayPrototypeJoin],
  ['TypedArray.prototype.keys', TypedArrayPrototypeKeys],
  ['TypedArray.prototype.lastIndexOf', TypedArrayPrototypeLastIndexOf],
  ['get TypedArray.prototype.length', TypedArrayPrototypeLength],
  ['TypedArray.prototype.map', TypedArrayPrototypeMap],
  ['TypedArray.prototype.reduce', TypedArrayPrototypeReduce],
  ['TypedArray.prototype.reduceRight', TypedArrayPrototypeReduceRight],
  ['TypedArray.prototype.reverse', TypedArrayPrototypeReverse],
  ['TypedArray.prototype.set', TypedArrayPrototypeSet],
  ['TypedArray.prototype.slice', TypedArrayPrototypeSlice],
  ['TypedArray.prototype.some', TypedArrayPrototypeSome],
  ['TypedArray.prototype.sort', TypedArrayPrototypeSort],
  ['TypedArray.prototype.subarray', TypedArrayPrototypeSubarray],
  ['TypedArray.prototype.toLocaleString', TypedArrayPrototypeToLocaleString],
  ['TypedArray.prototype.toString', TypedArrayPrototypeToString],
  ['TypedArray.prototype.values', TypedArrayPrototypeValues],
  ['TypedArray.prototype[@@iterator]', TypedArrayPrototypeSymbolIterator],
  [
    'get TypedArray.prototype[@@toStringTag]',
    TypedArrayPrototypeSymbolToStringTag
  ],
  ['get TypedArray[@@species]', TypedArraySymbolSpecies],
  ['TypeError', TypeError],
  ['TypeError.prototype', TypeErrorPrototype],
  ['Uint8Array', Uint8Array],
  ['Uint8Array.BYTES_PER_ELEMENT', Uint8ArrayBYTES_PER_ELEMENT],
  ['Uint8Array.prototype', Uint8ArrayPrototype],
  ['Uint8ClampedArray', Uint8ClampedArray],
  ['Uint8ClampedArray.BYTES_PER_ELEMENT', Uint8ClampedArrayBYTES_PER_ELEMENT],
  ['Uint8ClampedArray.prototype', Uint8ClampedArrayPrototype],
  ['Uint16Array', Uint16Array],
  ['Uint16Array.BYTES_PER_ELEMENT', Uint16ArrayBYTES_PER_ELEMENT],
  ['Uint16Array.prototype', Uint16ArrayPrototype],
  ['Uint32Array', Uint32Array],
  ['Uint32Array.BYTES_PER_ELEMENT', Uint32ArrayBYTES_PER_ELEMENT],
  ['Uint32Array.prototype', Uint32ArrayPrototype],
  ['URIError', URIError],
  ['URIError.prototype', URIErrorPrototype],
  ['WeakMap', WeakMap],
  ['WeakMap.prototype', WeakMapPrototype],
  ['WeakMap.prototype.delete', WeakMapPrototypeDelete],
  ['WeakMap.prototype.get', WeakMapPrototypeGet],
  ['WeakMap.prototype.has', WeakMapPrototypeHas],
  ['WeakMap.prototype.set', WeakMapPrototypeSet],
  ['WeakMap.prototype[@@toStringTag]', WeakMapPrototypeSymbolToStringTag],
  ['WeakRef', WeakRef],
  ['WeakRef.prototype', WeakRefPrototype],
  ['WeakRef.prototype.deref', WeakRefPrototypeDeref],
  ['WeakRef.prototype[@@toStringTag]', WeakRefPrototypeSymbolToStringTag],
  ['WeakSet', WeakSet],
  ['WeakSet.prototype', WeakSetPrototype],
  ['WeakSet.prototype.add', WeakSetPrototypeAdd],
  ['WeakSet.prototype.delete', WeakSetPrototypeDelete],
  ['WeakSet.prototype.has', WeakSetPrototypeHas],
  ['WeakSet.prototype[@@toStringTag]', WeakSetPrototypeSymbolToStringTag],
  ['decodeURI', DecodeURI],
  ['decodeURIComponent', DecodeURIComponent],
  ['encodeURI', EncodeURI],
  ['encodeURIComponent', EncodeURIComponent],
  ['eval', Eval],
  ['globalThis', Global],
  ['isFinite', IsFinite],
  ['isNaN', IsNaN],
  ['parseFloat', ParseFloat],
  ['parseInt', ParseInt],
  ['uncurryThis', UncurryThis]
], entry => {
  const intrinsic = entry[1];
  if (intrinsic !== undefined) {
    const intrinsicName = entry[0];
    MapSet(INTRINSICS, intrinsicName, intrinsic);
  }
});

const ALIASES = new Map([
  ['@@asyncIterator', 'Symbol.asyncIterator'],
  ['@@hasInstance', 'Symbol.hasInstance'],
  ['@@isConcatSpreadable', 'Symbol.isConcatSpreadable'],
  ['@@iterator', 'Symbol.iterator'],
  ['@@match', 'Symbol.match'],
  ['@@matchAll', 'Symbol.matchAll'],
  ['@@replace', 'Symbol.replace'],
  ['@@search', 'Symbol.search'],
  ['@@species', 'Symbol.species'],
  ['@@split', 'Symbol.split'],
  ['@@toPrimitive', 'Symbol.toPrimitive'],
  ['@@toStringTag', 'Symbol.toStringTag'],
  ['@@unscopables', 'Symbol.unscopables'],
  ['%AggregateError%', 'AggregateError'],
  ['%Array%', 'Array'],
  ['%ArrayBuffer%', 'ArrayBuffer'],
  ['%ArrayIteratorPrototype%', 'ArrayIteratorPrototype'],
  ['%AsyncFromSyncIteratorPrototype%', 'AsyncFromSyncIteratorPrototype'],
  ['%AsyncFunction%', 'AsyncFunction'],
  ['%AsyncGeneratorFunction%', 'AsyncGeneratorFunction'],
  ['%AsyncGeneratorPrototype%', 'AsyncGeneratorPrototype'],
  ['%AsyncIteratorPrototype%', 'AsyncIteratorPrototype'],
  ['%Atomics%', 'Atomics'],
  ['%BigInt%', 'BigInt'],
  ['%BigInt64Array%', 'BigInt64Array'],
  ['%BigUint64Array%', 'BigUint64Array'],
  ['%Boolean%', 'Boolean'],
  ['%DataView%', 'DataView'],
  ['%Date%', 'Date'],
  ['%Error%', 'Error'],
  ['%EvalError%', 'EvalError'],
  ['%FinalizationRegistry%', 'FinalizationRegistry'],
  ['%Float32Array%', 'Float32Array'],
  ['%Float64Array%', 'Float64Array'],
  ['%ForInIteratorPrototype%', 'ForInIteratorPrototype'],
  ['%Function%', 'Function'],
  ['%GeneratorFunction%', 'GeneratorFunction'],
  ['%GeneratorPrototype%', 'GeneratorPrototype'],
  ['%Int8Array%', 'Int8Array'],
  ['%Int16Array%', 'Int16Array'],
  ['%Int32Array%', 'Int32Array'],
  ['%IteratorPrototype%', 'IteratorPrototype'],
  ['%JSON%', 'JSON'],
  ['%Map%', 'Map'],
  ['%MapIteratorPrototype%', 'MapIteratorPrototype'],
  ['%Math%', 'Math'],
  ['%Number%', 'Number'],
  ['%Object%', 'Object'],
  ['%Promise%', 'Promise'],
  ['%Proxy%', 'Proxy'],
  ['%RangeError%', 'RangeError'],
  ['%ReferenceError%', 'ReferenceError'],
  ['%Reflect%', 'Reflect'],
  ['%RegExp%', 'RegExp'],
  ['%RegExpStringIteratorPrototype%', 'RegExpStringIteratorPrototype'],
  ['%Set%', 'Set'],
  ['%SetIteratorPrototype%', 'SetIteratorPrototype'],
  ['%SharedArrayBuffer%', 'SharedArrayBuffer'],
  ['%String%', 'String'],
  ['%StringIteratorPrototype%', 'StringIteratorPrototype'],
  ['%Symbol%', 'Symbol'],
  ['%SyntaxError%', 'SyntaxError'],
  ['%ThrowTypeError%', 'ThrowTypeError'],
  ['%TypedArray%', 'TypedArray'],
  ['%TypeError%', 'TypeError'],
  ['%Uint8Array%', 'Uint8Array'],
  ['%Uint8ClampedArray%', 'Uint8ClampedArray'],
  ['%Uint16Array%', 'Uint16Array'],
  ['%Uint32Array%', 'Uint32Array'],
  ['%URIError%', 'URIError'],
  ['%WeakMap%', 'WeakMap'],
  ['%WeakRef%', 'WeakRef'],
  ['%WeakSet%', 'WeakSet'],
  ['%decodeURI%', 'decodeURI'],
  ['%decodeURIComponent%', 'decodeURIComponent'],
  ['%encodeURI%', 'encodeURI'],
  ['%encodeURIComponent%', 'encodeURIComponent'],
  ['%eval%', 'eval'],
  ['%globalThis%', 'globalThis'],
  ['%isFinite%', 'isFinite'],
  ['%isNaN%', 'isNaN'],
  ['%parseFloat%', 'parseFloat'],
  ['%parseInt%', 'parseInt'],
  ['%uncurryThis%', 'uncurryThis']
]);

const UNCURRY_THIS_INTRINSICS = new WeakMap();

ArrayForEach([
  [ArrayPrototypeForEach, ArrayForEach],
  [ArrayPrototypeSymbolIterator, ArraySymbolIterator],
  [MapPrototypeGet, MapGet],
  [MapPrototypeHas, MapHas],
  [MapPrototypeSet, MapSet],
  [MapPrototypeSymbolIterator, MapSymbolIterator],
  [SetPrototypeSymbolIterator, SetSymbolIterator],
  [RegExpPrototypeSymbolMatch, RegExpSymbolMatchAll],
  [StringPrototypeSymbolIterator, StringSymbolIterator],
  [WeakMapPrototypeGet, WeakMapGet],
  [WeakMapPrototypeSet, WeakMapSet]
], entry => {
  const intrinsic = entry[0];
  if (intrinsic !== undefined) {
    const uncurryThisIntrinsic = entry[1];
    WeakMapSet(UNCURRY_THIS_INTRINSICS, intrinsic, uncurryThisIntrinsic);
  }
});

const GetIntrinsic = intrinsicName => {
  intrinsicName = `${intrinsicName}`;
  const intrinsicNameByAlias = MapGet(ALIASES, intrinsicName);
  return MapGet(INTRINSICS, intrinsicNameByAlias || intrinsicName);
}

const IntrinsicExists = intrinsicName => {
  intrinsicName = `${intrinsicName}`;
  const intrinsicNameByAlias = MapGet(ALIASES, intrinsicName);
  return MapHas(INTRINSICS, intrinsicNameByAlias || intrinsicName);
}

const DefineIntrinsic = (intrinsicName, intrinsic) => {
  intrinsicName = `${intrinsicName}`;
  if (intrinsic === undefined) {
    return false;
  }
  const intrinsicNameByAlias = MapGet(ALIASES, intrinsicName);
  if (intrinsicNameByAlias) {
    intrinsicName = intrinsicNameByAlias;
  }
  if (MapHas(INTRINSICS, intrinsicName)) {
    return false;
  }
  MapSet(INTRINSICS, intrinsicName, intrinsic);
  return true;
}

const RequireIntrinsic = intrinsicName => {
  intrinsicName = `${intrinsicName}`;
  const intrinsicNameByAlias = MapGet(ALIASES, intrinsicName);
  const intrinsic = MapGet(INTRINSICS, intrinsicNameByAlias || intrinsicName);
  if (intrinsic === undefined) {
    throw new TypeError(
      `Intrinsic ${
        intrinsicNameByAlias ? `'${intrinsicNameByAlias}' for alias ` : ''
      }'${intrinsicName}' does not exist`
    );
  }
  return intrinsic;
}

const UncurryThisIntrinsic = intrinsicName => {
  intrinsicName = `${intrinsicName}`;
  const intrinsicNameByAlias = MapGet(ALIASES, intrinsicName);
  const intrinsic = MapGet(INTRINSICS, intrinsicNameByAlias || intrinsicName);
  if (intrinsic === undefined) {
    throw new TypeError(
      `Intrinsic ${
        intrinsicNameByAlias ? `'${intrinsicNameByAlias}' for alias ` : ''
      }'${intrinsicName}' does not exist`
    );
  }
  let uncurryThisIntrinsic = WeakMapGet(UNCURRY_THIS_INTRINSICS, intrinsic);
  if (uncurryThisIntrinsic === undefined) {
    if (typeof intrinsic !== 'function') {
      throw new TypeError(
        `Intrinsic '${intrinsicNameByAlias || intrinsicName}' is not a function`
      );
    }
    uncurryThisIntrinsic = UncurryThis(intrinsic);
    WeakMapSet(UNCURRY_THIS_INTRINSICS, intrinsic, uncurryThisIntrinsic);
  }
  return uncurryThisIntrinsic;
}

const Intrinsic = ObjectCreate(ObjectPrototype, {
  define: {
    value: DefineIntrinsic
  },
  exists: {
    value: IntrinsicExists
  },
  get: {
    value: GetIntrinsic
  },
  require: {
    value: RequireIntrinsic
  },
  uncurryThis: {
    value: UncurryThisIntrinsic
  }
});
ReflectDefineProperty(Intrinsic, SymbolToStringTag, {
  value: 'Intrinsic'
});

export {
  DefineIntrinsic,
  GetIntrinsic,
  Intrinsic,
  IntrinsicExists,
  RequireIntrinsic,
  UncurryThisIntrinsic
};
