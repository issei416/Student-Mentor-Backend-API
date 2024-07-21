# 🎓 Mentor-Student Management System
This project is a web API for managing mentors and their assigned students. It allows for the assignment of students to mentors, retrieval of students assigned to a specific mentor, and updating of mentor-student relationships.

📑 Table of Contents
* 📦 Installation
* 🚀 Usage
* 🔗 API Endpoints
* 👨‍🏫 Get Students Assigned to a Mentor
* 📚 Assign Students to a Mentor
* 🔄 Update Mentor for a Student
* 🚧 Error Handling
* 🔐 Security
* 🤝 Contributing
* 📜 License

## 📦 Installation
1. Clone the repository:  
```
git clone https://github.com/issei416/Student-Mentor-Backend-API.git
cd mentor-student-management
```
2. Install dependencies:

```
npm install
```
3. Set up environment variables:
Create a .env file in the root directory and add the following:

```
MONGO_URL=your_mongodb_connection_string
PORT=your port number
```
4. Start the server:

```
npm start
```

## 🚀 Usage
To use the API, you need to have a running instance of the server. You can interact with the API using tools like Postman or any HTTP client library in your preferred programming language.

## 🔗 API Endpoints
👨‍🏫 Get Students Assigned to a Mentor
* Description: Retrieves a list of students assigned to a specific mentor.
* Method: GET
* URL: /mentors/:mentorId/students
* Request Parameters:
    * Path Parameters:
        * mentorId (string): The unique identifier of the mentor.
* Responses:
    * 200 OK: Successfully retrieved the list of assigned students.
    * Content: An array of student objects.
    * 404 Not Found: Mentor not found.
    * 500 Internal Server Error: An error occurred on the server.
## 📚 Assign Students to a Mentor
* Description: Assigns one or more students to a mentor.
* Method: PUT
* URL: /mentors/:mentorId/assign-students
* Request Parameters:
    * Path Parameters:
        * mentorId (string): The unique identifier of the mentor.
    * Body Parameters:
        * studentIds (array of strings): The unique identifiers of the students to be assigned.
* Responses:
    * 200 OK: Successfully assigned students to the mentor.
    * 404 Not Found: Mentor or students not found.
    * 500 Internal Server Error: An error occurred on the server.
## 🔄 Update Mentor for a Student
* Description: Updates the mentor assigned to a specific student and records the previous mentor.
* Method: PUT
* URL: /students/:studentId/update-mentor
* Request Parameters:
    * Path Parameters:
        * studentId (string): The unique identifier of the student.
    * Body Parameters:
        * mentorId (string): The unique identifier of the new mentor.
* Responses:
    * 200 OK: Successfully updated the student's mentor.
    * 404 Not Found: Student or mentor not found.
    * 500 Internal Server Error: An error occurred on the server.
## 🚧 Error Handling  
* 400 Bad Request: The request is malformed or missing required parameters.
* 404 Not Found: The specified resource (mentor or student) does not exist.
* 500 Internal Server Error: An unexpected error occurred on the server.

## API DOCUMENTATION URL 
[click here](https://documenter.getpostman.com/view/36384038/2sA3kUHhef) to visit the API docmunetation for this project.

## Server Deployed URL
[click here](https://student-mentor-api-grnr.onrender.com) to visit the deployed site.