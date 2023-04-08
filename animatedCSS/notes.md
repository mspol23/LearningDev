# Transitions CSS

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animated</title>

    <Style>

        /* body {
            width: 100vw;
            height: 100vh;

            display: flex;
            align-items: center;
            justify-content: center;

        } */

        .box-blue {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            background-color: blue;
            transition-property: background-color, width;
            transition-duration: 1s;
        }

        .box-blue:hover {
            background-color: yellow;
            width: 200px;
            transition-property: background-color, width;
            transition-duration: 1s;
        }

        .line {
            width: 100%;
            background-color: blue;
            height: 25px;
            margin-bottom: 10px;
            transition: width;
            transition-duration: 1s;
        }

        body:hover .line {
            width: 20px;
            background-color: rgb(255, 0, 234);
            /* transition-timing-function: ease; */ /* padrão */

        }

        .ease {
            transition-timing-function: ease; 
        }

        .linear {
            transition-timing-function: linear; 
        }

        .ease-in {
            transition-timing-function: ease-in;
        }

        .ease-out {
            transition-timing-function: ease-out;
        }

        .ease-in-out {
            transition-timing-function: ease-in-out;
        }

        .cube {
            transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

    </Style>
</head>
<body>
    <div class="line ease"></div>
    <div class="line linear"></div>
    <div class="line ease-in"></div>
    <div class="line ease-out">EASE-OUT</div>
    <div class="line ease-in-out">ease-in-out</div>
    <div class="line cube">cubic-bezier</div>
</body>
</html>
```
# CSS Animation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transition</title>

    <style>
        body {
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: space-around;
            align-items: center;

        }

        .box {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            /* transition: background-color 1s ease 2s; */
        }

        .box-blue {
            background-color: blue;
            transition: background-color 1s ease 2s;
        }

        .box-blue:hover {
            background-color: #ff0;
            /* transition: background-color 1s ease-in 1s; */
            
        }

        .box-green {
            background-color: green;
            transition: all 1s linear 2s;
        }

        .box-green:hover {
            background-color: rgb(255, 0, 200);
            width: 300px;
            height: 300px;
            border-radius: 30%;
            transition: all 1s cubic-bezier(0.1, 1, 0.2, -0.7);
            
        }

        .box-yellow {
            background-color: yellow;
            transition: all 1s linear 0.5s;

        }

        .box-yellow:hover {
            background-color: violet;
            transition: width 2s ease-in-out 0s;
            width: 200px;
        }

        
    </style>

</head>

<body>
    
    <div class="box box-blue"></div>
    <div class="box box-green"></div>
    <div class="box box-yellow"></div>
</body>

</html>
```

## Animation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS animation</title>

    <style>
        .ball {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            background-color: blue;
            position: relative;

            animation-name: exemple-two;
            animation-duration: 5s;
            animation-delay: 1s;
            animation-iteration-count: 2;
            animation-direction: alternate-reverse;
        }

        @keyframes exemple-one {

            from {
                background-color: blueviolet;
            }

            to {
                background-color: rosybrown;
            }
        }

        @keyframes exemple-two {
            0% {
               background-color: blueviolet;
               left: 0;
               top: 0;
            }

            25% {
                background-color: rosybrown;
                left: 600px;
                top: 0px
            }   
            

            50% {
                background-color: blue;
                left: 600px;
                top: 600px;
            }

            70% {
                background-color: aqua;
                left: 0px;
                top: 600px;
            }

            100% {
                background-color: yellow;
                left: 0px;
                top: 0px;
            }
        }
    </style>

</head>
<body>
    <div class="ball"></div>
</body>
</html>
```

## Animation-timing-function:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animation Function</title>

    <style>
        .linear {
            width: 100px;
            height: 50px;
            background-color: blueviolet;
            position: relative;
            color: white;
            font-weight: bolder;

            animation-name: example;
            animation-duration: 2s;

        }

        .linear {
            animation-timing-function: linear;
        }

        .ease {
            animation-timing-function: ease;
        }
        
        .ease-in {
            animation-timing-function: ease-in;
        }
        
        .ease-out {
            animation-timing-function: ease-out;
        
        }
        .ease-in-out {
            animation-timing-function: ease-in-out;
        }
        
        
        @keyframes example {

            from {
                left: 0px
            }

            to {
                left: calc(100% - 100px);
            }
        }

    </style>

</head>

<body>
    
    <div class="linear">LINEAR</div>
    <div class="linear ease">EASE</div>
    <div class="linear ease-in">EASE-IN</div>
    <div class="linear ease-out">EASE-OUT</div>
    <div class="linear ease-in-out">EASE-IN-OUT</div>

</body>

</html>
```

## Animation-fill-mode

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animation</title>

    <style>
        .ball {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            background-color: blue;
            position: relative;

            animation-name: example;
            animation-duration: 2s;
            animation-delay: 3s;

            animation-fill-mode: both;

        }

        @keyframes example {
            from {
                left: 0px;
                background-color: black;
            }

            to {
                left: calc(100% - 100px);
                background-color: blueviolet;
            }
        }

    </style>

</head>
<body>
    <div class="ball"></div>
</body>
</html>
```



