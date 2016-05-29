/**
 * Created by Igor Haiduk on 15.05.2016.
 */
'use strict';

import React from 'react';
import mix from 'mixins/multipleExtends';

const Component = (components = []) => {

    components.push(React.Component);

    class Style extends mix(...components) {}

    return class extends Style {};

};

export default Component;