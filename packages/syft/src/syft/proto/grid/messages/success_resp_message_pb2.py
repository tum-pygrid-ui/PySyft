# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/grid/messages/success_resp_message.proto
"""Generated protocol buffer code."""
# third party
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database

# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


# syft absolute
from syft.proto.core.common import (
    common_object_pb2 as proto_dot_core_dot_common_dot_common__object__pb2,
)
from syft.proto.core.io import address_pb2 as proto_dot_core_dot_io_dot_address__pb2

DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(
    b'\n.proto/grid/messages/success_resp_message.proto\x12\x12syft.grid.messages\x1a%proto/core/common/common_object.proto\x1a\x1bproto/core/io/address.proto"y\n\x16SuccessResponseMessage\x12%\n\x06msg_id\x18\x01 \x01(\x0b\x32\x15.syft.core.common.UID\x12\x10\n\x08resp_msg\x18\x03 \x01(\t\x12&\n\x07\x61\x64\x64ress\x18\x04 \x01(\x0b\x32\x15.syft.core.io.Addressb\x06proto3'
)


_SUCCESSRESPONSEMESSAGE = DESCRIPTOR.message_types_by_name["SuccessResponseMessage"]
SuccessResponseMessage = _reflection.GeneratedProtocolMessageType(
    "SuccessResponseMessage",
    (_message.Message,),
    {
        "DESCRIPTOR": _SUCCESSRESPONSEMESSAGE,
        "__module__": "proto.grid.messages.success_resp_message_pb2"
        # @@protoc_insertion_point(class_scope:syft.grid.messages.SuccessResponseMessage)
    },
)
_sym_db.RegisterMessage(SuccessResponseMessage)

if _descriptor._USE_C_DESCRIPTORS == False:

    DESCRIPTOR._options = None
    _SUCCESSRESPONSEMESSAGE._serialized_start = 138
    _SUCCESSRESPONSEMESSAGE._serialized_end = 259
# @@protoc_insertion_point(module_scope)
