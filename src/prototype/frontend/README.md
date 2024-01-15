Overview
This documentation provides guidelines on integrating the Next.js frontend with the Django backend to manage Virtual Machines (VMs) using RESTful API endpoints.

Prerequisites
Ensure you have [Next.js](https://nextjs.org/) installed in your project.

### Installing nextjs

```
 npx create-next-app@13 frontend \
  --ts true \
  --eslint true \
  --tailwindcss true \
  --src-dir true \
  --app-dir true \
  --router true \
  --alias false
```

### CORS (Cross-Origin Resource Sharing) 
`pip install django-cors-headers`


### Install Axios for making HTTP requests:

`npm install axios`

### Start Frontend (in one terminal)

`npm run dev`

Frontend can be found at : http://localhost:3000

### Start backend: (in another terminal)
`python manage.py runserver`

API can be found at: http://127.0.0.1:8000/api/VM/

Use of the API:
Under http://127.0.0.1:8000/api/VM/ you can view the VMs (GET) and add a new VM (POST). If you enter an existing DNS name, the existing VM will be edited.
Under [http://127.0.0.1:8000/api/VM/"id](http://127.0.0.1:8000/api/VM/%22id)" you can view the VM with the ID and delete it with a DELETE request.