[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / OAuth2Provider

# Class: OAuth2Provider

## Table of contents

### Constructors

- [constructor](OAuth2Provider.md#constructor)

### Properties

- [appSpaceId](OAuth2Provider.md#appspaceid)
- [config](OAuth2Provider.md#config)
- [createTime](OAuth2Provider.md#createtime)
- [customerId](OAuth2Provider.md#customerid)
- [deleteTime](OAuth2Provider.md#deletetime)
- [description](OAuth2Provider.md#description)
- [destroyTime](OAuth2Provider.md#destroytime)
- [displayName](OAuth2Provider.md#displayname)
- [etag](OAuth2Provider.md#etag)
- [id](OAuth2Provider.md#id)
- [name](OAuth2Provider.md#name)
- [updateTime](OAuth2Provider.md#updatetime)

### Methods

- [deserialize](OAuth2Provider.md#deserialize)
- [deserializeFromReadResponse](OAuth2Provider.md#deserializefromreadresponse)

## Constructors

### constructor

• **new OAuth2Provider**(`id`, `name`, `appSpaceId`, `displayName?`, `description?`, `etag?`, `config?`, `createTime?`, `updateTime?`, `deleteTime?`, `destroyTime?`, `customerId?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |
| `appSpaceId` | `string` |
| `displayName?` | `string` |
| `description?` | `string` |
| `etag?` | `string` |
| `config?` | [`OAuth2ProviderConfig`](OAuth2ProviderConfig.md) |
| `createTime?` | `Date` |
| `updateTime?` | `Date` |
| `deleteTime?` | `Date` |
| `destroyTime?` | `Date` |
| `customerId?` | `string` |

#### Defined in

[sdk/model/config/oauth2_provider.ts:29](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L29)

• **new OAuth2Provider**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `IOptions` |

#### Defined in

[sdk/model/config/oauth2_provider.ts:43](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L43)

## Properties

### appSpaceId

• **appSpaceId**: `string` = `''`

#### Defined in

[sdk/model/config/oauth2_provider.ts:27](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L27)

___

### config

• `Optional` **config**: [`OAuth2ProviderConfig`](OAuth2ProviderConfig.md)

#### Defined in

[sdk/model/config/oauth2_provider.ts:51](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L51)

___

### createTime

• `Optional` **createTime**: `Date`

#### Defined in

[sdk/model/config/oauth2_provider.ts:52](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L52)

___

### customerId

• `Optional` **customerId**: `string`

#### Defined in

[sdk/model/config/oauth2_provider.ts:56](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L56)

___

### deleteTime

• `Optional` **deleteTime**: `Date`

#### Defined in

[sdk/model/config/oauth2_provider.ts:54](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L54)

___

### description

• `Optional` **description**: `string`

#### Defined in

[sdk/model/config/oauth2_provider.ts:49](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L49)

___

### destroyTime

• `Optional` **destroyTime**: `Date`

#### Defined in

[sdk/model/config/oauth2_provider.ts:55](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L55)

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

[sdk/model/config/oauth2_provider.ts:48](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L48)

___

### etag

• `Optional` **etag**: `string`

#### Defined in

[sdk/model/config/oauth2_provider.ts:50](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L50)

___

### id

• **id**: `string` = `''`

#### Defined in

[sdk/model/config/oauth2_provider.ts:25](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L25)

___

### name

• **name**: `string` = `''`

#### Defined in

[sdk/model/config/oauth2_provider.ts:26](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L26)

___

### updateTime

• `Optional` **updateTime**: `Date`

#### Defined in

[sdk/model/config/oauth2_provider.ts:53](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L53)

## Methods

### deserialize

▸ `Static` **deserialize**(`response`, `name`, `appSpaceId`, `config`, `displayName?`, `description?`): [`OAuth2Provider`](OAuth2Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `CreateOAuth2ProviderResponse` |
| `name` | `string` |
| `appSpaceId` | `string` |
| `config` | [`OAuth2ProviderConfig`](OAuth2ProviderConfig.md) |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

[`OAuth2Provider`](OAuth2Provider.md)

#### Defined in

[sdk/model/config/oauth2_provider.ts:80](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L80)

▸ `Static` **deserialize**(`response`): [`OAuth2Provider`](OAuth2Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `ReadOAuth2ProviderResponse` |

#### Returns

[`OAuth2Provider`](OAuth2Provider.md)

#### Defined in

[sdk/model/config/oauth2_provider.ts:88](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L88)

___

### deserializeFromReadResponse

▸ `Static` `Private` **deserializeFromReadResponse**(`oauth2Provider`): [`OAuth2Provider`](OAuth2Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oauth2Provider` | `OAuth2Provider` |

#### Returns

[`OAuth2Provider`](OAuth2Provider.md)

#### Defined in

[sdk/model/config/oauth2_provider.ts:118](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider.ts#L118)
