from flask import Flask
from flask import request


app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    return 'hello world' 
app.run()