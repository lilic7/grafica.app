<?php
namespace Match\Score;
use Match\Player\Player;
abstract class ATimedScore extends AScore
{
    public abstract function setMinute($minute);
}