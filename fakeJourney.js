const fakeJourney = {
  data: [
    {
      id: 9,
      label: [],
      category: ['Plane'],
      score: 0,
      total_distance: 597637.6975916656,
      total_duration: 14561,
      total_price_EUR: 144.51,
      departure_point: [0, 0],
      arrival_point: [0, 0],
      departure_date: '2019-12-28 08:00:00',
      arrival_date: '2019-12-28 10:25:00',
      total_gCO2: 170357.272794358,
      journey_steps: [
        {
          id: 0,
          type: 'Walking',
          label: 'Walking FROM 52 Boulevard Saint-Germain (Paris) TO Jussieu (Paris)',
          distance_m: 610,
          duration_s: 545,
          price_EUR: [0],
          departure_point: '52 Boulevard Saint-Germain (Paris)',
          arrival_point: 'Jussieu (Paris)',
          departure_stop_name: '52 Boulevard Saint-Germain (Paris)',
          arrival_stop_name: 'Jussieu (Paris)',
          departure_date: '2019-12-14 14:54:55',
          arrival_date: '2019-12-14 15:04:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 1,
          type: 'bus',
          label:
            'Bus 67 / Palais Royal/Musée de Louvre - Stade Charléty/Porte de Gentilly / direction: Stade Charléty - Porte de Gentilly (Paris)',
          distance_m: 3374,
          duration_s: 900,
          price_EUR: [0],
          departure_point: 'Jussieu (Paris)',
          arrival_point: 'Stade Charléty - Porte de Gentilly (Paris)',
          departure_stop_name: 'Jussieu (Paris)',
          arrival_stop_name: 'Stade Charléty - Porte de Gentilly (Paris)',
          departure_date: '2019-12-14 15:04:00',
          arrival_date: '2019-12-14 15:19:00',
          trip_code: '',
          gCO2: 437.6078
        },
        {
          id: 2,
          type: 'Walking',
          label:
            'Walking FROM Stade Charléty - Porte de Gentilly (Paris) TO Stade Charléty - Porte de Gentilly (Paris)',
          distance_m: 135,
          duration_s: 190,
          price_EUR: [0],
          departure_point: 'Stade Charléty - Porte de Gentilly (Paris)',
          arrival_point: 'Stade Charléty - Porte de Gentilly (Paris)',
          departure_stop_name: 'Stade Charléty - Porte de Gentilly (Paris)',
          arrival_stop_name: 'Stade Charléty - Porte de Gentilly (Paris)',
          departure_date: '2019-12-14 15:19:00',
          arrival_date: '2019-12-14 15:22:10',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 3,
          type: 'Waiting',
          label: 'wait',
          distance_m: 0,
          duration_s: 350,
          price_EUR: [0],
          departure_point: [0, 0],
          arrival_point: [0, 0],
          departure_stop_name: '',
          arrival_stop_name: '',
          departure_date: '2019-12-14 15:22:10',
          arrival_date: '2019-12-14 15:28:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 4,
          type: 'bus',
          label:
            "Bus ORLYBUS / Denfert-Rochereau - Aéroport d'Orly / direction: Aéroport d'Orly 4 (Paray-Vieille-Poste)",
          distance_m: 10164,
          duration_s: 900,
          price_EUR: [0],
          departure_point: 'Stade Charléty - Porte de Gentilly (Paris)',
          arrival_point: "Aéroport d'Orly 1-2-3 (Paray-Vieille-Poste)",
          departure_stop_name: 'Stade Charléty - Porte de Gentilly (Paris)',
          arrival_stop_name: "Aéroport d'Orly 1-2-3 (Paray-Vieille-Poste)",
          departure_date: '2019-12-14 15:28:00',
          arrival_date: '2019-12-14 15:43:00',
          trip_code: '',
          gCO2: 1318.2708
        },
        {
          id: 5,
          type: 'Walking',
          label:
            "Walking FROM Aéroport d'Orly 1-2-3 (Paray-Vieille-Poste) TO Rue des Transporteurs (Paray-Vieille-Poste)",
          distance_m: 506,
          duration_s: 452,
          price_EUR: [0],
          departure_point: "Aéroport d'Orly 1-2-3 (Paray-Vieille-Poste)",
          arrival_point: 'Rue des Transporteurs (Paray-Vieille-Poste)',
          departure_stop_name: "Aéroport d'Orly 1-2-3 (Paray-Vieille-Poste)",
          arrival_stop_name: 'Rue des Transporteurs (Paray-Vieille-Poste)',
          departure_date: '2019-12-14 15:43:00',
          arrival_date: '2019-12-14 15:50:32',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 6,
          type: 'Waiting',
          label: '',
          distance_m: 0,
          duration_s: 4500,
          price_EUR: [0],
          departure_point: [48.725, 2.359],
          arrival_point: [48.725, 2.359],
          departure_stop_name: '',
          arrival_stop_name: '',
          departure_date: '2019-12-28 08:00:00',
          arrival_date: '2019-12-28 09:15:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 7,
          type: 'Plane',
          label: '',
          distance_m: 571616.6975916656,
          duration_s: 4200,
          price_EUR: [144.51],
          departure_point: [48.725, 2.359],
          arrival_point: [43.629, 1.364],
          departure_stop_name: 'Paris Orly',
          arrival_stop_name: 'Toulouse',
          departure_date: '2019-12-28 09:15:00',
          arrival_date: '2019-12-28 10:25:00',
          trip_code: 'AF6110',
          gCO2: 167483.692394358
        },
        {
          id: 31,
          type: 'Walking',
          label: 'Walking FROM Allée Saint-Exupéry (Blagnac) TO Aéroport (Blagnac)',
          distance_m: 1087,
          duration_s: 971,
          price_EUR: [0],
          departure_point: 'Allée Saint-Exupéry (Blagnac)',
          arrival_point: 'Aéroport (Blagnac)',
          departure_stop_name: 'Allée Saint-Exupéry (Blagnac)',
          arrival_stop_name: 'Aéroport (Blagnac)',
          departure_date: '2019-12-14 14:58:49',
          arrival_date: '2019-12-14 15:15:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 32,
          type: 'bus',
          label: 'Bus AERO / Navette Aéroport / direction: Gare routière (Toulouse)',
          distance_m: 8594,
          duration_s: 720,
          price_EUR: [0],
          departure_point: 'Aéroport (Blagnac)',
          arrival_point: 'Compans-Caffarelli (Toulouse)',
          departure_stop_name: 'Aéroport (Blagnac)',
          arrival_stop_name: 'Compans-Caffarelli (Toulouse)',
          departure_date: '2019-12-14 15:15:00',
          arrival_date: '2019-12-14 15:27:00',
          trip_code: '',
          gCO2: 1114.6418
        },
        {
          id: 33,
          type: 'Walking',
          label: 'Walking FROM Compans-Caffarelli (Toulouse) TO Compans - Caffarelli (Toulouse)',
          distance_m: 69,
          duration_s: 120,
          price_EUR: [0],
          departure_point: 'Compans-Caffarelli (Toulouse)',
          arrival_point: 'Compans - Caffarelli (Toulouse)',
          departure_stop_name: 'Compans-Caffarelli (Toulouse)',
          arrival_stop_name: 'Compans - Caffarelli (Toulouse)',
          departure_date: '2019-12-14 15:27:00',
          arrival_date: '2019-12-14 15:29:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 34,
          type: 'Waiting',
          label: 'wait',
          distance_m: 0,
          duration_s: 180,
          price_EUR: [0],
          departure_point: [0, 0],
          arrival_point: [0, 0],
          departure_stop_name: '',
          arrival_stop_name: '',
          departure_date: '2019-12-14 15:29:00',
          arrival_date: '2019-12-14 15:32:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 35,
          type: 'metro',
          label: 'Métro B / Borderouge / Ramonville / direction: Borderouge (Toulouse)',
          distance_m: 1020,
          duration_s: 120,
          price_EUR: [0],
          departure_point: 'Compans - Caffarelli (Toulouse)',
          arrival_point: 'Canal du Midi (Toulouse)',
          departure_stop_name: 'Compans - Caffarelli (Toulouse)',
          arrival_stop_name: 'Canal du Midi (Toulouse)',
          departure_date: '2019-12-14 15:32:00',
          arrival_date: '2019-12-14 15:34:00',
          trip_code: '',
          gCO2: 3.06
        },
        {
          id: 36,
          type: 'Walking',
          label: 'Walking FROM Canal du Midi (Toulouse) TO 62B Rue de Chaussas (Toulouse)',
          distance_m: 462,
          duration_s: 413,
          price_EUR: [0],
          departure_point: 'Canal du Midi (Toulouse)',
          arrival_point: '62B Rue de Chaussas (Toulouse)',
          departure_stop_name: 'Canal du Midi (Toulouse)',
          arrival_stop_name: '62B Rue de Chaussas (Toulouse)',
          departure_date: '2019-12-14 15:34:00',
          arrival_date: '2019-12-14 15:40:53',
          trip_code: '',
          gCO2: 0
        }
      ]
    },
    {
      id: 13,
      label: [],
      category: ['Coach'],
      score: 0,
      total_distance: 591370.7569515631,
      total_duration: 38052,
      total_price_EUR: 44.99,
      departure_point: [0, 0],
      arrival_point: [0, 0],
      departure_date: '2019-12-11 21:00:10.448288',
      arrival_date: '2019-12-11 21:00:10.448294',
      total_gCO2: 90340.86217054071,
      journey_steps: [
        {
          id: 0,
          type: 'Walking',
          label:
            'Walking FROM 52 Boulevard Saint-Germain (Paris) TO Institut du Monde Arabe (Paris)',
          distance_m: 497,
          duration_s: 444,
          price_EUR: [0],
          departure_point: '52 Boulevard Saint-Germain (Paris)',
          arrival_point: 'Institut du Monde Arabe (Paris)',
          departure_stop_name: '52 Boulevard Saint-Germain (Paris)',
          arrival_stop_name: 'Institut du Monde Arabe (Paris)',
          departure_date: '2019-12-14 14:50:36',
          arrival_date: '2019-12-14 14:58:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 1,
          type: 'bus',
          label:
            'Bus 89 / Bibliothèque François Mitterrand - Gare de Vanves-Malakoff / direction: Porte de France (Paris)',
          distance_m: 2028,
          duration_s: 540,
          price_EUR: [0],
          departure_point: 'Institut du Monde Arabe (Paris)',
          arrival_point: 'Quai de la Gare (Paris)',
          departure_stop_name: 'Institut du Monde Arabe (Paris)',
          arrival_stop_name: 'Quai de la Gare (Paris)',
          departure_date: '2019-12-14 14:58:00',
          arrival_date: '2019-12-14 15:07:00',
          trip_code: '',
          gCO2: 263.0316
        },
        {
          id: 2,
          type: 'Walking',
          label: 'Walking FROM Quai de la Gare (Paris) TO 186 Quai de Bercy (Paris)',
          distance_m: 692,
          duration_s: 618,
          price_EUR: [0],
          departure_point: 'Quai de la Gare (Paris)',
          arrival_point: '186 Quai de Bercy (Paris)',
          departure_stop_name: 'Quai de la Gare (Paris)',
          arrival_stop_name: '186 Quai de Bercy (Paris)',
          departure_date: '2019-12-14 15:07:00',
          arrival_date: '2019-12-14 15:17:18',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 3,
          type: 'Waiting',
          label: '',
          distance_m: 0,
          duration_s: 900,
          price_EUR: [0],
          departure_point: [48.83568689, 2.380160747],
          arrival_point: [48.83568689, 2.380160747],
          departure_stop_name: '',
          arrival_stop_name: '',
          departure_date: '2019-12-28 11:45:00',
          arrival_date: '2019-12-28 12:00:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 4,
          type: 'Coach',
          label: '',
          distance_m: 584882.7569515631,
          duration_s: 34200,
          price_EUR: [44.99],
          departure_point: [48.83568689, 2.380160747],
          arrival_point: [43.613299, 1.452226],
          departure_stop_name: 'Paris Centre - Bercy-Seine',
          arrival_stop_name: 'Toulouse',
          departure_date: '2019-12-28 12:00:00',
          arrival_date: '2019-12-28 21:30:00',
          trip_code: 'OuiBus 50049',
          gCO2: 90071.94457054071
        },
        {
          id: 10,
          type: 'Walking',
          label: "Walking FROM 70 Boulevard Pierre Semard (Toulouse) TO Jeanne d'Arc (Toulouse)",
          distance_m: 847,
          duration_s: 757,
          price_EUR: [0],
          departure_point: '70 Boulevard Pierre Semard (Toulouse)',
          arrival_point: "Jeanne d'Arc (Toulouse)",
          departure_stop_name: '70 Boulevard Pierre Semard (Toulouse)',
          arrival_stop_name: "Jeanne d'Arc (Toulouse)",
          departure_date: '2019-12-14 14:50:23',
          arrival_date: '2019-12-14 15:03:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 11,
          type: 'metro',
          label: 'Métro B / Borderouge / Ramonville / direction: Borderouge (Toulouse)',
          distance_m: 1962,
          duration_s: 180,
          price_EUR: [0],
          departure_point: "Jeanne d'Arc (Toulouse)",
          arrival_point: 'Canal du Midi (Toulouse)',
          departure_stop_name: "Jeanne d'Arc (Toulouse)",
          arrival_stop_name: 'Canal du Midi (Toulouse)',
          departure_date: '2019-12-14 15:03:00',
          arrival_date: '2019-12-14 15:06:00',
          trip_code: '',
          gCO2: 5.886
        },
        {
          id: 12,
          type: 'Walking',
          label: 'Walking FROM Canal du Midi (Toulouse) TO 62B Rue de Chaussas (Toulouse)',
          distance_m: 462,
          duration_s: 413,
          price_EUR: [0],
          departure_point: 'Canal du Midi (Toulouse)',
          arrival_point: '62B Rue de Chaussas (Toulouse)',
          departure_stop_name: 'Canal du Midi (Toulouse)',
          arrival_stop_name: '62B Rue de Chaussas (Toulouse)',
          departure_date: '2019-12-14 15:06:00',
          arrival_date: '2019-12-14 15:12:53',
          trip_code: '',
          gCO2: 0
        }
      ]
    },
    {
      id: 7,
      label: [],
      category: ['Train'],
      score: 0,
      total_distance: 591332.2249806339,
      total_duration: 27382,
      total_price_EUR: 68,
      departure_point: [0, 0],
      arrival_point: [0, 0],
      departure_date: '2019-12-28 07:14:00',
      arrival_date: '2019-12-28 14:19:00',
      total_gCO2: 3293.4778598915505,
      journey_steps: [
        {
          id: 0,
          type: 'Walking',
          label: 'Walking FROM 52 Boulevard Saint-Germain (Paris) TO Maubert-Mutualité (Paris)',
          distance_m: 89,
          duration_s: 80,
          price_EUR: [0],
          departure_point: '52 Boulevard Saint-Germain (Paris)',
          arrival_point: 'Maubert-Mutualité (Paris)',
          departure_stop_name: '52 Boulevard Saint-Germain (Paris)',
          arrival_stop_name: 'Maubert-Mutualité (Paris)',
          departure_date: '2019-12-14 14:53:40',
          arrival_date: '2019-12-14 14:55:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 1,
          type: 'métro',
          label:
            "Métro 10 / Boulogne Pont de Saint-Cloud - Gare d'Austerlitz / direction: Gare d'Austerlitz (Paris)",
          distance_m: 1358,
          duration_s: 360,
          price_EUR: [0],
          departure_point: 'Maubert-Mutualité (Paris)',
          arrival_point: "Gare d'Austerlitz (Paris)",
          departure_stop_name: 'Maubert-Mutualité (Paris)',
          arrival_stop_name: "Gare d'Austerlitz (Paris)",
          departure_date: '2019-12-14 14:55:00',
          arrival_date: '2019-12-14 15:01:00',
          trip_code: '',
          gCO2: 4.074
        },
        {
          id: 2,
          type: 'Walking',
          label: "Walking FROM Gare d'Austerlitz (Paris) TO 5 Boulevard de l'Hôpital (Paris)",
          distance_m: 254,
          duration_s: 227,
          price_EUR: [0],
          departure_point: "Gare d'Austerlitz (Paris)",
          arrival_point: "5 Boulevard de l'Hôpital (Paris)",
          departure_stop_name: "Gare d'Austerlitz (Paris)",
          arrival_stop_name: "5 Boulevard de l'Hôpital (Paris)",
          departure_date: '2019-12-14 15:01:00',
          arrival_date: '2019-12-14 15:04:47',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 3,
          type: 'Waiting',
          label: '',
          distance_m: 0,
          duration_s: 900,
          price_EUR: [0],
          departure_point: [48.842285, 2.364891],
          arrival_point: [48.842285, 2.364891],
          departure_stop_name: '',
          arrival_stop_name: '',
          departure_date: '2019-12-28 07:14:00',
          arrival_date: '2019-12-28 07:29:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 4,
          type: 'Train',
          label: '',
          distance_m: 585686.2249806339,
          duration_s: 24600,
          price_EUR: [68],
          departure_point: [48.842285, 2.364891],
          arrival_point: [43.611206, 1.453616],
          departure_stop_name: 'Paris Austerlitz',
          arrival_stop_name: 'Toulouse Matabiau',
          departure_date: '2019-12-28 07:29:00',
          arrival_date: '2019-12-28 14:19:00',
          trip_code: 'IC 3705',
          gCO2: 3279.8428598915502
        },
        {
          id: 34,
          type: 'Walking',
          label: 'Walking FROM 64 Boulevard Pierre Semard (Toulouse) TO Marengo-SNCF (Toulouse)',
          distance_m: 226,
          duration_s: 202,
          price_EUR: [0],
          departure_point: '64 Boulevard Pierre Semard (Toulouse)',
          arrival_point: 'Marengo-SNCF (Toulouse)',
          departure_stop_name: '64 Boulevard Pierre Semard (Toulouse)',
          arrival_stop_name: 'Marengo-SNCF (Toulouse)',
          departure_date: '2019-12-14 14:50:38',
          arrival_date: '2019-12-14 14:54:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 35,
          type: 'metro',
          label: 'Métro A / Basso Cambo / Balma - Gramont / direction: Basso Cambo (Toulouse)',
          distance_m: 776,
          duration_s: 60,
          price_EUR: [0],
          departure_point: 'Marengo-SNCF (Toulouse)',
          arrival_point: 'Jean Jaurès (Toulouse)',
          departure_stop_name: 'Marengo-SNCF (Toulouse)',
          arrival_stop_name: 'Jean Jaurès (Toulouse)',
          departure_date: '2019-12-14 14:54:00',
          arrival_date: '2019-12-14 14:55:00',
          trip_code: '',
          gCO2: 2.328
        },
        {
          id: 36,
          type: 'Walking',
          label: 'Walking FROM Jean Jaurès (Toulouse) TO Jean Jaurès (Toulouse)',
          distance_m: 70,
          duration_s: 120,
          price_EUR: [0],
          departure_point: 'Jean Jaurès (Toulouse)',
          arrival_point: 'Jean Jaurès (Toulouse)',
          departure_stop_name: 'Jean Jaurès (Toulouse)',
          arrival_stop_name: 'Jean Jaurès (Toulouse)',
          departure_date: '2019-12-14 14:55:00',
          arrival_date: '2019-12-14 14:57:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 37,
          type: 'Waiting',
          label: 'wait',
          distance_m: 0,
          duration_s: 180,
          price_EUR: [0],
          departure_point: [0, 0],
          arrival_point: [0, 0],
          departure_stop_name: '',
          arrival_stop_name: '',
          departure_date: '2019-12-14 14:57:00',
          arrival_date: '2019-12-14 15:00:00',
          trip_code: '',
          gCO2: 0
        },
        {
          id: 38,
          type: 'metro',
          label: 'Métro B / Borderouge / Ramonville / direction: Borderouge (Toulouse)',
          distance_m: 2411,
          duration_s: 240,
          price_EUR: [0],
          departure_point: 'Jean Jaurès (Toulouse)',
          arrival_point: 'Canal du Midi (Toulouse)',
          departure_stop_name: 'Jean Jaurès (Toulouse)',
          arrival_stop_name: 'Canal du Midi (Toulouse)',
          departure_date: '2019-12-14 15:00:00',
          arrival_date: '2019-12-14 15:04:00',
          trip_code: '',
          gCO2: 7.233
        },
        {
          id: 39,
          type: 'Walking',
          label: 'Walking FROM Canal du Midi (Toulouse) TO 62B Rue de Chaussas (Toulouse)',
          distance_m: 462,
          duration_s: 413,
          price_EUR: [0],
          departure_point: 'Canal du Midi (Toulouse)',
          arrival_point: '62B Rue de Chaussas (Toulouse)',
          departure_stop_name: 'Canal du Midi (Toulouse)',
          arrival_stop_name: '62B Rue de Chaussas (Toulouse)',
          departure_date: '2019-12-14 15:04:00',
          arrival_date: '2019-12-14 15:10:53',
          trip_code: '',
          gCO2: 0
        }
      ]
    }
  ]
}

export default fakeJourney
