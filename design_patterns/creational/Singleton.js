var SingletonGandalf = (function(){
	
	var gandalfInstance;

	function Gandalf(name, age, height) {
		this.name = name;
		this.age = age;
		this.height = height;

		this.teach = function() {
			console.log(this.name, 'teaches something');
		};

		this.toString = function() {
			console.log(this.name + ' of ' + this.age + ' age and of ' + this.height + ' height');
		};

		this.equals = function(that) {
			return this.name === that.name && this.age === that.age && this.height === that.height;
		}
	}

	return {
		getInstance : function(name, age, height){
			if(!gandalfInstance) {
				gandalfInstance = new Gandalf(name, age, height);
			}
			return gandalfInstance;
		}
	};
})();

var onlyGandalf = SingletonGandalf.getInstance('Gandalf', 390, 9.5);

onlyGandalf.toString();

var tryNewGandalf = SingletonGandalf.getInstance('NewGandalf', 100, 5.0);
tryNewGandalf.toString();

console.log('isSingleton : ' + onlyGandalf.equals(tryNewGandalf));
