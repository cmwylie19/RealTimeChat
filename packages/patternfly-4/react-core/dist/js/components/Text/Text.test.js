"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _TextContent = require("./TextContent");

var _Text = require("./Text");

var _TextList = require("./TextList");

var _TextListItem = require("./TextListItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Text example should match snapshot', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_TextContent.TextContent, null, _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.h1
  }, "Hello World"), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.p
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!"), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.h2
  }, "Second level"), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.p
  }, "Curabitur accumsan turpis pharetra ", _react["default"].createElement("strong", null, "augue tincidunt"), " blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl."), _react["default"].createElement(_TextList.TextList, null, _react["default"].createElement(_TextListItem.TextListItem, null, "In fermentum leo eu lectus mollis, quis dictum mi aliquet."), _react["default"].createElement(_TextListItem.TextListItem, null, "Morbi eu nulla lobortis, lobortis est in, fringilla felis."), _react["default"].createElement(_TextListItem.TextListItem, null, "Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.", _react["default"].createElement(_TextList.TextList, null, _react["default"].createElement(_TextListItem.TextListItem, null, "In fermentum leo eu lectus mollis, quis dictum mi aliquet."), _react["default"].createElement(_TextListItem.TextListItem, null, "Morbi eu nulla lobortis, lobortis est in, fringilla felis."))), _react["default"].createElement(_TextListItem.TextListItem, null, "Ut non enim metus.")), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.h3
  }, "Third level"), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.p
  }, "Quisque ante lacus, malesuada ac auctor vitae, congue", ' ', _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.a,
    href: "#"
  }, "non ante"), ". Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus."), _react["default"].createElement(_TextList.TextList, {
    component: _TextList.TextListVariants.ol
  }, _react["default"].createElement(_TextListItem.TextListItem, null, "Donec blandit a lorem id convallis."), _react["default"].createElement(_TextListItem.TextListItem, null, "Cras gravida arcu at diam gravida gravida."), _react["default"].createElement(_TextListItem.TextListItem, null, "Integer in volutpat libero."), _react["default"].createElement(_TextListItem.TextListItem, null, "Donec a diam tellus."), _react["default"].createElement(_TextListItem.TextListItem, null, "Aenean nec tortor orci."), _react["default"].createElement(_TextListItem.TextListItem, null, "Quisque aliquam cursus urna, non bibendum massa viverra eget."), _react["default"].createElement(_TextListItem.TextListItem, null, "Vivamus maximus ultricies pulvinar.")), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.blockquote
  }, "Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis."), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.p
  }, "Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et ", _react["default"].createElement("em", null, "justo sodales"), " elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie."), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.p
  }, "Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo."), _react["default"].createElement(_TextList.TextList, {
    component: _TextList.TextListVariants.dl
  }, _react["default"].createElement(_TextListItem.TextListItem, {
    component: _TextListItem.TextListItemVariants.dt
  }, "Web"), _react["default"].createElement(_TextListItem.TextListItem, {
    component: _TextListItem.TextListItemVariants.dd
  }, "The part of the Internet that contains websites and web pages"), _react["default"].createElement(_TextListItem.TextListItem, {
    component: _TextListItem.TextListItemVariants.dt
  }, "HTML"), _react["default"].createElement(_TextListItem.TextListItem, {
    component: _TextListItem.TextListItemVariants.dd
  }, "A markup language for creating web pages"), _react["default"].createElement(_TextListItem.TextListItem, {
    component: _TextListItem.TextListItemVariants.dt
  }, "CSS"), _react["default"].createElement(_TextListItem.TextListItem, {
    component: _TextListItem.TextListItemVariants.dd
  }, "A technology to make HTML look better")), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.p
  }, "Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante."), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.h4
  }, "Fourth level"), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.p
  }, "Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur."), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.p
  }, "Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien."), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.small
  }, "Sometimes you need small text to display things like date created"), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.p
  }, "Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque."), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.h5
  }, "Fifth level"), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.p
  }, "Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio."), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.h6
  }, "Sixth level"), _react["default"].createElement(_Text.Text, {
    component: _Text.TextVariants.p
  }, "Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.")));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Text.test.js.map