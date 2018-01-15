<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


use Zix\Core\Events\Seeder\GetAppPermissions;

Route::get('/', function () {
    return view('core::default.app');
});


Route::get('admin', function () {
    return view('core::admin.app');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('tester', '\Zix\Core\Http\Controllers\SiteController@index');
Route::get('test', function () {
    $user = \App\User::first();

    return $user->load('roles');
    return $user->getAllPermissions()->pluck('name');
    $permissions = collect();
    event(new GetAppPermissions($permissions));
    return $permissions;

//    \Zix\Core\Models\Site::create([
//        'name' => 'zixfinance',
//        'url' => 'http://localhost:8030',
//        'ui' => 'default-v2',
//        'status' => true
//    ]);
//    \Zix\Core\Models\Site::first()->configs()->create([
//        'key' => 'name', 'value' => 'test'
//    ]);
    return \Zix\Core\Models\Site::with('configs')->get();

});
