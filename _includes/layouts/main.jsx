export default ({ title, description, children }) => (
    <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={description}/>
            <link rel="icon" type="image/svg+xml" href="/book.svg"/>
            <title>Pedang Langit dan Golok Pembunuh Naga - {title}</title>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/xcode.min.css"/>
        </head>
        <body>
            <div className="w3-main w3-padding-16">
                <div className="w3-container">
                    <h1>&#129413; {title}</h1>
                    {children}
                </div>
            </div>
        </body>
    </html>
);
