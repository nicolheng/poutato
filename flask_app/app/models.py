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

    takeStart = db.relationship("take", back_populates="takeStud")
    pollStart = db.relationship("result", back_populates="resultStudent")
    poutatoOwner = db.relationship("poutato", back_populates="poutatoOwned")

class teacher(db.Model):
    idTeach = db.Column(db.Integer, primary_key=True, autoincrement=True)
    emailTeach = db.Column(db.String(100), unique=True)
    name = db.Column(db.String(1000))
    dob = db.Column(db.DateTime())
    gender = db.Column(db.String(1))
    contact = db.Column(db.String(15))
    password = db.Column(db.String(100))

    pollOwn = db.relationship("poll", back_populates="pollMade")
    quizOwn = db.relationship("quiz", back_populates="quizMade")
    questionOwn = db.relationship("question", back_populates="questionMade")

class poll(db.Model):
    idPoll = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idTeach = db.Column(db.Integer, ForeignKey(teacher.idTeach))
    ques = db.Column(db.String(100))

    pollMade = db.relationship("teacher", back_populates="pollOwn")
    choiceOwn = db.relationship("choice", back_populates="choiceMade")
    pollStart = db.relationship("result", back_populates="resultPoll")

class choice(db.Model):
    idChoice = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idPoll = db.Column(db.Integer, ForeignKey(poll.idPoll))
    choice = db.Column(db.String(100))

    choiceMade = db.relationship("poll", back_populates="choiceOwn")
    pollStart = db.relationship("result", back_populates="resultChoice")

class result(db.Model):
    idResult = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idPoll = db.Column(db.Integer, ForeignKey(poll.idPoll))
    idChoice = db.Column(db.Integer, ForeignKey(choice.idChoice))
    idStud = db.Column(db.Integer, ForeignKey(student.idStud))

    resultPoll = db.relationship("poll", back_populates="pollStart")
    resultChoice = db.relationship("choice", back_populates="pollStart")
    resultStudent = db.relationship("student", back_populates="pollStart")

class quiz(db.Model):
    idQuiz = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idTeach = db.Column(db.Integer, ForeignKey(teacher.idTeach))
    quizName = db.Column(db.String(100))

    takeStart = db.relationship("take", back_populates="takeQuiz")
    quizMade = db.relationship("teacher", back_populates="quizOwn")
    quizQuestion = db.relationship("question", back_populates="questionUnder")

class question(db.Model):
    idQues = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idQuiz = db.Column(db.Integer, ForeignKey(quiz.idQuiz))
    idTeach = db.Column(db.Integer, ForeignKey(teacher.idTeach))
    ques = db.Column(db.String(100))
    score = db.Column(db.Integer)

    questionUnder = db.relationship("quiz", back_populates="quizQuestion")
    questionMade = db.relationship("teacher", back_populates="questionOwn")
    questionAnswer = db.relationship("answer", back_populates="answerUnder")

class answer(db.Model):
    idAns = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idQues = db.Column(db.Integer, ForeignKey(question.idQues))
    answer = db.Column(db.String(100))
    correct = db.Column(db.Boolean)

    answerUnder = db.relationship("question", back_populates="questionAnswer")

class take(db.Model):
    idTake = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idStud = db.Column(db.Integer, ForeignKey(student.idStud))
    idQuiz = db.Column(db.Integer, ForeignKey(quiz.idQuiz))
    scoreTotal = db.Column(db.Integer)

    takeStud = db.relationship("student", back_populates="takeStart")
    takeQuiz = db.relationship("quiz", back_populates="takeStart")

class poutato(db.Model):
    idPoutato = db.Column(db.Integer, ForeignKey(quiz.idQuiz), primary_key=True)
    idStud = db.Column(db.Integer, ForeignKey(student.idStud))
    hunger = db.Column(db.Integer)
    happiness = db.Column(db.Integer)
    health = db.Column(db.Integer)
    energy = db.Column(db.Integer)

    poutatoOwned = db.relationship("student", back_populates="poutatoOwner")