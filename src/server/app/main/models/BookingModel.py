from .. import db


class BookingModel(db.Model):

    __tablename__ = "bookings"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    property_id = db.Column(db.Integer, db.ForeignKey('property.id'), nullable=False)
    num_adults = db.Column(db.String(100), nullable=True)
    num_child = db.Column(db.String(100), nullable=True)
    num_rooms = db.Column(db.String(100), nullable=True)
    num_nights = db.Column(db.String(100), nullable=True)
    checkin_date = db.Column(db.String(100), nullable=True)
    checkin_month = db.Column(db.String(100), nullable=True)
    checkin_year = db.Column(db.String(100), nullable=True)
    checkout_date = db.Column(db.String(100), nullable=True)
    checkout_month = db.Column(db.String(100), nullable=True)
    checkout_year = db.Column(db.String(100), nullable=True)
    total_price = db.Column(db.String(100), nullable=True)
    payment_mode = db.Column(db.String(100), nullable=True)
    status = db.Column(db.String(100), nullable=True)
    order_id = db.Column(db.String(255), nullable=True)
    payment_id = db.Column(db.String(255), nullable=True)
