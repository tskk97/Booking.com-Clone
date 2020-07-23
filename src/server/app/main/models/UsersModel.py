from .. import db


class UsersModel(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    firstname = db.Column(db.String(100), nullable=True)
    lastname = db.Column(db.String(100), nullable=True)
    mobile_num = db.Column(db.String(50), nullable=True)
    credit_card = db.Column(db.String(50), nullable=True)
    exp_month = db.Column(db.String(50), nullable=True)
    exp_year = db.Column(db.String(50), nullable=True)
    cvv = db.Column(db.String(50), nullable=True)
    hash_token = db.Column(db.String(255), nullable=True)
    mail_validated = db.Column(db.String(10), nullable=True)


# class Oauth(db.Model):
#     __tablename__ = "oauth"

#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(100), nullable=False)
#     google_id = db.Column(db.String(255), nullable=False)