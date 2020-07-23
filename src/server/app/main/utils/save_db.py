from app.main import db


def save_db(data):
    try:
        db.session.add(data)
        db.session.commit()
        return True
    except Exception as e:
        db.session.rollback()
        return False
