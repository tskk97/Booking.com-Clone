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

    @classmethod
    def post(self):
        data = Login.parser.parse_args()
        flag_request, mail = check_email(data)

        if flag_request:
            return {'status': True, 'msg': "User Exists", 'mail': mail}
        else:
            return {'status': False, 'msg': "User Doesn't Exist"}

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
