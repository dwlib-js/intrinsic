# Intrinsic API

## Abstract
The module for caching built-in objects of the JavaScript language in the
ECMAScript specification.

## Install
`npm i --save @dwlib/intrinsic`

## Usage
```javascript
// CJS
const Intrinsic = require('@dwlib/intrinsic');
const DefineIntrinsic = require('@dwlib/intrinsic/DefineIntrinsic');
const GetIntrinsic = require('@dwlib/intrinsic/GetIntrinsic');
const IntrinsicExists = require('@dwlib/intrinsic/IntrinsicExists');
const RequireIntrinsic = require('@dwlib/intrinsic/RequireIntrinsic');
const UncurryThisIntrinsic = require('@dwlib/intrinsic/UncurryThisIntrinsic');
// ESM
import Intrinsic, {
  DefineIntrinsic,
  GetIntrinsic,
  IntrinsicExists,
  RequireIntrinsic,
  UncurryThisIntrinsic
} from '@dwlib/intrinsic';
import DefineIntrinsic from '@dwlib/intrinsic/DefineIntrinsic';
import GetIntrinsic from '@dwlib/intrinsic/GetIntrinsic';
import IntrinsicExists from '@dwlib/intrinsic/IntrinsicExists';
import RequireIntrinsic from '@dwlib/intrinsic/RequireIntrinsic';
import UncurryThisIntrinsic from '@dwlib/intrinsic/UncurryThisIntrinsic';
```

## API
- *static class* Intrinsic
  - *static* define(intrinsicName, intrinsic)
  - *static* exists(intrinsicName)
  - *static* get(intrinsicName)
  - *static* require(intrinsicName)
  - *static* uncurryThis(intrinsicName)

### Builtins
- DefineIntrinsic(intrinsicName, intrinsic)
- GetIntrinsic(intrinsicName)
- IntrinsicExists(intrinsicName)
- RequireIntrinsic(intrinsicName)
- UncurryThisIntrinsic(intrinsicName)
