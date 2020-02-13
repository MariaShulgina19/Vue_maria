var exercise1 = new Vue({
    el: '#exercise1',
    data: {
        isOpen: false,
        text: '',
        EnterClicked: 'Enter clicked'
        //keyCount:0,
    },
    
    //count the characters entered and show count in count span below
    computed:{
        description : function () {
            return  ' You have entered :' + this.text.length + ' characteristic'; 
                                 },                           
        //   addTextEnter : function () {
        //      return  this.EnterClicked;
        //  
        //              }
            },
        
methods:{
        addTextEnter: function (){
            this.message= 'you clicked enter'}
        
        },
})



var exercise2 = new Vue ({
    el: '#exercise2',
    data: {
        isOpen: false,
        workoutDuration:0,
        totalworkoutDuration: [],
        gym: [

            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 }
        ],
        
        total:'',
             },
    computed:{

        RunTotal: function (){
           this.totalworkoutDuration.pop()
           this.totalworkoutDuration.push(this.workoutDuration)

           //this.total=this.totalworkoutDuration.sum//no
           return  this.totalworkoutDuration;
           
                                 },
        TestTotal: function (){
        return this.totalworkoutDuration.reduce((acc, workoutDuration) => acc + workoutDuration, 0);
        

                                 },
        gymTotal: function (){
        return this.gym.reduce((acc, item) => acc + item.value, 0);
        

                                    },
                 },
                
})
var exercise3 = new Vue({
    el: '#exercise3',
    data: {
        isOpen: false,
        answer2: '',
        base: '',
        date: '',
        GBP: '',
        USD: '',
        price: '',
        

    },

    methods:{
        getAnswer2: function () {
            axios.get('https://api.exchangeratesapi.io/latest?symbols=USD,GBP')
            // {"rates":{"USD":1.0914,"GBP":0.84058},"base":"EUR","date":"2020-02-12"}
            .then(function (response) {
                exercise3.date = response.data.date,
                exercise3.base= response.data.base;
                exercise3.GBP= response.data.rates.GBP;
                exercise3.USD= response.data.rates.USD;
            })
            .catch(function (error) {
                exercise3.date = 'Error! Could not reach the API. ' + error
            })
            },
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