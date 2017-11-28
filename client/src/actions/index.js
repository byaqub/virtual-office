import axios from 'axios'

export const FETCH_USER = 'fetch_user';
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
}


export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token)
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
}

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => dispatch => {
  dispatch({
    type: FETCH_ADMINS
  })
}

export const FETCH_ACTIVE_MAIL = 'fetch_active_mail';
export const fetchActiveMail = (mail) => {
  return {
    type: FETCH_ACTIVE_MAIL,
    payload: mail
  }
}

export const DELETE_MAIL = 'delete_mail';
export const deleteMail = (activeMail) => {
  return {
    type: DELETE_MAIL,
    payload: activeMail
  }
}

export const FETCH_MAILS = 'fetch_mails';
export const fetchMails = (mail) =>  {
  return {
    type: FETCH_MAILS,
    payload: mail
  }
}

export const RESET_MAILS = 'reset_mails';
export const resetMails = () => {
  return {
    type: RESET_MAILS
  }
}