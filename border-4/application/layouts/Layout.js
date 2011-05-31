/**
 * Kebab Application Bootstrap Class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.__APP_NAME__.application.layouts
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.__APP_NAME__.application.layouts.Layout = Ext.extend(Ext.Panel, {

    // Application bootstrap
    bootstrap: null,

    layout: 'border',
    border: false,

    initComponent: function() {

        // panels are defined here
        this.mainCenter = new KebabOS.applications.__APP_NAME__.application.views.MainCenter({
            bootstrap: this.bootstrap,
            region: 'center'
        });

        this.east = new KebabOS.applications.__APP_NAME__.application.views.East({
            bootstrap: this.bootstrap,
            region: 'east',
            width:200,
            split:true
        });

        Ext.apply(this, {
            items: [this.mainCenter,this.east]
        });

        KebabOS.applications.__APP_NAME__.application.layouts.Layout.superclass.initComponent.call(this);
    }
});
