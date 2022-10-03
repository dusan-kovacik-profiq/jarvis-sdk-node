[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / PropertyMetaData

# Class: PropertyMetaData

## Table of contents

### Constructors

- [constructor](PropertyMetaData.md#constructor)

### Properties

- [assuranceLevel](PropertyMetaData.md#assurancelevel)
- [issuer](PropertyMetaData.md#issuer)
- [primary](PropertyMetaData.md#primary)
- [verificationTime](PropertyMetaData.md#verificationtime)
- [verifier](PropertyMetaData.md#verifier)

### Methods

- [marshal](PropertyMetaData.md#marshal)
- [deserialize](PropertyMetaData.md#deserialize)

## Constructors

### constructor

• **new PropertyMetaData**()

## Properties

### assuranceLevel

• `Optional` **assuranceLevel**: `number` = `1`

#### Defined in

[sdk/model/property.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L10)

___

### issuer

• `Optional` **issuer**: `string`

#### Defined in

[sdk/model/property.ts:11](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L11)

___

### primary

• **primary**: `boolean` = `false`

#### Defined in

[sdk/model/property.ts:9](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L9)

___

### verificationTime

• `Optional` **verificationTime**: `Date`

#### Defined in

[sdk/model/property.ts:13](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L13)

___

### verifier

• `Optional` **verifier**: `string`

#### Defined in

[sdk/model/property.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L12)

## Methods

### marshal

▸ **marshal**(): `PropertyMetadata`

#### Returns

`PropertyMetadata`

#### Defined in

[sdk/model/property.ts:25](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L25)

___

### deserialize

▸ `Static` **deserialize**(`meta`): [`PropertyMetaData`](PropertyMetaData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | `PropertyMetadata` |

#### Returns

[`PropertyMetaData`](PropertyMetaData.md)

#### Defined in

[sdk/model/property.ts:15](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L15)
