#GraphQL Example

1. Install the dependencies:
```bash
npm install
```
2. To Run:
```bash
npm run-script run
```

3. Open the browser and go to
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

