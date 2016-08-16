function StockOffer(company, ammount, brokerCode) {
	this.stockCode = company.code;
	this.ammount = ammount;
	this.brokerCode = brokerCode;
}

StockOffer.prototype.matches = function(otheStockOffer) {
	if(otheStockOffer) {
		return this.stockCode === otheStockOffer.stockCode &&
				this.ammount === otheStockOffer.ammount;
	}
	return false;
};


function StockBroker(brokerCode, stockMediator) {
	this.brokerCode = brokerCode;
	this.stockMediator = stockMediator;
}

StockBroker.prototype.sell = function(stockOffer) {
	stockOffer.brokerCode = this.brokerCode;
	this.stockMediator.sell(stockOffer);
};

StockBroker.prototype.buy = function(stockOffer) {
	stockOffer.brokerCode = this.brokerCode;
	this.stockMediator.buy(stockOffer);
};

function PublicCompany(code, name) {
	this.code = code;
	this.name = name;
};

function StockMediator(mediatorName) {
	this.brokers = [];
	this.sellOffers = [];
	this.buyOffers = [];	
	this.mediatorName = mediatorName;
	this.registeredCompanies = [];
}

StockMediator.prototype.sell = function(stockSellOffer) {
	var sold = false;
	for(var i = 0; i < this.buyOffers.length; i++) {
		if(stockSellOffer.matches(this.buyOffers[i])) {
			sold = true;

			console.log(' SOLD ' + stockSellOffer.ammount +
						' OF ' + stockSellOffer.stockCode + 
						' FROM ' + stockSellOffer.brokerCode + 
						' TO ' + this.buyOffers[i].brokerCode);
			
			this.buyOffers.splice(i, 1);
			break;
		}
	}
	if(!sold) {
		console.log(' ADDED SELL FOR ' + stockSellOffer.ammount +
						' OF ' + stockSellOffer.stockCode + 
						' BY ' + stockSellOffer.brokerCode);
		this.sellOffers.push(stockSellOffer);
	}
};

StockMediator.prototype.buy = function(stockBuyOffer) {
	var bought = false;
	for(var i = 0; i < this.sellOffers.length; i++) {
		if(stockBuyOffer.matches(this.sellOffers[i])) {
			bought = true;

			console.log(' BOUGHT ' + stockBuyOffer.ammount +
						' OF ' + stockBuyOffer.stockCode + 
						' FROM ' + this.sellOffers[i].brokerCode + 
						' BY ' + stockBuyOffer.brokerCode);

			this.sellOffers.splice(i, 1);
			break;
		}
	}
	if(!bought) {
		console.log(' ADDED BUY FOR ' + stockBuyOffer.ammount +
						' OF ' + stockBuyOffer.stockCode + 
						' BY ' + stockBuyOffer.brokerCode);
		this.buyOffers.push(stockBuyOffer);
	}
};

StockMediator.prototype.addBroker = function(broker) {
	console.log(this.mediatorName + ' WELCOMES ' + broker.brokerCode);
	this.brokers.push(broker);
};

StockMediator.prototype.registerCompany = function(company) {
	this.registeredCompanies.push(company);
};


var myOwnStockMarket = new StockMediator('MY-OWN');

var shareKhanBroker = new StockBroker('SHAREK', myOwnStockMarket);
var kotakBroker = new StockBroker('KOTAK', myOwnStockMarket);
var motilalBroker = new StockBroker('MOTI', myOwnStockMarket);

myOwnStockMarket.addBroker(shareKhanBroker);
myOwnStockMarket.addBroker(kotakBroker);
myOwnStockMarket.addBroker(motilalBroker);

var ms = new PublicCompany('MS', 'Microsoft Corps, the one which hangs');
var apple = new PublicCompany('APPL', 'Apple Coprs, the expensive ones');
var nix = new PublicCompany('LINX', 'Linux Coprs, the free and good ones');

shareKhanBroker.sell(new StockOffer(ms, 100));
shareKhanBroker.sell(new StockOffer(nix, 500));

motilalBroker.sell(new StockOffer(apple, 300));

kotakBroker.buy(new StockOffer(nix, 500));
kotakBroker.buy(new StockOffer(apple, 300));
kotakBroker.buy(new StockOffer(ms, 40));
