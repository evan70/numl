import NuElement from './element';

export default class NuOption extends NuElement {
  static get nuTag() {
    return 'nu-option';
  }

  static get nuRole() {
    return 'option';
  }

  static get nuBehaviors() {
    return {
      option: true,
      active: true,
    };
  }

  static get nuStyles() {
    return {
      display: 'grid',
      padding: '1x',
      fill: 'transparent :current[mark]',
      width: '100%',
      flow: 'column',
      gap: '1x',
      content: 'center start',
      items: 'stretch',
      radius: '0',
      border: ':current[1sw left inside #special] 0',
      color: ':current[special]',
      transition: 'theme',
      mark: 'hover :current[n]',
      opacity: '1 :disabled[.5]',
      cursor: 'pointer :disabled[default]',
      inset: 'n :active[y]',

      '--local-focus-inset': 'inset 0 0',
    };
  }
}
