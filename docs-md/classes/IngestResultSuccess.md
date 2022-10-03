[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / IngestResultSuccess

# Class: IngestResultSuccess

## Hierarchy

- [`IngestResult`](IngestResult.md)

  ↳ **`IngestResultSuccess`**

## Table of contents

### Constructors

- [constructor](IngestResultSuccess.md#constructor)

### Properties

- [id](IngestResultSuccess.md#id)
- [index](IngestResultSuccess.md#index)

### Methods

- [isError](IngestResultSuccess.md#iserror)
- [isSuccess](IngestResultSuccess.md#issuccess)
- [deserialize](IngestResultSuccess.md#deserialize)

## Constructors

### constructor

• **new IngestResultSuccess**(`id`, `index`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `index` | `number` |

#### Inherited from

[IngestResult](IngestResult.md).[constructor](IngestResult.md#constructor)

#### Defined in

[sdk/model/ingest/ingest_response.ts:32](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L32)

## Properties

### id

• **id**: `string`

#### Inherited from

[IngestResult](IngestResult.md).[id](IngestResult.md#id)

#### Defined in

[sdk/model/ingest/ingest_response.ts:32](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L32)

___

### index

• **index**: `number`

#### Inherited from

[IngestResult](IngestResult.md).[index](IngestResult.md#index)

#### Defined in

[sdk/model/ingest/ingest_response.ts:32](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L32)

## Methods

### isError

▸ **isError**(): this is IngestResultError

#### Returns

this is IngestResultError

#### Inherited from

[IngestResult](IngestResult.md).[isError](IngestResult.md#iserror)

#### Defined in

[sdk/model/ingest/ingest_response.ts:38](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L38)

___

### isSuccess

▸ **isSuccess**(): this is IngestResultSuccess

#### Returns

this is IngestResultSuccess

#### Inherited from

[IngestResult](IngestResult.md).[isSuccess](IngestResult.md#issuccess)

#### Defined in

[sdk/model/ingest/ingest_response.ts:34](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L34)

___

### deserialize

▸ `Static` **deserialize**(`result`): [`IngestResult`](IngestResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `StreamRecordsResponse` |

#### Returns

[`IngestResult`](IngestResult.md)

#### Inherited from

[IngestResult](IngestResult.md).[deserialize](IngestResult.md#deserialize)

#### Defined in

[sdk/model/ingest/ingest_response.ts:42](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L42)
