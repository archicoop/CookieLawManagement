<?php

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2018 Marcella Greca <greca@archicoop.it>, Ivano Luberti <luberti@archicoop.it>, Abramo Tesoro <tesoro@archicoop.it>
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = [
    'title' => 'Cookie Law Management',
    'description' => 'Cookie Law Management is an easy to use plugin that allows to show privacy information, manage website cookies and get consent to install. It is compliant with EU Law and Italian Law (more restricitve).',
    'category' => 'fe',
    'shy' => 1,
    'version' => '9.5.0',
    'dependencies' => '',
    'conflicts' => '',
    'priority' => '',
    'loadOrder' => '',
    'module' => '',
    'state' => 'stable',
    'uploadfolder' => 1,
    'createDirs' => '',
    'modify_tables' => '',
    'clearcacheonload' => 1,
    'lockType' => '',
    'author' => 'Marcella Greca, Ivano Luberti, Abramo Tesoro',
    'author_email' => 'typo3developers@archicoop.it',
    'author_company' => 'Archimede Informatica - www.archicoop.it',
    'CGLcompliance' => NULL,
    'CGLcompliance_note' => NULL,
    'constraints'        => [
        'depends'   => [
            'typo3' => '9.5.0-9.5.99'
        ],
        'conflicts' => [],
        'suggests'  => []
    ],
    'autoload' => [
        'psr-4' => [
            'Aip\\AipCookieLaw\\' => 'Classes',
        ]
    ],
];