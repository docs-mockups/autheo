---
sidebar_position: 3
---

# Deploying a Smart Contract on the Autheo Blockchain

This document will guide you through launching an ERC20 token on the Autheo blockchain. This tutorial uses [MetaMask](https://metamask.io/) wallet, [OpenZeppelin](https://www.openzeppelin.com/) and [Remix IDE](https://remix.ethereum.org/).

## Connecting to the Autheo Network with MetaMask

Indepth information on connecting MetaMask to a custom RPC can be found on the [MetaMask Support Site](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/).

1) Click on the **Network Selector Button** in the upper left of the application's main window.

2) Click **Add network**.

3) Enter the following information for the Autheo blockchain:

<!--

Update this information when RPC details become available.

-->

* **Network name:** Autheo

* **New RPC URL:** TBD

* **Chain ID:** TBD

* **Currency symbol:** TBD

4) Click **Save**

5) Click on the **Network Selector Button** once more, you should now see the Autheo blockchain.

## Creating an ERC20 Token Contract with OpenZeppelin

[OpenZeppelin](https://wizard.openzeppelin.com/) provides a variety of premade templates for use with EVM-compatible blockchains. In this instance, we will use their ERC20 wizard to deploy a custom token on the Autheo blockchain.

The left side of your screen will show a variety of pre-built options that are compatible with the ERC20 standard. You will want to update the **Name**, **Symbol** and **Premint** number of tokens. For our example, we will not alter any other options. Further information on these options can be found [here](https://docs.openzeppelin.com/contracts/5.x/api/token/erc20).

Changes made to the name, symbol and premint tokens option will reflect within the code in the main window on the right of your screen. This code can be copied over to the Remix IDE in the next step.

## Deploying your ERC20 Token with Remix IDE

From [Remix](https://remix.ethereum.org/), use the following steps:

1) Create a new file.

    In the *File Explorer* window on the left of your screen, choose the **Create new file** option beneath the *default_workspace* header. The icon is a picture of a single page with the corner folded.

2) Name your new file, using the `.sol` file type.

    You can use any name for the contract file, as long as it ends in `.sol`. For example, `ERC20Contract.sol`.

3) Copy your OpenZeppelin code into the file.

    After selecting your new file, you can copy your example contract code into the main working window in the center of your screen. The following expandable section contains a basic example from OpenZeppelin for a token called `AutheoTest` with the symbol `TST` and 10,000 preminted tokens.

    <summary><b>Example Code</b></summary>

    <details>

    ```bash
    // SPDX-License-Identifier: MIT
    // Compatible with OpenZeppelin Contracts ^5.0.0
    pragma solidity ^0.8.20;

    import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
    import "@openzeppelin/contracts/access/Ownable.sol";
    import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

    contract AutheoTest is ERC20, Ownable, ERC20Permit {
        constructor(address initialOwner)
            ERC20("AutheoTest", "TST")
            Ownable(initialOwner)
            ERC20Permit("AutheoTest")
        {
            _mint(msg.sender, 10000 * 10 ** decimals());
        }

        function mint(address to, uint256 amount) public onlyOwner {
            _mint(to, amount);
        }
    }
    ```

    </details>

4) Compile your contract.

    Click on the `Solidity Compiler` icon on the left sidebar, which appears as two opposite arrows pointing to the upper left and lower right. In this window, you will see `Compile filename.sol`. In the example instance, `ERC20Contract.sol`.

5) Choose EVM version `paris`.

    In the *Advanced Configuration* settings under the `Solidity Compiler`, choose the `paris` version of EVM in the *EVM Version* dropdown menu.

6) Connect your MetaMask Account to Remix.

    Choose `Deploy & Run Transaction` from the left sidebar, directly under the `Solidity Compiler`.

    You will see **Environment** at the top of this window, where you can choose *WalletConnect*. In the main central window, the large blue **Connect Wallet** button will allow you to connect your MetaMask wallet to deploy the contract.

7) Verify information and deploy your ERC20 contract.

    Verify that your account and contract value are correct, and then click `Deploy` to deploy your ERC20 token on the Autheo blockchain.