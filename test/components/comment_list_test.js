import {renderComponent, expect} from '../test_helper'
import CommentList from '../../src/components/comment_list'

describe('CommentList', ()=> {
    let component;
    beforeEach(()=> {
        const props = {comments: ['New Comment', 'Other New Comment']};
        component = renderComponent(CommentList, null, props)
    });
    it('shows a comment in an LI', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', ()=> {
        //specific li
        expect(component.find('li')).to.contain('New Comment');
        //inside container div
        expect(component).to.contain('Other New Comment');
    });
});
