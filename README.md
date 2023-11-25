FOLLOW These Steps ------->
npm i eslint --save-dev
npx eslint --init
Two options 1).Throw file of eslint 2). Direct setup in package.json file

"devDependencies":{
    "babel-cli":"6.26.0",
    "babel-eslint":"10.0.1",
    "babel-plugin-source-map-support":"2.0.1",
    "babel-plugin-transform-object-rest-spread":"6.26.0",
    "babel-plugin-transform-runtime":"6.23.0",
    "babel-parset-env":"1.7.0",
    "eslint": "^8.54.0",
    "eslint-config-standard": "^17.1.0",
    "eslint-plugin-import": "^2.29.0",
    "eslint-plugin-n": "^16.3.1",
    "eslint-plugin-promise": "^6.1.1",
    "eslint-config-prettier":"3.3.0",
    "eslint-plugin-jest":"22.1.2",
    "husky":"1.3.1",
    "jest":"23.6.0",
    "lint-staged":"8.1.0",
    "prettier":"1.19.1"
  },
  "eslintConfig": {
    "parser": "babel-eslint",
    "plugins": [
      "jest"
    ],
    "extends":[
      "standard",
      "prettier",
      "plugin:jest/recommended"
    ],
    "env": {
      "jest/globals": true
    }
  },
  "prettier":{
    "singleQuote": true,
    "semi": false
  },
  "lint-staged":{
    "*.js":[
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  },
  "nodemonConfig":{
    "execMap":{
      "js":"babel-node"
    }
  },
  "babel":{
    "sourceMaps":"both",
    "plugins":[
      "transform-runtime",
      "transform-object-rest-spread"
    ],
    "presets":[
      [
        "env",
        {
          "targets":{
            "node":"current"
          }
        }
      ]
    ],
    "env":{
      "production":{
        "plugins":[
          "source-map-support"
        ],
        "ignore":[
          "**/__tests__/**"
        ]
      }
    }
  },
  "repository": {
    "type": "git",
    "url": "git@10.1.10:Rubus/rubusBackend-postgres.git"
  },
  "publishConfig": {
    "registry": "http://192.168.95.13:8081/repository/npm-repository/"
  }