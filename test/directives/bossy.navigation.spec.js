describe('bossyNavigation tests', function() {

    var $rootScope, $compile, scope, elem;
    
    beforeEach(function() {
        module('bossy-templates');
    });

    beforeEach(inject(function(_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('Element is created', function() {
        scope = $rootScope.$new();
        scope.menuObj = {};
        elem = angular.element('<navigation></navigation>');
        $compile(elem)(scope);
        expect(elem).toNotEqual(null);
    });
});

