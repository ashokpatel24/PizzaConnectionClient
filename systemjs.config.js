(function(global) {

    var map = {
        'rxjs': '/node_modules/rxjs',
        '@angular': '/node_modules/@angular',
        'moment': '/node_modules/moment/moment.js',
        'primeng': "/node_modules/primeng",
        '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.min.js',
        '@angular/animations/browser':'node_modules/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js'
    };

    var packages = {
        'app':                        { main: 'boot.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'primeng':                    { defaultExtension: 'js' }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'forms',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'testing',
        'upgrade'
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);

})(this);


