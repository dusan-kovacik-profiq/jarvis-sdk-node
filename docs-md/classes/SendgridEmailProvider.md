[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / SendgridEmailProvider

# Class: SendgridEmailProvider

## Hierarchy

- `EmailProvider`

  ↳ **`SendgridEmailProvider`**

## Implements

- `SendGridProviderConfig`

## Table of contents

### Constructors

- [constructor](SendgridEmailProvider.md#constructor)

### Properties

- [apiKey](SendgridEmailProvider.md#apikey)
- [appSpaceId](SendgridEmailProvider.md#appspaceid)
- [authenticationMessage](SendgridEmailProvider.md#authenticationmessage)
- [createTime](SendgridEmailProvider.md#createtime)
- [customerId](SendgridEmailProvider.md#customerid)
- [defaultFromAddress](SendgridEmailProvider.md#defaultfromaddress)
- [description](SendgridEmailProvider.md#description)
- [displayName](SendgridEmailProvider.md#displayname)
- [etag](SendgridEmailProvider.md#etag)
- [host](SendgridEmailProvider.md#host)
- [id](SendgridEmailProvider.md#id)
- [invitationMessage](SendgridEmailProvider.md#invitationmessage)
- [ipPoolName](SendgridEmailProvider.md#ippoolname)
- [name](SendgridEmailProvider.md#name)
- [resetPasswordMessage](SendgridEmailProvider.md#resetpasswordmessage)
- [sandboxMode](SendgridEmailProvider.md#sandboxmode)
- [tenantId](SendgridEmailProvider.md#tenantid)
- [updateTime](SendgridEmailProvider.md#updatetime)
- [verificationMessage](SendgridEmailProvider.md#verificationmessage)

### Methods

- [marshal](SendgridEmailProvider.md#marshal)
- [marshalWithoutProvider](SendgridEmailProvider.md#marshalwithoutprovider)
- [setDefaultFrom](SendgridEmailProvider.md#setdefaultfrom)
- [setMessage](SendgridEmailProvider.md#setmessage)

## Constructors

### constructor

• **new SendgridEmailProvider**(`name`, `apiKey`, `sandboxMode`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `apiKey` | `string` |
| `sandboxMode` | `boolean` |

#### Overrides

EmailProvider.constructor

#### Defined in

[sdk/model/config/email/providers/sendgrid.ts:14](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/providers/sendgrid.ts#L14)

## Properties

### apiKey

• **apiKey**: `string`

#### Implementation of

SendGridProviderConfig.apiKey

#### Defined in

[sdk/model/config/email/providers/sendgrid.ts:9](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/providers/sendgrid.ts#L9)

___

### appSpaceId

• `Optional` **appSpaceId**: `string`

#### Inherited from

EmailProvider.appSpaceId

#### Defined in

[sdk/model/config/configuration.ts:9](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L9)

___

### authenticationMessage

• `Optional` **authenticationMessage**: [`EmailMessage`](EmailMessage.md) \| `EmailTemplate`

#### Inherited from

EmailProvider.authenticationMessage

#### Defined in

[sdk/model/config/email/provider.ts:18](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/provider.ts#L18)

___

### createTime

• `Optional` **createTime**: `Date`

#### Inherited from

EmailProvider.createTime

#### Defined in

[sdk/model/config/configuration.ts:6](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L6)

___

### customerId

• `Optional` **customerId**: `string`

#### Inherited from

EmailProvider.customerId

#### Defined in

[sdk/model/config/configuration.ts:8](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L8)

___

### defaultFromAddress

• `Optional` **defaultFromAddress**: `Email`

#### Inherited from

EmailProvider.defaultFromAddress

#### Defined in

[sdk/model/config/email/provider.ts:17](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/provider.ts#L17)

___

### description

• `Optional` **description**: `string`

#### Inherited from

EmailProvider.description

#### Defined in

[sdk/model/config/configuration.ts:3](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L3)

___

### displayName

• `Optional` **displayName**: `string`

#### Inherited from

EmailProvider.displayName

#### Defined in

[sdk/model/config/configuration.ts:2](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L2)

___

### etag

• `Optional` **etag**: `string`

#### Inherited from

EmailProvider.etag

#### Defined in

[sdk/model/config/configuration.ts:4](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L4)

___

### host

• `Optional` **host**: `StringValue`

#### Implementation of

SendGridProviderConfig.host

#### Defined in

[sdk/model/config/email/providers/sendgrid.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/providers/sendgrid.ts#L12)

___

### id

• `Optional` **id**: `string`

#### Inherited from

EmailProvider.id

#### Defined in

[sdk/model/config/configuration.ts:5](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L5)

___

### invitationMessage

• `Optional` **invitationMessage**: [`EmailMessage`](EmailMessage.md) \| `EmailTemplate`

#### Inherited from

EmailProvider.invitationMessage

#### Defined in

[sdk/model/config/email/provider.ts:19](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/provider.ts#L19)

___

### ipPoolName

• `Optional` **ipPoolName**: `StringValue`

#### Implementation of

SendGridProviderConfig.ipPoolName

#### Defined in

[sdk/model/config/email/providers/sendgrid.ts:11](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/providers/sendgrid.ts#L11)

___

### name

• **name**: `string`

#### Inherited from

EmailProvider.name

#### Defined in

[sdk/model/config/configuration.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L12)

___

### resetPasswordMessage

• `Optional` **resetPasswordMessage**: [`EmailMessage`](EmailMessage.md) \| `EmailTemplate`

#### Inherited from

EmailProvider.resetPasswordMessage

#### Defined in

[sdk/model/config/email/provider.ts:20](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/provider.ts#L20)

___

### sandboxMode

• **sandboxMode**: `boolean`

#### Implementation of

SendGridProviderConfig.sandboxMode

#### Defined in

[sdk/model/config/email/providers/sendgrid.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/providers/sendgrid.ts#L10)

___

### tenantId

• `Optional` **tenantId**: `string`

#### Inherited from

EmailProvider.tenantId

#### Defined in

[sdk/model/config/configuration.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L10)

___

### updateTime

• `Optional` **updateTime**: `Date`

#### Inherited from

EmailProvider.updateTime

#### Defined in

[sdk/model/config/configuration.ts:7](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/configuration.ts#L7)

___

### verificationMessage

• `Optional` **verificationMessage**: [`EmailMessage`](EmailMessage.md) \| `EmailTemplate`

#### Inherited from

EmailProvider.verificationMessage

#### Defined in

[sdk/model/config/email/provider.ts:21](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/provider.ts#L21)

## Methods

### marshal

▸ **marshal**(): `EmailServiceConfig`

#### Returns

`EmailServiceConfig`

#### Defined in

[sdk/model/config/email/providers/sendgrid.ts:20](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/providers/sendgrid.ts#L20)

___

### marshalWithoutProvider

▸ **marshalWithoutProvider**(): `Omit`<`EmailServiceConfig`, ``"provider"``\>

#### Returns

`Omit`<`EmailServiceConfig`, ``"provider"``\>

#### Inherited from

EmailProvider.marshalWithoutProvider

#### Defined in

[sdk/model/config/email/provider.ts:27](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/provider.ts#L27)

___

### setDefaultFrom

▸ **setDefaultFrom**(`email`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `Email` |

#### Returns

`void`

#### Inherited from

EmailProvider.setDefaultFrom

#### Defined in

[sdk/model/config/email/provider.ts:41](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/provider.ts#L41)

___

### setMessage

▸ **setMessage**(`type`, `email`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `EmailMessageType` |
| `email` | [`EmailMessage`](EmailMessage.md) \| `EmailTemplate` |

#### Returns

`void`

#### Inherited from

EmailProvider.setMessage

#### Defined in

[sdk/model/config/email/provider.ts:45](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/provider.ts#L45)
