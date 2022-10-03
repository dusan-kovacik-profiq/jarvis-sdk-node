[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / ConsentChallenge

# Class: ConsentChallenge

## Table of contents

### Constructors

- [constructor](ConsentChallenge.md#constructor)

### Properties

- [acrs](ConsentChallenge.md#acrs)
- [appSpaceId](ConsentChallenge.md#appspaceid)
- [approvedAudiences](ConsentChallenge.md#approvedaudiences)
- [approvedScopeNames](ConsentChallenge.md#approvedscopenames)
- [audiences](ConsentChallenge.md#audiences)
- [authenticatedAt](ConsentChallenge.md#authenticatedat)
- [challenge](ConsentChallenge.md#challenge)
- [clientId](ConsentChallenge.md#clientid)
- [denialReason](ConsentChallenge.md#denialreason)
- [digitalTwin](ConsentChallenge.md#digitaltwin)
- [remember](ConsentChallenge.md#remember)
- [rememberFor](ConsentChallenge.md#rememberfor)
- [requestUrl](ConsentChallenge.md#requesturl)
- [requestedAt](ConsentChallenge.md#requestedat)
- [scopes](ConsentChallenge.md#scopes)
- [sessionData](ConsentChallenge.md#sessiondata)
- [skip](ConsentChallenge.md#skip)
- [subjectIdentifier](ConsentChallenge.md#subjectidentifier)

### Methods

- [approveAudience](ConsentChallenge.md#approveaudience)
- [approveAudiences](ConsentChallenge.md#approveaudiences)
- [approveScope](ConsentChallenge.md#approvescope)
- [approveScopes](ConsentChallenge.md#approvescopes)
- [deny](ConsentChallenge.md#deny)
- [getApprovedAudiences](ConsentChallenge.md#getapprovedaudiences)
- [getApprovedScopeNames](ConsentChallenge.md#getapprovedscopenames)
- [getDenialReason](ConsentChallenge.md#getdenialreason)
- [getRemember](ConsentChallenge.md#getremember)
- [getRememberFor](ConsentChallenge.md#getrememberfor)
- [getSession](ConsentChallenge.md#getsession)
- [isDenied](ConsentChallenge.md#isdenied)
- [setRemember](ConsentChallenge.md#setremember)
- [setRememberFor](ConsentChallenge.md#setrememberfor)
- [setSession](ConsentChallenge.md#setsession)
- [deserialize](ConsentChallenge.md#deserialize)

## Constructors

### constructor

• **new ConsentChallenge**(`challenge`, `clientId`, `scopes`, `requestUrl`, `audiences`, `appSpaceId`, `acrs`, `subjectIdentifier`, `skip`, `digitalTwin?`, `authenticatedAt?`, `requestedAt?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `challenge` | `string` |
| `clientId` | `string` |
| `scopes` | [`ConsentChallengeScope`](../interfaces/ConsentChallengeScope.md)[] |
| `requestUrl` | `string` |
| `audiences` | [`ConsentChallengeAudience`](../interfaces/ConsentChallengeAudience.md)[] |
| `appSpaceId` | `string` |
| `acrs` | `string`[] |
| `subjectIdentifier` | `string` |
| `skip` | `boolean` |
| `digitalTwin?` | [`DigitalTwin`](DigitalTwin.md) |
| `authenticatedAt?` | `Date` |
| `requestedAt?` | `Date` |

#### Defined in

[sdk/model/consent_challenge.ts:54](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L54)

## Properties

### acrs

• **acrs**: `string`[]

#### Defined in

[sdk/model/consent_challenge.ts:61](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L61)

___

### appSpaceId

• **appSpaceId**: `string`

#### Defined in

[sdk/model/consent_challenge.ts:60](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L60)

___

### approvedAudiences

• `Private` **approvedAudiences**: `string`[]

#### Defined in

[sdk/model/consent_challenge.ts:48](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L48)

___

### approvedScopeNames

• `Private` **approvedScopeNames**: `string`[]

#### Defined in

[sdk/model/consent_challenge.ts:47](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L47)

___

### audiences

• **audiences**: [`ConsentChallengeAudience`](../interfaces/ConsentChallengeAudience.md)[]

#### Defined in

[sdk/model/consent_challenge.ts:59](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L59)

___

### authenticatedAt

• `Optional` **authenticatedAt**: `Date`

#### Defined in

[sdk/model/consent_challenge.ts:65](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L65)

___

### challenge

• **challenge**: `string`

#### Defined in

[sdk/model/consent_challenge.ts:55](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L55)

___

### clientId

• **clientId**: `string`

#### Defined in

[sdk/model/consent_challenge.ts:56](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L56)

___

### denialReason

• `Private` **denialReason**: ``null`` \| [`ConsentChallengeDenial`](../interfaces/ConsentChallengeDenial.md)

#### Defined in

[sdk/model/consent_challenge.ts:49](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L49)

___

### digitalTwin

• `Optional` **digitalTwin**: [`DigitalTwin`](DigitalTwin.md)

#### Defined in

[sdk/model/consent_challenge.ts:64](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L64)

___

### remember

• `Private` `Optional` **remember**: `boolean`

#### Defined in

[sdk/model/consent_challenge.ts:51](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L51)

___

### rememberFor

• `Private` `Optional` **rememberFor**: `string`

#### Defined in

[sdk/model/consent_challenge.ts:52](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L52)

___

### requestUrl

• **requestUrl**: `string`

#### Defined in

[sdk/model/consent_challenge.ts:58](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L58)

___

### requestedAt

• `Optional` **requestedAt**: `Date`

#### Defined in

[sdk/model/consent_challenge.ts:66](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L66)

___

### scopes

• **scopes**: [`ConsentChallengeScope`](../interfaces/ConsentChallengeScope.md)[]

#### Defined in

[sdk/model/consent_challenge.ts:57](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L57)

___

### sessionData

• `Private` `Optional` **sessionData**: [`ConsentRequestSessionData`](../interfaces/ConsentRequestSessionData.md)

#### Defined in

[sdk/model/consent_challenge.ts:50](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L50)

___

### skip

• **skip**: `boolean`

#### Defined in

[sdk/model/consent_challenge.ts:63](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L63)

___

### subjectIdentifier

• **subjectIdentifier**: `string`

#### Defined in

[sdk/model/consent_challenge.ts:62](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L62)

## Methods

### approveAudience

▸ **approveAudience**(`audience`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `audience` | `string` |

#### Returns

`void`

#### Defined in

[sdk/model/consent_challenge.ts:113](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L113)

___

### approveAudiences

▸ **approveAudiences**(`audiences`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `audiences` | `string`[] |

#### Returns

`void`

#### Defined in

[sdk/model/consent_challenge.ts:119](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L119)

___

### approveScope

▸ **approveScope**(`scopeName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeName` | `string` |

#### Returns

`void`

#### Defined in

[sdk/model/consent_challenge.ts:99](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L99)

___

### approveScopes

▸ **approveScopes**(`scopeNames`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeNames` | `string`[] |

#### Returns

`void`

#### Defined in

[sdk/model/consent_challenge.ts:109](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L109)

___

### deny

▸ **deny**(`reason`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | [`ConsentChallengeDenial`](../interfaces/ConsentChallengeDenial.md) |

#### Returns

`void`

#### Defined in

[sdk/model/consent_challenge.ts:123](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L123)

___

### getApprovedAudiences

▸ **getApprovedAudiences**(): `string`[]

#### Returns

`string`[]

#### Defined in

[sdk/model/consent_challenge.ts:127](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L127)

___

### getApprovedScopeNames

▸ **getApprovedScopeNames**(): `string`[]

#### Returns

`string`[]

#### Defined in

[sdk/model/consent_challenge.ts:131](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L131)

___

### getDenialReason

▸ **getDenialReason**(): ``null`` \| [`ConsentChallengeDenial`](../interfaces/ConsentChallengeDenial.md)

#### Returns

``null`` \| [`ConsentChallengeDenial`](../interfaces/ConsentChallengeDenial.md)

#### Defined in

[sdk/model/consent_challenge.ts:135](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L135)

___

### getRemember

▸ **getRemember**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[sdk/model/consent_challenge.ts:139](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L139)

___

### getRememberFor

▸ **getRememberFor**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[sdk/model/consent_challenge.ts:143](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L143)

___

### getSession

▸ **getSession**(): `undefined` \| [`ConsentRequestSessionData`](../interfaces/ConsentRequestSessionData.md)

#### Returns

`undefined` \| [`ConsentRequestSessionData`](../interfaces/ConsentRequestSessionData.md)

#### Defined in

[sdk/model/consent_challenge.ts:147](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L147)

___

### isDenied

▸ **isDenied**(): `boolean`

#### Returns

`boolean`

#### Defined in

[sdk/model/consent_challenge.ts:151](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L151)

___

### setRemember

▸ **setRemember**(`remember`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `remember` | `boolean` |

#### Returns

`void`

#### Defined in

[sdk/model/consent_challenge.ts:155](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L155)

___

### setRememberFor

▸ **setRememberFor**(`seconds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `seconds` | `string` |

#### Returns

`void`

#### Defined in

[sdk/model/consent_challenge.ts:159](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L159)

___

### setSession

▸ **setSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`ConsentRequestSessionData`](../interfaces/ConsentRequestSessionData.md) |

#### Returns

`void`

#### Defined in

[sdk/model/consent_challenge.ts:163](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L163)

___

### deserialize

▸ `Static` **deserialize**(`response`, `challenge`): [`ConsentChallenge`](ConsentChallenge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `CheckConsentChallengeResponse` |
| `challenge` | `string` |

#### Returns

[`ConsentChallenge`](ConsentChallenge.md)

#### Defined in

[sdk/model/consent_challenge.ts:73](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/consent_challenge.ts#L73)
