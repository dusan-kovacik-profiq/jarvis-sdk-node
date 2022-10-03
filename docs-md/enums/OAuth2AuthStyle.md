[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / OAuth2AuthStyle

# Enumeration: OAuth2AuthStyle

AuthStyle represents how requests for tokens are authenticated
to the server.

**`Generated`**

from protobuf enum indykite.config.v1beta1.AuthStyle

## Table of contents

### Enumeration Members

- [AUTO\_DETECT](OAuth2AuthStyle.md#auto_detect)
- [INVALID](OAuth2AuthStyle.md#invalid)
- [IN\_HEADER](OAuth2AuthStyle.md#in_header)
- [IN\_PARAMS](OAuth2AuthStyle.md#in_params)

## Enumeration Members

### AUTO\_DETECT

• **AUTO\_DETECT** = ``1``

AuthStyleAutoDetect means to auto-detect which authentication
style the provider wants by trying both ways and caching
the successful way for the future.

**`Generated`**

from protobuf enum value: AUTH_STYLE_AUTO_DETECT = 1;

#### Defined in

[grpc/indykite/config/v1beta1/model.ts:2354](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/config/v1beta1/model.ts#L2354)

___

### INVALID

• **INVALID** = ``0``

**`Generated`**

from protobuf enum value: AUTH_STYLE_INVALID = 0;

#### Defined in

[grpc/indykite/config/v1beta1/model.ts:2346](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/config/v1beta1/model.ts#L2346)

___

### IN\_HEADER

• **IN\_HEADER** = ``3``

AuthStyleInHeader sends the client_id and client_password
using HTTP Basic Authorization. This is an optional style
described in the OAuth2 RFC 6749 section 2.3.1.

**`Generated`**

from protobuf enum value: AUTH_STYLE_IN_HEADER = 3;

#### Defined in

[grpc/indykite/config/v1beta1/model.ts:2369](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/config/v1beta1/model.ts#L2369)

___

### IN\_PARAMS

• **IN\_PARAMS** = ``2``

AuthStyleInParams sends the "client_id" and "client_secret"
in the POST body as application/x-www-form-urlencoded parameters.

**`Generated`**

from protobuf enum value: AUTH_STYLE_IN_PARAMS = 2;

#### Defined in

[grpc/indykite/config/v1beta1/model.ts:2361](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/config/v1beta1/model.ts#L2361)
