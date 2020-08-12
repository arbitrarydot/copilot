module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['eslint.config.json'],
  },
  plugins: [
      '@typescript-eslint',
      '@angular-eslint',
      'rxjs'
  ],
  extends: [
      'eslint:recommended',
      'plugin:eslint-comments/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:@angular-eslint/recommended',
  ],
  overrides: [{
          files: ['src/**/*.spec.ts'],
          parserOptions: {
              project: './eslint.config.json',
          },
          extends: [
              'plugin:jest/recommended',
              'plugin:jest/style'
          ],
          plugins: ['jest'],
          env: {
              jest: true
          },
          rules: {
              '@typescript-eslint/no-unused-vars': 'off',
              '@typescript-eslint/explicit-function-return-type': 'off',
              'jest/no-commented-out-tests': 'warn',
              'jest/no-disabled-tests': 'off',
              'jest/expect-expect': [
                  'error',
                  {
                      'assertFunctionNames': ['expect', '*.expect']
                  }
              ],
              'no-empty': 'off',
              '@typescript-eslint/no-empty-function': 'off',
              'no-magic-numbers': 'off',
              '@typescript-eslint/no-magic-numbers': 'off',
              '@typescript-eslint/no-unused-vars-experimental': 'off'
          },
      },
      {
          files: ['src/**/*.selectors.ts', 'src/**/*.effects.ts'],
          rules: {
              '@typescript-eslint/typedef': 'off'
          },
      },
  ],
  rules: {
      // These seem fine to disable, or modify from their original.
      '@typescript-eslint/no-explicit-any': 'off',
      'max-len': ['warn', {
          code: 120,
          tabWidth: 0,
          ignorePattern: '^import\\s.+\\sfrom\\s.+;$'
      }],
      'eslint-comments/no-unused-disable': 'error',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/restrict-template-expressions': [
          'error',
          {
              allowNumber: true,
              allowBoolean: true,
              allowAny: true,
              allowNullish: false
          }
      ],
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
          'vars': 'all',
          'args': 'all',
          'ignoreRestSiblings': false,
          'argsIgnorePattern': '^_',
          'caughtErrors': 'none',
          'caughtErrorsIgnorePattern': '^_'
      }],
      '@typescript-eslint/no-unused-vars-experimental': [
          'warn',
          {
              ignoredNamesRegex: '^_',
              ignoreArgsIfArgsAfterAreUsed: false
          }
      ],
      // These seem NOT fine to disable, but compromises needs to be made.
      '@typescript-eslint/ban-types': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      // best practices.
      'accessor-pairs': 'off',
      'array-callback-return': 'off',
      'block-scoped-var': 'off',
      'class-methods-use-this': 'off',
      'complexity': 'off',
      'consistent-return': 'off',
      // best port of the existing rules that I could muster.
      'prefer-arrow-callback': 'error',
      '@typescript-eslint/class-literal-property-style': 'error',
      'spaced-comment': ['error', 'always', {
          'block': {
              'balanced': true
          },
          'exceptions': [`*`, `*/`]
      }],
      'curly': ['error', 'multi-line'],
      'eol-last': 'error',
      'guard-for-in': 'error',
      'no-restricted-imports': ['error', 'rxjs/Rx'],
      'object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      'no-labels': ['error', {
          'allowSwitch': true,
          'allowLoop': true
      }],
      '@typescript-eslint/explicit-member-accessibility': ['error', {
          accessibility: 'explicit',
          ignoredMethodNames: ['constructor'],
          overrides: {
              accessors: 'off',
              constructors: 'no-public',
              methods: 'no-public',
              properties: 'no-public',
              parameterProperties: 'off'
          }
      }],
      '@typescript-eslint/member-ordering': [
          'error',
          {
              default: [
                  // Index signature
                  'signature',

                  'decorated-field',

                  // Fields
                  'public-static-field',
                  'protected-static-field',
                  'private-static-field',

                  'public-decorated-field',
                  'protected-decorated-field',
                  'private-decorated-field',

                  'public-instance-field',
                  'protected-instance-field',
                  'private-instance-field',

                  'public-abstract-field',
                  'protected-abstract-field',
                  'private-abstract-field',

                  'public-field',
                  'protected-field',
                  'private-field',

                  'static-field',
                  'instance-field',
                  'abstract-field',

                  'field',

                  // Constructors
                  'public-constructor',
                  'protected-constructor',
                  'private-constructor',

                  'constructor',

                  'public-decorated-method',
                  'protected-decorated-method',
                  'private-decorated-method',

                  // Methods
                  'public-static-method',
                  'protected-static-method',
                  'private-static-method',

                  'public-instance-method',
                  'protected-instance-method',
                  'private-instance-method',

                  'public-abstract-method',
                  'protected-abstract-method',
                  'private-abstract-method',

                  'public-method',
                  'protected-method',
                  'private-method',

                  'static-method',
                  'instance-method',
                  'abstract-method',

                  'decorated-method',

                  'method'
              ]
          }
      ],
      'no-caller': 'error',
      'no-bitwise': 'error',
      'no-console': ['error', {
          allow: ['warn', 'error']
      }],
      'no-debugger': 'error',
      'no-this-before-super': 'error',
      'no-redeclare': 'error',
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': ['error'],
      'no-empty': 'error',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': [
          'error',
          {
              allow: ['constructors', 'asyncFunctions', 'asyncMethods']
          }
      ],
      'no-eval': 'error',
      'no-shadow': 'error',
      'no-throw-literal': 'error',
      'no-var': 'error',
      'sort-keys': 'off',
      'prefer-const': 'error',
      'radix': 'error',
      'eqeqeq': 'error',
      'space-before-function-paren': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/typedef': [
          'warn',
          {
              'arrayDestructuring': false,
              'arrowParameter': true,
              'variableDeclaration': true,
              'objectDestructuring': false,
              'parameter': true,
              'propertyDeclaration': false,
              'variableDeclarationIgnoreFunction': false
          }
      ],
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
              allowExpressions: true,
              allowTypedFunctionExpressions: true,
              allowHigherOrderFunctions: true,
              allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          }
      ],
      '@typescript-eslint/unified-signatures': 'error',
      'camelcase': 'error',
      'no-whitespace-before-property': 'error',
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-output-on-prefix': 'error',
      '@angular-eslint/no-inputs-metadata-property': 'error',
      '@angular-eslint/no-outputs-metadata-property': 'error',
      '@angular-eslint/no-output-rename': 'error',
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/use-pipe-transform-interface': 'error',
      '@angular-eslint/component-class-suffix': 'error',
      '@angular-eslint/directive-class-suffix': 'error',
      '@angular-eslint/component-selector': ['error', {
          type: ['element', 'attribute'],
          prefix: 'app',
          style: 'kebab-case'
      }],
      // This is broken, so I'm setting to warn instead of error. disable it if it bothers you too much.
      '@angular-eslint/directive-selector': ['warn', {
          type: ['element', 'attribute'],
          prefix: 'app',
          style: 'camelCase'
      }],
      'object-shorthand': ['warn', 'consistent-as-needed'],
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': ['warn',
          {
              ignoreEnums: true,
              ignoreNumericLiteralTypes: true,
              ignoreReadonlyClassProperties: true
          }
      ],
      '@typescript-eslint/no-loss-of-precision': 'warn',
      'keyword-spacing': 'off',
      '@typescript-eslint/keyword-spacing': [
          'error'
      ],
      'brace-style': 'off',
      '@typescript-eslint/brace-style': ['error', '1tbs', {
          'allowSingleLine': true
      }],
      'comma-spacing': 'off',
      '@typescript-eslint/comma-spacing': ['error', {
          'before': false,
          'after': true
      }],
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': ['error'],
      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': 'error',
      'func-call-spacing': 'off',
      '@typescript-eslint/func-call-spacing': 'error',
      // Look at indentation later.
      // indent: 'off',
      // '@typescript-eslint/indent': 'error',
      '@typescript-eslint/lines-between-class-members': ['error', 'always', {
          exceptAfterSingleLine: true
      }],
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': ['warn'],
      'quotes': 'off',
      '@typescript-eslint/quotes': ['error',
          'single',
          {
              'allowTemplateLiterals': true
          }
      ],
      semi: 'off',
      '@typescript-eslint/semi': [
          'error',
          'always'
      ],
      'rxjs/no-unsafe-switchmap': 'error',
      'rxjs/no-unsafe-takeuntil': 'error',
      'rxjs/finnish': ['error', {
          'functions': false,
          'methods': false,
          'parameters': false,
          'properties': false,
          'variables': true
      }],
  }
};
