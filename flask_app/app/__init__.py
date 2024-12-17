from flask import Flask
from config import Config
from app.extensions import db
from app.models import user
from flask_login import LoginManager

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize Flask extensions here
    db.init_app(app)

    # login mananger
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        # since the user_id is just the primary key of our user table, use it in the query for the user
        return user.query.get(int(user_id))
    
    # Register blueprints here
    from app.main import bp as main_bp
    app.register_blueprint(main_bp)

    from app.forum import bp as forum_bp
    app.register_blueprint(forum_bp, url_prefix='/forum')

    from app.poutato import bp as poutato_bp
    app.register_blueprint(poutato_bp, url_prefix='/poutato')

    from app.auth import bp as auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')

    from app.test import bp as test_bp
    app.register_blueprint(test_bp, url_prefix='/test')

    return app