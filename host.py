from flask import Flask, render_template, request, jsonify
from werkzeug.exceptions import BadRequestKeyError
app = Flask(__name__)

@app.route('/')
def index():
    # Render the template and pass the data
    return render_template('bible.html')

@app.route('/about.html')
def about():
    #render about page
    return render_template('about.html')

@app.route('/donate.html')
def donate():
    #render donate page
    return render_template('donate.html')

if __name__ == '__main__':
    app.run(debug=True)