<?php
use Match\Score\ScoreFactory;
class ScoreFactoryTest extends PHPUnit_Framework_TestCase
{
    protected $scoreFactory;
    protected $player;

    public function setUp(){
        $this->player = $this->getMockBuilder('Match\Player\Player')
                        ->disableOriginalConstructor()
                        ->getMock();
    }

    public function testCorrectClassCreation(){
        $minifotbalScore = ScoreFactory::make('minifotbal', $this->player, '0 - 1', 32);
        $this->assertInstanceOf('Match\Score\AScore', $minifotbalScore);
    }

    public function testOtherCorrectClassCreation(){
        $minifotbalScore = ScoreFactory::make('fotball', $this->player, '0 - 1', 32);
        $this->assertInstanceOf('Match\Score\AScore', $minifotbalScore);
    }
    /**
     * @expectedException Exception
     * @expectedExceptionMessage 'Match\Score\NomatchScore' is not yet implement
     */
    public function testWrongClassCreation(){
        $futsal = ScoreFactory::make('nomatch', $this->player, '20 - 10', 43);
    }
}
