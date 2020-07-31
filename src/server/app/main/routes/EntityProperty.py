from flask import Flask, request
from flask_restful import Resource, reqparse
from app.main import db
from app.main.services.entity_property import get_property_details


class GetPropertyDetails(Resource):
    parser = reqparse.RequestParser()
    # parser.add_argument('checkin_date', type=str, required=False)
    # parser.add_argument('checkin_month', type=str, required=False)
    # parser.add_argument('checkin_year', type=str, required=False)
    # parser.add_argument('checkout_date', type=str, required=False)
    # parser.add_argument('checkout_month', type=str, required=False)
    # parser.add_argument('checkout_year', type=str, required=False)
    parser.add_argument('num_rooms', type=int, required=False)
    parser.add_argument('num_adults', type=int, required=False)
    parser.add_argument('num_child', type=int, required=False)


    @classmethod
    def get(self, prop_id):
        user_data = GetPropertyDetails.parser.parse_args()
        print(user_data)
        flag_request, data, reviews, recommendations, status  = get_property_details(user_data, prop_id)
        if flag_request:
            return { 'msg': 'Request Success', 'data': data, 'reviews': reviews, 'recommendations': recommendations, 'status': status }
        else:
            return { 'msg': 'Request Failed' }

    def post(self, prop_id):
        user_data = GetPropertyDetails.parser.parse_args()
        print(user_data)
        flag_request, data, reviews, recommendations, status  = get_property_details(user_data, prop_id)
        if flag_request:
            return { 'msg': 'Request Success', 'data': data, 'reviews': reviews, 'recommendations': recommendations, 'status': status }
        else:
            return { 'msg': 'Request Failed' }
    