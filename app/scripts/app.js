'use strict';

/**
 * @ngdoc overview
 * @name rdvmedecinsApp
 * @description
 * # rdvmedecinsApp
 *
 * Main module of the application.
 */
// --------------------- modules
var rdvmedecinsApp = angular.module('rdvmedecinsApp', [
        'ngAnimate', // animations
        // 'ngAria',
        // 'ngCookies',
        // 'ngMessages',
        // 'ngResource',
        // 'ngSanitize',
        // 'ngTouch',
        // 'ngRoute', 
        'ui.router',
        "ngRoute",
        "pascalprecht.translate",
        "base64",
        'ngLocale',
        'ui.bootstrap', // Twitter Bootstrap Support
        'angularUtils.directives.uiBreadcrumbs'
    ]);
    
    // ------------------------ routage
    rdvmedecinsApp.config(function($stateProvider, $urlRouterProvider) {
        
        //Set default route
        $urlRouterProvider.otherwise('/');

        //Declare states
        $stateProvider
            .state('login', {
              url : '/',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                data: {
                    displayName: 'login'
                }
            })
            .state('home', {
                url : '/home',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                data: {
                    displayName: 'Home'
                }
            })
            .state('agenda', {
              url : '/agenda',
                templateUrl: 'views/agenda.html',
                controller: 'AgendaCtrl',
                data: {
                 displayName: 'Agenda'
                }
            })
            .state('resa', {
              url : '/resa',
                templateUrl: 'views/resa.html',
                controller: 'ResaCtrl',
                data: {
                    displayName: 'Reservation'
                }
            }); 
    });


    // ------------------------ i18n
  rdvmedecinsApp.config(function ($translateProvider) {
    $translateProvider.translations("fr", {
      application_header: "Système gestion RDV <br/> Cabinet Médical",
      options_afficherAgenda: "Afficher Agenda",
      options_home: "Accueil",
      options_retourAgenda: "Agenda",
      options_validerRv: "Valider",
      rv_accueil_titre: "Prise de rendez - vous",
      rv_medecin: "Médecin",
      rv_jour: "Jour",
      agenda_titre: "Rendez - vous  de {{titre}} {{prenom}} {{nom}} le {{jour}}",
      date_format: "dd / MM / yyyy",
      erreurs_titre: "Les  erreurs suivantes se sont produites :",
      agenda_medecinsanscreneaux: "Ce médecin n'a pas encore de créneaux de consultation",
      agenda_client: "Client",
      agenda_action: "Action",
      agenda_reserver: "Réserver",
      agenda_supprimer: "Supprimer",
      agenda_creneauhoraire: "Créneau horaire",
      resa_titre: "Rendez - vous  de {{titre}} {{prenom}} {{nom}} le  {{jour}} à {{creneau}}",
      resa_client: "Client",
      access_denied: "Accès refusé",
      user: "Utilisateur :",
      login: "Connexion",
      logout: "Déconnexion",
      username: "Utilisateur",
      password: "Mot de passe",
      authentification_failure: "Echec de l'authentification",
      identification: "Authentifiez-vous pour accéder à l'application",
      langue: "Langue",
      langue_fr: "Français",
      langue_en: "English",
      choixmedecinjour_title: "Choisissez un médecin et un jour pour avoir l'agenda",
      msg_waiting_init: "Application en cours d'initialisation. Patientez...",
      msg_waiting: "Opération en cours. Patientez...",
      error_unknown: "Erreur non identifiée",
      not_authorized: "Erreur d'authentification",
      server_not_available: "Serveur indisponible",
      get_medecins_errors: "Les erreurs suivantes se sont produites lors du chargement de la liste des médecins",
      get_clients_rrors: "Les erreurs suivantes se sont produites lors du chargement de la liste des clients",
      forbidden: "Accès refusé",
      not_http_error: "L'accès au serveur n'a pu être réalisé. Vérifiez sa disponibilité",
      server_url: "URL du serveur",
      not_found: "Document non trouvé. Vérifiez l'URL du serveur",
      cancel: "Annuler",
      loading_error: "Annulation du chargement de l'application",
      select_medecin: "Choisissez un médecin",
      canceled_operation: "Opération annulée",
      choose_a_client: "Choisissez un client",
      get_agenda_errors: "Les erreurs suivantes se sont produites lors du chargement de l'agenda du médecin",
      post_resa_errors: "Les erreurs suivantes se sont produites lors de la validation du rendez-vous",
      post_remove_errors: "Les erreurs suivantes se sont produites lors de la suppression du rendez-vous",
      list_medecins_title:"Liste des médecins",
      list_clients_title:"Liste des clients",
      verbose: "mode debug",
      sleeptime: 'Attente (ms)',
      tooltip_afficher_agenda:"Afficher l'agenda du médecin choisi pour le jour choisi",
      tooltip_home:"Retour à la page de choix du médecin",
      tooltip_retour_agenda:"Retour à l'agenda",
      tooltip_valider_rv: "Valider le client choisi",
      tooltip_ajouter_rv:"Faire une réservation",
      tooltip_supprimer_rv:"Supprimer le rendez-vous",
      tooltip_debug:"Cochez la case si vous voulez suivre les évolutions du modèle de l'application",
      tooltip_waiting_time_before_task:"Indiquez ici le temp d'attente en ms avant chaque début de tâche",
      tooltip_deconnecter:"Pour vous déconnecter de l'application",
      tooltip_languages:"Choisissez votre langue",
      tooltip_server_url:"URL principale du serveur",
      tooltip_user_name:"Votre identifiant",
      tooltip_password:"Votre mot de passe",
      tooltip_authenticate:"Veuillez vous identifier"
    });
    $translateProvider.translations("en", {
      application_header: "The Associated Doctors",
      options_afficherAgenda: "Show the diary",
      options_home: "Home",
      options_retourAgenda: "Back to the diary",
      options_validerRv: "Add the appointment",
      rv_accueil_titre: "Making an appointment",
      rv_medecin: "Doctor",
      rv_jour: "Date",
      agenda_titre: "{{titre}} {{prenom}} {{nom}}' diary on {{jour}}",
      date_format: "MM/dd/yyyy",
      erreurs_titre: "The application met the following errors:",
      agenda_medecinsanscreneaux: "This doctor has for the moment no time slot for appointments",
      agenda_client: "Client",
      agenda_action: "Action",
      agenda_reserver: "Add",
      agenda_supprimer: "Remove",
      agenda_creneauhoraire: "Time slot",
      resa_titre: "Appointment for {{titre}} {{prenom}} {{nom}} on {{jour}} at {{creneau}}",
      resa_client: "Client",
      access_denied: "Access denied",
      login: "Login",
      logout: "Logout",
      username: "User name",
      password: "Password",
      authentification_failure: "Authentification failure",
      identification: "Sign in to access App",
      langue: "Language",
      langue_fr: "Français",
      langue_en: "English",
      choixmedecinjour_title: "Select a doctor and a date",
      msg_waiting_init: "Loading application. Please wait...",
      msg_waiting: "Operation in progress. Please wait...",
      error_unknown: "Unknown error",
      not_authorized: "Authentification failure",
      server_not_available: "Server not available",
      get_medecins_errors: "The following errors were met when loading the list of doctors",
      get_clients_errors: "The following errors were met when loading the list of clients",
      forbidden: "Access denied",
      not_http_error: "Server access could not be achieved. Check its availability.",
      server_url: "Server URL",
      not_found: "Document not found. Check the server URL",
      cancel: "Cancel",
      loading_error: "Application loading canceled",
      select_medecin: "Choose a doctor",
      canceled_operation: "Canceled operation",
      choose_a_client: "Choose a client",
      get_agenda_errors: "The following errors were met while loading the diary",
      post_resa_errors: "The following errors were met while validating the appointment",
      post_remove_errors: "The following errors were met while removing the appointement",
      list_medecins_title:"Doctors' list",
      list_clients_title:"Clients' list",
      verbose: "debug mode",
      sleeptime: 'Waiting time (ms)',
      tooltip_afficher_agenda:"Show the selected doctor's diary for the selected day",
      tooltip_home:"Back to the doctors' selection view",
      tooltip_retour_agenda:"Back to the diary",
      tooltip_valider_rv: "Validate the selected client",
      tooltip_ajouter_rv:"Make an appointment",
      tooltip_supprimer_rv:"Remove the appointment",
      tooltip_debug:"Tick the checkbox if you want to track the application's model changes",
      tooltip_waiting_time_before_task:"Indicate the waiting time in ms before the beginning of every task",
      tooltip_deconnecter:"To logout from the application",
      tooltip_languages:"Choose your language",
      tooltip_server_url:"Server main URL",
      tooltip_user_name:"Your user name",
      tooltip_password:"Your password",
      tooltip_authenticate:"Please authenticate yourself"
    });
    $translateProvider.preferredLanguage("fr");
  });