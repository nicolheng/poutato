from flask import Blueprint, render_template,session
from app.extensions import db
from app.models import *
import datetime

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return render_template('index.html')

@bp.route('/profile')
def profile():
    if (session["type"]=="student"):
        user = student.query.filter_by(idStud=session["id"]).first()
    else:
        user = teacher.query.filter_by(idTeach=session["id"]).first()
    return render_template('profile.html', user=user)