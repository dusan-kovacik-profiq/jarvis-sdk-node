[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / PatchResult

# Class: PatchResult

## Table of contents

### Constructors

- [constructor](PatchResult.md#constructor)

### Properties

- [index](PatchResult.md#index)
- [message](PatchResult.md#message)
- [propertyId](PatchResult.md#propertyid)
- [status](PatchResult.md#status)

### Methods

- [deserialize](PatchResult.md#deserialize)

## Constructors

### constructor

• **new PatchResult**(`index`, `status`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |
| `status` | [`PatchResultStatus`](../modules.md#patchresultstatus) |

#### Defined in

[sdk/model/property.ts:276](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L276)

## Properties

### index

• **index**: `string`

#### Defined in

[sdk/model/property.ts:276](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L276)

___

### message

• `Optional` **message**: `string`[]

#### Defined in

[sdk/model/property.ts:274](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L274)

___

### propertyId

• `Optional` **propertyId**: `string`

#### Defined in

[sdk/model/property.ts:273](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L273)

___

### status

• **status**: [`PatchResultStatus`](../modules.md#patchresultstatus)

#### Defined in

[sdk/model/property.ts:276](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L276)

## Methods

### deserialize

▸ `Static` **deserialize**(`result`): [`PatchResult`](PatchResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `BatchOperationResult` |

#### Returns

[`PatchResult`](PatchResult.md)

#### Defined in

[sdk/model/property.ts:277](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L277)
