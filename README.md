# productApi

api to create and display products using express

built on NODEjs and express

hosted on https://pdapi.herokuapp.com/

base url https://pdapi.herokuapp.com/

to view list of products
GET request v1/products

response{
id
name
price
}

to view single product
GET request v1/products/:id

to create product
POST request v1/products

json_body_request:{
  name
  price
  descripton
  category
  image
  color
}
