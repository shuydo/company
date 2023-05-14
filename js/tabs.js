export default class Tabs {
  constructor({ rootSelector, activeControlClass = "active", activeTab = 1 }) {
    this._root = rootSelector;
    this._activeControlClass = activeControlClass;
    this._activeTabIdx = activeTab - 1;
    this._ref = this._getRefs();
    this._bindEvents();
    this._setActiveTab();
  }

  _getRefs() {
    const ref = {
      ctrls: document.querySelector(`${this._root} [data-ctrls]`),
    };
    return ref;
  }

  _bindEvents() {
    this._ref.ctrls.addEventListener("click", this._onCtrlsClick.bind(this));
  }

  _onCtrlsClick(evt) {
    if (evt.target.nodeName != "A") return;
    this._removeActiveTab();
    const ctrl = evt.target;
    ctrl.classList.add(this._activeControlClass);
  }

  _setActiveTab() {
    const ctrls = document.querySelectorAll(`${this._root} a`);
    const ctrl = ctrls[this._activeTabIdx];
    ctrl.classList.add(this._activeControlClass);
  }
  
  _removeActiveTab() {
    const active = document.querySelector(
      `${this._root} .${this._activeControlClass}`
    );
    if (!active) return;
    active.classList.remove(this._activeControlClass);
  }
}
