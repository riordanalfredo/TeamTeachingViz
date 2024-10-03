import json
from flask_cors import CORS
from flask import Flask, Blueprint, jsonify, request
import pandas as pd
from coteaching.visualiser import read_csv_by_time, get_matrix, get_all_ped_by_teacher, get_complete_coteach_data, get_textual_description
import os
from dotenv import load_dotenv
load_dotenv()

pyserver = Blueprint('pyserver', __name__)

DIRECTORY = os.getenv('PROD_DIR') if os.getenv('MODE') == 'production' else  os.getenv('LOCAL_DIR') 
IP_ADDRESS = os.getenv('IP_ADDRESS', "localhost")
PY_PORT = os.getenv('PY_PORT', 5003)

# CO-TEACHING ROUTER

@ pyserver.route("/get_coteach_matrix_data", methods=['GET'])
def give_coteach_matrix_data():
    """
    This function is to return the testing data for coteach data.
        :return:
        The format of returned json is 
        {"RED": {"authoritative": int, ...}, ...: {}, }
    """
    session_id = request.args['sessionId']
    start_time = request.args["start"]
    end_time = request.args["end"]

    data = read_csv_by_time(DIRECTORY, session_id, start_time, end_time)
    # result = get_all_ped_by_teacher(data, teacher)
    result = get_matrix(data)

    return jsonify(result)


@ pyserver.route("/get_complete_coteach_data", methods=['GET'])
def give_complete_coteach_data():
    """
    """
    session_id = request.args['sessionId']
    start_time = request.args["start"]
    end_time = request.args["end"]

    data = read_csv_by_time(DIRECTORY, session_id, start_time, end_time)
    # result = get_all_ped_by_teacher(data, teacher)
    result = get_complete_coteach_data(data)

    return jsonify(result)


@ pyserver.route("/get_coteach_ped_data_by_ta", methods=['GET'])
def give_coteach_by_ta_data():
    """
    This function is to return the testing data for coteach data.
        :return:
        The format of returned json is 
        {"RED": {"authoritative": int, ...}, ...: {}, }
    """
    session_id = request.args['sessionId']
    start_time = request.args["start"]
    end_time = request.args["end"]
    ta_colour = request.args['taColour'] # must be in all capital letters

    data = read_csv_by_time(DIRECTORY, session_id, start_time, end_time)
    result = get_all_ped_by_teacher(data, ta_colour)

    return jsonify(result)

@ pyserver.route("/get_coteach_story", methods=['GET'])
def give_coteach_story():
    session_id = request.args['sessionId']
    start_time = request.args["start"]
    end_time = request.args["end"]
    ta_colour = request.args['taColour'] # must be in all capital letters
    spatial_type= request.args['spatialType'] # by default, it is None

    data = read_csv_by_time(DIRECTORY, session_id, start_time, end_time)
    result = get_textual_description(data, ta_colour, spatial_type)

    return jsonify(result)
app = Flask(__name__)
app.register_blueprint(pyserver, url_prefix='/pyserver')



CORS(app)

if __name__ == '__main__':
    app.run(host=IP_ADDRESS, port=PY_PORT)
