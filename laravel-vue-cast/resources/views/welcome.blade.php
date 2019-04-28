<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }
        </style>
    </head>
    <body>

        <div id="app">

        @{{skills}}

        </div>

        <script src="https://unpkg.com/vue@2.6.10/dist/vue.js" type="text/javascript"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script type="text/javascript" src='js/app.js'></script>

    </body>
</html>

