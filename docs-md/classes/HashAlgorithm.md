[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / HashAlgorithm

# Class: HashAlgorithm

## Table of contents

### Constructors

- [constructor](HashAlgorithm.md#constructor)

### Properties

- [type](HashAlgorithm.md#type)

### Methods

- [marshal](HashAlgorithm.md#marshal)

## Constructors

### constructor

• **new HashAlgorithm**(`type`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` \| ``"bcrypt"`` \| ``"standardScrypt"`` \| ``"scrypt"`` \| ``"hmacMd5"`` \| ``"hmacSha1"`` \| ``"hmacSha512"`` \| ``"hmacSha256"`` \| ``"md5"`` \| ``"pbkdf2Sha256"`` \| ``"pbkdfSha1"`` \| ``"sha1"`` \| ``"sha256"`` \| ``"sha512"`` |

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm.ts:4](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm.ts#L4)

## Properties

### type

• **type**: `undefined` \| ``"bcrypt"`` \| ``"standardScrypt"`` \| ``"scrypt"`` \| ``"hmacMd5"`` \| ``"hmacSha1"`` \| ``"hmacSha512"`` \| ``"hmacSha256"`` \| ``"md5"`` \| ``"pbkdf2Sha256"`` \| ``"pbkdfSha1"`` \| ``"sha1"`` \| ``"sha256"`` \| ``"sha512"``

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm.ts:4](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm.ts#L4)

## Methods

### marshal

▸ `Abstract` **marshal**(): { `bcrypt`: `Bcrypt` ; `oneofKind`: ``"bcrypt"``  } \| { `oneofKind`: ``"standardScrypt"`` ; `standardScrypt`: `StandardScrypt`  } \| { `oneofKind`: ``"scrypt"`` ; `scrypt`: `Scrypt`  } \| { `hmacMd5`: `HMACMD5` ; `oneofKind`: ``"hmacMd5"``  } \| { `hmacSha1`: `HMACSHA1` ; `oneofKind`: ``"hmacSha1"``  } \| { `hmacSha512`: `HMACSHA512` ; `oneofKind`: ``"hmacSha512"``  } \| { `hmacSha256`: `HMACSHA256` ; `oneofKind`: ``"hmacSha256"``  } \| { `md5`: `MD5` ; `oneofKind`: ``"md5"``  } \| { `oneofKind`: ``"pbkdf2Sha256"`` ; `pbkdf2Sha256`: `PBKDF2SHA256`  } \| { `oneofKind`: ``"pbkdfSha1"`` ; `pbkdfSha1`: `PBKDFSHA1`  } \| { `oneofKind`: ``"sha1"`` ; `sha1`: `SHA1`  } \| { `oneofKind`: ``"sha256"`` ; `sha256`: `SHA256`  } \| { `oneofKind`: ``"sha512"`` ; `sha512`: `SHA512`  } \| { `oneofKind`: `undefined`  }

#### Returns

{ `bcrypt`: `Bcrypt` ; `oneofKind`: ``"bcrypt"``  } \| { `oneofKind`: ``"standardScrypt"`` ; `standardScrypt`: `StandardScrypt`  } \| { `oneofKind`: ``"scrypt"`` ; `scrypt`: `Scrypt`  } \| { `hmacMd5`: `HMACMD5` ; `oneofKind`: ``"hmacMd5"``  } \| { `hmacSha1`: `HMACSHA1` ; `oneofKind`: ``"hmacSha1"``  } \| { `hmacSha512`: `HMACSHA512` ; `oneofKind`: ``"hmacSha512"``  } \| { `hmacSha256`: `HMACSHA256` ; `oneofKind`: ``"hmacSha256"``  } \| { `md5`: `MD5` ; `oneofKind`: ``"md5"``  } \| { `oneofKind`: ``"pbkdf2Sha256"`` ; `pbkdf2Sha256`: `PBKDF2SHA256`  } \| { `oneofKind`: ``"pbkdfSha1"`` ; `pbkdfSha1`: `PBKDFSHA1`  } \| { `oneofKind`: ``"sha1"`` ; `sha1`: `SHA1`  } \| { `oneofKind`: ``"sha256"`` ; `sha256`: `SHA256`  } \| { `oneofKind`: ``"sha512"`` ; `sha512`: `SHA512`  } \| { `oneofKind`: `undefined`  }

#### Defined in

[sdk/model/hash_algorithm/hash_algorithm.ts:6](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/hash_algorithm/hash_algorithm.ts#L6)
