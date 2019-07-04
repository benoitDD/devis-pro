const plateforme = global.process.platform === 'linux' ? 'unix' : 'windows'

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "process": "readonly",
        "__dirname": "readonly"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            plateforme
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};