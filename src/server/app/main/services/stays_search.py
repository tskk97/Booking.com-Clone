from app.main.models.PropertyModel import PropertyModel
from app.main.models.PropertyTypeModel import PropertyTypeModel
from app.main.models.CityModel import CityModel
from app.main.models.StatesModel import StatesModel
from app.main.models.CountryModel import CountryModel
from app.main.utils.save_db import save_db
from app.main import db
import math


def get_default_search_result(city, page, per_page, property_type_name, rating, review_score, facilities):

    # property_type_name = tuple(property_type_name)

    print(property_type_name, rating, review_score, facilities)
    query = 'select property.id, property.property_name, property.description, property_types.property_type_name, city.city_name, states.state_name, country.country_name, property.img_path_url, property.adult_budget_per_night, property.child_budget_per_night, property.rating, property.review_score, property.all_day_reception, property.payment_mode, property.breakfast, property.lunch, property.dinner, property.total_rooms, property.available_rooms, property.occupied_rooms, GROUP_CONCAT(facilities.facility_name) as "facilities" from property join property_types on property_type_id = property_types.id join city on property.city_id = city.id join states on property.state_id = states.id join country on property.country_id = country.id join prop_facilities on property.id = prop_facilities.property_id join facilities on prop_facilities.facility_id = facilities.id where city_name = "%s" GROUP BY property.id;' % (city) 
    
    
    data_raw = db.engine.execute(query)
    # data = [dict(row) for row in data_raw]

    data = []
    for item in data_raw:
        flag = False
        temp = {}
        if len(property_type_name) != 0:
            if item['property_type_name'] not in property_type_name:
                flag = True
            
        if len(rating) != 0:
            if item['rating'] not in rating:
                flag = True
        
        if len(review_score) != 0:
            if item['review_score'] < min(review_score):
                flag = True
        
        if len(facilities) != 0:
            db_facilities = item['facilities'].split(",")
            for eachFacility in facilities:
                eachFacility = eachFacility.split("%20")
                " ".join(eachFacility)

            if(all(facility not in facilities for facility in db_facilities)):
                flag = True
        
        if flag == False:
            temp['id'] = item['id']
            temp['property_name'] = item['property_name']
            temp['description'] = item['description']
            temp['property_type_name'] = item['property_type_name']
            temp['city_name'] = item['city_name']
            temp['state_name'] = item['state_name']
            temp['country_name'] = item['country_name']
            temp['img_path_url'] = item['img_path_url']
            temp['adult_budget_per_night'] = item['adult_budget_per_night']
            temp['child_budget_per_night'] = item['child_budget_per_night']
            temp['rating'] = item['rating']
            temp['review_score'] = item['review_score']
            temp['all_day_reception'] = item['all_day_reception']
            temp['payment_mode'] = item['payment_mode']
            temp['breakfast'] = item['breakfast']
            temp['lunch'] = item['lunch']
            temp['dinner'] = item['dinner']
            temp['facilities'] = item['facilities'].split(",")
            temp['total_rooms'] = item['total_rooms']
            temp['available_rooms'] = item['available_rooms']
            temp['occupied_rooms'] = item['occupied_rooms']
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


# Basic:
# select property.id, property.property_name, property.description, property_types.property_type_name, city.city_name, states.state_name, country.country_name, property.img_path_url, property.budget_per_night, property.rating, property.review_score, property.all_day_reception, property.payment_mode, property.breakfast, property.lunch, property.dinner from property join property_types on property_type_id = property_types.id join city on property.city_id = city.id join states on property.state_id = states.id join country on property.country_id = country.id where city_name = "%s";' % (city)

# To get all the facilities of each property:
# select property.id, property.property_name, GROUP_CONCAT(facilities.facility_name) as "facilities" from property join prop_facilities on property.id = prop_facilities.property_id join facilities on prop_facilities.facility_id = facilities.id GROUP BY property.id;

# To apply filters on facilities:
# select property.id, property.property_name, GROUP_CONCAT(facilities.facility_name) as "facilities" from property join prop_facilities on property.id = prop_facilities.property_id join facilities on prop_facilities.facility_id = facilities.id where facilities.facility_name = "Free WIFI" GROUP BY property.id;

# To show combined Results:
# select property.id, property.property_name, property.description, property_types.property_type_name, city.city_name, states.state_name, country.country_name, property.img_path_url, property.budget_per_night, property.rating, property.review_score, property.all_day_reception, property.payment_mode, property.breakfast, property.lunch, property.dinner, GROUP_CONCAT(facilities.facility_name) as "facilities" from property join property_types on property_type_id = property_types.id join city on property.city_id = city.id join states on property.state_id = states.id join country on property.country_id = country.id join prop_facilities on property.id = prop_facilities.property_id join facilities on prop_facilities.facility_id = facilities.id GROUP BY property.id where city_name = "%s" AND where  GROUP BY property.id;' % (city);