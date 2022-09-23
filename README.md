# Backstock

Keep track of what you have on hand so you always know - even on the go!
Backstock is a home inventory app for tracking the items you have, their location, ideal quantities, and expiration dates! 

<p align="center">
  <a href="https://backstock.app/" target="_blank">
    <img src="" alt="Backstock"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/katiehom/backstock5" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=REPO&color=1f1591&style=plastic&logo=github&logo-color=white"/>
  </a>  
  <a href="https://backstock.app/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=WEBSITE&color=c90c64&style=plastic&logo=netlify&logo-color=white"/>
  </a>
</p>


## How It's Made:

**Tech used:** <strong>Node, Express, EJS, Passport, Bootstrap & JavaScript</strong>

Backstock is a full stack web application following MVC architecture. It runs on Node.js and Express for the backend and EJS to render the views. Users can sign up using passport authentication and begin adding new backstock items to their inventory. The inventory list can be sorted by several columns and filtered through typing in the Search bar. Individual items can be edited if quantities or other information needs to be updated. Conditional rendering helps users know when items need to be restocked or when they are expired.

## Optimizations
Future iterations might include table sorting by expiration date, notifying users when expiration dates are approaching, filtering based on multiple categories, creating a shopping list, and automatically adding out-of-stock items to the shopping list.

## Lessons Learned:

I learned a lot about working with Bootstrap classes and when this was advantageous, and when it was better to use my own styling. Sorting tables, specifically dates, proved to be more difficult than first anticipated. Date rendering also presented challenges, and I ended up using Day.js which is a suggested replacement for the ever-popular Moment.js, which is considered legacy.

## Other Projects:

<table bordercolor="#66b2b2">
  
  <tr>
       <td width="33.3%" valign="top">
<a target="_blank" href="https://github.com/katiehom/katie-hom">Portfolio</a>
        <br />
        <a target="_blank" href="https://github.com/katiehom/katie-hom">
          <img src="https://user-images.githubusercontent.com/52755177/180623739-fbf4f9ef-d1e2-4cb3-8717-0f139b4af221.gif" width="100%" alt="Portfolio"/>
        </a>
    </td>
        <td width="33.3%"  style="align:center;" valign="top">
<a target="_blank" href="https://theoryrevolution.com">Theory Revolution</a>
        <br />
      <a target="_blank" href="https://theoryrevolution.com">
            <img src="https://user-images.githubusercontent.com/52755177/180623890-6179f79a-82f7-4336-bf2f-adaedaa1eb44.gif" width="100%" alt="Theory Revolution"/>
      </a>
    </td>
    <td width="33.3%" valign="top">
<a target="_blank" href="https://github.com/katiehom/ben-folds-api">Ben Folds Songs</a>
      <br />
        <a target="_blank" href="https://github.com/katiehom/ben-folds-api">
          <img src="https://user-images.githubusercontent.com/52755177/186995784-efe50111-b278-425a-ba54-aac9779028d7.gif" width="100%" alt="Ben Folds Songs"/>
        </a>
    </td>
  </tr>
</table>


# Introduction

A Simple ToDo App is built using the MVC Architecture, we have also implemented "authorization" so folx can sign up, customize & personalize the app 

---

> Be sure to add that lovely star 😀 and fork it for your own copy

---

# Objectives

- It's a beginner level app created to understand how MVC concept and logins are added

---

# Who is this for? 

- It's for beginners & intermediates with little more experience, to help understand the various aspects of building a node app with some complex features

---

# Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

# Install all the dependencies or node packages used for development via Terminal

`npm install` 

---

# Things to add

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` 
 ---
 
 Have fun testing and improving it! 😎


