<?php
use Match\Player\Player;
class PlayerTest extends PHPUnit_Framework_TestCase
{
    protected $player;

    public function testCorrectNameFormation(){
        $this->player = Player::create('ROBER DA HUNTA', 1, 13);
        $this->assertEquals($this->player->checkName(), 1);
    }

    public function namesProvider(){
        return array(
            array('Robert da HUNTA', 'ROBERT DA HUNTA', 1),
            array('Robert    da      HUNTA', 'ROBERT DA HUNTA', 1),
            array('      Robert da HUNTA', 'ROBERT DA HUNTA', 1),
            array('Robert    232  da HUNTA', 'ROBERT DA HUNTA', 1),
            array('2333 Robert    232  da HUNTA', 'ROBERT DA HUNTA', 1),
            array('Robert,    232  da HUNTA', 'ROBERT DA HUNTA', 1),
            array('ROBERT A HUNTA', 'ROBERT A HUNTA', 1),
            array('', '', 0),
            array('   ', '', 0),
        );
    }

    /**
     * @dataProvider namesProvider
     */
    public function testINCorrectNameFormation($name, $expected, $expectedCheck){
        $this->player = Player::create($name, 1, 23);
        $this->assertInternalType('string', $this->player->getName());
        $this->assertEquals($this->player->checkName(), $expectedCheck, "Name does not match expected");
        $this->assertEquals($expected, $this->player->getName());
    }

    public function numbersProvider(){
        return array(
            array(23, 23, 1),
            array(1, 1, 1),
            array("45", 45, 1),
            array(0, 0, 0),
            array('3R', 3, 1),
            array(' 3 R', 3, 1),
            array(' R', 0, 0),
            array('', 0, 0),

        );
    }

    /**
     * @dataProvider numbersProvider
     */
    public function testGetPlayerNumber($number, $expectedNumber, $expectedCheck){
        $this->player = Player::create("ROBERT DA HUNTA", 1, $number);
        $this->assertInternalType('int', $this->player->getNumber());
        $this->assertEquals($this->player->checkNumber(), $expectedCheck, "Number does not match expected");
        $this->assertEquals($expectedNumber, $this->player->getNumber());
    }

    public function fullPlayerProvider(){
        return array(
            array("ROBERT DA HUNTA", 1, 10, "10 ROBERT DA HUNTA"),
            array("ROBERT DA HUNTA", 2, 2, "2  ROBERT DA HUNTA"),
            array("ROBERT DA HUNTA", 2, null, "ROBERT DA HUNTA"),
            array("ROBERT DA HUNTA", 2, 0, "ROBERT DA HUNTA"),
        );
    }

    /**
     * @dataProvider fullPlayerProvider
     */
    function testFullPlayerString($name, $team, $number, $expected){
        $this->player = Player::create($name, $team, $number);
        $this->assertInternalType('string', $this->player->getFullPlayer());
        $this->assertEquals($expected, $this->player->getFullPlayer());
    }
}
