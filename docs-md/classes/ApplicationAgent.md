[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / ApplicationAgent

# Class: ApplicationAgent

## Table of contents

### Constructors

- [constructor](ApplicationAgent.md#constructor)

### Properties

- [appSpaceId](ApplicationAgent.md#appspaceid)
- [applicationId](ApplicationAgent.md#applicationid)
- [createTime](ApplicationAgent.md#createtime)
- [customerId](ApplicationAgent.md#customerid)
- [deleteTime](ApplicationAgent.md#deletetime)
- [description](ApplicationAgent.md#description)
- [destroyTime](ApplicationAgent.md#destroytime)
- [displayName](ApplicationAgent.md#displayname)
- [etag](ApplicationAgent.md#etag)
- [id](ApplicationAgent.md#id)
- [name](ApplicationAgent.md#name)
- [updateTime](ApplicationAgent.md#updatetime)

### Methods

- [deserialize](ApplicationAgent.md#deserialize)

## Constructors

### constructor

• **new ApplicationAgent**(`id`, `name`, `applicationId`, `appSpaceId?`, `displayName?`, `customerId?`, `etag?`, `description?`, `createTime?`, `updateTime?`, `deleteTime?`, `destroyTime?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |
| `applicationId` | `string` |
| `appSpaceId?` | `string` |
| `displayName?` | `string` |
| `customerId?` | `string` |
| `etag?` | `string` |
| `description?` | `string` |
| `createTime?` | `Date` |
| `updateTime?` | `Date` |
| `deleteTime?` | `Date` |
| `destroyTime?` | `Date` |

#### Defined in

[sdk/model/config/application_agent.ts:9](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L9)

## Properties

### appSpaceId

• `Optional` **appSpaceId**: `string`

#### Defined in

[sdk/model/config/application_agent.ts:13](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L13)

___

### applicationId

• **applicationId**: `string`

#### Defined in

[sdk/model/config/application_agent.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L12)

___

### createTime

• `Optional` **createTime**: `Date`

#### Defined in

[sdk/model/config/application_agent.ts:18](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L18)

___

### customerId

• `Optional` **customerId**: `string`

#### Defined in

[sdk/model/config/application_agent.ts:15](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L15)

___

### deleteTime

• `Optional` **deleteTime**: `Date`

#### Defined in

[sdk/model/config/application_agent.ts:20](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L20)

___

### description

• `Optional` **description**: `string`

#### Defined in

[sdk/model/config/application_agent.ts:17](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L17)

___

### destroyTime

• `Optional` **destroyTime**: `Date`

#### Defined in

[sdk/model/config/application_agent.ts:21](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L21)

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

[sdk/model/config/application_agent.ts:14](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L14)

___

### etag

• `Optional` **etag**: `string`

#### Defined in

[sdk/model/config/application_agent.ts:16](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L16)

___

### id

• **id**: `string`

#### Defined in

[sdk/model/config/application_agent.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L10)

___

### name

• **name**: `string`

#### Defined in

[sdk/model/config/application_agent.ts:11](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L11)

___

### updateTime

• `Optional` **updateTime**: `Date`

#### Defined in

[sdk/model/config/application_agent.ts:19](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L19)

## Methods

### deserialize

▸ `Static` **deserialize**(`response`, `applicationId`, `name`, `displayName?`, `description?`): [`ApplicationAgent`](ApplicationAgent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `CreateApplicationAgentResponse` |
| `applicationId` | `string` |
| `name` | `string` |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

[`ApplicationAgent`](ApplicationAgent.md)

#### Defined in

[sdk/model/config/application_agent.ts:24](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L24)

▸ `Static` **deserialize**(`response`): [`ApplicationAgent`](ApplicationAgent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `ReadApplicationAgentResponse` |

#### Returns

[`ApplicationAgent`](ApplicationAgent.md)

#### Defined in

[sdk/model/config/application_agent.ts:31](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent.ts#L31)
