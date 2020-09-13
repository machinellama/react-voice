const capitalize = require('lodash/capitalize');

module.exports.func = function(name) {
  return `
    function ${name}() {
      // do something

      return;
    }
  `
}

module.exports.constant = function(name) {
  return `
    const ${name} = '';
  `
}

module.exports.state = function(name) {
  const cap = capitalize(name);

  return `
    const [${name}, set${cap}] = useState();
  `
}

module.exports.component = function(name) {
  return `
    import React, { useState, useEffect, Fragment } from 'react';

    function ${capitalize(name)}(props) {
      const [state, setState] = useState();

      useEffect(() => {
        // do something on initial render
      }, []);

      return (
        <Fragment>
          <div>responsibility demands sacrifice</div>
        </Fragment>
      );
    }

    export default ${capitalize(name)};
  `
}

module.exports.effect = function(name) {
  return `
    useEffect(() => {
      // do something${name && ` when changing ${name}`}
    }, [${name}]);
  `
}

module.exports.div = function(text) {
  return `
    <div>${text}</div>
  `
}

module.exports.span = function(text) {
  return `
    <span>${text}</span>
  `
}

module.exports.text = function(type) {
  if (type === 'area') return '';

  return `
    <p className="text${type && ` text-${type}`}">responsibility demands sacrifice</p>
  `
}

module.exports.button = function(type) {
  return `
    <button className="btn${type && ` btn-${type}`}" onClick={() => {}}>button${type && ` ${type}`}</button>
  `
}

module.exports.input = function() {
  return `<input type="text" className="form-control" id="text-input" aria-describedby="text-input" placeholder="Placeholder" />`;
}

module.exports.toggle = function() {
  return `
    <div className="custom-control custom-switch">
      <input type="checkbox" className="custom-control-input" id="toggle" checked="true" />
      <label className="custom-control-label" for="toggle">Toggle</label>
    </div>
  `;
}

module.exports.checkbox = function() {
  return `
    <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id="checkbox" checked="true" />
      <label className="custom-control-label" for="checkbox">Placeholder</label>
    </div>
  `;
}

module.exports.slider = function() {
  return `
    <div className="slider">
      <label for="slider">Slider</label>
      <input type="range" className="custom-range" id="slider" />
    </div>
  `;
}

module.exports.blockquote = function() {
  return `
    <blockquote className="blockquote">
      <p className="mb-0">People get built different. We don't need to figure it out, we just need to respect it.</p>
      <footer className="blockquote-footer">Princess Bubblegum <cite title="Source Title">Adventure Time</cite></footer>
    </blockquote>
  `;
}

module.exports.table = function() {
  return `
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Type</th>
          <th scope="col">Column heading</th>
          <th scope="col">Column heading</th>
          <th scope="col">Column heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Fire</th>
          <td>Cell 1 1</td>
          <td>Cell 1 2</td>
          <td>Cell 1 3</td>
        </tr>
        <tr>
          <th scope="row">Ice</th>
          <td>Cell 2 1</td>
          <td>Cell 2 2</td>
          <td>Cell 2 3</td>
        </tr>
      </tbody>
    </table>
  `;
}

module.exports.email = function() {
  return `
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      <small id="emailHelp" className="form-text text-muted">Care for some chamomile tea?</small>
    </div>
  `;
}

module.exports.password = function() {
  return `
    <div className="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
  `;
}

module.exports.select = function() {
  return `
    <div className="form-group">
      <label for="exampleSelect1">Example select</label>
      <select className="form-control" id="exampleSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  `;
}

module.exports.textarea = function() {
  return `
    <div className="form-group">
      <label for="exampleTextarea">Example textarea</label>
      <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
  `;
}

module.exports.file = function() {
  return `
    <div className="form-group">
      <label for="exampleInputFile">File input</label>
      <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
      <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
    </div>
  `;
}

module.exports.radio = function() {
  return `
    <fieldset className="form-group">
      <legend>Radio buttons</legend>
      <div className="form-check">
        <label className="form-check-label">
          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
          Princess Bubblegum
        </label>
      </div>
      <div className="form-check">
      <label className="form-check-label">
          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
          Flame Princess
        </label>
      </div>
      <div className="form-check disabled">
      <label className="form-check-label">
          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled="" />
          Marceline the Vampire Queen
        </label>
      </div>
    </fieldset>
  `;
}

module.exports.alert = function(type) {
  return `
    <div className="alert alert-dismissible alert-${type}">
      <button type="button" className="close" data-dismiss="alert">&times;</button>
      <strong>Everything repeats over and over again. No one learns anything because no one lives long enough to see the pattern.</strong>
    </div>
  `;
}

module.exports.card = function() {
  return `
    <div className="card mb-3">
      <div className="card-header">Marceline's Mom</div>
      <div className="card-body">
        <h4 className="card-title">Garden</h4>
        <p className="card-text">Something weird might just be something familiar viewed from a different angle, and that's not weird, right?</p>
      </div>
    </div>
  `;
}

module.exports.modal = function() {
  return `
    <div className="modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>I don't think there are bad people.</p>
            <p>I think good people do bad stuff sometimes, and that's bad.</p>
            <p>But if you just do it once, that's a mistake</p>
            <p>And that's not bad. I think</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Save changes</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports.toast = function() {
  return `
    <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <strong className="mr-auto">Bubbline</strong>
        <small>11 mins ago</small>
        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">
        I wear it all the time! As Pajamas
      </div>
    </div>
  `;
}
