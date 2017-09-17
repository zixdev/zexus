<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Zix Admin Panel') }}</title>

    <!-- Styles -->
    <link href="{{ mix('assets/admin/css/admin.css') }}" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.Auth = {!! json_encode([
            'user'      => "user()",
            'permissions' => "user()->getAllPermissions()",
            'token' => "user()->createToken('admin')->accessToken"
        ]) !!};
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>
<div id="zix-admin"></div>

<!-- Scripts -->
<script src="{{ mix('assets/admin/js/admin.js') }}"></script>
</body>
</html>
