import { Given, Then } from 'cucumber';
import { client } from 'nightwatch-api';
import { Target } from '@applitools/eyes-nightwatch';

Given(/^I open Google`s search page$/, async () => {
  await client.url('http://google.com');
});

Then(/^visual test Google$/, async () => {
  return client.url('http://google.com')
    .eyesOpen('google.com website', 'My first Nightwatch test!')
    .eyesCheck(Target.window().fully())
    .eyesClose()
    .end();
});

Given(/^I open DuckDuckGo search page$/, async () => {
  await client.url('https://duckduckgo.com/');
});

Then(/^the title is "(.*?)"$/, async text => {
  await client.assert.title(text);
});

Then(/^the Google search form exists$/, async () => {
  await client.assert.visible('input[name="q"]');
});

Then(/^the DuckDuckGo search form exists$/, async () => {
  await client.assert.visible('#search_form_homepage');
});
