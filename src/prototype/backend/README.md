### Start Backend:

To run the Python VM you may need permission to execute shell scripts:
* Windows: `Set-ExecutionPolicy RemoteSigned -Scope Process`
* Linux: chmod +x `./env/Scripts/activate`
* Mac: probably like Linux

_Starting the VM:_
* `.\env\Scripts\activate`

_Start backend:_
* `python manage.py runserver`

_If you get an error message saying that Python was not found, you must reinstall the env using the following steps:_
* `rm -r env`
* `python -m venv env`
* `.\env\Scripts\activate`
* `python -m pip install django`
* `python -m pip install djangorestframework`
* `python -m pip install django-cors-headers`
* then run the server

### Use of the API:
Under _http://127.0.0.1:8000/api/VM/_ you can view the VMs (GET) and add a new VM (POST). If you enter an existing DNS name, the existing VM will be edited.
If the allocationStage is set to 'in_use', the variable awarded_on is automatically set to the current time; in any other state, it is set to null again.
Under _http://127.0.0.1:8000/api/VM/"id"_  you can view the VM with the ID and delete it with a DELETE request.
