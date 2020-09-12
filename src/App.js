import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import cn from 'classnames';
import moment from 'moment-mini';
import Modal from 'react-bootstrap4-modal';
import getCommands from './scripts/commands';
import { config } from './config';
import { getStorage, setStorage } from './storage';
import 'bootstrap';
import './styles/icono.css';
import './styles/App.scss';

function App() {
  const [spokenList, setSpokenList] = useState([]);
  const [modalText, setModalText] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [language, setLanguage] = useState(config.defaultLanguage);
  const commands = getCommands(addToList, language, endFunction);

  const {
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });

  if (finalTranscript === 'stop' || finalTranscript === 'stop listening') {
    stopMic();
  } else if (finalTranscript === 'reset' || finalTranscript === 'reset all') {
    reset();
  }

  function addToList(text) {
    const newList = spokenList;
    newList.push({ text, time: moment().format('HH:mm:ss') });
    setSpokenList(newList);
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div>
        <h2>Web Speech API is not supported in this browser</h2>

        <span className="text-info">Suppoted desktop browsers: </span>
        <p>Chrome and Edge</p>

        <span className="text-info">Suppoted mobile browsers: </span>
        <p>Android WebView, Chrome for Android, and Samsung Internet</p>
      </div>
    );
  }

  function startMic() {
    SpeechRecognition.startListening({
      continuous: true,
      matchInterim: false,
      language: language.locale
    });
  }

  function stopMic() {
    SpeechRecognition.stopListening();
  }

  function reset() {
    resetTranscript();
    setSpokenList([]);
  }

  function endFunction() {
    resetTranscript();
  }

  function changeTheme(theme) {
    if (getStorage('theme') !== theme) {
      setStorage('theme', theme);
      window.location.reload();
    }
  }

  function getSpokenList() {
    const list = [];

    for (let i = spokenList.length - 1; i >= 0; i--) {
      list.push(
        <div className="alert alert-info spoken-item" key={i}>
          <p className="text spoken-time">{spokenList[i].time}</p>
          <p className="text spoken-text">{spokenList[i].text}</p>
        </div>
      )
    }

    return list;
  }

  function getCommandsList() {
    let count = 0;
    return commands.map(command => {
      if (command.name) {
        return (
          <tr
            key={count++}
            className="commands-row"
            data-toggle="modal"
            data-target="#commandModal"
            onClick={() => {
              setModalText(command.text);
              setModalTitle(command.name);
              setModalVisible(true);
            }}
          >
            <td>{command.name}</td>
            <td>{command.command}</td>
          </tr>
        );
      }

      return null;
    });
  }

  return (
    <div className="container-fluid">
      <div className="row action-row center">
        <div className="col-md-4">
          <div className={cn('card action-card', { 'border-primary': !listening, 'border-success': listening })} onClick={startMic}>
            <p className="text">Start Listening</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className={cn('card action-card', { 'border-secondary': listening })} onClick={stopMic}>
            <p className={cn('text', { 'text-muted': !listening })}>Stop Listening</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className={cn('card action-card', { 'border-secondary': spokenList.length > 0 })} onClick={reset}>
            <p className={cn('text', { 'text-muted': spokenList.length === 0 })}>Reset All</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {`Language: ${language.language}`}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {config.languages.map(l => {
                return (
                  <div key={l.language} className="dropdown-item" onClick={() => {
                    stopMic();
                    reset();
                    setLanguage(l);
                  }}>{l.language}</div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card current-card text-white bg-info">
            <div className="card-header">
              {listening ? `What's being heard` : 'Not listening'}
            </div>

            <div className="card-body">
              <p className="text current">{interimTranscript}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="row theme-row">
            <div className="icono-sun theme" onClick={() => changeTheme('lux')} />
            <div className="icono-moon theme" onClick={() => changeTheme('darkly')} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card commands-card">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Command</th>
                </tr>
              </thead>
              <tbody>
                {getCommandsList()}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-6">
          <div className="spoken-list">
            {getSpokenList()}
          </div>
        </div>
      </div>

      <Modal visible={modalVisible} onClickBackdrop={() => setModalVisible(false)}>
        <div className="modal-header">
          <h5 className="modal-title">{modalTitle}</h5>
        </div>
        <div className="modal-body">
          <pre>{modalText}</pre>
        </div>
      </Modal>
    </div>
  )
}

export default App;
