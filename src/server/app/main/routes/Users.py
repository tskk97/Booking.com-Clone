from flask import Flask, request
from flask_restful import Resource, reqparse
from app.main import db
from app.main.services.users import register
from app.main.services.users import reg_pwd


class Register(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('email', type=str, required=True)

    @classmethod
    def post(self):
        data = Register.parser.parse_args()
        flag_request, msg = register(data)

        if flag_request:
            return {'status': True, 'msg': msg}
        else:
            return {'status': False, 'msg': msg}   

class Reg_Pwd(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('email', type=str, required=True)
    parser.add_argument('password', type=str, required=True)

    @classmethod
    def post(self):
        data = Reg_Pwd.parser.parse_args()
        flag_request, msg = reg_pwd(data)

        if flag_request:
            return {'status': True, 'msg': msg}
        else:
            return {'status': False, 'msg': msg}   