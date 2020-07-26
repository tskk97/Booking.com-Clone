from .. import db


class PropertyModel(db.Model):

    __tablename__ = "property"

    id = db.Column(db.Integer, primary_key=True)
    property_name = db.Column(db.String(100), nullable=True)
    description = db.Column(db.String(255), nullable=True)
    property_type_id = db.Column(db.Integer, db.ForeignKey('property_types.id'), nullable=True)
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'), nullable=True)
    state_id = db.Column(db.Integer, db.ForeignKey('states.id'), nullable=True)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=True)
    img_path_url = db.Column(db.String(255), nullable=True)
    budget_per_night = db.Column(db.String(100), nullable=True)
    rating = db.Column(db.String(100), nullable=True)
    review_score = db.Column(db.String(100), nullable=True)
    all_day_reception = db.Column(db.Boolean, nullable=True, default=False)
    payment_mode = db.Column(db.String(100), nullable=True)
    breakfast = db.Column(db.Boolean, nullable=True, default=False)
    lunch = db.Column(db.Boolean, nullable=True, default=False)
    dinner = db.Column(db.Boolean, nullable=True, default=False)
