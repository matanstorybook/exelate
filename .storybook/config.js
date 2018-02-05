import {configure} from '@storybook/react'
import {setOptions} from '@storybook/addon-options'

setOptions({
  name: 'Matan StoryBook',
  downPanelInRight: true,
  sortStoriesByKind: true
})

const req = require.context('./stories/', true, /.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
  require('./styles/main.css')
}

configure(loadStories, module)
