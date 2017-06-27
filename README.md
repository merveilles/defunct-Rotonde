# defunct-Rotonde

> You were probably looking for [this Rotonde](https://github.com/Rotonde).



[![Build Status](https://travis-ci.org/merveilles/Rotonde.svg?branch=master)](https://travis-ci.org/merveilles/Rotonde)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

- [Contributing](#contributing)
- [Plugins](#plugins)
- [Packages](#packages)
  - [Core Packages](#core-packages)
  - [Client Packages](#client-packages)
  - [Plugin Packages](#plugin-packages)
  - [Client Adapter Packages](#client-adapter-packages)
  - [Deployment Packages](#deployment-packages)
  - [Utility Packages](#utility-packages)

## Contributing

Want to contribute to Rotonde? Have a look at our [contributing documentation](/CONTRIBUTING.md).

## Plugins

| Plugin | Client | Server | CLI | UI |
|--------|:------:|:------:|:---:|:--:|
| [`rotonde-plugin-chat`](/packages/rotonde-plugin-chat) | &#10003; | &#10003; | [&#10003;](/packages/rotonde-plugin-chat-client-adapter-cli) | &#10007; |

## Packages

The Rotonde repo is managed as a monorepo; it's composed of many [npm](https://www.npmjs.com/) packages.

### Core Packages

The core packages provide the core framework for Rotonde, on which everything else is built.

#### [`rotonde-core`](/packages/rotonde-core)

[![npm](https://img.shields.io/npm/v/rotonde-core.svg?maxAge=2592000)](https://www.npmjs.com/package/rotonde-core)
[![Dependency Status](https://david-dm.org/merveilles/Rotonde.svg?path=packages/rotonde-core)](https://david-dm.org/merveilles/Rotonde?path=packages/rotonde-core)

The Rotonde core is a web server built on top of Express and Socket.IO. The core itself is fairly light, and uses plugins as the primary means of adding additional functionality.

#### [`rotonde-core-messages`](/packages/rotonde-core-messages)

[![npm](https://img.shields.io/npm/v/rotonde-core-messages.svg?maxAge=2592000)](https://www.npmjs.com/package/rotonde-core-messages)
[![Dependency Status](https://david-dm.org/merveilles/Rotonde.svg?path=packages/rotonde-core-messages)](https://david-dm.org/merveilles/Rotonde?path=packages/rotonde-core-messages)

The `rotonde-core-messages` package exposes messages used in `rotonde-core`.

### Client Packages

The client packages provide various clients for interacting with Rotonde.

#### [`rotonde-cli`](/packages/rotonde-cli)

[![npm](https://img.shields.io/npm/v/rotonde-cli.svg?maxAge=2592000)](https://www.npmjs.com/package/rotonde-cli)
[![Dependency Status](https://david-dm.org/merveilles/Rotonde.svg?path=packages/rotonde-cli)](https://david-dm.org/merveilles/Rotonde?path=packages/rotonde-cli)

The Rotonde CLI is a command line interface for interacting with Rotonde.

### Plugin Packages

The plugin packages extend Rotonde core and the various Rotonde clients with additional functionality.

#### [`rotonde-plugin`](/packages/rotonde-plugin)

[![npm](https://img.shields.io/npm/v/rotonde-plugin.svg?maxAge=2592000)](https://www.npmjs.com/package/rotonde-plugin)
[![Dependency Status](https://david-dm.org/merveilles/Rotonde.svg?path=packages/rotonde-plugin)](https://david-dm.org/merveilles/Rotonde?path=packages/rotonde-plugin)

The `rotonde-plugin` package contains the base classes for the client and server components of a Rotonde plugin.

#### [`rotonde-plugin-chat`](/packages/rotonde-plugin-chat)

[![npm](https://img.shields.io/npm/v/rotonde-plugin-chat.svg?maxAge=2592000)](https://www.npmjs.com/package/rotonde-plugin-chat)
[![Dependency Status](https://david-dm.org/merveilles/Rotonde.svg?path=packages/rotonde-plugin-chat)](https://david-dm.org/merveilles/Rotonde?path=packages/rotonde-plugin-chat)

The `rotonde-plugin-chat` package extends Rotonde with chat functionality.

### Client Adapter Packages

The client adapter packages are used in conjunction with [plugin packages](#plugin-packages) in order to provide the plugin functionality to a particular [Rotonde client](#client-packages).

#### [`rotonde-plugin-chat-client-adapter-cli`](/packages/rotonde-plugin-chat-client-adapter-cli)

[![npm](https://img.shields.io/npm/v/rotonde-plugin-chat-client-adapter-cli.svg?maxAge=2592000)](https://www.npmjs.com/package/rotonde-plugin-chat-client-adapter-cli)
[![Dependency Status](https://david-dm.org/merveilles/Rotonde.svg?path=packages/rotonde-plugin-chat-client-adapter-cli)](https://david-dm.org/merveilles/Rotonde?path=packages/rotonde-plugin-chat-client-adapter-cli)

The `rotonde-plugin-chat-client-adapter-cli` package exposes the CLI client adapter for the `rotonde-plugin-chat` package.

### Deployment Packages

The deployment packages provide the ability to deploy Rotonde instances to a variety of hosting locations.

#### [`rotonde-deploy`](/packages/rotonde-deploy)

[![npm](https://img.shields.io/npm/v/rotonde-deploy.svg?maxAge=2592000)](https://www.npmjs.com/package/rotonde-deploy)
[![Dependency Status](https://david-dm.org/merveilles/Rotonde.svg?path=packages/rotonde-deploy)](https://david-dm.org/merveilles/Rotonde?path=packages/rotonde-deploy)

The `rotonde-deploy` package contains the logic for orchestrating deployments to different environments. Environment-specific deployment configuration is provided by other `rotone-deploy-*` packages.

#### [`rotonde-deploy-now`](/packages/rotonde-deploy-now)

[![npm](https://img.shields.io/npm/v/rotonde-deploy-now.svg?maxAge=2592000)](https://www.npmjs.com/package/rotonde-deploy-now)
[![Dependency Status](https://david-dm.org/merveilles/Rotonde.svg?path=packages/rotonde-deploy-now)](https://david-dm.org/merveilles/Rotonde?path=packages/rotonde-deploy-now)

The `rotonde-deploy-now` package provides the ability to deploy a Rotonde instance to [now](https://zeit.co/now).

### Utility Packages

The utility packages are used to share common functionality between Rotonde packages. These will mostly be used by Rotonde core.

#### [`rotonde-util-config-manager`](/packages/rotonde-util-config-manager)

[![npm](https://img.shields.io/npm/v/rotonde-util-config-manager.svg?maxAge=2592000)](https://www.npmjs.com/package/rotonde-util-config-manager)
[![Dependency Status](https://david-dm.org/merveilles/Rotonde.svg?path=packages/rotonde-util-config-manager)](https://david-dm.org/merveilles/Rotonde?path=packages/rotonde-util-config-manager)

The `rotonde-util-config-manager` provides the ability to manage configuration files for Rotonde core and Rotonde clients.

#### [`rotonde-util-plugin-manager`](/packages/rotonde-util-plugin-manager)

[![npm](https://img.shields.io/npm/v/rotonde-util-plugin-manager.svg?maxAge=2592000)](https://www.npmjs.com/package/rotonde-util-plugin-manager)
[![Dependency Status](https://david-dm.org/merveilles/Rotonde.svg?path=packages/rotonde-util-plugin-manager)](https://david-dm.org/merveilles/Rotonde?path=packages/rotonde-util-plugin-manager)

The `rotonde-util-plugin-manager` provides the ability to manager plugins for Rotonde core and Rotonde clients.
