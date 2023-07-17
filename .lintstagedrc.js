modules.export = {
  //type checking typscript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint & prettify TS and JS files
  '**/*.(ts|tsx|js)': filenames => [
    `yarn eslint ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': filenames => `yarn prettier --write ${filenames.join(' ')}`
};
