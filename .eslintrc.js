module.exports = {
	'env': {
		'commonjs': true,
		'es2021': true,
		'node': true,
	},
	'plugins': [
		'@typescript-eslint'
	],
	'extends': [
		'plugin:@typescript-eslint/recommended',
		'eslint:recommended'
	],
	'parserOptions': {
		'ecmaVersion': 13,
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab',
			{ 'SwitchCase': 1 }
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'quotes': [
			'error',
			'single',
		],
		'semi': [
			'error',
			'never',
		],
		'array-bracket-spacing': [
			'warn',
			'never',
		],
		'object-curly-spacing': [
			'warn',
			'always',
		],
	},
}
