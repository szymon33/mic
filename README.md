# Full stack web developer challenge
[![Build Status](https://travis-ci.org/szymon33/mic.svg?branch=master)](https://travis-ci.org/szymon33/mic)
[![Maintainability](https://api.codeclimate.com/v1/badges/48b56fc828cbb16190a4/maintainability)](https://codeclimate.com/github/szymon33/carwaw/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/48b56fc828cbb16190a4/test_coverage)](https://codeclimate.com/github/szymon33/carwaw/test_coverage)
 
## 1. Introduction

This is a code challenge I solved while I was taking apart of a recruitment process then expanded it a little bit. Code includes front-end and back-end applications working together among with 3rd party JSON API. No database is needed.

Technology stack:

- Rails 5
- Ruby 2.4
- AngularJS 1.7.2
- Rspec
- BDD
- API JSON
- implementation of simple 3rd party API client with token authentication
- JADE
- CSS
- Bootstrap
- NPM
- gulp project
- Rest architecture in both front-end and back-end
- MVC
- CI (Travis)
- no database

## 2. Task description

### User Story
1. As a user running the application

2. I can see some basic information about the company and submit my contact details for a call back

3. So that I can request a call back

### Acceptance criteria
Page displayed with a basic form to request a call back
Leads are received successfully by the API on form submission
Form fields are validating accordingly
A thank you message is displayed to let you know that your request was submitted successfully and that the Company will contact you
When form failed to submit due to being down or an error we want the user to see a nice message instead of a generic error.

## 3. Installation

### Back-end

1. `bundle install`
2. `rake db:create db:migrate`
3. `rails s`
4. If application is on you will see standard Rails page on `localhost:3000` when API is behind it.

### Front-end

1. `cd frontend`
2. `npm install`
3. `gulp start`
4. Launch server on `localhost:3001`

### Environments variables

Check .env.example
- MIC_ENV = 'development'
- LEAD_API_URI = 'http://mic-leads.dev-test.makeiteasy.com/api/v1'
- LEAD_API_PGUID="CFFBF53F-6D89-4B5B-8B36-67A97F18EDEB"
- LEAD_API_PACCNAME="MicDevtest"
- LEAD_API_PPARTNER="MicDevtest"
- LEAD_API_ACCESS_TOKEN=provide_by_szymon

Note: database is empty.

## 4. Test
```
    bundle exec rspec
```

Note: CodeClimate badge at the top of this file shows nearly 100% of test coverage

## 5. Screenshots

**Main page**

![Screentshot](https://raw.github.com/szymon33/mic/master/doc/screenshots/screenshot-1.png)

**Validation on client side**

![Screentshot](https://raw.github.com/szymon33/mic/master/doc/screenshots/screenshot-2.png)

**Validation on server side**

![Screentshot](https://raw.github.com/szymon33/mic/master/doc/screenshots/screenshot-3.png)

**'Thank you' message**

![Screentshot](https://raw.github.com/szymon33/mic/master/doc/screenshots/screenshot-4.png)

**Responsive view**

![Screentshot](https://raw.github.com/szymon33/mic/master/doc/screenshots/screenshot-5.png)
