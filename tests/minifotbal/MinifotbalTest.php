<?php
use Match\Minifotbal;

class MinifotbalTest extends PHPUnit_Framework_TestCase
{
    public function testMinifotbalClassIsInstanceOfAMatch(){
        $minifotbal = new Minifotbal();
        $this->assertInstanceOf('Match\AMatch', $minifotbal, "Not instance of AMatch");
    }
}
