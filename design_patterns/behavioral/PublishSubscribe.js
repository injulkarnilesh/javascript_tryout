var pubSub = {};

(function(pubSubObject){

	var topicSubscibers = {};
	var subIdCount = 0;

	pubSubObject.publish = function(topic, arguments) {
		if(!topicSubscibers[topic]) {
			return;
		}

		var subscribers = topicSubscibers[topic];
		var len = subscribers ? subscribers.length : 0;
		while(len--) {
			subscribers[len].func(arguments);
		}
	};

	pubSubObject.subscribe = function(topic, callback) {
		if(! topicSubscibers[topic]) {
			topicSubscibers[topic] = [];
		}
		subIdCount = subIdCount + 1;
		var newSubscriptionId = subIdCount;

		var newSubscriber = {
			subscriberId : newSubscriptionId,
			func : callback
		}
		topicSubscibers[topic].push(newSubscriber);

		return newSubscriptionId;
	};

	pubSubObject.unsubscribe = function(topic, subscriberId) {
		if(!topicSubscibers[topic]) {
			return;
		}
		for(var i = 0; i < topicSubscibers[topic].length; i++) {
			if(topicSubscibers[topic][i].subscriberId === subscriberId) {
				topicSubscibers[topic].splice(i, 1);
				return true;
			}
		}

		return false;
	};

})(pubSub);

var emailConsolerId = pubSub.subscribe('inbox/message', function(email){
	console.log('CONSOLE LOGGER GOT THIS ' + email.toString());
});

var emailForwarderId = pubSub.subscribe('inbox/message', function(emailToForward){
	console.log('FORWORDING THIS ' + emailToForward.toString());
});

function Email(to, subject, body) {
	this.to = to;
	this.subject = subject;
	this.body = body;
}

Email.prototype.toString = function() {
	return ' TO : ' + this.to +
			' SUBJECT : ' + this.subject +
			 ' BODY : ' + this.body;
}


pubSub.publish('inbox/message', new Email('this@that.com','checking publish', 'Hi there'));

pubSub.unsubscribe('inbox/message', emailForwarderId);

pubSub.publish('inbox/message', new Email('myaccount@mail.com', 'checking again', 'Hey there'));

pubSub.publish('news/breakingnews', 'Things you own end up owning you.');


