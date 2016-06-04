<?php
namespace Match\Query;

abstract class ATxtQuery extends AQuery
{
    public abstract function resolveFiles();

    public abstract function loadFormFile();

    public abstract function resetFiles();
}