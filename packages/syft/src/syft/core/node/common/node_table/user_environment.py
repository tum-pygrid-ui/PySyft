# third party
from sqlalchemy import Column
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.dialects.postgresql import UUID
import uuid

# relative
from . import Base


class UserEnvironment(Base):
    __tablename__ = "userenvironment"

    id = Column(Integer(), primary_key=True, autoincrement=True)
    user = Column(UUID(as_uuid=True))
    environment = Column(Integer, ForeignKey("environment.id"))

    def __str__(self) -> str:
        return (
            f"<UserGroup id: {self.id}, user: {self.user}, "
            f"group: {self.environment}>"
        )
