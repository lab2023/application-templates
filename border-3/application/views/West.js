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
KebabOS.applications.__APP_NAME__.application.views.West = Ext.extend(Ext.Panel, {

    // Application bootstrap
    bootstrap: null,

    initComponent: function() {

        // panels are defined here
        this.westcenter = new KebabOS.applications.__APP_NAME__.application.views.WestCenter({
            bootstrap: this.bootstrap,
            region: 'center'
        });

        this.westsouth = new KebabOS.applications.__APP_NAME__.application.views.WestSouth({
            bootstrap: this.bootstrap,
            region: 'south',
            height:200,
            split:true
        });

        var config = {
            layout:'border',
            region: 'west',
            border:false,
            items: [this.westcenter, this.westsouth]
        }

        Ext.apply(this, config);

        KebabOS.applications.__APP_NAME__.application.views.West.superclass.initComponent.apply(this, arguments);
    }
});

