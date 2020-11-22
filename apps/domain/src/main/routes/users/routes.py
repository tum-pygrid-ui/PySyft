from datetime import datetime, timedelta
from json import dumps, loads
from json.decoder import JSONDecodeError
from secrets import token_hex

import jwt
from bcrypt import checkpw, gensalt, hashpw
from flask import Response
from flask import current_app as app
from flask import request


from .blueprint import users_blueprint as user_route
from ..auth import error_handler, token_required_factory
from ...core.exceptions import (
    AuthorizationError,
    GroupNotFoundError,
    InvalidCredentialsError,
    MissingRequestKeyError,
    PyGridError,
    RoleNotFoundError,
    UserNotFoundError,
)

from ...core.codes import RESPONSE_MSG
from ...core.task_handler import task_handler
from ...core.database import db, Group, Role, User, UserGroup, expand_user_object
from ...core.users.user_ops import (
    change_user_email,
    change_user_groups,
    change_user_password,
    change_user_role,
    delete_user,
    get_all_users,
    get_specific_user,
    login_user,
    search_users,
    signup_user,
)


def get_token(*args, **kwargs):
    token = request.headers.get("token")
    if token is None:
        raise MissingRequestKeyError

    return token


def format_result(response_body, status_code, mimetype):
    return Response(dumps(response_body), status=status_code, mimetype=mimetype)


token_required = token_required_factory(get_token, format_result)


@user_route.route("", methods=["POST"])
def create_user():
    content = request.get_json(silent=True)

    status_code, response_body = task_handler(
        route_function=signup_user,
        data=content,
        mandatory={"password": MissingRequestKeyError, "email": MissingRequestKeyError},
        optional=["role"],
    )

    return Response(
        dumps(response_body), status=status_code, mimetype="application/json"
    )


@user_route.route("/login", methods=["POST"])
def login_route():
    # Get request body
    content = loads(request.data)

    # Execute task
    status_code, response_body = task_handler(
        route_function=login_user,
        data=content,
        mandatory={
            "password": MissingRequestKeyError,
            "email": MissingRequestKeyError,
        },
    )
    return Response(
        dumps(response_body), status=status_code, mimetype="application/json"
    )


@user_route.route("", methods=["GET"])
@token_required
def get_all_users_route(current_user):

    # Execute task
    status_code, response_body = task_handler(
        route_function=get_all_users,
        data={"current_user": current_user},
        mandatory={
            "current_user": MissingRequestKeyError,
        },
    )
    return Response(
        dumps(response_body), status=status_code, mimetype="application/json"
    )


@user_route.route("/<user_id>", methods=["GET"])
@token_required
def get_specific_user_route(current_user, user_id):
    # Execute task
    status_code, response_body = task_handler(
        route_function=get_specific_user,
        data={"current_user": current_user, "user_id": user_id},
        mandatory={
            "current_user": MissingRequestKeyError,
            "user_id": MissingRequestKeyError,
        },
    )

    return Response(
        dumps(response_body), status=status_code, mimetype="application/json"
    )


@user_route.route("/<user_id>/email", methods=["PUT"])
@token_required
def change_user_email_route(current_user, user_id):
    # Get request body
    content = loads(request.data)
    content["current_user"] = current_user
    content["user_id"] = user_id

    # Execute task
    status_code, response_body = task_handler(
        route_function=change_user_email,
        data=content,
        mandatory={
            "current_user": MissingRequestKeyError,
            "user_id": MissingRequestKeyError,
            "email": MissingRequestKeyError,
        },
    )

    return Response(
        dumps(response_body), status=status_code, mimetype="application/json"
    )


@user_route.route("/<user_id>/role", methods=["PUT"])
@token_required
def change_user_role_route(current_user, user_id):
    # Get request body
    content = loads(request.data)
    content["current_user"] = current_user
    content["user_id"] = user_id

    # Execute task
    status_code, response_body = task_handler(
        route_function=change_user_role,
        data=content,
        mandatory={
            "current_user": MissingRequestKeyError,
            "user_id": MissingRequestKeyError,
            "role": MissingRequestKeyError,
        },
    )

    return Response(
        dumps(response_body), status=status_code, mimetype="application/json"
    )


@user_route.route("/<user_id>/password", methods=["PUT"])
@token_required
def change_user_password_role(current_user, user_id):
    # Get request body
    content = loads(request.data)
    content["current_user"] = current_user
    content["user_id"] = user_id

    # Execute task
    status_code, response_body = task_handler(
        route_function=change_user_password,
        data=content,
        mandatory={
            "current_user": MissingRequestKeyError,
            "user_id": MissingRequestKeyError,
            "password": MissingRequestKeyError,
        },
    )

    return Response(
        dumps(response_body), status=status_code, mimetype="application/json"
    )


@user_route.route("/<user_id>/groups", methods=["PUT"])
@token_required
def change_user_groups_route(current_user, user_id):
    # Get request body
    content = loads(request.data)
    content["current_user"] = current_user
    content["user_id"] = user_id

    # Execute task
    status_code, response_body = task_handler(
        route_function=change_user_groups,
        data=content,
        mandatory={
            "current_user": MissingRequestKeyError,
            "user_id": MissingRequestKeyError,
            "groups": MissingRequestKeyError,
        },
    )

    return Response(
        dumps(response_body), status=status_code, mimetype="application/json"
    )


@user_route.route("/<user_id>", methods=["DELETE"])
@token_required
def delete_user_role(current_user, user_id):
    # Get request body
    content = {}
    content["current_user"] = current_user
    content["user_id"] = user_id

    # Execute task
    status_code, response_body = task_handler(
        route_function=delete_user,
        data=content,
        mandatory={
            "current_user": MissingRequestKeyError,
            "user_id": MissingRequestKeyError,
        },
    )

    return Response(
        dumps(response_body), status=status_code, mimetype="application/json"
    )


@user_route.route("/search", methods=["POST"])
@token_required
def search_users_route(current_user):
    # Get request body
    content = loads(request.data)
    content["current_user"] = current_user
    content["filters"] = content

    # Execute task
    status_code, response_body = task_handler(
        route_function=search_users,  # REVIEW @Benardi
        data=content,
        mandatory={
            "current_user": MissingRequestKeyError,
            "filters": MissingRequestKeyError,
        },
    )

    return Response(
        dumps(response_body), status=status_code, mimetype="application/json"
    )