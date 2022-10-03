[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / ImportResult

# Class: ImportResult

## Hierarchy

- **`ImportResult`**

  ↳ [`ImportResultSuccess`](ImportResultSuccess.md)

  ↳ [`ImportResultError`](ImportResultError.md)

## Table of contents

### Constructors

- [constructor](ImportResult.md#constructor)

### Properties

- [index](ImportResult.md#index)

### Methods

- [isError](ImportResult.md#iserror)
- [isSuccess](ImportResult.md#issuccess)
- [deserialize](ImportResult.md#deserialize)

## Constructors

### constructor

• **new ImportResult**(`index`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Defined in

[sdk/model/import_digitaltwin.ts:175](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L175)

## Properties

### index

• **index**: `string`

#### Defined in

[sdk/model/import_digitaltwin.ts:175](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L175)

## Methods

### isError

▸ **isError**(): this is ImportResultError

#### Returns

this is ImportResultError

#### Defined in

[sdk/model/import_digitaltwin.ts:181](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L181)

___

### isSuccess

▸ **isSuccess**(): this is ImportResultSuccess

#### Returns

this is ImportResultSuccess

#### Defined in

[sdk/model/import_digitaltwin.ts:177](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L177)

___

### deserialize

▸ `Static` **deserialize**(`result`): ``null`` \| [`ImportResult`](ImportResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `ImportDigitalTwinResult` |

#### Returns

``null`` \| [`ImportResult`](ImportResult.md)

#### Defined in

[sdk/model/import_digitaltwin.ts:185](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L185)
