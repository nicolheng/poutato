from app.main import bp
from flask import render_template

@bp.route('/')
def index():
    return render_template('index.html')

@bp.route('/profile')
def profile():
    return render_template('profile.html')
