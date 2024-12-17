from flask import Blueprint, render_template,session, request
from app.extensions import db
from app.models import *

bp = Blueprint('test', __name__)

@bp.route('/')
def index():
    return render_template('test.html')

@bp.route('/poll')
def show_poll():
    return render_template('test.html', polls=poll.query.filter_by(idTeach=session['id']), show=True)

@bp.route('/poll')
def choose_poll(idPoll):
    return render_template('test.html', choices=choice.query.filter_by(idPoll = idPoll), chosen=True)

@bp.route('/vote')
def vote (userID, option):
    pass