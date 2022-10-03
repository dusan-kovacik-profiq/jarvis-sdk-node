[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / OAuth2Client

# Class: OAuth2Client

## Hierarchy

- [`NodeConfiguration`](NodeConfiguration.md)

  ↳ **`OAuth2Client`**

## Table of contents

### Constructors

- [constructor](OAuth2Client.md#constructor)

### Properties

- [allowSignup](OAuth2Client.md#allowsignup)
- [allowedScopes](OAuth2Client.md#allowedscopes)
- [appSpaceId](OAuth2Client.md#appspaceid)
- [authStyle](OAuth2Client.md#authstyle)
- [authorizationEndpoint](OAuth2Client.md#authorizationendpoint)
- [clientId](OAuth2Client.md#clientid)
- [clientSecret](OAuth2Client.md#clientsecret)
- [createTime](OAuth2Client.md#createtime)
- [customerId](OAuth2Client.md#customerid)
- [defaultScopes](OAuth2Client.md#defaultscopes)
- [description](OAuth2Client.md#description)
- [discoveryUrl](OAuth2Client.md#discoveryurl)
- [displayName](OAuth2Client.md#displayname)
- [etag](OAuth2Client.md#etag)
- [hostedDomain](OAuth2Client.md#hosteddomain)
- [id](OAuth2Client.md#id)
- [imageUrl](OAuth2Client.md#imageurl)
- [issuer](OAuth2Client.md#issuer)
- [jwksUri](OAuth2Client.md#jwksuri)
- [name](OAuth2Client.md#name)
- [privateKeyId](OAuth2Client.md#privatekeyid)
- [privateKeyPem](OAuth2Client.md#privatekeypem)
- [providerType](OAuth2Client.md#providertype)
- [redirectUri](OAuth2Client.md#redirecturi)
- [teamId](OAuth2Client.md#teamid)
- [tenant](OAuth2Client.md#tenant)
- [tenantId](OAuth2Client.md#tenantid)
- [tokenEndpoint](OAuth2Client.md#tokenendpoint)
- [updateTime](OAuth2Client.md#updatetime)
- [userinfoEndpoint](OAuth2Client.md#userinfoendpoint)

### Methods

- [marshal](OAuth2Client.md#marshal)

## Constructors

### constructor

• **new OAuth2Client**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IOAuth2ClientConfigOptions`](../modules.md#ioauth2clientconfigoptions) |

#### Overrides

[NodeConfiguration](NodeConfiguration.md).[constructor](NodeConfiguration.md#constructor)

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:58](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L58)

## Properties

### allowSignup

• **allowSignup**: `boolean`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:43](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L43)

___

### allowedScopes

• **allowedScopes**: `string`[]

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:42](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L42)

___

### appSpaceId

• `Optional` **appSpaceId**: `string`

#### Inherited from

[NodeConfiguration](NodeConfiguration.md).[appSpaceId](NodeConfiguration.md#appspaceid)

#### Defined in

[sdk/model/config/configuration.ts:9](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L9)

___

### authStyle

• **authStyle**: [`OAuth2AuthStyle`](../enums/OAuth2AuthStyle.md)

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:53](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L53)

___

### authorizationEndpoint

• **authorizationEndpoint**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:45](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L45)

___

### clientId

• **clientId**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:38](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L38)

___

### clientSecret

• **clientSecret**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:39](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L39)

___

### createTime

• `Optional` **createTime**: `Date`

#### Inherited from

[NodeConfiguration](NodeConfiguration.md).[createTime](NodeConfiguration.md#createtime)

#### Defined in

[sdk/model/config/configuration.ts:6](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L6)

___

### customerId

• `Optional` **customerId**: `string`

#### Inherited from

[NodeConfiguration](NodeConfiguration.md).[customerId](NodeConfiguration.md#customerid)

#### Defined in

[sdk/model/config/configuration.ts:8](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L8)

___

### defaultScopes

• **defaultScopes**: `string`[]

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:41](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L41)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[NodeConfiguration](NodeConfiguration.md).[description](NodeConfiguration.md#description)

#### Defined in

[sdk/model/config/configuration.ts:3](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L3)

___

### discoveryUrl

• **discoveryUrl**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:47](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L47)

___

### displayName

• `Optional` **displayName**: `string`

#### Inherited from

[NodeConfiguration](NodeConfiguration.md).[displayName](NodeConfiguration.md#displayname)

#### Defined in

[sdk/model/config/configuration.ts:2](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L2)

___

### etag

• `Optional` **etag**: `string`

#### Inherited from

[NodeConfiguration](NodeConfiguration.md).[etag](NodeConfiguration.md#etag)

#### Defined in

[sdk/model/config/configuration.ts:4](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L4)

___

### hostedDomain

• **hostedDomain**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:52](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L52)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[NodeConfiguration](NodeConfiguration.md).[id](NodeConfiguration.md#id)

#### Defined in

[sdk/model/config/configuration.ts:5](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L5)

___

### imageUrl

• **imageUrl**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:50](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L50)

___

### issuer

• **issuer**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:44](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L44)

___

### jwksUri

• **jwksUri**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:49](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L49)

___

### name

• **name**: `string`

#### Inherited from

[NodeConfiguration](NodeConfiguration.md).[name](NodeConfiguration.md#name)

#### Defined in

[sdk/model/config/configuration.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L12)

___

### privateKeyId

• `Optional` **privateKeyId**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:54](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L54)

___

### privateKeyPem

• `Optional` **privateKeyPem**: `Buffer`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:55](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L55)

___

### providerType

• **providerType**: [`OAuth2ProviderType`](../enums/OAuth2ProviderType.md)

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:37](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L37)

___

### redirectUri

• **redirectUri**: `string`[]

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:40](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L40)

___

### teamId

• `Optional` **teamId**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:56](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L56)

___

### tenant

• **tenant**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:51](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L51)

___

### tenantId

• `Optional` **tenantId**: `string`

#### Inherited from

[NodeConfiguration](NodeConfiguration.md).[tenantId](NodeConfiguration.md#tenantid)

#### Defined in

[sdk/model/config/configuration.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L10)

___

### tokenEndpoint

• **tokenEndpoint**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:46](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L46)

___

### updateTime

• `Optional` **updateTime**: `Date`

#### Inherited from

[NodeConfiguration](NodeConfiguration.md).[updateTime](NodeConfiguration.md#updatetime)

#### Defined in

[sdk/model/config/configuration.ts:7](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L7)

___

### userinfoEndpoint

• **userinfoEndpoint**: `string`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:48](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L48)

## Methods

### marshal

▸ **marshal**(): `OAuth2ClientConfig`

#### Returns

`OAuth2ClientConfig`

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:85](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L85)
