from .. import db


class StatesModel(db.Model):

    __tablename__ = "states"

    id = db.Column(db.Integer, primary_key=True)
    state_name = db.Column(db.String(100), nullable=False)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)
