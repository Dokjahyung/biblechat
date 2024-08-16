from flask import Flask, render_template, request, jsonify
from werkzeug.exceptions import BadRequestKeyError
import json 
app = Flask(__name__)

@app.route('/')
def index():
    # Render the template and pass the data
    return render_template('bible.html')

@app.route('/ChatLog', methods=['POST'])
def processChatLog():
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Optionally, print the data to verify it's correct
        print(data)

        # Save the JSON data to a file
        with open('static/data/data.json', 'w') as json_file:
            json.dump(data, json_file)

        return jsonify({'status': 'success'}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 400


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