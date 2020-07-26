from .. import db


class FacilitiesModel(db.Model):

    __tablename__ = "facilities"

    id = db.Column(db.Integer, primary_key=True)
    facility_name = db.Column(db.String(100), nullable=False)
   