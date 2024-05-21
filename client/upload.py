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

if response.status_code == 201:
    received = response.json()
    f = open("README.txt" , "w+")
    f.write("This dataset is part of the data registry. For more information, visit: ")
    f.write("http://115.146.86.176/view/")
    f.write(received["id"])
    f.write(". ")
    f.write("The raw data is located at ")
    f.write(received["owner"])
    f.close()

print(response.status_code)