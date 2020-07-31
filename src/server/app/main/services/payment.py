from flask import Flask, render_template, request
from app.main import db
from app.main.utils.save_db import save_db
import razorpay
import json
import hmac
import hashlib
import uuid


def getOrderId(booking_info):
    client = razorpay.Client(auth=("rzp_test_atM2YwdkGw4EC6", "Ktopbx064CYZ2p3ijojsVrwr"))
    response = client.order.create(data=booking_info)
    print(response)
    return True, response


def getValidation(payment):
    print(payment)
    secret = "Ktopbx064CYZ2p3ijojsVrwr"
    key = bytes(secret, 'utf-8')
    msg = bytes(payment['razorpay_order_id'] + "|" + payment['razorpay_payment_id'], 'utf-8')
    dig = hmac.new(key=key,msg=msg,digestmod=hashlib.sha256)
    generated_signature = dig.hexdigest()
    print(generated_signature, "gen sig")
    print(payment['razorpay_signature'], "raz sig")
    if generated_signature == payment['razorpay_signature']:
        return True, "Success", "Payment Successful"
    else:
        return True, "Failure", "Payment Unsuccessful"
