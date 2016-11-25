# Rotonde

> Decentralized communication protocol.

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
