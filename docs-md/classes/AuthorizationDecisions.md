[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / AuthorizationDecisions

# Class: AuthorizationDecisions

## Table of contents

### Constructors

- [constructor](AuthorizationDecisions.md#constructor)

### Properties

- [decisionTime](AuthorizationDecisions.md#decisiontime)
- [resources](AuthorizationDecisions.md#resources)

### Methods

- [isAuthorized](AuthorizationDecisions.md#isauthorized)
- [deserialize](AuthorizationDecisions.md#deserialize)

## Constructors

### constructor

• **new AuthorizationDecisions**(`resources`, `decisionTime?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resources` | [`Resources`](../interfaces/Resources.md) |
| `decisionTime?` | `Date` |

#### Defined in

[sdk/model/authorization_decisions.ts:13](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/authorization_decisions.ts#L13)

## Properties

### decisionTime

• `Optional` **decisionTime**: `Date`

#### Defined in

[sdk/model/authorization_decisions.ts:13](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/authorization_decisions.ts#L13)

___

### resources

• **resources**: [`Resources`](../interfaces/Resources.md)

#### Defined in

[sdk/model/authorization_decisions.ts:13](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/authorization_decisions.ts#L13)

## Methods

### isAuthorized

▸ **isAuthorized**(`resource`, `action`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resource` | `string` |
| `action` | `string` |

#### Returns

`boolean`

#### Defined in

[sdk/model/authorization_decisions.ts:35](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/authorization_decisions.ts#L35)

___

### deserialize

▸ `Static` **deserialize**(`response`): [`AuthorizationDecisions`](AuthorizationDecisions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `IsAuthorizedResponse` |

#### Returns

[`AuthorizationDecisions`](AuthorizationDecisions.md)

#### Defined in

[sdk/model/authorization_decisions.ts:15](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/authorization_decisions.ts#L15)
