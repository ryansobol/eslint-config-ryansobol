'use strict';

module.exports = {
  // Prevent missing displayName in a React component definition
  'react/display-name': [2, { ignoreTranspilerName: false }],

  // Forbid certain props on Components
  'react/forbid-component-props': 0,

  // Forbid certain propTypes
  'react/forbid-prop-types': [2, { forbid: ['any', 'array', 'object'] }],

  // Enforce boolean attributes notation in JSX
  'react/jsx-boolean-value': [2, 'always'],

  // Validate closing bracket location in JSX
  'react/jsx-closing-bracket-location': [2, { location: 'line-aligned' }],

  // Enforce or disallow spaces inside of curly braces in JSX attributes
  'react/jsx-curly-spacing': [2, 'never', { allowMultiline: true }],

  // Enforce or disallow spaces around equal signs in JSX attributes
  'react/jsx-equals-spacing': [2, 'never'],

  // Restrict file extensions that may contain JSX
  'react/jsx-filename-extension': 2,

  // Configure the position of the first property
  'react/jsx-first-prop-new-line': [2, 'multiline'],

  // Enforce event handler naming conventions in JSX
  'react/jsx-handler-names': 2,

  // Validate JSX indentation
  'react/jsx-indent': [2, 2],

  // Validate props indentation in JSX
  'react/jsx-indent-props': [2, 2],

  // Validate JSX has key prop when in array or iterator
  'react/jsx-key': 2,

  // Limit maximum of props on a single line in JSX
  'react/jsx-max-props-per-line': 0,

  // Prevent usage of .bind() and arrow functions in JSX props
  'react/jsx-no-bind': 2,

  // Prevent comments from being inserted as text nodes
  'react/jsx-no-comment-textnodes': 2,

  // Prevent duplicate props in JSX
  'react/jsx-no-duplicate-props': 2,

  // Prevent usage of unwrapped JSX strings
  'react/jsx-no-literals': 0,

  // Prevent usage of unsafe target='_blank'
  'react/jsx-no-target-blank': 2,

  // Disallow undeclared variables in JSX
  'react/jsx-no-undef': 2,

  // Enforce PascalCase for user-defined JSX components
  'react/jsx-pascal-case': 2,

  // Enforce props alphabetical sorting
  'react/jsx-sort-props': 2,

  // Validate spacing before closing bracket in JSX
  'react/jsx-space-before-closing': [2, 'always'],

  // Prevent React to be incorrectly marked as unused
  'react/jsx-uses-react': 2,

  // Prevent variables used in JSX to be incorrectly marked as unused
  'react/jsx-uses-vars': 2,

  // Prevent missing parentheses around multilines JSX
  'react/jsx-wrap-multilines': [2, {
    assignment: false,
    declaration: false,
    return: false
  }],

  // Prevent usage of dangerous JSX properties
  'react/no-danger': 2,

  // Prevent problem with children and props.dangerouslySetInnerHTML
  'react/no-danger-with-children': 2,

  // Prevent usage of deprecated methods
  'react/no-deprecated': 2,

  // Prevent usage of setState in componentDidMount
  'react/no-did-mount-set-state': 2,

  // Prevent usage of setState in componentDidUpdate
  'react/no-did-update-set-state': 2,

  // Prevent direct mutation of this.state
  'react/no-direct-mutation-state': 2,

  // Prevent usage of findDOMNode
  'react/no-find-dom-node': 2,

  // Prevent usage of isMounted
  'react/no-is-mounted': 2,

  // Prevent multiple component definition per file
  'react/no-multi-comp': 2,

  // Prevent usage of the return value of React.render
  'react/no-render-return-value': 2,

  // Prevent usage of setState
  'react/no-set-state': 0,

  // Prevent using string references in ref attribute.
  'react/no-string-refs': 2,

  // Prevent usage of unknown DOM property
  'react/no-unknown-property': 2,

  // Prevent definitions of unused prop types
  'react/no-unused-prop-types': 2,

  // Enforce ES5 or ES6 class for React Components
  'react/prefer-es6-class': 0,

  // Enforce stateless React Components to be written as a pure function
  'react/prefer-stateless-function': 0,

  // Prevent missing props validation in a React component definition
  'react/prop-types': 0,

  // Prevent missing React when using JSX
  'react/react-in-jsx-scope': 2,

  // Enforce React components to have a shouldComponentUpdate method
  'react/require-optimization': 0,

  // Enforce ES5 or ES6 class for returning value in render function
  'react/require-render-return': 2,

  // Prevent extra closing tags for components without children
  'react/self-closing-comp': 2,

  // Enforce component methods order
  'react/sort-comp': [2, {
    groups: {
      lifecycle: [
        'displayName',
        'propTypes',
        'contextTypes',
        'childContextTypes',
        'mixins',
        'statics',
        'defaultProps',
        'constructor',
        'getDefaultProps',
        'getInitialState',
        'state',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount'
      ]
    },
    order: [
      'type-annotations',
      'static-methods',
      'lifecycle',
      'everything-else',
      'render'
    ]
  }],

  // Enforce propTypes declarations alphabetical sorting
  'react/sort-prop-types': 2,

  // Enforce style prop value being an object
  'react/style-prop-object': 2
};
