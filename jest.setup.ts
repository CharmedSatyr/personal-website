import "@testing-library/jest-dom";

beforeAll(() => {
	// Global fetch is not available in jsdom and so cannot be spied upon during tests.
	// https://github.com/jsdom/jsdom/issues/1724
	global.fetch = jest.fn();
});

afterAll(() => {
	global.fetch = undefined;
});
