function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([""]);
    const [color, setColor] = React.useState("#333");

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () => {


            const colors = [
                '#16a085',
                '#27ae60',
                '#2c3e50',
                '#f39c12',
                '#e74c3c',
                '#9b59b6',
                '#FB6964',
                '#342224',
                '#472E32',
                '#BDBB99',
                '#77B1A9',
                '#73A857'
            ];

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randIndex])
        setColor(colors[randColorIndex])
    }

    return (
        <div style={{backgroundColor: color, minHeight: "100vh"}}>
            <div className="container pt-5" id="quote-box">
                <div className="jumbotron">
                    <div className="card">
                        <div className="card-header">Random Quote Generator</div>
                        <div className="card-body">
                            {randomQuote ? (
                                <>
                                <h5 className="card-text" id="text">&quot;{randomQuote.text}&quot;</h5>
                                <p className="card-title" id="author">- {randomQuote.author || "No author"}</p>

                                </>

                            ) : (
                                <h2>Loading...</h2>
                            )}

                            <div className="row2">
                                <button onClick={getNewQuote} className="btn btn-primary ml-3" id="new-quote">New Quote</button>
                                <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + 
                            encodeURIComponent(
                                '"' + randomQuote.text + '" ' + randomQuote.author
                            )
                            }target="_blank" className="btn btn-warning" id="tweet-quote">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                    encodeURIComponent(randomQuote.author) +
                    "&content=" +
                    encodeURIComponent(randomQuote.text) +
                    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"} target="_blank" className="btn btn-danger" id="tumblr-quote">
                                    <i className="fa fa-tumblr"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">By <a href="https://www.freecodecamp.org/Rajprabhu">Rajprabhu Rajasekran</a></div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'))