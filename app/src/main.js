/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var GitHubBanner = require('adarta/widgets/GitHubBanner');
    var Rolex = require('adarta/widgets/ClockWidget');

    // create the main context
    var mainContext = Engine.createContext();

    // Start App Here
    mainContext.setPerspective(1000);

    var logo = new ImageSurface({
        size: [200, 200],
        content: 'content/images/adarta_logo.png',
        classes: ['backfaceVisibility']
    });

    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        align: [0.5, 0.5],
        origin: [0.5, 0.5],
        transform: function() {
            return Transform.rotateY(.002 * (Date.now() - initialTime));
        }
    });

    var banner = new GitHubBanner({
        size: [400, 40],
        offset: 1,
        message: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fork me on GitHub&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
        account: 'talves',
        repo: 'famous-rolex',
        position: GitHubBanner.POSITION.RIGHT_TOP,
        classes: ['github-banner']
    });

    var rolex = new Rolex({
      diameter: 400,
      clockBackgroundImage: 'http://fc01.deviantart.com/fs26/f/2008/106/6/a/Classic_Roam_Clock_Face_by_a_lemonhead.png'
    });

    //mainContext.add(centerSpinModifier).add(logo);
    mainContext.add(banner);
    mainContext.add(rolex);
});
