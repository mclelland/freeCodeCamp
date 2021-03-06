import { apiLocation } from '../../config/env.json';

import axios from 'axios';

const base = apiLocation + '/internal';
const baseUnauthenticated = apiLocation + '/unauthenticated';

axios.defaults.withCredentials = true;

export function postUnauthenticated(path, body) {
  return axios.post(`${baseUnauthenticated}${path}`, body);
}

function get(path) {
  return axios.get(`${base}${path}`);
}

export function post(path, body) {
  return axios.post(`${base}${path}`, body);
}

function put(path, body) {
  return axios.put(`${base}${path}`, body);
}

// function del(path) {
//   return axios.delete(`${base}${path}`);
// }

/** GET **/

export function getSessionUser() {
  return get('/user/get-session-user');
}

export function getUserProfile(username) {
  return get(`/api/users/get-public-profile?username=${username}`);
}

export function getShowCert(username, cert) {
  return get(`/certificate/showCert/${username}/${cert}`);
}

export function getUsernameExists(username) {
  return get(`/api/users/exists?username=${username}`);
}

export function getArticleById(shortId) {
  return get(`/n/${shortId}`);
}

/** POST **/
export function postChargeStripe(body) {
  return post('/donate/charge-stripe', body);
}

export function postCreateHmacHash(body) {
  return post(`/donate/create-hmac-hash`, body);
}

export function putUpdateLegacyCert(body) {
  return post('/update-my-projects', body);
}

export function postReportUser(body) {
  return post('/user/report-user', body);
}

export function postDeleteAccount(body) {
  return post('/account/delete', body);
}

export function postResetProgress(body) {
  return post('/account/reset-progress', body);
}

/** PUT **/

export function putUpdateMyAbout(values) {
  return put('/update-my-about', { ...values });
}

export function putUpdateMyUsername(username) {
  return put('/update-my-username', { username });
}

export function putUpdateMyProfileUI(profileUI) {
  return put('/update-my-profileui', { profileUI });
}

export function putUpdateUserFlag(update) {
  return put('/update-user-flag', update);
}

export function putUserAcceptsTerms(quincyEmails) {
  return put('/update-privacy-terms', { quincyEmails });
}

export function putUserUpdateEmail(email) {
  return put('/update-my-email', { email });
}

export function putVerifyCert(superBlock) {
  return put('/certificate/verify', { superBlock });
}

/** DELETE **/
