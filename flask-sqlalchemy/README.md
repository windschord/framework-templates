## flask & SQLAlchemy template

This is basic template of flask with SQLAlchemy.

This template including below libraries.

* [flask](https://flask.palletsprojects.com)
* [flask-sqlalchemy](https://flask-sqlalchemy.palletsprojects.com)
* [flask-migrate](https://github.com/miguelgrinberg/Flask-Migrate)

## Setup
```bash
pip install -r requirements.txt
```

## Usage
* application management commands
```bash
$ export FLASK_APP=app.py

# run application
$ flask run

```


* database management commands
```bash
$ export FLASK_APP=app.py

# Initialise databse
$ flask db init

# migrate database (only generate migration file)
$ flask db migrate

# apply migration files to database
$ flask db upgrade

# rollback previous version
$ flask db downgrade
```
