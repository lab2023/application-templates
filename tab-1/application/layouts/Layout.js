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
KebabOS.applications.__APP_NAME__.application.layouts.Layout = Ext.extend(Ext.TabPanel, {

    // Application bootstrap
    bootstrap: null,

    border: false,
    activeTab:0,

    initComponent: function() {

        // panels are defined here
        this.tab1 = new KebabOS.applications.__APP_NAME__.application.views.Tab1({
            bootstrap: this.bootstrap

        });

        this.tab2 = new KebabOS.applications.__APP_NAME__.application.views.Tab2({
            bootstrap: this.bootstrap

        });

        this.tab3 = new KebabOS.applications.__APP_NAME__.application.views.Tab3({
            bootstrap: this.bootstrap

        });

        Ext.apply(this, {
            items: [this.tab1, this.tab2, this.tab3]
        });

        KebabOS.applications.__APP_NAME__.application.layouts.Layout.superclass.initComponent.call(this);
    }
});
