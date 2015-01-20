var win = Ti.UI.createWindow({backgroundColor: 'white'});

var myTemplate = {
    properties: {
        accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
        selectionStyle: Ti.UI.iPhone.ListViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        height: 95,
        backgroundColor: 'green',
        clipMode: Ti.UI.iOS.CLIP_MODE_DISABLED,
    },
    childTemplates: [
        {                            
            type: 'Ti.UI.TextArea', 
            bindId: 'input', 
            properties: {
                top: 0,
                bottom: 0,
                left: 10,
                right: 10,
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                
                color: 'black',
                tintColor: 'black',
                backgroundColor: '#889f29f9',
                font: {
                    fontFamily: 'HelveticaNeue',
                    fontSize: 16,
                },
                scrollable: false,
                scrollsToTop: false,
                suppressReturn: false,
                
            }
        },
    ]
};

var listView = Ti.UI.createListView({
    top: 40,
    templates: { 'template': myTemplate },
    defaultItemTemplate: 'template',
});
var sections = [];

var section = Ti.UI.createListSection();
var data = [
    { input: {value: 'One line. '}},
    { input: {value: 'Four Lines: 1 \n2 \n3 \n4'}},
    { input: {value: 'A lot of lines: 1 \n2 \n3 \n4 \n5 \n6 \n7 \n8 \n9 \n10'}},
];
section.setItems(data);
sections.push(section);

listView.setSections(sections);
win.add(listView);
win.open();

