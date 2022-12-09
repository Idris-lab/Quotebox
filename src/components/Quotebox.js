import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";

let styles = {

    quoteBox: {
        margin: "3em auto",
        borderRadius: 5,
        paddingBottom: 50,
        paddingTop: 30,
        width: 600,
        background: "#ffffff",
        color: "#1BC0A9",
    },

    author: {
        textAlign: "right",
        marginRight: 65,
    },


    tweet1: {
        width: 50,
        height: 30,
        padding: 10,
        borderRadius: 5,
        background: "#1BC0A9",
        color: "#ffffff",
        verticalAlign: "unset",
        opacity: 100

    },

    tweet2: {
        width: 50,
        height: 30,
        padding: 10,
        borderRadius: 5,
        background: "#1BC0A9",
        color: "#ffffff",
        verticalAlign: "unset"

    },

    tumblr: {
        marginLeft: 20,
        paddingLeft: 14,
        paddingRight: 14
    },

    newQuote: {
        backgroundColor: "#1BC0A9",
        borderRadius: 5,
        color: "#ffffff",
        height: 40,
        width: 90,
        border: "none",
        outline: "none",
        cursor: "pointer",

    },

    buttonsContainer: {
        display: "flex",
        width: 450,
        margin: "0 auto",
        marginTop: 40

    },

    flex1: {
        flex: 3,
    },

    flex2: {
        flex: 1
    },

}



const quotes = [
    {
        quote: 'Change your thoughts and you change your world.',
        author: '– Norman Vincent'
    },
    {
        quote: 'Very little is needed to make a happy life, it is all within yourself, in your way of thinking.',
        author: '– Marcus Aurelius'
    },
    {
        quote: 'Life is from the inside out. When you shift on the inside, life shifts on the outside.',
        author: '– Kamal Ravikant'
    },
    {
        quote: 'Life can be simple and beautiful. Focus on the good things',
        author: '– Maxime Lagacé'
    },
    {
        quote: 'If you don’t like something change it; if you can’t change it, change the way you think about it.',
        author: '– Mary Engelbreit'
    },
    {
        quote: "Controlling complexity is the essence of computer programming",
        author: "– Brian Kernighan"
    },
    {
        quote: "You can't use up creativity. The more you use, the more you have",
        author: "– Maya Angelou"
    },
    {
        quote: "Do one thing every day that scares you",
        author: "– Eleanor Roosevelt"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can",
        author: "– Arthur Ashe"
    },
    {
        quote: "There is only one corner of the universe you can be certain of improving, and that's your own self",
        author: "– Aldous Huxley"
    },
]


class Quotebox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newQuote: quotes[0].quote,
            newAuthor: quotes[0].author,
        }

        this.handleClick = this.handleClick.bind(this);


    }



    handleClick() {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        const quoteObj = quotes[randomNumber];

        this.setState(prevState => ({
            newQuote: prevState.newQuote = quoteObj.quote,
            newAuthor: prevState.newAuthor = quoteObj.author,
        }));

        const randomColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;

        styles.quoteBox = { ...styles.quoteBox, color: randomColor };
        styles.tweet1 = { ...styles.tweet1, background: randomColor };
        styles.tweet2 = { ...styles.tweet2, background: randomColor };
        styles.newQuote = { ...styles.newQuote, background: randomColor }


        document.body.style.backgroundColor = randomColor;


    }


    render() {

        return (
            <div id="quote-box" style={styles.quoteBox}>
                <figure>
                    <blockquote id="quote">
                        "{this.state.newQuote}."
                    </blockquote>
                    <figcaption><p id="author" style={styles.author}>{this.state.newAuthor}</p> </figcaption>
                </figure>
                <section style={styles.buttonsContainer}>
                    <div className="tweets-container" style={styles.flex1}>
                        <a  style={styles.tweet1} href={`https://twitter.com/`} id="tweet-quote" target="_blank"><FontAwesomeIcon icon={faTwitter} size='xl' transform='down-4' vertOriginY={0} /></a>
                        <a style={{ ...styles.tweet2, ...styles.tumblr }} href="https://www.tumblr.com/" id="tweet-quote" className="tweet2" target="_blank"><FontAwesomeIcon icon={faTumblr} size='xl' transform='down-4' /></a>
                    </div>
                    <div style={styles.flex2}>
                        <button id="new-quote" style={styles.newQuote} onClick={this.handleClick}>New quote</button>
                    </div>
                </section>
            </div>
        )
    }

}

export default Quotebox;