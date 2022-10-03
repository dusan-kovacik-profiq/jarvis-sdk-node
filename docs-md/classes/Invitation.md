[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / Invitation

# Class: Invitation

## Table of contents

### Constructors

- [constructor](Invitation.md#constructor)

### Properties

- [acceptedBy](Invitation.md#acceptedby)
- [expireDate](Invitation.md#expiredate)
- [inviteDate](Invitation.md#invitedate)
- [invitee](Invitation.md#invitee)
- [messageAttributes](Invitation.md#messageattributes)
- [referenceId](Invitation.md#referenceid)
- [state](Invitation.md#state)
- [tenantId](Invitation.md#tenantid)

### Methods

- [deserialize](Invitation.md#deserialize)

## Constructors

### constructor

• **new Invitation**(`tenantId`, `referenceId`, `state`, `invitee`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tenantId` | `string` |
| `referenceId` | `string` |
| `state` | [`InvitationState`](../enums/InvitationState.md) |
| `invitee` | `string` |

#### Defined in

[sdk/model/invitation.ts:22](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/invitation.ts#L22)

## Properties

### acceptedBy

• `Optional` **acceptedBy**: [`DigitalTwin`](DigitalTwin.md)

#### Defined in

[sdk/model/invitation.ts:17](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/invitation.ts#L17)

___

### expireDate

• `Optional` **expireDate**: `Date`

#### Defined in

[sdk/model/invitation.ts:18](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/invitation.ts#L18)

___

### inviteDate

• `Optional` **inviteDate**: `Date`

#### Defined in

[sdk/model/invitation.ts:19](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/invitation.ts#L19)

___

### invitee

• **invitee**: `string`

#### Defined in

[sdk/model/invitation.ts:26](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/invitation.ts#L26)

___

### messageAttributes

• `Optional` **messageAttributes**: `unknown`

#### Defined in

[sdk/model/invitation.ts:20](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/invitation.ts#L20)

___

### referenceId

• **referenceId**: `string`

#### Defined in

[sdk/model/invitation.ts:24](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/invitation.ts#L24)

___

### state

• **state**: [`InvitationState`](../enums/InvitationState.md)

#### Defined in

[sdk/model/invitation.ts:25](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/invitation.ts#L25)

___

### tenantId

• **tenantId**: `string`

#### Defined in

[sdk/model/invitation.ts:23](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/invitation.ts#L23)

## Methods

### deserialize

▸ `Static` **deserialize**(`invitationResponse`): [`Invitation`](Invitation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `invitationResponse` | `CheckInvitationStateResponse` |

#### Returns

[`Invitation`](Invitation.md)

#### Defined in

[sdk/model/invitation.ts:29](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/invitation.ts#L29)
