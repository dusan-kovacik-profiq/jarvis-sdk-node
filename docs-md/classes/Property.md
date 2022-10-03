[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / Property

# Class: Property

## Table of contents

### Constructors

- [constructor](Property.md#constructor)

### Properties

- [context](Property.md#context)
- [id](Property.md#id)
- [meta](Property.md#meta)
- [property](Property.md#property)
- [reference](Property.md#reference)
- [type](Property.md#type)
- [value](Property.md#value)

### Methods

- [isPrimary](Property.md#isprimary)
- [marshal](Property.md#marshal)
- [setMetadata](Property.md#setmetadata)
- [setReference](Property.md#setreference)
- [setValue](Property.md#setvalue)
- [withMetadata](Property.md#withmetadata)
- [withReference](Property.md#withreference)
- [withValue](Property.md#withvalue)
- [deserialize](Property.md#deserialize)
- [fromPropertiesList](Property.md#frompropertieslist)

## Constructors

### constructor

• **new Property**(`property`, `id?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `id?` | `string` |

#### Defined in

[sdk/model/property.ts:58](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L58)

## Properties

### context

• `Optional` **context**: `string`

#### Defined in

[sdk/model/property.ts:48](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L48)

___

### id

• `Optional` **id**: `string`

#### Defined in

[sdk/model/property.ts:45](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L45)

___

### meta

• `Optional` **meta**: [`PropertyMetaData`](PropertyMetaData.md)

#### Defined in

[sdk/model/property.ts:52](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L52)

___

### property

• **property**: `string`

#### Defined in

[sdk/model/property.ts:50](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L50)

___

### reference

• `Optional` **reference**: `string`

#### Defined in

[sdk/model/property.ts:56](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L56)

___

### type

• `Optional` **type**: `string`

#### Defined in

[sdk/model/property.ts:49](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L49)

___

### value

• `Optional` **value**: `unknown`

#### Defined in

[sdk/model/property.ts:55](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L55)

## Methods

### isPrimary

▸ **isPrimary**(): `boolean`

#### Returns

`boolean`

#### Defined in

[sdk/model/property.ts:63](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L63)

___

### marshal

▸ **marshal**(): `Property`

#### Returns

`Property`

#### Defined in

[sdk/model/property.ts:103](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L103)

___

### setMetadata

▸ **setMetadata**(`primary`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `primary` | `boolean` |

#### Returns

`void`

#### Defined in

[sdk/model/property.ts:91](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L91)

___

### setReference

▸ **setReference**(`r`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `string` |

#### Returns

`void`

#### Defined in

[sdk/model/property.ts:79](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L79)

___

### setValue

▸ **setValue**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

`void`

#### Defined in

[sdk/model/property.ts:67](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L67)

___

### withMetadata

▸ **withMetadata**(`primary`): [`Property`](Property.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `primary` | `boolean` |

#### Returns

[`Property`](Property.md)

#### Defined in

[sdk/model/property.ts:98](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L98)

___

### withReference

▸ **withReference**(`r`): [`Property`](Property.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `string` |

#### Returns

[`Property`](Property.md)

#### Defined in

[sdk/model/property.ts:86](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L86)

___

### withValue

▸ **withValue**(`v`): [`Property`](Property.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

[`Property`](Property.md)

#### Defined in

[sdk/model/property.ts:74](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L74)

___

### deserialize

▸ `Static` **deserialize**(`property`): [`Property`](Property.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `Property` |

#### Returns

[`Property`](Property.md)

#### Defined in

[sdk/model/property.ts:141](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L141)

___

### fromPropertiesList

▸ `Static` **fromPropertiesList**(`properties?`): { `definition`: { `property`: `string`  }  }[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `properties` | `string`[] | `[]` |

#### Returns

{ `definition`: { `property`: `string`  }  }[]

#### Defined in

[sdk/model/property.ts:161](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L161)
