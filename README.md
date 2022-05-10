# Breally

Breally is a small project based on React. It dynamically fetches data from API to render some HTML.

**Framework:** React v17 using React Router v5

**Build tool:** Parcel

**Developer tools:** eslint, prettier

**Improvements to be made:** RWD CSS library, animations, CSS in JS, fancy loading page

___

 To run it locally follow **these steps**:

 1. Clone the repo

        git clone https://github.com/mStybowski/recruitment_breally.git

2. cd into the directory

        cd recruitment_breally

3. Install the dependencies

        npm i

4. Run it locally with

        npm run dev

5. To build for production

        npm run build

Doesn't work? You probably need API credentials 😛 Create `auth.js` file in outer-most directory and export from there an object with `credentials` property which is string containing (you guessed it) credentials in [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication) format. 

Enjoy.


