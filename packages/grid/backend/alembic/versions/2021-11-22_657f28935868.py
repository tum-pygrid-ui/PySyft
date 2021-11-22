"""Casting int to CHAR

Revision ID: 657f28935868
Revises: f72585fbedda
Create Date: 2021-11-22 13:44:39.868415

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = "657f28935868"
down_revision = "f72585fbedda"
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column(
        "request",
        "user_id",
        existing_type=sa.INTEGER(),
        type_=sa.CHAR(),
        existing_nullable=True,
        postgresql_using='user_id::CHAR'
    )
    op.alter_column(
        "syft_user",
        "id",
        existing_type=sa.INTEGER(),
        type_=sa.CHAR(),
        existing_nullable=False,
        postgresql_using='id::CHAR'
    )
    op.alter_column(
        "userenvironment",
        "user",
        existing_type=sa.INTEGER(),
        type_=sa.CHAR(),
        existing_nullable=True,
        postgresql_using='user::CHAR'
    )
    op.alter_column(
        "usergroup",
        "user",
        existing_type=sa.INTEGER(),
        type_=sa.CHAR(),
        existing_nullable=True,
        postgresql_using='user::CHAR'
    )
    # ### end Alembic commands ###


def downgrade() -> None:
# ### commands auto generated by Alembic - please adjust! ###
# ### end Alembic commands ###
    pass

