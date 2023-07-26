const { DateTime } = require('luxon');
const { markdownLibrary } = require('../../utils/plugins/markdown');

const toShortDate = (dateObj) => {
	// 10/14/1983
	return DateTime.fromISO(dateObj, { zone: 'utc' }).toFormat('MM/dd/yyyy');
};

const toMedDate = (dateObj) => {
	// Oct 14, 1983
	return DateTime.fromISO(dateObj, { zone: 'utc' }).toFormat('MMM dd, yyyy');
};

const toFullDate = (dateObj) => {
	// October 14, 1983
	return DateTime.fromISO(dateObj, { zone: 'utc' }).toFormat('MMMM dd, yyyy');
};

const toShortDateTime = (dateObj) => {
	// 10/14/1983, 10:30 PM
	return DateTime.fromISO(dateObj, { zone: 'utc' }).toFormat(
		'MM/dd/yyyy, hh:mm a',
	);
};

const toMedDateTime = (dateObj) => {
	// Oct 14, 1983, 10:30 PM
	return DateTime.fromISO(dateObj, { zone: 'utc' }).toFormat(
		'MMM dd, yyyy, hh:mm a',
	);
};

const toFullDateTime = (dateObj) => {
	// October 14, 1983, 10:30 PM
	return DateTime.fromISO(dateObj, { zone: 'utc' }).toFormat(
		'MMMM dd, yyyy, hh:mm a',
	);
};

module.exports = (eleventyConfig) => {
	eleventyConfig.addFilter('toShortDate', toShortDate);
	eleventyConfig.addFilter('toMedDate', toMedDate);
	eleventyConfig.addFilter('toFullDate', toFullDate);
	eleventyConfig.addFilter('toShortDateTime', toShortDateTime);
	eleventyConfig.addFilter('toMedDateTime', toMedDateTime);
	eleventyConfig.addFilter('toFullDateTime', toFullDateTime);
	eleventyConfig.addFilter('toArray', (value) => {
		if (Array.isArray(value)) return value;
		return [value];
	});
	eleventyConfig.addFilter('toHtml', (content) => {
		return markdownLibrary.render(content);
	});
	eleventyConfig.addFilter('toHtmlInline', (content) => {
		return markdownLibrary.renderInline(content);
	});
	eleventyConfig.addFilter('ordinal', (number) => {
		const i = number % 10,
			j = number % 100;
		if (i === 1 && j !== 11) {
			return number + 'st';
		}
		if (i === 2 && j !== 12) {
			return number + 'nd';
		}
		if (i === 3 && j !== 13) {
			return number + 'rd';
		}
		return number + 'th';
	});
	eleventyConfig.addFilter('capitalize', (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	});
	eleventyConfig.addFilter(
		'url',
		(path, base = require('../_data/domain').url) => {
			return new URL(path, base).href;
		},
	);
};
