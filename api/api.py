from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Product(Resource):
    def get(self):
            return {
                'product' : [
                    'Macbook Air',
                    'Macbook Pro',
                    'iPad Pro',
                    'Mac Pro'
                ]
            }

api.add_resource(Product, '/product')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)