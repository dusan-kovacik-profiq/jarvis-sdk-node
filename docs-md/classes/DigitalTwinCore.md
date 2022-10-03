[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / DigitalTwinCore

# Class: DigitalTwinCore

## Hierarchy

- **`DigitalTwinCore`**

  ↳ [`DigitalTwin`](DigitalTwin.md)

## Table of contents

### Constructors

- [constructor](DigitalTwinCore.md#constructor)

### Properties

- [id](DigitalTwinCore.md#id)
- [kind](DigitalTwinCore.md#kind)
- [state](DigitalTwinCore.md#state)
- [tenantId](DigitalTwinCore.md#tenantid)

### Methods

- [marshal](DigitalTwinCore.md#marshal)
- [fromModel](DigitalTwinCore.md#frommodel)

## Constructors

### constructor

• **new DigitalTwinCore**(`id`, `tenantId`, `kind`, `state`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `tenantId` | `string` |
| `kind` | `number` |
| `state` | `number` |

#### Defined in

[sdk/model/digitaltwin.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L10)

## Properties

### id

• **id**: `string`

#### Defined in

[sdk/model/digitaltwin.ts:11](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L11)

___

### kind

• **kind**: `number`

#### Defined in

[sdk/model/digitaltwin.ts:13](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L13)

___

### state

• **state**: `number`

#### Defined in

[sdk/model/digitaltwin.ts:14](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L14)

___

### tenantId

• **tenantId**: `string`

#### Defined in

[sdk/model/digitaltwin.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L12)

## Methods

### marshal

▸ **marshal**(): `DigitalTwin`

#### Returns

`DigitalTwin`

#### Defined in

[sdk/model/digitaltwin.ts:26](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L26)

___

### fromModel

▸ `Static` **fromModel**(`model`): [`DigitalTwinCore`](DigitalTwinCore.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `DigitalTwin` |

#### Returns

[`DigitalTwinCore`](DigitalTwinCore.md)

#### Defined in

[sdk/model/digitaltwin.ts:17](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L17)
