import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_item';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Item extends React.PureComponent<Props, {}> { 
  render() {
    return (
     <div className="Item">
      <h1>{this.props.title}</h1>
      <h2>{this.props.description}</h2> 
      <p>${this.props.price}</p>
     <p> {this.props.stock != '0' ? `on stock:${this.props.stock}` : `stock empty` }</p>
     </div>
    );
  }
}
