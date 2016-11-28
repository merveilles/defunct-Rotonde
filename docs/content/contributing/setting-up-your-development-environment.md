---
date: 2016-11-08T00:00:00+00:00
title: Setting Up Your Development Environment
---

There are a few things you will need if you want to develop for Rotonde.

**NOTE:** In the command line examples below, the dollar sign (`$`) at the start of each line is used to indicate the start of a shell command. It should not be entered as part of the command.

## Git

If you do not have it already, you can download and install Git from [here](https://git-scm.com/downloads).

## Node.js

Rotonde is written in JavaScript running on Node.js, so it will need to be installed on your system.

### macOS & Linux

The best way to install Node.js is to use [nvm](https://github.com/creationix/nvm). Follow the instructions there to install `nvm` on your system. This will allow you to easily install and switch between multiple versions of Node.js.

Once it's installed, you can install the latest version of Node.js by following the instructions below:

```sh
# List the available Node.js versions
$ nvm ls-remote

# Install the latest version of Node.js available (v7.2.0 at time of writing)
$ nvm install 7.2.0

# Alias the version just installed as `default`.
# This will cause `nvm` to remember and use this version by default when opening other command line windows.
$ nvm alias default 7.2.0

# Use the default version
$ nvm use default
```

### Windows

Download and install Node.js [here](https://nodejs.org/en/download/current/).

## Getting the Source Code

### Fork the Repository

Go to the main repository page ([merveilles/Rotonde](https://github.com/merveilles/Rotonde)), and click the **Fork** button in the upper right-hand corner of the screen to fork the repository to your own GitHub profile.

You will now have a copy of the repository on your GitHub profile.

### Clone the Repository

```sh
# Clone the repository onto your local system.
# This will create a `Rotonde` directory in the directory you run the command.
# NOTE: Replace "your-username" with your GitHub username.
$ git clone git@github.com:your-username/Rotonde.git
```

### Create a new branch

Once you have cloned the repository, create a new branch for your changes:

```sh
# Create a new Git branch for your changes
# NOTE: Ideally you should use a clear and expressive name!
$ git checkout -b my-expressive-branch-name
```

## Submitting a Pull Request

Changes to Rotonde are to be submitted via a GitHub [Pull Request](https://help.github.com/articles/about-pull-requests/).

### Your First Pull Request

Working on your first Pull Request? You can learn how from this free video series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

### Submitting a Pull Request

We will review your pull request and either merge it, request changes to it, or close it with an explanation.

Before submitting a pull request, please make sure the following is done:

- Fork [the repository](https://github.com/merveilles/Rotonde) and create your branch from master.
- Ensure the code lints and the test suite passes (`npm test`).
