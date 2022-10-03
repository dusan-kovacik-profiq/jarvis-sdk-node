[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / ApplicationAgentCredential

# Class: ApplicationAgentCredential

## Table of contents

### Constructors

- [constructor](ApplicationAgentCredential.md#constructor)

### Properties

- [agentConfig](ApplicationAgentCredential.md#agentconfig)
- [appSpaceId](ApplicationAgentCredential.md#appspaceid)
- [applicationAgentId](ApplicationAgentCredential.md#applicationagentid)
- [applicationId](ApplicationAgentCredential.md#applicationid)
- [createTime](ApplicationAgentCredential.md#createtime)
- [customerId](ApplicationAgentCredential.md#customerid)
- [deleteTime](ApplicationAgentCredential.md#deletetime)
- [destroyTime](ApplicationAgentCredential.md#destroytime)
- [displayName](ApplicationAgentCredential.md#displayname)
- [expireTime](ApplicationAgentCredential.md#expiretime)
- [id](ApplicationAgentCredential.md#id)
- [kid](ApplicationAgentCredential.md#kid)

### Methods

- [deserialize](ApplicationAgentCredential.md#deserialize)

## Constructors

### constructor

• **new ApplicationAgentCredential**(`id`, `kid`, `applicationAgentId`, `displayName?`, `customerId?`, `appSpaceId?`, `applicationId?`, `expireTime?`, `createTime?`, `deleteTime?`, `destroyTime?`, `agentConfig?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `kid` | `string` |
| `applicationAgentId` | `string` |
| `displayName?` | `string` |
| `customerId?` | `string` |
| `appSpaceId?` | `string` |
| `applicationId?` | `string` |
| `expireTime?` | `Date` |
| `createTime?` | `Date` |
| `deleteTime?` | `Date` |
| `destroyTime?` | `Date` |
| `agentConfig?` | `string` |

#### Defined in

[sdk/model/config/application_agent_credential.ts:9](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L9)

## Properties

### agentConfig

• `Optional` **agentConfig**: `string`

#### Defined in

[sdk/model/config/application_agent_credential.ts:21](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L21)

___

### appSpaceId

• `Optional` **appSpaceId**: `string`

#### Defined in

[sdk/model/config/application_agent_credential.ts:15](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L15)

___

### applicationAgentId

• **applicationAgentId**: `string`

#### Defined in

[sdk/model/config/application_agent_credential.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L12)

___

### applicationId

• `Optional` **applicationId**: `string`

#### Defined in

[sdk/model/config/application_agent_credential.ts:16](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L16)

___

### createTime

• `Optional` **createTime**: `Date`

#### Defined in

[sdk/model/config/application_agent_credential.ts:18](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L18)

___

### customerId

• `Optional` **customerId**: `string`

#### Defined in

[sdk/model/config/application_agent_credential.ts:14](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L14)

___

### deleteTime

• `Optional` **deleteTime**: `Date`

#### Defined in

[sdk/model/config/application_agent_credential.ts:19](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L19)

___

### destroyTime

• `Optional` **destroyTime**: `Date`

#### Defined in

[sdk/model/config/application_agent_credential.ts:20](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L20)

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

[sdk/model/config/application_agent_credential.ts:13](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L13)

___

### expireTime

• `Optional` **expireTime**: `Date`

#### Defined in

[sdk/model/config/application_agent_credential.ts:17](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[sdk/model/config/application_agent_credential.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L10)

___

### kid

• **kid**: `string`

#### Defined in

[sdk/model/config/application_agent_credential.ts:11](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L11)

## Methods

### deserialize

▸ `Static` **deserialize**(`response`, `displayName`, `applicationAgentId`): [`ApplicationAgentCredential`](ApplicationAgentCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `RegisterApplicationAgentCredentialResponse` |
| `displayName` | `string` |
| `applicationAgentId` | `string` |

#### Returns

[`ApplicationAgentCredential`](ApplicationAgentCredential.md)

#### Defined in

[sdk/model/config/application_agent_credential.ts:24](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L24)

▸ `Static` **deserialize**(`response`): [`ApplicationAgentCredential`](ApplicationAgentCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `ReadApplicationAgentCredentialResponse` |

#### Returns

[`ApplicationAgentCredential`](ApplicationAgentCredential.md)

#### Defined in

[sdk/model/config/application_agent_credential.ts:29](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/application_agent_credential.ts#L29)
