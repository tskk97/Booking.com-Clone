from flask import Flask, request
from flask_restful import Resource, reqparse
from app.main.services.payment import getOrderId, getValidation
from app.main import db


class Payment_OrderId(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('amount', type=int, required=False)
    parser.add_argument('currency', type=str, required=False)
    parser.add_argument('receipt', type=str, required=False)
    parser.add_argument('payment_capture', type=str, required=False)

    @classmethod
    def post(self, prop_id):
        booking_info = Payment_OrderId.parser.parse_args()

        flag_request, response = getOrderId(booking_info)
        if flag_request:
            return response


class Payment_Validation(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('razorpay_order_id', type=str, required=False)
    parser.add_argument('razorpay_payment_id', type=str, required=False)
    parser.add_argument('razorpay_signature', type=str, required=False)
  
    @classmethod
    def post(self, prop_id):
        # print(request.json)
        payment = Payment_Validation.parser.parse_args()
        print(payment)

        flag_request, status, message = getValidation(payment)
        if flag_request:
            return { "status": status, "message": message }
