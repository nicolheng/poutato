from app.extensions import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class student(db.Model):
    idStud = db.Column(db.Integer, primary_key=True, autoincrement=True)
    emailStud = db.Column(db.String(100), unique=True)
    name = db.Column(db.String(1000))
    dob = db.Column(db.DateTime())
    gender = db.Column(db.String(1))
    contact = db.Column(db.String(15))
    password = db.Column(db.String(100))
    point = db.Column(db.Integer)

class teacher(db.Model):
    idTeach = db.Column(db.Integer, primary_key=True, autoincrement=True)
    emailTeach = db.Column(db.String(100), unique=True)
    name = db.Column(db.String(1000))
    dob = db.Column(db.DateTime())
    gender = db.Column(db.String(1))
    contact = db.Column(db.String(15))
    password = db.Column(db.String(100))

class poll(db.Model):
    idPoll = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idTeach = db.Column(db.Integer, ForeignKey(teacher.idTeach))
    ques = db.Column(db.String(100))

    teacher = relationship('teacher', foreign_keys='teacher.idTeach')

class choice(db.Model):
    idChoice = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idPoll = db.Column(db.Integer, ForeignKey(poll.idPoll))
    choice = db.Column(db.String(100))

    poll = relationship('poll', foreign_keys="poll.idPoll")

class result(db.Model):
    idPoll = db.Column(db.Integer, ForeignKey(poll.idPoll), primary_key=True)
    idChoice = db.Column(db.Integer, ForeignKey(choice.idChoice))
    idStud = db.Column(db.Integer, ForeignKey(student.idStud), primary_key=True)

    poll = relationship('poll', foreign_keys="poll.idPoll")
    choice = relationship('choice', foreign_keys="choice.idChoice")
    student = relationship('student', foreign_keys="student.idStud")

class quiz(db.Model):
    idQuiz = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idTeach = db.Column(db.Integer, ForeignKey(teacher.idTeach))
    quizName = db.Column(db.String(100))

    teacher = relationship('teacher', foreign_keys="teacher.idTeach")

class question(db.Model):
    idQues = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idQuiz = db.Column(db.Integer, ForeignKey(quiz.idQuiz))
    idTeach = db.Column(db.Integer, ForeignKey(teacher.idTeach))
    ques = db.Column(db.String(100))
    score = db.Column(db.Integer)

    quiz = relationship('quiz', foreign_keys="quiz.idQuiz")
    teacher = relationship('teacher', foreign_keys="teacher.idTeach")

class answer(db.Model):
    idAns = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idQues = db.Column(db.Integer, ForeignKey(question.idQues))
    answer = db.Column(db.String(100))
    correct = db.Column(db.Boolean)

    question = relationship('question', foreign_keys="question.idQues")

class take(db.Model):
    idStud = db.Column(db.Integer, ForeignKey(student.idStud), primary_key=True)
    idQuiz = db.Column(db.Integer, ForeignKey(quiz.idQuiz), primary_key=True)
    scoreTotal = db.Column(db.Integer)

    student = relationship('student', foreign_keys="student.idStud")
    quiz = relationship('quiz', foreign_keys="quiz.idQuiz")