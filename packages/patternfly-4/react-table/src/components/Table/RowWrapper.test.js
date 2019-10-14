"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var RowWrapper_1 = require("./RowWrapper");
var getRowWrapper = function (props) { return (<table>
    <tbody>
      <RowWrapper_1.RowWrapper {...props}/>
    </tbody>
  </table>); };
describe('RowWrapper', function () {
    test('renders correctly', function () {
        var trRef = jest.fn();
        var view = enzyme_1.mount(getRowWrapper({ onScroll: jest.fn(), onResize: jest.fn(), trRef: trRef }));
        expect(view).toMatchSnapshot();
        expect(trRef.mock.calls).toHaveLength(1);
    });
    test('renders expanded correctly', function () {
        var view = enzyme_1.mount(getRowWrapper({ row: { isExpanded: true } }));
        expect(view).toMatchSnapshot();
    });
});
