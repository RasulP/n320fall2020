// A Book Component (it would be cool if it was styled to look like a book cover)
Vue.component("book-view", {
    //Properties 
    props: ["book"],
    // Must contain an Title, an Emoji/smiley for the 'cover', and the author
    template: "<div><li>{{book.title}} {{book.author}}<br> {{book.emote}} </li> </div>"



})

// The above three items should be properties that are passed into the component from its tag

let app = new Vue({
    el: "#app",
    data: {
        btnStatus: true,
        message: "Book Selection",
        bookOne: [{ id: 0, title: "ABSALOM ABSALOM!", emote: "📚", author: "BY JOHN GRISHAM" }, ],
        bookTwo: [{ id: 1, title: "A TIME TO KILL", emote: "📚", author: "BY JOHN GRISHAM", }, ]
    },
    methods: {
        // A button to show / hide the second book using a v-if prop
        hideBook: function() {
            // this.btnStatus = true;
            this.btnStatus = true;

            if (this.btnStatus > 0) {
                this.btnStatus = 0
                console.log(this.btnStatus)

            } else if (this.btnStatus < 1) {
                this.btnStatus = 1;
                console.log(this.btnStatus)
            }

            return (this.btnStatus)
        }
    }


})