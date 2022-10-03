[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / IngestResult

# Class: IngestResult

## Hierarchy

- **`IngestResult`**

  ↳ [`IngestResultSuccess`](IngestResultSuccess.md)

  ↳ [`IngestResultError`](IngestResultError.md)

## Table of contents

### Constructors

- [constructor](IngestResult.md#constructor)

### Properties

- [id](IngestResult.md#id)
- [index](IngestResult.md#index)

### Methods

- [isError](IngestResult.md#iserror)
- [isSuccess](IngestResult.md#issuccess)
- [deserialize](IngestResult.md#deserialize)

## Constructors

### constructor

• **new IngestResult**(`id`, `index`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `index` | `number` |

#### Defined in

[sdk/model/ingest/ingest_response.ts:32](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L32)

## Properties

### id

• **id**: `string`

#### Defined in

[sdk/model/ingest/ingest_response.ts:32](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L32)

___

### index

• **index**: `number`

#### Defined in

[sdk/model/ingest/ingest_response.ts:32](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L32)

## Methods

### isError

▸ **isError**(): this is IngestResultError

#### Returns

this is IngestResultError

#### Defined in

[sdk/model/ingest/ingest_response.ts:38](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L38)

___

### isSuccess

▸ **isSuccess**(): this is IngestResultSuccess

#### Returns

this is IngestResultSuccess

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

#### Defined in

[sdk/model/ingest/ingest_response.ts:42](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L42)
