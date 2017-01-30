import React from 'react';
// import 'react-toolbox/lib/commons.scss';           // Import common styles
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import

import { List, ListItem, ListCheckbox, ListDivider, ListSubHeader, Chip } from 'react-toolbox';
import FontIcon from 'react-toolbox/lib/font_icon';
import './alarms_styles.css';

let errorStyle = {
	color: "red"
};
errorStyle["textAlign"] = "center";

let itemStyle = {}
itemStyle["background-color"] = "red";
itemStyle["color"] = "yellow";
itemStyle["text-align"] = "center";

const Timestamp = () => {
	return (
		<div style={{color: "red", "textAlign": "center"}}>
			<span style={{fontSize: "1.2rem"}}>31/01/2017</span><br /><span style={{fontSize: "1.4rem"}}>13:04:34</span>
		</div>
	);
}
const AlarmStatus = () => { 
	return (
		<div style={errorStyle} >
			<FontIcon value='error' /><br />
			<span>ACTIVE</span>
		</div>
	); 
};

const NumAlarms = () => {
	return (<Chip>3</Chip>);
};

class ListTest extends React.Component {
  state = {
    checkbox: false
  };

  handleCheckboxChange = () => {
    this.setState({checkbox: !this.state.checkbox});
  };

  render () {
    return (
      <List selectable ripple>
        <ListSubHeader caption='Errors' />
        <ListItem
          _avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
          leftActions={[<Timestamp key={3873287975}/>,<AlarmStatus key={232423} />]}
          caption='Temperature too high'
          legend="This typically happen when the heating is left on for too long..."
          _rightIcon='star'
          className='error'

          rightActions={[<NumAlarms key={3873984758435}/>, <Button disabled icon='checked' label='Ack' raised primary key={32768732} onMouseUp={() => { console.log("clicked!!!")} }/>]}
        />
        <ListSubHeader caption='Warnings' />
        <ListItem
          avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
          caption='Ozymandias'
          legend='Adrian Veidt'
          rightIcon='star'
        />
        <ListItem
          avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
          caption='Rorschach'
          legend='Walter Joseph Kovacs'
          rightIcon='star'
        />
        <ListSubHeader caption='Configuration' />
        <ListCheckbox
          caption='Notify new comics'
          checked={this.state.checkbox}
          legend='You will receive a notification when a new one is published'
          onChange={this.handleCheckboxChange}
        />
        <ListDivider />
        <ListItem caption='Contact the publisher' leftIcon='send' />
        <ListItem caption='Remove this publication' leftIcon='delete' />
      </List>
    );
  }

}

const App = () => (
  <div>
    <PurpleAppBar />
    <section style={{ padding: 20 }}>
      <SuccessButton label='Success' primary raised />
      <Button label='Primary Button' primary />
      <ListTest />
    </section>
  </div>
);

export default App;
