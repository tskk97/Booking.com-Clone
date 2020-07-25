from .. import db


class BedroomTypeModel(db.Model):

    __tablename__ = "bedroom_type"

    id = db.Column(db.Integer, primary_key=True)
    bedroom_type_name = db.Column(db.String(100), nullable=False)
   