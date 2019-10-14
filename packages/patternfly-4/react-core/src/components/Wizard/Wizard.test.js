"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Wizard_1 = require("./Wizard");
test('Wizard should match snapshot', function () {
    var steps = [
        { name: 'A', component: <p>Step 1</p> },
        {
            name: 'B',
            steps: [
                {
                    name: 'B-1',
                    component: <p>Step 2</p>,
                    enableNext: true
                },
                {
                    name: 'B-2',
                    component: <p>Step 3</p>,
                    enableNext: false
                }
            ]
        },
        { name: 'C', component: <p>Step 4</p> },
        { name: 'D', component: <p>Step 5</p> }
    ];
    var onBack = function (step) {
        var name = { step: step };
    };
    var view = enzyme_1.mount(<Wizard_1.Wizard isOpen title="Wizard title" description="Description here" steps={steps} startAtStep={1} onBack={onBack}/>);
    // ran into: https://github.com/airbnb/enzyme/issues/1213
    // so instead of: expect(view).toMatchSnapshot();
    var fragment = view.instance().render();
    expect(enzyme_1.mount(<div>{fragment}</div>).getElement()).toMatchSnapshot();
});
