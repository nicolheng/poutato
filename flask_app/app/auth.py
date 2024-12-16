from flask import Blueprint, render_template, redirect, url_for, request, flash, session
from werkzeug.security import generate_password_hash, check_password_hash
from app.models import *
from flask import Blueprint
from app.extensions import db
import datetime

bp = Blueprint('auth', __name__)

@bp.route('/login')
def login():
    return render_template('auth/login.html')

@bp.route('/signup')
def signup():
    return render_template('auth/sign-up.html')

@bp.route('/logout')
def logout():
    return 'Logout'

@bp.route('/signup', methods=['POST'])
def signup_post():
    # code to validate and add user to database goes here
    email = request.form.get('email')
    name = request.form.get('name')
    dobStr = request.form.get('dob')
    dob = datetime.date.strptime(dobStr, "%Y-%m-%d")
    gender = request.form.get('gender')
    contact = request.form.get('contact')
    password = request.form.get('psw')
    passwordConfirm = request.form.get('pswConfirm')
    type = request.form.get('type')
    
    if type == "student":
        user = student.query.filter_by(emailStud=email).first()
    else:
        user = teacher.query.filter_by(emailTeach=email).first()

    if user:
        flash('Email address already exists')
        return redirect(url_for('auth.signup'))
    elif (password != passwordConfirm):
        flash('Password does not match')
        return redirect(url_for('auth.signup'))
    else:
        if type == "student":
            new_user = student(emailStud=email, name=name, dob=dob, gender=gender, contact=contact, password=generate_password_hash(password, method='pbkdf2:sha256'))
        else:
            new_user = teacher(emailTeach=email, name=name, dob=dob, gender=gender, contact=contact, password=generate_password_hash(password, method='pbkdf2:sha256'))

        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for('auth.login'))
    
@bp.route('/login', methods=['POST'])
def login_post():
    email = request.form.get('email')
    password = request.form.get('psw')
    userStud = student.query.filter_by(emailStud=email).first()
    userTeach = teacher.query.filter_by(emailTeach=email).first()
    if userStud:
        if not (check_password_hash(userStud.password, password)):
            flash('Please check your login details and try again.')
            return redirect(url_for('auth.login'))
    elif userTeach:
        if not (check_password_hash(userTeach.password, password)):
            flash('Please check your login details and try again.')
            return redirect(url_for('auth.login'))
    else:
        flash('Please check your login details and try again.')
        return redirect(url_for('auth.login'))
    if userStud:
        session['type'] = "student"
        session['id'] = userStud.idStud
    else:
        session['type'] = "teacher"
        session['id'] = userTeach.idTeach
    flash("welcome")
    return redirect(url_for('main.index'))

@bp.route('/logout')
def logout():
    session.clear()
    return redirect(url_for("auth/login"))