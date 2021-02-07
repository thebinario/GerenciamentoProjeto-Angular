<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Projetos extends Model
{
    protected $fillable = [
        'nome', 'dataInicio', 'dataTermino' , 'valor', 'risco', 'participantes'
    ];
}
