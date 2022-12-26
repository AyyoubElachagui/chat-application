<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function getAllUser(){
        $user = new User();
        return response()->json([
            'status' => true,
            'data' => $user->getAllUsers()
        ], 200);
    }
}
