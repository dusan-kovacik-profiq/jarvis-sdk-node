// @generated by protobuf-ts 2.4.0 with parameter long_type_string,client_grpc1,generate_dependencies,// @generated from protobuf file "indykite/ingest/v1beta1/ingest_api.proto" (package "indykite.ingest.v1beta1", syntax proto3),// tslint:disable
//
// Copyright (c) 2022 IndyKite
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import { IngestAPI } from "./ingest_api";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { StreamRecordsRequest } from "./ingest_api";
import type { StreamRecordsResponse } from "./ingest_api";
import * as grpc from "@grpc/grpc-js";
/**
 * IngestAPI represents the service interface for data ingestion.
 *
 * @generated from protobuf service indykite.ingest.v1beta1.IngestAPI
 */
export interface IIngestAPIClient {
    /**
     * @generated from protobuf rpc: StreamRecords(stream indykite.ingest.v1beta1.StreamRecordsRequest) returns (indykite.ingest.v1beta1.StreamRecordsResponse);
     */
    streamRecords(metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: StreamRecordsResponse) => void): grpc.ClientWritableStream<StreamRecordsRequest>;
    streamRecords(metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: StreamRecordsResponse) => void): grpc.ClientWritableStream<StreamRecordsRequest>;
    streamRecords(options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: StreamRecordsResponse) => void): grpc.ClientWritableStream<StreamRecordsRequest>;
    streamRecords(callback: (err: grpc.ServiceError | null, value?: StreamRecordsResponse) => void): grpc.ClientWritableStream<StreamRecordsRequest>;
}
/**
 * IngestAPI represents the service interface for data ingestion.
 *
 * @generated from protobuf service indykite.ingest.v1beta1.IngestAPI
 */
export class IngestAPIClient extends grpc.Client implements IIngestAPIClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * @generated from protobuf rpc: StreamRecords(stream indykite.ingest.v1beta1.StreamRecordsRequest) returns (indykite.ingest.v1beta1.StreamRecordsResponse);
     */
    streamRecords(metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: StreamRecordsResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: StreamRecordsResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: StreamRecordsResponse) => void)): grpc.ClientWritableStream<StreamRecordsRequest> {
        const method = IngestAPI.methods[0];
        return this.makeClientStreamRequest<StreamRecordsRequest, StreamRecordsResponse>(`/${IngestAPI.typeName}/${method.name}`, (value: StreamRecordsRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): StreamRecordsResponse => method.O.fromBinary(value, this._binaryOptions), (metadata as any), (options as any), (callback as any));
    }
}