            var Observable = require('core/lib/Observe');

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
