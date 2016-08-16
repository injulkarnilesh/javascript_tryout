function ObserverList() {
	this.observers = [];
}

ObserverList.prototype.get = function(index) {
	return this.observers[index];
};

ObserverList.prototype.count = function() {
	return this.observers.length;
};

ObserverList.prototype.add = function(observer) {
	this.observers.push(observer);
};

ObserverList.prototype.indexOf = function(observer) {
	for(var i = 0; i < this.observers.length; i++) {
		if(this.observers[i] === observer) {
			return i;
		}
	}
	return -1;
};

ObserverList.prototype.removeAt = function(index) {
	if(index >=0 && index < this.observers.length) {
		this.observers.splice(index, 1);
		return true;
	}
	return false;
};


function Subject() {
	this.observers = new ObserverList();
};

Subject.prototype.addObserver = function(observer) {
	this.observers.add(observer);
};

Subject.prototype.remove = function(observer) {
	this.observers.removeAt(this.observers.indexOf(observer));
};

Subject.prototype.notify = function(data) {
	for(var i=0; i<this.observers.count(); i++) {
		this.observers.get(i).update(data);
	}
};

var createObserver = function(theObject, updateFunc) {
	theObject.update = updateFunc;
	return theObject;
}

function NewsChannel(name) {
	this.news = [];
	this.channelName = name;	
}
NewsChannel.prototype = new Subject();
NewsChannel.prototype.addNews = function(newNews) {
	this.news.push(newNews);
	this.notify({
		source : this,
		news : newNews
	});
};


var xyzNews = new NewsChannel('XYZ News');
var emailAlert = {
	emailList :  'this@my.com;that@his.in;it@her.co.in',
	sendEmail : function(subject, emailBody) {
		console.log('Sending email ['+ subject+'] to ' + this.emailList + ' saying ' + emailBody);
	}
};

var smsAlert = {
	mobileNos :  '12;23;6667;90',
	sendSms : function(smsBody) {
		console.log('Sending SMS to ' + this.mobileNos + ' saying ' + smsBody);
	}
};

var emailObserver = createObserver(emailAlert, function(data) {
	this.sendEmail('Brought to you by ' + data.source.channelName, data.news);
});
var smsObserver = createObserver(smsAlert, function(data) {
	this.sendSms(data.news);
})

xyzNews.addObserver(emailObserver);
xyzNews.addObserver(smsObserver);

xyzNews.addNews('Winter is comming');
xyzNews.addNews('I am batman');
