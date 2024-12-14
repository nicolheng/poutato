from flask import Blueprint

bp = Blueprint('poutato', __name__)

from app.poutato import routes