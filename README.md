# User Interface for Smart Rainwater Buffer systems
This repository houses the source code for the user interface created for smart rainwater buffer systems. This user interface was created during a graduation project as part of the Creative Technology bachelor curiculum by Thijs Dortmann.

## Installation instructions
For deployment of the user interface, a few simple steps need to be taken. In order to not publish the URL to the data repository publicly on Github, a config-file is necessary. To create this config-file, create a copy of the `config.php.example` file has to be created with the name  `config.php`. After this, the `$config['dataRepo']` variable needs to be filled with the URL to the data repository, including a trailing slash.

The user interface requires PHP to be installed on the web server hosting it, as it needs a very simple proxy script to access the data repository to get around cross-site restrictions. No further configuration is necessary.