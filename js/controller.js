var centerControllers = angular.module('centerControllers', ['ui.bootstrap','smart-table']);

centerControllers.controller('ServiceController', function ($scope, $window) {
  $scope.tableData = [{name: "BODYPUMP", desc: "The fastest way to tone and condition your body and get in shape! This is a barbell class set to awesome music while you are motivated by your instructor to push you to your limit!"},
                     {name: "BODYCOMBAT", desc: "Are you ready to rumble? This kick-box style class combines martial art techniques with butt-kicking music for a fantastically motivating workout."},
                     {name: "BODYJAM", desc: "An addictive fusion of the latest dance styles and hottest new sounds. Great cardio workout where you are free to enjoy the sensation of dance."},
                     {name: "BODYBALANCE", desc: "All the best bits from Yoga, Pilates and Tai-Chi combined for a well rounded mind and body experience."},
                     {name: "CXWORX", desc: "Looking for a short, sharp workout that’ll inspire you to the next level of fitness, while strengthening and toning your core muscles? CXWORX™ is for you! Just 30 minutes and you will find the difference."}];
  $scope.tabs = [
    { title:'Gym', contentHead1:'Les Mills Program', contentBody1:'Les Mills, a name synonymous with group exercise classes locally and globally. And many of their most popular classes are available regularly at any California Fitness clubs. With all Les MillsTM programs, a new class is released every 3 months with new music and choreography - you will never get bored. You can expect to burn 250 – 600 calories in our Les MillsTM classes.', 
    table: $scope.tableData, active: true },
    { title:'Aerobic', contentHead1:'Aerobics & Hi-Lo', contentBody1: 'Learn all the basic aerobic moves from the fun filled Aerobics 101 class and step it up to High to Low impact aerobics class for more jumps, turns and harder choreography. The more you sweat the more fun you have.'},
    { title:'Yoga', contentHead1:'Dynamic content 2', contentBody1:'Tran Uy Gym Yoga & Mind Body classes bring together East and West to help you relax, de-stress, improve posture, coordination, mental focus and of course burn calories. Our Yoga & Mind Body classes can also help you develop core strength and body alignment and improve flexibility and balance. Typically, our Yoga & Mind Body classes burn about 250 – 400 calories per class.'},
    { title:'Martial Art', contentHead1:'Martial Art', contentBody1: ''},
    { title:'Personal Training', contentHead1:'Let’s get personal!', contentBody1: 'When you work with Tran Uy Personal Trainers, you’ll benefit from a personal fitness training program that’s custom-built with your goals in mind. They know exactly what it takes to achieve your individual goals in the fastest, safest way possible, from devising a balanced nutritional regimen up to a customized fitness training program to get you the results you want, whether it is to slim down, bulk up, de-stress or improve fitness levels.',
     contentHead2: 'FIT Start', contentBody2: 'Your FIT Start training session, with one of our fitness professionals, is one of the most effective ways of getting started on the right track towards achieving your fitness goals. The FIT Start program includes introduction to the resistance training equipment, providing a basis upon which to build a personalized fitness program. To attend your FIT Start program, simply check-in at the reception. If you have not booked a FIT Start training session yet, please call your preferred club and make an appointment today!',
     contentHead3: 'TRX, your total-body resistance training', contentBody3: 'TRX, or Total-body Resistance Exercise was initially designed by US Navy Seals as a way to keep fit in cramped locations. It works the entire body and is designed to improve functional and core strength, while increasing your range of motion. Industrial-strength nylon suspension cables with handles and foot cradles are attached to overhead anchoring points – using wall or ceiling brackets. It allows for multiple planes of motion, working a variety of muscles and joints simultaneously. TRX trains the muscles by suspending all or part of your body. This engages the entire body – using core and postural muscles – which means it’s great for toning, flexibility and strength training. Most of the exercises are done in a standing position and complement movements in daily life and sport. To make your workout more practical and functional, check it out with our Personal Trainers today and have fun at our exclusive Private Personal Training Area at California Fitness.',
     contentHead4: 'Fuel for your body', contentBody4: 'Nutrition plays a key role in achieving your fitness goals and your body needs to be properly fuelled to perform at its optimum. That’s why you need fitness supplements, and supplements are more than just vitamins. There are supplements for body building, fat loss, weight gain, weight loss, sports nutrition and more. With the help of your personal trainer, supplements - from fat-burning tablets to pre and post exercise snacks and drinks - can be easily incorporated into your fitness training regimen to help you reach your goals faster, more effectively and of course safely. Chat with our Personal Trainers today and find out your right supplements.'}
  ];
});


centerControllers
.controller('ScheduleController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('js/schedule.json').success(function(data) {
                $scope.schedule = data;
        })
}]);


centerControllers.controller('AboutTrainersCtrl', ['$scope', '$http', 
    function ($scope, $http) {
        $http.get('js/trainers.json').success(function(data) {
                $scope.trainers = data;

        });
}]);


// Carousel controller
centerControllers.controller('HomeController', function ($scope) {
    $scope.myInterval = 3000;
    $scope.slides = [
    {
      image: 'img/carousel1.jpg'
    },
    {
      image: 'img/carousel2.jpg'
    },
    {
      image: 'img/carousel3.jpg'
    }
  ];
});


centerControllers.controller('AboutMissionsCtrl', function ($scope) {});
centerControllers.controller('AboutCentersCtrl', function ($scope) {});
centerControllers.controller('ContactCtrl', function ($scope) {});

angular.module('ui.bootstrap.demo').controller('CollapseDemoCtrl', function ($scope) {
  $scope.isCollapsed = false;
});