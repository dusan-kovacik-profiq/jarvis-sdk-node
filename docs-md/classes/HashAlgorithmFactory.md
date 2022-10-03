[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / HashAlgorithmFactory

# Class: HashAlgorithmFactory

## Table of contents

### Constructors

- [constructor](HashAlgorithmFactory.md#constructor)

### Methods

- [createBcrypt](HashAlgorithmFactory.md#createbcrypt)
- [createHmacMd5](HashAlgorithmFactory.md#createhmacmd5)
- [createHmacSha1](HashAlgorithmFactory.md#createhmacsha1)
- [createHmacSha256](HashAlgorithmFactory.md#createhmacsha256)
- [createHmacSha512](HashAlgorithmFactory.md#createhmacsha512)
- [createMd5](HashAlgorithmFactory.md#createmd5)
- [createPbkdf2Sha256](HashAlgorithmFactory.md#createpbkdf2sha256)
- [createPbkdfSha1](HashAlgorithmFactory.md#createpbkdfsha1)
- [createScrypt](HashAlgorithmFactory.md#createscrypt)
- [createSha1](HashAlgorithmFactory.md#createsha1)
- [createSha256](HashAlgorithmFactory.md#createsha256)
- [createSha512](HashAlgorithmFactory.md#createsha512)
- [createStandardScrypt](HashAlgorithmFactory.md#createstandardscrypt)

## Constructors

### constructor

• **new HashAlgorithmFactory**()

## Methods

### createBcrypt

▸ `Static` **createBcrypt**(): `Bcrypt`

#### Returns

`Bcrypt`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:16](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L16)

___

### createHmacMd5

▸ `Static` **createHmacMd5**(`key`): `HMACMD5`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |

#### Returns

`HMACMD5`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:38](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L38)

___

### createHmacSha1

▸ `Static` **createHmacSha1**(`key`): `HMACSHA1`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |

#### Returns

`HMACSHA1`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:42](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L42)

___

### createHmacSha256

▸ `Static` **createHmacSha256**(`key`): `HMACSHA256`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |

#### Returns

`HMACSHA256`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:46](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L46)

___

### createHmacSha512

▸ `Static` **createHmacSha512**(`key`): `HMACSHA512`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |

#### Returns

`HMACSHA512`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:50](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L50)

___

### createMd5

▸ `Static` **createMd5**(`rounds`): `MD5`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rounds` | `string` |

#### Returns

`MD5`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:54](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L54)

___

### createPbkdf2Sha256

▸ `Static` **createPbkdf2Sha256**(`rounds`): `PBKDF2SHA256`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rounds` | `string` |

#### Returns

`PBKDF2SHA256`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:58](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L58)

___

### createPbkdfSha1

▸ `Static` **createPbkdfSha1**(`rounds`): `PBKDFSHA1`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rounds` | `string` |

#### Returns

`PBKDFSHA1`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:62](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L62)

___

### createScrypt

▸ `Static` **createScrypt**(`key`, `saltSeparator`, `rounds`, `memoryCost`): `Scrypt`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |
| `saltSeparator` | `Buffer` |
| `rounds` | `string` |
| `memoryCost` | `string` |

#### Returns

`Scrypt`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:29](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L29)

___

### createSha1

▸ `Static` **createSha1**(`rounds`): `SHA1`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rounds` | `string` |

#### Returns

`SHA1`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:66](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L66)

___

### createSha256

▸ `Static` **createSha256**(`rounds`): `SHA256`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rounds` | `string` |

#### Returns

`SHA256`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:70](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L70)

___

### createSha512

▸ `Static` **createSha512**(`rounds`): `SHA512`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rounds` | `string` |

#### Returns

`SHA512`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:74](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L74)

___

### createStandardScrypt

▸ `Static` **createStandardScrypt**(`blockSize`, `derivedKeyLength`, `memoryCost`, `parallelization`): `StandardScrypt`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockSize` | `string` |
| `derivedKeyLength` | `string` |
| `memoryCost` | `string` |
| `parallelization` | `string` |

#### Returns

`StandardScrypt`

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm_factory.ts:20](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm_factory.ts#L20)
