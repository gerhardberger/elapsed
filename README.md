## Elapsed

``` batch
npm install elapsed
```

A module for getting the elapsed time between two dates in various representation.

``` js
var Elapsed = require('elapsed');

var elapsedTime = new Elapsed(new Date(2013, 05, 2), new Date(2013, 05, 25));

console.log(elapsedTime.minutes.num); // 33120
console.log(elapsedTime.hours.text);  // "552 hours"
console.log(elapsedTime.optimal);     // "3 weeks"
```

#### create

``` js
var elapsedTime = new Elapsed(from, to);
```
The `from` (required) and `to` (optional, default: now) must be `Date` objects.

#### properties
- __milliSeconds__: _(Object)_, `num` property is the time in _Number_, `text` is the time in _String_.
- __seconds__: _(Object)_, `num` property is the time in _Number_, `text` is the time in _String_.
- __minutes__: _(Object)_, `num` property is the time in _Number_, `text` is the time in _String_.
- __hours__: _(Object)_, `num` property is the time in _Number_, `text` is the time in _String_.
- __days__: _(Object)_, `num` property is the time in _Number_, `text` is the time in _String_.
- __weeks__: _(Object)_, `num` property is the time in _Number_, `text` is the time in _String_.
- __months__: _(Object)_, `num` property is the time in _Number_, `text` is the time in _String_.
- __years__: _(Object)_, `num` property is the time in _Number_, `text` is the time in _String_.
- __optimal__: _(String)_, the best from the ones above.
- __from__: _(Date)_
- __to__: _(Date)_

#### methods
- __set()__: calculating the properties.
- __refresh(to)__: refresh the `to` date. `to` is _optional_ it defaults to _now_.