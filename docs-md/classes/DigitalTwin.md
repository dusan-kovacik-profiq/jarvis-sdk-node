[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / DigitalTwin

# Class: DigitalTwin

## Hierarchy

- [`DigitalTwinCore`](DigitalTwinCore.md)

  ↳ **`DigitalTwin`**

  ↳↳ [`ImportDigitalTwin`](ImportDigitalTwin.md)

## Table of contents

### Constructors

- [constructor](DigitalTwin.md#constructor)

### Properties

- [createTime](DigitalTwin.md#createtime)
- [id](DigitalTwin.md#id)
- [kind](DigitalTwin.md#kind)
- [patchBuilder](DigitalTwin.md#patchbuilder)
- [properties](DigitalTwin.md#properties)
- [state](DigitalTwin.md#state)
- [tenantId](DigitalTwin.md#tenantid)

### Methods

- [addProperty](DigitalTwin.md#addproperty)
- [addPropertyNoPatch](DigitalTwin.md#addpropertynopatch)
- [deleteProperty](DigitalTwin.md#deleteproperty)
- [getOperationsBuilder](DigitalTwin.md#getoperationsbuilder)
- [getPatchOperation](DigitalTwin.md#getpatchoperation)
- [getPatchOperationsAndReset](DigitalTwin.md#getpatchoperationsandreset)
- [getProperties](DigitalTwin.md#getproperties)
- [getProperty](DigitalTwin.md#getproperty)
- [getPropertyById](DigitalTwin.md#getpropertybyid)
- [getPropertyValue](DigitalTwin.md#getpropertyvalue)
- [marshal](DigitalTwin.md#marshal)
- [resetOperations](DigitalTwin.md#resetoperations)
- [updateProperty](DigitalTwin.md#updateproperty)
- [updatePropertyMetadata](DigitalTwin.md#updatepropertymetadata)
- [updatePropertyValue](DigitalTwin.md#updatepropertyvalue)
- [deserialize](DigitalTwin.md#deserialize)
- [fromModel](DigitalTwin.md#frommodel)

## Constructors

### constructor

• **new DigitalTwin**(`id`, `tenantId`, `kind`, `state`, `createTime?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `tenantId` | `string` |
| `kind` | `number` |
| `state` | `number` |
| `createTime?` | `Date` |

#### Overrides

[DigitalTwinCore](DigitalTwinCore.md).[constructor](DigitalTwinCore.md#constructor)

#### Defined in

[sdk/model/digitaltwin.ts:39](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L39)

## Properties

### createTime

• `Optional` **createTime**: `Date`

#### Defined in

[sdk/model/digitaltwin.ts:44](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L44)

___

### id

• **id**: `string`

#### Inherited from

[DigitalTwinCore](DigitalTwinCore.md).[id](DigitalTwinCore.md#id)

#### Defined in

[sdk/model/digitaltwin.ts:40](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L40)

___

### kind

• **kind**: `number`

#### Inherited from

[DigitalTwinCore](DigitalTwinCore.md).[kind](DigitalTwinCore.md#kind)

#### Defined in

[sdk/model/digitaltwin.ts:42](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L42)

___

### patchBuilder

• `Protected` **patchBuilder**: [`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Defined in

[sdk/model/digitaltwin.ts:37](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L37)

___

### properties

• **properties**: `Record`<`string`, [`Property`](Property.md)[]\> = `{}`

#### Defined in

[sdk/model/digitaltwin.ts:36](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L36)

___

### state

• **state**: `number`

#### Inherited from

[DigitalTwinCore](DigitalTwinCore.md).[state](DigitalTwinCore.md#state)

#### Defined in

[sdk/model/digitaltwin.ts:43](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L43)

___

### tenantId

• **tenantId**: `string`

#### Inherited from

[DigitalTwinCore](DigitalTwinCore.md).[tenantId](DigitalTwinCore.md#tenantid)

#### Defined in

[sdk/model/digitaltwin.ts:41](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L41)

## Methods

### addProperty

▸ **addProperty**(`property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`Property`](Property.md) |

#### Returns

`void`

#### Defined in

[sdk/model/digitaltwin.ts:103](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L103)

___

### addPropertyNoPatch

▸ `Private` **addPropertyNoPatch**(`property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`Property`](Property.md) |

#### Returns

`void`

#### Defined in

[sdk/model/digitaltwin.ts:95](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L95)

___

### deleteProperty

▸ **deleteProperty**(`property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`Property`](Property.md) |

#### Returns

`void`

#### Defined in

[sdk/model/digitaltwin.ts:108](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L108)

___

### getOperationsBuilder

▸ **getOperationsBuilder**(): [`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Returns

[`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Defined in

[sdk/model/digitaltwin.ts:164](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L164)

___

### getPatchOperation

▸ **getPatchOperation**(): `PropertyBatchOperation`[]

#### Returns

`PropertyBatchOperation`[]

#### Defined in

[sdk/model/digitaltwin.ts:154](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L154)

___

### getPatchOperationsAndReset

▸ **getPatchOperationsAndReset**(): `PropertyBatchOperation`[]

#### Returns

`PropertyBatchOperation`[]

#### Defined in

[sdk/model/digitaltwin.ts:158](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L158)

___

### getProperties

▸ **getProperties**(`name`): [`Property`](Property.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Property`](Property.md)[]

#### Defined in

[sdk/model/digitaltwin.ts:91](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L91)

___

### getProperty

▸ **getProperty**(`name`): `undefined` \| [`Property`](Property.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`Property`](Property.md)

#### Defined in

[sdk/model/digitaltwin.ts:71](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L71)

___

### getPropertyById

▸ **getPropertyById**(`id`): `undefined` \| [`Property`](Property.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Property`](Property.md)

#### Defined in

[sdk/model/digitaltwin.ts:78](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L78)

___

### getPropertyValue

▸ **getPropertyValue**(`name`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`unknown`

#### Defined in

[sdk/model/digitaltwin.ts:87](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L87)

___

### marshal

▸ **marshal**(): `DigitalTwin`

#### Returns

`DigitalTwin`

#### Inherited from

[DigitalTwinCore](DigitalTwinCore.md).[marshal](DigitalTwinCore.md#marshal)

#### Defined in

[sdk/model/digitaltwin.ts:26](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L26)

___

### resetOperations

▸ **resetOperations**(): `void`

#### Returns

`void`

#### Defined in

[sdk/model/digitaltwin.ts:150](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L150)

___

### updateProperty

▸ **updateProperty**(`property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`Property`](Property.md) |

#### Returns

`void`

#### Defined in

[sdk/model/digitaltwin.ts:140](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L140)

___

### updatePropertyMetadata

▸ **updatePropertyMetadata**(`property`, `primary`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`Property`](Property.md) |
| `primary` | `boolean` |

#### Returns

`void`

#### Defined in

[sdk/model/digitaltwin.ts:130](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L130)

___

### updatePropertyValue

▸ **updatePropertyValue**(`property`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`Property`](Property.md) |
| `value` | `unknown` |

#### Returns

`void`

#### Defined in

[sdk/model/digitaltwin.ts:120](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L120)

___

### deserialize

▸ `Static` **deserialize**(`dtResponse`): [`DigitalTwin`](DigitalTwin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dtResponse` | `GetDigitalTwinResponse` |

#### Returns

[`DigitalTwin`](DigitalTwin.md)

#### Defined in

[sdk/model/digitaltwin.ts:49](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L49)

___

### fromModel

▸ `Static` **fromModel**(`model`): [`DigitalTwinCore`](DigitalTwinCore.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `DigitalTwin` |

#### Returns

[`DigitalTwinCore`](DigitalTwinCore.md)

#### Inherited from

[DigitalTwinCore](DigitalTwinCore.md).[fromModel](DigitalTwinCore.md#frommodel)

#### Defined in

[sdk/model/digitaltwin.ts:17](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L17)
