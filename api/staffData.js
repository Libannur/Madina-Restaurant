import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getStaff = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/staff.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// TODO: DELETE STAFF
const deletStaff = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/staff/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// TODO: GET SINGLE STAFF
const getSingleStaff = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/staff/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: CREATE STAFF
const createStaff = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/staff.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: VIEW STAFF DETAILS

const viewStaffDetails = (staffFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleStaff(staffFirebaseKey), getStaff(staffFirebaseKey)])
    .then(([positionObject, positionStaffsArray]) => {
      resolve({ ...positionObject, staffs: positionStaffsArray });
    }).catch((error) => reject(error));
});

// TODO: UPDATE STAFF
const updateStaff = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/staff/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getStaff,
  createStaff,
  deletStaff,
  getSingleStaff,
  updateStaff,
  viewStaffDetails,
};
