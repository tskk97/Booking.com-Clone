from app.main.models.PropertyModel import PropertyModel
from app.main.models.PropertyTypeModel import PropertyTypeModel
from app.main.models.CityModel import CityModel
from app.main.models.StatesModel import StatesModel
from app.main.models.CountryModel import CountryModel
from app.main.utils.save_db import save_db
from app.main import db
import math


def get_default_search_result(city, page, per_page):
    query = 'select property.id, property.property_name, property.description, property_types.property_type_name, city.city_name, states.state_name, country.country_name, property.img_path_url, property.budget_per_night, property.rating, property.review_score, property.all_day_reception, property.payment_mode, property.breakfast, property.lunch, property.dinner from property join property_types on property_type_id = property_types.id join city on property.city_id = city.id join states on property.state_id = states.id join country on property.country_id = country.id where city_name = "%s";' % (city)

    data_raw = db.engine.execute(query)
    data = []
    for item in data_raw:
        temp = {}
        temp['id'] = item['id']
        temp['property_name'] = item['property_name']
        temp['description'] = item['description']
        temp['property_type_name'] = item['property_type_name']
        temp['city_name'] = item['city_name']
        temp['state_name'] = item['state_name']
        temp['country_name'] = item['country_name']
        temp['img_path_url'] = item['img_path_url']
        temp['budget_per_night'] = item['budget_per_night']
        temp['rating'] = item['rating']
        temp['review_score'] = item['review_score']
        temp['all_day_reception'] = item['all_day_reception']
        temp['payment_mode'] = item['payment_mode']
        temp['breakfast'] = item['breakfast']
        temp['lunch'] = item['lunch']
        temp['dinner'] = item['dinner']
        data.append(temp)
    
    total = len(data)
    total_pages = math.ceil(total/per_page)

    prev_page_end = (int(page) - 1) * per_page
    curr_page_end = int(page) * per_page

    new_data = data[prev_page_end:curr_page_end]
    
    query = "select * from facilities;"
    data_raw = db.engine.execute(query)
    facilities = []
    for item in data_raw:
        facilities.append(item['facility_name'])
    
    query = "select * from room_facilities;"
    data_raw = db.engine.execute(query)
    room_facilities = []
    for item in data_raw:
        room_facilities.append(item['room_facility_name'])
    
    query = "select * from property_types;"
    data_raw = db.engine.execute(query)
    prop_types = []
    for item in data_raw:
        prop_types.append(item['property_type_name'])
    
    star_rating = ['1', '2', '3', '4', '5']

    review_score = ['9', '8', '7', '6', '5', '4']

    
    return True, new_data, star_rating, prop_types, review_score, facilities, room_facilities, total, page, per_page, total_pages
