# -*- coding: utf-8 -*-

class DevelopmentConfig:

    # Flask configs
    DEBUG = True

    # SQLAlchemy configs
    SQLALCHEMY_DATABASE_URI = 'sqlite:///app.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True


Config = DevelopmentConfig
