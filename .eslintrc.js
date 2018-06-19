module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'import'],
  rules: {
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 0,
    'react/prop-types': 0,
    'react/jsx-no-bind': 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
  },
};
