////we have access to the Vue object because we imported it in the index.html file (CDN)
//Vue object gives us access to the Vue library, which is a JavaScript library that allows us to create reactive components and data binding between the DOM and the JavaScript code.
const app = Vue.createApp({
    
    data() {
        return {
            firstName: "JMark",
            lastName: "Doe",
            email: "mark@gmail.com",
            gender: 'male',
            picture: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    },

    methods: {
        //async function is a function that returns a promise
        async getUser() {
        //fetch API
            const res = await fetch('https://randomuser.me/api')
//convert to json, we get a promise whiich is in array format but is destructured with the {}            
            const {results} = await res.json()
           // console.log(results)

//we destructure the results array to get the first object           
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large    
        }
    }
});

//mount the app to div with id="app" in index.html
app.mount('#app');