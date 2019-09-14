import React from 'react';
import Tree from 'react-animated-tree';
import './ItemsHomeView.css'

class ItemsHomeView extends React.Component {
  render() {
    return (
      <div>
        <Tree content="Camping">
          <p class="small">Ez-up</p>
          <p class="small">Baby wipes</p>
        </Tree>
        <Tree content="Fun stuff">
          <p class="small">Finger lights</p>
          <p class="small">Smoke machine</p>
        </Tree>
      </div>
    );
  }
}

export default ItemsHomeView;