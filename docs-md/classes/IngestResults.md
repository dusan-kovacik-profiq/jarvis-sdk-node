[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / IngestResults

# Class: IngestResults

**`Since`**

0.1.2

## Table of contents

### Constructors

- [constructor](IngestResults.md#constructor)

### Properties

- [errorResults](IngestResults.md#errorresults)
- [hasError](IngestResults.md#haserror)
- [results](IngestResults.md#results)

### Methods

- [addResult](IngestResults.md#addresult)
- [deserializeAndAdd](IngestResults.md#deserializeandadd)

## Constructors

### constructor

• **new IngestResults**()

## Properties

### errorResults

• **errorResults**: [`IngestResultError`](IngestResultError.md)[] = `[]`

#### Defined in

[sdk/model/ingest/ingest_response.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L10)

___

### hasError

• **hasError**: `boolean` = `false`

#### Defined in

[sdk/model/ingest/ingest_response.ts:11](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L11)

___

### results

• **results**: [`IngestResult`](IngestResult.md)[] = `[]`

#### Defined in

[sdk/model/ingest/ingest_response.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L12)

## Methods

### addResult

▸ **addResult**(`result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`IngestResult`](IngestResult.md) |

#### Returns

`void`

#### Defined in

[sdk/model/ingest/ingest_response.ts:14](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L14)

___

### deserializeAndAdd

▸ **deserializeAndAdd**(`result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `StreamRecordsResponse` |

#### Returns

`void`

#### Defined in

[sdk/model/ingest/ingest_response.ts:22](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/ingest/ingest_response.ts#L22)
