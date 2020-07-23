from app.main.models.UsersModel import UsersModel
import datetime
import jwt
from app.main.settings import key


def check_email(data):    
    user = UsersModel().query.filter(UsersModel.email == data['email']).first()

    if user != None:
        return True, data['email']
    else:
        return False, ""


def user_login(data):
    user = UsersModel().query.filter(UsersModel.email ==
                                    data['email'] and UsersModel.password == data['password']).first()

    if user != None:

        user_data = []
        temp = {}

        temp["id"] = user.id
        temp["email"] = user.email
        temp["firstname"] = user.firstname
        temp["lastname"] = user.lastname
        temp["mobile_num"] = user.mobile_num

        user_data.append(temp)
        
        token_data = {
            "id": user.id,
            "expire": str(datetime.datetime.utcnow() + datetime.timedelta(days=1))
        }
        token = jwt.encode(token_data, key)
        return True, token, user_data
    else:
        return False, ""
