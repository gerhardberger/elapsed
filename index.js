var l10nDefaults = {
  milliSeconds: ['millisecond', 's']
  , seconds: ['second', 's']
	, minutes: ['minute', 's']
	, hours: ['hour', 's']
	, days: ['day', 's']
	, weeks: ['week', 's']
	, months: ['month', 's']
	, years: ['year', 's']
};

function Elapsed (from, to, l10n) {
	this.from = from;

  var fromIsDate = (from instanceof Date) || (!isNaN(parseFloat(from)))
  var toIsDate = (to instanceof Date) || (!isNaN(parseFloat(to)))

	this.to = arguments.length === 2 && toIsDate ? to : new Date();
	this.l10n = arguments.length === 3 ? l10n : arguments.length === 2
    && !toIsDate ? to : l10nDefaults;

  this.set();
}

Elapsed.prototype.set = function() {
	this.elapsedTime = this.to - this.from;

	this.milliSeconds = { num: this.elapsedTime };
	var divider = 1000;
	this.seconds = { num: Math.floor(this.elapsedTime / divider) };
	divider *= 60;
	this.minutes = { num: Math.floor(this.elapsedTime / divider) };
	divider *= 60;
	this.hours = { num: Math.floor(this.elapsedTime / divider) };
	divider *= 24;
	this.days = { num: Math.floor(this.elapsedTime / divider) };
	divider *= 7;
	this.weeks = { num: Math.floor(this.elapsedTime / divider) };
	divider *= (30 / 7);
	this.months = { num: Math.floor(this.elapsedTime / divider) };
	divider = divider / (30 / 7) / 7 * 365;
	this.years = { num: Math.floor(this.elapsedTime / divider) };

  this.milliSeconds.text = this.milliSeconds.num + ' ' + this.l10n.milliSeconds[0]
    + (this.milliSeconds.num < 2 ? '' : this.l10n.milliSeconds[1]);
	this.seconds.text = this.seconds.num + ' ' + this.l10n.seconds[0]
    + (this.seconds.num < 2 ? '' : this.l10n.seconds[1]);
	this.minutes.text = this.minutes.num + ' ' + this.l10n.minutes[0]
    + (this.minutes.num < 2 ? '' : this.l10n.minutes[1]);
	this.hours.text = this.hours.num + ' ' + this.l10n.hours[0]
    + (this.hours.num < 2 ? '' : this.l10n.hours[1]);
	this.days.text = this.days.num + ' ' + this.l10n.days[0]
    + (this.days.num < 2 ? '' : this.l10n.days[1]);
	this.weeks.text = this.weeks.num + ' ' + this.l10n.weeks[0]
    + (this.weeks.num < 2 ? '' : this.l10n.weeks[1]);
	this.months.text = this.months.num + ' ' + this.l10n.months[0]
    + (this.months.num < 2 ? '' : this.l10n.months[1]);
	this.years.text = this.years.num + ' ' + this.l10n.years[0]
    + (this.years.num < 2 ? '' : this.l10n.years[1]);

	if (this.years.num > 0) this.optimal = this.years.text;
	else if (this.months.num > 0) this.optimal = this.months.text;
	else if (this.weeks.num > 0) this.optimal = this.weeks.text;
	else if (this.days.num > 0) this.optimal = this.days.text;
	else if (this.hours.num > 0) this.optimal = this.hours.text;
	else if (this.minutes.num > 0) this.optimal = this.minutes.text;
	else if (this.seconds.num > 0) this.optimal = this.seconds.text;
  else this.optimal = this.milliSeconds.text;

	return this;
};

Elapsed.prototype.refresh = function(to) {
	if (!to) this.to = new Date();
	else this.to = to;
	if (!this.to instanceof Date) return;

	return this.set();
};

module.exports = Elapsed;
