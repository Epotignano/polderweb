angular.module('polderweb.mutreden', [])
    .constant('mutredenParentStata','admin')

    .config(function($stateProvider, mutredenParentStata) {
        $stateProvider

            .state('mutreden', {
                url: '/mutreden',
                parent: mutredenParentStata,
                abstract: true,
                template: '<div ui-view=""></div>'
            })

            .state('mutreden.list', {
                url:'/list',
                templateUrl:'app/modules/admin/mutreden/mutreden.html',
                controller:'MutRedenController as ctrl',
                resolve: { mutredens: function (MutReden) {
                    return MutReden.findAll();
                    }
                }
            })
            .state('mutreden.create',
            {
                url:'/create',
                templateUrl:'app/modules/admin/mutreden/create-mutreden/create-mutreden.html',
                controller:'createMutRedenCtrl'
            })

            .state('mutreden.view',
            {
                url:'/:mutredenId',
                templateUrl:'app/modules/admin/mutreden/view-mutreden/view-mutreden.html',
                controller:'viewMutRedenCtrl'
            });

    });
