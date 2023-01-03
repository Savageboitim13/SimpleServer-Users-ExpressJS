# ExpressJS-NodeJS-SimpleServer

A simple server set up.

## Functions

You can access all these URLs.

```
http://127.0.0.1:4208 -> Mainpage
http://127.0.0.1:4208/users -> User List
http://127.0.0.1:4208/users/new -> Create a New user
http://127.0.0.1:4208/users/id (id: 0, 1, 2) -> Access all users (3 already defined)
http://127.0.0.1:4208/users?name=Tom -> Create URL params
```

## Usage

## NOTE

If you use the rest client API:

1. Install VSC Rest Extension.
2. Run the command from the requests.rest file
3. Look at your terminal to see the output and at the Response tab in VSC

```bash
Copy code:
gh repo clone Savageboitim13/SimpleServer-Users-ExpressJS

Path: ~/SimpleServer

Install dependencies:
npm install

Run server:
npm run devStart

Navigate to the URLs.
```
