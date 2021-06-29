/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L1CustomGateway } from '../L1CustomGateway'

export class L1CustomGateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L1CustomGateway> {
    return super.deploy(overrides || {}) as Promise<L1CustomGateway>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1CustomGateway {
    return super.attach(address) as L1CustomGateway
  }
  connect(signer: Signer): L1CustomGateway__factory {
    return super.connect(signer) as L1CustomGateway__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1CustomGateway {
    return new Contract(address, _abi, signerOrProvider) as L1CustomGateway
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'InboundTransferFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'OutboundTransferInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'TokenSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'WhitelistSourceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'newData',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'madeExternalCall',
        type: 'bool',
      },
    ],
    name: 'WithdrawRedirected',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
    ],
    name: 'encodeWithdrawal',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_l1Addresses',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_l2Addresses',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'forceRegisterTokenToL2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasReserveIfCallRevert',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_initialData',
        type: 'bytes',
      },
    ],
    name: 'getExternalCall',
    outputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'inboundEscrowAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1ToL2Token',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'parseInboundData',
    outputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_extraData',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'redirectedExits',
    outputs: [
      {
        internalType: 'address',
        name: '_newTo',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'registerTokenToL2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferExitAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'updateWhitelistSource',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelist',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50612dce806100206000396000f3fe6080604052600436106101345760003560e01c806395fcea78116100ab578063d2ce7d651161006f578063d2ce7d6514610881578063f26bdead1461091b578063f68a908214610953578063f887ea4014610a19578063f8c8765e14610a2e578063fb0e722b14610a7957610134565b806395fcea7814610602578063a0c76a9614610617578063a7e28d48146106f0578063bcf2e6eb14610723578063bd5f3e7d1461079657610134565b80632e567b36116100fd5780632e567b361461036d57806347466f981461047857806386ee2050146104ab5780638a2dc014146105a55780638da5cb5b146105d857806393e59dc1146105ed57610134565b8062aa3a9b14610139578063020a6058146102125780630f09eb511461025d5780631d3a689f146102725780632db09c1c1461033c575b600080fd5b34801561014557600080fd5b50610210600480360360a081101561015c57600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561019c57600080fd5b8201836020820111156101ae57600080fd5b803590602001918460018302840111600160201b831117156101cf57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a8e945050505050565b005b34801561021e57600080fd5b5061024b6004803603604081101561023557600080fd5b50803590602001356001600160a01b0316610c88565b60408051918252519081900360200190f35b34801561026957600080fd5b5061024b610cbd565b61024b600480360360a081101561028857600080fd5b810190602081018135600160201b8111156102a257600080fd5b8201836020820111156102b457600080fd5b803590602001918460208302840111600160201b831117156102d557600080fd5b919390929091602081019035600160201b8111156102f257600080fd5b82018360208201111561030457600080fd5b803590602001918460208302840111600160201b8311171561032557600080fd5b919350915080359060208101359060400135610cc4565b34801561034857600080fd5b50610351610f2e565b604080516001600160a01b039092168252519081900360200190f35b610403600480360360a081101561038357600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156103c557600080fd5b8201836020820111156103d757600080fd5b803590602001918460018302840111600160201b831117156103f857600080fd5b509092509050610f3d565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561043d578181015183820152602001610425565b50505050905090810190601f16801561046a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561048457600080fd5b506102106004803603602081101561049b57600080fd5b50356001600160a01b0316611286565b3480156104b757600080fd5b50610526600480360360208110156104ce57600080fd5b810190602081018135600160201b8111156104e857600080fd5b8201836020820111156104fa57600080fd5b803590602001918460018302840111600160201b8311171561051b57600080fd5b509092509050611329565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610569578181015183820152602001610551565b50505050905090810190601f1680156105965780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b3480156105b157600080fd5b50610351600480360360208110156105c857600080fd5b50356001600160a01b03166113d6565b3480156105e457600080fd5b506103516113f1565b3480156105f957600080fd5b50610351611400565b34801561060e57600080fd5b5061021061140f565b34801561062357600080fd5b50610403600480360360a081101561063a57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561067c57600080fd5b82018360208201111561068e57600080fd5b803590602001918460018302840111600160201b831117156106af57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506114a6945050505050565b3480156106fc57600080fd5b506103516004803603602081101561071357600080fd5b50356001600160a01b031661168e565b34801561072f57600080fd5b5061074d6004803603602081101561074657600080fd5b503561169f565b604080516001600160a01b038416815260208082018381528451938301939093528351919291606084019185019080838360008315610569578181015183820152602001610551565b3480156107a257600080fd5b50610210600480360360a08110156107b957600080fd5b8135916001600160a01b03602082013581169260408301359091169190810190608081016060820135600160201b8111156107f357600080fd5b82018360208201111561080557600080fd5b803590602001918460018302840111600160201b8311171561082657600080fd5b919390929091602081019035600160201b81111561084357600080fd5b82018360208201111561085557600080fd5b803590602001918460018302840111600160201b8311171561087657600080fd5b509092509050611753565b610403600480360360c081101561089757600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156108dd57600080fd5b8201836020820111156108ef57600080fd5b803590602001918460018302840111600160201b8311171561091057600080fd5b509092509050611a2c565b61024b6004803603608081101561093157600080fd5b506001600160a01b038135169060208101359060408101359060600135611b15565b34801561095f57600080fd5b5061074d6004803603606081101561097657600080fd5b8135916001600160a01b0360208201351691810190606081016040820135600160201b8111156109a557600080fd5b8201836020820111156109b757600080fd5b803590602001918460018302840111600160201b831117156109d857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611d7c945050505050565b348015610a2557600080fd5b50610351611ed8565b348015610a3a57600080fd5b5061021060048036036080811015610a5157600080fd5b506001600160a01b038135811691602081013582169160408201358116916060013516611ee7565b348015610a8557600080fd5b50610351611f1e565b333014610ae2576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b610af4826001600160a01b0316611f2d565b610b45576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b610b50858386611f33565b6000610b5a610cbd565b5a039050805a11610b9c5760405162461bcd60e51b815260040180806020018281038252602b815260200180612d44602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c19578181015183820152602001610c01565b50505050905090810190601f168015610c465780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b158015610c6757600080fd5b5087f1158015610c7b573d6000803e3d6000fd5b5050505050505050505050565b604080516020808201949094526001600160a01b03929092168282015280518083038201815260609092019052805191012090565b6175305b90565b6005546000906001600160a01b03163314610d13576040805162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015290519081900360640190fd5b868514610d59576040805162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4c454e4754485360881b604482015290519081900360640190fd5b60005b87811015610e6257868682818110610d7057fe5b905060200201356001600160a01b0316600460008b8b85818110610d9057fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550868682818110610df057fe5b905060200201356001600160a01b03166001600160a01b0316898983818110610e1557fe5b905060200201356001600160a01b03166001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a3600101610d5c565b50606063d4f5532f60e01b898989896040516024018080602001806020018381038352878782818152602001925060200280828437600083820152601f01601f19169091018481038352858152602090810191508690860280828437600081840152601f19601f8201169050808301925050509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050610f2133600085888886611f52565b9998505050505050505050565b6000546001600160a01b031681565b600254606090600090610f58906001600160a01b0316611f82565b9050610f638161211a565b610faf576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60006060610fbd8686611329565b91509150610fcc828983611d7c565b80519199509150156111c7576000306001600160a01b031662aa3a9b8c8a8d8d876040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561108757818101518382015260200161106f565b50505050905090810190601f1680156110b45780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b1580156110d757600080fd5b505af19250505080156110e8575060015b6110fc576110f78b8b8a611f33565b611100565b5060015b886001600160a01b03168a6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838b86604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561118557818101518382015260200161116d565b50505050905090810190601f1680156111b25780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a3506111d2565b6111d28a8989611f33565b81886001600160a01b03168a6001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8d8b8b8b60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a4505060408051602081019091526000815298975050505050505050565b6006546001600160a01b031633146112d5576040805162461bcd60e51b815260206004820152600d60248201526c1393d517d19493d357d31254d5609a1b604482015290519081900360640190fd5b600680546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f37389c47920d5cc3229678a0205d0455002c07541a4139ebdce91ac2274657779181900360200190a150565b600060608383604081101561133d57600080fd5b81359190810190604081016020820135600160201b81111561135e57600080fd5b82018360208201111561137057600080fd5b803590602001918460018302840111600160201b8311171561139157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b6004602052600090815260409020546001600160a01b031681565b6005546001600160a01b031681565b6006546001600160a01b031681565b6006546001600160a01b03161561145c576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600180546001600160a01b03199081167372ce9c846789fdb6fc1f34ac4ad25dd9ef7031ef179091556006805490911673d485e5c28aa4985b23f6df13da03caa766dcd459179055565b606080604051806020016040528060008152509050632e567b3660e01b878787878588604051602001808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561150d5781810151838201526020016114f5565b50505050905090810190601f16801561153a5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561156d578181015183820152602001611555565b50505050905090810190601f16801561159a5780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808c16602484019081528b82166044850152908a1660648401526084830189905260a060a48401908152825160c48501528251929850909650945060e4909101925060208601915080838360005b8381101561161a578181015183820152602001611602565b50505050905090810190601f1680156116475780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a1699909917909852509597505050505050505095945050505050565b60006116998261212e565b92915050565b6003602090815260009182526040918290208054600180830180548651600261010094831615949094026000190190911692909204601f81018690048602830186019096528582526001600160a01b039092169492939092908301828280156117495780601f1061171e57610100808354040283529160200191611749565b820191906000526020600020905b81548152906001019060200180831161172c57829003601f168201915b5050505050905082565b600061176f888860405180602001604052806000815250611d7c565b509050336001600160a01b038216146117c5576040805162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b604482015290519081900360640190fd5b61180788888888888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061214c92505050565b811561196f5761181f866001600160a01b0316611f2d565b611862576040805162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000866001600160a01b031663592e2070838b87876040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050602060405180830381600087803b1580156118f857600080fd5b505af115801561190c573d6000803e3d6000fd5b505050506040513d602081101561192257600080fd5b505190508061196d576040805162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b604482015290519081900360640190fd5b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051808060200180602001841515151581526020018381038352888882818152602001925080828437600083820152601f01601f191690910184810383528681526020019050868680828437600083820152604051601f909101601f1916909201829003995090975050505050505050a45050505050505050565b6006546060906001600160a01b031615611afa576006546040805163babcc53960e01b815233600482015290516001600160a01b039092169163babcc53991602480820192602092909190829003018186803b158015611a8b57600080fd5b505afa158015611a9f573d6000803e3d6000fd5b505050506040513d6020811015611ab557600080fd5b5051611afa576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d5d2125511531254d51151608a1b604482015290519081900360640190fd5b611b09888888888888886121bf565b98975050505050505050565b6000611b2033611f2d565b611b64576040805162461bcd60e51b815260206004820152601060248201526f135554d517d09157d0d3d395149050d560821b604482015290519081900360640190fd5b336000908152600460205260409081902080546001600160a01b0388166001600160a01b03199091161790558051600180825281830190925260609181602001602082028036833750506040805160018082528183019092529293506060929150602080830190803683370190505090503382600081518110611be357fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508681600081518110611c1157fe5b60200260200101906001600160a01b031690816001600160a01b03168152505080600081518110611c3e57fe5b60200260200101516001600160a01b031682600081518110611c5c57fe5b60200260200101516001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a3606063d4f5532f60e01b8383604051602401808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611cec578181015183820152602001611cd4565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015611d2b578181015183820152602001611d13565b50505050905001945050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050611b09336000878a8a86611f52565b600060606000611d8c8686610c88565b9050611d96612c6d565b6000828152600360209081526040918290208251808401845281546001600160a01b03168152600180830180548651600261010094831615949094026000190190911692909204601f8101869004860283018601909652858252919492938581019391929190830182828015611e4d5780601f10611e2257610100808354040283529160200191611e4d565b820191906000526020600020905b815481529060010190602001808311611e3057829003601f168201915b5050509190925250508151919250506001600160a01b031660011415611eab576040805162461bcd60e51b815260206004820152600e60248201526d1053149150511657d1561255115160921b604482015290519081900360640190fd5b80516001600160a01b031615611ec2578051611ec4565b855b602090910151909350915050935093915050565b6001546001600160a01b031681565b611ef284848461234f565b600580546001600160a01b039092166001600160a01b0319928316179055600680549091169055505050565b6002546001600160a01b031681565b3b151590565b611f4d6001600160a01b038416838363ffffffff61235a16565b505050565b600254600080549091611f77916001600160a01b0391821691168989898989896123ac565b979650505050505050565b600080826001600160a01b031663e78cea926040518163ffffffff1660e01b815260040160206040518083038186803b158015611fbe57600080fd5b505afa158015611fd2573d6000803e3d6000fd5b505050506040513d6020811015611fe857600080fd5b50516040805163ab5d894360e01b815290516001600160a01b039092169163ab5d894391600480820192602092909190829003018186803b15801561202c57600080fd5b505afa158015612040573d6000803e3d6000fd5b505050506040513d602081101561205657600080fd5b505160408051634032458160e11b815290519192506000916001600160a01b038416916380648b02916004808301926020929190829003018186803b15801561209e57600080fd5b505afa1580156120b2573d6000803e3d6000fd5b505050506040513d60208110156120c857600080fd5b505190506001600160a01b038116612113576040805162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b604482015290519081900360640190fd5b9392505050565b6000546001600160a01b0390811691161490565b6001600160a01b039081166000908152600460205260409020541690565b60006121588585610c88565b6040805180820182526001600160a01b038681168252602080830187815260008681526003835294909420835181546001600160a01b031916931692909217825592518051949550919390926121b5926001850192910190612c85565b5050505050505050565b60606000806000606061220787878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506125ac92505050565b919550925090506122206001600160a01b038d16611f2d565b612263576040805162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b600061226e8d61212e565b905061227b8d868d612772565b61228b8d868e8e8e8e898961278d565b935050505080896001600160a01b0316836001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88d8c8a8a60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a46040805160208082019390935281518082039093018352810190529998505050505050505050565b611f4d8383836127aa565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611f4d908490612867565b600080896001600160a01b031663679b6ded348b8a8a8d8e8c8c8c6040518a63ffffffff1660e01b815260040180896001600160a01b03166001600160a01b03168152602001888152602001878152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561247357818101518382015260200161245b565b50505050905090810190601f1680156124a05780820380516001836020036101000a031916815260200191505b5099505050505050505050506020604051808303818588803b1580156124c557600080fd5b505af11580156124d9573d6000803e3d6000fd5b50505050506040513d60208110156124f057600080fd5b5051604080516020808252865182820152865193945084936001600160a01b03808f1694908e16937fc1d1490cf25c3b40d600dfb27c7680340ed1ab901b7e8f3551280968a3b372b0938a93919283929083019185019080838360005b8381101561256557818101518382015260200161254d565b50505050905090810190601f1680156125925780820380516001836020036101000a031916815260200191505b509250505060405180910390a49998505050505050505050565b60008060606125ba33612918565b15612695578380602001905160408110156125d457600080fd5b815160208301805160405192949293830192919084600160201b8211156125fa57600080fd5b90830190602082018581111561260f57600080fd5b8251600160201b81118282018810171561262857600080fd5b82525081516020918201929091019080838360005b8381101561265557818101518382015260200161263d565b50505050905090810190601f1680156126825780820380516001836020036101000a031916815260200191505b506040525092955090925061269b915050565b50339150825b8080602001905160408110156126b057600080fd5b815160208301805160405192949293830192919084600160201b8211156126d657600080fd5b9083019060208201858111156126eb57600080fd5b8251600160201b81118282018810171561270457600080fd5b82525081516020918201929091019080838360005b83811015612731578181015183820152602001612719565b50505050905090810190601f16801561275e5780820380516001836020036101000a031916815260200191505b506040525095979296509094509092505050565b611f4d6001600160a01b03841683308463ffffffff61292c16565b6000610f218860008588886127a58f8f8f8f8c6114a6565b611f52565b6127b4838361298c565b6001600160a01b0382166127fc576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b6001600160a01b038116612843576040805162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b60606128bc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661299a9092919063ffffffff16565b805190915015611f4d578080602001905160208110156128db57600080fd5b5051611f4d5760405162461bcd60e51b815260040180806020018281038252602a815260200180612d6f602a913960400191505060405180910390fd5b6001546001600160a01b0390811691161490565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052612986908590612867565b50505050565b61299682826129b1565b5050565b60606129a98484600085612a7d565b949350505050565b6001600160a01b038216612a02576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615612a4f576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b606082471015612abe5760405162461bcd60e51b8152600401808060200182810382526026815260200180612d1e6026913960400191505060405180910390fd5b612ac785611f2d565b612b18576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310612b575780518252601f199092019160209182019101612b38565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612bb9576040519150601f19603f3d011682016040523d82523d6000602084013e612bbe565b606091505b5091509150611f7782828660608315612bd8575081612113565b825115612be85782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612c32578181015183820152602001612c1a565b50505050905090810190601f168015612c5f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60408051808201909152600081526060602082015290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612cc657805160ff1916838001178555612cf3565b82800160010185558215612cf3579182015b82811115612cf3578251825591602001919060010190612cd8565b50612cff929150612d03565b5090565b610cc191905b80821115612cff5760008155600101612d0956fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220fdda92f6f74ff435f88598661737808ebb76ae13b57cce7fcbca4c90c4104f0164736f6c634300060b0033'