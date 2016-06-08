/**
 * Created by user on 5/30/2016.
 */
import React from 'react';
import assign from 'lodash/fp/assign';

class BEML {

    constructor(){
        this.config = {
            elemPrefix: '__',
            modPrefix: '_',
            modDlmtr: '-'
        };
    }

    convert(template){
        return this.factoryGenerator(template);
    }

    factoryGenerator(template, block) {

        const self = this;
        const styleNameGenerate = [];

        let props =  template.props;//_.assign({}, template.props, );

        if(props != undefined && props.showText != undefined) return template;

        let children = [];

        if(props != undefined && props.children != undefined){

            block = props.block || block;


            if(template.props.children instanceof Array){
                template.props.children.forEach( (component, key)=> {
                    children.push(self.factoryGenerator(component, block));
                });
            } else if(template.props.children instanceof Object) {
                children.push(self.factoryGenerator(template.props.children, block));
            }
        }

        if(props != undefined && (props.hasOwnProperty('block') || props.hasOwnProperty('elem') || props.hasOwnProperty('mod'))){
            let blockName = block || props.block;
            if(!(props.hasOwnProperty('elem'))) {
                styleNameGenerate.push(blockName);
            }
            let nameElement = template.props && typeof template.props.elem == 'string' ? `${blockName}${this.config.elemPrefix}${template.props.elem}` : null;
            if(nameElement != null) styleNameGenerate.push(nameElement);

            if(template.props && typeof template.props.mod == 'object') {
                let tempModifyName = [];
                Object.keys(template.props.mod).forEach( key => {
                    let value = template.props.mod[key];

                    let tempName = typeof value == 'string' ? `${self.config.modPrefix}${key}${self.config.modDlmtr}${value}` : `${self.config.modPrefix}${key}`;

                    tempModifyName.push(
                        nameElement == null ?
                            `${blockName}${tempName}`
                            :
                            `${nameElement}${tempName}`
                    );

                });
                styleNameGenerate.push(...tempModifyName);
            }

        }

        props = assign(props, {children: children, styleName: styleNameGenerate.join(' ')});

        return React.createFactory(template.type)(props);

    }
}

export default new BEML;