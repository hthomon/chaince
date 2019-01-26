jwt = require('jwt-ed25519-tn')

var message = `{"key":"cnc6666666666666","iat":1599999999}`
var secret = 'CNC88888888888888888888888888888'
var correct = 'eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJpYXQiOjE1OTk5OTk5OTksImtleSI6ImNuYzY2NjY2NjY2NjY2NjYifQ.RJzhQwRI6g0YZg-Mh201G7aEGcpxm8vN8wf-rgpK6UySeMKRgUHzZV6WLxc93PptrKNb4CLW8XQo48OYR-stDw'

var token = jwt.sign(message,secret)

console.log(token)
console.log(correct)
