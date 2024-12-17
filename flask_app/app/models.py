from app.extensions import db
from sqlalchemy import ForeignKey
from flask_login import UserMixin

class user(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(100), unique=True)
    name = db.Column(db.String(1000))
    dob = db.Column(db.DateTime())
    gender = db.Column(db.String(1))
    contact = db.Column(db.String(15))
    password = db.Column(db.String(100))
    point = db.Column(db.Integer)
    isTeacher =db.Column(db.Boolean)

    takeStart = db.relationship("take", back_populates="take")
    pollStart = db.relationship("result", back_populates="resultuser")
    poutatoOwner = db.relationship("poutato", back_populates="poutatoOwned")
    pollOwn = db.relationship("poll", back_populates="pollMade")
    quizOwn = db.relationship("quiz", back_populates="quizMade")
    questionOwn = db.relationship("question", back_populates="questionMade")    

class poll(db.Model):
    idPoll = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id = db.Column(db.Integer, ForeignKey(user.id))
    ques = db.Column(db.String(100))

    pollMade = db.relationship("user", back_populates="pollOwn")
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
    id = db.Column(db.Integer, ForeignKey(user.id))

    resultPoll = db.relationship("poll", back_populates="pollStart")
    resultChoice = db.relationship("choice", back_populates="pollStart")
    resultuser = db.relationship("user", back_populates="pollStart")

class quiz(db.Model):
    idQuiz = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id = db.Column(db.Integer, ForeignKey(user.id))
    quizName = db.Column(db.String(100))

    takeStart = db.relationship("take", back_populates="takeQuiz")
    quizMade = db.relationship("user", back_populates="quizOwn")
    quizQuestion = db.relationship("question", back_populates="questionUnder")

class question(db.Model):
    idQues = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idQuiz = db.Column(db.Integer, ForeignKey(quiz.idQuiz))
    id = db.Column(db.Integer, ForeignKey(user.id))
    ques = db.Column(db.String(100))
    score = db.Column(db.Integer)

    questionUnder = db.relationship("quiz", back_populates="quizQuestion")
    questionMade = db.relationship("user", back_populates="questionOwn")
    questionAnswer = db.relationship("answer", back_populates="answerUnder")

class answer(db.Model):
    idAns = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idQues = db.Column(db.Integer, ForeignKey(question.idQues))
    answer = db.Column(db.String(100))
    correct = db.Column(db.Boolean)

    answerUnder = db.relationship("question", back_populates="questionAnswer")

class take(db.Model):
    idTake = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id = db.Column(db.Integer, ForeignKey(user.id))
    idQuiz = db.Column(db.Integer, ForeignKey(quiz.idQuiz))
    scoreTotal = db.Column(db.Integer)

    take = db.relationship("user", back_populates="takeStart")
    takeQuiz = db.relationship("quiz", back_populates="takeStart")

class poutato(db.Model):
    idPoutato = db.Column(db.Integer, ForeignKey(quiz.idQuiz), primary_key=True)
    id = db.Column(db.Integer, ForeignKey(user.id))
    hunger = db.Column(db.Integer)
    happiness = db.Column(db.Integer)
    health = db.Column(db.Integer)
    energy = db.Column(db.Integer)

    poutatoOwned = db.relationship("user", back_populates="poutatoOwner")