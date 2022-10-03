[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / ApplicationSpace

# Class: ApplicationSpace

## Table of contents

### Constructors

- [constructor](ApplicationSpace.md#constructor)

### Properties

- [createTime](ApplicationSpace.md#createtime)
- [customerId](ApplicationSpace.md#customerid)
- [deleteTime](ApplicationSpace.md#deletetime)
- [description](ApplicationSpace.md#description)
- [destroyTime](ApplicationSpace.md#destroytime)
- [displayName](ApplicationSpace.md#displayname)
- [etag](ApplicationSpace.md#etag)
- [id](ApplicationSpace.md#id)
- [issuerId](ApplicationSpace.md#issuerid)
- [name](ApplicationSpace.md#name)
- [updateTime](ApplicationSpace.md#updatetime)

### Methods

- [deserialize](ApplicationSpace.md#deserialize)

## Constructors

### constructor

• **new ApplicationSpace**(`id`, `name`, `customerId`, `etag?`, `displayName?`, `issuerId?`, `description?`, `createTime?`, `updateTime?`, `deleteTime?`, `destroyTime?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |
| `customerId` | `string` |
| `etag?` | `string` |
| `displayName?` | `string` |
| `issuerId?` | `string` |
| `description?` | `string` |
| `createTime?` | `Date` |
| `updateTime?` | `Date` |
| `deleteTime?` | `Date` |
| `destroyTime?` | `Date` |

#### Defined in

[sdk/model/config/application_space.ts:9](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L9)

## Properties

### createTime

• `Optional` **createTime**: `Date`

#### Defined in

[sdk/model/config/application_space.ts:17](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L17)

___

### customerId

• **customerId**: `string`

#### Defined in

[sdk/model/config/application_space.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L12)

___

### deleteTime

• `Optional` **deleteTime**: `Date`

#### Defined in

[sdk/model/config/application_space.ts:19](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L19)

___

### description

• `Optional` **description**: `string`

#### Defined in

[sdk/model/config/application_space.ts:16](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L16)

___

### destroyTime

• `Optional` **destroyTime**: `Date`

#### Defined in

[sdk/model/config/application_space.ts:20](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L20)

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

[sdk/model/config/application_space.ts:14](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L14)

___

### etag

• `Optional` **etag**: `string`

#### Defined in

[sdk/model/config/application_space.ts:13](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L13)

___

### id

• **id**: `string`

#### Defined in

[sdk/model/config/application_space.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L10)

___

### issuerId

• `Optional` **issuerId**: `string`

#### Defined in

[sdk/model/config/application_space.ts:15](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L15)

___

### name

• **name**: `string`

#### Defined in

[sdk/model/config/application_space.ts:11](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L11)

___

### updateTime

• `Optional` **updateTime**: `Date`

#### Defined in

[sdk/model/config/application_space.ts:18](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L18)

## Methods

### deserialize

▸ `Static` **deserialize**(`response`, `customerId`, `name`, `displayName?`, `description?`): [`ApplicationSpace`](ApplicationSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `CreateApplicationSpaceResponse` |
| `customerId` | `string` |
| `name` | `string` |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

[`ApplicationSpace`](ApplicationSpace.md)

#### Defined in

[sdk/model/config/application_space.ts:23](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L23)

▸ `Static` **deserialize**(`response`): [`ApplicationSpace`](ApplicationSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `ReadApplicationSpaceResponse` |

#### Returns

[`ApplicationSpace`](ApplicationSpace.md)

#### Defined in

[sdk/model/config/application_space.ts:30](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_space.ts#L30)
