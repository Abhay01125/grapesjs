var Component = require('./Component');

module.exports = Component.extend({

  defaults: _.extend({}, Component.prototype.defaults, {
    type: 'tbody',
    tagName: 'tbody',
    droppable: ['tr']
  }),

},{

  /**
   * Detect if the passed element is a valid component.
   * In case the element is valid an object abstracted
   * from the element will be returned
   * @param {HTMLElement}
   * @return {Object}
   * @private
   */
  isComponent(el) {
    var result = '';
    if(el.tagName == 'TBODY'){
      result = {type: 'tbody'};
    }
    return result;
  },

});
