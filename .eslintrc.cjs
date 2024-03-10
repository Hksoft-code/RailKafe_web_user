// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "react-app",
//     "plugin:react/recommended",
//     "plugin:react/jsx-runtime",
//     "plugin:react-hooks/recommended",
//   ],
//   ignorePatterns: ["dist", ".eslintrc.json"],
//   parserOptions: {
//     ecmaVersion: 12,
//     sourceType: "module",
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   plugins: [
//     "react",
//     "react-hooks",
//     "eslint-plugin-react-refresh",
//     "eslint-plugin-require-path-exists",
//     "eslint-plugin-sort-keys-fix",
//   ],
//   rules: {
//     //add customize rules here as per your project's needs
//     "react/react-in-jsx-scope": "off",
//     "no-multiple-empty-lines": [
//       "error",
//       {
//         max: 1,
//         maxEOF: 1,
//         maxBOF: 0,
//       },
//     ],
//     "react-refresh/only-export-components": [
//       "error",
//       {
//         allowConstantExport: true,
//       },
//     ],
//   },
// };
// // {
// //   "root": true,
// //   "env": {
// //     "browser": true,
// //     "es2020": true
// //   },
// //   "extends": [
// //     "eslint:recommended",
// //     "plugin:react/recommended",
// //     "plugin:react/jsx-runtime",
// //     "plugin:react-hooks/recommended",
// //   ],
// //   "ignorePatterns": [
// //     "dist",
// //     ".eslintrc.cjs"
// //   ],
// //   "parserOptions": {
// //     "ecmaVersion": "latest",
// //     "sourceType": "module"
// //   },
// //   "settings": {
// //     "react": {
// //       "version": "18.2"
// //     }
// //   },
// //   "plugins": [
// //     "react-refresh",
// //     "require-path-exists",
// //     "sort-keys-fix"
// //   ],
// //   "rules": {
// //     "react-refresh/only-export-components": [
// //       "warn",
// //       {
// //         "allowConstantExport": true
// //       },
// //     ],
// //     //   "linebreak-style": [
// //     //     "error",
// //     //     "unix"
// //     // ],
// //     "no-multiple-empty-lines": [
// //       "error",
// //       {
// //         "max": 1,
// //         "maxEOF": 1,
// //         "maxBOF": 0
// //       }
// //     ]
// //   }
// // }

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 1,
      "maxBOF": 0
  }],
  },
}
