module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "amd": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": ["warn"],
    "comma-dangle": 1,
    "quotes": [ 1, "double" ],
    "no-undef": 1,
    "global-strict": 0,
    "no-extra-semi": 1,
    "no-underscore-dangle": 0,
    "no-console": 1,
    "no-trailing-spaces": [1, { "skipBlankLines": true }],
    "no-unreachable": 1,
    "no-alert": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1
  }
};
