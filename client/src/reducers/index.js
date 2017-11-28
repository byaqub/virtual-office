import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import MailListReducer from './mailListReducer';
import ActiveMailReducer from './activeMailReducer';

export default combineReducers({
  auth: authReducer,
  admins: adminsReducer,
  mailList: MailListReducer,
  activeMail: ActiveMailReducer
})
