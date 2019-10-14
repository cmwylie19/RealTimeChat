"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ModalBox_1 = require("./ModalBox");
test('ModalBox Test', function () {
    var view = enzyme_1.shallow(<ModalBox_1.ModalBox title="Test Modal Box" id="boxId">
      This is a ModalBox
    </ModalBox_1.ModalBox>);
    expect(view).toMatchSnapshot();
});
test('ModalBox Test isLarge', function () {
    var view = enzyme_1.shallow(<ModalBox_1.ModalBox title="Test Modal Box" id="boxId" isLarge>
      This is a ModalBox
    </ModalBox_1.ModalBox>);
    expect(view).toMatchSnapshot();
});
test('ModalBox Test isSmall', function () {
    var view = enzyme_1.shallow(<ModalBox_1.ModalBox title="Test Modal Box" id="boxId" isSmall>
      This is a ModalBox
    </ModalBox_1.ModalBox>);
    expect(view).toMatchSnapshot();
});
