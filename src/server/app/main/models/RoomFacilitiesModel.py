from .. import db


class RoomFacilitiesModel(db.Model):

    __tablename__ = "room_facilities"

    id = db.Column(db.Integer, primary_key=True)
    room_facility_name = db.Column(db.String(100), nullable=False)
   