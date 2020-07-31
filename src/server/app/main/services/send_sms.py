# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'AC9712aa898dfa84fa170f78d0d5d2d2ef'
auth_token = '3e2706d9d9f377c80f6c8f6a05457631'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Hey Sai, it's your first Twilio SMS",
                     from_='+17722526942',
                     to='+919559695847'
                 )

print(message.sid)