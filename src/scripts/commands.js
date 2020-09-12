import superagent from 'superagent';
import { config } from '../config';
import * as mappings from './mappings';

export default function (addToList, language, endFunction) {
  const url = `http://localhost:${config.express.port}/copyPasta`;

  const getCallback = function (text, name) {
    addToList(name);

    superagent
      .post(url)
      .send({ text })
      .end(endFunction);
  }

  if (language.locale === 'zh-CN') {
    return [
      {
        command: '你',
        callback: () => getCallback('Ni', 'Ni'),
        text: '你',
        name: 'Ni',
        isFuzzyMatch: true
      },
      {
        command: '你好',
        callback: () => getCallback('Hello', 'Hello'),
        text: '你好',
        name: 'Hello',
        isFuzzyMatch: true
      }
    ]
  }

  if (language.locale === 'en-US') {
    return [
      {
        command: 'function (*)',
        callback: (name) => getCallback(mappings.func(name?.trim() || 'bubblegum'), 'function'),
        text: mappings.func('bubblegum'),
        name: 'new function'
      },
      {
        command: 'constant (*)',
        callback: (name) => getCallback(mappings.constant(name?.trim() || 'marceline'), 'constant'),
        text: mappings.constant('marceline'),
        name: 'const'
      },
      {
        command: 'state (*)',
        callback: (name) => getCallback(mappings.state(name?.trim() || 'state'), 'state'),
        text: mappings.state('state'),
        name: 'useState'
      },
      {
        command: 'component (*)',
        callback: (name) => getCallback(mappings.component(name?.trim() || 'Ooo'), 'component'),
        text: mappings.component('Ooo'),
        name: 'functional component'
      },
      {
        command: 'effect (*)',
        callback: (name) => getCallback(mappings.effect(name?.trim() || ''), 'effect'),
        text: mappings.effect(''),
        name: 'useEffect',
        isFuzzyMatch: true
      },
      // need to spell out 'd', 'i', 'v' for speech recognition to pick up
      {
        command: 'div (*)',
        callback: (text) => getCallback(mappings.div(text?.trim() || 'the vampire queen'), 'div'),
        text: mappings.div('the vampire queen'),
        name: '<div>'
      },
      {
        command: 'span (*)',
        callback: (text) => getCallback(mappings.span(text?.trim() || 'candy kingdom'), 'span'),
        text: mappings.span('candy kingdom'),
        name: '<span>'
      },
      {
        command: 'spam (*)',
        callback: (text) => getCallback(mappings.span(text?.trim() || 'candy kingdom'), 'span'),
      },
      {
        command: 'text (*)',
        callback: (type) => getCallback(mappings.text(type?.trim() || ''), 'text'),
        text: mappings.text(''),
        name: '<p>'
      },
      {
        command: 'button (*)',
        callback: (type) => getCallback(mappings.button(type?.trim() || ''), 'button'),
        text: mappings.button(''),
        name: '<button>'
      },
      {
        command: 'input',
        callback: (type) => getCallback(mappings.input(), 'input'),
        text: mappings.input(),
        name: '<input>'
      },
      {
        command: 'toggle',
        callback: (type) => getCallback(mappings.toggle(), 'toggle'),
        text: mappings.toggle(),
        name: 'toggle'
      },
      {
        command: 'checkbox',
        callback: (type) => getCallback(mappings.checkbox(), 'checkbox'),
        text: mappings.checkbox(),
        name: 'checkbox'
      },
      {
        command: 'check',
        callback: (type) => getCallback(mappings.checkbox(), 'check')
      },
      {
        command: 'slider',
        callback: (type) => getCallback(mappings.slider(), 'slider'),
        text: mappings.slider(),
        name: 'slider'
      },
      {
        command: 'quote',
        callback: () => getCallback(mappings.blockquote(), 'quote'),
        text: mappings.blockquote(),
        name: '<blockquote>'
      },
      {
        command: 'quotes',
        callback: () => getCallback(mappings.blockquote(), 'quote')
      },
      {
        command: 'block quote',
        callback: () => getCallback(mappings.blockquote(), 'blockquote')
      },
      {
        command: 'table',
        callback: () => getCallback(mappings.table(), 'table'),
        text: mappings.table(),
        name: '<table>'
      },
      {
        command: 'email',
        callback: () => getCallback(mappings.email(), 'email'),
        text: mappings.email(),
        name: 'email input'
      },
      {
        command: 'password',
        callback: () => getCallback(mappings.password(), 'password'),
        text: mappings.password(),
        name: 'password input'
      },
      {
        command: 'select',
        callback: () => getCallback(mappings.select(), 'select'),
        text: mappings.select(),
        name: '<select>'
      },
      {
        command: 'textarea',
        callback: () => getCallback(mappings.textarea(), 'textarea'),
        text: mappings.textarea(),
        name: '<textarea>'
      },
      {
        command: 'text area',
        callback: () => getCallback(mappings.textarea(), 'textarea')
      },
      {
        command: 'file',
        callback: () => getCallback(mappings.file(), 'file'),
        text: mappings.file(),
        name: 'file upload'
      },
      {
        command: 'radio',
        callback: () => getCallback(mappings.radio(), 'radio'),
        text: mappings.radio(),
        name: 'radio'
      },
      {
        command: 'alert (*)',
        callback: (type) => getCallback(mappings.alert(type?.trim() || 'success'), 'alert'),
        text: mappings.alert('success'),
        name: 'alert'
      },
      {
        command: 'card',
        callback: () => getCallback(mappings.card(), 'card'),
        text: mappings.card(),
        name: 'card'
      },
      {
        command: 'modal',
        callback: () => getCallback(mappings.modal(), 'modal'),
        text: mappings.modal(),
        name: 'modal'
      },
      {
        command: 'toast',
        callback: () => getCallback(mappings.toast(), 'toast'),
        text: mappings.toast(),
        name: 'toast'
      }
    ]
  }
}
