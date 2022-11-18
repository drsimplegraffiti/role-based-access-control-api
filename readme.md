<!-- Routes -->
#### Register
> http://localhost:7890/api/register POST

```js
{
    "name":"james",
    "password":"admin1234",
    "email":"james@gmail.com"
}
```

<!-- response -->
```js
{
    "message": "User created successfully",
    "user": {
        "name": "james",
        "email": "james@gmail.com",
        "password": "$2b$10$SFgSvCgLAYjCxoGJXqYuPe17ssJzaEjWdnFjS9TZ0dKlh44vhDBGK",
        "role": "user",
        "_id": "6377577fb35b295cc030fb51",
        "createdAt": "2022-11-18T09:59:27.683Z",
        "updatedAt": "2022-11-18T09:59:27.683Z",
        "__v": 0
    }
}
```

#### Login
> http://localhost:7890/api/login POST

```js
{
    "password":"admin1234",
    "email":"james@gmail.com"
}
```

<!-- response -->
```js
{
    "message": "User logged in successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc3NTc3ZmIzNWIyOTVjYzAzMGZiNTEiLCJpYXQiOjE2Njg3NjU2OTAsImV4cCI6MTY2ODc2OTI5MH0.Aurw26Hmm76yRP8DN9D3YqBxPxd_r6Nfv7ljK_gxFyA"
}
```


##### Access protected route
>  http://localhost:7890/api/protect GET
Authorization: Bearer Token

#### Access admin Only route
>  http://localhost:7890/api/protected-admin



