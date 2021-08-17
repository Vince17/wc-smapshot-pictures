import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import postcss from 'rollup-plugin-postcss';
import postcssLit from 'rollup-plugin-postcss-lit';

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = [
  {
    input: 'element_smapshot.js',
    output: {
      dir: 'dist/components',
      format: 'es',
    },
    plugins: [
      postcss({
        extensions: [ '.css' ],
      }),
      postcssLit(),
      minifyHTML(),
      resolve(),
    ],
    preserveEntrySignatures: false
  },
  {
    input: 'map_smapshot.js',
    output: {
      dir: 'dist/components',
      format: 'es',
    },
    plugins: [
      postcss({
        extensions: [ '.css' ],
      }),
      postcssLit(),
      minifyHTML(),
      resolve(),
    ],
    preserveEntrySignatures: false
  },
];

if (process.env.NODE_ENV !== 'development') {
  config[0].plugins.push(terser());
  config[1].plugins.push(terser());
}

export default config;
