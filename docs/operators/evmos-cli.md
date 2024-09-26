---
sidebar_position: 1
---

# Getting Started with Evmos CLI

Autheo is based off [Evmos](https://evmos.org/) architecure and relies on the Evmos CLI for node operation. Users looking to start a node on the Autheo network will first need to install both Evmos CLI and its necessary prerequisites.

## Prerequisites

### Go

Evmos uses the [`Go`](https://go.dev/) langauge. You can find the most up to date version of Go [here](https://go.dev/dl/). Building on Autheo will require your version of Go to be at least 1.20.

After following the instructions as outlined by **Go**, you can verify proper installation and current version in your CLI using the following command:

```bash

go version

```

After confirming the version, you will need to configure your `GOPATH` by running the following command and adding it to your shell startup script:

```bash

export PATH=$PATH:$(go env GOPATH)/bin

```

### jq

You will also need to install `jq`, a command-line JSON processing tool. Instructions for installing **jq** can be found [here](https://jqlang.github.io/jq/download/).

After installation, verify your current **jq** version using the following command:

```bash

jq --version

```

## Installing Evmos CLI

The easiest method of installing Evmos CLI is to clone the [Github Repository](https://github.com/evmos/evmos) and build from source. To do so, use the following commands in order:

- **The variable *tag* in the below command should be replaced with the current [Evmos release](https://github.com/evmos/evmos/releases)**.

```bash

git clone https://github.com/evmos/evmos.git
cd evmos
git fetch
git checkout <tag>
make install

```

You can verify successful installation by using the following command to check the version:

```bash

evmosd version

```

:::note

You may also build Evmos CLI by downloading the binaries directly from the repo. Instructions for this method of installation can be found in the [Evmos Documentation](https://docs.evmos.org/protocol/evmos-cli/#download-the-binaries)

:::

## Next Steps

* [Running a Validator Node](./validator-node.md)