<?php namespace Zix\Core\Libraries\Plugins;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Filesystem\FilesystemManager;

class Plugins
{
    /**
     * @var Filesystem
     */
    private $file;
    /**
     * @var Packager
     */
    private $packager;

    /**
     * Repository constructor.
     * @param FilesystemManager $file
     * @internal param null $path
     */
    public function __construct(FilesystemManager $file)
    {
        $this->file = $file;
    }


    /**
     * Get Module Package By Name.
     * @param $module
     * @return array
     */
    public function get($module)
    {
        return $this->all()->get($module);
    }

    /**
     * Get All Modules.
     * @return array
     */
    public function all()
    {
        $modules = [];

        foreach($this->scan() as $key => $module) {
            $package = new Packager($this->file);
            $modules[$package->set($module)->name()] = $package->set($module);
        }

        return collect(array_sort($modules, function($module) {
            return $module->config()->order;
        }));
    }

    /**
     * Get All Modules.
     * @return array
     */
    public function scan()
    {
        return $this->file->directories('plugins');
    }
}