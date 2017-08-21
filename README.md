# json-simulator

A simple server that answers to a configured URL with a JSON of your choice.

The soluction is a skeleton and now is pretty simple right now.

To use it , configure the json configurations file "definitions.jsn" as you would like:

{
    "routes": [{
                    "url": "/app",
                    "response": {
                        "teste": 2
                    }
                }
    ]
}

routes list has a object that defines the url that will answer , and the json object you want to use.

In the case above, you just need to use in your browser localhost:3000/app to se the json into your browser.
