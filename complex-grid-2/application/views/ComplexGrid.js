/**
 * __APP_NAME__ Application complexGrid class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.__APP_NAME__.application.views
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.__APP_NAME__.application.views.ComplexGrid = Ext.extend(Kebab.library.ext.ComplexEditorGridPanel, {

    // Application bootstrap
    bootstrap: null,
    border:false,

    initComponent: function() {

        this.dataStore = new KebabOS.applications.__APP_NAME__.application.models.GridDataStore({
            bootstrap:this.bootstrap
        });

        KebabOS.applications.__APP_NAME__.application.views.ComplexGrid.superclass.initComponent.apply(this, arguments);
    },

    buildColumns: function() {

        return [
            {
                header : 'ID',
                dataIndex :'id',
                width:12
            },
            {
                header : Kebab.helper.translate('Title'),
                dataIndex :'title',
                width:50
            },
            {
                header : Kebab.helper.translate('Description'),
                dataIndex :'description',
                width:120
            }
        ]
    },

    listeners: {
        afterRender: function() {
            this.store.load({params:{start:0, limit:25}});
            this.batchButton.toggle();
            this.getView().fitColumns();
        }
    }
});