[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / IdentityClient

# Class: IdentityClient

## Table of contents

### Constructors

- [constructor](IdentityClient.md#constructor)

### Properties

- [client](IdentityClient.md#client)

### Methods

- [cancelInvitation](IdentityClient.md#cancelinvitation)
- [changeMyPassword](IdentityClient.md#changemypassword)
- [changePassword](IdentityClient.md#changepassword)
- [changePasswordByToken](IdentityClient.md#changepasswordbytoken)
- [changePasswordOfDigitalTwin](IdentityClient.md#changepasswordofdigitaltwin)
- [checkConsentChallenge](IdentityClient.md#checkconsentchallenge)
- [checkInvitationState](IdentityClient.md#checkinvitationstate)
- [createApprovedConsentVerifier](IdentityClient.md#createapprovedconsentverifier)
- [createConsentVerifier](IdentityClient.md#createconsentverifier)
- [createConsentVerifierFromInstance](IdentityClient.md#createconsentverifierfrominstance)
- [createDeniedConsentVerifier](IdentityClient.md#createdeniedconsentverifier)
- [createEmailInvitation](IdentityClient.md#createemailinvitation)
- [createMobileInvitation](IdentityClient.md#createmobileinvitation)
- [deleteDigitalTwin](IdentityClient.md#deletedigitaltwin)
- [deleteDigitalTwinByToken](IdentityClient.md#deletedigitaltwinbytoken)
- [enrichToken](IdentityClient.md#enrichtoken)
- [getDigitalTwin](IdentityClient.md#getdigitaltwin)
- [getDigitalTwinByToken](IdentityClient.md#getdigitaltwinbytoken)
- [importDigitalTwins](IdentityClient.md#importdigitaltwins)
- [introspectToken](IdentityClient.md#introspecttoken)
- [isAuthorized](IdentityClient.md#isauthorized)
- [patch](IdentityClient.md#patch)
- [patchProperties](IdentityClient.md#patchproperties)
- [patchPropertiesByToken](IdentityClient.md#patchpropertiesbytoken)
- [resendInvitation](IdentityClient.md#resendinvitation)
- [startEmailVerification](IdentityClient.md#startemailverification)
- [startForgottenPasswordFlow](IdentityClient.md#startforgottenpasswordflow)
- [verifyDigitalTwinEmail](IdentityClient.md#verifydigitaltwinemail)
- [createInstance](IdentityClient.md#createinstance)
- [newClient](IdentityClient.md#newclient)

## Constructors

### constructor

• **new IdentityClient**(`sdk`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sdk` | `SdkClient` |

#### Defined in

[sdk/identity.ts:45](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L45)

## Properties

### client

• `Private` **client**: `IdentityManagementAPIClient`

#### Defined in

[sdk/identity.ts:43](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L43)

## Methods

### cancelInvitation

▸ **cancelInvitation**(`referenceId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `referenceId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/identity.ts:670](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L670)

___

### changeMyPassword

▸ **changeMyPassword**(`token`, `password`): `Promise`<`boolean`\>

**`Deprecated`**

sine 0.1.6, use changePasswordByToken instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `password` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/identity.ts:323](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L323)

___

### changePassword

▸ **changePassword**(`digitalTwinId`, `tenantId`, `password`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `digitalTwinId` | `string` \| `Buffer` |
| `tenantId` | `string` \| `Buffer` |
| `password` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/identity.ts:340](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L340)

___

### changePasswordByToken

▸ **changePasswordByToken**(`token`, `password`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `password` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/identity.ts:302](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L302)

___

### changePasswordOfDigitalTwin

▸ **changePasswordOfDigitalTwin**(`digitalTwinId`, `tenantId`, `password`): `Promise`<`boolean`\>

**`Deprecated`**

sience 0.1.6, use changePassword instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `digitalTwinId` | `string` \| `Buffer` |
| `tenantId` | `string` \| `Buffer` |
| `password` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/identity.ts:363](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L363)

___

### checkConsentChallenge

▸ **checkConsentChallenge**(`challenge`): `Promise`<[`ConsentChallenge`](ConsentChallenge.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `challenge` | `string` |

#### Returns

`Promise`<[`ConsentChallenge`](ConsentChallenge.md)\>

#### Defined in

[sdk/identity.ts:443](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L443)

___

### checkInvitationState

▸ **checkInvitationState**(`__namedParameters`): `Promise`<[`Invitation`](Invitation.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.invitationToken?` | `string` |
| `__namedParameters.referenceId?` | `string` |

#### Returns

`Promise`<[`Invitation`](Invitation.md)\>

#### Defined in

[sdk/identity.ts:602](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L602)

___

### createApprovedConsentVerifier

▸ `Private` **createApprovedConsentVerifier**(`consentChallenge`, `scopes?`, `audiences?`, `session?`, `remember?`, `rememberFor?`): `Promise`<{ `authorizationEndpoint`: `string` ; `verifier`: `string`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `consentChallenge` | `string` | `undefined` |
| `scopes?` | `string`[] | `undefined` |
| `audiences?` | `string`[] | `undefined` |
| `session?` | `ConsentRequestSessionData` | `undefined` |
| `remember` | `boolean` | `false` |
| `rememberFor` | `string` | `'0'` |

#### Returns

`Promise`<{ `authorizationEndpoint`: `string` ; `verifier`: `string`  }\>

#### Defined in

[sdk/identity.ts:835](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L835)

___

### createConsentVerifier

▸ **createConsentVerifier**(`consentChallenge`): `Promise`<{ `authorizationEndpoint`: `string` ; `verifier`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `consentChallenge` | [`ConsentChallenge`](ConsentChallenge.md) |

#### Returns

`Promise`<{ `authorizationEndpoint`: `string` ; `verifier`: `string`  }\>

#### Defined in

[sdk/identity.ts:460](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L460)

▸ **createConsentVerifier**(`consentChallenge`, `denialReason?`): `Promise`<{ `authorizationEndpoint`: `string` ; `verifier`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `consentChallenge` | `string` |
| `denialReason?` | [`ConsentChallengeDenial`](../interfaces/ConsentChallengeDenial.md) |

#### Returns

`Promise`<{ `authorizationEndpoint`: `string` ; `verifier`: `string`  }\>

#### Defined in

[sdk/identity.ts:465](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L465)

▸ **createConsentVerifier**(`consentChallenge`, `scopes?`, `audiences?`, `session?`, `remember?`, `rememberFor?`): `Promise`<{ `authorizationEndpoint`: `string` ; `verifier`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `consentChallenge` | `string` |
| `scopes?` | `string`[] |
| `audiences?` | `string`[] |
| `session?` | `ConsentRequestSessionData` |
| `remember?` | `boolean` |
| `rememberFor?` | `string` |

#### Returns

`Promise`<{ `authorizationEndpoint`: `string` ; `verifier`: `string`  }\>

#### Defined in

[sdk/identity.ts:473](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L473)

___

### createConsentVerifierFromInstance

▸ `Private` **createConsentVerifierFromInstance**(`consentChallenge`): `Promise`<{ `authorizationEndpoint`: `string` ; `verifier`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `consentChallenge` | [`ConsentChallenge`](ConsentChallenge.md) |

#### Returns

`Promise`<{ `authorizationEndpoint`: `string` ; `verifier`: `string`  }\>

#### Defined in

[sdk/identity.ts:783](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L783)

___

### createDeniedConsentVerifier

▸ `Private` **createDeniedConsentVerifier**(`consentChallenge`, `denialReason`): `Promise`<{ `authorizationEndpoint`: `string` ; `verifier`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `consentChallenge` | `string` |
| `denialReason` | [`ConsentChallengeDenial`](../interfaces/ConsentChallengeDenial.md) |

#### Returns

`Promise`<{ `authorizationEndpoint`: `string` ; `verifier`: `string`  }\>

#### Defined in

[sdk/identity.ts:804](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L804)

___

### createEmailInvitation

▸ **createEmailInvitation**(`invitee`, `tenantId`, `referenceId`, `expireTime?`, `inviteAtTime?`, `messageAttributes?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invitee` | `string` |
| `tenantId` | `string` \| `Buffer` |
| `referenceId` | `string` |
| `expireTime?` | `Date` |
| `inviteAtTime?` | `Date` |
| `messageAttributes?` | `Record`<`string`, `unknown`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/identity.ts:514](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L514)

___

### createMobileInvitation

▸ **createMobileInvitation**(`invitee`, `tenantId`, `referenceId`, `expireTime?`, `inviteAtTime?`, `messageAttributes?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invitee` | `string` |
| `tenantId` | `string` \| `Buffer` |
| `referenceId` | `string` |
| `expireTime?` | `Date` |
| `inviteAtTime?` | `Date` |
| `messageAttributes?` | `Record`<`string`, `unknown`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/identity.ts:558](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L558)

___

### deleteDigitalTwin

▸ **deleteDigitalTwin**(`digitalTwinId`, `tenantId`): `Promise`<[`DigitalTwin`](DigitalTwin.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `digitalTwinId` | `string` \| `Buffer` |
| `tenantId` | `string` \| `Buffer` |

#### Returns

`Promise`<[`DigitalTwin`](DigitalTwin.md)\>

#### Defined in

[sdk/identity.ts:382](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L382)

___

### deleteDigitalTwinByToken

▸ **deleteDigitalTwinByToken**(`token`): `Promise`<[`DigitalTwin`](DigitalTwin.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`<[`DigitalTwin`](DigitalTwin.md)\>

#### Defined in

[sdk/identity.ts:413](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L413)

___

### enrichToken

▸ **enrichToken**(`accessToken`, `tokenClaims?`, `sessionClaims?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | `string` |
| `tokenClaims?` | `Record`<`string`, `unknown`\> |
| `sessionClaims?` | `Record`<`string`, `unknown`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/identity.ts:683](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L683)

___

### getDigitalTwin

▸ **getDigitalTwin**(`digitalTwinId`, `tenantId`, `properties`): `Promise`<{ `digitalTwin?`: [`DigitalTwin`](DigitalTwin.md) ; `tokenInfo?`: [`TokenInfo`](TokenInfo.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `digitalTwinId` | `string` \| `Buffer` |
| `tenantId` | `string` \| `Buffer` |
| `properties` | `string`[] |

#### Returns

`Promise`<{ `digitalTwin?`: [`DigitalTwin`](DigitalTwin.md) ; `tokenInfo?`: [`TokenInfo`](TokenInfo.md)  }\>

#### Defined in

[sdk/identity.ts:91](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L91)

___

### getDigitalTwinByToken

▸ **getDigitalTwinByToken**(`token`, `properties`): `Promise`<{ `digitalTwin?`: [`DigitalTwin`](DigitalTwin.md) ; `tokenInfo?`: [`TokenInfo`](TokenInfo.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `properties` | `string`[] |

#### Returns

`Promise`<{ `digitalTwin?`: [`DigitalTwin`](DigitalTwin.md) ; `tokenInfo?`: [`TokenInfo`](TokenInfo.md)  }\>

#### Defined in

[sdk/identity.ts:130](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L130)

___

### importDigitalTwins

▸ **importDigitalTwins**(`digitalTwins`, `hashAlgorithm`): `Promise`<[`ImportResult`](ImportResult.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `digitalTwins` | [`ImportDigitalTwin`](ImportDigitalTwin.md)[] |
| `hashAlgorithm` | [`HashAlgorithm`](HashAlgorithm.md) |

#### Returns

`Promise`<[`ImportResult`](ImportResult.md)[]\>

#### Defined in

[sdk/identity.ts:707](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L707)

___

### introspectToken

▸ **introspectToken**(`token`): `Promise`<[`TokenInfo`](TokenInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`<[`TokenInfo`](TokenInfo.md)\>

#### Defined in

[sdk/identity.ts:70](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L70)

___

### isAuthorized

▸ **isAuthorized**(`subject`, `resources?`, `actions?`): `Promise`<[`AuthorizationDecisions`](AuthorizationDecisions.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `subject` | `string` \| [`Property`](Property.md) \| [`DigitalTwinCore`](DigitalTwinCore.md) | `undefined` |
| `resources` | `Record`<``"id"`` \| ``"label"``, `string`\>[] | `[]` |
| `actions` | `string`[] | `[]` |

#### Returns

`Promise`<[`AuthorizationDecisions`](AuthorizationDecisions.md)\>

#### Defined in

[sdk/identity.ts:731](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L731)

___

### patch

▸ `Private` **patch**(`request`): `Promise`<[`PatchResult`](PatchResult.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `PatchDigitalTwinRequest` |

#### Returns

`Promise`<[`PatchResult`](PatchResult.md)[]\>

#### Defined in

[sdk/identity.ts:173](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L173)

___

### patchProperties

▸ **patchProperties**(`digitalTwinId`, `tenantId`, `dt`, `forceDelete?`): `Promise`<[`PatchResult`](PatchResult.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `digitalTwinId` | `string` \| `Buffer` | `undefined` |
| `tenantId` | `string` \| `Buffer` | `undefined` |
| `dt` | [`DigitalTwin`](DigitalTwin.md) | `undefined` |
| `forceDelete` | `boolean` | `false` |

#### Returns

`Promise`<[`PatchResult`](PatchResult.md)[]\>

#### Defined in

[sdk/identity.ts:188](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L188)

___

### patchPropertiesByToken

▸ **patchPropertiesByToken**(`token`, `dt`, `forceDelete?`): `Promise`<[`PatchResult`](PatchResult.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token` | `string` | `undefined` |
| `dt` | [`DigitalTwin`](DigitalTwin.md) | `undefined` |
| `forceDelete` | `boolean` | `false` |

#### Returns

`Promise`<[`PatchResult`](PatchResult.md)[]\>

#### Defined in

[sdk/identity.ts:210](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L210)

___

### resendInvitation

▸ **resendInvitation**(`referenceId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `referenceId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/identity.ts:657](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L657)

___

### startEmailVerification

▸ **startEmailVerification**(`digitalTwinId`, `tenantId`, `email`, `attributes?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `digitalTwinId` | `string` \| `Buffer` |
| `tenantId` | `string` \| `Buffer` |
| `email` | `string` |
| `attributes?` | `unknown` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/identity.ts:226](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L226)

___

### startForgottenPasswordFlow

▸ **startForgottenPasswordFlow**(`digitalTwinId`, `tenantId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `digitalTwinId` | `string` \| `Buffer` |
| `tenantId` | `string` \| `Buffer` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/identity.ts:287](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L287)

___

### verifyDigitalTwinEmail

▸ **verifyDigitalTwinEmail**(`token`): `Promise`<[`DigitalTwin`](DigitalTwin.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`<[`DigitalTwin`](DigitalTwin.md)\>

#### Defined in

[sdk/identity.ts:256](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L256)

___

### createInstance

▸ `Static` **createInstance**(`appCredential?`): `Promise`<[`IdentityClient`](IdentityClient.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appCredential?` | `unknown` |

#### Returns

`Promise`<[`IdentityClient`](IdentityClient.md)\>

#### Defined in

[sdk/identity.ts:58](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L58)

___

### newClient

▸ `Static` **newClient**(`appCredential?`): `Promise`<[`IdentityClient`](IdentityClient.md)\>

**`Decrecated`**

Use createInstance instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `appCredential?` | `unknown` |

#### Returns

`Promise`<[`IdentityClient`](IdentityClient.md)\>

#### Defined in

[sdk/identity.ts:54](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/identity.ts#L54)
