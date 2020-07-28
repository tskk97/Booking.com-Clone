from flask import Flask, request
from flask_restful import Resource, reqparse
from app.main import db
from app.main.services.entity_property import get_property_details


class GetPropertyDetails(Resource):
    
    @classmethod
    def get(self, prop_id):

        flag_request, data, reviews, recommendations  = get_property_details(prop_id)
        if flag_request:
            return { 'msg': 'Request Success', 'data': data, 'reviews': reviews, 'recommendations': recommendations}
        else:
            return { 'msg': 'Request Failed' }
    