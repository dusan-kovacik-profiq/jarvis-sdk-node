[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / Customer

# Class: Customer

## Table of contents

### Constructors

- [constructor](Customer.md#constructor)

### Properties

- [createTime](Customer.md#createtime)
- [deleteTime](Customer.md#deletetime)
- [description](Customer.md#description)
- [destroyTime](Customer.md#destroytime)
- [displayName](Customer.md#displayname)
- [etag](Customer.md#etag)
- [id](Customer.md#id)
- [name](Customer.md#name)
- [updateTime](Customer.md#updatetime)

### Methods

- [deserialize](Customer.md#deserialize)

## Constructors

### constructor

• **new Customer**(`id`, `name`, `displayName`, `etag`, `description?`, `createTime?`, `updateTime?`, `deleteTime?`, `destroyTime?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |
| `displayName` | `string` |
| `etag` | `string` |
| `description?` | `string` |
| `createTime?` | `Date` |
| `updateTime?` | `Date` |
| `deleteTime?` | `Date` |
| `destroyTime?` | `Date` |

#### Defined in

[sdk/model/config/customer.ts:6](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/customer.ts#L6)

## Properties

### createTime

• `Optional` **createTime**: `Date`

#### Defined in

[sdk/model/config/customer.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/customer.ts#L12)

___

### deleteTime

• `Optional` **deleteTime**: `Date`

#### Defined in

[sdk/model/config/customer.ts:14](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/customer.ts#L14)

___

### description

• `Optional` **description**: `string`

#### Defined in

[sdk/model/config/customer.ts:11](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/customer.ts#L11)

___

### destroyTime

• `Optional` **destroyTime**: `Date`

#### Defined in

[sdk/model/config/customer.ts:15](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/customer.ts#L15)

___

### displayName

• **displayName**: `string`

#### Defined in

[sdk/model/config/customer.ts:9](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/customer.ts#L9)

___

### etag

• **etag**: `string`

#### Defined in

[sdk/model/config/customer.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/customer.ts#L10)

___

### id

• **id**: `string`

#### Defined in

[sdk/model/config/customer.ts:7](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/customer.ts#L7)

___

### name

• **name**: `string`

#### Defined in

[sdk/model/config/customer.ts:8](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/customer.ts#L8)

___

### updateTime

• `Optional` **updateTime**: `Date`

#### Defined in

[sdk/model/config/customer.ts:13](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/customer.ts#L13)

## Methods

### deserialize

▸ `Static` **deserialize**(`response`): [`Customer`](Customer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `ReadCustomerResponse` |

#### Returns

[`Customer`](Customer.md)

#### Defined in

[sdk/model/config/customer.ts:18](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/customer.ts#L18)
