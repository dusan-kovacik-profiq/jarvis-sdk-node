[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / OAuth2ApplicationConfig

# Class: OAuth2ApplicationConfig

## Table of contents

### Constructors

- [constructor](OAuth2ApplicationConfig.md#constructor)

### Properties

- [additionalContacts](OAuth2ApplicationConfig.md#additionalcontacts)
- [allowedCorsOrigins](OAuth2ApplicationConfig.md#allowedcorsorigins)
- [audiences](OAuth2ApplicationConfig.md#audiences)
- [clientId](OAuth2ApplicationConfig.md#clientid)
- [clientSecret](OAuth2ApplicationConfig.md#clientsecret)
- [clientUri](OAuth2ApplicationConfig.md#clienturi)
- [description](OAuth2ApplicationConfig.md#description)
- [displayName](OAuth2ApplicationConfig.md#displayname)
- [grantTypes](OAuth2ApplicationConfig.md#granttypes)
- [logoUri](OAuth2ApplicationConfig.md#logouri)
- [owner](OAuth2ApplicationConfig.md#owner)
- [policyUri](OAuth2ApplicationConfig.md#policyuri)
- [redirectUris](OAuth2ApplicationConfig.md#redirecturis)
- [responseTypes](OAuth2ApplicationConfig.md#responsetypes)
- [scopes](OAuth2ApplicationConfig.md#scopes)
- [sectorIdentifierUri](OAuth2ApplicationConfig.md#sectoridentifieruri)
- [subjectType](OAuth2ApplicationConfig.md#subjecttype)
- [termsOfServiceUri](OAuth2ApplicationConfig.md#termsofserviceuri)
- [tokenEndpointAuthMethod](OAuth2ApplicationConfig.md#tokenendpointauthmethod)
- [tokenEndpointAuthSigningAlg](OAuth2ApplicationConfig.md#tokenendpointauthsigningalg)
- [userSupportEmailAddress](OAuth2ApplicationConfig.md#usersupportemailaddress)
- [userinfoSignedResponseAlg](OAuth2ApplicationConfig.md#userinfosignedresponsealg)

### Methods

- [marshal](OAuth2ApplicationConfig.md#marshal)
- [deserialize](OAuth2ApplicationConfig.md#deserialize)

## Constructors

### constructor

• **new OAuth2ApplicationConfig**(`clientId`, `displayName`, `redirectUris`, `owner`, `policyUri`, `termsOfServiceUri`, `clientUri`, `logoUri`, `userSupportEmailAddress`, `subjectType`, `scopes`, `tokenEndpointAuthMethod`, `tokenEndpointAuthSigningAlg`, `description?`, `allowedCorsOrigins?`, `additionalContacts?`, `sectorIdentifierUri?`, `grantTypes?`, `responseTypes?`, `audiences?`, `userinfoSignedResponseAlg?`, `clientSecret?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientId` | `string` |
| `displayName` | `string` |
| `redirectUris` | `string`[] |
| `owner` | `string` |
| `policyUri` | `string` |
| `termsOfServiceUri` | `string` |
| `clientUri` | `string` |
| `logoUri` | `string` |
| `userSupportEmailAddress` | `string` |
| `subjectType` | [`ClientSubjectType`](../enums/ClientSubjectType.md) |
| `scopes` | `string`[] |
| `tokenEndpointAuthMethod` | [`TokenEndpointAuthMethod`](../enums/TokenEndpointAuthMethod.md) |
| `tokenEndpointAuthSigningAlg` | `string` |
| `description?` | `string` |
| `allowedCorsOrigins?` | `string`[] |
| `additionalContacts?` | `string`[] |
| `sectorIdentifierUri?` | `string` |
| `grantTypes?` | [`GrantType`](../enums/GrantType.md)[] |
| `responseTypes?` | [`ResponseType`](../enums/ResponseType.md)[] |
| `audiences?` | `string`[] |
| `userinfoSignedResponseAlg?` | `string` |
| `clientSecret?` | `string` |

#### Defined in

[sdk/model/config/oauth2_application_config.ts:52](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L52)

• **new OAuth2ApplicationConfig**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IOAuth2ApplicationConfigOptions`](../modules.md#ioauth2applicationconfigoptions) |

#### Defined in

[sdk/model/config/oauth2_application_config.ts:76](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L76)

## Properties

### additionalContacts

• `Optional` **additionalContacts**: `string`[]

#### Defined in

[sdk/model/config/oauth2_application_config.ts:93](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L93)

___

### allowedCorsOrigins

• `Optional` **allowedCorsOrigins**: `string`[]

#### Defined in

[sdk/model/config/oauth2_application_config.ts:92](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L92)

___

### audiences

• `Optional` **audiences**: `string`[]

#### Defined in

[sdk/model/config/oauth2_application_config.ts:97](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L97)

___

### clientId

• **clientId**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:38](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L38)

___

### clientSecret

• `Optional` **clientSecret**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:99](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L99)

___

### clientUri

• **clientUri**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:44](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L44)

___

### description

• `Optional` **description**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:91](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L91)

___

### displayName

• **displayName**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:39](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L39)

___

### grantTypes

• `Optional` **grantTypes**: [`GrantType`](../enums/GrantType.md)[]

#### Defined in

[sdk/model/config/oauth2_application_config.ts:95](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L95)

___

### logoUri

• **logoUri**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:45](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L45)

___

### owner

• **owner**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:41](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L41)

___

### policyUri

• **policyUri**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:42](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L42)

___

### redirectUris

• **redirectUris**: `string`[]

#### Defined in

[sdk/model/config/oauth2_application_config.ts:40](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L40)

___

### responseTypes

• `Optional` **responseTypes**: [`ResponseType`](../enums/ResponseType.md)[]

#### Defined in

[sdk/model/config/oauth2_application_config.ts:96](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L96)

___

### scopes

• **scopes**: `string`[]

#### Defined in

[sdk/model/config/oauth2_application_config.ts:48](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L48)

___

### sectorIdentifierUri

• `Optional` **sectorIdentifierUri**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:94](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L94)

___

### subjectType

• **subjectType**: [`ClientSubjectType`](../enums/ClientSubjectType.md)

#### Defined in

[sdk/model/config/oauth2_application_config.ts:47](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L47)

___

### termsOfServiceUri

• **termsOfServiceUri**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:43](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L43)

___

### tokenEndpointAuthMethod

• **tokenEndpointAuthMethod**: [`TokenEndpointAuthMethod`](../enums/TokenEndpointAuthMethod.md)

#### Defined in

[sdk/model/config/oauth2_application_config.ts:49](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L49)

___

### tokenEndpointAuthSigningAlg

• **tokenEndpointAuthSigningAlg**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:50](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L50)

___

### userSupportEmailAddress

• **userSupportEmailAddress**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:46](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L46)

___

### userinfoSignedResponseAlg

• `Optional` **userinfoSignedResponseAlg**: `string`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:98](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L98)

## Methods

### marshal

▸ **marshal**(): `OAuth2ApplicationConfig`

#### Returns

`OAuth2ApplicationConfig`

#### Defined in

[sdk/model/config/oauth2_application_config.ts:195](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L195)

___

### deserialize

▸ `Static` **deserialize**(`config`): [`OAuth2ApplicationConfig`](OAuth2ApplicationConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `OAuth2ApplicationConfig` |

#### Returns

[`OAuth2ApplicationConfig`](OAuth2ApplicationConfig.md)

#### Defined in

[sdk/model/config/oauth2_application_config.ts:169](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L169)
