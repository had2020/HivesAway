from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from models import user_login

app = Flask(__name__)
#cors = CORS(app, origins='*')
CORS(app)

# to test getting data from flask with react
@app.route("/api/users", methods=['GET'])
def users():
    return jsonify(
        {
            "users": [
                'hadrian',
                'joe',
                'mark'
            ]
        }
    )

@app.route("/api/data", methods=['POST', 'GET'])
def handle_data():
    data = request.get_json() # get data sent from React
    print(f"Received data from React, in flask: {data}") # log
    return jsonify({'message': 'Data received successfully!'})

@app.route('/api/submit_login', methods=['POST'])
def receive_data():
    data = request.get_json() # get data sent from React
    print(f"Received Login data from React, in flask: {data}") # log
    user_login(data['username'], data['password'])
    return jsonify({'message': 'Login Data received successfully!'}) # last log for debug
    
if __name__ == "__main__":
    app.run(debug=True, port=8080) # local-debug only
    #app.run(host='192.168.0.49', port=443) # needs root acess - sudo -i / normal deploy
    #app.run(host='76.167.195.153', port=443) #failed
    #app.run(host='0.0.0.0', port=5000)  # Bind to all interfaces on port 5000
