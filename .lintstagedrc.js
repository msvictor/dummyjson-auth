module.exports = {
  '**/*.{js,ts}?(x)': ['yarn prettify:write', 'yarn lint:fix'],
  '*.md': ['prettier --write'],
};
