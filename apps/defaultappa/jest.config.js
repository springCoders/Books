module.exports = {
  name: 'defaultappa',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/defaultappa/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
