from flask import Blueprint, render_template
bp = Blueprint('quiz', __name__)

@bp.route('/')
def index():
    return render_template('quiz/quiz_interface.html')

@bp.route('/game')
def game():
    return render_template('quiz/quiz_game.html')
