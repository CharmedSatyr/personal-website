module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	env: {
		browser: true,
		amd: true,
		node: true,
		es6: true,
	},
	plugins: ["@typescript-eslint", "simple-import-sort"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
		"next",
		"next/core-web-vitals",
	],
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
		extraFileExtensions: [".md", ".mdx"],
	},
	rules: {
		"prettier/prettier": "error",
		"react/react-in-jsx-scope": "off",
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				components: ["Link"],
				specialLink: ["hrefLeft", "hrefRight"],
				aspects: ["invalidHref", "preferButton"],
			},
		],
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"react/prop-types": 0,
		"react/no-unescaped-entities": 0,
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-unused-vars": 0,
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/ban-ts-comment": "off",
	},
	overrides: [
		{
			files: ["*.md", "*.mdx"],
			extends: ["plugin:mdx/recommended", "plugin:prettier/recommended"],
		},
		{
			files: ["**/*.js", "**/*.ts", "**/*.tsx"],
			rules: {
				"simple-import-sort/imports": [
					"error",
					{
						groups: [
							// `react` first, `next` second, then packages starting with a character
							["^react$", "^next", "^[a-z]"],
							// Packages starting with `@`
							["^@"],
							// Packages starting with `~`
							["^~"],
							// Imports starting with `../`
							["^\\.\\.(?!/?$)", "^\\.\\./?$"],
							// Imports starting with `./`
							["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
							// Style imports
							["^.+\\.s?css$"],
							// Side effect imports
							["^\\u0000"],
						],
					},
				],
			},
		},
	],
};
