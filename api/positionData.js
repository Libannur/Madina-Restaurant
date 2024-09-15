// import { clientCredentials } from '../utils/client';

// const endpoint = clientCredentials.databaseURL;

// const getPosition = () => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/positions.json`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data) {
//         resolve(Object.values(data));
//       } else {
//         resolve([]);
//       }
//     })
//     .catch(reject);
// });

// // FIXED: CREATE Position
// const createPosition = (payload) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/positions.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// // FIXME: GET SINGLE AUTHOR
// const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/positions/${firebaseKey}.json`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// // FIXME: DELETE Position
// const deleteSinglePosition = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/positions/${firebaseKey}.json`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// // FIXED: UPDATE Staff
// const updatePosition = (payload) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/positions/${payload.firebaseKey}.json`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

// // DONE: GET A SINGLE Staff's Position
// const getStaffPosition = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/books.json?orderBy="position_id"&equalTo="${firebaseKey}"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(Object.values(data)))
//     .catch(reject);
// });

// export {
//   getPosition,
//   createPosition,
//   getSingleAuthor,
//   deleteSinglePosition,
//   updatePosition,
//   getStaffPosition,
// };
