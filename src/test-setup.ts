import 'jest-preset-angular';

// additional information about what this file is and how it functions with jest can be found at.
// https://github.com/thymikee/jest-preset-angular.

// Object.defineProperty(window, 'moment', {
//   value: () => {
//       moment;
//   }
// });

// here to show how to add query to JSDOM for jest if you ever need to do so.
// import $ from 'jquery';
// global.$ = global.jQuery = $;
Object.defineProperty(document, 'doctype', {
	value: '<!DOCTYPE html>',
});

Object.defineProperty(window, 'getComputedStyle', {
	value: () => {
		return {
			display: 'none',
			appearance: ['-webkit-appearance'],
		};
	},
});

Object.defineProperty(document.body.style, 'transform', {
	value: () => {
		return {
			enumerable: true,
			configurable: true,
		};
	},
});

Object.defineProperty(window, 'getComputedStyle', {
	value: () => ({
		getPropertyValue: (_: any) => {
			return '';
		},
	}),
});
