[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / ImportResultSuccess

# Class: ImportResultSuccess

## Hierarchy

- [`ImportResult`](ImportResult.md)

  ↳ **`ImportResultSuccess`**

## Table of contents

### Constructors

- [constructor](ImportResultSuccess.md#constructor)

### Properties

- [digitalTwin](ImportResultSuccess.md#digitaltwin)
- [index](ImportResultSuccess.md#index)
- [propertiesResult](ImportResultSuccess.md#propertiesresult)

### Methods

- [isError](ImportResultSuccess.md#iserror)
- [isSuccess](ImportResultSuccess.md#issuccess)
- [deserialize](ImportResultSuccess.md#deserialize)

## Constructors

### constructor

• **new ImportResultSuccess**(`index`, `digitalTwin?`, `propertiesResult?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |
| `digitalTwin?` | [`DigitalTwinCore`](DigitalTwinCore.md) |
| `propertiesResult?` | [`PatchResult`](PatchResult.md)[] |

#### Overrides

[ImportResult](ImportResult.md).[constructor](ImportResult.md#constructor)

#### Defined in

[sdk/model/import_digitaltwin.ts:207](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L207)

## Properties

### digitalTwin

• `Optional` **digitalTwin**: [`DigitalTwinCore`](DigitalTwinCore.md)

#### Defined in

[sdk/model/import_digitaltwin.ts:209](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L209)

___

### index

• **index**: `string`

#### Inherited from

[ImportResult](ImportResult.md).[index](ImportResult.md#index)

#### Defined in

[sdk/model/import_digitaltwin.ts:175](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L175)

___

### propertiesResult

• `Optional` **propertiesResult**: [`PatchResult`](PatchResult.md)[]

#### Defined in

[sdk/model/import_digitaltwin.ts:210](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L210)

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
