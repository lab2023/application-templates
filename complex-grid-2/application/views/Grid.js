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
KebabOS.applications.__APP_NAME__.application.views.Grid = Ext.extend(Ext.grid.GridPanel, {

    // Application bootstrap
    bootstrap: null,
    border:false,

    initComponent: function() {

        this.store = new KebabOS.applications.__APP_NAME__.application.models.GridDataStore({
            bootstrap:this.bootstrap
        });

        // grid config
        var config = {
            loadMask: true,
            viewConfig: {
                // To be equal to the width of columns
                forceFit: true
            }
        };

        this.columns = [new Ext.grid.CheckboxSelectionModel({}),
            {
                header   : 'ID',
                dataIndex: 'id',
                sortable:true
            },{
                header   : 'Title',
                dataIndex: 'title',
                sortable:true
            },
            {
                header   : 'Description',
                dataIndex: 'description',
                sortable:true
            }
        ];
        KebabOS.applications.__APP_NAME__.application.views.ComplexGrid.superclass.initComponent.apply(this, arguments);
    },
    
    listeners: {
        afterRender: function() {
            this.store.load();
        }
    }
});
