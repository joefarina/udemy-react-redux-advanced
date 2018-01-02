import React, { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment_list'
import Header from './Header'

// export default class App extends Component {
//   render() {
//     return (<div>
//           <CommentBox/>
//           <CommentList/>
//         </div>
//     );
//   }
// }
//renders components for the first 3 sections of the tutorial


export default class App extends Component {
  render() {
    return (<div>
      <Header />
      {this.props.children}
    </div>)
  }
}