import superagent from 'superagent';
import { config } from '../config';
import * as mappings from './mappings';

export default function (addToList, language, endFunction) {
  const url = `http://localhost:${config.express.port}/copyPasta`;

  const getCallback = function (text, nameOfCommandExecuted) {
    addToList(nameOfCommandExecuted);

    superagent
      .post(url)
      .send({ text })
      .end(endFunction);
  }

  // Spanish
  if (language.locale === 'es-US') {
    return [
      {
        command: 'función (*)',
        callback: (name) => getCallback(mappings.func(name?.trim() || 'bubblegum'), 'función'),
        commandText: mappings.func('bubblegum'),
        description: 'función'
      },
      {
        command: 'componente (*)',
        callback: (name) => getCallback(mappings.component(name?.trim() || 'Ooo'), 'componente'),
        commandText: mappings.func('Ooo'),
        description: 'componente'
      }
    ]
  }

  // Chinese
  if (language.locale === 'zh-CN') {
    return [
      {
        command: '你',
        callback: () => getCallback('Ni', 'Ni'),
        commandText: '你',
        description: 'Ni',
        isFuzzyMatch: true
      },
      {
        command: '你好',
        callback: () => getCallback('Hello', 'Hello'),
        commandText: '你好',
        description: 'Hello',
        isFuzzyMatch: true
      }
    ]
  }

  // English
  if (language.locale === 'en-US') {
    return [
      {
        command: 'function (*)',
        callback: (name) => getCallback(mappings.func(name?.trim() || 'bubblegum'), 'function'),
        commandText: mappings.func('bubblegum'),
        description: 'new function'
      },
      {
        command: 'constant (*)',
        callback: (name) => getCallback(mappings.constant(name?.trim() || 'marceline'), 'constant'),
        commandText: mappings.constant('marceline'),
        description: 'const'
      },
      {
        command: 'state (*)',
        callback: (name) => getCallback(mappings.state(name?.trim() || 'state'), 'state'),
        commandText: mappings.state('state'),
        description: 'useState'
      },
      {
        command: 'component (*)',
        callback: (name) => getCallback(mappings.component(name?.trim() || 'Ooo'), 'component'),
        commandText: mappings.component('Ooo'),
        description: 'functional component'
      },
      {
        command: 'effect (*)',
        callback: (name) => getCallback(mappings.effect(name?.trim() || ''), 'effect'),
        commandText: mappings.effect(''),
        description: 'useEffect',
        isFuzzyMatch: true
      },
      // need to spell out 'd', 'i', 'v' for speech recognition to pick up
      {
        command: 'div (*)',
        callback: (text) => getCallback(mappings.div(text?.trim() || 'the vampire queen'), 'div'),
        commandText: mappings.div('the vampire queen'),
        description: '<div>'
      },
      {
        command: 'span (*)',
        callback: (text) => getCallback(mappings.span(text?.trim() || 'candy kingdom'), 'span'),
        commandText: mappings.span('candy kingdom'),
        description: '<span>'
      },
      {
        command: 'spam (*)',
        callback: (text) => getCallback(mappings.span(text?.trim() || 'candy kingdom'), 'span'),
      },
      {
        command: 'text (*)',
        callback: (type) => getCallback(mappings.text(type?.trim() || ''), 'text'),
        commandText: mappings.text(''),
        description: '<p>'
      },
      {
        command: 'button (*)',
        callback: (type) => getCallback(mappings.button(type?.trim() || ''), 'button'),
        commandText: mappings.button(''),
        description: '<button>'
      },
      {
        command: 'input',
        callback: (type) => getCallback(mappings.input(), 'input'),
        commandText: mappings.input(),
        description: '<input>'
      },
      {
        command: 'toggle',
        callback: (type) => getCallback(mappings.toggle(), 'toggle'),
        commandText: mappings.toggle(),
        description: 'toggle'
      },
      {
        command: 'checkbox',
        callback: (type) => getCallback(mappings.checkbox(), 'checkbox'),
        commandText: mappings.checkbox(),
        description: 'checkbox'
      },
      {
        command: 'check',
        callback: (type) => getCallback(mappings.checkbox(), 'check')
      },
      {
        command: 'slider',
        callback: (type) => getCallback(mappings.slider(), 'slider'),
        commandText: mappings.slider(),
        description: 'slider'
      },
      {
        command: 'quote',
        callback: () => getCallback(mappings.blockquote(), 'quote'),
        commandText: mappings.blockquote(),
        description: '<blockquote>'
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
        commandText: mappings.table(),
        description: '<table>'
      },
      {
        command: 'email',
        callback: () => getCallback(mappings.email(), 'email'),
        commandText: mappings.email(),
        description: 'email input'
      },
      {
        command: 'password',
        callback: () => getCallback(mappings.password(), 'password'),
        commandText: mappings.password(),
        description: 'password input'
      },
      {
        command: 'select',
        callback: () => getCallback(mappings.select(), 'select'),
        commandText: mappings.select(),
        description: '<select>'
      },
      {
        command: 'textarea',
        callback: () => getCallback(mappings.textarea(), 'textarea'),
        commandText: mappings.textarea(),
        description: '<textarea>'
      },
      {
        command: 'text area',
        callback: () => getCallback(mappings.textarea(), 'textarea')
      },
      {
        command: 'file',
        callback: () => getCallback(mappings.file(), 'file'),
        commandText: mappings.file(),
        description: 'file upload'
      },
      {
        command: 'radio',
        callback: () => getCallback(mappings.radio(), 'radio'),
        commandText: mappings.radio(),
        description: 'radio'
      },
      {
        command: 'alert (*)',
        callback: (type) => getCallback(mappings.alert(type?.trim() || 'success'), 'alert'),
        commandText: mappings.alert('success'),
        description: 'alert'
      },
      {
        command: 'card',
        callback: () => getCallback(mappings.card(), 'card'),
        commandText: mappings.card(),
        description: 'card'
      },
      {
        command: 'modal',
        callback: () => getCallback(mappings.modal(), 'modal'),
        commandText: mappings.modal(),
        description: 'modal'
      },
      {
        command: 'toast',
        callback: () => getCallback(mappings.toast(), 'toast'),
        commandText: mappings.toast(),
        description: 'toast'
      }
    ]
  }
}
