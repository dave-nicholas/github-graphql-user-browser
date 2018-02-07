# Github User Viewer

[![Coverage Status](https://coveralls.io/repos/github/dave-nicholas/github-graphql-user-browser/badge.svg?branch=master)](https://coveralls.io/github/dave-nicholas/github-graphql-user-browser?branch=master)

[![Build Status](https://travis-ci.org/dave-nicholas/github-graphql-user-browser.svg?branch=master)](https://travis-ci.org/dave-nicholas/github-graphql-user-browser)


## Installation
You will need to create a personal access token capable of querying
the api instructions of how to do so can be done [here](https://developer.github.com/v4/guides/forming-calls/).

You will then need to create a `.env` in the root directory of the project
and enter the access token as follows.

```
REACT_APP_GITHUB_TOKEN=youraccesstoken
```

You will need to install the dependancies by running `yarn`
```
yarn
```

## Running

```
yarn start
```

## Running test

```
yarn test

yarn coverage
```
