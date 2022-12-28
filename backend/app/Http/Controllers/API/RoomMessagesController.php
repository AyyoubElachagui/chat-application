<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\RoomMessages;

class RoomMessagesController extends Controller
{
    public function createNewMessage(Request $request){
        try {
            //Validated
            $validateMessage = Validator::make($request->all(), 
            [
                'user_id' => 'required',
                'text' => 'required'
            ]);

            if($validateMessage->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateMessage->errors()
                ], 401);
            }

            $roomMessages = RoomMessages::create([
                'user_id' => $request->user_id,
                'text' => $request->text
            ]);

            return response()->json([
                'status' => true,
                'message' => 'User Created Successfully',
                'data' => RoomMessages::select(
                    "room_messages.text", 
                    "users.name",
                )
                ->join("users", "users.id", "=", "room_messages.user_id")
                ->orderBy("room_messages.created_at", "desc")
                ->get()
                ->toArray()
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function getAllMessages(){
        return RoomMessages::select(
            "room_messages.text", 
            "users.name",
        )
        ->join("users", "users.id", "=", "room_messages.user_id")
        ->orderBy("room_messages.created_at", "desc")
        ->get()
        ->toArray();
    }
}
