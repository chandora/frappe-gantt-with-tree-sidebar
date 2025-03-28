import sass from 'rollup-plugin-sass';
import { terser } from 'rollup-plugin-terser';

const dev = {
    input: 'src/index.js',
    output: {
        name: 'Gantt',
        file: 'dist/frappe-gantt-with-tree-sidebar.js',
        sourcemap: true,
        format: 'iife',
    },
    plugins: [
        sass({
            output: true,
        }),
    ],
};
const prod = {
    input: 'src/index.js',
    output: {
        name: 'Gantt',
        file: 'dist/frappe-gantt-with-tree-sidebar.min.js',
        sourcemap: true,
        format: 'iife',
    },
    plugins: [
        sass({
            output: true,
            options: {
                outputStyle: 'compressed',
            },
        }),
        terser(),
    ],
};

export default [dev, prod];
