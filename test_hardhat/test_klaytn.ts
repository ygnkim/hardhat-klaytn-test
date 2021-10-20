import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'
// import utils  from '../utils'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address'
import { Contract } from 'ethers'
// import evm from '../../utils/evm'
// import constant from '../../utils/constant'

const hre: HardhatRuntimeEnvironment = require('hardhat')
const BEP20Abi = require('../abis/BEP20.json')
const fromUnit = (amount, unit = 'ether') => ethers.utils.formatUnits(amount.toString(), unit)
/**
 * Impersonate accounts
 * */
const impersonate = async (accounts) => {
    await hre.network.provider.request({ method: 'hardhat_impersonateAccount', params: accounts })
}

const retrieveContract = async () => {
    // const testDeployerAddr = "0x5F65d38733ea05Ed6124aEbEd0350DbD8E4e3CdA"
    // const deployer = await SignerWithAddress.create(await ethers.provider.getSigner(testDeployerAddr))
    // if (hre.network.name === 'hardhat') await impersonate([testDeployerAddr])
    //
    // const KUSDT = await ethers.getContractAt(BEP20Abi, '0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167')
    // const KWBTC = await ethers.getContractAt(BEP20Abi, '0x16d0e1fbd024c600ca0380a4c5d57ee7a2ecbf9c')
    // const KSP = await ethers.getContractAt(BEP20Abi, '0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654')
    // console.log(`balance KUSDT of deployer ${fromUnit(await KUSDT.balanceOf(deployer.address))}`)
    // console.log(`balance KWBTC of deployer ${fromUnit(await KWBTC.balanceOf(deployer.address))}`)
    // console.log(`balance KSP of deployer ${fromUnit(await KSP.balanceOf(deployer.address))}`)
    
    const KQBT = await ethers.getContractAt(BEP20Abi, '0xfe4cd053f1e9200e784b7d60b54e6aa16e09406a')
    console.log(`symbol of KQBT ${await KQBT.symbol()}`)
    console.log(`name of KQBT ${await KQBT.name()}`)
    
    const KBELT = await ethers.getContractAt(BEP20Abi, '0xdfe180e288158231ffa5faf183eca3301344a51f')
    console.log(`symbol of KBELT ${await KBELT.symbol()}`)
    console.log(`name of KBELT ${await KBELT.name()}`)
    
    // const Contract = await ethers.getContractAt(ContractABI, "0x8d1218AD9c4bdF97e15BB50213DE10226aE46414", deployer)
    // console.log(await Contract.decimals())
}

(async () => {
    await retrieveContract()
    
})()