# import resprctive blueprints and flask REstful resources
from .blueprint_test import bp
from app.main import api
from app.main.routes.Users import Register
from app.main.routes.Users import Reg_Pwd
from app.main.routes.Authentication import Login
from app.main.routes.Authentication import Login_Pwd
from app.main.routes.Authentication import Logout


def add_resources(app):
    """
    Method to add resources to app context

    Args:
        app (object): object of Flask representing the app in context
    """
    api.add_resource(Register, '/register')
    api.add_resource(Reg_Pwd, '/register/password')
    api.add_resource(Login, '/login')
    api.add_resource(Login_Pwd, '/login/password')
    api.add_resource(Logout, '/logout')
    

def register_blueprints(app):
    """
    Method to add blueprints to app context

    Args:
        app (object): object of Flask representing the app in context
    """
    app.register_blueprint(bp)
