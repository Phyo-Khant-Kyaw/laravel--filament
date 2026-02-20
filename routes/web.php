<?php

use Illuminate\Support\Facades\Route;
use App\Events\FrontendNotification;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/send-noti', function () {
    \Illuminate\Support\Facades\Log::info('Attempting to send notification');
    event(new FrontendNotification('Hello from Laravel 🚀'));
    \Illuminate\Support\Facades\Log::info('Notification event fired');
    return 'Notification sent';
});