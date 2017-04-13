NavbarController.$inject = ['$rootScope']
function NavbarController($rootScope) {
	const vm = this;

	vm.navCollapsed = true;

	$rootScope.$on('$stateChangeSuccess', _collapseNavbar)

	function _collapseNavbar() {
		vm.navCollapsed = true;
	}
}

module.exports = NavbarController
