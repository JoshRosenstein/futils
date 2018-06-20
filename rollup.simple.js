// import babel from 'rollup-plugin-babel'
// import buble from 'rollup-plugin-buble';
import {uglify} from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json'
import babel from 'rollup-plugin-babel'

const ensureArray = maybeArr => Array.isArray(maybeArr) ? maybeArr : [maybeArr];
const removeMin=str=>str.replace('.min.js','.js')

const createConfig = (opts) => {
	opts = opts || {};
	const browser = opts.browser || false;
	const external = opts.external
	const output = ensureArray(opts.output);

	return {
		input: 'src/index.js',
		output: output.map(format => Object.assign({}, format, {
			name: 'F',
			sourcemap: false
		})),
		external: external,
		plugins: [
      resolve(),
			commonjs(),
        babel({
        	babelrc: false,
        	exclude: 'node_modules/**',
        	"presets": [
        	["env",{"modules": false}],"react","stage-0"
        	],
        	"plugins": ["external-helpers","annotate-pure-calls"]
        }),
			filesize()
		],
	};
};

const createUglyConfig = (opts) => {
	opts = opts || {};
	const browser = opts.browser || false;
	const external = opts.external
	const output = ensureArray(opts.output);

	return {
		input: 'src/index.js',
		output: output.map(format => Object.assign({}, format, {
			name: 'F',
			sourcemap: false
		})),
		external: external,
		plugins: [
      resolve(),
			commonjs(),
        babel({
        	babelrc: false,
        	exclude: 'node_modules/**',
        	"presets": [
        	["env",{"modules": false}],"react","stage-0"
        	],
        	"plugins": ["annotate-pure-calls","external-helpers"]
        }),
      uglify({
  compress: {
    pure_getters: true,
    unsafe: true,
    unsafe_comps: true,
    warnings: false
  }
}),
			filesize()
		],
	};
};



const configs = [
	/* node ESM/CJS builds */
  createConfig({
		browser: true,
		external: [],
		output: { format: 'umd', file: removeMin(pkg.unpkg) },
	}),

  createUglyConfig({
    browser: true,
    external: [],
    output: { format: 'umd', file: pkg.unpkg },
  })

]


export default configs;
