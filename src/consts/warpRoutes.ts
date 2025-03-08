import { WarpCoreConfig } from '@hyperlane-xyz/sdk';

export enum TokenStandard {
  // EVM
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
  EvmNative = 'EvmNative',
  EvmHypNative = 'EvmHypNative',
  EvmHypCollateral = 'EvmHypCollateral',
  EvmHypOwnerCollateral = 'EvmHypOwnerCollateral',
  EvmHypRebaseCollateral = 'EvmHypRebaseCollateral',
  EvmHypCollateralFiat = 'EvmHypCollateralFiat',
  EvmHypSynthetic = 'EvmHypSynthetic',
  EvmHypSyntheticRebase = 'EvmHypSyntheticRebase',
  EvmHypXERC20 = 'EvmHypXERC20',
  EvmHypXERC20Lockbox = 'EvmHypXERC20Lockbox',

  // Sealevel (Solana)
  SealevelSpl = 'SealevelSpl',
  SealevelSpl2022 = 'SealevelSpl2022',
  SealevelNative = 'SealevelNative',
  SealevelHypNative = 'SealevelHypNative',
  SealevelHypCollateral = 'SealevelHypCollateral',
  SealevelHypSynthetic = 'SealevelHypSynthetic',

  // Cosmos
  CosmosIcs20 = 'CosmosIcs20',
  CosmosIcs721 = 'CosmosIcs721',
  CosmosNative = 'CosmosNative',
  CosmosIbc = 'CosmosIbc',

  // CosmWasm
  CW20 = 'CW20',
  CWNative = 'CWNative',
  CW721 = 'CW721',
  CwHypNative = 'CwHypNative',
  CwHypCollateral = 'CwHypCollateral',
  CwHypSynthetic = 'CwHypSynthetic',
}
// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
 
    "tokens": [
      {
        "addressOrDenom": "0x132Dd3634dBC4Ae56ac482311d3002eeE973419b",
        "chainName": "silk",
        "connections": [
          {
            "token": "ethereum|tan|0xFa34D46BB76D50758088Abb8D81041502E58bDF3"
          }
        ],
        "decimals": 18,
        "name": "SILK",
        "standard": "EvmHypNative",
        "symbol": "SLK",
        "logoURI": "https://brixbit.mobi/static/black_logo.gif"
      },
      {
        "addressOrDenom": "0xFa34D46BB76D50758088Abb8D81041502E58bDF3",
        "chainName": "tan",
        "connections": [
          {
            "token": "ethereum|silk|0x132Dd3634dBC4Ae56ac482311d3002eeE973419b"
          }
        ],
        "decimals": 18,
        "name": "SILK",
        "standard": "EvmHypSynthetic",
        "symbol": "SLK",
        "logoURI": "https://buy.tan.live/assets/logo/logo.svg"
      },
      {
        "addressOrDenom": "0x2282351a177e5db0d723123837203726279d410B",
        "chainName": "bsctestnet",
        "connections": [
          {
            "token": "ethereum|silk|0x6795a49920ebFED18546Dc197AEeFbB95cF0caF7"
          }
        ],
        "decimals": 18,
        "name": "SILK",
        "standard": "EvmHypSynthetic",
        "symbol": "SLK"
      },
      {
        "addressOrDenom": "0x6795a49920ebFED18546Dc197AEeFbB95cF0caF7",
        "chainName": "silk",
        "connections": [
          {
            "token": "ethereum|bsctestnet|0x2282351a177e5db0d723123837203726279d410B"
          }
        ],
        "decimals": 18,
        "name": "SILK",
        "standard": "EvmHypNative",
        "symbol": "SLK"
      }
    ]
  
  
}
