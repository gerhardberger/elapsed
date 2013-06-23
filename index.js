function Elapsed (from, to) {
	this.from = from;
	this.to = to || new Date();
	if (!(this.from instanceof Date && this.to instanceof Date)) return;

	this.set();
}

Elapsed.prototype.set = function() {
	this.elapsedTime = this.to - this.from;
	console.log(this.elapsedTime);

	this.milliSeconds = this.elapsedTime;
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
	divider = divider / (30 / 7) * 365;
	this.years = { num: Math.floor(this.elapsedTime / divider) };

	this.seconds.text = this.seconds.num + ' second' + (this.seconds.num < 2 ? '' : 's');
	this.minutes.text = this.minutes.num + ' minute' + (this.minutes.num < 2 ? '' : 's');
	this.hours.text = this.hours.num + ' hour' + (this.hours.num < 2 ? '' : 's');
	this.days.text = this.days.num + ' day' + (this.days.num < 2 ? '' : 's');
	this.weeks.text = this.weeks.num + ' week' + (this.weeks.num < 2 ? '' : 's');
	this.months.text = this.months.num + ' month' + (this.months.num < 2 ? '' : 's');
	this.years.text = this.years.num + ' year' + (this.years.num < 2 ? '' : 's');

	if (this.years.num > 0) this.optimal =  this.years.text;
	else if (this.months.num > 0) this.optimal =  this.months.text;
	else if (this.weeks.num > 0) this.optimal =  this.weeks.text;
	else if (this.days.num > 0) this.optimal =  this.days.text;
	else if (this.hours.num > 0) this.optimal =  this.hours.text;
	else if (this.minutes.num > 0) this.optimal =  this.minutes.text;
	else if (this.seconds.num > 0) this.optimal =  this.seconds.text;

	return this;
};

Elapsed.prototype.refresh = function(to) {
	if (!to) this.to = new Date();
	else this.to = to;
	if (!this.to instanceof Date) return;

	return this.set();
};

module.exports = Elapsed;