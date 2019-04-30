var sessions = [];
var maxTime = 2;

function sessionUser(tsec, initSession, lastRequest, userAgent, refresh){
	this.tsec = tsec;
	this.initSession = initSession;
	this.lastRequest = lastRequest;
	this.userAgent = userAgent;
	this.refresh = refresh;
}

exports.isValid = function(tsec, req) {
	let userAgent = req.headers['user-agent'];
	let session = findSession(tsec,userAgent);

	if(session.length>0){
		//la session existe
		if(getTimeSession(session)>maxTime){
			return false;
		}
	} else {
		//crea una nueva sesion
		createSession(tsec, userAgent, 0);
	}

	return true;
}

exports.getTsec = function (req){
	let userAgent = req.headers['user-agent'];

	let session = findSession2(userAgent);

	console.log(session);

	if(session.length>0){
		userSession = session[0];
		sessions = [];

		let refresh = userSession.refresh + 1;
		let tsec = userSession.tsec+"_"+refresh;

		createSession(tsec, userAgent, refresh);

		return tsec;
	}

	return "123abcABC";
}

function getTimeSession(session){
	session[0].lastRequest = new Date();
	var diff = (session[0].lastRequest - session[0].initSession);
	var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000);

	return diffMins;
}

function createSession(tsec, userAgent, refresh){
	var initSession = new Date();
	var newSession = new sessionUser(tsec, initSession, initSession, userAgent, refresh);
	sessions.push(newSession);
}

function findSession(tsec,userAgent) {
  return sessions.filter(function(session) {
      return (session.tsec===tsec && session.userAgent===userAgent);
  });
}

function findSession2(userAgent) {
  return sessions.filter(function(session) {
      return (session.userAgent===userAgent);
 });
}