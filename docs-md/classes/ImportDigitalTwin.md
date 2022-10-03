[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / ImportDigitalTwin

# Class: ImportDigitalTwin

## Hierarchy

- [`DigitalTwin`](DigitalTwin.md)

  ↳ **`ImportDigitalTwin`**

## Table of contents

### Constructors

- [constructor](ImportDigitalTwin.md#constructor)

### Properties

- [createTime](ImportDigitalTwin.md#createtime)
- [digitalTwinId](ImportDigitalTwin.md#digitaltwinid)
- [forceDeleteProperties](ImportDigitalTwin.md#forcedeleteproperties)
- [id](ImportDigitalTwin.md#id)
- [kind](ImportDigitalTwin.md#kind)
- [lastLoginDate](ImportDigitalTwin.md#lastlogindate)
- [lastRefreshDate](ImportDigitalTwin.md#lastrefreshdate)
- [password](ImportDigitalTwin.md#password)
- [patchBuilder](ImportDigitalTwin.md#patchbuilder)
- [properties](ImportDigitalTwin.md#properties)
- [state](ImportDigitalTwin.md#state)
- [tenantId](ImportDigitalTwin.md#tenantid)
- [userProvider](ImportDigitalTwin.md#userprovider)

### Methods

- [addProperty](ImportDigitalTwin.md#addproperty)
- [deleteProperty](ImportDigitalTwin.md#deleteproperty)
- [getOperationsBuilder](ImportDigitalTwin.md#getoperationsbuilder)
- [getPatchOperation](ImportDigitalTwin.md#getpatchoperation)
- [getPatchOperationsAndReset](ImportDigitalTwin.md#getpatchoperationsandreset)
- [getProperties](ImportDigitalTwin.md#getproperties)
- [getProperty](ImportDigitalTwin.md#getproperty)
- [getPropertyById](ImportDigitalTwin.md#getpropertybyid)
- [getPropertyValue](ImportDigitalTwin.md#getpropertyvalue)
- [marshal](ImportDigitalTwin.md#marshal)
- [marshalPassword](ImportDigitalTwin.md#marshalpassword)
- [resetOperations](ImportDigitalTwin.md#resetoperations)
- [updateProperty](ImportDigitalTwin.md#updateproperty)
- [updatePropertyMetadata](ImportDigitalTwin.md#updatepropertymetadata)
- [updatePropertyValue](ImportDigitalTwin.md#updatepropertyvalue)
- [deserialize](ImportDigitalTwin.md#deserialize)
- [fromDigitalTwin](ImportDigitalTwin.md#fromdigitaltwin)
- [fromModel](ImportDigitalTwin.md#frommodel)

## Constructors

### constructor

• **new ImportDigitalTwin**(`tenantId`, `kind`, `state`, `digitalTwinId?`, `password?`, `userProvider?`, `importProperties?`, `createDate?`, `lastLoginDate?`, `lastRefreshDate?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tenantId` | `string` |
| `kind` | `number` |
| `state` | `number` |
| `digitalTwinId?` | `string` |
| `password?` | [`PasswordCredential`](../interfaces/PasswordCredential.md) |
| `userProvider?` | [`UserProvider`](../interfaces/UserProvider.md)[] |
| `importProperties?` | [`ImportProperties`](../interfaces/ImportProperties.md) |
| `createDate?` | `Date` |
| `lastLoginDate?` | `Date` |
| `lastRefreshDate?` | `Date` |

#### Overrides

[DigitalTwin](DigitalTwin.md).[constructor](DigitalTwin.md#constructor)

#### Defined in

[sdk/model/import_digitaltwin.ts:76](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L76)

## Properties

### createTime

• `Optional` **createTime**: `Date`

#### Inherited from

[DigitalTwin](DigitalTwin.md).[createTime](DigitalTwin.md#createtime)

#### Defined in

[sdk/model/digitaltwin.ts:44](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L44)

___

### digitalTwinId

• `Optional` **digitalTwinId**: `string`

#### Defined in

[sdk/model/import_digitaltwin.ts:80](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L80)

___

### forceDeleteProperties

• `Private` `Optional` **forceDeleteProperties**: `boolean`

#### Defined in

[sdk/model/import_digitaltwin.ts:49](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L49)

___

### id

• **id**: `string`

#### Inherited from

[DigitalTwin](DigitalTwin.md).[id](DigitalTwin.md#id)

#### Defined in

[sdk/model/digitaltwin.ts:40](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L40)

___

### kind

• **kind**: `number`

#### Inherited from

[DigitalTwin](DigitalTwin.md).[kind](DigitalTwin.md#kind)

#### Defined in

[sdk/model/import_digitaltwin.ts:78](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L78)

___

### lastLoginDate

• `Optional` **lastLoginDate**: `Date`

#### Defined in

[sdk/model/import_digitaltwin.ts:85](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L85)

___

### lastRefreshDate

• `Optional` **lastRefreshDate**: `Date`

#### Defined in

[sdk/model/import_digitaltwin.ts:86](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L86)

___

### password

• `Optional` **password**: [`PasswordCredential`](../interfaces/PasswordCredential.md)

#### Defined in

[sdk/model/import_digitaltwin.ts:81](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L81)

___

### patchBuilder

• `Protected` **patchBuilder**: [`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Inherited from

[DigitalTwin](DigitalTwin.md).[patchBuilder](DigitalTwin.md#patchbuilder)

#### Defined in

[sdk/model/digitaltwin.ts:37](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L37)

___

### properties

• **properties**: `Record`<`string`, [`Property`](Property.md)[]\> = `{}`

#### Inherited from

[DigitalTwin](DigitalTwin.md).[properties](DigitalTwin.md#properties)

#### Defined in

[sdk/model/digitaltwin.ts:36](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L36)

___

### state

• **state**: `number`

#### Inherited from

[DigitalTwin](DigitalTwin.md).[state](DigitalTwin.md#state)

#### Defined in

[sdk/model/import_digitaltwin.ts:79](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L79)

___

### tenantId

• **tenantId**: `string`

#### Inherited from

[DigitalTwin](DigitalTwin.md).[tenantId](DigitalTwin.md#tenantid)

#### Defined in

[sdk/model/import_digitaltwin.ts:77](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L77)

___

### userProvider

• `Optional` **userProvider**: [`UserProvider`](../interfaces/UserProvider.md)[]

#### Defined in

[sdk/model/import_digitaltwin.ts:82](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L82)

## Methods

### addProperty

▸ **addProperty**(`property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`Property`](Property.md) |

#### Returns

`void`

#### Inherited from

[DigitalTwin](DigitalTwin.md).[addProperty](DigitalTwin.md#addproperty)

#### Defined in

[sdk/model/digitaltwin.ts:103](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L103)

___

### deleteProperty

▸ **deleteProperty**(`property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`Property`](Property.md) |

#### Returns

`void`

#### Inherited from

[DigitalTwin](DigitalTwin.md).[deleteProperty](DigitalTwin.md#deleteproperty)

#### Defined in

[sdk/model/digitaltwin.ts:108](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L108)

___

### getOperationsBuilder

▸ **getOperationsBuilder**(): [`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Returns

[`PatchPropertiesBuilder`](PatchPropertiesBuilder.md)

#### Inherited from

[DigitalTwin](DigitalTwin.md).[getOperationsBuilder](DigitalTwin.md#getoperationsbuilder)

#### Defined in

[sdk/model/digitaltwin.ts:164](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L164)

___

### getPatchOperation

▸ **getPatchOperation**(): `PropertyBatchOperation`[]

#### Returns

`PropertyBatchOperation`[]

#### Inherited from

[DigitalTwin](DigitalTwin.md).[getPatchOperation](DigitalTwin.md#getpatchoperation)

#### Defined in

[sdk/model/digitaltwin.ts:154](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L154)

___

### getPatchOperationsAndReset

▸ **getPatchOperationsAndReset**(): `PropertyBatchOperation`[]

#### Returns

`PropertyBatchOperation`[]

#### Inherited from

[DigitalTwin](DigitalTwin.md).[getPatchOperationsAndReset](DigitalTwin.md#getpatchoperationsandreset)

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

#### Inherited from

[DigitalTwin](DigitalTwin.md).[getProperties](DigitalTwin.md#getproperties)

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

#### Inherited from

[DigitalTwin](DigitalTwin.md).[getProperty](DigitalTwin.md#getproperty)

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

#### Inherited from

[DigitalTwin](DigitalTwin.md).[getPropertyById](DigitalTwin.md#getpropertybyid)

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

#### Inherited from

[DigitalTwin](DigitalTwin.md).[getPropertyValue](DigitalTwin.md#getpropertyvalue)

#### Defined in

[sdk/model/digitaltwin.ts:87](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L87)

___

### marshal

▸ **marshal**(): `ImportDigitalTwin`

#### Returns

`ImportDigitalTwin`

#### Overrides

[DigitalTwin](DigitalTwin.md).[marshal](DigitalTwin.md#marshal)

#### Defined in

[sdk/model/import_digitaltwin.ts:96](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L96)

___

### marshalPassword

▸ `Private` **marshalPassword**(): `undefined` \| `PasswordCredential`

#### Returns

`undefined` \| `PasswordCredential`

#### Defined in

[sdk/model/import_digitaltwin.ts:122](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L122)

___

### resetOperations

▸ **resetOperations**(): `void`

#### Returns

`void`

#### Inherited from

[DigitalTwin](DigitalTwin.md).[resetOperations](DigitalTwin.md#resetoperations)

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

#### Inherited from

[DigitalTwin](DigitalTwin.md).[updateProperty](DigitalTwin.md#updateproperty)

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

#### Inherited from

[DigitalTwin](DigitalTwin.md).[updatePropertyMetadata](DigitalTwin.md#updatepropertymetadata)

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

#### Inherited from

[DigitalTwin](DigitalTwin.md).[updatePropertyValue](DigitalTwin.md#updatepropertyvalue)

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

#### Inherited from

[DigitalTwin](DigitalTwin.md).[deserialize](DigitalTwin.md#deserialize)

#### Defined in

[sdk/model/digitaltwin.ts:49](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L49)

___

### fromDigitalTwin

▸ `Static` **fromDigitalTwin**(`digitalTwin`, `password?`, `userProvider?`, `lastLoginDate?`, `lastRefreshDate?`, `forceDeleteProperties?`): [`ImportDigitalTwin`](ImportDigitalTwin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `digitalTwin` | [`DigitalTwin`](DigitalTwin.md) |
| `password?` | [`PasswordCredential`](../interfaces/PasswordCredential.md) |
| `userProvider?` | [`UserProvider`](../interfaces/UserProvider.md)[] |
| `lastLoginDate?` | `Date` |
| `lastRefreshDate?` | `Date` |
| `forceDeleteProperties?` | `boolean` |

#### Returns

[`ImportDigitalTwin`](ImportDigitalTwin.md)

#### Defined in

[sdk/model/import_digitaltwin.ts:51](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/import_digitaltwin.ts#L51)

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

[DigitalTwin](DigitalTwin.md).[fromModel](DigitalTwin.md#frommodel)

#### Defined in

[sdk/model/digitaltwin.ts:17](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/digitaltwin.ts#L17)
