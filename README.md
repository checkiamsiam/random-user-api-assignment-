## My assignment is to create an API that generates random user data. The random user data should have the following properties:

- Id
- gender
- name
- contact
- address
- photoUrl

## I was perform CRUD operations on the .json file using Express and the file system module. I was required to use the following endpoints to perform the operation:

### GET /user/random A random user

- Get a random user from the .json file

### GET /user/all A list of random users

- Get all the users from the .json file
- Limit the number of users using query parameter(s)

### POST /user/save Save a random user

- Save a user in the .json file
- validate the body and check if all the required properties are present in the body.

### PATCH /user/update Update a random user

- Update a user's information in the .json file using its id
- validate the user id

### PATCH /user/bulk-update update multiple users

- Update multiple users' information in the .json file
- Take an array of user ids and assign it to the body.
- validate the body.

### DELETE /user/ delete

- Delete a user from the .json file using its id
- validate the user id
