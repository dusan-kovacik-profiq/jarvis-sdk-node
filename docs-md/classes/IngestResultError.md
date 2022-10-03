[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / IngestResultError

# Class: IngestResultError

## Hierarchy

- [`IngestResult`](IngestResult.md)

  ↳ **`IngestResultError`**

## Table of contents

### Constructors

- [constructor](IngestResultError.md#constructor)

### Properties

- [errorCode](IngestResultError.md#errorcode)
- [errorDetails](IngestResultError.md#errordetails)
- [errorMessage](IngestResultError.md#errormessage)
- [id](IngestResultError.md#id)
- [index](IngestResultError.md#index)
- [propertyErrors](IngestResultError.md#propertyerrors)

### Methods

- [isError](IngestResultError.md#iserror)
- [isSuccess](IngestResultError.md#issuccess)
- [deserialize](IngestResultError.md#deserialize)

## Constructors

### constructor

• **new IngestResultError**(`id`, `index`, `recordError?`, `statusError?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `index` | `number` |
| `recordError` | `RecordError` |
| `statusError?` | `Status` |

#### Overrides

[IngestResult](IngestResult.md).[constructor](IngestResult.md#constructor)

#### Defined in

[sdk/model/ingest/ingest_response.ts:61](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L61)

## Properties

### errorCode

• `Optional` **errorCode**: `number`

#### Defined in

[sdk/model/ingest/ingest_response.ts:57](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L57)

___

### errorDetails

• `Optional` **errorDetails**: `unknown`

#### Defined in

[sdk/model/ingest/ingest_response.ts:59](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L59)

___

### errorMessage

• `Optional` **errorMessage**: `string`

#### Defined in

[sdk/model/ingest/ingest_response.ts:58](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L58)

___

### id

• **id**: `string`

#### Inherited from

[IngestResult](IngestResult.md).[id](IngestResult.md#id)

#### Defined in

[sdk/model/ingest/ingest_response.ts:62](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L62)

___

### index

• **index**: `number`

#### Inherited from

[IngestResult](IngestResult.md).[index](IngestResult.md#index)

#### Defined in

[sdk/model/ingest/ingest_response.ts:63](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L63)

___

### propertyErrors

• **propertyErrors**: `Record`<`string`, `string`[]\>

#### Defined in

[sdk/model/ingest/ingest_response.ts:56](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L56)

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

▸ `Static` **deserialize**(`result`): [`IngestResultError`](IngestResultError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `StreamRecordsResponse` |

#### Returns

[`IngestResultError`](IngestResultError.md)

#### Overrides

[IngestResult](IngestResult.md).[deserialize](IngestResult.md#deserialize)

#### Defined in

[sdk/model/ingest/ingest_response.ts:84](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L84)
