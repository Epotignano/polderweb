angular.module('polderweb')
	.controller('createMutRedenCtrl',
		function($scope, $state,MutReden,authService){
         if(authService.getToken()==null){
           $state.go('auth.login');
         }else{

		 $scope.addMutReden = function (form) {
	        $scope.submitted = true;
	        if (form.$valid) {
                MutReden.addMutReden($scope.mutredens);
	          $state.go('mutreden.list'); // Terug naar homepage
	        }
    	}
         }

	});
