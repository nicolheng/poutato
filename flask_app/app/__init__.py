from flask import Flask
from config import Config
from app.extensions import db

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize Flask extensions here
    db.init_app(app)
    # Register blueprints here
    from app.main import bp as main_bp
    app.register_blueprint(main_bp)

    from app.forum import bp as forum_bp
    app.register_blueprint(forum_bp, url_prefix='/forum')

    from app.poutato import bp as poutato_bp
    app.register_blueprint(poutato_bp, url_prefix='/poutato')

    from app.auth import bp as auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')

    return app