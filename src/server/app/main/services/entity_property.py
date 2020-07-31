from app.main.models.PropertyModel import PropertyModel
from app.main.models.PropertyTypeModel import PropertyTypeModel
from app.main.models.CityModel import CityModel
from app.main.models.StatesModel import StatesModel
from app.main.models.CountryModel import CountryModel
from app.main.utils.save_db import save_db
from app.main import db


def get_property_details(user_data, prop_id):

    status = ""
    recommended_property_type = ""
    recommended_property_id = ""
    totalRooms = ""
    availableRooms = ""

    query = 'select property.id, property.property_name, property.description, property_types.property_type_name, city.city_name, states.state_name, country.country_name, property.img_path_url, property.adult_budget_per_night, property.child_budget_per_night, property.rating, property.review_score, property.all_day_reception, property.payment_mode, property.breakfast, property.lunch, property.dinner, property.total_rooms, property.available_rooms, property.occupied_rooms, GROUP_CONCAT(facilities.facility_name) as "facilities" from property join property_types on property_type_id = property_types.id join city on property.city_id = city.id join states on property.state_id = states.id join country on property.country_id = country.id join prop_facilities on property.id = prop_facilities.property_id join facilities on prop_facilities.facility_id = facilities.id where property.id = "%d" GROUP BY property.id;' % (int(prop_id)) 
    
    data_raw = db.engine.execute(query)

    data = []
    for item in data_raw:
        temp = {}    
        temp['id'] = item['id']
        recommended_property_id = item['id']
        temp['property_name'] = item['property_name']
        temp['description'] = item['description']
        temp['property_type_name'] = item['property_type_name']
        recommended_property_type = item['property_type_name']
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
        totalRooms = item['total_rooms']

        temp['available_rooms'] = item['available_rooms']
        availableRooms = item['available_rooms']

        temp['occupied_rooms'] = item['occupied_rooms']
        data.append(temp)

    query = 'select r.id, p.id as "property_id", u.id as "user_id", u.email, u.firstname, u.lastname, c.country_name, r.user_review, r.star_rating, r.review_score from reviews as r join property as p on r.property_id = p.id join users as u on r.user_id = u.id join country as c on r.country_id = c.id where p.id = "%d";' % (int(prop_id))

    data_raw = db.engine.execute(query)

    reviews = []
    for item in data_raw:
        temp = {}
        temp['id'] = item['id']
        temp['property_id'] = item['property_id']
        temp['user_id'] = item['user_id']
        temp['email'] = item['email']
        temp['firstname'] = item['firstname']
        temp['lastname'] = item['lastname']
        temp['country_name'] = item['country_name']
        temp['user_review'] = item['user_review']
        temp['star_rating'] = item['star_rating']
        temp['review_score'] = item['review_score']
        reviews.append(temp)

    query = 'select property.id, property.property_name, property_types.property_type_name, city.city_name, property.img_path_url, property.adult_budget_per_night, property.rating, property.review_score from property join property_types on property_type_id = property_types.id join city on property.city_id = city.id where property_types.property_type_name = "%s";' % (recommended_property_type) 


    data_raw = db.engine.execute(query)

    recommendations = []
    for item in data_raw:
        temp = {}
        if item['id'] != recommended_property_id:
            temp['id'] = item['id']
            temp['property_name'] = item['property_name']
            temp['property_type_name'] = item['property_type_name']
            temp['city_name'] = item['city_name']
            temp['img_path_url'] = item['img_path_url']
            temp['budget'] = item['adult_budget_per_night']
            temp['rating'] = item['rating']
            temp['review_score'] = item['review_score']
            recommendations.append(temp)

    print("done")

    state = False
    if user_data != None:
        for elem in user_data.values():
            if elem != None:
                state = True
    # print(user_data)
    print(state)
    if state == True:
        if (int(availableRooms) - int(user_data["num_rooms"])) >= 0:
            status = "Available"
        else:
            status = "Not Available"

    return True, data, reviews, recommendations, status
