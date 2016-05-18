<?php
namespace Match\Query;

class QueryFactory
{
    public static function make($matchType){
        $className = "Match\\Query\\".ucfirst($matchType)."Query";
        if (class_exists($className)){
            return new $className();
        }else{
            throw new \Exception("'$className' is not yet implemented");
        }
    }
}