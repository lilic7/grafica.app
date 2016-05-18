<?php
namespace Match\Player;

class Player
{
    protected $name;
    protected $number;
    protected $team;

    public static function create($name, $team, $number){
        return new self($name, $team, $number);
    }

    public function __construct($name, $team, $number=null){
        $this->name     = $this->prepareName($name);
        $this->number   = $this->prepareNumber($number);
        $this->team     = $number;
    }

    protected function prepareName($name){
        $name = preg_replace('/[^A-Z ]/', "", strtoupper($name));
        $name = preg_replace('/[ ]{2,}/', " ", $name);
        return trim($name);
    }

    public function checkName(){
        $pattern = '/^[A-Z]{2,}([ ]?[A-Z]{1,}){0,}$/';
        return preg_match($pattern, $this->name);
    }

    protected function prepareNumber($number){
        return preg_replace('/[^0-9]/', "", $number);
    }

    public function checkNumber(){
        $pattern = '/^[1-9][0-9]?$/';
        return preg_match($pattern, $this->number);
    }


    public function getName(){
        return $this->name;
    }

    public function getNumber(){
        return (int) $this->number;
    }

    public function getTeam(){
        return $this->team;
    }

    public function getFullPlayer(){
        $space = $this->number < 10 ? "  " : " ";
        return ($this->number ? $this->number.$space : "").$this->name;
    }
}