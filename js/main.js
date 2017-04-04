(function () {
	"use strict";
	angular.module("app", [
		"price",
		"toHtml"
	]).run(function ($templateCache) {
		$templateCache.put('myTemplate.html', 'This is the content of</br> the template');
	});
}) ();

(function () {
	"use strict";
	angular.module("price", [])
		.filter("price", price);
		
	function price() {
		return function (number, symbol) {
			return (symbol || "$") + number;
		};
	}	
})();

(function () {
	"use strict";
	angular.module("toHtml", [])
		.filter("toHtml", toHtml);
		
	toHtml.$inject = ["$sce"];	
	function toHtml($sce) {
		return function (html) {
			return $sce.trustAsHtml(html);
		};
	}	
})();

(function () {
	"use strict";
	angular.module("app").controller("myCtrl", myCtrl);
		
	myCtrl.$inject = ["$scope", "$filter", "$http", "$q", "$sce", "$templateCache", "$interval", "testConstant", "testConstant2"];
	function myCtrl ($scope, $filter, $http, $q, $sce, $templateCache, $interval, testConstant, testConstant2, message, messages) {
		var myCtrl = this;
		myCtrl.price = $filter("price")(25, "#");
		myCtrl.serverData = {};
		myCtrl.userAction = "";
		myCtrl.askUser = askUser;
		myCtrl.html = "<h1>test text</h1>";
		myCtrl.html2 = $templateCache.get("myTemplate.html");
		myCtrl.timer = new Date().getSeconds();
		myCtrl.date = $.now();
		myCtrl.usersFilter = "";
		myCtrl.usersFilterMethod = usersFilterMethod;
		myCtrl.onBlur = onBlur;
		myCtrl.names = [];
		myCtrl.selectedOption = "";
		myCtrl.imageSrc = "";
		myCtrl.getMessage = getMessage;
		myCtrl.getMessagesCount = getMessagesCount;
		myCtrl.showLoader = showLoader;
		
		myCtrl.options = [
			{value: "", label: "Select item"},
			{value: "item1", label: "Item1 label"},
			{value: "item2", label: "Item2 label"},
			{value: "item3", label: "Item3 label"},
			{value: "item4", label: "Item4 label"},
			{value: "item5", label: "Item5 label"}
		];
		
		function showLoader() {
			return ajax.ajaxInProgress;
		}
		
		function getMessage() {
			return messages.message;
		}
		
		function getMessagesCount() {
			messages.list.length;
		}
		
		function onBlur($event) {
			console.log($event);
		}
		
		function usersFilterMethod(elem, index, array) {
			return ~elem.name.toLowerCase().indexOf(myCtrl.usersFilter.toLowerCase());
		}
		
		$scope.$applyAsync(function () {
			myCtrl.serverData = {"myKey1": "asdasd"};
		})
		
		$http
			.get("http://www.mocky.io/v2/58d4161a100000db0cd7a6b5")
			.then(function (data) {
			console.log(data);
			myCtrl.serverData = data.data;
		});
		
		function askUser() {
			myModal().then(function (userAnswer) {
				myCtrl.userAction = userAnswer;
				myCtrl.imageSrc = "images/logo.png";
			})
		}
		
		function myModal () {
			var deffered = $q.defer();
			setTimeout(function() {
				deffered.resolve("User click OK");
			}, 5000);
			return deffered.promise;
		}
		$interval(function(item) {
			myCtrl.timer = new Date().getSeconds();
		}, 1000, 5, true, new Date().getSeconds());
	}
})();

(function () {
	"use strict";
	
	angular.module("myComponent", [])
		.component("myComponent", myComponent());
		
		
	
});

(function () {
	"use strict";
	
	angular.module("app")
		.constant("testConstant", "testConstantValue")
		.constant("testConstant2", {
			"key1": "value1",
			"key2": "value2"
		})
})();

(function () {
	"use strict";
	
	angular.module("app")
		.value("message", "")
		.value("messages", {
			list:[]
	})
})();

(function () {
	"use strict";
	
	angular.module("app")
		.controller("messageController", messageController);
		
		messageController.$inject = ["message", "messages", "scrollService"];
		function messageController(message, messages, scrollService) {
			var messageController = this;
			messageController.messageField = "";
			messageController.sendMessage = sendMessage;
			
			function sendMessage(newMessage){
				messages.list.push(newMessage);
				messages.message = newMessage;
			}
		}
})();

(function () {
	"use strict";
	
	angular.module("scrollService", scrollService)
		.service("scrollService", scrollService);
		
	function scrollService() {
		return {
			scrollTop: scrollTop
		}
		
		function scrollTop(position) {
			$("body").animate({"scrollTop": position}, 500);
		}
	}
})();

(function () {
	"use strict";
	
	angular.module()
		.factory("testFactory", testFactory);
		
	function testFactory() {
		return {
			key1: "value1",
			key2: "value2",
			obj: {"test": "rest"},
			method: method
		}
		
		function method() {
			console.log("I am method");
		}
	}
})();

(function () {
	"use strict";
	
	angular.module
	angular.component("myMessanger", myMessanger());		
		
	function myMessanger() {
		myMessangerCtrl.$inject = ["messages"];
		return {
			templateUrl: "componentTemplate.html",
			template: "<div><h1>",
			controller: myMessangerCtrl,
			controllerAs: "myMessanger",
			transclude: false,
			bindings: {
				title: "@",
				onMessageSent: "&"
			}
		}
		
		function myMessageCtrl() {
			var myMessageCtrl = this;
			myMessengerCtrl.messageField = "";
			myMessangerCtrl.sendMessage = sendMessage;
			
			function sendMessage(message) {
				myMessangerCtrl.onMessageSent({"message": message});
				messages.message = message;
				messages.list.push(message);
			}
		}
	}
})();

(function () {
	"use strict";
	
	angular.module("scrollToTop", [])
		.directive("scrollToTop", scrollToTop);
	
	scrollToTop.$inject = ["scrollService"];
	function scrollToTop() {
		return {
			restrict: "A",
			link: link
		}
		
		function link($scope, #element) {
			$element.on("click", function () {
				$scrollService.scrollTop(0);
			})
		}
	}	
})();

(function () {
	"use strict";
	
	angular.module("app", [])
		.factory("myInterseptors", myInterseptors)
		.config(interceptorsConfig);
		
	myInterseptors.$inject = ["$q", "ajax"];
	function myInterseptors($q) {
		return {
			request: function(config) {
				request.push(config);
				ajax.inProgress = true;
				return config;
			},
			response: function(response) {
				return response;
			},
			requestError: function(rejectReason) {
				return $q.reject(rejectReason);
			},
			responseError: function(response) {
				return $q.reject(response);
			}
		}
	}
	
	interceptorsConfig$inject = ["$httpProvider"];
	function interceptorsConfig($httpProvider) {
		$httpProvider.interceptors.push('myInterseptors');
	}
})();








