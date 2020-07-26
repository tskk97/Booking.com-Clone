from .. import db


class PropertyTypeModel(db.Model):

    __tablename__ = "property_types"

    id = db.Column(db.Integer, primary_key=True)
    property_type_name = db.Column(db.String(100), nullable=False)
   