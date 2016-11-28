---
date: 2016-11-08T00:00:00+00:00
title: Contributing
weight: 20
---

## Prerequisites

If you haven't already, read through our guide on [Setting Up Your Development Environment](setting-up-your-development-environment).

## Install Dependencies

```sh
# Navigate to your Rotonde directory
$ cd ~/path/to/Rotonde

# Install the development dependencies through npm
$ npm install

# Run the `bootstrap` script to initialize all of the Rotonde packages
$ npm run bootstrap
```

## Running the Server

To run a Rotonde development server locally, you will need to run [`rotonde-core`](https://github.com/merveilles/Rotonde/tree/master/packages/rotonde-core).

```sh
# Navigate to the `rotonde-core` package directory
$ cd ~/path/to/Rotonde/packages/rotonde-core

# Start the development server
$ npm run dev
```

You should now have a Rotonde server running on [localhost:3000](http://localhost:3000).
