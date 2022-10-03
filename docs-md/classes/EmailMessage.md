[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / EmailMessage

# Class: EmailMessage

## Table of contents

### Constructors

- [constructor](EmailMessage.md#constructor)

### Properties

- [attachments](EmailMessage.md#attachments)
- [bcc](EmailMessage.md#bcc)
- [categories](EmailMessage.md#categories)
- [cc](EmailMessage.md#cc)
- [customArgs](EmailMessage.md#customargs)
- [dynamicTemplateValues](EmailMessage.md#dynamictemplatevalues)
- [from](EmailMessage.md#from)
- [headers](EmailMessage.md#headers)
- [htmlContent](EmailMessage.md#htmlcontent)
- [replyTo](EmailMessage.md#replyto)
- [subject](EmailMessage.md#subject)
- [textContent](EmailMessage.md#textcontent)
- [to](EmailMessage.md#to)

### Methods

- [marshal](EmailMessage.md#marshal)
- [withHtmlContent](EmailMessage.md#withhtmlcontent)
- [withTextContent](EmailMessage.md#withtextcontent)

## Constructors

### constructor

• **new EmailMessage**(`to`, `subject`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `Email`[] |
| `subject` | `string` |

#### Defined in

[sdk/model/config/email/message.ts:20](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L20)

## Properties

### attachments

• **attachments**: `undefined` \| `EmailAttachment`[]

#### Defined in

[sdk/model/config/email/message.ts:18](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L18)

___

### bcc

• **bcc**: `Email`[] = `[]`

#### Defined in

[sdk/model/config/email/message.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L10)

___

### categories

• **categories**: `undefined` \| `string`[]

#### Defined in

[sdk/model/config/email/message.ts:17](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L17)

___

### cc

• **cc**: `Email`[] = `[]`

#### Defined in

[sdk/model/config/email/message.ts:9](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L9)

___

### customArgs

• **customArgs**: `undefined` \| { `[key: string]`: `string`;  }

#### Defined in

[sdk/model/config/email/message.ts:15](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L15)

___

### dynamicTemplateValues

• **dynamicTemplateValues**: `undefined` \| { `[key: string]`: `grpcStruct.Value`;  }

#### Defined in

[sdk/model/config/email/message.ts:16](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L16)

___

### from

• **from**: `undefined` \| `Email`

#### Defined in

[sdk/model/config/email/message.ts:6](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L6)

___

### headers

• **headers**: `undefined` \| { `[key: string]`: `string`;  }

#### Defined in

[sdk/model/config/email/message.ts:14](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L14)

___

### htmlContent

• **htmlContent**: `undefined` \| `string`

#### Defined in

[sdk/model/config/email/message.ts:13](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L13)

___

### replyTo

• **replyTo**: `undefined` \| `Email`

#### Defined in

[sdk/model/config/email/message.ts:7](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L7)

___

### subject

• **subject**: `string`

#### Defined in

[sdk/model/config/email/message.ts:20](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L20)

___

### textContent

• **textContent**: `undefined` \| `string`

#### Defined in

[sdk/model/config/email/message.ts:12](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L12)

___

### to

• **to**: `Email`[]

#### Defined in

[sdk/model/config/email/message.ts:20](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L20)

## Methods

### marshal

▸ **marshal**(): `EmailDefinition`

#### Returns

`EmailDefinition`

#### Defined in

[sdk/model/config/email/message.ts:34](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L34)

___

### withHtmlContent

▸ **withHtmlContent**(`html`): [`EmailMessage`](EmailMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `html` | `string` |

#### Returns

[`EmailMessage`](EmailMessage.md)

#### Defined in

[sdk/model/config/email/message.ts:28](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L28)

___

### withTextContent

▸ **withTextContent**(`text`): [`EmailMessage`](EmailMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`EmailMessage`](EmailMessage.md)

#### Defined in

[sdk/model/config/email/message.ts:22](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/message.ts#L22)
