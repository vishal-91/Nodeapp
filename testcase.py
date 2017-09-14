import requests

json_data = {"username": 'rest'}

r = requests.post('http://127.0.0.1:8081/register', json=json_data)

print r

print r.content