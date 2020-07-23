from app.main.models.UsersModel import UsersModel
from app.main.utils.save_db import save_db


def register(data):
    user = UsersModel().query.filter(UsersModel.email == data['email']).all()

    if len(user) == 0:
        return True, data['email']
    else:
        return False, "You already have a Booking.com account registered to this email: " + data['email'] + "."


def reg_pwd(data):
    user = UsersModel().query.filter(UsersModel.email == data['email']).all()

    if len(user) == 0:

        new_user = UsersModel(
            email=data['email'],
            password=data['password'])

        save_db(new_user)
        return True, "Registration Successful"
    else:
        return False, "Registration Unsuccessful"
  
