<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link href="https://cdn.datatables.net/2.1.8/css/dataTables.dataTables.css" rel="stylesheet">
    @vite(['resources/css/web.css'])
</head>
<body>
    <nav id="two-q-navbar" class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="col-2 p-3">
                <a class="navbar-brand" href="{{ route('companies.index') }}"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAe1BMVEVHcEyPCRGXFBqeHyKnKSm5PTXGSj6TFBzVWEbnX0rqcVfoaE/nXkeWEBSPBxLheWHre2DlUT7mRTfYQziNBxHuhmrkQzXjOzDgQzeoJybtg2fhNy7WOTCwLSnDMiy3LiqkIiTlPTK0JSXILyq2LCm0Jya2Lyu2KynZW0jkyjM4AAAAKXRSTlMACixRb4GPSp7Y/f38PSO1/v/iqxXe///Iffr/6pfoxl/x///h+bTvPV5fbL8AAAFUSURBVHgBbdIFjsQwDAXQQqDMzM2W7n/CteOpBr84TyHbxh3TshkXgjNpGc8QSe64nu/7QeA6LHyziMWJR5amaZaz4mmhKMEQwaqqqpvWeloHlnhBWtV9rTOMEVkBlgBVPQqln1oTzWQlmF9peeq8IIYxbEyBspwvC89XUjXitazsEtzWtKFpmkXIM41/G4NfOA+7n1+0Wvt9LPBUtJWTQSJeoarDMpYS7oONkgRjN4j7Jg3modWieKKV653nYnA3w3DziYW4cZE6y0/8kRCP7dVm/0KW4T/VHP4w6ehT1V37t7aLVW88W5MWiohiWZLlK22c6cqQCYdy5c2jskq1ERqOiK8b3V91f5vaWqjLEutO49p61bdBjha70nlQ3if2SmeGB9ll5/dohD3tIjNYFzyo74cLl7eD72RQ+AEzTdO2bdc5H2MbhiOZsdhvCS38gST7B9upLFtkBVdWAAAAAElFTkSuQmCC"> Two Q Alliance</a>
            </div>
            <div class="navbar-collapse" id="navbarText">
            <div class="navbar-nav me-auto mb-2 mb-lg-0">
                <span class="navbar-text">
                    Hello {{ Auth::user()->name }} <i class="fi fi-rr-hand-wave"></i>
                </span>
            </div>
            <span class="navbar-text">
                <form action="{{ route('logout') }}" method="POST" style="display: inline;">
                    @csrf
                    <button type="submit" class="btn btn-danger"><i class="fi fi-rr-sign-out-alt"></i>Logout</button>
                </form>
            </span>
          </div>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="row" style="height: 100%;">
            <div id="company-sidebar" class="col-lg-2 p-3">
                <ul class="nav nav-pills justify-content-center flex-lg-column">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fi fi-rr-home"></i>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fi fi-rr-users"></i>Employees</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link @if(Route::is('companies.index')) active @endif" aria-current="page" href="{{ route('companies.index') }}"><i class="fi fi-rr-building"></i>Companies</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" aria-disabled="true"><i class="fi fi-rr-newspaper"></i>Reports</a>
                    </li>
                    <hr>
                    <li class="nav-item">
                      <a class="nav-link disabled" aria-disabled="true"><i class="fi fi-rr-settings"></i>Settings</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" aria-disabled="true"><i class="fi fi-rr-interrogation"></i>Help</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-10 p-3">
                <span class="header-text">@yield('title')</span>
                @yield('content')
            </div>
        </div>
    </div>
</body>
@vite(['resources/js/app.js'], 'build')
</html>
