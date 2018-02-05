'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'

const stories = storiesOf('eXelate', module)
stories
  .add('Oct 1st 2013 - joined, straight to the hackathon', () => (
    <img src={require('../static/images/join.jpg')} />
  ))
  .add('Got a bonus for arranging a team night out ', () => (
    <img src={require('../static/images/night-out.jpg')} />
  ))
  .add('First task was with "niz\'o" to develop the old helix  ', () => (
    <img src={require('../static/images/helix.png')} />
  ))
  .add('Wrote syndication screen ', () => (
    <img src={require('../static/images/syndication.png')} />
  ))
  .add('Jul 2015 - hired Vlad', () => (
    <img src={require('../static/images/vlad.jpg')} />
  ))
  .add('Jul 2015 - promoted to Core team lead ', () => (
    <img src={require('../static/images/teamlead.jpg')} />
  ))
  .add('Jul 2016 - nmc launch', () => (
    <img src={require('../static/images/launch.jpg')} />
  ))
  .add('Aug 2016 - start NCS', () => (
    <img src={require('../static/images/ncs.jpg')} />
  ))
  .add('Sep 2016 - invented StoryBook', () => (
    <img src={require('../static/images/storybook.png')} />
  ))
  .add('Dec 2016 - NCS go live', () => (
    <img src={require('../static/images/ncs-go-live-1.jpg')} />
  ))
  .add('Jan 2017 - Klarna meetup', () => (
    <img src={require('../static/images/klarna.jpg')} />
  ))
  .add('Feb 2017 - duplicate Syndication screen', () => (
    <img src={require('../static/images/syndication-copy.png')} />
  ))
  .add('Jun 2017 - Geektime conference', () => (
    <img src={require('../static/images/geektime.jpg')} />
  ))
  .add('NCS go live (again?)', () => (
    <img src={require('../static/images/ncs-go-live-2.jpg')} />
  ))
  .add('Sep 2017 - wrote syndication screen (AGAIN???)', () => (
    <img src={require('../static/images/syndication-new.png')} />
  ))
  .add('Dec 2017 - NCS go live (really?)', () => (
    <img src={require('../static/images/ncs-go-live-3.jpg')} />
  ))
  .add('NOW - escaped from hell', () => (
    <img src={require('../static/images/hell.jpg')} />
  ))
