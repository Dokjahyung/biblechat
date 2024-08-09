from flask import Flask, render_template, request, jsonify
from werkzeug.exceptions import BadRequestKeyError
app = Flask(__name__)

@app.route('/')
def index():
    # Render the template and pass the data
    return render_template('bible.html')

if __name__ == '__main__':
    app.run(debug=True)