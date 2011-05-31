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
KebabOS.applications.__APP_NAME__.application.views.Tab2 = Ext.extend(Ext.Panel, {

    // Application bootstrap
    bootstrap: null,

    initComponent: function() {

        // tab config
        var config = {
            title:'tab2',
            html: 'tab2'
        }

        Ext.apply(this, config);

        KebabOS.applications.__APP_NAME__.application.views.Tab2.superclass.initComponent.apply(this, arguments);
    }
});

