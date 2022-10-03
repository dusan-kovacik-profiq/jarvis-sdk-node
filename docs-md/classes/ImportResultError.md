[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / ImportResultError

# Class: ImportResultError

## Hierarchy

- [`ImportResult`](ImportResult.md)

  ↳ **`ImportResultError`**

## Table of contents

### Constructors

- [constructor](ImportResultError.md#constructor)

### Properties

- [index](ImportResultError.md#index)
- [message](ImportResultError.md#message)

### Methods

- [isError](ImportResultError.md#iserror)
- [isSuccess](ImportResultError.md#issuccess)
- [deserialize](ImportResultError.md#deserialize)

## Constructors

### constructor

• **new ImportResultError**(`index`, `message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |
| `message` | `string`[] |

#### Overrides

[ImportResult](ImportResult.md).[constructor](ImportResult.md#constructor)

#### Defined in

[sdk/model/import_digitaltwin.ts:217](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L217)

## Properties

### index

• **index**: `string`

#### Inherited from

[ImportResult](ImportResult.md).[index](ImportResult.md#index)

#### Defined in

[sdk/model/import_digitaltwin.ts:175](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L175)

___

### message

• **message**: `string`[]

#### Defined in

[sdk/model/import_digitaltwin.ts:217](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L217)

## Methods

### isError

▸ **isError**(): this is ImportResultError

#### Returns

this is ImportResultError

#### Inherited from

[ImportResult](ImportResult.md).[isError](ImportResult.md#iserror)

#### Defined in

[sdk/model/import_digitaltwin.ts:181](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L181)

___

### isSuccess

▸ **isSuccess**(): this is ImportResultSuccess

#### Returns

this is ImportResultSuccess

#### Inherited from

[ImportResult](ImportResult.md).[isSuccess](ImportResult.md#issuccess)

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

#### Inherited from

[ImportResult](ImportResult.md).[deserialize](ImportResult.md#deserialize)

#### Defined in

[sdk/model/import_digitaltwin.ts:185](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L185)
