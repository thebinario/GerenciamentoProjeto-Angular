<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Projetos;
use Illuminate\Http\Request;

class ProjetoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $projetos = Projetos::all();
       return $projetos;
    }


    public function store(Request $request)
    {
        Projetos::create($request->all());
    }

    public function show($id)
    {
        return Projetos::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $projeto = Projetos::findOrFail($id);
        $projeto->update($request->all());
    }

    public function destroy($id)
    {
        $projeto = Projetos::findOrFail($id);
        $projeto->delete();
    }
}
