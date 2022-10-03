[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / ProviderInfo

# Class: ProviderInfo

## Table of contents

### Constructors

- [constructor](ProviderInfo.md#constructor)

### Properties

- [issuer](ProviderInfo.md#issuer)
- [type](ProviderInfo.md#type)

### Methods

- [deserialize](ProviderInfo.md#deserialize)
- [deserializeProviderType](ProviderInfo.md#deserializeprovidertype)

## Constructors

### constructor

• **new ProviderInfo**(`type`, `issuer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ProviderType`](../modules.md#providertype) |
| `issuer` | `string` |

#### Defined in

[sdk/model/token.ts:16](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L16)

## Properties

### issuer

• **issuer**: `string`

#### Defined in

[sdk/model/token.ts:16](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L16)

___

### type

• **type**: [`ProviderType`](../modules.md#providertype)

#### Defined in

[sdk/model/token.ts:16](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L16)

## Methods

### deserialize

▸ `Static` **deserialize**(`message`): [`ProviderInfo`](ProviderInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `ProviderInfo` |

#### Returns

[`ProviderInfo`](ProviderInfo.md)

#### Defined in

[sdk/model/token.ts:35](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L35)

___

### deserializeProviderType

▸ `Static` `Private` **deserializeProviderType**(`type`): [`ProviderType`](../modules.md#providertype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `ProviderType` |

#### Returns

[`ProviderType`](../modules.md#providertype)

#### Defined in

[sdk/model/token.ts:18](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L18)
