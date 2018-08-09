from flask import Flask
app = Flask(__name__)


@app.route('/api/flask')
def flask():
    return 'Hello Flask!'
