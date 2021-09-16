# third party
import tenseal as ts

# relative
from ...core.common.serde.serializable import serializable
from ...proto.lib.tenseal.vector_pb2 import TenSEALVector as TenSEALVector_PB
from ..util import full_name_with_name


def object2proto(obj: object) -> TenSEALVector_PB:
    proto = TenSEALVector_PB()
    proto.obj_type = full_name_with_name(klass=obj._sy_serializable_wrapper_type)  # type: ignore
    proto.vector = obj.serialize()  # type: ignore

    return proto


def proto2object(proto: TenSEALVector_PB) -> ts.CKKSTensor:
    vec = ts.lazy_ckks_tensor_from(proto.vector)

    return vec


serializable(generate_wrapper=True)(
    wrapped_type=ts.CKKSTensor,
    import_path="tenseal.CKKSTensor",
    protobuf_scheme=TenSEALVector_PB,
    type_object2proto=object2proto,
    type_proto2object=proto2object,
)
