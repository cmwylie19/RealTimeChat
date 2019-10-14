"use strict";
exports.__esModule = true;
/* eslint-disable no-console */
var React = require("react");
exports.columns = [
    { title: 'Header cell' },
    'Branches',
    { title: 'Pull requests' },
    'Workspaces',
    {
        title: 'Last Commit'
    }
];
exports.rows = [
    {
        cells: ['one', 'two', 'three', 'four', 'five']
    },
    {
        cells: ['one', 'two', 'three', 'four', 'five']
    },
    {
        cells: ['one', 'two', 'three', 'four', 'five']
    },
    {
        cells: ['one', 'two', 'three', 'four', 'five']
    },
    {
        cells: ['one', 'two', 'three', 'four', 'five']
    },
    {
        cells: ['one', 'two', 'three', 'four', 'five']
    },
    {
        cells: ['one', 'two', 'three', 'four', 'five']
    },
    {
        cells: ['one', 'two', 'three', 'four', 'five']
    },
    {
        cells: ['one', 'two', 'three', 'four', 'five']
    }
];
exports.actions = [
    {
        title: 'Some action',
        onClick: function (_a, _b) {
            var event = _a.event;
            var rowId = _b.rowId;
            // tslint:disable-next-line:no-console
            return console.log('clicked on Some action, on row: ', rowId);
        }
    },
    {
        title: <div>Another action</div>,
        onClick: function (_a, _b) {
            var event = _a.event;
            var rowId = _b.rowId;
            // tslint:disable-next-line:no-console
            return console.log('clicked on Another action, on row: ', rowId);
        }
    },
    {
        isSeparator: true
    },
    {
        title: 'Third action',
        onClick: function (_a, _b) {
            var event = _a.event;
            var rowId = _b.rowId;
            // tslint:disable-next-line:no-console
            return console.log('clicked on Third action, on row: ', rowId);
        }
    }
];
