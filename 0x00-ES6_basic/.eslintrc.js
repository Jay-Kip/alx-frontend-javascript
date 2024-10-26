module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true, // Allows Jest globals like `test`, `expect`, etc.
    },
    extends: [
      'eslint:recommended', // Enables recommended rules
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      // You can customize your rules here
    },
  };
  