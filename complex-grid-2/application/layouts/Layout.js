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

    initComponent: function() {

        this.complexGrid = new KebabOS.applications.__APP_NAME__.application.views.ComplexGrid({
            bootstrap: this.bootstrap
        });

        var config = {
            layout:'fit',
            items : this.complexGrid
        }

        Ext.apply(this, config);

        KebabOS.applications.__APP_NAME__.application.layouts.Layout.superclass.initComponent.call(this);
    }
});
