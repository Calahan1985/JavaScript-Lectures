(function () {
	"use strict";
	
	angular.module("newsfeed")
		.controller("newsfeed", newsfeed);
	
	newsfeed.$inject = ["$http"];
	function newsfeed() {
		var newsfeed = this;
		
		//Parameters
		newsfeed.newArticleModel = {};
		newsfeed.editPopupVisible = false;
		
		//Methods
		newsfeed.showEditPopup = showEditPopup;
		newsfeed.hideEditPopup = hideEditPopup;
		newsfeed.getEmptyModel = getEmptyModel;
		
		//Functions
		function showEditPopup(modelForEdit) {
			newsfeed.editPopupVisible = true;
			if (modelForEdit) {
				newsfeed.newArticleModel = _.cloneDeep(modelForEdit);
			}
			else {
				newsfeed.newArticleModel = getEmptyModel();
			}
		}
		
		function hideEditPopup() {
			newsfeed.editPopupVisible = false;
		}
		
		function getEmptyModel() {
			return {
				type: "article",
				title: "",
				description: "",
				mainPhoto: "",
				photos: [""],
				video: ""
			}
		}
		
		function saveArticle() {
			if (newsfeed.newArticleModel.id) {
				$http.put(
				"http://www.mocky.io/v2/58d4161a100000db0cd7a6b5",
				newsfeed.newArticleModel
			)
			else (
				$http.post(
				"http://www.mocky.io/v2/58d4161a100000db0cd7a6b5",
				newsfeed.newArticleModel
			)
			}
		}
		
		//Initialization
		(function () {
			
		})();
	}	
})();