import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import { removeConsoleLog } from 'hardhat-preprocessor'


const getNetworkAccount = (): { mnemonic: string; initialIndex: number } => {
    try {
        return { mnemonic: require('./secrets.json').mnemonic, initialIndex: 0 }
    } catch (e) {
        return { mnemonic: 'test test test test test test test test test test test junk', initialIndex: 0 }
    }
}

export default {
    preprocess: {
        eachLine: removeConsoleLog((hre) => {
            return !hre.network.name.includes('hardhat') && !hre.network.name.includes('local') && !hre.network.name.includes('test')
        })
    },
    solidity: {
        version: '0.6.12',
        settings: {
            evmVersion: "constantinople",
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    networks: {
        hardhat: {
            // mining: {
            //     auto: true,
            //     interval: 5000
            // },
            hardfork: 'constantinople',
            forking: {
                url: '' // cypress
            },
            // accounts: getNetworkAccount(),
            accounts: {
                mnemonic: 'test test test test test test test test test test test junk',
                initialIndex: 0,
                accountsBalance: '10000000000000000000000000' // 10,000,000 ETH
            },
            // blockGasLimit: 30000000,
            gas: 8500000,
            timeout: 3000000,
            gasPrice: 25000000000
        },
        cypress: {
            url: '',
            networkId: 8217,
            accounts: getNetworkAccount(),
            // accounts: [require('./secrets.json').MYACCOUNT_PRIVATE_KEY],
            gas: 8500000,
            timeout: 3000000,
            gasPrice: 25000000000
        }
    },
    mocha: {
        timeout: 400000000
    },
}
