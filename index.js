var app=angular.module('inputBasicDemo', ['ngMaterial', 'ngMessages']);
app.controller('DemoCtrl', ['$scope', '$mdDialog', '$element', function($scope,$mdDialog,$element){
    $scope.user = {
      name: '',
      email: '',
      citta: '',
      zona:''
    };
    
    $scope.numPostiLetto = 'Nessuno';
    $scope.numPostiDivano = 'Nessuno';
    $scope.numPostiTerra = 'Nessuno';
    $scope.numCoinquilini='';
    $scope.disponibilita='Nessuno';
    $scope.myDate = new Date();
    $scope.ciao=false;
    
    //questi tre dialog sono per le dialog
    $scope.dialog=0;
    $scope.dialog_1=0;
    $scope.dialog_questionMark=0;
    
    //il pezzo di codice seguente mi aggiunge l'attributo name al datePicker di arrivo
    var myDatePicker = angular.element($element[0].querySelector('#myDatePicker'));
    var myDatePickerInputContainer = angular.element(myDatePicker[0].children[1]);
    var myDatePickerInput = angular.element(myDatePickerInputContainer[0].children[0]);
    myDatePickerInput.attr("name", "Data di inizio"); 
    
    //il pezzo di codice seguente mi aggiunge l'attributo name al datePicker di fine
    var myDatePicker_1 = angular.element($element[0].querySelector('#myDatePicker_1'));
    var myDatePickerInputContainer_1 = angular.element(myDatePicker_1[0].children[1]);
    var myDatePickerInput_1= angular.element(myDatePickerInputContainer_1[0].children[0]);
    myDatePickerInput_1.attr("name", "Data di fine");  

    $scope.minDate=new Date(
	    $scope.myDate.getFullYear(),
	    $scope.myDate.getMonth(),
	    $scope.myDate.getDate()+1
    );
    
    
    $scope.$watch('myDate', function(newValue, oldValue) {
    $scope.minDate = new Date(
	    $scope.myDate.getFullYear(),
	    $scope.myDate.getMonth(),
	    $scope.myDate.getDate()+1
    );
    });



/*
    setTimeout(function(){
	    console.log("myDatePicker", myDatePicker);
	    console.log("minDate", $scope.minDate);
	    },5000);
*/

    $scope.possibilities=['Sempre', 'Tutti i weekend', 'Sempre tranne i weekend'];


    $scope.isOpen = false;
       
    $scope.numeri = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
   
    $scope.tags = [
        { category: 'serata', name: 'Festosa' },
        { category: 'serata', name: 'Rilassata' },
        { category: 'serata', name: 'Solitaria' },
        { category: 'serata', name: 'Alcolica' },
        { category: 'universita', name: 'Giurisprudenza' },
        { category: 'universita', name: 'Ingegneria' },
        { category: 'universita', name: 'Medicina' },
        { category: 'universita', name: 'Agraria' },
        { category: 'universita', name: 'Filosofia' },
        { category: 'universita', name: 'Lettere' },
        { category: 'interessi', name: 'Pesca'},
        { category: 'interessi', name: 'Calcio'},
        { category: 'interessi', name: 'Basket'},
        { category: 'interessi', name: 'Moda'},
        { category: 'interessi', name: 'Viaggi'},
        { category: 'interessi', name: 'Politica'},
        { category: 'interessi', name: 'Scalate'},
        { category: 'interessi', name: 'Disco'},
        { category: 'interessi', name: 'Pub'},
        { category: 'interessi', name: 'Musica'},
        { category: 'interessi', name: 'Cinema'},
        { category: 'interessi', name: 'Libri'},
        { category: 'interessi', name: 'Fotografia'},
        { category: 'interessi', name: 'Vintage'},
        { category: 'interessi', name: 'Arte'},
        { category: 'musica', name: 'Rock'},
        { category: 'musica', name: 'Ambient'},
        { category: 'musica', name: 'Elettronica'},
        { category: 'musica', name: 'Indie'}
        { category: 'musica', name: 'Classica'},
        { category: 'musica', name: "Rock '60"},
        { category: 'musica', name: "Rock '70"},
        { category: 'musica', name: "Rock '80"},
        { category: 'musica', name: 'Rap'}
        
        
    ];
    $scope.selectedTags = [];
    $scope.printSelectedTags = function printSelectedTags() {
        var numberOfToppings = this.selectedTags.length;

        // If there is more than one topping, we add an 'and'
        // to be gramatically correct. If there are 3+ toppings
        // we also add an oxford comma.
        if (numberOfToppings > 1) {
          var needsOxfordComma = numberOfToppings > 2;
          var lastToppingConjunction = (needsOxfordComma ? ',' : '') + ' e ';
          var lastTopping = lastToppingConjunction +
              this.selectedTags[this.selectedTags.length - 1];
          return this.selectedTags.slice(0, -1).join(', ') + lastTopping;
        }

        return this.selectedTags.join('');
      };
	  
	$scope.color = {
        red: 0,
		green: 0,
		blue: 0
  	};
  
  	$scope.flagDisability=$scope.numPostiLetto;
  	$scope.$watch('numPostiLetto', function(newValue, oldValue) {
    	if($scope.numPostiLetto!='Nessuno' ){
	    	$scope.color.red=15;
			console.log("numPostiLetto", $scope.numPostiLetto);
		} else{
			$scope.color.red=0;
		}
    });
    
    $scope.$watch('numPostiDivano', function(newValue, oldValue) {
    	if($scope.numPostiDivano!='Nessuno' ){
	   		$scope.color.green=10;
	   		console.log("numPostiDivano", $scope.numPostiDivano);
		} else{
			$scope.color.green=0;
		}
    });
    
    $scope.$watch('numPostiTerra', function(newValue, oldValue) {
    	if($scope.numPostiTerra!='Nessuno' ){
	    	$scope.color.blue=5;
			console.log("numPostiTerra", $scope.numPostiTerra);
		} else{
			$scope.color.blue=0;
		}
    });
    
    
/*
    $scope.$watch('myDate', function(newValue, oldValue) {
    $scope.minDate = new Date(
	    $scope.myDate.getFullYear(),
	    $scope.myDate.getMonth(),
	    $scope.myDate.getDate()+1
    );
    });
    
    $scope.$watch('myDate', function(newValue, oldValue) {
    $scope.minDate = new Date(
	    $scope.myDate.getFullYear(),
	    $scope.myDate.getMonth(),
	    $scope.myDate.getDate()+1
    );
    });
*/
  
  	$scope.status = '  ';
  	$scope.customFullscreen = false;

  	$scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    	if($scope.dialog===0){
			$mdDialog.show(
				$mdDialog.alert()
				.parent(angular.element(document.querySelector('#popupContainer')))
				.clickOutsideToClose(false)
				.title('Ricordati di allegare due foto della casa nella mail')
				// .textContent('Ricontrolla la mail prima di inviare!') chiedere consiglio se mettercelo o meno
				.ariaLabel('Alert Dialog Demo')
				.ok('OK!')
				.targetEvent(ev)
			)
			$scope.dialog=1;
    	}
  	};
  
  	$scope.showAlert_1 = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    	if($scope.dialog_1===0){
			$mdDialog.show(
				$mdDialog.alert()
				.parent(angular.element(document.querySelector('#popupContainer')))
				.clickOutsideToClose(false)
				.title('Il file che stai per scaricare deve essere compilato e allegato, insieme alle due foto, al messsaggio Facebook')
				// .textContent('Ricontrolla la mail prima di inviare!') chiedere consiglio se mettercelo o meno
				.ariaLabel('Alert Dialog Demo')
				.ok('OK!')
				.targetEvent(ev)
				)
			$scope.dialog_1=1;
    	}
  	};
  
  	$scope.showAlert_questionMark = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    	$mdDialog.show(
			$mdDialog.alert()
			.parent(angular.element(document.querySelector('#popupContainer')))
			.clickOutsideToClose(false)
			.title('Disponibilita permanente')
			.textContent('Indica la possibilita di essere sempre disposti ad ospitare, omettendo una data specifica. Avrai maggiori richieste!')
			.ariaLabel('Alert Dialog Demo')
			.ok('OK!')
			.targetEvent(ev)
		)
	};
  
  
/*
  $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    if($scope.dialog===0){
    var confirm = $mdDialog.confirm()
          .title('Ricordati di allegare due foto della casa')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('OK')

    $mdDialog.show(confirm).then(function() {
      $scope.status = 'You decided to get rid of your debt.';
          console.log("status", $scope.status);

    });
    $scope.dialog=1;
    }
  };
*/

    
  }])
app.config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });