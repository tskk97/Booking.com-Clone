from flask import Flask, request
from flask_restful import Resource, reqparse
from app.main import db
from app.main.services.users import manualRegister
from app.main.services.users import googleRegister
from app.main.services.users import reg_pwd

from app.main.services.authentication import user_login


class Register(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('email', type=str, required=True)
    parser.add_argument('mode', type=str, required=True)
    parser.add_argument('password', type=str, required=False)

    @classmethod
    def post(self):
        data = Register.parser.parse_args()
        if data.mode == "Manual":
            flag_register_request, msg = manualRegister(data)
            if flag_register_request:
                return {'status': True, 'msg': msg, 'mode': data.mode}
            else:
                print(msg)
                return {'status': False, 'msg': msg, 'mode': data.mode}   

        elif data.mode == "Google":
            flag_register_request, msg = googleRegister(data)
            
            if flag_register_request:
                flag_login_request, token, user_data = user_login(data)

                if flag_login_request:
                    return {'status': True, 'msg': "Login Successful", 'token': str(token), 'user_data': user_data, 'mode': data.mode}
                else:
                    return {'status': False, 'msg': "Incorrect Credentials", 'mode': data.mode}
            else:
                return {'status': False, 'msg': msg}   



class Reg_Pwd(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('email', type=str, required=True)
    parser.add_argument('password', type=str, required=True)

    @classmethod
    def post(self):
        data = Reg_Pwd.parser.parse_args()
        flag_register_request, msg = reg_pwd(data)

        if flag_register_request:
            flag_login_request, token, user_data = user_login(data)

            if flag_login_request:
                return {'status': True, 'msg': "Login Successful", 'token': str(token), 'user_data': user_data}
            else:
                return {'status': False, 'msg': "Incorrect Credentials"}
        else:
            return {'status': False, 'msg': msg}   