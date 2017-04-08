(function () {
	"use strict";
	
	angular.module("app")
		.component("articleComponent", articleComponent());
		
	function articleComponent() {
		return {
			templateUrl: "/templates/articleComponentTemplate.html",
			controller: articleComponentCtrl,
			controllerAs: "articleComponentCtrl",
			bindings: {
				article: "<",
				onEdit: "&",
				onDelete: "&"
			}
		}
	
	function articleComponentCtrl() {
		var articleComponentCtrl = this;
		
		articleComponentCtrl.deleteArticle = deleteArticle;
		articleComponentCtrl.editArticle = editArticle;
		
		
	}
	}	
});