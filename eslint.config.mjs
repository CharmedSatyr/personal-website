import typescriptEslint from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...compat.extends(
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
		"next",
		"next/core-web-vitals",
	),
	{
		plugins: {
			"@typescript-eslint": typescriptEslint,
			"simple-import-sort": simpleImportSort,
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.amd,
				...globals.node,
			},

			parser: tsParser,
			ecmaVersion: 5,
			sourceType: "commonjs",

			parserOptions: {
				project: true,
				tsconfigRootDir: "__dirname",
				extraFileExtensions: [".md", ".mdx"],
			},
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
	},
	...compat
		.extends("plugin:mdx/recommended", "plugin:prettier/recommended")
		.map((config) => ({
			...config,
			files: ["**/*.md", "**/*.mdx"],
		})),
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
];
