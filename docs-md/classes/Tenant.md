[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / Tenant

# Class: Tenant

## Table of contents

### Constructors

- [constructor](Tenant.md#constructor)

### Properties

- [appSpaceId](Tenant.md#appspaceid)
- [createTime](Tenant.md#createtime)
- [customerId](Tenant.md#customerid)
- [deleteTime](Tenant.md#deletetime)
- [description](Tenant.md#description)
- [destroyTime](Tenant.md#destroytime)
- [displayName](Tenant.md#displayname)
- [etag](Tenant.md#etag)
- [id](Tenant.md#id)
- [issuerId](Tenant.md#issuerid)
- [name](Tenant.md#name)
- [updateTime](Tenant.md#updatetime)

### Methods

- [deserialize](Tenant.md#deserialize)

## Constructors

### constructor

• **new Tenant**(`id`, `name`, `customerId?`, `appSpaceId?`, `displayName?`, `issuerId?`, `etag?`, `description?`, `createTime?`, `updateTime?`, `deleteTime?`, `destroyTime?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |
| `customerId?` | `string` |
| `appSpaceId?` | `string` |
| `displayName?` | `string` |
| `issuerId?` | `string` |
| `etag?` | `string` |
| `description?` | `string` |
| `createTime?` | `Date` |
| `updateTime?` | `Date` |
| `deleteTime?` | `Date` |
| `destroyTime?` | `Date` |

#### Defined in

[sdk/model/config/tenant.ts:9](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L9)

## Properties

### appSpaceId

• `Optional` **appSpaceId**: `string`

#### Defined in

[sdk/model/config/tenant.ts:13](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L13)

___

### createTime

• `Optional` **createTime**: `Date`

#### Defined in

[sdk/model/config/tenant.ts:18](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L18)

___

### customerId

• `Optional` **customerId**: `string`

#### Defined in

[sdk/model/config/tenant.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L12)

___

### deleteTime

• `Optional` **deleteTime**: `Date`

#### Defined in

[sdk/model/config/tenant.ts:20](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L20)

___

### description

• `Optional` **description**: `string`

#### Defined in

[sdk/model/config/tenant.ts:17](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L17)

___

### destroyTime

• `Optional` **destroyTime**: `Date`

#### Defined in

[sdk/model/config/tenant.ts:21](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L21)

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

[sdk/model/config/tenant.ts:14](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L14)

___

### etag

• `Optional` **etag**: `string`

#### Defined in

[sdk/model/config/tenant.ts:16](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L16)

___

### id

• **id**: `string`

#### Defined in

[sdk/model/config/tenant.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L10)

___

### issuerId

• `Optional` **issuerId**: `string`

#### Defined in

[sdk/model/config/tenant.ts:15](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L15)

___

### name

• **name**: `string`

#### Defined in

[sdk/model/config/tenant.ts:11](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L11)

___

### updateTime

• `Optional` **updateTime**: `Date`

#### Defined in

[sdk/model/config/tenant.ts:19](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L19)

## Methods

### deserialize

▸ `Static` **deserialize**(`response`, `issuerId`, `name`, `displayName?`, `description?`): [`Tenant`](Tenant.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `CreateTenantResponse` |
| `issuerId` | `string` |
| `name` | `string` |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

[`Tenant`](Tenant.md)

#### Defined in

[sdk/model/config/tenant.ts:24](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L24)

▸ `Static` **deserialize**(`response`): [`Tenant`](Tenant.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `ReadTenantResponse` |

#### Returns

[`Tenant`](Tenant.md)

#### Defined in

[sdk/model/config/tenant.ts:31](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/tenant.ts#L31)
