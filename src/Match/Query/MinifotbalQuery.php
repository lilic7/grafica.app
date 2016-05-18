<?php
namespace Match\QUery;

class MinifotbalQuery extends ATxtQuery
{
    protected $files;
    protected $file_names = array(
        "marcator",
        "scor",
        "oldScore",
        "t1_gols",
        "t2_gols",
        ""
    );
    private $txtPath = "D:/grafica/minifotbal/txt/";

    public function resolveFiles(){
        foreach($this->files as $file){
            $this
        }
    }

    public function save()
    {
        // TODO: Implement save() method.
    }
    public function update()
    {
        // TODO: Implement update() method.
    }
    public function delete()
    {
        // TODO: Implement delete() method.
    }
}