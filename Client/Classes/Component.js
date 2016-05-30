/**
 * Created by Igor Haiduk on 15.05.2016.
 */
'use strict';

import React from 'react';
import mix from 'mixins/multipleExtends';
import assign from 'lodash/fp/assign';
import BEML from 'classes/Beml'

const Component = (components = []) => {

    components.push(React.Component);

    class Style extends mix(...components) {}

    let preRender = function(component) {
        
        return function(data){

            const templateName = component.state && component.state.template ? component.state.template : 'index';
            let template = require(`Components/${component.__proto__.constructor.displayName}/templates/${templateName}.pug`);
            const properties = assign({
                state: component.state,
                props: component.props,
                actions: component.actions
            }, data);
            
            return BEML.convert(template(properties));

        }

    };

    return class extends Style {

        constructor() {
            super();

            this.generateTemplate = preRender(this);

            return this.state;
        }

    };

};

export default Component;