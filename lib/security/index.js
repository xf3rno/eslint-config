module.exports = {
  plugins: ['security'],
  rules: {
    'security/detect-unsafe-regex': 2,
    'security/detect-non-literal-regexp': 0,
    'security/detect-non-literal-require': 2,
    'security/detect-non-literal-fs-filename': 0,
    'security/detect-eval-with-expression': 2,
    'security/detect-pseudoRandomBytes': 2,
    'security/detect-possible-timing-attacks': 2,
    'security/detect-no-csrf-before-method-override': 2,
    'security/detect-buffer-noassert': 2,
    'security/detect-child-process': 2,
    'security/detect-disable-mustache-escape': 2,
    'security/detect-object-injection': 0,
    'security/detect-new-buffer': 2
  }
}
