# LifeVault API Documentation

## Authentication

### Register
`POST /api/auth/signup/email`
Registers a new user.

**Body Parameters**
- `email`: User's email.
- `password`: User's password.
- `hiveUsername` (optional): Hive Keychain username.

### Login
`POST /api/auth/login/email`
Logs a user in and returns a JWT token.

**Body Parameters**
- `email`: User's email.
- `password`: User's password.

## File Management

### Upload File
`POST /api/upload`
Uploads a file and returns its IPFS CID.

### Retrieve File
`GET /api/gallery/:account`
Retrieves file metadata by hiveUsername.

### Delete File
`DELETE /api/gallery/delete/:ipfsHash`
Unpins a file from IPFS.

### Rename File
`PUT /gallery/rename/:ipfsHash`
Renames a file from IPFS & returns the updated metadata along with the IPFS CID.

## Additionals

### Rate our dAPP
`POST /apl/ratings`
Rating from users.

### Contact US
`POST /contact`
Contact Us.

### Task Reminder
`POST /tasks`
Task reminder for user.

---

Please see each endpoint for detailed information on request/response formats and required headers.
