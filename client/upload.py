import requests

print("Please enter datasets details")

name = input("Dataset name: ")
description = input("Dataset description: ")
method = input("Method (WGS, LLS, Spatial, Methyl, miRNA): ")
file_path = input("File path: ")
owner = input("Dataset owner: ")
portal = input("Portals: ")

headers = {'ContentType': 'application/json'}

location = "http://115.146.86.176/api/datasets"

data = {"name": name, "description": description, "method": method, "file_path": file_path, "owner": owner}


response = requests.post(location, headers=headers, json=data)

print(response)