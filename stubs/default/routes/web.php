<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Welcome');
});

Route::get('/start', function () {
    return "// GO TO SOME PAGE";
})->name('start');
