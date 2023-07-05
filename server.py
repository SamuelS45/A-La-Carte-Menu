from flask import Flask


app = Flask(__name__)

@app.route('/')
def hello_World():
    return '<p>Hello World python</p>'