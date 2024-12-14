from flask import render_template
from app.forum import bp

@bp.route('/')
def index():
    return render_template('forum/forumList.html')

@bp.route('/HCI/')
def HCI():
    return render_template('forum/forumHCI.html')

@bp.route('/IOT/')
def IOT():
    return render_template('forum/forumIOT.html')