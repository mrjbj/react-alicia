// Forum Header (Presentation Component)
import React from 'react';
//import styles from 'bootstrap'

function ForumHeader(props) {
    console.log(props.allAnswers);
    return (
        <nav className='navbar navbar-default'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <a className='navbar-brand' href="#top">
                        <b>React Forum Header</b>
                    </a>
                </div>
            </div>
        </nav>  
    );
}
export default ForumHeader;


/*  
    same functionality as above but packaged as a 
    a class component rather than component function
*/

/*

import { Component } from 'react';

class ForumHeader extends Component {
  render() {
    console.log(this.props.allAnswers);

      // this is JSX code to be transpiled into JavaScript
      // that's why "(" after return statement, so noautomatic semicolon
      // that's why ; after closing paren
    return React.createElement(
        'nav', 
        {className: 'navbar navbar-default'}
    );
  }
}

*/