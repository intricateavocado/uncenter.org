const analytics = {
	url: 'https://stats.uncenter.org',
	websiteId: 'dea82084-7eb8-4337-b02c-23f6ace1afc1',
};

module.exports = {
	...analytics,
	script: `${analytics.url}/script.js`,
	share: `${analytics.url}/share/LRerfjMi/uncenter`,
};
