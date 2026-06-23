import path from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextCoreWebVitalsConfig from "eslint-config-next/core-web-vitals";
import * as mdx from "eslint-plugin-mdx";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Reuse the jsx-a11y plugin instance already registered by nextCoreWebVitalsConfig
// to avoid ESLint's "Cannot redefine plugin" error while still allowing rule overrides.
const jsxA11yPlugin = nextCoreWebVitalsConfig[0].plugins["jsx-a11y"];

const config = [
	js.configs.recommended,
	...tseslint.configs.recommended,
	...nextCoreWebVitalsConfig,
	prettierRecommended,
	{
		plugins: {
			"@typescript-eslint": typescriptEslint,
			"jsx-a11y": jsxA11yPlugin,
			"simple-import-sort": simpleImportSort,
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.amd,
				...globals.node,
			},

			parser: tsParser,
			ecmaVersion: "latest",
			sourceType: "module",

			parserOptions: {
				project: true,
				tsconfigRootDir: __dirname,
				extraFileExtensions: [".md", ".mdx"],
			},
		},

		settings: {
			react: {
				version: "19",
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
	mdx.flat,
	{
		files: ["**/*.md", "**/*.mdx"],
		...prettierRecommended,
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
	{
		ignores: ["**/.*"],
	},
];

export default config;
