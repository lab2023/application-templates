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
        this.accordion1 = new KebabOS.applications.__APP_NAME__.application.views.Accordion1({
            bootstrap: this.bootstrap

        });

        this.accordion2 = new KebabOS.applications.__APP_NAME__.application.views.Accordion2({
            bootstrap: this.bootstrap

        });

        this.accordion3 = new KebabOS.applications.__APP_NAME__.application.views.Accordion3({
            bootstrap: this.bootstrap

        });

        this.accordion4 = new KebabOS.applications.__APP_NAME__.application.views.Accordion4({
            bootstrap: this.bootstrap

        });

        this.accordion5 = new KebabOS.applications.__APP_NAME__.application.views.Accordion5({
            bootstrap: this.bootstrap

        });

        var config = {
            layout:'accordion',
            region: 'west',
            border:false,
            items: [this.accordion1,this.accordion2,this.accordion3,this.accordion4,this.accordion5]
        }

        Ext.apply(this, config);

        KebabOS.applications.__APP_NAME__.application.views.West.superclass.initComponent.apply(this, arguments);
    }
});

