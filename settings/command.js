const { REST, Routes } = require('discord.js');


function start(){
const commands = [
	{
		name: 'startbot',
		description: 'startbot',
	},
    {
		name: 'setpackeoff',
		description: 'setpackeoff',
	},
    {
		name: 'setpackeon',
		description: 'setpackeon',
	},
    {
		name: 'setplayeroff',
		description: 'setplayeroff',
	},
    {
		name: 'setplayeron',
		description: 'setplayeron',
	},
    {
		name: 'stop',
		description: 'stop',
	},
	{
		name: 'help',
		description: 'help',
	},
	{
		name: 'setspamon',
		description: 'setspamon',
	},
	{
		name: 'setspamoff',
		description: 'setspamoff',
	},
];

const rest = new REST({ version: '10' }).setToken('MTAzMTI4MzI4NjUxOTA2Njc3NQ.G1d5jc.a8sifXC0ifGUY6hGbeWvRyY-YUyC3nASHcBNwk');

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(Routes.applicationCommands('1031283286519066775'), { body: commands });

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}

})();
}
module.exports.start = start;