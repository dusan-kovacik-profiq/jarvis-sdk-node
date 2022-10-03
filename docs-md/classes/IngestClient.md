[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / IngestClient

# Class: IngestClient

## Table of contents

### Constructors

- [constructor](IngestClient.md#constructor)

### Properties

- [client](IngestClient.md#client)

### Methods

- [createRequest](IngestClient.md#createrequest)
- [getRecordId](IngestClient.md#getrecordid)
- [ingest](IngestClient.md#ingest)
- [ingestStreamedObjects](IngestClient.md#ingeststreamedobjects)
- [createInstance](IngestClient.md#createinstance)

## Constructors

### constructor

• **new IngestClient**(`sdk`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sdk` | `SdkClient` |

#### Defined in

[sdk/ingest.ts:18](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/ingest.ts#L18)

## Properties

### client

• `Private` **client**: `IngestAPIClient`

#### Defined in

[sdk/ingest.ts:17](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/ingest.ts#L17)

## Methods

### createRequest

▸ `Private` **createRequest**(`obj`, `mappingId`, `externalId`, `recordId?`): `StreamRecordsRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |
| `mappingId` | `string` |
| `externalId` | `string` |
| `recordId?` | `string` |

#### Returns

`StreamRecordsRequest`

#### Defined in

[sdk/ingest.ts:78](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/ingest.ts#L78)

___

### getRecordId

▸ `Private` **getRecordId**(`obj`, `externalId`, `recordId?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |
| `externalId` | `string` |
| `recordId?` | `string` |

#### Returns

`string`

#### Defined in

[sdk/ingest.ts:98](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/ingest.ts#L98)

___

### ingest

▸ **ingest**(`mappingId`, `externalId`, `objects`, `recordId?`): `Promise`<[`IngestResults`](IngestResults.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mappingId` | `string` |
| `externalId` | `string` |
| `objects` | `Readable` \| `Record`<`string`, `unknown`\>[] |
| `recordId?` | `string` |

#### Returns

`Promise`<[`IngestResults`](IngestResults.md)\>

#### Defined in

[sdk/ingest.ts:33](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/ingest.ts#L33)

___

### ingestStreamedObjects

▸ `Private` **ingestStreamedObjects**(`mappingId`, `externalId`, `objectsStream`, `recordId?`): `Promise`<[`IngestResults`](IngestResults.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mappingId` | `string` |
| `externalId` | `string` |
| `objectsStream` | `Readable` |
| `recordId?` | `string` |

#### Returns

`Promise`<[`IngestResults`](IngestResults.md)\>

#### Defined in

[sdk/ingest.ts:47](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/ingest.ts#L47)

___

### createInstance

▸ `Static` **createInstance**(`appCredential?`): `Promise`<[`IngestClient`](IngestClient.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appCredential?` | `unknown` |

#### Returns

`Promise`<[`IngestClient`](IngestClient.md)\>

#### Defined in

[sdk/ingest.ts:21](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/ingest.ts#L21)
