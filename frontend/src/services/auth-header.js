export default function authHeader() {
    let token = JSON.parse(localStorage.getItem('token'));


    if (token) {
      return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }; // for Spring Boot back-end
      // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }
  