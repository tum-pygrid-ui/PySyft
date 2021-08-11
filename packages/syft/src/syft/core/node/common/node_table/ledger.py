# stdlib
from typing import Any

# third party
from sqlalchemy import Column
from sqlalchemy import LargeBinary
from sqlalchemy import String
from sqlalchemy import Integer
from sqlalchemy import ForeignKey

# syft absolute
from syft import deserialize
from syft import serialize

# relative
from . import Base


class Ledger(Base):
    __tablename__ = "ledger"

    id = Column(Integer(), primary_key=True, autoincrement=True)
    entity_name = Column(String(256), ForeignKey("entity.name"))
    mechanism_id = Column(Integer(), ForeignKey("mechanism.id"))