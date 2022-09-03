<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('news')->insert([
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(2, true),
            'author' => fake()->email(),
            'category' => fake()->word(),
        ]);
    }
}
