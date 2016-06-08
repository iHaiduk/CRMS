/**
 * Created by Igor Haiduk on 15.05.2016.
 */
'use strict';

import React from 'react';
import mix from 'mixins/multipleExtends';
import assign from 'lodash/fp/assign';
import BEML from 'classes/Beml'


const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);

let preRender = function (component) {

  return function (data) {

    try {
      if (component == undefined) return null;

      const templateName = component.state && component.state.template ? component.state.template : 'index';

      let template;
      if (component.__proto__.constructor.displayType == 'Group') {
        template = require(`Groups/${component.__proto__.constructor.displayName}/templates/${templateName}.pug`);
      } else {
        template = require(`Components/${component.__proto__.constructor.displayName}/templates/${templateName}.pug`);
      }

      const properties = assign({
        state: component.state,
        props: component.props,
        actions: component.actions
      }, data);

      if (component && component.childComponents instanceof Array) {
        component.childComponents.forEach(val => {
          let name = /(\()(.*)(\))/i.exec(String(val.displayName));
          if (name != null) {
            properties[capitalizeFirstLetter(name[2])] = val;
          }
        })
      }

      return BEML.convert(template(properties));
    } catch (error) {
      console.info(group, error)
    }

  }

};

const Component = (components = []) => {

    components.push(React.Component);

    class Style extends mix(...components) {
    }

    return class extends Style {

      constructor() {
        super();

        this.__proto__.constructor.displayType = 'Component';

        this.generateTemplate = preRender(this);

        return this.state;
      }

    };

  },
  Group = (components = []) => {

    components.push(React.Component);

    class Style extends mix(...components) {
    }

    return class extends Style {

      constructor() {
        super();

        this.__proto__.constructor.displayType = 'Group';

        this.generateTemplate = preRender(this);

        return this.state;
      }

    };

  };

export { Component, Group};
