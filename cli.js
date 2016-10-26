#! /usr/bin/env node

//Import dependencies
var fs = require('fs');
var nutty = require('nutty');
var tabson = require('tabson');
var pstat = require('pstat');

//Import the package info
var pkg = require('./package.json');

//Main function
var cli = function()
{
  //Initialize the nutty cli
  nutty.set({ version: pkg.version, name: 'tabson', description: pkg.description });

  //Add the commands
  nutty.add(cli.commands);

  //Run the CLI
  nutty.run();
};

//Convert tab to json command
cli.tojson = function(args, opt)
{
  //Check the number of arguments
  if(args.length !== 2){ return nutty.display.error('Missing tab or JSON file argument.'); }

  //Read the tab file
  tabson(args[0], {}, function(error, header, data)
  {
    //Check for error
    if(error){ return nutty.display.error(error.message); }

    //Initialize the end line character
    var endl = '\n';

    //Initialize the json file
    fs.writeFileSync(args[1], '[' + endl, 'utf8');

    //Read the data
    for(var i = 0; i < data.length; i++)
    {
      //Convert the line to string
      var line = JSON.stringify(data[i]);

      //Check the comma
      var comma = (i === data.length - 1) ? '' : ',';

      //Append the line to the file
      fs.appendFileSync(args[1], '  ' + line + comma + endl, 'utf8');
    }

    //End the file
    fs.appendFileSync(args[1], ']' + endl, 'utf8');
  });
};

//Commands list
cli.commands =
[
  //Convert to json command
  {
    command: 'tojson',
    default: true,
    description: 'Convert a tab file to JSON',
    callback: cli.tojson,
    usage: 'tabson tojson [TAB_file] [JSON_file]'
  }
];

//Run the CLI
cli();
