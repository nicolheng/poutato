from flask import Blueprint, render_template, redirect, url_for, request, flash, session
from werkzeug.security import generate_password_hash, check_password_hash
from app.models import *
from flask import Blueprint
from app.extensions import db
from flask_login import login_user, logout_user
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
    logout_user()
    return redirect(url_for('auth.login'))

@bp.route('/signup', methods=['POST'])
def signup_post():
    # code to validate and add user to database goes here
    email = request.form.get('email')
    name = request.form.get('name')
    dobStr = request.form.get('dob')
    dob = datetime.datetime.strptime(dobStr, "%Y-%m-%d")
    gender = request.form.get('gender')
    contact = request.form.get('contact')
    password = request.form.get('psw')
    passwordConfirm = request.form.get('pswConfirm')
    type = request.form.get('type')
    userSignUp = user.query.filter_by(email=email).first()

    if userSignUp or (password != passwordConfirm):
        flash('Email address already exists')
        return redirect(url_for('auth.signup'))
    else:
        if type == "student":
            new_user = user(email=email, name=name, dob=dob, gender=gender, contact=contact, password=generate_password_hash(password, method='pbkdf2:sha256'), isTeacher=False)
        else:
            new_user = user(email=email, name=name, dob=dob, gender=gender, contact=contact, password=generate_password_hash(password, method='pbkdf2:sha256'), isTeacher=True)

        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for('auth.login'))
    
@bp.route('/login', methods=['POST'])
def login_post():
    email = request.form.get('email')
    password = request.form.get('psw')
    userLogin = user.query.filter_by(email=email).first()
    if userLogin and (check_password_hash(userLogin.password, password)):
        login_user(userLogin)
        return redirect(url_for('main.index'))
        
    else:
        flash('Please check your login details and try again.')
        return redirect(url_for('auth.login'))
    
