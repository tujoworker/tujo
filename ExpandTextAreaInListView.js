var win = Ti.UI.createWindow({backgroundColor: 'white'});

var myTemplate = {
    properties: {
        accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
        selectionStyle: Ti.UI.iPhone.ListViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        height: 100,
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
    { input: {value: 'Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst END. '}},
    { input: {value: 'Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst. '}},
];
section.setItems(data);
sections.push(section);

listView.setSections(sections);
win.add(listView);
win.open();

