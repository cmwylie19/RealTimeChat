import React from 'react';
import { mount } from 'enzyme';
import { TextContent } from './TextContent';
import { Text, TextVariants } from './Text';
import { TextList, TextListVariants } from './TextList';
import { TextListItem, TextListItemVariants } from './TextListItem';
test('Text example should match snapshot', () => {
  const view = mount(React.createElement(TextContent, null, React.createElement(Text, {
    component: TextVariants.h1
  }, "Hello World"), React.createElement(Text, {
    component: TextVariants.p
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!"), React.createElement(Text, {
    component: TextVariants.h2
  }, "Second level"), React.createElement(Text, {
    component: TextVariants.p
  }, "Curabitur accumsan turpis pharetra ", React.createElement("strong", null, "augue tincidunt"), " blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl."), React.createElement(TextList, null, React.createElement(TextListItem, null, "In fermentum leo eu lectus mollis, quis dictum mi aliquet."), React.createElement(TextListItem, null, "Morbi eu nulla lobortis, lobortis est in, fringilla felis."), React.createElement(TextListItem, null, "Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.", React.createElement(TextList, null, React.createElement(TextListItem, null, "In fermentum leo eu lectus mollis, quis dictum mi aliquet."), React.createElement(TextListItem, null, "Morbi eu nulla lobortis, lobortis est in, fringilla felis."))), React.createElement(TextListItem, null, "Ut non enim metus.")), React.createElement(Text, {
    component: TextVariants.h3
  }, "Third level"), React.createElement(Text, {
    component: TextVariants.p
  }, "Quisque ante lacus, malesuada ac auctor vitae, congue", ' ', React.createElement(Text, {
    component: TextVariants.a,
    href: "#"
  }, "non ante"), ". Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus."), React.createElement(TextList, {
    component: TextListVariants.ol
  }, React.createElement(TextListItem, null, "Donec blandit a lorem id convallis."), React.createElement(TextListItem, null, "Cras gravida arcu at diam gravida gravida."), React.createElement(TextListItem, null, "Integer in volutpat libero."), React.createElement(TextListItem, null, "Donec a diam tellus."), React.createElement(TextListItem, null, "Aenean nec tortor orci."), React.createElement(TextListItem, null, "Quisque aliquam cursus urna, non bibendum massa viverra eget."), React.createElement(TextListItem, null, "Vivamus maximus ultricies pulvinar.")), React.createElement(Text, {
    component: TextVariants.blockquote
  }, "Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis."), React.createElement(Text, {
    component: TextVariants.p
  }, "Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et ", React.createElement("em", null, "justo sodales"), " elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie."), React.createElement(Text, {
    component: TextVariants.p
  }, "Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo."), React.createElement(TextList, {
    component: TextListVariants.dl
  }, React.createElement(TextListItem, {
    component: TextListItemVariants.dt
  }, "Web"), React.createElement(TextListItem, {
    component: TextListItemVariants.dd
  }, "The part of the Internet that contains websites and web pages"), React.createElement(TextListItem, {
    component: TextListItemVariants.dt
  }, "HTML"), React.createElement(TextListItem, {
    component: TextListItemVariants.dd
  }, "A markup language for creating web pages"), React.createElement(TextListItem, {
    component: TextListItemVariants.dt
  }, "CSS"), React.createElement(TextListItem, {
    component: TextListItemVariants.dd
  }, "A technology to make HTML look better")), React.createElement(Text, {
    component: TextVariants.p
  }, "Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante."), React.createElement(Text, {
    component: TextVariants.h4
  }, "Fourth level"), React.createElement(Text, {
    component: TextVariants.p
  }, "Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur."), React.createElement(Text, {
    component: TextVariants.p
  }, "Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien."), React.createElement(Text, {
    component: TextVariants.small
  }, "Sometimes you need small text to display things like date created"), React.createElement(Text, {
    component: TextVariants.p
  }, "Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque."), React.createElement(Text, {
    component: TextVariants.h5
  }, "Fifth level"), React.createElement(Text, {
    component: TextVariants.p
  }, "Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio."), React.createElement(Text, {
    component: TextVariants.h6
  }, "Sixth level"), React.createElement(Text, {
    component: TextVariants.p
  }, "Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.")));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Text.test.js.map