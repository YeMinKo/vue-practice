function setOutSideText(){
    app.greeting = "hello world"; // set outside data to Vue
}

function showLog(){
    console.log("Greeting is : "+ app.$data.greeting); // get Vue data to outside
}   

var app = new Vue({
    el: '#app',
    data: {
        isEditMode: false,
        greeting: "Hi",
        url: null,
        choosenFile: null,
    },
    methods: {
        changeMode(){
            if(this.iconName === "check")
                this.isEditMode = false
            else 
                this.isEditMode = true
        },
        showImagePreview(e){ // for default file upload
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
        showPreview(){ // for vuetify file upload
            if(this.choosenFile){
                this.url = URL.createObjectURL(this.choosenFile);
            }
        }
    },
    computed: {
        iconName(){
            return this.isEditMode ? "check": "pencil"
        },
        
        
    }
})