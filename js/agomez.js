var translationsESP = {
	LINKEDIN_LINK : 'https://es.linkedin.com/in/alvarogomezarevalillo',
	MENU_ABOUT : 'Sobre mi',
	MENU_CONTACT : 'Contactar',
	MENU_PROYECTOS : 'Proyectos',
	BUTTON_LANG_DE : 'Aleman',
	BUTTON_LANG_ES : 'Español',
	BUTTON_LANG_EN : 'Ingles',
	MENU_LANG : 'Idioma',
	SPAIN : 'España'

};

var translationsENG = {
	LINKEDIN_LINK : 'https://es.linkedin.com/in/alvarogomezarevalillo/en',
	MENU_ABOUT : 'About',
	MENU_CONTACT : 'Contact',
	MENU_PROYECTOS : 'Projects',
	BUTTON_LANG_DE : 'German',
	BUTTON_LANG_ES : 'Spanish',
	BUTTON_LANG_EN : 'English',
	MENU_LANG : 'Language',
	SPAIN : 'Spain'
};

var translationsDEU = {
	LINKEDIN_LINK : 'https://es.linkedin.com/in/alvarogomezarevalillo/de',
	MENU_ABOUT : 'About',
	MENU_CONTACT : 'Kontakt',
	MENU_PROYECTOS : 'Projects',
	BUTTON_LANG_DE : 'Deutsch',
	BUTTON_LANG_ES : 'Spanisch',
	BUTTON_LANG_EN : 'Englisch',
	MENU_LANG : 'Sprache',
	SPAIN : 'Spanien'
};

var app = angular.module('agomez', [ 'pascalprecht.translate' ]);

app.config([ '$translateProvider', function($translateProvider) {
	// add translation tables
	$translateProvider.translations('esp', translationsESP);
	$translateProvider.translations('eng', translationsENG);
	$translateProvider.translations('deu', translationsDEU);
	$translateProvider.preferredLanguage('esp');
	$translateProvider.fallbackLanguage('esp');
} ]);

app.controller('indexController', [ '$translate', '$scope',
		function($translate, $scope) {
			$scope.changeLanguage = function(langKey) {
				$translate.use(langKey);
			};
		} ]);