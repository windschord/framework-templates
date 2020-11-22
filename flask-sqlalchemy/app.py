from flask import Flask

from database import init_db
import models

app = Flask(__name__)
app.config.from_object('config.Config')

init_db(app)


@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
