import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    input: 'src/index.js',
    plugins: [
      babel(),
      resolve(),
      commonjs(),
    ],
    external: [ 'react' ],
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        name: 'MyLib',
        exports: 'named',
        globals: { react: 'React' }
      }
    ]
  }
]


