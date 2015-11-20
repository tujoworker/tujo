
//Add this file in /lib -> https://github.com/tujoworker/tujo/blob/master/Observe.js
var Observable = require('/lib/Observe');

var foo = {
    x: 'y',
};

Observable.observe(foo, function(changes){
    console.log('Changes: ', changes);
});

setTimeout(function(){
    foo.x = 'z';
    setTimeout(function(){
        foo.x = {foo: 'bar'};
        setTimeout(function(){
            delete foo.x;
        }, 30);
    }, 30);
}, 30);

// You will see this in the log:
//
// Changes:  (
//         {
//         name = x;
//         object =         {
//             x = z;
//         };
//         oldValue = y;
//         type = update;
//     }
// )
// Changes:  (
//         {
//         name = x;
//         object =         {
//             x =             {
//                 foo = bar;
//             };
//         };
//         oldValue = z;
//         type = update;
//     }
// )
// Changes:  (
//         {
//         name = x;
//         object =         {
//         };
//         oldValue =         {
//             foo = bar;
//         };
//         type = delete;
//     }
// )
