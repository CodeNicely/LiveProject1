Router.route('/', {
    template: 'home'
});
Router.route('/home', {
    template: 'home'
});
Router.route('/registers');

Router.route('/ulogin');

Router.configure({
    layoutTemplate: 'main'
});


Router.route('durg', {
    template: 'durg'
});


Router.route('product', {
    template: 'product'
});


Router.route('bhilai', {
 template: 'bhilai'

});


Router.route('dhamtari', {
    template: 'dhamtari'
});
Router.route('nandgaon', {
    template: 'nandgaon'
});
Router.route('raipur', {
    template: 'raipur'
});
