module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'],
  watchPathIgnorePatterns: ['dist\\/'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageProvider: 'v8',
  transformIgnorePatterns: [
    "/node_modules/(?!nordigen-node/lib/|node-fetch/src/|data-uri-to-buffer/dist/|fetch-blob/|formdata-polyfill/)",
  ],
}
