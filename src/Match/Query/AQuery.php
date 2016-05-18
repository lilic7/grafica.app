<?php
namespace Match\Query;

abstract class AQuery
{
    public abstract function save();

    public abstract function update();

    public abstract function delete();
}