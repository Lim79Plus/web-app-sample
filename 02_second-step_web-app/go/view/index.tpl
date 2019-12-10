<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>first hello world!</title>
</head>
<style>
        h1 {
            text-align: center;
            margin-top: 50%;
            font-family: 'Times New Roman', Times, serif;
            color: #ffffff;
            font-size: 4rem;
        }

        body {
            background-color: #15202b
        }
    </style>
<body>
    <div>
        <h1>{{ .Message }}</h1>
    </div>
</body>
</html>