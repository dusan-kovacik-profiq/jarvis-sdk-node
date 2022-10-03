[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / OAuth2ProviderConfig

# Class: OAuth2ProviderConfig

## Table of contents

### Constructors

- [constructor](OAuth2ProviderConfig.md#constructor)

### Properties

- [frontChannelConsentUri](OAuth2ProviderConfig.md#frontchannelconsenturi)
- [frontChannelLoginUri](OAuth2ProviderConfig.md#frontchannelloginuri)
- [grantTypes](OAuth2ProviderConfig.md#granttypes)
- [requestObjectSigningAlg](OAuth2ProviderConfig.md#requestobjectsigningalg)
- [requestUris](OAuth2ProviderConfig.md#requesturis)
- [responseTypes](OAuth2ProviderConfig.md#responsetypes)
- [scopes](OAuth2ProviderConfig.md#scopes)
- [tokenEndpointAuthMethod](OAuth2ProviderConfig.md#tokenendpointauthmethod)
- [tokenEndpointAuthSigningAlg](OAuth2ProviderConfig.md#tokenendpointauthsigningalg)

### Methods

- [marshal](OAuth2ProviderConfig.md#marshal)
- [deserialize](OAuth2ProviderConfig.md#deserialize)

## Constructors

### constructor

• **new OAuth2ProviderConfig**(`grantTypes`, `responseTypes`, `scopes`, `tokenEndpointAuthMethod`, `tokenEndpointAuthSigningAlg`, `frontChannelLoginUri`, `frontChannelConsentUri`, `requestUris?`, `requestObjectSigningAlg?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `grantTypes` | [`GrantType`](../enums/GrantType.md)[] |
| `responseTypes` | [`ResponseType`](../enums/ResponseType.md)[] |
| `scopes` | `string`[] |
| `tokenEndpointAuthMethod` | [`TokenEndpointAuthMethod`](../enums/TokenEndpointAuthMethod.md)[] |
| `tokenEndpointAuthSigningAlg` | `string`[] |
| `frontChannelLoginUri` | `Record`<`string`, `string`\> |
| `frontChannelConsentUri` | `Record`<`string`, `string`\> |
| `requestUris?` | `string`[] |
| `requestObjectSigningAlg?` | `string` |

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:32](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L32)

• **new OAuth2ProviderConfig**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IOAuth2ProviderConfigOptions`](../modules.md#ioauth2providerconfigoptions) |

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:43](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L43)

## Properties

### frontChannelConsentUri

• **frontChannelConsentUri**: `Record`<`string`, `string`\>

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:30](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L30)

___

### frontChannelLoginUri

• **frontChannelLoginUri**: `Record`<`string`, `string`\>

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:29](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L29)

___

### grantTypes

• **grantTypes**: [`GrantType`](../enums/GrantType.md)[]

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:24](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L24)

___

### requestObjectSigningAlg

• `Optional` **requestObjectSigningAlg**: `string`

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:53](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L53)

___

### requestUris

• `Optional` **requestUris**: `string`[]

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:52](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L52)

___

### responseTypes

• **responseTypes**: [`ResponseType`](../enums/ResponseType.md)[]

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:25](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L25)

___

### scopes

• **scopes**: `string`[]

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:26](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L26)

___

### tokenEndpointAuthMethod

• **tokenEndpointAuthMethod**: [`TokenEndpointAuthMethod`](../enums/TokenEndpointAuthMethod.md)[]

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:27](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L27)

___

### tokenEndpointAuthSigningAlg

• **tokenEndpointAuthSigningAlg**: `string`[]

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:28](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L28)

## Methods

### marshal

▸ **marshal**(): `OAuth2ProviderConfig`

#### Returns

`OAuth2ProviderConfig`

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:104](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L104)

___

### deserialize

▸ `Static` **deserialize**(`config`): [`OAuth2ProviderConfig`](OAuth2ProviderConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `OAuth2ProviderConfig` |

#### Returns

[`OAuth2ProviderConfig`](OAuth2ProviderConfig.md)

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:90](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L90)
