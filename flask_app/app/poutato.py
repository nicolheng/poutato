from flask import Blueprint, render_template

bp = Blueprint('poutato', __name__)

@bp.route('/')
def index():
    return render_template('poutato/poutato.html')