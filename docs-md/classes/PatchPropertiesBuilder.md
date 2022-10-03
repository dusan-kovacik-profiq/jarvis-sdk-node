[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / PatchPropertiesBuilder

# Class: PatchPropertiesBuilder

## Table of contents

### Constructors

- [constructor](PatchPropertiesBuilder.md#constructor)

### Properties

- [operations](PatchPropertiesBuilder.md#operations)

### Methods

- [addProperty](PatchPropertiesBuilder.md#addproperty)
- [build](PatchPropertiesBuilder.md#build)
- [deleteProperty](PatchPropertiesBuilder.md#deleteproperty)
- [updateProperty](PatchPropertiesBuilder.md#updateproperty)
- [withPatchPropertiesBuilder](PatchPropertiesBuilder.md#withpatchpropertiesbuilder)
- [newBuilder](PatchPropertiesBuilder.md#newbuilder)

## Constructors

### constructor

• **new PatchPropertiesBuilder**()

## Properties

### operations

• **operations**: `PropertyBatchOperation`[] = `[]`

#### Defined in

[sdk/model/property.ts:173](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L173)

## Methods

### addProperty

▸ **addProperty**(`property`): [`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`Property`](Property.md) |

#### Returns

[`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Defined in

[sdk/model/property.ts:184](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L184)

___

### build

▸ **build**(): `PropertyBatchOperation`[]

#### Returns

`PropertyBatchOperation`[]

#### Defined in

[sdk/model/property.ts:266](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L266)

___

### deleteProperty

▸ **deleteProperty**(`property`): [`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`Property`](Property.md) |

#### Returns

[`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Defined in

[sdk/model/property.ts:251](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L251)

___

### updateProperty

▸ **updateProperty**(`property`): [`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`Property`](Property.md) |

#### Returns

[`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Defined in

[sdk/model/property.ts:212](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L212)

___

### withPatchPropertiesBuilder

▸ **withPatchPropertiesBuilder**(`builder`): [`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`PatchPropertiesBuilder`](PatchPropertiesBuilder.md) |

#### Returns

[`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Defined in

[sdk/model/property.ts:179](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L179)

___

### newBuilder

▸ `Static` **newBuilder**(): [`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Returns

[`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Defined in

[sdk/model/property.ts:175](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L175)
