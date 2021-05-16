<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Roadmap;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoadmapsController extends Controller
{
    /** @var Roadmap */
    protected $roadmap;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Roadmap $roadmap)
    {
        $this->middleware(function ($request, $next) {
            $this->user = Auth::user();
            return $next($request);
        });

        $this->roadmap = $roadmap;
    }


    /**
     * ロードマップの作成（開始）
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = $this->user->id;
        $data['road_id'] = 1;
        $data['in_progress'] = 0;

        $result = $this->roadmap->create($data);

        if (empty($result)) {
            return response()->json(['message' => 'ロードの開始に失敗しました。'], config('consts.status.INTERNAL_SERVER_ERROR'));
        }

        return response()->json();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Roadmap  $roadmap
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Roadmap $roadmap)
    {
        //
    }
}
