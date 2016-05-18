<?php
namespace Match\Score;

use Match\Player\Player;

class MinifotbalScore extends ATimedScore
{
    protected $minute;

    public function __construct(Player $player, $score){
        $this->player   = $player;
        $this->score    = $score;
    }

    public function setMinute($minute)
    {
        $this->minute = $minute;
        return $this;
    }
}