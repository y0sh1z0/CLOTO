/**
 * エンドポイントの取得：this.$endpoint('エンドポイント名', ['パラメータ1', 'パラメータ2', 'パラメータ3']);
 */

/**
 * パラメータ置換用の記号
 */
const replaceChar = ['#', '*', '$'];

/**
 * API一覧
 */
const home = '/';
const regenerateToken = '/api/regenerate-token';
const contact = '/api/contact';
const preRegister = '/api/preregister';
const register = '/api/register';
const login = '/api/login';
const logout = '/api/logout';
const authUser = '/api/auth/user';
const userShow = '/api/user/' + replaceChar[0];
const profileUpdate = '/api/user/update';
const roomShow = '/api/room/' + replaceChar[0];
const seatSit = '/api/seat/sit/' + replaceChar[0];
const seatLeave = '/api/seat/leave';
const enterLounge = '/api/seat/enterlounge/' + replaceChar[0];
const leaveLounge = '/api/seat/leavelounge/' + replaceChar[0];
const chatShow = '/api/chat/' + replaceChar[0];
const chatPost = '/api/chat/post';
const projectIndex = '/api/project';
const projectPost = '/api/project/post';
const taskIndex = '/api/task/index/' + replaceChar[0];
const taskPost = '/api/task/post';
const karteIndexFromUser = '/api/karte/index_from_user/' + replaceChar[0];
const karteIndexFromTask = '/api/karte/index_from_task/' + replaceChar[0];
const kartePost = '/api/karte/post';

/**
 * エンドポイントの取得
 *
 * @param {String} name 取得するエンドポイント名
 * @param {Array} params 必要なパラメータ
 * @return {String} エンドポイント
 */
export function getEndpoint(name, params) {
  var endpoint = '';
  switch (name) {
    case 'home':
      endpoint = home;
      break;

    case 'regenerateToken':
      endpoint = regenerateToken;
      break;

    case 'contact':
      endpoint = contact;
      break;

    case 'preRegister':
      endpoint = preRegister;
      break;

    case 'register':
      endpoint = register;
      break;

    case 'login':
      endpoint = login;
      break;

    case 'logout':
      endpoint = logout;
      break;

    case 'authUser':
      endpoint = authUser;
      break;

    case 'userShow':
      endpoint = setParams(userShow, params);
      break;

    case 'profileUpdate':
      endpoint = profileUpdate;
      break;

    case 'roomShow':
      endpoint = setParams(roomShow, params);
      break;

    case 'seatSit':
      endpoint = setParams(seatSit, params);
      break;

    case 'seatLeave':
      endpoint = seatLeave;
      break;

    case 'enterLounge':
      endpoint = setParams(enterLounge, params);
      break;

    case 'leaveLounge':
      endpoint = setParams(leaveLounge, params);
      break;

    case 'chatShow':
      endpoint = setParams(chatShow, params);
      break;

    case 'chatPost':
      endpoint = chatPost;
      break;

    case 'projectIndex':
      endpoint = projectIndex;
      break;

    case 'projectPost':
      endpoint = projectPost;
      break;

    case 'taskIndex':
      endpoint = setParams(taskIndex, params);
      break;

    case 'taskPost':
      endpoint = taskPost;
      break;

    case 'karteIndexFromUser':
      endpoint = setParams(karteIndexFromUser, params);
      break;

    case 'karteIndexFromTask':
      endpoint = setParams(karteIndexFromTask, params);
      break;

    case 'KartePost':
      endpoint = kartePost;
      break;
  }

  return endpoint;
}

/**
 * パラメータの置換
 *
 * @param {String} url 置換前のURL
 * @param {Array} params 置換するパラメータ
 * @return {String} 置換したURL
 */
export function setParams(url, params) {
  var endpoint = '';
  switch (params.length) {
    case 1:
      endpoint = url.replace(replaceChar[0], params[0]);
      break;
    case 2:
      endpoint = url.replace(replaceChar[0], params[0]).replace(replaceChar[1], params[1]);
      break;
    case 3:
      endpoint = url
        .replace(replaceChar[0], params[0])
        .replace(replaceChar[2], params[2])
        .replace(replaceChar[2], params[2]);
      break;
  }

  return endpoint;
}
