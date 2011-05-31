/**
 * Kebab Application Bootstrap Class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.__APP_NAME__.application.views
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.__APP_NAME__.application.views.East = Ext.extend(Ext.Panel, {

    // Application bootstrap
    bootstrap: null,

    initComponent: function() {

        // panels are defined here
        this.eastcenter = new KebabOS.applications.__APP_NAME__.application.views.EastCenter({
            bootstrap: this.bootstrap,
            region: 'center'
        });

        this.eastsouth = new KebabOS.applications.__APP_NAME__.application.views.EastSouth({
            bootstrap: this.bootstrap,
            region: 'south',
            height:200,
            split:true
        });

        var config = {
            layout:'border',
            region: 'east',
            border:false,
            items: [this.eastcenter, this.eastsouth]
        }

        Ext.apply(this, config);

        KebabOS.applications.__APP_NAME__.application.views.East.superclass.initComponent.apply(this, arguments);
    }
});

