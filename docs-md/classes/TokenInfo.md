[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / TokenInfo

# Class: TokenInfo

## Table of contents

### Constructors

- [constructor](TokenInfo.md#constructor)

### Properties

- [active](TokenInfo.md#active)
- [appSpaceId](TokenInfo.md#appspaceid)
- [applicationId](TokenInfo.md#applicationid)
- [authenticationTime](TokenInfo.md#authenticationtime)
- [customerId](TokenInfo.md#customerid)
- [expireTime](TokenInfo.md#expiretime)
- [impersonated](TokenInfo.md#impersonated)
- [issueTime](TokenInfo.md#issuetime)
- [providerInfo](TokenInfo.md#providerinfo)
- [subject](TokenInfo.md#subject)

### Methods

- [deserialize](TokenInfo.md#deserialize)

## Constructors

### constructor

• **new TokenInfo**(`active?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `active?` | `boolean` |

#### Defined in

[sdk/model/token.ts:52](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L52)

## Properties

### active

• `Optional` **active**: `boolean`

#### Defined in

[sdk/model/token.ts:41](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L41)

___

### appSpaceId

• `Optional` **appSpaceId**: `string`

#### Defined in

[sdk/model/token.ts:43](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L43)

___

### applicationId

• `Optional` **applicationId**: `string`

#### Defined in

[sdk/model/token.ts:44](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L44)

___

### authenticationTime

• `Optional` **authenticationTime**: `Date`

#### Defined in

[sdk/model/token.ts:49](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L49)

___

### customerId

• `Optional` **customerId**: `string`

#### Defined in

[sdk/model/token.ts:42](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L42)

___

### expireTime

• `Optional` **expireTime**: `Date`

#### Defined in

[sdk/model/token.ts:48](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L48)

___

### impersonated

• `Optional` **impersonated**: [`DigitalTwinCore`](DigitalTwinCore.md)

#### Defined in

[sdk/model/token.ts:46](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L46)

___

### issueTime

• `Optional` **issueTime**: `Date`

#### Defined in

[sdk/model/token.ts:47](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L47)

___

### providerInfo

• `Optional` **providerInfo**: [`ProviderInfo`](ProviderInfo.md)[]

#### Defined in

[sdk/model/token.ts:50](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L50)

___

### subject

• `Optional` **subject**: [`DigitalTwinCore`](DigitalTwinCore.md)

#### Defined in

[sdk/model/token.ts:45](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L45)

## Methods

### deserialize

▸ `Static` **deserialize**(`message`): [`TokenInfo`](TokenInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `IdentityTokenInfo` \| `TokenIntrospectResponse` |

#### Returns

[`TokenInfo`](TokenInfo.md)

#### Defined in

[sdk/model/token.ts:56](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L56)
