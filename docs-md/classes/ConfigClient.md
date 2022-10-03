[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / ConfigClient

# Class: ConfigClient

## Table of contents

### Constructors

- [constructor](ConfigClient.md#constructor)

### Properties

- [client](ConfigClient.md#client)

### Methods

- [createApplication](ConfigClient.md#createapplication)
- [createApplicationAgent](ConfigClient.md#createapplicationagent)
- [createApplicationSpace](ConfigClient.md#createapplicationspace)
- [createAuthflowConfiguration](ConfigClient.md#createauthflowconfiguration)
- [createEmailServiceConfiguration](ConfigClient.md#createemailserviceconfiguration)
- [createOAuth2Application](ConfigClient.md#createoauth2application)
- [createOAuth2Client](ConfigClient.md#createoauth2client)
- [createOAuth2Provider](ConfigClient.md#createoauth2provider)
- [createServiceAccount](ConfigClient.md#createserviceaccount)
- [createTenant](ConfigClient.md#createtenant)
- [deleteApplicationAgent](ConfigClient.md#deleteapplicationagent)
- [deleteApplicationAgentCredential](ConfigClient.md#deleteapplicationagentcredential)
- [deleteApplicationSpace](ConfigClient.md#deleteapplicationspace)
- [deleteAuthflowConfiguration](ConfigClient.md#deleteauthflowconfiguration)
- [deleteEmailServiceConfiguration](ConfigClient.md#deleteemailserviceconfiguration)
- [deleteOAuth2Application](ConfigClient.md#deleteoauth2application)
- [deleteOAuth2Client](ConfigClient.md#deleteoauth2client)
- [deleteOAuth2Provider](ConfigClient.md#deleteoauth2provider)
- [deleteServiceAccount](ConfigClient.md#deleteserviceaccount)
- [readApplicationAgentById](ConfigClient.md#readapplicationagentbyid)
- [readApplicationAgentByName](ConfigClient.md#readapplicationagentbyname)
- [readApplicationAgentCredential](ConfigClient.md#readapplicationagentcredential)
- [readApplicationAgentList](ConfigClient.md#readapplicationagentlist)
- [readApplicationById](ConfigClient.md#readapplicationbyid)
- [readApplicationByName](ConfigClient.md#readapplicationbyname)
- [readApplicationList](ConfigClient.md#readapplicationlist)
- [readApplicationSpaceById](ConfigClient.md#readapplicationspacebyid)
- [readApplicationSpaceByName](ConfigClient.md#readapplicationspacebyname)
- [readApplicationSpaceList](ConfigClient.md#readapplicationspacelist)
- [readAuthflowConfiguration](ConfigClient.md#readauthflowconfiguration)
- [readCustomerById](ConfigClient.md#readcustomerbyid)
- [readCustomerByName](ConfigClient.md#readcustomerbyname)
- [readEmailServiceConfiguration](ConfigClient.md#reademailserviceconfiguration)
- [readOAuth2Application](ConfigClient.md#readoauth2application)
- [readOAuth2Client](ConfigClient.md#readoauth2client)
- [readOAuth2Provider](ConfigClient.md#readoauth2provider)
- [readServiceAccountById](ConfigClient.md#readserviceaccountbyid)
- [readServiceAccountByName](ConfigClient.md#readserviceaccountbyname)
- [readTenantById](ConfigClient.md#readtenantbyid)
- [readTenantByName](ConfigClient.md#readtenantbyname)
- [readTenantList](ConfigClient.md#readtenantlist)
- [registerApplicationCredential](ConfigClient.md#registerapplicationcredential)
- [updateApplication](ConfigClient.md#updateapplication)
- [updateApplicationAgent](ConfigClient.md#updateapplicationagent)
- [updateApplicationSpace](ConfigClient.md#updateapplicationspace)
- [updateAuthflowConfiguration](ConfigClient.md#updateauthflowconfiguration)
- [updateEmailServiceConfiguration](ConfigClient.md#updateemailserviceconfiguration)
- [updateOAuth2Application](ConfigClient.md#updateoauth2application)
- [updateOAuth2Client](ConfigClient.md#updateoauth2client)
- [updateOAuth2Provider](ConfigClient.md#updateoauth2provider)
- [updateServiceAccount](ConfigClient.md#updateserviceaccount)
- [updateTenant](ConfigClient.md#updatetenant)
- [createInstance](ConfigClient.md#createinstance)

## Constructors

### constructor

• **new ConfigClient**(`sdk`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sdk` | `SdkClient` |

#### Defined in

[sdk/config.ts:51](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L51)

## Properties

### client

• `Private` **client**: `ConfigManagementAPIClient`

#### Defined in

[sdk/config.ts:49](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L49)

## Methods

### createApplication

▸ **createApplication**(`appSpaceId`, `name`, `displayName?`, `description?`): `Promise`<[`Application`](Application.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appSpaceId` | `string` |
| `name` | `string` |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

`Promise`<[`Application`](Application.md)\>

#### Defined in

[sdk/config.ts:591](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L591)

___

### createApplicationAgent

▸ **createApplicationAgent**(`applicationId`, `name`, `displayName?`, `description?`): `Promise`<[`ApplicationAgent`](ApplicationAgent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `applicationId` | `string` |
| `name` | `string` |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

`Promise`<[`ApplicationAgent`](ApplicationAgent.md)\>

#### Defined in

[sdk/config.ts:721](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L721)

___

### createApplicationSpace

▸ **createApplicationSpace**(`customerId`, `name`, `displayName?`, `description?`): `Promise`<[`ApplicationSpace`](ApplicationSpace.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `customerId` | `string` |
| `name` | `string` |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

`Promise`<[`ApplicationSpace`](ApplicationSpace.md)\>

#### Defined in

[sdk/config.ts:312](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L312)

___

### createAuthflowConfiguration

▸ **createAuthflowConfiguration**(`location`, `config`): `Promise`<`AuthFlow`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `string` |
| `config` | `AuthFlow` |

#### Returns

`Promise`<`AuthFlow`\>

#### Defined in

[sdk/config.ts:168](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L168)

___

### createEmailServiceConfiguration

▸ **createEmailServiceConfiguration**(`location`, `config`): `Promise`<[`SendgridEmailProvider`](SendgridEmailProvider.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `string` |
| `config` | [`SendgridEmailProvider`](SendgridEmailProvider.md) |

#### Returns

`Promise`<[`SendgridEmailProvider`](SendgridEmailProvider.md)\>

#### Defined in

[sdk/config.ts:67](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L67)

___

### createOAuth2Application

▸ **createOAuth2Application**(`oauth2ProviderId`, `name`, `config`, `displayName?`, `description?`): `Promise`<[`OAuth2Application`](OAuth2Application.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `oauth2ProviderId` | `string` |
| `name` | `string` |
| `config` | [`OAuth2ApplicationConfig`](OAuth2ApplicationConfig.md) |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

`Promise`<[`OAuth2Application`](OAuth2Application.md)\>

#### Defined in

[sdk/config.ts:1059](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1059)

___

### createOAuth2Client

▸ **createOAuth2Client**(`location`, `oauth2Client`): `Promise`<[`OAuth2Client`](OAuth2Client.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `string` |
| `oauth2Client` | [`OAuth2Client`](OAuth2Client.md) |

#### Returns

`Promise`<[`OAuth2Client`](OAuth2Client.md)\>

#### Defined in

[sdk/config.ts:1166](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1166)

___

### createOAuth2Provider

▸ **createOAuth2Provider**(`appSpaceId`, `name`, `config`, `displayName?`, `description?`): `Promise`<[`OAuth2Provider`](OAuth2Provider.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appSpaceId` | `string` |
| `name` | `string` |
| `config` | [`OAuth2ProviderConfig`](OAuth2ProviderConfig.md) |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

`Promise`<[`OAuth2Provider`](OAuth2Provider.md)\>

#### Defined in

[sdk/config.ts:943](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L943)

___

### createServiceAccount

▸ **createServiceAccount**(`location`, `name`, `role`, `displayName?`, `description?`): `Promise`<`ServiceAccount`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `string` |
| `name` | `string` |
| `role` | `string` |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

`Promise`<`ServiceAccount`\>

#### Defined in

[sdk/config.ts:1278](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1278)

___

### createTenant

▸ **createTenant**(`issuerId`, `name`, `displayName?`, `description?`): `Promise`<[`Tenant`](Tenant.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuerId` | `string` |
| `name` | `string` |
| `displayName?` | `string` |
| `description?` | `string` |

#### Returns

`Promise`<[`Tenant`](Tenant.md)\>

#### Defined in

[sdk/config.ts:463](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L463)

___

### deleteApplicationAgent

▸ **deleteApplicationAgent**(`appAgentId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appAgentId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/config.ts:857](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L857)

___

### deleteApplicationAgentCredential

▸ **deleteApplicationAgentCredential**(`appCredentialId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appCredentialId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/config.ts:928](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L928)

___

### deleteApplicationSpace

▸ **deleteApplicationSpace**(`appSpace`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appSpace` | [`ApplicationSpace`](ApplicationSpace.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/config.ts:448](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L448)

___

### deleteAuthflowConfiguration

▸ **deleteAuthflowConfiguration**(`config`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `AuthFlow` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/config.ts:262](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L262)

___

### deleteEmailServiceConfiguration

▸ **deleteEmailServiceConfiguration**(`config`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`SendgridEmailProvider`](SendgridEmailProvider.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/config.ts:154](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L154)

___

### deleteOAuth2Application

▸ **deleteOAuth2Application**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/config.ts:1151](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1151)

___

### deleteOAuth2Client

▸ **deleteOAuth2Client**(`config`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`OAuth2Client`](OAuth2Client.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/config.ts:1264](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1264)

___

### deleteOAuth2Provider

▸ **deleteOAuth2Provider**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/config.ts:1044](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1044)

___

### deleteServiceAccount

▸ **deleteServiceAccount**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/config.ts:1384](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1384)

___

### readApplicationAgentById

▸ **readApplicationAgentById**(`applicationAgentId`): `Promise`<[`ApplicationAgent`](ApplicationAgent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `applicationAgentId` | `string` |

#### Returns

`Promise`<[`ApplicationAgent`](ApplicationAgent.md)\>

#### Defined in

[sdk/config.ts:748](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L748)

___

### readApplicationAgentByName

▸ **readApplicationAgentByName**(`appSpaceId`, `name`): `Promise`<[`ApplicationAgent`](ApplicationAgent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appSpaceId` | `string` |
| `name` | `string` |

#### Returns

`Promise`<[`ApplicationAgent`](ApplicationAgent.md)\>

#### Defined in

[sdk/config.ts:769](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L769)

___

### readApplicationAgentCredential

▸ **readApplicationAgentCredential**(`appCredentialId`): `Promise`<[`ApplicationAgentCredential`](ApplicationAgentCredential.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appCredentialId` | `string` |

#### Returns

`Promise`<[`ApplicationAgentCredential`](ApplicationAgentCredential.md)\>

#### Defined in

[sdk/config.ts:913](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L913)

___

### readApplicationAgentList

▸ **readApplicationAgentList**(`appSpaceId`, `applicationAgentIds`): `Promise`<[`ApplicationAgent`](ApplicationAgent.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appSpaceId` | `string` |
| `applicationAgentIds` | `string`[] |

#### Returns

`Promise`<[`ApplicationAgent`](ApplicationAgent.md)[]\>

#### Defined in

[sdk/config.ts:832](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L832)

___

### readApplicationById

▸ **readApplicationById**(`applicationId`): `Promise`<[`Application`](Application.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `applicationId` | `string` |

#### Returns

`Promise`<[`Application`](Application.md)\>

#### Defined in

[sdk/config.ts:615](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L615)

___

### readApplicationByName

▸ **readApplicationByName**(`appSpaceId`, `name`): `Promise`<[`Application`](Application.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appSpaceId` | `string` |
| `name` | `string` |

#### Returns

`Promise`<[`Application`](Application.md)\>

#### Defined in

[sdk/config.ts:636](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L636)

___

### readApplicationList

▸ **readApplicationList**(`appSpaceId`, `applicationIds`): `Promise`<[`Application`](Application.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appSpaceId` | `string` |
| `applicationIds` | `string`[] |

#### Returns

`Promise`<[`Application`](Application.md)[]\>

#### Defined in

[sdk/config.ts:699](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L699)

___

### readApplicationSpaceById

▸ **readApplicationSpaceById**(`id`): `Promise`<[`ApplicationSpace`](ApplicationSpace.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`ApplicationSpace`](ApplicationSpace.md)\>

#### Defined in

[sdk/config.ts:339](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L339)

___

### readApplicationSpaceByName

▸ **readApplicationSpaceByName**(`location`, `name`): `Promise`<[`ApplicationSpace`](ApplicationSpace.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `string` |
| `name` | `string` |

#### Returns

`Promise`<[`ApplicationSpace`](ApplicationSpace.md)\>

#### Defined in

[sdk/config.ts:360](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L360)

___

### readApplicationSpaceList

▸ **readApplicationSpaceList**(`customerId`, `appSpaceNames`): `Promise`<[`ApplicationSpace`](ApplicationSpace.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `customerId` | `string` |
| `appSpaceNames` | `string`[] |

#### Returns

`Promise`<[`ApplicationSpace`](ApplicationSpace.md)[]\>

#### Defined in

[sdk/config.ts:384](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L384)

___

### readAuthflowConfiguration

▸ **readAuthflowConfiguration**(`id`): `Promise`<`AuthFlow`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`AuthFlow`\>

#### Defined in

[sdk/config.ts:201](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L201)

___

### readCustomerById

▸ **readCustomerById**(`id`): `Promise`<[`Customer`](Customer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`Customer`](Customer.md)\>

#### Defined in

[sdk/config.ts:276](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L276)

___

### readCustomerByName

▸ **readCustomerByName**(`name`): `Promise`<[`Customer`](Customer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<[`Customer`](Customer.md)\>

#### Defined in

[sdk/config.ts:294](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L294)

___

### readEmailServiceConfiguration

▸ **readEmailServiceConfiguration**(`id`): `Promise`<[`SendgridEmailProvider`](SendgridEmailProvider.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`SendgridEmailProvider`](SendgridEmailProvider.md)\>

#### Defined in

[sdk/config.ts:93](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L93)

___

### readOAuth2Application

▸ **readOAuth2Application**(`id`): `Promise`<[`OAuth2Application`](OAuth2Application.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`OAuth2Application`](OAuth2Application.md)\>

#### Defined in

[sdk/config.ts:1096](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1096)

___

### readOAuth2Client

▸ **readOAuth2Client**(`id`): `Promise`<[`OAuth2Client`](OAuth2Client.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`OAuth2Client`](OAuth2Client.md)\>

#### Defined in

[sdk/config.ts:1205](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1205)

___

### readOAuth2Provider

▸ **readOAuth2Provider**(`id`): `Promise`<[`OAuth2Provider`](OAuth2Provider.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`OAuth2Provider`](OAuth2Provider.md)\>

#### Defined in

[sdk/config.ts:989](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L989)

___

### readServiceAccountById

▸ **readServiceAccountById**(`id`): `Promise`<`ServiceAccount`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`ServiceAccount`\>

#### Defined in

[sdk/config.ts:1304](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1304)

___

### readServiceAccountByName

▸ **readServiceAccountByName**(`location`, `name`): `Promise`<`ServiceAccount`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `string` |
| `name` | `string` |

#### Returns

`Promise`<`ServiceAccount`\>

#### Defined in

[sdk/config.ts:1325](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1325)

___

### readTenantById

▸ **readTenantById**(`id`): `Promise`<[`Tenant`](Tenant.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`Tenant`](Tenant.md)\>

#### Defined in

[sdk/config.ts:486](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L486)

___

### readTenantByName

▸ **readTenantByName**(`location`, `name`): `Promise`<[`Tenant`](Tenant.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `string` |
| `name` | `string` |

#### Returns

`Promise`<[`Tenant`](Tenant.md)\>

#### Defined in

[sdk/config.ts:507](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L507)

___

### readTenantList

▸ **readTenantList**(`appSpaceId`, `tenantIds`): `Promise`<[`Tenant`](Tenant.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appSpaceId` | `string` |
| `tenantIds` | `string`[] |

#### Returns

`Promise`<[`Tenant`](Tenant.md)[]\>

#### Defined in

[sdk/config.ts:569](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L569)

___

### registerApplicationCredential

▸ **registerApplicationCredential**(`appAgentId`, `displayName`, `defaultTenantId`, `publicKeyType?`, `publicKey?`, `expireTime?`): `Promise`<[`ApplicationAgentCredential`](ApplicationAgentCredential.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appAgentId` | `string` |
| `displayName` | `string` |
| `defaultTenantId` | `string` |
| `publicKeyType?` | ``"jwk"`` \| ``"pem"`` |
| `publicKey?` | `Buffer` |
| `expireTime?` | `Date` |

#### Returns

`Promise`<[`ApplicationAgentCredential`](ApplicationAgentCredential.md)\>

#### Defined in

[sdk/config.ts:872](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L872)

___

### updateApplication

▸ **updateApplication**(`application`): `Promise`<[`Application`](Application.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `application` | [`Application`](Application.md) |

#### Returns

`Promise`<[`Application`](Application.md)\>

#### Defined in

[sdk/config.ts:660](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L660)

___

### updateApplicationAgent

▸ **updateApplicationAgent**(`applicationAgent`): `Promise`<[`ApplicationAgent`](ApplicationAgent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `applicationAgent` | [`ApplicationAgent`](ApplicationAgent.md) |

#### Returns

`Promise`<[`ApplicationAgent`](ApplicationAgent.md)\>

#### Defined in

[sdk/config.ts:793](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L793)

___

### updateApplicationSpace

▸ **updateApplicationSpace**(`appSpace`): `Promise`<[`ApplicationSpace`](ApplicationSpace.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appSpace` | [`ApplicationSpace`](ApplicationSpace.md) |

#### Returns

`Promise`<[`ApplicationSpace`](ApplicationSpace.md)\>

#### Defined in

[sdk/config.ts:410](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L410)

___

### updateAuthflowConfiguration

▸ **updateAuthflowConfiguration**(`config`): `Promise`<`AuthFlow`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `AuthFlow` |

#### Returns

`Promise`<`AuthFlow`\>

#### Defined in

[sdk/config.ts:222](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L222)

___

### updateEmailServiceConfiguration

▸ **updateEmailServiceConfiguration**(`config`): `Promise`<[`SendgridEmailProvider`](SendgridEmailProvider.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`SendgridEmailProvider`](SendgridEmailProvider.md) |

#### Returns

`Promise`<[`SendgridEmailProvider`](SendgridEmailProvider.md)\>

#### Defined in

[sdk/config.ts:114](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L114)

___

### updateOAuth2Application

▸ **updateOAuth2Application**(`oauth2Client`): `Promise`<[`OAuth2Application`](OAuth2Application.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `oauth2Client` | [`OAuth2Application`](OAuth2Application.md) |

#### Returns

`Promise`<[`OAuth2Application`](OAuth2Application.md)\>

#### Defined in

[sdk/config.ts:1109](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1109)

___

### updateOAuth2Client

▸ **updateOAuth2Client**(`config`): `Promise`<[`OAuth2Client`](OAuth2Client.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`OAuth2Client`](OAuth2Client.md) |

#### Returns

`Promise`<[`OAuth2Client`](OAuth2Client.md)\>

#### Defined in

[sdk/config.ts:1224](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1224)

___

### updateOAuth2Provider

▸ **updateOAuth2Provider**(`oauth2Provider`): `Promise`<[`OAuth2Provider`](OAuth2Provider.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `oauth2Provider` | [`OAuth2Provider`](OAuth2Provider.md) |

#### Returns

`Promise`<[`OAuth2Provider`](OAuth2Provider.md)\>

#### Defined in

[sdk/config.ts:1002](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1002)

___

### updateServiceAccount

▸ **updateServiceAccount**(`serviceAccount`): `Promise`<`ServiceAccount`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceAccount` | `ServiceAccount` |

#### Returns

`Promise`<`ServiceAccount`\>

#### Defined in

[sdk/config.ts:1349](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L1349)

___

### updateTenant

▸ **updateTenant**(`tenant`): `Promise`<[`Tenant`](Tenant.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tenant` | [`Tenant`](Tenant.md) |

#### Returns

`Promise`<[`Tenant`](Tenant.md)\>

#### Defined in

[sdk/config.ts:531](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L531)

___

### createInstance

▸ `Static` **createInstance**(`appCredential?`): `Promise`<[`ConfigClient`](ConfigClient.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appCredential?` | `string` |

#### Returns

`Promise`<[`ConfigClient`](ConfigClient.md)\>

#### Defined in

[sdk/config.ts:55](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/config.ts#L55)
