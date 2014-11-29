/* jshint node: true */
'use strict';


var BBPromise = require('bluebird');

var resources = {
	_cache: {},
	// Load an image url or an array of image urls
	load: function (url) {
		if (url instanceof Array) {
			return BBPromise.map(url, function (url) {
				return resources.load(url);
			});
		}
		console.log('GET', url);
		return new BBPromise(function (resolve, reject) {
			var img = new Image();
			img.onload = function () {
				resources._cache[url] = img;
				console.log('success')
				resolve(img);
			};
			img.onerror = function () {
				reject();
			};
			img.src = url;
		});
    },
    get: function (url) {
    	console.log('u', url, resources._cache)
    	return resources._cache[url];
    }
};

module.exports = resources;