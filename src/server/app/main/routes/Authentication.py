from flask import Flask, request
from flask_restful import Resource, reqparse
from app.main import db
import jwt
import json
from app.main.services.authentication import user_login
from app.main.services.authentication import check_email


class Login(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('email', type=str, required=True)
    parser.add_argument('mode', type=str, required=True)
    parser.add_argument('password', type=str, required=False)

    @classmethod
    def post(self):
        data = Login.parser.parse_args()
        if data.mode == "Manual":
            flag_request, mail = check_email(data)

            if flag_request:
                return {'status': True, 'msg': "User Exists", 'mail': mail, 'mode': data.mode}
            else:
                return {'status': False, 'msg': "It looks like there is no account associated with this email address.", 'mode': data.mode}

        elif data.mode == "Google":
            flag_request, token, user_data = user_login(data)

            if flag_request:
                return {'status': True, 'msg': "Login Successful", 'token': str(token), 'user_data': user_data, 'mode': data.mode}
            else:
                return {'status': False, 'msg': "Incorrect Credentials", 'mode': data.mode}

class Login_Pwd(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('email', type=str, required=True)
    parser.add_argument('password', type=str, required=True)

    @classmethod
    def post(self):
        data = Login_Pwd.parser.parse_args()
        flag_request, token, user_data = user_login(data)

        if flag_request:
            return {'status': True, 'msg': "Login Successful", 'token': str(token), 'user_data': user_data}
        else:
            return {'status': False, 'msg': "Incorrect Credentials"}


class Logout(Resource):

    @classmethod
    def get(self):
        return {'status': True, 'msg': "Successful", 'token': ""}
