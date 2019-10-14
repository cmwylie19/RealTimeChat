"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ModalContent_1 = require("./ModalContent");
test('Modal Content Test only body', function () {
    var view = enzyme_1.shallow(<ModalContent_1.ModalContent title="Test Modal Content title" id="id" isOpen>
      This is a ModalBox header
    </ModalContent_1.ModalContent>);
    expect(view).toMatchSnapshot();
});
test('Modal Content Test isOpen', function () {
    var view = enzyme_1.shallow(<ModalContent_1.ModalContent title="Test Modal Content title" id="id" isOpen>
      This is a ModalBox header
    </ModalContent_1.ModalContent>);
    expect(view).toMatchSnapshot();
});
test('Modal Content Test with footer', function () {
    var view = enzyme_1.shallow(<ModalContent_1.ModalContent title="Test Modal Content title" id="id" isOpen actions={['Testing']}>
      This is a ModalBox header
    </ModalContent_1.ModalContent>);
    expect(view).toMatchSnapshot();
});
test('Modal Content test without footer', function () {
    var view = enzyme_1.shallow(<ModalContent_1.ModalContent title="Test Modal Content title" id="id" isOpen>
      This is a ModalBox header
    </ModalContent_1.ModalContent>);
    expect(view).toMatchSnapshot();
});
test('Modal Content Test with onclose', function () {
    var view = enzyme_1.shallow(<ModalContent_1.ModalContent title="Test Modal Content title" actions={['Testing footer']} isLarge onClose={function () { return undefined; }} id="id" isOpen>
      This is a ModalBox header
    </ModalContent_1.ModalContent>);
    expect(view).toMatchSnapshot();
});
test('Modal Test with custom header', function () {
    var header = <span id="test-custom-header">TEST</span>;
    var view = enzyme_1.shallow(<ModalContent_1.ModalContent header={header} title="test-custom-header-modal" actions={['Testing footer']} isLarge onClose={function () { return undefined; }} id="id" isOpen>
      This is a ModalBox header
    </ModalContent_1.ModalContent>);
    expect(view).toMatchSnapshot();
});
test('Modal Test with custom footer', function () {
    var footer = <span id="test-custom-footer">TEST</span>;
    var view = enzyme_1.shallow(<ModalContent_1.ModalContent footer={footer} title="Test Modal Custom Footer" isLarge onClose={function () { return undefined; }} id="id" isOpen>
      This is a ModalBox header
    </ModalContent_1.ModalContent>);
    expect(view).toMatchSnapshot();
});
