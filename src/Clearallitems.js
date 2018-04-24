import React from 'react';

class ClearAllItems extends React.Component {
    render() {
        return <button className="clearAllItems" onClick={this.props.removeDone}>Ta bort alla checkade</button>
    }
}

export default ClearAllItems;