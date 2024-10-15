---
sidebar_position: 2
---

# Autheo Node Setup

The following document outlines the steps necessary to setup your Autheo validator node. You will need **Ubuntu 22.04** for this process.

## Cloning Node Software

You can either download the node software binary from Github directly or use the following CLI command to clone the repository locally:

```bash

git clone <Repo Location TBD on deployment>

```

## Adjust `authd` and `rpc.sh` Files

You will need to move the `authd` binary located in **user/local/bin**

<!-- TODO: Check with Zeeve about what this means. -->

In the cloned node repo, you will find the file `rpc.sh`. Verify that the contents appear as follows:

```bash

*********************************************
#!/bin/bash

LOGLEVEL="debug"
NODE_NUMBER=3
CONST_NODE_NAME="auth-rpc-node"
CHAINID="auth_ChainID-1"

# Set the script directory
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
HOMEDIR="${SCRIPT_DIR}/${CONST_NODE_NAME}${NODE_NUMBER}"

# Function to set up the Ethereum node
function setupNode() {
  mkdir -p "${HOMEDIR}/config"

  # Initialize the node
  authd config keyring-backend "file" --home "$HOMEDIR"
  authd config chain-id "$CHAINID" --home "$HOMEDIR"
  authd config node "tcp://${CONST_NODE_NAME}${NODE_NUMBER}:26657" --home "$HOMEDIR"
  authd init "${CONST_NODE_NAME}${NODE_NUMBER}" -o --chain-id "$CHAINID" --home "$HOMEDIR"
}

# Function to update application configuration
function updateAppConfig() {
  sed -i '/minimum-gas-prices =/c\minimum-gas-prices = "0.0001mol"' "$HOMEDIR/config/app.toml"
  sed -i '/address = "0.0.0.0:8545"/c\address = "0.0.0.0:8545"' "$HOMEDIR/config/app.toml"
  sed -i '/ws-address = "127.0.0.1:8546"/c\ws-address = "0.0.0.0:8546"' "$HOMEDIR/config/app.toml"
  sed -i '/api = "eth,net,web3"/c\api = "eth,txpool,personal,net,debug,web3"' "$HOMEDIR/config/app.toml"
}

# Main execution
set -o xtrace
setupNode
copyGenesis
updateAppConfig

*****************************************

```

## Swap Out the Genesis.json File

In the `/$HOMEDIR/config/` directory, you will find a `genesis.json` file. Replace the existing `genesis.json` file with the new version found in your cloned node repo.

## Creating the Service File

Using your IDE of choice, create a new `authd.service` file containing the following code:

```bash

[Unit]
Description=Auth Daemon
After=network.target

[Service]
Type=simple
ExecStart=/bin/sh -c 'echo "Z3xV7aDp" | authd start --json-rpc.api=eth,txpool,personal,net,debug,web3 --api.enable --home YOUR_HOME-DIR' 
WorkingDirectory=/home/<USER>
User=<USERNAME>
Group=<GROUP>

[Install]
WantedBy=multi-user.target


```

You must replace the following variables within this file:

* <USER> - The name of your node's working directory.

* <USERNAME> - Your username for node access.

* <GROUP> - The name of your node group.

## Running the Node Software

After completing the above configuration, you can run the node software with the following commands:

```bash

sudo systemctl enable authd.service
sudo systemctl start authd.service 

```