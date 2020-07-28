from .. import db


class ReviewsModel(db.Model):

    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('property.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)
    user_review = db.Column(db.String(255), nullable=True)
    star_rating = db.Column(db.String(100), nullable=True)
    review_score = db.Column(db.String(100), nullable=True)
