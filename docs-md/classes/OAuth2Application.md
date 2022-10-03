[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / OAuth2Application

# Class: OAuth2Application

## Table of contents

### Constructors

- [constructor](OAuth2Application.md#constructor)

### Properties

- [appSpaceId](OAuth2Application.md#appspaceid)
- [config](OAuth2Application.md#config)
- [createTime](OAuth2Application.md#createtime)
- [customerId](OAuth2Application.md#customerid)
- [deleteTime](OAuth2Application.md#deletetime)
- [description](OAuth2Application.md#description)
- [destroyTime](OAuth2Application.md#destroytime)
- [displayName](OAuth2Application.md#displayname)
- [etag](OAuth2Application.md#etag)
- [id](OAuth2Application.md#id)
- [name](OAuth2Application.md#name)
- [oauth2ProviderId](OAuth2Application.md#oauth2providerid)
- [updateTime](OAuth2Application.md#updatetime)

### Methods

- [deserialize](OAuth2Application.md#deserialize)
- [deserializeFromReadResponse](OAuth2Application.md#deserializefromreadresponse)

## Constructors

### constructor

• **new OAuth2Application**(`id`, `name`, `etag?`, `displayName?`, `description?`, `createTime?`, `updateTime?`, `deleteTime?`, `destroyTime?`, `customerId?`, `appSpaceId?`, `oauth2ProviderId?`, `config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |
| `etag?` | `string` |
| `displayName?` | `string` |
| `description?` | `string` |
| `createTime?` | `Date` |
| `updateTime?` | `Date` |
| `deleteTime?` | `Date` |
| `destroyTime?` | `Date` |
| `customerId?` | `string` |
| `appSpaceId?` | `string` |
| `oauth2ProviderId?` | `string` |
| `config?` | [`OAuth2ApplicationConfig`](OAuth2ApplicationConfig.md) |

#### Defined in

[sdk/model/config/oauth2_application.ts:29](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L29)

• **new OAuth2Application**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `IOptions` |

#### Defined in

[sdk/model/config/oauth2_application.ts:44](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L44)

## Properties

### appSpaceId

• `Optional` **appSpaceId**: `string`

#### Defined in

[sdk/model/config/oauth2_application.ts:56](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L56)

___

### config

• `Optional` **config**: [`OAuth2ApplicationConfig`](OAuth2ApplicationConfig.md)

#### Defined in

[sdk/model/config/oauth2_application.ts:58](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L58)

___

### createTime

• `Optional` **createTime**: `Date`

#### Defined in

[sdk/model/config/oauth2_application.ts:51](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L51)

___

### customerId

• `Optional` **customerId**: `string`

#### Defined in

[sdk/model/config/oauth2_application.ts:55](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L55)

___

### deleteTime

• `Optional` **deleteTime**: `Date`

#### Defined in

[sdk/model/config/oauth2_application.ts:53](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L53)

___

### description

• `Optional` **description**: `string`

#### Defined in

[sdk/model/config/oauth2_application.ts:50](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L50)

___

### destroyTime

• `Optional` **destroyTime**: `Date`

#### Defined in

[sdk/model/config/oauth2_application.ts:54](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L54)

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

[sdk/model/config/oauth2_application.ts:49](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L49)

___

### etag

• `Optional` **etag**: `string`

#### Defined in

[sdk/model/config/oauth2_application.ts:48](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L48)

___

### id

• **id**: `string` = `''`

#### Defined in

[sdk/model/config/oauth2_application.ts:26](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L26)

___

### name

• **name**: `string` = `''`

#### Defined in

[sdk/model/config/oauth2_application.ts:27](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L27)

___

### oauth2ProviderId

• `Optional` **oauth2ProviderId**: `string`

#### Defined in

[sdk/model/config/oauth2_application.ts:57](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L57)

___

### updateTime

• `Optional` **updateTime**: `Date`

#### Defined in

[sdk/model/config/oauth2_application.ts:52](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L52)

## Methods

### deserialize

▸ `Static` **deserialize**(`response`, `name`, `config`, `displayName?`, `description?`): [`OAuth2Application`](OAuth2Application.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `CreateOAuth2ApplicationResponse` |
| `name` | `string` |
| `config` | [`OAuth2ApplicationConfig`](OAuth2ApplicationConfig.md) |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

[`OAuth2Application`](OAuth2Application.md)

#### Defined in

[sdk/model/config/oauth2_application.ts:82](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L82)

▸ `Static` **deserialize**(`response`): [`OAuth2Application`](OAuth2Application.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `ReadOAuth2ApplicationResponse` |

#### Returns

[`OAuth2Application`](OAuth2Application.md)

#### Defined in

[sdk/model/config/oauth2_application.ts:89](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L89)

___

### deserializeFromReadResponse

▸ `Static` `Private` **deserializeFromReadResponse**(`oauth2Application`): [`OAuth2Application`](OAuth2Application.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oauth2Application` | `OAuth2Application` |

#### Returns

[`OAuth2Application`](OAuth2Application.md)

#### Defined in

[sdk/model/config/oauth2_application.ts:125](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application.ts#L125)
