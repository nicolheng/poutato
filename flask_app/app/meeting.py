from flask import Blueprint, render_template
from flask_login import login_required, current_user
bp = Blueprint('meeting', __name__)

@bp.route('/')
@login_required
def index():
    if current_user.isTeacher:
        return render_template('meeting/video_call_teacher.html', user=current_user)
    else:
        return render_template('meeting/video_call.html', user=current_user)

@bp.route('/breakout')
@login_required
def breakout():
    return render_template('meeting/breakoutroom.html', user=current_user)