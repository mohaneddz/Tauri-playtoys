from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/hello')
def hello():
    return "hello world"

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return f"You accessed: {request.url}"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
