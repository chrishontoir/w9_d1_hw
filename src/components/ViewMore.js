import React, {Component} from 'react';

class ViewMore extends Component {

  render(){
    return(
      <div className="view-more">
        <a href={this.props.link}>View more upcoming releases >> </a>
      </div>
    )
  }
}

export default ViewMore;
