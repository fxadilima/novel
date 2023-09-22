export default ({ title, description, children }) => (
    <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={description}/>
            <link rel="icon" type="image/svg+xml" href="/book.svg"/>
            <title>{title}</title>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/xcode.min.css"/>
        </head>
        <body>
            <div className="w3-sidebar w3-collapse w3-card" style="width:300px;" id="mySidebar">
                <button className="w3-button w3-hide-large w3-white w3-hover-white w3-right" onClick={
                    () => {
                        document.getElementById('mySidebar').style.display = 'none';
                    }
                }>Close &times;</button>
                <div className="w3-bar-block">
                    <a href="/content/memanah-rajawali" 
                        className="w3-bar-item w3-btn w3-round w3-border" 
                        title="Memanah Rajawali Home">&#129413; Memanah Rajawali</a>
                </div>
            </div>

            <main className="w3-main" style="margin-left:300px;">
                <header>
                    <button className="w3-button w3-large w3-hide-large" onClick={
                        () => {
                            document.getElementById('mySidebar').style.display = 'block';
                        }
                    }>&#9776;</button>
                </header>

                <div className="w3-container">
                    <h1>&#9775; {title}</h1>
                    {children}
                </div>
            </main>
        </body>
    </html>
);
