---
sidebar_position: 2
---

# Running a Validator Node

The Autheo blockchain is based on underlying [Evmos](https://evmos.org/) architecture. As a [Proof-of-Stake](https://en.wikipedia.org/wiki/Proof_of_stake) protocol, consensus is achieved through a trusted network of **Validators**. These validators propose new blocks and validate the single source of truth that will become the historical blockchain. Their vote weight corresponds to their amount of **staked** Autheo tokens. 

To run a validatior node on the Autheo blockchain, you will need to own or have access to hardware with the following minimum requirements:

* 4 or more physical CPU cores

* A minimum of 500GB of NVME SSD disk storage.

* A minimum of 32GB of RAM.

* A minimum network bandwidth of 100mbps.

Evmos supports macOS architectures of `darwin/arm64` and `darwin/x86_64` and Linux architectures of `linux/arm64` and `linux/amd64`.

Uptime metrics are critical for participation in consensus, and you should ensure a steady, consistent internet connection.

## Creating a Validator Entry

Creating a new validator can be done through [Evmos CLI](./evmos-cli.md) and requires a previously created **Autheo account** with the amount of tokens you plan to stake.

Expand the following section if you need instructions on creating and funding an Autheo account using Evmos CLI.

<details>
<summary><b>Creating an Account</b></summary>

You can use the `evmosd keys add <name>` command to create a new key attached to your Autheo account. For example:

```bash

evmosd keys add MyTestKey

```

The interface will prompt you to enter a new passphrase. It must be at least 8 characters. After entering the passphrase twice, you will see a response similar to the following:

```bash

- address: evmos1ea7vesz3hztg4x8qwwvtz92tpwvge9keaxpptg
  name: MyTestKey
  pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"A9hsGFQHxq4cntVtxKtUciJ6uR5YqNZX3Ab/3DF33wAp"}'
  type: local


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

cup human fortune until giant exile guilt purse argue general sword naive mobile fitness initial engine produce brave hole submit oblige suspect roof anxiety

```

You can then send Autheo tokens to the listed `address`, shown here as **evmos1ea7vesz3hztg4x8qwwvtz92tpwvge9keaxpptg**.

</details>

