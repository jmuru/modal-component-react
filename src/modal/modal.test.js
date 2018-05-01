import React from 'react';
import TestRenderer from 'react-test-renderer';
import Modal from './modal'

describe('Modal', () => {
    test('should match snapshot when body is a string', () => {
        const modal = TestRenderer.create(<Modal title={'title'} subtitle={'subtitle'} modalBody={'owdfhlosdfhlsdhflsdhflsh'} />);
        const modalJSON = modal.toJSON();
        expect(modalJSON).toMatchSnapshot();
    });

    test('should match snapshot when body is a html element', () => {
        const modal = TestRenderer.create(<Modal title={'title'} subtitle={'subtitle'} modalBody={<div>hello world</div>} />);
        const modalJSON = modal.toJSON();
        expect(modalJSON).toMatchSnapshot();
    });
});
