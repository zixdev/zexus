<?php

namespace Zix\Core\Console\Commands;

use Illuminate\Console\GeneratorCommand;
use Zix\Core\Console\Generators\Traits\StubGeneratorTrait;

class MakeCrud extends GeneratorCommand
{
    use StubGeneratorTrait;
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'zix:crud {name : Model Name}
										{module : The Plugin Name}';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Generate Crud Model';


	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function handle()
	{
        $name = $this->argument('name');
        $plugin = $this->argument('module');

        // 1. Generate Model
        $this->call("zix:make-model", [
            'name' => $name,
            'module'    => $plugin,
        ]);

        // 2. Generate Seeder

        // 3. Generate Factory

        // 4. Generate Controller + (Request "create/update")
        $this->call("zix:make-controller", [
            'name' => $name."Controller",
            'module'    => $plugin,
        ]);
        $this->call("zix:make-request", [
            'name' => $name.'/'.$name."CreateRequest",
            'module'    => $plugin,
        ]);
        $this->call("zix:make-request", [
            'name' => $name.'/'.$name."UpdateRequest",
            'module'    => $plugin,
        ]);


        // 5. Generate Routes
        // 6. Generate Route Permission Seeder & seed

        // 7. Generate Events
        $this->call("zix:make-event", [
            'name' => $name.'/'.$name."CreateEvent",
            'module'    => $plugin,
        ]);
        $this->call("zix:make-event", [
            'name' => $name.'/'.$name."UpdateEvent",
            'module'    => $plugin,
        ]);

        // 8. Generate Listeners
        $this->call("zix:make-listener", [
            'name' => $name.'/'.$name."CreateEvent",
            'module'    => $plugin,
        ]);
        $this->call("zix:make-listener", [
            'name' => $name.'/'.$name."UpdateEvent",
            'module'    => $plugin,
        ]);

        // 9. Generate Front-End Vue init
        // 10. Generate
        // 11. Generate
        // 12. Generate
        // 13. Generate
        // 14. Generate
        // 15. Generate


	    parent::handle();
	}

}
