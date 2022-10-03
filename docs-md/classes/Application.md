[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / Application

# Class: Application

## Table of contents

### Constructors

- [constructor](Application.md#constructor)

### Properties

- [appSpaceId](Application.md#appspaceid)
- [createTime](Application.md#createtime)
- [customerId](Application.md#customerid)
- [deleteTime](Application.md#deletetime)
- [description](Application.md#description)
- [destroyTime](Application.md#destroytime)
- [displayName](Application.md#displayname)
- [etag](Application.md#etag)
- [id](Application.md#id)
- [name](Application.md#name)
- [updateTime](Application.md#updatetime)

### Methods

- [deserialize](Application.md#deserialize)

## Constructors

### constructor

• **new Application**(`id`, `name`, `appSpaceId`, `customerId?`, `displayName?`, `etag?`, `description?`, `createTime?`, `updateTime?`, `deleteTime?`, `destroyTime?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |
| `appSpaceId` | `string` |
| `customerId?` | `string` |
| `displayName?` | `string` |
| `etag?` | `string` |
| `description?` | `string` |
| `createTime?` | `Date` |
| `updateTime?` | `Date` |
| `deleteTime?` | `Date` |
| `destroyTime?` | `Date` |

#### Defined in

[sdk/model/config/application.ts:9](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L9)

## Properties

### appSpaceId

• **appSpaceId**: `string`

#### Defined in

[sdk/model/config/application.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L12)

___

### createTime

• `Optional` **createTime**: `Date`

#### Defined in

[sdk/model/config/application.ts:17](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L17)

___

### customerId

• `Optional` **customerId**: `string`

#### Defined in

[sdk/model/config/application.ts:13](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L13)

___

### deleteTime

• `Optional` **deleteTime**: `Date`

#### Defined in

[sdk/model/config/application.ts:19](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L19)

___

### description

• `Optional` **description**: `string`

#### Defined in

[sdk/model/config/application.ts:16](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L16)

___

### destroyTime

• `Optional` **destroyTime**: `Date`

#### Defined in

[sdk/model/config/application.ts:20](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L20)

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

[sdk/model/config/application.ts:14](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L14)

___

### etag

• `Optional` **etag**: `string`

#### Defined in

[sdk/model/config/application.ts:15](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L15)

___

### id

• **id**: `string`

#### Defined in

[sdk/model/config/application.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L10)

___

### name

• **name**: `string`

#### Defined in

[sdk/model/config/application.ts:11](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L11)

___

### updateTime

• `Optional` **updateTime**: `Date`

#### Defined in

[sdk/model/config/application.ts:18](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L18)

## Methods

### deserialize

▸ `Static` **deserialize**(`response`, `appSpaceId`, `name`, `displayName?`, `description?`): [`Application`](Application.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `CreateApplicationResponse` |
| `appSpaceId` | `string` |
| `name` | `string` |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

[`Application`](Application.md)

#### Defined in

[sdk/model/config/application.ts:23](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L23)

▸ `Static` **deserialize**(`response`): [`Application`](Application.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `ReadApplicationResponse` |

#### Returns

[`Application`](Application.md)

#### Defined in

[sdk/model/config/application.ts:30](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application.ts#L30)
