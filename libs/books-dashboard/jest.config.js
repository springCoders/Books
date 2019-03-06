module.exports = {
  name: 'books-dashboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/books-dashboard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
