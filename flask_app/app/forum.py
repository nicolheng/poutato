from flask import Blueprint, render_template
bp = Blueprint('forum', __name__)

@bp.route('/')
def index():
    return render_template('forum/forumList.html')

@bp.route('/HCI/')
def HCI():
    return render_template('forum/forumHCI.html')

@bp.route('/IOT/')
def IOT():
    return render_template('forum/forumIOT.html')