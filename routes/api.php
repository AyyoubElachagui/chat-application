<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\RoomMessagesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [AuthController::class, 'createUser']);
Route::post('/login', [AuthController::class, 'loginUser']);

Route::group(['middleware' => ['auth:api']], function () {

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/users', [UserController::class, 'getAllUser']);
    Route::post('/message', [RoomMessagesController::class, 'createNewMessage']);
    Route::get('/messages', [RoomMessagesController::class, 'getAllMessages']);
    
});
