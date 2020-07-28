from flask import Flask, request
from flask_restful import Resource, reqparse
from app.main import db
from app.main.services.stays_search import get_default_search_result


class DefaultSearch(Resource):
    # parser = reqparse.RequestParser()
    # parser.add_argument('email', type=str, required=True)
    # parser.add_argument('mode', type=str, required=True)
    # parser.add_argument('password', type=str, required=False)

    
    @classmethod
    def get(self):
        city = request.args.get('city', default = "Bangalore", type = str)
        filters = request.args.get('filters', default = "false", type = str)
        page = request.args.get('page', default = 1, type = int)
        property_type = request.args.getlist('property_type', type=str)
        star_rating = request.args.getlist('star_rating')
        facility = request.args.getlist('facility')
        room_facility = request.args.getlist('room_facility')
        review_score = request.args.getlist('review_score')
        # request.args.getlist

        # temp = {}
        # for i in request.args:
        #     # if temp[i] not in temp.keys():
        #     temp[i] = []
        
        #     print(temp)
        

        # for i in request.args:
        #     temp[i] = temp[i].append(request.args.get(str(i)))
        #     # else:
        #     # temp[i] = temp[i].append(request.args.get(i))

        # print(temp)

        # print(property_type, star_rating)

        # property_type = property_type.split('0')
        # print(property_type, star_rating, facility, room_facility, review_score)
        # if(property_type):
        #     print("YES!")

        per_page = 8

        flag_request, new_data, star_rating, prop_types, review_score, facilities, room_facilities, total, page, per_page, total_pages  = get_default_search_result(city, page, per_page, property_type, star_rating, review_score, facility)
        if flag_request:
            return { 'msg': 'Request Success', 'data': new_data, 'star_rating': star_rating, 'prop_types': prop_types, 'review_score': review_score, 'facilities': facilities, 'room_facilities': room_facilities, "total_found": total, 'page': page, 'per_page': per_page, 'total_pages': total_pages }
        else:
            return { 'msg': 'Request Failed' }
    