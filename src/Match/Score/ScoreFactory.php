<?php
namespace Match\Score;

use Match\Player\Player;

class ScoreFactory
{
    public static function make($matchType, Player $player, $score, $minute){
        $className = "Match\\Score\\".ucfirst($matchType)."Score";
        if (class_exists($className)){
            return new $className($player, $score, $minute);
        }else{
            throw new \Exception("'$className' is not yet implemented");
        }
    }
}