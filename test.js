var Elapsed = require('./');

var now = new Date();
var then = new Date(2012, 03, 15, 15, 22);

console.log(now, then);

var elapsedTime = new Elapsed(then, now);

console.log(elapsedTime.milliSeconds.text);

console.log(elapsedTime.seconds.text);

console.log(elapsedTime.minutes.text);

console.log(elapsedTime.hours.text);

console.log(elapsedTime.days.text);

console.log(elapsedTime.weeks.text);

console.log(elapsedTime.months.text);

console.log(elapsedTime.years.text);

console.log(elapsedTime.optimal);

var german = {
  milliSeconds: ['millisekunde', 'n'],
  seconds: ['Sekunde', 'n'],
	minutes: ['Minute', 'n'],
	hours: ['Stunde', 'n'],
	days: ['Tag', 'e'],
	weeks: ['Woche', 'n'],
	months: ['Monat', 'e'],
	years: ['Jahr', 'e']
};

var localizedElapsedTime = new Elapsed(then, now, german);

console.log(localizedElapsedTime.milliSeconds.text);

console.log(localizedElapsedTime.seconds.text);

console.log(localizedElapsedTime.minutes.text);

console.log(localizedElapsedTime.hours.text);

console.log(localizedElapsedTime.days.text);

console.log(localizedElapsedTime.weeks.text);

console.log(localizedElapsedTime.months.text);

console.log(localizedElapsedTime.years.text);

console.log(localizedElapsedTime.optimal);

var localizedElapsedTimeWithImplicitNow = new Elapsed(then, german);

console.log(localizedElapsedTimeWithImplicitNow.milliSeconds.text);

console.log(localizedElapsedTimeWithImplicitNow.seconds.text);

console.log(localizedElapsedTimeWithImplicitNow.minutes.text);

console.log(localizedElapsedTimeWithImplicitNow.hours.text);

console.log(localizedElapsedTimeWithImplicitNow.days.text);

console.log(localizedElapsedTimeWithImplicitNow.weeks.text);

console.log(localizedElapsedTimeWithImplicitNow.months.text);

console.log(localizedElapsedTimeWithImplicitNow.years.text);

console.log(localizedElapsedTimeWithImplicitNow.optimal);
