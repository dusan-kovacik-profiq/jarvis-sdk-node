[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / ChangePasswordRequest

# Interface: ChangePasswordRequest

**`Generated`**

from protobuf message indykite.identity.v1beta1.ChangePasswordRequest

## Table of contents

### Properties

- [ignorePolicy](ChangePasswordRequest.md#ignorepolicy)
- [password](ChangePasswordRequest.md#password)
- [uid](ChangePasswordRequest.md#uid)

## Properties

### ignorePolicy

• **ignorePolicy**: `boolean`

**`Generated`**

from protobuf field: bool ignore_policy = 4;

#### Defined in

[grpc/indykite/identity/v1beta1/identity_management_api.ts:122](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L122)

___

### password

• **password**: `string`

**`Generated`**

from protobuf field: string password = 3;

#### Defined in

[grpc/indykite/identity/v1beta1/identity_management_api.ts:118](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L118)

___

### uid

• **uid**: { `oneofKind`: ``"token"`` ; `token`: `string`  } \| { `digitalTwin`: `DigitalTwin` ; `oneofKind`: ``"digitalTwin"``  } \| { `oneofKind`: `undefined`  }

**`Generated`**

from protobuf oneof: uid

#### Defined in

[grpc/indykite/identity/v1beta1/identity_management_api.ts:100](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L100)
