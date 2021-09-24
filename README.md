# Getting Started 

```sh
npm install
npm start
```


### Requirements

* First Names & Last Name:
  - Fields cannot be empty.
  - Name can be only have the following chars(a-z, A-Z, - ',.)

* Email
  - Valid email address.
  - Field cannot be empty.

* Street Address:
  - Field cannot be empty.
  - Can have the following chars(a-z, A-Z, space, ., - )

* City:
  - Field cannot be empty.
  - Can have the following chars(a-z, A-Z, space)

* State:
  - Field cannot be empty.
  - This should be a dropdown.

* Zip:
  - Field cannot be empty.
  - Can have the following chars(0-9)

* DOB:
  - Field cannot be empty.
  - Has to be 18 and above.

* Gender:
  - Field cannot be empty.


** Install Cypress

```sh
npm install cypress
```

** Run tests

1. Start app with 

```sh
npm install
npm start
```
2. Start Cypress tests with:

```sh
npm run cypress:open
```