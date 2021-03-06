module.exports = {
  plugins: ['react'],
  rules: {
    'react/boolean-prop-naming': [2, {
      propTypeNames: 'bool',
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+'
    }],
    'react/button-has-type': 2,
    'react/default-props-match-prop-types': 2,
    'react/destructuring-assignment': 2,
    'react/display-name': 0,
    'react/forbid-component-props': 0,
    'react/forbid-dom-props': 0,
    'react/forbid-elements': 0,
    'react/forbid-foreign-prop-types': 2,
    'react/forbid-prop-types': 0,
    'react/function-component-definition': 0,
    'react/no-access-state-in-setstate': 2,
    'react/no-adjacent-inline-elements': 2,
    'react/no-array-index-key': 0,
    'react/no-children-prop': 2,
    'react/no-danger': 0,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-redundant-should-component-update': 2,
    'react/no-render-return-value': 2,
    'react/no-this-in-sfc': 2,
    'react/no-typos': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/no-unsafe': 2,
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'react/no-will-update-set-state': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-read-only-props': 2,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 2,
    'react/require-optimization': 1,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/sort-prop-types': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2,
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-child-element-spacing': 2,
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-curly-newline': [2, 'consistent'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-handler-names': 2,
    'react/jsx-indent': [2, 2, 2],
    'react/jsx-indent-props': [2, 2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-depth': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-script-url': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-one-expression-per-line': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-curly-brace-presence': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-fragments': [2, 'syntax'],
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-default-props': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-space-before-closing': 2,
    'react/jsx-tag-spacing': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2
  }
}
