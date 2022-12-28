# GraphQL Example

1. Install the dependencies:
```bash
npm install
```
2. To Run:
```bash
npm run server
```

3. To Run database:
```bash
npm run json:server
```

4. Open the browser and go to
```
localhost:4000/graphsql
```

4. Test GraphQL
```javascript
{
  user(id: "23"){
    id,
    firstName,
    age
  }
}

```

Is expected to return this:

```javascript
{
  "data": {
    "user": {
      "id": "23",
      "firstName": "Bill",
      "age": 20
    }
  }
}
```

5. Other type of queries
```javascript

query findUser{
  Bill: user(id: "23"){
    id
    firstName
    age
    company{
      id
      name
    }
  }

  Apple: company(id: "1"){
		...companyDetails
    users {
      firstName
    }
  }

  Google: company(id: "2"){
		...companyDetails
    users {
      firstName
    }
  }
}


fragment companyDetails on Company {
  id
  name
  description
}
```

6. Mutations

```javascript
mutation {
  addUser(firstName: "Stephen", age: 26) {
    id
    firstName
    age
  }
}
```
