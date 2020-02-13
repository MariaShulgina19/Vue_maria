var exercise1 = new Vue({
    el: '#exercise1',
    data: {
        isOpen: false,
        text: '',
        EnterClicked: 'Enter clicked'
    },
    
    //count the characters entered and show count in count span below
    computed:{
        description : function () {
            return  ' You have entered :' + this.text.length + ' characteristic)'; 
                                  },
                            
          addTextEnter : function () {
            return  this.EnterClicked;
                     }
 
            }
        })
var exercise2 = new Vue ({
    el: '#exercise2',
    data: {
        isOpen: false
    }
})
var exercise3 = new Vue({
    el: '#exercise3',
    data: {
        isOpen: false
    }
})
var exercise4 = new Vue({
    el: '#exercise4',
    data: {
        isOpen: false
    }
})
var exercise5 = new Vue({
    el: '#exercise5',
    data: {
        isOpen: false
    }
})
var exercise6 = new Vue({
    el: '#exercise6',
    data: {
        isOpen: false
    }
})