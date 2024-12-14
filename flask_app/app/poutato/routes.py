from app.poutato import bp
from flask import render_template

@bp.route('/')
def index():
    return render_template('poutato/poutato.html')
