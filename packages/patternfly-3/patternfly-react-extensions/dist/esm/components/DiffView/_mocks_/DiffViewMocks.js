import React from 'react';

export var diffMock = {
  oldText: 'hello friend',
  newText: 'hello there friend',
  viewType: 'split',
  emptyState: React.createElement(
    'div',
    null,
    'empty'
  )
};

export var patchMock = {
  viewType: 'unified',
  patch: '---',
  emptyState: React.createElement(
    'div',
    null,
    'empty'
  )
};

export var emptyState = {
  oldText: 'hello friend',
  newText: 'hello friend',
  viewType: 'split',
  emptyState: React.createElement(
    'div',
    null,
    'empty'
  )
};